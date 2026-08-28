import type { LocalizedString } from './index';

/**
 * Every chrome/UI string in one place. Add a key here, use `$t('key')` in a
 * component — no per-page translation files to keep in sync.
 */
export const UI = {
	'skip.content': { th: 'ข้ามไปยังเนื้อหาหลัก', en: 'Skip to main content' },

	'nav.home': { th: 'หน้าแรก', en: 'Home' },
	'nav.services': { th: 'บริการภาครัฐ', en: 'Services' },
	'nav.categories': { th: 'หมวดหมู่', en: 'Categories' },
	'nav.agencies': { th: 'หน่วยงาน', en: 'Agencies' },
	'nav.guides': { th: 'คู่มือการใช้งาน', en: 'Guides' },
	'nav.report': { th: 'รายงานการเข้าถึง', en: 'Access Report' },
	'nav.about': { th: 'เกี่ยวกับเรา', en: 'About' },
	'nav.search': { th: 'ค้นหา', en: 'Search' },
	'nav.menu': { th: 'เมนู', en: 'Menu' },
	'nav.close': { th: 'ปิด', en: 'Close' },
	'nav.primary': { th: 'เมนูหลัก', en: 'Primary navigation' },

	'a11y.title': { th: 'การเข้าถึง', en: 'Accessibility' },
	'a11y.open': { th: 'ตั้งค่าการเข้าถึง', en: 'Accessibility settings' },
	'a11y.fontSize': { th: 'ขนาดตัวอักษร', en: 'Text size' },
	'a11y.fontSm': { th: 'เล็ก', en: 'Small' },
	'a11y.fontMd': { th: 'ปกติ', en: 'Normal' },
	'a11y.fontLg': { th: 'ใหญ่', en: 'Large' },
	'a11y.colorMode': { th: 'โหมดสี', en: 'Colour mode' },
	'a11y.modeLight': { th: 'สว่าง', en: 'Light' },
	'a11y.modeDark': { th: 'มืด', en: 'Dark' },
	'a11y.modeContrast': { th: 'คอนทราสต์สูง', en: 'High contrast' },
	'a11y.reset': { th: 'คืนค่าเริ่มต้น', en: 'Reset' },
	'a11y.note': {
		th: 'ตั้งค่าตามมาตรฐานเว็บไซต์ภาครัฐ (WCAG 2.1 ระดับ AA) และจะถูกจดจำไว้ในเครื่องของคุณ',
		en: 'Follows the Thai Government Website Standard (WCAG 2.1 AA). Saved on your device only.'
	},

	'lang.switch': { th: 'เปลี่ยนภาษา', en: 'Change language' },
	'lang.th': { th: 'ไทย', en: 'Thai' },
	'lang.en': { th: 'อังกฤษ', en: 'English' },

	'search.label': { th: 'ค้นหาบริการภาครัฐ', en: 'Search government services' },
	'search.placeholder': {
		th: 'ลองพิมพ์ “เช็คค่าไฟ”, “งบการเงินบริษัท”, “ภาษี”…',
		en: 'Try “electricity bill”, “company financials”, “tax”…'
	},
	'search.submit': { th: 'ค้นหา', en: 'Search' },
	'search.results': { th: 'ผลการค้นหา', en: 'Results' },
	'search.noResults': {
		th: 'ไม่พบบริการที่ตรงกับคำค้นหา ลองใช้คำอื่นหรือเลือกจากหมวดหมู่ด้านล่าง',
		en: 'No services matched. Try another term, or browse the categories below.'
	},
	'search.count': { th: 'พบ {n} บริการ', en: '{n} services found' },
	'search.clear': { th: 'ล้างคำค้นหา', en: 'Clear search' },
	'search.hint': { th: 'พิมพ์เพื่อค้นหาแบบทันที', en: 'Type to search instantly' },

	'cta.open': { th: 'ไปยังเว็บไซต์ทางการ', en: 'Go to the official site' },
	'cta.openShort': { th: 'เปิดเว็บไซต์', en: 'Open website' },
	'cta.detail': { th: 'ดูรายละเอียด', en: 'View details' },
	'cta.all': { th: 'ดูทั้งหมด', en: 'View all' },
	'cta.back': { th: 'ย้อนกลับ', en: 'Back' },
	'cta.copy': { th: 'คัดลอกลิงก์', en: 'Copy link' },
	'cta.copied': { th: 'คัดลอกแล้ว', en: 'Copied' },
	'cta.share': { th: 'แชร์หน้านี้', en: 'Share this page' },

	'label.official': { th: 'เว็บไซต์ทางการ', en: 'Official website' },
	'label.agency': { th: 'หน่วยงานเจ้าของบริการ', en: 'Responsible agency' },
	'label.category': { th: 'หมวดหมู่', en: 'Category' },
	'label.updated': { th: 'ตรวจสอบล่าสุด', en: 'Last verified' },
	'label.onThisPage': { th: 'ในหน้านี้', en: 'On this page' },
	'label.related': { th: 'บริการที่เกี่ยวข้อง', en: 'Related services' },
	'label.faq': { th: 'คำถามที่พบบ่อย', en: 'Frequently asked questions' },
	'label.steps': { th: 'ขั้นตอนการใช้งาน', en: 'How to use it' },
	'label.features': { th: 'สิ่งที่ทำได้', en: 'What you can do' },
	'label.quickFacts': { th: 'ข้อมูลโดยย่อ', en: 'Quick facts' },
	'label.breadcrumb': { th: 'เส้นทางหน้าเว็บ', en: 'Breadcrumb' },
	'label.services': { th: 'บริการ', en: 'services' },
	'label.guides': { th: 'คู่มือ', en: 'guides' },
	'label.readingTime': { th: 'อ่าน {n} นาที', en: '{n} min read' },
	'label.tableOfContents': { th: 'สารบัญ', en: 'Contents' },

	'crawl.title': { th: 'สถานะการค้นเจอบน Google', en: 'Search-engine visibility' },
	'crawl.blocked': { th: 'ปิดกั้นเครื่องมือค้นหาทั้งเว็บไซต์', en: 'Search engines blocked site-wide' },
	'crawl.waf': { th: 'เซิร์ฟเวอร์ปฏิเสธการตรวจสอบ', en: 'Server refused our check' },
	'crawl.partial': { th: 'ปิดกั้นบางส่วน', en: 'Partially blocked' },
	'crawl.allowed': { th: 'เปิดให้ค้นเจอ', en: 'Open to search engines' },
	'crawl.none': { th: 'ไม่มีไฟล์ robots.txt', en: 'No robots.txt' },
	'crawl.unknown': { th: 'ตรวจสอบไม่ได้', en: 'Could not verify' },
	'crawl.blockedExplain': {
		th: 'เว็บไซต์นี้ประกาศใน robots.txt ว่าไม่ให้เครื่องมือค้นหาเก็บข้อมูลทั้งเว็บไซต์ ทำให้ค้นหาใน Google แทบไม่เจอ — หน้านี้จึงทำหน้าที่เป็นทางลัดที่ค้นเจอได้ และพาคุณไปยังเว็บไซต์ทางการโดยตรง',
		en: 'This site’s robots.txt tells search engines not to index any page, so it is effectively invisible on Google. This page acts as a findable shortcut that sends you straight to the official site.'
	},
	'crawl.wafExplain': {
		th: 'เว็บไซต์นี้ปฏิเสธคำขอจากเครื่องที่เราใช้ตรวจสอบ ทั้งเมื่อเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ และเมื่อเปิดด้วยเบราว์เซอร์ Chromium จริงที่ประมวลผลจาวาสคริปต์ครบถ้วน เราจึงอ่านไฟล์ robots.txt เพื่อยืนยันนโยบายที่แท้จริงไม่ได้ การปิดกั้นลักษณะนี้มักเป็นการกรองทราฟฟิกจากศูนย์ข้อมูล ซึ่งกระทบเครื่องมือเก็บถาวร เครื่องมือตรวจสอบ และผู้ช่วย AI ด้วย เราไม่สามารถสรุปได้ว่า Googlebot ตัวจริงถูกปิดกั้นหรือไม่',
		en: 'This site refuses our audit host both with a full browser request profile and with a real Chromium browser that runs the page’s JavaScript, so we cannot read its robots.txt to confirm the real policy. Blocks like this usually filter datacentre traffic in general, which also affects archiving tools, monitoring services and AI assistants. We cannot conclude from this whether the genuine Googlebot is blocked.'
	},
	'crawl.browserOnlyExplain': {
		th: 'เว็บไซต์นี้ตอบกลับตามปกติเมื่อเปิดด้วยเบราว์เซอร์จริง แต่ปฏิเสธคำขอจากโปรแกรมทั่วไปที่ไม่ได้ประมวลผลจาวาสคริปต์ คนที่ใช้เบราว์เซอร์จึงเข้าใช้งานได้ตามปกติ ส่วนบริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI ที่ประชาชนเริ่มใช้ค้นหาบริการภาครัฐ เข้าไม่ถึงเนื้อหานี้ เราตรวจสอบไฟล์ robots.txt ได้จากการเปิดด้วยเบราว์เซอร์จริงเท่านั้น',
		en: 'This site serves a real browser normally but refuses ordinary clients that do not run JavaScript. People browsing the site are unaffected, while web archives, third-party monitoring and the AI assistants people increasingly use to look up government services cannot reach the content at all. We could only read its robots.txt by opening the site in a real browser.'
	},
	'crawl.tlsInvalidExplain': {
		th: 'เว็บไซต์นี้ตอบกลับได้ก็ต่อเมื่อปิดการตรวจสอบใบรับรองความปลอดภัย เพราะใบรับรอง TLS ของเว็บไซต์ใช้การไม่ได้ เบราว์เซอร์ของประชาชนจะขึ้นหน้าเตือนความปลอดภัยก่อนเข้าเว็บไซต์ และเครื่องมือค้นหาตามปกติจะไม่เก็บข้อมูลหน้าเว็บที่ใบรับรองใช้ไม่ได้',
		en: 'This site only responds when certificate verification is switched off, because its TLS certificate does not validate. People reach it through a browser security warning, and search engines normally will not index pages served under a certificate that fails to validate.'
	},
	'crawl.wafUaOnly': {
		th: 'เว็บไซต์นี้ตอบกลับ 403 เฉพาะเมื่อคำขอระบุตัวเองเป็น Googlebot แต่ตอบปกติเมื่อใช้เบราว์เซอร์ทั่วไป ซึ่งเป็นพฤติกรรมมาตรฐานของระบบป้องกันบอตปลอม Googlebot ตัวจริงที่ยืนยันตัวตนด้วยการตรวจสอบ DNS ย้อนกลับจึงน่าจะเข้าถึงได้ตามปกติ',
		en: 'This site returns 403 only when a request identifies itself as Googlebot, and responds normally to an ordinary browser — standard anti-spoofing behaviour. The genuine Googlebot, which verifies itself by reverse DNS, is therefore likely to get through.'
	},
	'crawl.method': {
		th: 'วิธีตรวจสอบ',
		en: 'How we checked'
	},
	'kind.robots-disallow-all': { th: 'robots.txt ปิดกั้นทั้งเว็บไซต์', en: 'robots.txt blocks the whole site' },
	'kind.googlebot-exception': { th: 'เปิดให้เฉพาะ Google', en: 'Open to Google only' },
	'kind.js-challenge': { th: 'ต้องผ่านการตรวจสอบด้วยจาวาสคริปต์', en: 'JavaScript challenge required' },
	'kind.waf-rule': { th: 'ถูกปฏิเสธโดยไฟร์วอลล์', en: 'Refused by a firewall rule' },
	'kind.origin-403': { th: 'เซิร์ฟเวอร์ต้นทางปฏิเสธ', en: 'Origin server refused' },
	'kind.ua-spoof-guard': { th: 'ป้องกันบอตปลอม', en: 'Fake-crawler protection' },
	'kind.redirect-loop': { th: 'เปลี่ยนเส้นทางวนซ้ำไม่สิ้นสุด', en: 'Endless redirect loop' },
	'kind.browser-only': { th: 'เปิดให้เฉพาะเบราว์เซอร์จริง', en: 'Open to real browsers only' },
	'kind.tls-invalid': { th: 'ใบรับรองความปลอดภัยใช้การไม่ได้', en: 'Security certificate does not validate' },
	'kind.http-only': { th: 'ไม่มี HTTPS', en: 'No HTTPS' },
	'kind.no-robots': { th: 'ไม่มีไฟล์ robots.txt', en: 'No robots.txt' },
	'kind.html-not-robots': { th: 'robots.txt ตอบกลับเป็นหน้าเว็บ', en: 'robots.txt returns a web page' },
	'kind.dns-failure': { th: 'ชื่อโดเมนไม่มีอยู่ในระบบ DNS', en: 'Domain name does not resolve' },
	'kind.connection-failed': { th: 'เซิร์ฟเวอร์ไม่ตอบสนอง', en: 'Server does not respond' },
	'kind.server-error': { th: 'เซิร์ฟเวอร์ตอบกลับด้วยข้อผิดพลาด', en: 'Server answers with an error' },
	'kind.unreachable': { th: 'เชื่อมต่อไม่ได้', en: 'Could not connect' },
	'kind.partial': { th: 'ปิดกั้นบางเส้นทาง', en: 'Some paths disallowed' },
	'kind.allowed': { th: 'เปิดให้เก็บข้อมูลทั้งหมด', en: 'Fully crawlable' },

	'crawl.mechanism': { th: 'กลไกที่ตรวจพบ', en: 'Mechanism observed' },
	'crawl.jsChallengeExplain': {
		th: 'เว็บไซต์นี้ใช้หน้าท้าทายของ Cloudflare ที่ต้องประมวลผลจาวาสคริปต์ก่อนจึงจะเข้าถึงเนื้อหาได้ เบราว์เซอร์จริงผ่านได้ตามปกติ และบอตของเครื่องมือค้นหาที่ยืนยันตัวตนแล้วมักได้รับการยกเว้น แต่บริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI ที่ไม่ประมวลผลจาวาสคริปต์จะเข้าไม่ได้',
		en: 'This site uses a Cloudflare challenge that must be solved by running JavaScript before content is served. Real browsers pass it, and verified search-engine crawlers are normally exempted — but web archives, third-party monitoring and AI assistants that do not execute JavaScript cannot get through.'
	},
	'crawl.googlebotOnlyExplain': {
		th: 'ไฟล์ robots.txt ของเว็บไซต์นี้ปิดกั้นบอตทุกตัว แล้วเขียนข้อยกเว้นให้เฉพาะ Googlebot จึงยังค้นเจอผ่าน Google ได้ แต่เครื่องมือค้นหาอื่นและผู้ช่วย AI ถูกปฏิเสธทั้งหมด',
		en: 'This site’s robots.txt blocks every crawler and then writes an exception for Googlebot alone. It stays findable through Google while every other search engine and AI assistant is refused.'
	},
	'crawl.robotsSnippet': { th: 'เนื้อหาใน robots.txt', en: 'robots.txt contents' },
	'crawl.checkedOn': { th: 'ตรวจสอบเมื่อ {date}', en: 'Checked on {date}' },

	'disclaimer.short': {
		th: 'ThaiGov.co เป็นสารบัญอิสระ ไม่ใช่หน่วยงานราชการ และไม่มีความเกี่ยวข้องกับหน่วยงานที่กล่าวถึง',
		en: 'ThaiGov.co is an independent directory. It is not a government body and is not affiliated with the agencies listed.'
	},
	'disclaimer.long': {
		th: 'ThaiGov.co ไม่ใช่เว็บไซต์ของทางราชการ เราไม่รับส่งข้อมูลส่วนบุคคล ไม่รับชำระเงิน และไม่มีระบบล็อกอินใด ๆ ทุกธุรกรรมต้องทำบนเว็บไซต์ทางการของหน่วยงานเท่านั้น โปรดตรวจสอบชื่อโดเมนก่อนกรอกข้อมูลทุกครั้ง',
		en: 'ThaiGov.co is not a government website. We never collect personal data, take payments, or provide logins. All transactions must be completed on the agency’s own official website — always check the domain name before entering any information.'
	},
	'disclaimer.leaving': {
		th: 'คุณกำลังจะออกจาก ThaiGov.co ไปยังเว็บไซต์ทางการของหน่วยงาน',
		en: 'You are leaving ThaiGov.co for the agency’s official website'
	},

	'footer.about': { th: 'เกี่ยวกับ ThaiGov.co', en: 'About ThaiGov.co' },
	'footer.explore': { th: 'สำรวจ', en: 'Explore' },
	'footer.legal': { th: 'ข้อกำหนด', en: 'Legal' },
	'footer.privacy': { th: 'นโยบายความเป็นส่วนตัว', en: 'Privacy policy' },
	'footer.terms': { th: 'เงื่อนไขการใช้งาน', en: 'Terms of use' },
	'footer.accessibility': { th: 'แถลงการณ์การเข้าถึง', en: 'Accessibility statement' },
	'footer.source': { th: 'ซอร์สโค้ดบน GitHub', en: 'Source on GitHub' },
	'footer.rights': { th: 'เนื้อหาเผยแพร่ภายใต้สัญญาอนุญาต CC BY 4.0', en: 'Content licensed under CC BY 4.0' },
	'footer.updated': { th: 'ปรับปรุงข้อมูลล่าสุด', en: 'Data last updated' },

	'home.heroBadge': { th: 'สารบัญบริการภาครัฐไทย', en: 'Thai government services directory' },
	'home.stats.services': { th: 'บริการที่รวบรวม', en: 'Services indexed' },
	'home.stats.agencies': { th: 'หน่วยงาน', en: 'Agencies' },
	'home.stats.blocked': { th: 'เว็บไซต์ที่ Google เข้าไม่ถึง', en: 'Sites Google can’t reach' },
	'home.stats.audited': { th: 'โดเมนที่ตรวจสอบแล้ว', en: 'Domains audited' },
	'home.featured': { th: 'บริการที่คนค้นหามากที่สุด', en: 'Most-searched services' },
	'home.hidden': { th: 'บริการที่ Google หาไม่เจอ', en: 'Services Google can’t find' },
	'home.hiddenLead': {
		th: 'หน่วยงานเหล่านี้ปิดกั้นเครื่องมือค้นหาไว้ ทำให้ประชาชนหาไม่เจอ เราจึงทำหน้าอธิบายที่ค้นเจอได้ พร้อมลิงก์ตรงไปยังของจริง',
		en: 'These agencies block search engines, so citizens cannot find them. We publish findable explainers that link straight to the real thing.'
	},
	'home.browse': { th: 'เลือกดูตามหมวดหมู่', en: 'Browse by category' },
	'home.guides': { th: 'คู่มือใช้งานทีละขั้นตอน', en: 'Step-by-step guides' },

	'error.404.title': { th: 'ไม่พบหน้าที่คุณต้องการ', en: 'Page not found' },
	'error.404.body': {
		th: 'หน้าที่คุณเปิดอาจถูกย้ายหรือไม่มีอยู่แล้ว ลองค้นหาบริการที่ต้องการ หรือกลับไปที่หน้าแรก',
		en: 'The page may have moved or never existed. Try searching for the service you need, or head back home.'
	},
	'error.generic.title': { th: 'เกิดข้อผิดพลาด', en: 'Something went wrong' },
	'error.home': { th: 'กลับหน้าแรก', en: 'Back to home' }
} as const satisfies Record<string, LocalizedString>;

export type UIKey = keyof typeof UI;
