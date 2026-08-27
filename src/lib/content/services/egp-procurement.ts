import type { Service } from '../types';

export const service: Service = {
	slug: 'egp-procurement',
	name: {
		th: 'ระบบจัดซื้อจัดจ้างภาครัฐ e-GP — ประกาศประกวดราคาและผลผู้ชนะ',
		en: 'Thai e-Government Procurement (e-GP) — Tenders and Award Results'
	},
	shortName: { th: 'ระบบ e-GP', en: 'e-GP Procurement' },
	url: 'https://www.gprocurement.go.th/',
	agency: 'cgd',
	categories: ['procurement', 'business'],
	summary: {
		th: 'ค้นหาประกาศประกวดราคา แผนจัดซื้อจัดจ้าง ราคากลาง และผลผู้ชนะจากหน่วยงานรัฐทั่วประเทศ พร้อมวิธีลงทะเบียนเป็นผู้ค้ากับภาครัฐ ในระบบ e-GP ของกรมบัญชีกลาง',
		en: 'Find Thai government tender notices, procurement plans, reference prices and award results, plus how to register as a state supplier, in the CGD’s e-GP system.'
	},
	deck: {
		th: 'ระบบกลางที่หน่วยงานรัฐทุกแห่งต้องใช้ประกาศการจัดซื้อจัดจ้าง ตั้งแต่แผนประจำปีและประกาศเชิญชวน ไปจนถึงชื่อผู้ชนะและราคาที่ตกลงกัน',
		en: 'The single central system every Thai state agency must use to announce its purchasing — from the annual plan and the invitation to bid through to the winner’s name and the agreed price.'
	},
	keywords: {
		th: [
			'ประกวดราคา',
			'ประกาศประกวดราคา',
			'ประมูลงานราชการ',
			'ขายของให้ราชการ',
			'จัดซื้อจัดจ้างภาครัฐ',
			'ผลประกวดราคา',
			'ผู้ชนะการเสนอราคา',
			'ลงทะเบียนผู้ค้ากับภาครัฐ',
			'ราคากลาง',
			'e-bidding',
			'ระบบ e-GP',
			'อีจีพี',
			'gprocurement',
			'แผนการจัดซื้อจัดจ้าง'
		],
		en: [
			'Thailand e-GP',
			'Thai government tenders',
			'Thailand public procurement',
			'e-bidding Thailand',
			'government contract Thailand',
			'tender award results Thailand',
			'register as government supplier Thailand'
		]
	},
	features: [
		{
			icon: 'gavel',
			title: { th: 'ประกาศจากทุกหน่วยงานรวมอยู่ที่เดียว', en: 'Every agency’s tenders in one place' },
			text: {
				th: 'ส่วนราชการ รัฐวิสาหกิจ มหาวิทยาลัยของรัฐ และองค์กรปกครองส่วนท้องถิ่นทั่วประเทศ ต้องนำประกาศเชิญชวนมาเผยแพร่ผ่านระบบเดียวกัน ไม่ต้องไล่เปิดเว็บไซต์ทีละหน่วยงาน',
				en: 'Ministries, state enterprises, public universities and local administrations across the country all publish their invitations to bid through the same system, so you are not opening agency websites one by one.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'แผนการจัดซื้อจัดจ้างที่ประกาศล่วงหน้า', en: 'Procurement plans published in advance' },
			text: {
				th: 'หน่วยงานต้องเผยแพร่แผนการจัดซื้อจัดจ้างประจำปี ผู้ประกอบการจึงเห็นความต้องการล่วงหน้า และมีเวลาเตรียมคุณสมบัติหรือหาคู่ค้าก่อนที่ประกาศจริงจะออก',
				en: 'Agencies must publish their annual procurement plans, so suppliers can see what is coming and have time to line up qualifications or partners before the actual notice appears.'
			}
		},
		{
			icon: 'coins',
			title: { th: 'ราคากลางและผลผู้ชนะพร้อมตัวเลข', en: 'Reference prices and awards with figures' },
			text: {
				th: 'ระบบเผยแพร่ราคากลางที่หน่วยงานคำนวณไว้ และประกาศผลผู้ชนะซึ่งระบุชื่อผู้ประกอบการและราคาที่ตกลง ทำให้เทียบได้ว่างานลักษณะเดียวกันเคยจบที่ราคาเท่าไร',
				en: 'The system publishes the benchmark price an agency set and the award notice naming the winning supplier and the agreed price, so you can see what comparable work has actually closed at.'
			}
		},
		{
			icon: 'id',
			title: { th: 'ผูกตัวตนผู้ค้ากับเลขทะเบียน 13 หลัก', en: 'Supplier identity keyed to a 13-digit number' },
			text: {
				th: 'ผู้ที่ต้องการเสนอราคาต้องลงทะเบียนเป็นผู้ค้ากับภาครัฐก่อน โดยผูกบัญชีเข้ากับเลขทะเบียนนิติบุคคลหรือเลขประจำตัวผู้เสียภาษีอากร ทำให้ตัวตนของผู้เสนอราคาตรวจสอบย้อนกลับได้',
				en: 'Anyone who wants to bid must first register as a state supplier, with the account tied to the juristic-person registration or taxpayer number — so every bidder’s identity is traceable.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'หลักฐานสำหรับติดตามการใช้งบประมาณ', en: 'A public record of where money went' },
			text: {
				th: 'นักข่าว นักวิจัย และกลุ่มภาคประชาสังคมใช้ประกาศในระบบเป็นหลักฐานตั้งต้น เพื่อดูว่างบประมาณของแต่ละหน่วยงานถูกใช้ไปกับอะไร และคู่สัญญารายใดได้งานซ้ำ ๆ',
				en: 'Reporters, researchers and civil-society groups use these notices as starting evidence for what an agency’s budget was spent on, and which suppliers keep winning.'
			}
		},
		{
			icon: 'scale',
			title: { th: 'กระบวนการที่มีสิทธิอุทธรณ์รองรับ', en: 'A process with a right of appeal' },
			text: {
				th: 'ทุกขั้นตอนอยู่ภายใต้พระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560 ผู้เสนอราคาที่เห็นว่าไม่ได้รับความเป็นธรรมมีสิทธิอุทธรณ์ตามขั้นตอนและระยะเวลาที่กฎหมายกำหนด',
				en: 'Every stage sits under the Public Procurement and Supplies Administration Act B.E. 2560 (2017). A bidder who believes it was treated unfairly has a right of appeal, within the procedure and time limits the law sets.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ตรวจสอบว่าธุรกิจของคุณพร้อมเป็นคู่สัญญาภาครัฐ', en: 'Check that your business can contract with the state' },
			text: {
				th: 'ทั้งบุคคลธรรมดาและนิติบุคคลเป็นคู่สัญญากับหน่วยงานรัฐได้ แต่ต้องมีคุณสมบัติตามที่ประกาศแต่ละฉบับกำหนด และต้องไม่เป็นผู้ที่ถูกระบุชื่อเป็นผู้ทิ้งงาน ควรเตรียมเอกสารจดทะเบียน งบการเงิน และผลงานที่ผ่านมาให้พร้อมตั้งแต่ต้น',
				en: 'Both individuals and registered companies can contract with the state, but you must meet the qualifications each notice sets out and must not be listed as a defaulting contractor. Get your registration papers, financial statements and past-work records together first.'
			}
		},
		{
			title: { th: 'ลงทะเบียนเป็นผู้ค้ากับภาครัฐในระบบ e-GP', en: 'Register as a state supplier in e-GP' },
			text: {
				th: 'ใช้เลขทะเบียนนิติบุคคลหรือเลขประจำตัวผู้เสียภาษีอากร 13 หลักเป็นตัวตั้งต้น และกรอกข้อมูลให้ตรงกับที่จดทะเบียนไว้ทุกตัวอักษร เพราะระบบตรวจสอบข้ามกับฐานข้อมูลทะเบียนของทางราชการ หากขั้นตอนใดเรียกเอกสารเพิ่มเติม ให้ทำตามที่ระบบแจ้งไว้ในขณะนั้น',
				en: 'Start from your 13-digit juristic-person registration or taxpayer number and enter the details exactly as they appear on the register — the system cross-checks against official registry data. If a step asks for supporting documents, follow the instructions it gives you at the time.'
			}
		},
		{
			title: { th: 'ค้นหาประกาศที่ตรงกับสิ่งที่คุณขาย จากภายในระบบ', en: 'Search inside the system for what matches your line of work' },
			text: {
				th: 'ค้นด้วยเงื่อนไขเท่าที่ระบบเปิดให้เลือก เช่น ประเภทงาน หน่วยงาน จังหวัด ช่วงวันที่ หรือกรอบวงเงิน แล้วจดเงื่อนไขที่ใช้บ่อยไว้ เพราะประกาศใหม่เข้ามาต่อเนื่องแทบทุกวันทำการ และแต่ละฉบับมีกำหนดยื่นข้อเสนอของตัวเอง',
				en: 'Search on whatever the system lets you narrow by — type of work, agency, province, date range, budget band — and keep a note of the filters you use most — new notices arrive on nearly every working day, and each carries its own deadline.'
			}
		},
		{
			title: { th: 'อ่านเอกสารประกวดราคาและขอบเขตงานให้ครบก่อนตัดสินใจ', en: 'Read the bidding documents in full before you commit' },
			text: {
				th: 'ดาวน์โหลดเอกสารประกวดราคาและขอบเขตของงาน (TOR) แล้วไล่ดูคุณสมบัติผู้เสนอราคา ผลงานที่ต้องมี หลักประกัน เงื่อนไขการส่งมอบ และวันเวลายื่นข้อเสนอ หากข้อกำหนดข้อใดไม่ชัดเจน ให้สอบถามผ่านช่องทางที่ระบุไว้ในประกาศก่อนถึงกำหนด',
				en: 'Download the bidding documents and the terms of reference, then work through the bidder qualifications, required track record, guarantees, delivery terms and submission window. If a requirement is unclear, ask through the channel the notice names, before the deadline.'
			}
		},
		{
			title: { th: 'ยื่นข้อเสนอผ่านระบบ แล้วติดตามจนถึงประกาศสัญญา', en: 'Submit through the system, then follow it to the contract notice' },
			text: {
				th: 'ยื่นภายในกำหนดของประกาศฉบับนั้น และอย่ารอถึงชั่วโมงสุดท้ายเพราะการอัปโหลดเอกสารต้องใช้เวลา จากนั้นติดตามประกาศผลผู้ชนะและข้อมูลสาระสำคัญของสัญญา ซึ่งเป็นข้อมูลที่ใช้อ้างอิงได้ทั้งกรณีที่ชนะและไม่ชนะ',
				en: 'Submit within that notice’s window, and do not leave it to the last hour — uploading documents takes time. Then follow the award notice and the published contract summary, which is useful reference whether you won or lost.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ดูประกาศประกวดราคาต้องเสียเงินหรือสมัครสมาชิกไหม', en: 'Does reading the announcements cost anything?' },
			a: {
				th: 'ประกาศเชิญชวน แผนการจัดซื้อจัดจ้าง ราคากลาง และผลผู้ชนะ เป็นข้อมูลที่กฎหมายกำหนดให้เปิดเผยต่อสาธารณะ จึงเข้าดูได้ฟรีและไม่ต้องเป็นผู้ค้าที่ลงทะเบียน ส่วนการเข้าเสนอราคาบางโครงการอาจมีค่าซื้อเอกสารประกวดราคาหรือต้องวางหลักประกันตามที่หน่วยงานกำหนด ซึ่งจะระบุไว้ในประกาศแต่ละฉบับ',
				en: 'Invitations to bid, procurement plans, reference prices and award results are information the law requires to be public, so reading them is free and needs no supplier account. Bidding itself may involve a charge for the tender documents or a guarantee on some projects; each notice states what applies to it.'
			}
		},
		{
			q: { th: 'ทำไมค้นหาประกาศประกวดราคาใน Google แล้วไม่เจอ', en: 'Why can’t I find tender notices through Google?' },
			a: {
				th: 'เพราะเว็บไซต์ของระบบตั้งค่าไฟล์ robots.txt ห้ามเครื่องมือค้นหาทุกตัวเก็บข้อมูลทุกหน้า ประกาศจึงไม่ถูกจัดทำดัชนีและไม่ปรากฏในผลการค้นหา แม้จะเป็นข้อมูลที่กฎหมายสั่งให้เปิดเผยก็ตาม วิธีเดียวที่ได้ผลคือเข้าเว็บไซต์ทางการแล้วค้นจากภายในระบบโดยตรง',
				en: 'The site’s robots.txt instructs every search engine not to fetch any page, so the notices are never indexed and never surface in results — even though the law requires them to be disclosed. The only route that works is to open the official site and search inside the system itself.'
			}
		},
		{
			q: { th: 'บุคคลธรรมดาหรือร้านเล็ก ๆ เสนอราคางานภาครัฐได้ไหม', en: 'Can an individual or a small shop bid for government work?' },
			a: {
				th: 'ได้ หากมีคุณสมบัติครบตามที่ประกาศฉบับนั้นกำหนด และลงทะเบียนเป็นผู้ค้ากับภาครัฐไว้แล้ว งานที่มีวงเงินไม่สูงมักใช้วิธีที่ขั้นตอนสั้นกว่าและเข้าถึงได้จริงสำหรับรายเล็ก นอกจากนี้ยังมีมาตรการส่งเสริมผู้ประกอบการขนาดกลางและขนาดย่อมและสินค้าที่ผลิตในประเทศ ซึ่งรายละเอียดปรับปรุงเป็นระยะ ควรตรวจสอบเงื่อนไขล่าสุดจากประกาศของทางราชการ',
				en: 'Yes, provided you meet the qualifications in that particular notice and have registered as a state supplier. Lower-value purchases often use shorter procedures that smaller suppliers can realistically enter, and there are preference measures for SMEs and Thai-made goods — the details are revised periodically, so check the current rules in official announcements.'
			}
		},
		{
			q: { th: 'ลงทะเบียนแล้วเข้าระบบไม่ได้ หรือข้อมูลนิติบุคคลไม่ตรง ต้องทำอย่างไร', en: 'What if I cannot sign in, or my company details do not match?' },
			a: {
				th: 'สาเหตุที่พบบ่อยที่สุดคือข้อมูลที่กรอกไม่ตรงกับฐานข้อมูลทะเบียน เช่น ชื่อนิติบุคคลหรือที่อยู่ตามหนังสือรับรองที่เปลี่ยนไปแล้วแต่ยังไม่ได้แก้ไข ให้ตรวจสอบเลข 13 หลักและข้อมูลจดทะเบียนฉบับล่าสุดก่อนเป็นอันดับแรก หากยังเข้าไม่ได้ ให้ติดต่อเจ้าหน้าที่ตามช่องทางที่ประกาศไว้บนเว็บไซต์ทางการ และไม่ควรมอบบัญชีผู้ใช้ของกิจการให้บุคคลภายนอกเข้าระบบแทน',
				en: 'The usual cause is a mismatch with registry data — a company name or an address on the certificate that has changed but was never updated. Check your 13-digit number and your latest registration details first. If you still cannot get in, contact staff through the channel published on the official website, and never hand your company account to an outsider to use on your behalf.'
			}
		},
		{
			q: { th: 'มีคนติดต่อมาบอกว่ารับประกันให้ชนะประมูล ควรเชื่อไหม', en: 'Someone offers to guarantee I win a bid — is that genuine?' },
			a: {
				th: 'ไม่ควรเชื่อ ผลการจัดซื้อจัดจ้างตัดสินตามหลักเกณฑ์ที่ระบุไว้ในประกาศ ไม่มีใครรับประกันผลล่วงหน้าได้ และการจ่ายเงินเพื่อให้ได้งานเป็นความผิดตามกฎหมาย อีกเรื่องที่ต้องระวังคือเว็บไซต์ปลอมที่ทำเลียนแบบเพื่อเก็บข้อมูลผู้ค้า ก่อนเข้าสู่ระบบทุกครั้งให้ตรวจสอบว่าที่อยู่เว็บไซต์อยู่ภายใต้โดเมน gprocurement.go.th จริง',
				en: 'No. Awards are decided against the criteria set out in the notice, nobody can guarantee the outcome in advance, and paying to be given a contract is a criminal matter. Watch for lookalike sites built to harvest supplier details as well: before you log in, confirm the address really sits under the gprocurement.go.th domain.'
			}
		},
		{
			q: { th: 'ถ้าเห็นว่าผลการประกวดราคาไม่เป็นธรรม ทำอะไรได้บ้าง', en: 'What can I do if I think an award was unfair?' },
			a: {
				th: 'พระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560 เปิดให้ผู้เสนอราคาที่เสียประโยชน์ยื่นอุทธรณ์ต่อหน่วยงานเจ้าของเรื่อง เพื่อส่งต่อให้คณะกรรมการพิจารณาอุทธรณ์วินิจฉัย กรอบเวลาในการยื่นค่อนข้างสั้น จึงควรอ่านเงื่อนไขและระยะเวลาที่ระบุไว้ในประกาศและในกฎหมายทันทีที่ทราบผล พร้อมเก็บเอกสารหลักฐานไว้ให้ครบ',
				en: 'The Public Procurement and Supplies Administration Act B.E. 2560 (2017) allows a disadvantaged bidder to appeal to the procuring agency, which passes it to the appeals committee for a ruling. The window for filing is short, so read the conditions and time limits in the notice and in the Act as soon as the result is out, and keep every relevant document.'
			}
		},
		{
			q: { th: 'ไม่ได้เป็นผู้ค้า จะใช้ข้อมูลในระบบทำอะไรได้', en: 'I’m not a supplier — what is this data useful for?' },
			a: {
				th: 'ประกาศในระบบเป็นจุดตั้งต้นที่ดีสำหรับการติดตามการใช้จ่ายของหน่วยงานในพื้นที่ เช่น โครงการก่อสร้างในตำบลของคุณ ราคาที่ตกลงกัน และชื่อผู้รับงาน สื่อมวลชนและกลุ่มตรวจสอบใช้ข้อมูลชุดนี้ทำงานเป็นประจำ และประชาชนทั่วไปก็เข้าดูได้โดยไม่ต้องลงทะเบียน',
				en: 'The notices are a solid starting point for following how an agency near you spends — the construction project in your sub-district, the price agreed and the name of the contractor. Journalists and watchdog groups work from this data routinely, and any member of the public can read it without registering.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ระบบ e-GP คืออะไร', en: 'What is the e-GP system?' }
		},
		{
			type: 'p',
			text: {
				th: 'ระบบการจัดซื้อจัดจ้างภาครัฐด้วยอิเล็กทรอนิกส์ หรือ e-GP (Electronic Government Procurement) คือระบบกลางที่กรมบัญชีกลาง กระทรวงการคลัง ดูแล และเป็นช่องทางเดียวที่หน่วยงานของรัฐต้องใช้ประกาศการจัดซื้อจัดจ้างตามพระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560 ครอบคลุมตั้งแต่แผนประจำปีและประกาศเชิญชวนให้เสนอราคา ไปจนถึงชื่อผู้ชนะและราคาที่ตกลงกัน ไม่ว่าจะเป็นกระทรวง กรม รัฐวิสาหกิจ มหาวิทยาลัยของรัฐ หรือองค์การบริหารส่วนตำบลเล็ก ๆ ก็ต้องเผยแพร่ผ่านระบบเดียวกันนี้',
				en: 'e-GP — Electronic Government Procurement — is the central system operated by the Comptroller General’s Department under the Ministry of Finance, and the single channel state bodies must use to announce their purchasing under the Public Procurement and Supplies Administration Act B.E. 2560 (2017). It covers the annual plan and the invitation to bid through to the name of the winner and the price agreed. Ministries, departments, state enterprises, public universities and the smallest sub-district administration all publish through the same place.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ระบบนี้เปิดเผยข้อมูลอะไรบ้าง', en: 'What the system publishes' }
		},
		{
			type: 'table',
			caption: { th: 'ข้อมูลหลักที่เผยแพร่ในระบบ e-GP', en: 'The main record types in e-GP' },
			head: [
				{ th: 'ประเภทข้อมูล', en: 'Record' },
				{ th: 'บอกอะไรกับคุณ', en: 'What it tells you' }
			],
			rows: [
				[
					{ th: 'แผนการจัดซื้อจัดจ้าง', en: 'Procurement plan' },
					{ th: 'หน่วยงานตั้งใจจะซื้อหรือจ้างอะไรในปีงบประมาณนั้น เห็นได้ก่อนประกาศจริงจะออก', en: 'What an agency intends to buy or commission this budget year, visible before the actual notice appears' }
				],
				[
					{ th: 'ประกาศเชิญชวน / ประกวดราคา', en: 'Invitation to bid' },
					{ th: 'งานที่เปิดรับข้อเสนออยู่ในขณะนี้ พร้อมวงเงินและกำหนดยื่น', en: 'Work currently open for offers, with the budget figure and the deadline' }
				],
				[
					{ th: 'เอกสารประกวดราคาและขอบเขตของงาน', en: 'Bidding documents and terms of reference' },
					{ th: 'คุณสมบัติของผู้เสนอราคา รายละเอียดงาน และเงื่อนไขการส่งมอบ', en: 'Bidder qualifications, the scope of the work and delivery conditions' }
				],
				[
					{ th: 'ราคากลาง', en: 'Reference price' },
					{ th: 'ราคาที่หน่วยงานคำนวณไว้เป็นฐานเปรียบเทียบก่อนเปิดรับข้อเสนอ', en: 'The price the agency calculated as a benchmark before opening the process' }
				],
				[
					{ th: 'ประกาศผลผู้ชนะ', en: 'Award notice' },
					{ th: 'ชื่อผู้ประกอบการที่ได้งานและราคาที่ตกลงกัน', en: 'The supplier that won and the price agreed' }
				],
				[
					{ th: 'ข้อมูลสาระสำคัญในสัญญา', en: 'Contract summary' },
					{ th: 'สาระของสัญญาที่ลงนามแล้ว ใช้ตรวจสอบย้อนหลังได้', en: 'The substance of the signed contract, for checking after the fact' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ใครใช้ระบบนี้บ้าง', en: 'Who uses it' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ผู้ประกอบการที่ต้องการขายสินค้าหรือรับงานจากภาครัฐ ตั้งแต่ผู้รับเหมาก่อสร้างและผู้จำหน่ายครุภัณฑ์ ไปจนถึงบริษัทที่ปรึกษาและผู้ให้บริการซอฟต์แวร์',
					en: 'Businesses looking to sell to or work for the state — construction contractors and equipment suppliers as much as consultancies and software providers.'
				},
				{
					th: 'นักข่าว นักวิจัย และกลุ่มภาคประชาสังคมที่ติดตามการใช้จ่ายเงินแผ่นดิน โดยใช้ประกาศผลผู้ชนะและราคากลางเป็นหลักฐานตั้งต้น',
					en: 'Reporters, researchers and civil-society groups tracking public money, who use award notices and reference prices as their starting evidence.'
				},
				{
					th: 'เจ้าหน้าที่พัสดุของหน่วยงานรัฐ ซึ่งมีหน้าที่บันทึกและเผยแพร่ทุกขั้นตอนของกระบวนการผ่านระบบนี้ตามที่กฎหมายกำหนด',
					en: 'Government purchasing officers, who are required by law to record and publish each stage of the process here.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ผู้ค้าต้องลงทะเบียนก่อนจึงจะเสนอราคาได้', en: 'You must register before you can bid' }
		},
		{
			type: 'p',
			text: {
				th: 'การอ่านประกาศทำได้โดยไม่ต้องมีบัญชี แต่การเสนอราคาทำไม่ได้เลยหากยังไม่ได้ลงทะเบียนเป็นผู้ค้ากับภาครัฐ การลงทะเบียนผูกกับเลขทะเบียนนิติบุคคลหรือเลขประจำตัวผู้เสียภาษีอากร 13 หลัก ไม่ใช่ผูกกับตัวบุคคลที่กรอกข้อมูล หนึ่งกิจการจึงมีตัวตนเดียวในระบบ และข้อมูลต้องตรงกับที่จดทะเบียนไว้จริง เพราะระบบตรวจสอบข้ามกับฐานข้อมูลทะเบียนของทางราชการ เมื่อย้ายที่อยู่หรือเปลี่ยนผู้มีอำนาจลงนาม ควรแก้ข้อมูลทันที มิฉะนั้นเอกสารที่ยื่นอาจถูกตัดสิทธิเพราะข้อมูลไม่สอดคล้องกัน ขั้นตอนและเอกสารที่ต้องใช้มีการปรับปรุงเป็นระยะ ให้ยึดตามที่ระบบแจ้งไว้ในขณะที่คุณลงทะเบียน',
				en: 'Reading the notices needs no account; bidding does. Registration attaches to the 13-digit juristic-person registration or taxpayer number rather than to the person filling in the form, so one business has one identity in the system — and what you enter must match the register, because it is cross-checked against official registry data. If you move premises or change who is authorised to sign, update the record at once: a submission can be set aside simply because the details no longer line up. The steps and documents required are revised from time to time, so follow what the system states at the moment you register.'
			}
		},
		{
			type: 'h2',
			text: { th: 'วิธีจัดซื้อจัดจ้างที่คุณจะเห็นในประกาศ', en: 'The procurement methods you will see' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'วิธีประกาศเชิญชวนทั่วไป เปิดให้ผู้ค้าที่มีคุณสมบัติทุกรายเข้าเสนอราคา รูปแบบอิเล็กทรอนิกส์ที่พบบ่อยคือ e-bidding สำหรับงานที่มีรายละเอียดเฉพาะ และ e-market สำหรับสินค้าที่มีคุณลักษณะเป็นมาตรฐาน',
					en: 'General invitation — open to every qualified supplier. The common electronic forms are e-bidding, for work with specific requirements, and e-market, for goods with standardised specifications.'
				},
				{
					th: 'วิธีคัดเลือก หน่วยงานเชิญผู้ค้าที่มีคุณสมบัติจำนวนหนึ่งมาเสนอราคา ใช้ได้เมื่อเข้าเหตุที่กฎหมายกำหนดเท่านั้น',
					en: 'Selection — the agency invites a limited set of qualified suppliers to make offers, permitted only in the circumstances the law lists.'
				},
				{
					th: 'วิธีเฉพาะเจาะจง ติดต่อผู้ค้ารายใดรายหนึ่งโดยตรง ใช้ได้เฉพาะกรณีที่กฎหมายอนุญาต เช่น วงเงินไม่สูง หรือมีผู้ให้บริการเพียงรายเดียว',
					en: 'Specific method — approaching a single supplier directly, allowed only in the cases the law permits, such as low-value purchases or where there is only one provider.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'กฎหมายสั่งให้เปิดเผย แต่เครื่องมือค้นหาเข้าไม่ถึง', en: 'The law says disclose; the site says do not crawl' }
		},
		{
			type: 'p',
			text: {
				th: 'จุดที่ขัดกันเองอยู่ตรงนี้ กฎหมายกำหนดให้ประกาศเชิญชวนและผลการจัดซื้อจัดจ้างเป็นข้อมูลสาธารณะ ระบบก็เผยแพร่ไว้จริงตามหน้าที่ แต่ไฟล์ robots.txt ของเว็บไซต์มีเพียงสองบรรทัด สั่งห้ามเครื่องมือค้นหาทุกตัวเก็บข้อมูลทุกหน้า โดยไม่มีข้อยกเว้นให้ Googlebot และระบบย่อยที่ใช้ทำรายการก็ตั้งค่าแบบเดียวกัน ผลคือประกาศที่ต้องเปิดเผยตามกฎหมายไม่เคยถูกจัดทำดัชนี และไม่ปรากฏในผลการค้นหาใด ๆ',
				en: 'Here is the contradiction. The law makes invitations to bid and award results public information, and the system does publish them as required — but the site’s robots.txt is two lines telling every crawler not to fetch any page, with no exception for Googlebot, and the sub-system used for transactions carries the identical rule. So the notices the law requires to be disclosed are never indexed, and never appear in anyone’s search results.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'สำหรับร้านวัสดุก่อสร้างในต่างจังหวัด บริษัทซอฟต์แวร์ขนาดสิบคน หรือผู้รับเหมาที่เพิ่งเริ่มต้น ผลก็คือคุณจะไม่มีวันบังเอิญเจอโอกาสที่ตรงกับสิ่งที่คุณขาย การพิมพ์ชื่อสินค้าของคุณพร้อมคำว่าประกวดราคาลงใน Google ไม่ได้ผล คุณต้องรู้อยู่ก่อนแล้วว่าระบบนี้มีอยู่ รู้ชื่อของมัน และเข้าไปค้นเองเป็นกิจวัตร ความได้เปรียบจึงตกอยู่กับรายที่คุ้นเคยกับระบบอยู่แล้ว มากกว่ารายที่อาจเสนอราคาได้ดีที่สุด',
				en: 'For a builders’ merchant upcountry, a ten-person software firm or a contractor just starting out, the effect is that you will never stumble on an opportunity matching what you sell. Typing the product you supply plus the word “tender” into Google does nothing. You have to already know this system exists, know its name, and search it as a routine — which hands the advantage to whoever is already familiar with it, rather than to whoever might have bid best.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ทางเดียวที่ได้ผลคือค้นจากในระบบ', en: 'The only route that works is searching inside' },
			text: {
				th: 'อย่าพึ่งพาเครื่องมือค้นหาภายนอกในการหาประกาศ ให้บุ๊กมาร์กเว็บไซต์ทางการไว้ แล้วตั้งเป็นงานประจำสัปดาห์ที่จะเข้าไปค้นด้วยเงื่อนไขของคุณเอง ทั้งประเภทงาน จังหวัด และช่วงวงเงิน เพราะหลายประกาศมีเวลายื่นสั้น การเข้าไปดูช้าเพียงไม่กี่วันก็อาจพลาดรอบนั้นไปทั้งรอบ',
				en: 'Do not rely on an outside search engine to find notices. Bookmark the official site and make searching it a weekly habit, with your own filters — type of work, province, budget band. Many notices have short submission windows, and being a few days late to look can mean missing that round entirely.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมข้อมูลที่กฎหมายสั่งให้เปิดเผยจึงยังต้องมีหน้าที่ค้นเจอได้', en: 'Why disclosure this closed still needs a findable doorway' }
		},
		{
			type: 'p',
			text: {
				th: 'การเปิดเผยที่ค้นหาไม่เจอ ให้ผลไม่ต่างจากการไม่เปิดเผยสำหรับคนที่ยังไม่รู้ว่าต้องไปดูที่ไหน หน้านี้จึงเป็นประตูที่เครื่องมือค้นหามองเห็น อธิบายระบบด้วยคำที่ผู้ประกอบการใช้จริงอย่าง “ประมูลงานราชการ” หรือ “ขายของให้หน่วยงานรัฐ” แล้วบอกให้ชัดว่าข้อมูลอยู่ในระบบ e-GP ของกรมบัญชีกลาง ก่อนส่งคุณไปยังเว็บไซต์ทางการโดยตรง THGov เป็นไดเรกทอรีอิสระ ไม่เกี่ยวข้องกับหน่วยงานใด ไม่รับลงทะเบียนผู้ค้า ไม่รับเอกสาร และไม่รับข้อเสนอราคาแทนใคร ทุกขั้นตอนที่มีผลทางกฎหมายเกิดขึ้นบนระบบของทางราชการเท่านั้น',
				en: 'Disclosure that cannot be found amounts, for anyone who does not already know where to look, to very little disclosure at all. This page exists to be the doorway a search engine can see: it describes the system in the words businesses actually use — bidding for government work, selling to a state agency — says plainly that the records live in the Comptroller General’s Department’s e-GP system, and hands you to the official site. THGov is an independent directory with no connection to any agency. We take no supplier registrations, no documents and no bids on anyone’s behalf; every step with legal effect happens on the government’s own system.'
			}
		}
	],
	crawl: {
		host: 'www.gprocurement.go.th',
		verdict: 'blocked',
		kind: 'robots-disallow-all',
		status: 200,
		snippet: 'User-agent: *\nDisallow: /',
		checkedAt: '2026-08-27',
		note: {
			th: 'ไฟล์ robots.txt ของเว็บไซต์นี้สั่งห้ามเครื่องมือค้นหาทุกตัวเก็บข้อมูลทุกหน้า และไม่มีข้อยกเว้นให้ Googlebot นี่เป็นหลักฐานที่หนักแน่นที่สุด เพราะไฟล์ robots.txt เป็นสาธารณะและให้ผลเหมือนกันกับทุกคนที่เรียกดู ใครก็ตรวจสอบซ้ำได้',
			en: 'This site’s robots.txt instructs every crawler not to fetch any page, with no exception for Googlebot. This is the strongest form of evidence available, because robots.txt is public and identical for every requester — anyone can reproduce the check.'
		}
	},
	priority: 96,
	updated: '2026-08-27'
};
