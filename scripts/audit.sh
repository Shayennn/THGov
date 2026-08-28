#!/usr/bin/env bash
# Sweeps Thai government domains and emits one TSV row per host.
#
#   scripts/audit.sh [domain-file] [concurrency] > audit.tsv
#   scripts/audit.sh --hosts a.go.th b.go.th
#
# Columns:
#   host  robots_code  browser_code  bot_code  server  cf_mitigated  robots_body_file  browser_title
#
# Sending only a Chrome User-Agent is not enough — WAFs fingerprint the whole
# request — so we send the client hints, fetch-metadata and Accept headers a
# real Chrome navigation sends. robots.txt is fetched with the same browser
# profile (its content is user-agent independent; Google's rules are applied to
# the file afterwards), then the homepage is fetched again as Googlebot to spot
# sites that refuse a self-declared crawler while serving browsers normally.
set -uo pipefail

UA_CHROME='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
UA_BOT='Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
TIMEOUT="${AUDIT_TIMEOUT:-30}"
OUTDIR="${AUDIT_OUTDIR:-$(mktemp -d -t thaigov-audit-XXXXXX)}"
mkdir -p "$OUTDIR/robots"

chrome_headers=(
  -H "User-Agent: $UA_CHROME"
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
  -H 'Accept-Language: th,en-US;q=0.9,en;q=0.8'
  -H 'sec-ch-ua: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"'
  -H 'sec-ch-ua-mobile: ?0'
  -H 'sec-ch-ua-platform: "Windows"'
  -H 'Sec-Fetch-Dest: document'
  -H 'Sec-Fetch-Mode: navigate'
  -H 'Sec-Fetch-Site: none'
  -H 'Sec-Fetch-User: ?1'
  -H 'Upgrade-Insecure-Requests: 1'
)

probe_one() {
  local host="$1"
  case "$host" in *[!a-zA-Z0-9.-]*) return 0 ;; esac

  local rb="$OUTDIR/robots/$host.txt"
  local bh bb rcode bcode gcode server mitigated title
  bh=$(mktemp); bb=$(mktemp)

  # curl exits 47 when it hits --max-redirs. That is a redirect loop, which is a
  # finding in its own right — recording it as "no response" would hide it.
  local rc_status bc_status gc_status
  rcode=$(curl -sS --compressed -L --max-redirs 5 --max-time "$TIMEOUT" \
            "${chrome_headers[@]}" -o "$rb" -w '%{http_code}' \
            "https://$host/robots.txt" 2>/dev/null); rc_status=$?
  [[ $rc_status -eq 47 ]] && rcode=LOOP
  [[ $rc_status -ne 0 && $rc_status -ne 47 ]] && rcode=000

  bcode=$(curl -sS --compressed -L --max-redirs 5 --max-time "$TIMEOUT" \
            "${chrome_headers[@]}" -D "$bh" -o "$bb" -w '%{http_code}' \
            "https://$host/" 2>/dev/null); bc_status=$?
  [[ $bc_status -eq 47 ]] && bcode=LOOP
  [[ $bc_status -ne 0 && $bc_status -ne 47 ]] && bcode=000

  gcode=$(curl -sS --compressed -L --max-redirs 5 --max-time "$TIMEOUT" \
            -H "User-Agent: $UA_BOT" -H 'Accept: text/html,*/*;q=0.8' \
            -o /dev/null -w '%{http_code}' \
            "https://$host/" 2>/dev/null); gc_status=$?
  [[ $gc_status -eq 47 ]] && gcode=LOOP
  [[ $gc_status -ne 0 && $gc_status -ne 47 ]] && gcode=000

  server=$(grep -i '^server:' "$bh" 2>/dev/null | tail -1 | cut -d: -f2- | tr -d '\r' | xargs)
  mitigated=$(grep -i '^cf-mitigated:' "$bh" 2>/dev/null | tail -1 | cut -d: -f2- | tr -d '\r' | xargs)
  title=$(grep -oiPm1 '(?<=<title>)[^<]*' "$bb" 2>/dev/null | tr -d '\r\n\t' | cut -c1-80)

  printf '%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n' \
    "$host" "${rcode:-000}" "${bcode:-000}" "${gcode:-000}" \
    "${server:-}" "${mitigated:-}" "$rb" "${title:-}"

  rm -f "$bh" "$bb"
}
export -f probe_one
export UA_CHROME UA_BOT TIMEOUT OUTDIR

if [[ "${1:-}" == "--hosts" ]]; then
  shift
  printf '%s\n' "$@" > "$OUTDIR/hosts.txt"
  CONC="${AUDIT_CONCURRENCY:-6}"
else
  DOMAIN_FILE="${1:-$(dirname "$0")/../build-assets/domains.txt}"
  CONC="${2:-${AUDIT_CONCURRENCY:-12}}"
  grep -vE '^\s*(#|$)' "$DOMAIN_FILE" | tr -d '\r' | sort -u > "$OUTDIR/hosts.txt"
fi

echo "# outdir=$OUTDIR" >&2
echo "# $(wc -l < "$OUTDIR/hosts.txt") hosts, concurrency $CONC" >&2

# `bash -c` per host keeps the chrome_headers array intact under xargs.
xargs -P "$CONC" -I{} bash -c 'probe_one "$@"' _ {} < "$OUTDIR/hosts.txt"
