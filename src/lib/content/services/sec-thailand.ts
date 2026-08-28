import type { Service } from '../types';

export const service: Service = {
	slug: 'sec-thailand',
	name: {
		th: 'ก.ล.ต. — ตรวจสอบผู้แนะนำการลงทุนและเตือนภัยหลอกลงทุน',
		en: 'SEC Thailand — Check Licensed Advisers and Investment-Scam Warnings'
	},
	shortName: { th: 'สำนักงาน ก.ล.ต.', en: 'SEC Thailand' },
	url: 'https://www.sec.or.th/',
	agency: 'sec',
	categories: ['tax-finance', 'business'],
	summary: {
		th: 'ตรวจสอบว่าคนหรือบริษัทที่ชวนลงทุนได้รับใบอนุญาตจริงหรือไม่ อ่านประกาศเตือนผู้ลงทุนเรื่องผู้ให้บริการเถื่อน ผ่านเว็บไซต์ทางการของสำนักงาน ก.ล.ต.',
		en: 'Check whether whoever is pitching an investment holds a real licence, and read Thailand’s SEC alerts naming unlicensed operators. Direct link to the official site.'
	},
	deck: {
		th: 'หน่วยงานกำกับดูแลตลาดทุนไทย ที่ให้คุณตรวจสอบใบอนุญาตของผู้ที่ชวนลงทุน และอ่านรายชื่อผู้ที่ถูกเตือนว่าทำธุรกิจโดยไม่ได้รับอนุญาต ก่อนจะโอนเงินให้ใคร',
		en: 'Thailand’s capital-market regulator — where you can confirm that whoever is pitching an investment holds a licence, and read the public warnings about those who do not.'
	},
	keywords: {
		th: [
			'เช็คใบอนุญาตผู้แนะนำการลงทุน',
			'ตรวจสอบบริษัทหลักทรัพย์',
			'ก.ล.ต.',
			'กลต',
			'หลอกลงทุน',
			'แชร์ลูกโซ่',
			'ตรวจสอบก่อนลงทุน',
			'รายชื่อเตือนภัยลงทุน',
			'แอปเทรดปลอม',
			'เว็บลงทุนปลอม',
			'ผู้ประกอบธุรกิจสินทรัพย์ดิจิทัล',
			'โดนหลอกลงทุนแจ้งที่ไหน',
			'ตรวจสอบโบรกเกอร์ไทย'
		],
		en: [
			'SEC Thailand',
			'check investment licence Thailand',
			'Thai SEC investor alert',
			'unlicensed broker Thailand',
			'investment scam Thailand',
			'licensed investment adviser Thailand',
			'digital asset licence Thailand'
		]
	},
	features: [
		{
			icon: 'shield',
			title: { th: 'ตรวจใบอนุญาตก่อนโอนเงิน', en: 'Check the licence before you transfer' },
			text: {
				th: 'ก.ล.ต. เปิดเผยรายชื่อผู้ประกอบธุรกิจและบุคลากรที่ได้รับใบอนุญาต ให้ประชาชนตรวจสอบได้ด้วยตัวเองว่าคนที่ชวนลงทุนอยู่ในระบบจริงหรือไม่',
				en: 'The SEC publishes a register of licensed firms and licensed individuals, so anyone can check for themselves whether the person pitching an investment is actually in the system.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'ประกาศเตือนผู้ลงทุน', en: 'Public investor alerts' },
			text: {
				th: 'เมื่อพบผู้เสนอขายการลงทุนโดยไม่ได้รับอนุญาต หน่วยงานจะเผยแพร่รายชื่อไว้เป็นข้อมูลสาธารณะ เพื่อเตือนประชาชนก่อนที่ความเสียหายจะเกิดขึ้น',
				en: 'When an operator offers investments without a licence, the regulator names it publicly — a warning meant to arrive before the money does.'
			}
		},
		{
			icon: 'scale',
			title: { th: 'กำกับดูแลตัวกลางในตลาดทุน', en: 'Supervision of market intermediaries' },
			text: {
				th: 'บริษัทหลักทรัพย์ บริษัทจัดการกองทุน ผู้แนะนำการลงทุน และผู้ประกอบธุรกิจสินทรัพย์ดิจิทัล ต้องได้รับใบอนุญาตและปฏิบัติตามหลักเกณฑ์ที่กำหนดไว้',
				en: 'Securities companies, asset managers, investment advisers and digital-asset operators must hold a licence and follow the conduct rules that come with it.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'ข้อมูลเปิดเผยของบริษัทที่ระดมทุน', en: 'Disclosure from companies that raise public money' },
			text: {
				th: 'บริษัทที่เสนอขายหลักทรัพย์ต่อประชาชนต้องเปิดเผยงบการเงินและข้อมูลสำคัญตามรอบเวลาที่กำหนด ผู้ลงทุนรายย่อยจึงอ่านข้อมูลชุดเดียวกับมืออาชีพ',
				en: 'Companies that sell securities to the public must file financial statements and material information on a fixed schedule, so a retail investor reads the same record a professional does.'
			}
		},
		{
			icon: 'coins',
			title: { th: 'สินทรัพย์ดิจิทัลอยู่ในขอบเขตด้วย', en: 'Digital assets are in scope' },
			text: {
				th: 'ศูนย์ซื้อขาย นายหน้า และผู้ค้าสินทรัพย์ดิจิทัลที่ให้บริการแก่คนไทยต้องได้รับใบอนุญาต แพลตฟอร์มคริปโตที่ไม่มีใบอนุญาตจึงเป็นสัญญาณอันตรายในตัวเอง',
				en: 'Digital-asset exchanges, brokers and dealers serving Thai customers must be licensed, which makes an unlicensed crypto platform a warning sign in itself.'
			}
		},
		{
			icon: 'book',
			title: { th: 'ความรู้สำหรับผู้ลงทุน', en: 'Material written for ordinary investors' },
			text: {
				th: 'หน่วยงานเผยแพร่คำอธิบายผลิตภัณฑ์การลงทุน ความเสี่ยงที่ต้องรับ และวิธีสังเกตกลโกง ด้วยภาษาที่คนทั่วไปอ่านแล้วเข้าใจ',
				en: 'The regulator publishes plain-language explanations of investment products, the risks attached to them, and how to recognise a scam.'
			}
		}
	],
	steps: [
		{
			title: { th: 'จดชื่อให้ครบก่อนเริ่มค้นหา', en: 'Write down every name before you search' },
			text: {
				th: 'บันทึกชื่อและนามสกุลของผู้ที่ติดต่อมา ชื่อเต็มของบริษัทที่เขาอ้าง ชื่อแอปหรือเว็บไซต์ และลิงก์ที่ส่งมาให้ มิจฉาชีพมักตั้งชื่อให้คล้ายบริษัทจริงโดยต่างกันเพียงหนึ่งถึงสองตัวอักษร การเทียบชื่อแบบตัวต่อตัวจึงสำคัญกว่าการจำคร่าว ๆ',
				en: 'Note the full name of the person contacting you, the full legal name of the company they claim to represent, the app or website name, and the link they sent. Scammers routinely pick names that differ from a real firm’s by a letter or two, so compare character by character rather than from memory.'
			}
		},
		{
			title: { th: 'เข้าเว็บไซต์ทางการด้วยการพิมพ์ที่อยู่เอง', en: 'Reach the official site by typing the address yourself' },
			text: {
				th: 'อย่ากดลิงก์ที่อีกฝ่ายส่งมา และอย่าเลือกผลลัพธ์ที่เป็นโฆษณาบนสุดของหน้าค้นหา ให้พิมพ์ที่อยู่เว็บไซต์ของสำนักงาน ก.ล.ต. ด้วยตัวเอง แล้วบันทึกไว้เป็นบุ๊กมาร์กสำหรับใช้ครั้งต่อไป',
				en: 'Do not tap the link they sent, and do not pick a paid result at the top of a search page. Type the SEC’s address yourself, then bookmark it for next time.'
			}
		},
		{
			title: { th: 'ค้นรายชื่อผู้ได้รับใบอนุญาตด้วยชื่อตามกฎหมาย', en: 'Search the licence register using legal names' },
			text: {
				th: 'ลองค้นทั้งชื่อภาษาไทยและภาษาอังกฤษ ทั้งชื่อบุคคลและชื่อนิติบุคคล เพราะชื่อทางการค้าที่ใช้โฆษณามักไม่ตรงกับชื่อที่จดทะเบียนไว้ หากสะกดได้หลายแบบ ให้ลองให้ครบทุกแบบก่อนสรุปผล',
				en: 'Try the Thai and English spellings, and both the individual’s name and the company’s. Trading names used in advertising often differ from what is registered, so exhaust the variants before drawing a conclusion.'
			}
		},
		{
			title: { th: 'ตรวจว่าใบอนุญาตตรงกับสิ่งที่เขาเสนอขาย', en: 'Confirm the licence covers what is being sold' },
			text: {
				th: 'ใบอนุญาตมีหลายประเภทและครอบคลุมผลิตภัณฑ์ต่างกัน คนที่มีใบอนุญาตประเภทหนึ่งอาจไม่มีสิทธิเสนอขายผลิตภัณฑ์อีกประเภทหนึ่ง และการที่บริษัทหนึ่งมีใบอนุญาต ไม่ได้แปลว่าทุกคนที่อ้างชื่อบริษัทนั้นได้รับมอบหมายให้ติดต่อคุณจริง',
				en: 'Licences come in categories that cover different products; someone licensed for one may have no right to offer another. And a company holding a licence does not mean everyone invoking its name was authorised to contact you.'
			}
		},
		{
			title: { th: 'อ่านประกาศเตือนผู้ลงทุนก่อนตัดสินใจ', en: 'Read the investor alerts before deciding' },
			text: {
				th: 'ค้นชื่อบุคคล บริษัท และชื่อแพลตฟอร์มในประกาศเตือนผู้ลงทุนที่หน่วยงานเผยแพร่ไว้ หากพบชื่อใดชื่อหนึ่งตรงกัน ให้ยุติการติดต่อทันที และอย่าโอนเงินเพิ่มเพื่อ “ปลดล็อก” เงินที่โอนไปแล้ว',
				en: 'Search the alert notices for the person, the company and the platform name. If any of them matches, stop the conversation there — and never send more money to “unlock” what you already sent.'
			}
		},
		{
			title: { th: 'ถ้าไม่พบชื่อ ให้ถือว่ายังไม่ผ่าน', en: 'If you find nothing, treat that as a fail' },
			text: {
				th: 'การค้นไม่พบไม่ได้แปลว่าปลอดภัย แต่แปลว่ายังไม่มีหลักฐานว่าได้รับอนุญาต ให้สอบถามหน่วยงานโดยตรงผ่านช่องทางติดต่อบนเว็บไซต์ทางการก่อน และอย่าโอนเงินระหว่างที่ยังไม่ได้คำตอบ ความเร่งรัดให้รีบตัดสินใจคือสิ่งที่มิจฉาชีพต้องการที่สุด',
				en: 'Finding nothing does not mean safe; it means there is no evidence of a licence. Ask the regulator directly through the contact channel on its official site, and send no money while you wait. Pressure to decide quickly is precisely what a fraudster is working for.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ก.ล.ต. กับตลาดหลักทรัพย์แห่งประเทศไทย ต่างกันอย่างไร', en: 'What is the difference between the SEC and the Stock Exchange of Thailand?' },
			a: {
				th: 'สำนักงาน ก.ล.ต. คือหน่วยงานกำกับดูแล ทำหน้าที่ออกใบอนุญาต วางกฎเกณฑ์ และบังคับใช้กฎหมายกับผู้เล่นในตลาดทุน ส่วนตลาดหลักทรัพย์แห่งประเทศไทยคือผู้ให้บริการระบบซื้อขายหุ้น ซึ่งเองก็อยู่ภายใต้การกำกับดูแลของ ก.ล.ต. อีกชั้นหนึ่ง พูดง่าย ๆ คือ ก.ล.ต. เป็นผู้กำกับ ตลาดหลักทรัพย์เป็นสนาม',
				en: 'The SEC is the regulator: it licenses, writes the rules and enforces the law across the capital market. The Stock Exchange of Thailand operates the trading venue itself, and is in turn supervised by the SEC. In short, one is the referee and the other is the pitch.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าคนที่ชวนลงทุนมีใบอนุญาตจริง', en: 'How do I know the person pitching an investment is really licensed?' },
			a: {
				th: 'ให้ขอชื่อและนามสกุลจริง พร้อมชื่อบริษัทต้นสังกัดตามที่จดทะเบียน แล้วนำไปค้นในรายชื่อผู้ได้รับใบอนุญาตบนเว็บไซต์ทางการของ ก.ล.ต. ด้วยตัวคุณเอง ไม่ใช่ให้เขาส่งลิงก์หรือภาพหน้าจอมาให้ดู ภาพใบอนุญาตและเลขที่ใบอนุญาตปลอมแปลงได้ง่ายมาก การตรวจจากต้นทางจึงเป็นวิธีเดียวที่เชื่อถือได้',
				en: 'Ask for their real full name and the registered name of the firm they work for, then look those up in the SEC’s register yourself — not through a link or screenshot they provide. Images of certificates and licence numbers are trivial to fake, so checking at the source is the only reliable method.'
			}
		},
		{
			q: { th: 'ก.ล.ต. กำกับดูแลคริปโตและสินทรัพย์ดิจิทัลด้วยหรือไม่', en: 'Does the SEC also regulate crypto and digital assets?' },
			a: {
				th: 'ใช่ ผู้ประกอบธุรกิจสินทรัพย์ดิจิทัลที่ให้บริการในประเทศไทย เช่น ศูนย์ซื้อขาย นายหน้า และผู้ค้า ต้องได้รับใบอนุญาตและอยู่ภายใต้การกำกับดูแล อย่างไรก็ตาม การที่แพลตฟอร์มมีใบอนุญาตเป็นเรื่องของการกำกับผู้ให้บริการ ไม่ใช่การรับรองว่าเหรียญหรือโทเคนใดเป็นการลงทุนที่ดี ราคาสินทรัพย์ดิจิทัลยังผันผวนสูงและอาจสูญเงินต้นทั้งหมดได้',
				en: 'Yes. Digital-asset businesses serving customers in Thailand — exchanges, brokers and dealers — must be licensed and supervised. But a platform’s licence regulates the operator, not the coins on it; it is never an endorsement of any token, and digital-asset prices remain volatile enough to wipe out the capital you put in.'
			}
		},
		{
			q: { th: 'ถ้าบริษัทมีใบอนุญาตแล้ว แปลว่าลงทุนแล้วไม่ขาดทุนใช่ไหม', en: 'If a firm is licensed, does that mean my money is safe?' },
			a: {
				th: 'ไม่ใช่ ใบอนุญาตหมายความว่าผู้ให้บริการต้องปฏิบัติตามกฎเกณฑ์ เปิดเผยข้อมูล และถูกตรวจสอบได้ แต่ไม่ได้รับประกันผลตอบแทนหรือคุ้มครองไม่ให้ขาดทุน การลงทุนทุกประเภทมีความเสี่ยง และหน่วยงานกำกับดูแลไม่แนะนำหลักทรัพย์รายตัวว่าควรซื้อหรือไม่ควรซื้อ หากใครอ้างว่า “ก.ล.ต. รับรองผลตอบแทน” ให้ถือเป็นสัญญาณของการหลอกลวงทันที',
				en: 'No. A licence means the operator must follow the rules, disclose information and submit to inspection — it does not guarantee returns or protect you from losses. Every investment carries risk, and the regulator does not recommend individual securities. Anyone claiming the SEC “guarantees” a return is telling you, in effect, that this is a scam.'
			}
		},
		{
			q: { th: 'ค้นชื่อบริษัทบนเว็บไซต์แล้วไม่เจอ ควรทำอย่างไร', en: 'I searched the site and found nothing. What now?' },
			a: {
				th: 'ลองค้นด้วยชื่อที่จดทะเบียนแทนชื่อทางการค้า ลองทั้งภาษาไทยและอังกฤษ ตัดคำนำหน้าอย่าง “บริษัท” หรือ “จำกัด” ออก และลองพิมพ์เพียงบางส่วนของชื่อ เพราะระบบค้นหาส่วนใหญ่จับคู่ตามชื่อทางกฎหมาย หากยังไม่พบหรือหน้าเว็บโหลดไม่ขึ้น ให้ติดต่อสอบถามหน่วยงานผ่านช่องทางบนเว็บไซต์ทางการโดยตรง และระหว่างนั้นให้ถือว่ายังตรวจสอบไม่ผ่าน',
				en: 'Search the registered name rather than the brand name, try both Thai and English, drop prefixes such as “Company” or “Limited”, and try a partial string — most registers match on the legal name. If it still returns nothing, or the page will not load, ask the regulator through the contact channel on its official site, and in the meantime treat the check as unpassed.'
			}
		},
		{
			q: { th: 'มีคนอ้างว่าเป็นเจ้าหน้าที่ ก.ล.ต. ติดต่อมาช่วยตามเงินคืน จริงหรือไม่', en: 'Someone claiming to be from the SEC offered to recover my money. Is that real?' },
			a: {
				th: 'ให้สงสัยไว้ก่อนว่าเป็นมิจฉาชีพ การหลอกรอบสองมักเกิดกับผู้ที่เคยเสียเงินไปแล้ว โดยอ้างชื่อหน่วยงานรัฐและเสนอจะตามเงินคืนแลกกับค่าดำเนินการ หน่วยงานกำกับดูแลไม่เรียกเก็บเงินเพื่อติดตามทรัพย์สินคืน ไม่ขอรหัส OTP และไม่ให้โอนเงินเข้าบัญชีส่วนบุคคล หากเจอแบบนี้ให้วางสาย แล้วติดต่อกลับผ่านช่องทางทางการที่คุณค้นเจอเอง',
				en: 'Assume it is fraud. Second-round scams target people who have already lost money, borrowing a government agency’s name and offering recovery in exchange for a processing fee. A regulator does not charge the public to trace assets, does not ask for OTPs or passwords, and never asks for a transfer to a personal account. Hang up and call back through an official channel you found yourself.'
			}
		},
		{
			q: { th: 'ถูกหลอกลงทุนไปแล้ว ก.ล.ต. ตามเงินคืนให้ได้ไหม', en: 'I have already been defrauded — can the SEC get my money back?' },
			a: {
				th: 'สำนักงาน ก.ล.ต. เป็นหน่วยงานกำกับดูแลและบังคับใช้กฎหมายกับผู้ประกอบธุรกิจ ไม่ใช่หน่วยงานที่ชดใช้ค่าเสียหายหรือติดตามเงินคืนให้รายบุคคล การติดตามเงินเป็นเรื่องของกระบวนการทางอาญาและธนาคาร ดังนั้นควรติดต่อธนาคารเจ้าของบัญชีเพื่อขอระงับธุรกรรมโดยเร็วที่สุด และแจ้งความกับตำรวจ ส่วนการแจ้งข้อมูลให้ ก.ล.ต. ทราบ มีประโยชน์ในแง่การออกประกาศเตือนและดำเนินการกับผู้กระทำผิดต่อไป',
				en: 'The SEC regulates and enforces against operators; it is not a compensation fund and does not chase individual losses. Recovering money runs through the banks and the criminal process, so contact the receiving bank to freeze the transaction as fast as possible and file a police report. Reporting to the SEC still matters — it feeds the public alerts and any action taken against the operator.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'สำนักงาน ก.ล.ต. คืออะไร', en: 'What the SEC of Thailand is' }
		},
		{
			type: 'p',
			text: {
				th: 'สำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์ หรือที่คนทั่วไปเรียกสั้น ๆ ว่า ก.ล.ต. เป็นหน่วยงานของรัฐที่ทำหน้าที่กำกับดูแลตลาดทุนไทย งานหลักคือการออกใบอนุญาตและกำกับดูแลผู้ที่ยืนอยู่ระหว่างประชาชนกับเงินลงทุนของประชาชน ตั้งแต่บริษัทหลักทรัพย์ บริษัทจัดการกองทุนรวม ผู้แนะนำการลงทุน ไปจนถึงผู้ประกอบธุรกิจสินทรัพย์ดิจิทัล',
				en: 'The Securities and Exchange Commission of Thailand — ก.ล.ต. in everyday Thai — is the state body that regulates the country’s capital market. Its central job is to license and supervise everyone who stands between the public and the public’s invested money: securities companies, mutual-fund managers, investment advisers and digital-asset businesses.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'นอกจากงานด้านใบอนุญาต ก.ล.ต. ยังกำหนดให้บริษัทที่ระดมทุนจากประชาชนต้องเปิดเผยข้อมูลอย่างครบถ้วนและตรงเวลา เพื่อให้ผู้ลงทุนรายย่อยตัดสินใจบนข้อมูลชุดเดียวกับผู้ลงทุนสถาบัน และเมื่อพบการกระทำที่เข้าข่ายผิดกฎหมาย หน่วยงานมีอำนาจดำเนินการตามกฎหมายกับผู้เกี่ยวข้อง รวมถึงเผยแพร่ข้อมูลต่อสาธารณะเพื่อเตือนประชาชน',
				en: 'Beyond licensing, the SEC requires companies that raise money from the public to disclose information completely and on time, so that a retail investor decides on the same record an institution sees. Where conduct appears to break the law, the regulator can act against those responsible — and can publish what it finds, so the public is warned.'
			}
		},
		{
			type: 'h2',
			text: { th: 'สองเรื่องที่คนทั่วไปต้องใช้จริง', en: 'The two things ordinary people actually need from it' }
		},
		{
			type: 'p',
			text: {
				th: 'เรื่องแรกคือการตรวจสอบใบอนุญาต ก.ล.ต. เปิดเผยรายชื่อผู้ประกอบธุรกิจและบุคลากรที่ได้รับความเห็นชอบหรือได้รับใบอนุญาตไว้เป็นข้อมูลสาธารณะ คำถามที่ควรตอบให้ได้ก่อนโอนเงินทุกครั้งจึงมีเพียงข้อเดียว คือคนหรือบริษัทที่กำลังชวนเราลงทุนอยู่ในรายชื่อนั้นหรือไม่ และใบอนุญาตที่มีครอบคลุมสิ่งที่เขากำลังเสนอขายหรือเปล่า',
				en: 'The first is the licence check. The SEC keeps the register of approved firms and approved individuals open to the public, which reduces the question you must answer before any transfer to one line: is the person or company pitching this actually on that list, and does what they hold cover what they are selling?'
			}
		},
		{
			type: 'p',
			text: {
				th: 'เรื่องที่สองคือประกาศเตือนผู้ลงทุน เมื่อหน่วยงานพบผู้ที่เสนอขายการลงทุนหรือให้บริการโดยไม่ได้รับอนุญาต จะมีการเผยแพร่รายชื่อไว้ให้ประชาชนตรวจสอบได้ ข้อมูลชุดนี้มีค่ามากที่สุดในช่วงเวลาสั้น ๆ ก่อนที่คนคนหนึ่งจะตัดสินใจโอนเงิน เพราะเป็นจังหวะเดียวที่คำเตือนยังเปลี่ยนผลลัพธ์ได้',
				en: 'The second is the investor alert. When the regulator identifies someone offering investments or services without a licence, it publishes the name for anyone to check. That list is at its most valuable in the short window before a person decides to transfer — the only moment at which a warning can still change the outcome.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ใครกำกับดูแลอะไร', en: 'Who regulates what' }
		},
		{
			type: 'table',
			caption: { th: 'หน่วยงานที่เกี่ยวข้องกับเรื่องเงินและการลงทุนในประเทศไทย', en: 'The Thai agencies involved in money and investment' },
			head: [
				{ th: 'หน่วยงาน', en: 'Body' },
				{ th: 'ดูแลเรื่องอะไร', en: 'Responsible for' },
				{ th: 'ตัวอย่างที่ใกล้ตัวประชาชน', en: 'What that touches in daily life' }
			],
			rows: [
				[
					{ th: 'สำนักงาน ก.ล.ต.', en: 'SEC Thailand' },
					{ th: 'ตลาดทุนและผู้ประกอบธุรกิจด้านการลงทุน', en: 'The capital market and investment businesses' },
					{ th: 'หุ้น กองทุนรวม ตราสารหนี้ ผู้แนะนำการลงทุน สินทรัพย์ดิจิทัล', en: 'Shares, mutual funds, bonds, investment advisers, digital assets' }
				],
				[
					{ th: 'ตลาดหลักทรัพย์แห่งประเทศไทย', en: 'Stock Exchange of Thailand' },
					{ th: 'การให้บริการระบบซื้อขายและข้อมูลบริษัทจดทะเบียน', en: 'Running the trading venue and listed-company information' },
					{ th: 'ระบบซื้อขายหุ้น ราคาและข่าวของบริษัทจดทะเบียน', en: 'The trading system, prices and listed-company news' }
				],
				[
					{ th: 'ธนาคารแห่งประเทศไทย', en: 'Bank of Thailand' },
					{ th: 'ธนาคารพาณิชย์และระบบการชำระเงิน', en: 'Commercial banks and the payment system' },
					{ th: 'บัญชีเงินฝาก สินเชื่อ พร้อมเพย์ กระเป๋าเงินอิเล็กทรอนิกส์', en: 'Deposit accounts, lending, PromptPay, e-wallets' }
				],
				[
					{ th: 'สำนักงาน คปภ.', en: 'Office of Insurance Commission' },
					{ th: 'ธุรกิจประกันภัยและคนกลางประกันภัย', en: 'Insurance business and insurance intermediaries' },
					{ th: 'ประกันชีวิต ประกันวินาศภัย ตัวแทนและนายหน้าประกันภัย', en: 'Life and non-life policies, agents and brokers' }
				],
				[
					{ th: 'ตำรวจและกรมสอบสวนคดีพิเศษ', en: 'The police and the DSI' },
					{ th: 'คดีอาญาฐานฉ้อโกงและการหลอกลวงประชาชน', en: 'Criminal fraud and mass-victim deception cases' },
					{ th: 'การแจ้งความ การอายัดบัญชี การดำเนินคดีกับผู้กระทำผิด', en: 'Filing reports, freezing accounts, prosecuting offenders' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'รูปแบบการหลอกลงทุนที่พบบ่อยในไทย', en: 'The shapes investment fraud takes in Thailand' }
		},
		{
			type: 'p',
			text: {
				th: 'การหลอกลงทุนในประเทศไทยส่วนใหญ่ไม่ได้เริ่มจากการโฆษณาแบบเปิดเผย แต่เริ่มจากการทักเข้ามาทางโซเชียลมีเดียหรือแอปแชท บางรายเริ่มจากการสร้างความสัมพันธ์ส่วนตัวเป็นเวลาหลายสัปดาห์ก่อนจะพูดถึงเงินสักบาทเดียว ทำให้เหยื่อไม่รู้สึกว่ากำลังคุยกับคนแปลกหน้า และคำเตือนทั่วไปเรื่อง “อย่าเชื่อคนไม่รู้จัก” ใช้ไม่ได้ผล',
				en: 'Most investment fraud here does not begin with an advertisement. It begins with a message on social media or a chat app, and some approaches spend weeks building a personal relationship before money is ever mentioned — by which point the victim no longer feels they are dealing with a stranger, and the standard advice about not trusting strangers has quietly stopped applying.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ทักมาทางโซเชียลมีเดียหรือแอปแชท คุยเรื่องทั่วไปหรือเรื่องความสัมพันธ์ก่อน แล้วค่อยเล่าว่าตนเองลงทุนแล้วได้กำไร',
					en: 'An approach through social media or a chat app: ordinary conversation, or romance, followed by a story about how well their own investments are doing.'
				},
				{
					th: 'การันตีผลตอบแทนสูงในเวลาสั้น พร้อมย้ำว่าไม่มีความเสี่ยง ซึ่งไม่มีผลิตภัณฑ์การลงทุนถูกกฎหมายรายใดกล่าวอ้างเช่นนั้นได้',
					en: 'A guaranteed high return in a short time, with an assurance that there is no risk — a claim no lawful investment product is permitted to make.'
				},
				{
					th: 'ให้ติดตั้งแอปหรือเข้าเว็บที่แสดงยอดกำไรเพิ่มขึ้นทุกวัน ทั้งที่ตัวเลขบนหน้าจอถูกกำหนดโดยผู้หลอกลวงเอง',
					en: 'An app or website to install where the balance rises every day, though the numbers on the screen are simply written by the fraudster.'
				},
				{
					th: 'ให้โอนเงินเข้าบัญชีบุคคลธรรมดาหรือกระเป๋าเงินดิจิทัลที่ไม่ตรงกับชื่อบริษัทที่อ้างถึง',
					en: 'Payment directed to a personal bank account or a digital wallet whose name does not match the company being invoked.'
				},
				{
					th: 'ยอมให้ถอนกำไรก้อนเล็กได้จริงในช่วงแรก เพื่อสร้างความไว้ใจก่อนชวนให้ลงเงินก้อนใหญ่',
					en: 'A small, genuine withdrawal early on, allowed purely to build the confidence needed for a much larger deposit.'
				},
				{
					th: 'เมื่อขอถอนเงินก้อนใหญ่ กลับถูกเรียกเก็บค่าภาษี ค่าธรรมเนียม หรือค่าปลดล็อกบัญชีเพิ่มก่อนเสมอ',
					en: 'When a large withdrawal is requested, a tax, a fee or an unlocking charge always has to be paid first.'
				},
				{
					th: 'แอบอ้างชื่อบริษัทหลักทรัพย์ ผู้บริหาร หรือหน่วยงานของรัฐที่มีอยู่จริง รวมถึงตั้งกลุ่มแชทที่มีคนคอยยืนยันว่าได้กำไรจริง',
					en: 'The name of a real securities firm, a real executive or a real government body, borrowed for the occasion — often alongside a group chat full of people confirming their profits.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'สัญญาณที่ชัดที่สุดเพียงข้อเดียว', en: 'The single clearest signal' },
			text: {
				th: 'ถ้าคุณต้องโอนเงินเพิ่มเพื่อจะถอนเงินของตัวเองออกมา ไม่ว่าจะอ้างว่าเป็นค่าภาษี ค่าธรรมเนียม หรือค่าปลดล็อกบัญชี ให้ถือว่าเป็นการหลอกลวงไว้ก่อน ผู้ประกอบธุรกิจที่ได้รับใบอนุญาตจะหักค่าธรรมเนียมจากยอดเงินในบัญชี ไม่ใช่ให้ลูกค้าโอนเงินก้อนใหม่เข้าไปก่อนจึงจะถอนได้',
				en: 'If you are told to send more money in order to withdraw your own — as tax, as a fee, as an unlocking charge — treat it as fraud. A licensed operator deducts charges from the balance it already holds; it does not require fresh funds before releasing yours.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เมื่อสงสัยว่าถูกหลอกลงทุน', en: 'If you think you have been defrauded' }
		},
		{
			type: 'p',
			text: {
				th: 'สิ่งที่ต้องทำเร็วที่สุดคือติดต่อธนาคารเจ้าของบัญชีที่โอนเงินออกไป เพื่อขอให้ระงับหรืออายัดธุรกรรม เพราะโอกาสตามเงินคืนลดลงเร็วมากตามเวลาที่ผ่านไป จากนั้นจึงแจ้งความกับตำรวจเพื่อให้มีเลขคดี และแจ้งข้อมูลผู้ที่เสนอขายการลงทุนโดยไม่ได้รับอนุญาตให้สำนักงาน ก.ล.ต. ทราบผ่านช่องทางรับเรื่องบนเว็บไซต์ทางการ ระหว่างนั้นให้เก็บหลักฐานให้ครบ ทั้งภาพหน้าจอบทสนทนา ชื่อและเลขบัญชีปลายทาง สลิปการโอน และลิงก์เว็บไซต์หรือแอปที่ใช้ เพราะทั้งธนาคาร ตำรวจ และหน่วยงานกำกับดูแลต้องใช้หลักฐานชุดเดียวกันนี้',
				en: 'Move first on the bank you sent the money from and ask for the transaction to be held or frozen — the odds of recovery fall sharply with every hour. Then file a police report so there is a case number to work from, and tell the SEC about anyone offering investments without a licence through the contact channel on its official site. Meanwhile keep everything: screenshots of the conversation, the destination account name and number, every transfer slip, the website or app link, and whatever name the other party used. That one set of evidence is what the bank, the police and the regulator will each ask you for.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้จึงต้องมีอยู่', en: 'Why a findable page pointing here has to exist' }
		},
		{
			type: 'p',
			text: {
				th: 'คำเตือนที่ค้นไม่เจอ ก็เตือนใครไม่ได้ ในการตรวจสอบเมื่อวันที่ 27 สิงหาคม 2569 เว็บไซต์ตอบกลับรหัส 403 ต่อทุกคำขอจากเครื่องที่เราใช้ตรวจสอบ ทั้งเมื่อระบุตัวเป็น Googlebot และเมื่อใช้เบราว์เซอร์ทั่วไป เราจึงอ่าน robots.txt เพื่อยืนยันนโยบายไม่ได้ สิ่งที่สังเกตได้ในทางปฏิบัติคือ คนที่กำลังลังเลแล้วพิมพ์ชื่อบริษัทที่ชวนลงทุนลงในช่องค้นหา มักเจอหน้าโฆษณาของฝ่ายที่ชักชวนก่อนคำเตือนของหน่วยงานกำกับดูแล หน้านี้จึงทำหน้าที่เป็นป้ายบอกทางที่ค้นเจอได้ อธิบายว่าเว็บไซต์ทางการมีข้อมูลอะไรให้ตรวจสอบและควรตรวจอย่างไร ก่อนส่งผู้อ่านไปยังต้นทางโดยตรง ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่มีความเกี่ยวข้องกับสำนักงาน ก.ล.ต. ไม่รับเรื่องร้องเรียน และไม่รับข้อมูลส่วนบุคคลหรือเงินลงทุนแทนหน่วยงานใด',
				en: 'A warning nobody can find warns nobody. In our check on 27 August 2026 the site answered every request from our audit host with a 403 — as Googlebot and as an ordinary browser alike — so we cannot read its robots.txt to confirm what it permits. What is observable is that someone hesitating in front of their phone and typing in the name of the company courting them tends to reach the promoter’s own landing page well before the regulator’s warning about it. This page exists to be the findable signpost: it sets out what the official site holds, how to run the check so the answer means something, and then sends the reader straight to the source. ThaiGov.co is an independent directory, unaffiliated with the SEC; we take no complaints, no personal data and no money on anyone’s behalf.'
			}
		}
	],
	crawl: {
		host: 'www.sec.or.th',
		verdict: 'waf-blocked',
		kind: 'waf-rule',
		status: 403,
		snippet: 'Full desktop-Chrome request profile\n  GET /  ->  403  (F5 BIG-IP ASM block page)\nGooglebot user-agent\n  GET /  ->  403\nGET /robots.txt  ->  403',
		checkedAt: '2026-08-27',
		note: {
			th: 'แม้จะเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ ทั้งส่วนหัวการระบุตัวตนเบราว์เซอร์ ภาษา และ fetch metadata ครบถ้วน เซิร์ฟเวอร์ก็ยังปฏิเสธคำขอด้วยหน้าบล็อกของระบบไฟร์วอลล์ การปิดกั้นลักษณะนี้มักกรองทราฟฟิกจากศูนย์ข้อมูลเป็นวงกว้าง เราจึงยืนยันนโยบายที่แท้จริงของเว็บไซต์จากภายนอกไม่ได้ และไม่สรุปว่า Googlebot ตัวจริงถูกปิดกั้นด้วยหรือไม่',
			en: 'Even with a full browser request profile — complete client hints, language and fetch-metadata headers — the server refuses with a firewall block page. Blocks shaped like this usually filter datacentre traffic broadly, so the site’s real policy cannot be verified from outside, and we draw no conclusion about whether the genuine Googlebot is refused too.'
		}
	},
	priority: 86,
	updated: '2026-08-27'
};
