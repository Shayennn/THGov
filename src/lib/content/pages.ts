import type { Block } from './types';
import type { LocalizedString } from '$lib/i18n';

export interface StaticPage {
	slug: string;
	title: LocalizedString;
	deck: LocalizedString;
	summary: LocalizedString;
	body: Block[];
	updated: string;
}

const UPDATED = '2026-08-28';

export const PAGES: Record<string, StaticPage> = {
	about: {
		slug: 'about',
		title: { th: 'เกี่ยวกับ THGov', en: 'About THGov' },
		deck: {
			th: 'สารบัญอิสระที่ทำให้บริการภาครัฐไทยค้นเจอได้ แล้วส่งคุณต่อไปยังเว็บไซต์ทางการ',
			en: 'An independent directory that makes Thai government services findable, then hands you to the official site.'
		},
		summary: {
			th: 'THGov คือสารบัญอิสระที่รวบรวมบริการออนไลน์ของหน่วยงานรัฐไทย ไม่ใช่เว็บไซต์ราชการ ไม่รับข้อมูลส่วนบุคคล และไม่รับชำระเงิน',
			en: 'THGov is an independent directory of Thai government online services. It is not a government website, collects no personal data and takes no payments.'
		},
		updated: UPDATED,
		body: [
			{ type: 'h2', text: { th: 'ปัญหาที่เราพยายามแก้', en: 'The problem we are trying to fix' } },
			{
				type: 'p',
				text: {
					th: 'บริการออนไลน์ของภาครัฐไทยมีอยู่จริงและใช้งานได้ดีกว่าที่หลายคนคิด แต่ประชาชนจำนวนมากหาไม่เจอ สาเหตุมีสองข้อที่ทับซ้อนกัน ข้อแรกคือชื่อระบบราชการไม่ตรงกับคำที่คนใช้ค้นหา ไม่มีใครพิมพ์ว่า “ระบบการให้บริการธุรกรรมทางอิเล็กทรอนิกส์” แต่พิมพ์ว่า “เช็คค่าไฟ” หรือ “ต่อภาษีรถ”',
					en: 'Thailand’s government online services exist, and many work better than people expect — yet citizens routinely cannot find them. Two problems overlap. The first is naming: nobody types the formal system name into a search box. They type “check my electricity bill” or “renew road tax”.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'ข้อที่สองร้ายแรงกว่า คือเว็บไซต์ราชการจำนวนหนึ่งปิดกั้นเครื่องมือค้นหาเอาไว้เอง บางแห่งประกาศในไฟล์ robots.txt ว่าห้ามเก็บข้อมูลทุกหน้า บางแห่งตั้งค่าเซิร์ฟเวอร์ให้ปฏิเสธบอตของ Google ด้วยรหัส 403 ผลลัพธ์คือข้อมูลสาธารณะที่กฎหมายกำหนดให้เปิดเผย กลับค้นหาไม่เจอในทางปฏิบัติ',
					en: 'The second problem is more serious: a number of government sites block search engines themselves. Some declare in robots.txt that no page may be crawled; others configure their servers to refuse Google’s crawler with a 403. The result is public information — disclosure that the law requires — which in practice cannot be found.'
				}
			},
			{ type: 'h2', text: { th: 'สิ่งที่ THGov ทำ', en: 'What THGov does' } },
			{
				type: 'ul',
				items: [
					{
						th: 'เขียนคำอธิบายบริการภาครัฐด้วยภาษาที่คนใช้จริง ทั้งภาษาไทยและภาษาอังกฤษ',
						en: 'Explains each government service in the words people actually use, in both Thai and English.'
					},
					{
						th: 'ตรวจสอบไฟล์ robots.txt และการตอบสนองต่อบอตของเครื่องมือค้นหา แล้วรายงานผลอย่างตรงไปตรงมา',
						en: 'Audits each site’s robots.txt and its response to search-engine crawlers, and reports the result plainly.'
					},
					{
						th: 'ส่งผู้ใช้ไปยังเว็บไซต์ทางการของหน่วยงานโดยตรง โดยไม่แทรกตัวกลางใด ๆ',
						en: 'Sends people directly to the agency’s own official website, with no intermediary in between.'
					},
					{
						th: 'เผยแพร่ซอร์สโค้ดและวิธีตรวจสอบทั้งหมดแบบเปิด เพื่อให้ใครก็ตรวจซ้ำได้',
						en: 'Publishes its source code and audit method openly, so anyone can reproduce the checks.'
					}
				]
			},
			{ type: 'h2', text: { th: 'สิ่งที่ THGov ไม่ทำ', en: 'What THGov does not do' } },
			{
				type: 'callout',
				tone: 'danger',
				title: { th: 'เราไม่ใช่หน่วยงานราชการ', en: 'We are not a government body' },
				text: {
					th: 'THGov ไม่ได้เป็นส่วนหนึ่งของรัฐบาลไทย ไม่มีความเกี่ยวข้องกับหน่วยงานที่ปรากฏในเว็บไซต์นี้ และไม่ได้รับมอบหมายจากหน่วยงานใด เราไม่รับคำร้อง ไม่ออกเอกสาร ไม่รับชำระเงิน และไม่มีระบบล็อกอิน หากมีเว็บไซต์ใดอ้างชื่อ THGov เพื่อขอข้อมูลส่วนตัวหรือเงิน นั่นคือการหลอกลวง',
					en: 'THGov is not part of the Thai government, is not affiliated with any agency listed here, and acts on no agency’s instruction. We accept no applications, issue no documents, take no payments and operate no login. Any site using the THGov name to request personal data or money is fraudulent.'
				}
			},
			{ type: 'h2', text: { th: 'วิธีตรวจสอบของเรา', en: 'How we audit' } },
			{
				type: 'p',
				text: {
					th: 'เราเรียกไฟล์ robots.txt ของแต่ละโดเมนโดยตรง แล้วอ่านกฎในกลุ่ม User-agent: * ว่ามีบรรทัด Disallow: / หรือไม่ จากนั้นตรวจซ้ำด้วยการเรียกหน้าแรกและไฟล์ robots.txt โดยใช้ User-Agent ของ Googlebot เพื่อแยกแยะระหว่างเว็บไซต์ที่ปิดกั้นเฉพาะบอตทั่วไป กับเว็บไซต์ที่ปิดกั้น Google จริง ๆ',
					en: 'We request each domain’s robots.txt directly and read the rules in its `User-agent: *` group, checking for a `Disallow: /` line. We then re-test the homepage and robots.txt using Googlebot’s user-agent, to separate sites that merely block generic bots from those that genuinely block Google.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'ผลการตรวจสอบถูกบันทึกพร้อมวันที่และข้อความจริงที่ได้รับกลับมา และแสดงไว้บนหน้าของบริการนั้น ๆ เราไม่สรุปแทนหน่วยงาน และไม่กล่าวหาว่าการปิดกั้นเกิดจากเจตนาใด เพราะหลายกรณีเป็นผลข้างเคียงของการตั้งค่าระบบป้องกันการโจมตี',
					en: 'Each result is recorded with its date and the actual response received, and shown on that service’s page. We do not speak for the agency or ascribe intent to the block — in many cases it is a side effect of a security configuration rather than a decision to hide anything.'
				}
			},
			{ type: 'h2', text: { th: 'ติดต่อและแก้ไขข้อมูล', en: 'Contact and corrections' } },
			{
				type: 'p',
				text: {
					th: 'หากคุณพบข้อมูลที่ไม่ถูกต้อง ลิงก์ที่ใช้งานไม่ได้ หรือเป็นเจ้าหน้าที่ของหน่วยงานที่ต้องการให้แก้ไขหรือถอดข้อมูลออก โปรดติดต่อเราได้ทางอีเมล หรือเปิดประเด็นในที่เก็บซอร์สโค้ดบน GitHub เราจะแก้ไขให้เร็วที่สุด',
					en: 'If you find an inaccuracy or a broken link, or you work for one of these agencies and want something corrected or removed, contact us by email or open an issue in the GitHub repository. We will fix it as quickly as we can.'
				}
			}
		]
	},

	privacy: {
		slug: 'privacy',
		title: { th: 'นโยบายความเป็นส่วนตัว', en: 'Privacy policy' },
		deck: {
			th: 'THGov เป็นเว็บไซต์สถิต ไม่เก็บข้อมูลส่วนบุคคล และไม่ใช้คุกกี้เพื่อการติดตาม',
			en: 'THGov is a static website. It stores no personal data and sets no tracking cookies.'
		},
		summary: {
			th: 'นโยบายความเป็นส่วนตัวของ THGov ตามหลัก PDPA เว็บไซต์เป็นไฟล์สถิต ไม่มีบัญชีผู้ใช้ ไม่เก็บข้อมูลส่วนบุคคล และไม่ใช้คุกกี้ติดตามผู้ใช้',
			en: 'THGov’s privacy policy under Thailand’s PDPA. The site is fully static, has no user accounts, stores no personal data and uses no tracking cookies.'
		},
		updated: UPDATED,
		body: [
			{ type: 'h2', text: { th: 'สรุปสั้น ๆ', en: 'The short version' } },
			{
				type: 'p',
				text: {
					th: 'เว็บไซต์นี้ให้บริการเป็นไฟล์สถิตล้วน ไม่มีฐานข้อมูล ไม่มีระบบสมาชิก ไม่มีแบบฟอร์มรับข้อมูล และไม่มีการชำระเงิน เราจึงไม่เก็บ ไม่ประมวลผล และไม่ส่งต่อข้อมูลส่วนบุคคลของคุณให้ใคร',
					en: 'This site is served as static files. There is no database, no membership system, no data-entry form and no payment flow. We therefore collect, process and share no personal data about you.'
				}
			},
			{ type: 'h2', text: { th: 'ข้อมูลที่เก็บไว้ในเครื่องของคุณ', en: 'Data stored on your device' } },
			{
				type: 'p',
				text: {
					th: 'หากคุณปรับขนาดตัวอักษรหรือเปลี่ยนโหมดสีผ่านเมนูการเข้าถึง เราจะบันทึกค่านั้นไว้ใน localStorage ของเบราว์เซอร์คุณ ภายใต้คีย์ thgov:fontSize และ thgov:colorMode ค่าดังกล่าวอยู่ในเครื่องของคุณเท่านั้น ไม่ถูกส่งมายังเซิร์ฟเวอร์ และคุณลบได้เองด้วยการล้างข้อมูลเว็บไซต์ในเบราว์เซอร์',
					en: 'If you change the text size or colour mode from the accessibility menu, we save that choice in your browser’s localStorage under the keys `thgov:fontSize` and `thgov:colorMode`. It stays on your device, is never sent to a server, and you can remove it by clearing site data in your browser.'
				}
			},
			{ type: 'h2', text: { th: 'คุกกี้', en: 'Cookies' } },
			{
				type: 'p',
				text: {
					th: 'THGov ไม่ตั้งคุกกี้ใด ๆ และไม่ใช้เครื่องมือวิเคราะห์พฤติกรรมผู้ใช้ที่ระบุตัวบุคคล จึงไม่มีแบนเนอร์ขอความยินยอมคุกกี้บนเว็บไซต์นี้',
					en: 'THGov sets no cookies and runs no analytics that identify individuals — which is why you see no cookie-consent banner here.'
				}
			},
			{ type: 'h2', text: { th: 'บันทึกของผู้ให้บริการโฮสติ้ง', en: 'Hosting provider logs' } },
			{
				type: 'p',
				text: {
					th: 'เว็บไซต์นี้เผยแพร่ผ่าน Cloudflare Pages ซึ่งอาจบันทึกข้อมูลทางเทคนิคของคำขอ เช่น หมายเลขไอพี ประเภทเบราว์เซอร์ และเวลาที่เข้าถึง เพื่อความปลอดภัยและการให้บริการตามปกติ ข้อมูลส่วนนี้อยู่ภายใต้นโยบายของ Cloudflare ไม่ใช่ของเรา และเราไม่ได้เข้าถึงข้อมูลระดับบุคคลจากบันทึกดังกล่าว',
					en: 'The site is published through Cloudflare Pages, which may log technical request data such as IP address, browser type and access time for security and normal operation. That data falls under Cloudflare’s policy rather than ours, and we do not access individual-level records from it.'
				}
			},
			{ type: 'h2', text: { th: 'การไปยังเว็บไซต์อื่น', en: 'Leaving for other websites' } },
			{
				type: 'callout',
				tone: 'warn',
				text: {
					th: 'เมื่อคุณกดลิงก์ไปยังเว็บไซต์ของหน่วยงานรัฐ คุณจะออกจาก THGov ทันที และอยู่ภายใต้นโยบายความเป็นส่วนตัวของเว็บไซต์นั้นแทน โปรดอ่านนโยบายของหน่วยงานก่อนกรอกข้อมูลส่วนตัวใด ๆ',
					en: 'The moment you follow a link to an agency’s website you leave THGov and come under that site’s privacy policy instead. Read the agency’s policy before entering any personal information.'
				}
			},
			{ type: 'h2', text: { th: 'สิทธิของคุณตาม PDPA', en: 'Your rights under the PDPA' } },
			{
				type: 'p',
				text: {
					th: 'พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ให้สิทธิเจ้าของข้อมูลในการเข้าถึง แก้ไข ลบ และคัดค้านการประมวลผลข้อมูลส่วนบุคคลของตน เนื่องจาก THGov ไม่ได้เก็บข้อมูลส่วนบุคคลไว้เลย จึงไม่มีข้อมูลให้เข้าถึงหรือลบ หากคุณมีข้อสงสัย ติดต่อเราได้ตามช่องทางในหน้าเกี่ยวกับเรา',
					en: 'Thailand’s Personal Data Protection Act B.E. 2562 (2019) gives data subjects rights to access, correct, erase and object to processing of their personal data. Because THGov holds none, there is nothing to retrieve or erase. If you have questions, the contact details are on the About page.'
				}
			}
		]
	},

	terms: {
		slug: 'terms',
		title: { th: 'เงื่อนไขการใช้งาน', en: 'Terms of use' },
		deck: {
			th: 'ข้อมูลบน THGov เป็นข้อมูลอ้างอิงเพื่อการค้นหา ไม่ใช่คำแนะนำทางกฎหมายหรือประกาศของทางราชการ',
			en: 'THGov is a reference directory. Nothing here is legal advice or an official government notice.'
		},
		summary: {
			th: 'เงื่อนไขการใช้งาน THGov ข้อมูลเป็นการอ้างอิงเพื่อช่วยค้นหาบริการภาครัฐ ไม่ใช่ประกาศราชการ โปรดยืนยันข้อมูลกับเว็บไซต์ทางการเสมอ',
			en: 'Terms of use for THGov. The directory helps you find government services; it is not an official notice. Always confirm details on the agency’s own website.'
		},
		updated: UPDATED,
		body: [
			{ type: 'h2', text: { th: 'สถานะของเว็บไซต์นี้', en: 'What this website is' } },
			{
				type: 'p',
				text: {
					th: 'THGov เป็นโครงการอิสระที่จัดทำสารบัญบริการภาครัฐไทย ไม่ได้เป็นหน่วยงานของรัฐ ไม่ได้รับมอบอำนาจจากหน่วยงานใด และไม่ได้เป็นตัวแทนของหน่วยงานที่ปรากฏชื่อในเว็บไซต์ ชื่อหน่วยงานและชื่อระบบที่กล่าวถึงเป็นการอ้างอิงเพื่อการอธิบายเท่านั้น',
					en: 'THGov is an independent project that catalogues Thai government services. It is not a state body, holds no delegated authority, and does not represent any agency named here. Agency and system names appear for identification and explanation only.'
				}
			},
			{ type: 'h2', text: { th: 'ความถูกต้องของข้อมูล', en: 'Accuracy' } },
			{
				type: 'p',
				text: {
					th: 'เราพยายามให้ข้อมูลถูกต้องและเป็นปัจจุบัน แต่ระเบียบ อัตราค่าธรรมเนียม กำหนดเวลา และขั้นตอนของหน่วยงานรัฐเปลี่ยนแปลงได้ตลอดเวลา เราจึงหลีกเลี่ยงการระบุตัวเลขที่เปลี่ยนบ่อย และแนะนำให้ยืนยันรายละเอียดกับเว็บไซต์ทางการก่อนดำเนินการทุกครั้ง',
					en: 'We work to keep this accurate and current, but government rules, fees, deadlines and procedures change. We deliberately avoid quoting figures that move often, and we recommend confirming details on the official website before you act.'
				}
			},
			{
				type: 'callout',
				tone: 'warn',
				title: { th: 'ไม่ใช่คำแนะนำทางวิชาชีพ', en: 'Not professional advice' },
				text: {
					th: 'เนื้อหาบน THGov ไม่ใช่คำแนะนำทางกฎหมาย ภาษี การเงิน หรือการแพทย์ หากเรื่องของคุณมีผลผูกพันทางกฎหมายหรือมีมูลค่าสูง โปรดปรึกษาผู้เชี่ยวชาญหรือสอบถามหน่วยงานโดยตรง',
					en: 'Nothing here is legal, tax, financial or medical advice. If your situation is legally binding or financially significant, consult a professional or ask the agency directly.'
				}
			},
			{ type: 'h2', text: { th: 'ลิงก์ไปยังเว็บไซต์ภายนอก', en: 'External links' } },
			{
				type: 'p',
				text: {
					th: 'ลิงก์ทุกลิงก์ที่ชี้ออกจาก THGov นำไปยังเว็บไซต์ที่เราเชื่อว่าเป็นช่องทางทางการของหน่วยงานนั้น ณ วันที่ตรวจสอบ เราไม่ได้ควบคุมเนื้อหา ความปลอดภัย หรือความพร้อมใช้งานของเว็บไซต์ปลายทาง และไม่รับผิดชอบต่อความเสียหายที่เกิดจากการใช้งานเว็บไซต์เหล่านั้น',
					en: 'Every outbound link points to what we believe was the agency’s official channel on the date we checked. We do not control the destination’s content, security or availability, and we accept no liability for loss arising from its use.'
				}
			},
			{ type: 'h2', text: { th: 'ลิขสิทธิ์และการนำไปใช้', en: 'Copyright and reuse' } },
			{
				type: 'p',
				text: {
					th: 'เนื้อหาที่ THGov เขียนขึ้นเอง เผยแพร่ภายใต้สัญญาอนุญาต Creative Commons Attribution 4.0 คุณนำไปใช้ ดัดแปลง และเผยแพร่ต่อได้ โดยต้องอ้างอิงแหล่งที่มา ส่วนชื่อหน่วยงาน เครื่องหมายราชการ และเนื้อหาที่เป็นของหน่วยงานยังคงเป็นสิทธิของเจ้าของเดิม',
					en: 'Content written by THGov is published under Creative Commons Attribution 4.0 — reuse, adapt and redistribute it with credit. Agency names, official emblems and agency-owned content remain the property of their owners.'
				}
			},
			{ type: 'h2', text: { th: 'การเปลี่ยนแปลงเงื่อนไข', en: 'Changes to these terms' } },
			{
				type: 'p',
				text: {
					th: 'เราอาจปรับปรุงเงื่อนไขนี้เป็นครั้งคราว วันที่ปรับปรุงล่าสุดแสดงไว้ท้ายหน้า และประวัติการแก้ไขทั้งหมดดูได้จากที่เก็บซอร์สโค้ดบน GitHub',
					en: 'We may revise these terms from time to time. The last-updated date appears at the foot of this page, and the full revision history is visible in the GitHub repository.'
				}
			}
		]
	},

	accessibility: {
		slug: 'accessibility',
		title: { th: 'แถลงการณ์การเข้าถึง', en: 'Accessibility statement' },
		deck: {
			th: 'เราออกแบบ THGov ตามมาตรฐานเว็บไซต์ภาครัฐและแนวทาง WCAG 2.1 ระดับ AA',
			en: 'THGov is built to the Thai Government Website Standard and WCAG 2.1 Level AA.'
		},
		summary: {
			th: 'แถลงการณ์การเข้าถึงของ THGov ครอบคลุมการปรับขนาดตัวอักษร โหมดคอนทราสต์สูง การใช้งานด้วยแป้นพิมพ์ และการรองรับโปรแกรมอ่านหน้าจอ',
			en: 'THGov’s accessibility statement: text resizing, a high-contrast mode, full keyboard operation and screen-reader support.'
		},
		updated: UPDATED,
		body: [
			{ type: 'h2', text: { th: 'มาตรฐานที่เรายึดถือ', en: 'The standard we follow' } },
			{
				type: 'p',
				text: {
					th: 'THGov ออกแบบตามแนวทางมาตรฐานเว็บไซต์ภาครัฐของสำนักงานพัฒนารัฐบาลดิจิทัล (สพร.) ซึ่งอ้างอิงหลักเกณฑ์ Web Content Accessibility Guidelines (WCAG) 2.1 ระดับ AA แม้เราจะไม่ใช่หน่วยงานราชการ แต่เห็นว่าเว็บไซต์ที่พูดถึงบริการสาธารณะควรเข้าถึงได้ไม่แพ้กัน',
					en: 'THGov follows the Digital Government Development Agency’s Government Website Standard, which builds on the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. We are not a government body, but a site about public services should be no less accessible than one.'
				}
			},
			{ type: 'h2', text: { th: 'สิ่งที่ทำได้บนเว็บไซต์นี้', en: 'What you can do here' } },
			{
				type: 'ul',
				items: [
					{
						th: 'ปรับขนาดตัวอักษรได้สามระดับจากปุ่มการเข้าถึงบนแถบด้านบน โดยระบบจะจดจำค่าไว้ในเครื่องของคุณ',
						en: 'Switch between three text sizes from the accessibility button in the header; your choice is remembered on your device.'
					},
					{
						th: 'เลือกโหมดสว่าง โหมดมืด หรือโหมดคอนทราสต์สูงแบบพื้นดำตัวอักษรขาวและเส้นขอบสีเหลือง',
						en: 'Choose light, dark, or a high-contrast mode with black backgrounds, white text and yellow borders.'
					},
					{
						th: 'ใช้งานทุกส่วนด้วยแป้นพิมพ์อย่างเดียวได้ พร้อมกรอบโฟกัสที่มองเห็นชัดเจนทุกองค์ประกอบ',
						en: 'Operate every part of the site with the keyboard alone, with a clearly visible focus ring on every control.'
					},
					{
						th: 'ข้ามไปยังเนื้อหาหลักได้ทันทีด้วยลิงก์ลัดที่ปรากฏเมื่อกดปุ่ม Tab ครั้งแรก',
						en: 'Jump straight to the main content with the skip link that appears on your first Tab press.'
					},
					{
						th: 'เว็บไซต์เคารพการตั้งค่าลดการเคลื่อนไหวของระบบปฏิบัติการ และจะปิดแอนิเมชันให้อัตโนมัติ',
						en: 'The site honours your operating system’s reduced-motion setting and disables animation automatically.'
					}
				]
			},
			{ type: 'h2', text: { th: 'โครงสร้างและเทคนิค', en: 'Structure and technique' } },
			{
				type: 'p',
				text: {
					th: 'ทุกหน้าเป็น HTML ที่เรนเดอร์ล่วงหน้าแบบสถิต จึงอ่านได้แม้ปิดจาวาสคริปต์ เราใช้ลำดับหัวข้อที่ถูกต้องตั้งแต่ h1 ลงไป ใช้ landmark ของ HTML5 อย่าง header, nav, main และ footer และกำกับตารางด้วย th ที่มี scope เพื่อให้โปรแกรมอ่านหน้าจออ่านความสัมพันธ์ของข้อมูลได้ถูกต้อง',
					en: 'Every page is prerendered static HTML, so it still reads with JavaScript disabled. We use a correct heading order from h1 downward, HTML5 landmarks (`header`, `nav`, `main`, `footer`), and scoped table headers so screen readers announce data relationships correctly.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'ข้อความทั้งหมดใช้หน่วยแบบสัมพัทธ์ จึงขยายตามการตั้งค่าขนาดตัวอักษรของเบราว์เซอร์ได้ถึง 200% โดยเนื้อหาไม่ล้นหรือถูกตัดหาย และเราเลือกใช้ฟอนต์ Prompt ซึ่งออกแบบมาสำหรับภาษาไทยโดยเฉพาะ ทำให้สระและวรรณยุกต์วางตำแหน่งถูกต้องและอ่านง่าย',
					en: 'All text uses relative units, so it scales to 200% with your browser’s own zoom without content overflowing or being cut off. We use the Prompt typeface, designed for Thai, so vowels and tone marks sit correctly and read clearly.'
				}
			},
			{ type: 'h2', text: { th: 'ข้อจำกัดที่เรารู้', en: 'Known limitations' } },
			{
				type: 'p',
				text: {
					th: 'เนื้อหาที่ THGov เขียนเองผ่านการตรวจสอบตามแนวทางข้างต้น แต่เมื่อคุณกดลิงก์ออกไปยังเว็บไซต์ของหน่วยงาน ระดับการเข้าถึงจะขึ้นอยู่กับเว็บไซต์นั้น ซึ่งเราไม่สามารถควบคุมได้ หากพบปัญหาการเข้าถึงบนเว็บไซต์ของหน่วยงาน ขอแนะนำให้แจ้งไปยังหน่วยงานนั้นโดยตรง',
					en: 'Content written by THGov is checked against the guidance above, but once you follow a link to an agency’s site, its accessibility is out of our hands. If you meet a barrier on an agency site, reporting it to that agency directly is the most effective route.'
				}
			},
			{ type: 'h2', text: { th: 'แจ้งปัญหาการเข้าถึง', en: 'Report an accessibility problem' } },
			{
				type: 'p',
				text: {
					th: 'หากคุณพบส่วนใดของ THGov ที่ใช้งานได้ยากหรือใช้งานไม่ได้ โปรดแจ้งเราทางอีเมลหรือเปิดประเด็นบน GitHub พร้อมระบุหน้าที่พบปัญหาและอุปกรณ์หรือโปรแกรมช่วยเหลือที่คุณใช้ เราถือว่าเรื่องนี้เป็นข้อบกพร่องที่ต้องแก้ ไม่ใช่คำขอเพิ่มความสามารถ',
					en: 'If any part of THGov is hard or impossible to use, tell us by email or open a GitHub issue, noting the page and the device or assistive technology you use. We treat these as defects to fix, not feature requests.'
				}
			}
		]
	}
};

export const PAGE_SLUGS = Object.keys(PAGES);
