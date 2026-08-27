# build-assets

Inputs used by `scripts/build.mjs`. Not served to visitors.

- `fonts/Prompt-Regular.ttf`, `fonts/Prompt-SemiBold.ttf` — used by satori to
  render Open Graph images. Prompt is licensed under the SIL Open Font License
  1.1 (© Cadson Demak), which permits redistribution.
- `domains.txt` — the domain list swept by `npm run audit:robots`. One host per
  line; `#` comments allowed. Add a domain here to include it in the next audit.
