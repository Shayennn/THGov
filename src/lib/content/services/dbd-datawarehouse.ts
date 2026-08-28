import type { Service } from '../types';

export const service: Service = {
	slug: 'dbd-datawarehouse',
	name: {
		th: 'DBD DataWarehouse+ — ตรวจสอบข้อมูลนิติบุคคลและงบการเงิน',
		en: 'DBD DataWarehouse+ — Thai Company Records and Financial Statements'
	},
	shortName: { th: 'DBD ค้นข้อมูลนิติบุคคล', en: 'DBD Company Records' },
	url: 'https://datawarehouse.dbd.go.th/',
	altUrls: [
		{ label: { th: 'เว็บไซต์หลัก กรมพัฒนาธุรกิจการค้า', en: 'Department of Business Development main site' }, url: 'https://www.dbd.go.th/' }
	],
	agency: 'dbd',
	categories: ['business'],
	summary: {
		th: 'ค้นข้อมูลนิติบุคคลไทยได้ฟรีจากกรมพัฒนาธุรกิจการค้า ทั้งเลขทะเบียน 13 หลัก ทุนจดทะเบียน กรรมการ สถานะกิจการ และงบการเงินย้อนหลังหลายปี พร้อมลิงก์ระบบทางการ',
		en: 'Look up any registered Thai company free — registration number, capital, directors, trading status and years of filed financial statements — on DBD DataWarehouse+.'
	},
	deck: {
		th: 'คลังข้อมูลนิติบุคคลของกรมพัฒนาธุรกิจการค้า ที่ให้คุณเช็กได้ฟรีว่าบริษัทหนึ่งมีตัวตนจริง ยังเปิดดำเนินการอยู่ และงบการเงินหลายปีที่ผ่านมาเป็นอย่างไร',
		en: 'The Department of Business Development’s public company registry — check for free whether a company really exists, whether it is still trading, and what its accounts have looked like over the years.'
	},
	keywords: {
		th: [
			'เช็คบริษัท',
			'ตรวจสอบบริษัท',
			'ค้นหาชื่อบริษัท',
			'ตรวจสอบนิติบุคคล',
			'เช็คบริษัทว่ามีจริงไหม',
			'เช็คงบการเงินบริษัท',
			'ดูงบการเงินย้อนหลัง',
			'เลขทะเบียนนิติบุคคล 13 หลัก',
			'ตรวจสอบบริษัทก่อนโอนเงิน',
			'เช็คทุนจดทะเบียน',
			'DBD DataWarehouse',
			'กรมพัฒนาธุรกิจการค้า',
			'ค้นหาบริษัทจากเลขผู้เสียภาษี'
		],
		en: [
			'DBD DataWarehouse',
			'Thai company registration lookup',
			'check Thai company financial statements',
			'Department of Business Development Thailand',
			'Thailand juristic person number',
			'verify Thai supplier',
			'Thai company due diligence'
		]
	},
	features: [
		{
			icon: 'search',
			title: { th: 'ค้นด้วยชื่อหรือเลขทะเบียน 13 หลัก', en: 'Search by name or 13-digit number' },
			text: {
				th: 'พิมพ์ชื่อนิติบุคคลหรือเลขทะเบียน 13 หลักก็ค้นเจอ ใช้ได้ทั้งบริษัทจำกัด ห้างหุ้นส่วนจำกัด และบริษัทมหาชนที่จดทะเบียนในประเทศไทย',
				en: 'Type a registered name or the 13-digit number to find limited companies, limited partnerships and public companies registered in Thailand.'
			}
		},
		{
			icon: 'building',
			title: { th: 'ข้อมูลทะเบียนตามที่ยื่นไว้จริง', en: 'The registry record as filed' },
			text: {
				th: 'เห็นวันจดทะเบียน ทุนจดทะเบียน ประเภทธุรกิจตามรหัส TSIC ที่ตั้งสำนักงาน และสถานะว่ายังดำเนินกิจการอยู่หรือเลิกไปแล้ว',
				en: 'Registration date, registered capital, business type by TSIC code, registered office, and whether the entity is still active or has been dissolved.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'งบการเงินย้อนหลังหลายปี', en: 'Years of filed financial statements' },
			text: {
				th: 'เปิดดูงบแสดงฐานะการเงินและงบกำไรขาดทุนที่นิติบุคคลนำส่งในแต่ละปี แล้วเทียบแนวโน้มด้วยตัวเองโดยไม่ต้องซื้อรายงานจากใคร',
				en: 'Open the balance sheet and income statement filed for each year and read the trend yourself, without buying a report from anyone.'
			}
		},
		{
			icon: 'users',
			title: { th: 'รายชื่อกรรมการและผู้มีอำนาจลงนาม', en: 'Directors and signing authority' },
			text: {
				th: 'ตรวจว่าคนที่มาเจรจาหรือมาเซ็นสัญญาเป็นกรรมการผู้มีอำนาจของนิติบุคคลนั้นจริงหรือไม่ ก่อนที่เอกสารจะมีผลผูกพัน',
				en: 'Check whether the person negotiating or signing is genuinely an authorised director before the paperwork binds anyone.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ใช้ตรวจคู่ค้าก่อนโอนเงิน', en: 'Vet a counterparty before you pay' },
			text: {
				th: 'ใช้เวลาไม่กี่นาทีก่อนวางมัดจำหรือให้เครดิต เพื่อยืนยันว่าปลายทางมีตัวตนตามกฎหมายจริงและยังไม่ได้จดทะเบียนเลิกกิจการ',
				en: 'A few minutes before you place a deposit or extend credit confirms the other side legally exists and has not been wound up.'
			}
		},
		{
			icon: 'coins',
			title: { th: 'เป็นข้อมูลเปิด ใช้ได้ฟรี', en: 'Open data, free to use' },
			text: {
				th: 'ข้อมูลทะเบียนนิติบุคคลเปิดเผยต่อสาธารณะตามกฎหมาย จึงค้นดูได้โดยไม่มีค่าบริการ ไม่ต้องจ่ายเงินให้เว็บภายนอกเพื่อดูข้อมูลชุดเดียวกัน',
				en: 'Registry data is public by law, so looking it up costs nothing — there is no need to pay a third-party site for the same records.'
			}
		}
	],
	steps: [
		{
			title: { th: 'เตรียมชื่อจดทะเบียนหรือเลขนิติบุคคล 13 หลัก', en: 'Get the registered name or the 13-digit number' },
			text: {
				th: 'ตัวเลข 13 หลักหาได้จากใบกำกับภาษี ใบเสร็จรับเงิน หัวจดหมาย หรือหนังสือสัญญาที่คู่ค้าออกให้ ถ้ามีตัวเลขนี้จะค้นได้ตรงตัวที่สุด เพราะไม่ซ้ำกับนิติบุคคลรายอื่นและไม่เปลี่ยนแม้บริษัทจะเปลี่ยนชื่อภายหลัง',
				en: 'The 13-digit number appears on tax invoices, receipts, letterheads and contracts. It is the most precise way in: no two entities share it, and it survives a change of company name.'
			}
		},
		{
			title: { th: 'เข้าเว็บไซต์ทางการด้วยตัวเอง', en: 'Open the official site yourself' },
			text: {
				th: 'พิมพ์ที่อยู่เว็บไซต์เองหรือกดลิงก์ทางการจากหน้านี้ อย่าเข้าผ่านลิงก์ในอีเมลหรือข้อความที่ไม่รู้ที่มา และตรวจให้แน่ใจว่าโดเมนลงท้ายด้วย dbd.go.th ก่อนเริ่มใช้งาน',
				en: 'Type the address yourself or use the official link on this page. Do not follow links from unsolicited email or chat, and confirm the domain ends in dbd.go.th before going further.'
			}
		},
		{
			title: { th: 'ค้นด้วยชื่อหรือเลขทะเบียน แล้วเลือกให้ตรงราย', en: 'Search, then match the right entity' },
			text: {
				th: 'ถ้าค้นด้วยชื่อ ให้พิมพ์เฉพาะคำเด่นของชื่อ ไม่ต้องใส่คำว่าบริษัทหรือจำกัด จากนั้นเลือกผลลัพธ์ที่เลขทะเบียนตรงกับที่คู่ค้าให้มา เพราะชื่อคล้ายกันมีอยู่ได้หลายราย',
				en: 'Searching by name, enter just the distinctive words — no need for “Company” or “Limited” — then pick the result whose registration number matches the one your counterparty gave you, since similar names are common.'
			}
		},
		{
			title: { th: 'อ่านหน้าข้อมูลทะเบียนให้ครบ', en: 'Read the whole registry record' },
			text: {
				th: 'ดูสถานะนิติบุคคลเป็นอันดับแรก จากนั้นจึงดูวันจดทะเบียน ทุนจดทะเบียน ประเภทธุรกิจ ที่ตั้งสำนักงาน และรายชื่อกรรมการ แล้วเทียบกับเอกสารที่คุณได้รับมา หากมีจุดใดไม่ตรงกัน ให้สอบถามก่อนดำเนินการต่อ',
				en: 'Check the status line first, then registration date, capital, business type, registered office and the list of directors — and compare each against the paperwork you were given. Any mismatch is worth asking about before you proceed.'
			}
		},
		{
			title: { th: 'เปิดงบการเงินย้อนหลังแล้วอ่านเป็นชุด', en: 'Open several years of statements at once' },
			text: {
				th: 'อย่าดูปีเดียวแล้วสรุป ให้เปิดงบหลายปีเรียงต่อกันเพื่อดูแนวโน้มของรายได้ กำไรขาดทุน และส่วนของผู้ถือหุ้น ตัวเลขที่สวิงแรงผิดปกติหรือปีที่หายไปเฉย ๆ คือจุดที่ควรถามเพิ่ม',
				en: 'One year on its own says little. Line the years up and read the trend in revenue, profit or loss and shareholders’ equity. A sharp swing, or a year that is simply missing, is the point to ask more questions.'
			}
		},
		{
			title: { th: 'สมัครสมาชิกฟรีเมื่อต้องใช้ฟังก์ชันเชิงลึก', en: 'Register free if you need the deeper tools' },
			text: {
				th: 'การค้นข้อมูลพื้นฐานทำได้โดยไม่ต้องเข้าสู่ระบบ แต่รายงานเชิงลึกหรือการเรียกดูข้อมูลจำนวนมากอาจต้องสมัครสมาชิกก่อน ซึ่งเป็นการสมัครกับหน่วยงานรัฐโดยตรงและไม่มีค่าใช้จ่าย',
				en: 'Basic lookups need no account, but deeper reports and heavier use may ask you to sign in first. Registration is free and goes directly to the agency.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ใช้ฟรีจริงไหม ต้องสมัครสมาชิกหรือเปล่า', en: 'Is it really free, and do I have to register?' },
			a: {
				th: 'การค้นหาและดูข้อมูลทะเบียนนิติบุคคลพื้นฐานใช้ได้ฟรีโดยไม่ต้องเข้าสู่ระบบ เพราะเป็นข้อมูลที่เปิดเผยต่อสาธารณะอยู่แล้ว ส่วนฟังก์ชันเชิงลึก เช่น รายงานวิเคราะห์หรือการเรียกดูข้อมูลจำนวนมาก อาจให้สมัครสมาชิกก่อน ซึ่งการสมัครไม่มีค่าใช้จ่าย หากพบเว็บที่เรียกเก็บเงินเพื่อดูข้อมูลชุดนี้ นั่นไม่ใช่ระบบของกรมพัฒนาธุรกิจการค้า',
				en: 'Searching and reading the basic registry record is free and needs no sign-in — the data is already public. Deeper features, such as analysis reports or bulk browsing, may ask you to register first, and registering itself costs nothing. If a site charges you to see these records, it is not the department’s system.'
			}
		},
		{
			q: { th: 'รู้แค่ชื่อร้าน ไม่รู้เลขทะเบียน ค้นได้ไหม', en: 'I only know the shop name, not the number — can I still search?' },
			a: {
				th: 'ค้นได้ ระบบรองรับทั้งชื่อนิติบุคคลและเลขทะเบียน 13 หลัก แต่ชื่อร้านหรือชื่อแบรนด์ที่ใช้ทางการค้ามักไม่ตรงกับชื่อที่จดทะเบียนไว้ วิธีที่แม่นที่สุดคือหาเลข 13 หลักจากใบกำกับภาษี ใบเสร็จ หรือหนังสือสัญญา แล้วค้นด้วยตัวเลขนั้น เพราะเลขทะเบียนไม่ซ้ำกันและไม่เปลี่ยนแม้บริษัทจะเปลี่ยนชื่อ',
				en: 'Yes — you can search by registered name or by the 13-digit juristic person number. Trading names and brand names, though, often differ from the registered name. The most reliable route is to take the 13-digit number off a tax invoice, receipt or contract and search on that: the number is unique and stays the same even when a company renames itself.'
			}
		},
		{
			q: { th: 'ค้นชื่อบริษัทแล้วไม่เจอ เกิดจากอะไร', en: 'Why can’t I find the company I’m looking for?' },
			a: {
				th: 'สาเหตุที่พบบ่อยที่สุดคือพิมพ์ชื่อไม่ตรงกับที่จดทะเบียน เช่น ใส่คำว่าบริษัทหรือจำกัดเกินหรือขาด สะกดต่างกันเล็กน้อย หรือค้นด้วยชื่อภาษาอังกฤษทั้งที่จดทะเบียนเป็นภาษาไทย ให้ลองพิมพ์เฉพาะคำเด่นของชื่อโดยตัดคำนำหน้าและคำต่อท้ายออก อีกสาเหตุคือกิจการนั้นไม่ได้จดทะเบียนเป็นนิติบุคคล เช่น ร้านที่เจ้าของทำในนามบุคคลธรรมดา ซึ่งไม่มีอยู่ในทะเบียนนี้ตั้งแต่ต้น',
				en: 'Most often the spelling does not match the registration — an extra or missing “Company Limited”, a slightly different transliteration, or an English search against a Thai-language registration. Try the distinctive part of the name on its own, without the prefix and suffix. The other common reason is that the business is not a juristic person at all: a shop run by an individual owner never appears in this registry.'
			}
		},
		{
			q: { th: 'ทำไมงบการเงินปีล่าสุดยังไม่ขึ้นในระบบ', en: 'Why is the most recent year’s financial statement missing?' },
			a: {
				th: 'งบการเงินจะปรากฏหลังจากนิติบุคคลนำส่งตามรอบที่กฎหมายกำหนดและระบบประมวลผลเสร็จแล้ว จึงเป็นเรื่องปกติที่ปีบัญชีล่าสุดจะยังไม่แสดงในช่วงต้นปีถัดมา แต่ถ้าบริษัทหนึ่งไม่มีงบหลายปีติดต่อกันทั้งที่ยังมีสถานะดำเนินกิจการอยู่ นั่นคือสัญญาณที่ควรสอบถามเพิ่มก่อนตัดสินใจ',
				en: 'Statements appear only after the entity has filed them within the period the law sets and the filing has been processed, so it is normal for the latest accounting year to be absent early in the following year. If a company shows no statements for several consecutive years while still listed as active, treat that as a question worth raising before you commit.'
			}
		},
		{
			q: { th: 'ข้อมูลจากระบบนี้ใช้เป็นเอกสารอ้างอิงทางกฎหมายได้ไหม', en: 'Can I use what I see here as a legal document?' },
			a: {
				th: 'ข้อมูลบนหน้าจอใช้ตรวจสอบเบื้องต้นได้ดี แต่ภาพหน้าจอไม่ใช่เอกสารราชการ หากต้องใช้ประกอบสัญญา ยื่นต่อศาล หรือเปิดบัญชีธนาคาร ต้องขอหนังสือรับรองนิติบุคคลหรือสำเนาที่นายทะเบียนรับรองผ่านช่องทางของกรมพัฒนาธุรกิจการค้าโดยตรง ซึ่งมีค่าธรรมเนียมตามอัตราที่กรมประกาศไว้ ให้ตรวจอัตราปัจจุบันจากเว็บไซต์ทางการ',
				en: 'What you see on screen is fine for a first check, but a screenshot is not an official document. For a contract, a court filing or opening a bank account you need a certificate of incorporation or a registrar-certified copy, requested through the department’s own channels, for the fee it publishes. Check the current rate on the official site.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าเว็บที่ให้ข้อมูลบริษัทเป็นของทางการ', en: 'How can I tell which company-data site is the official one?' },
			a: {
				th: 'ให้ดูชื่อโดเมนเป็นอันดับแรก ระบบของกรมพัฒนาธุรกิจการค้าอยู่ภายใต้ dbd.go.th เท่านั้น เว็บไซต์เอกชนจำนวนมากนำข้อมูลสาธารณะชุดเดียวกันไปจัดหน้าใหม่แล้วเก็บค่าสมาชิกหรือค่ารายงาน ซึ่งไม่ผิดกฎหมายแต่ก็ไม่ใช่หน่วยงานราชการ และข้อมูลอาจไม่ทันปัจจุบัน หากเว็บใดขอเลขบัตรประชาชนหรือข้อมูลบัตรเครดิตเพียงเพื่อดูข้อมูลนิติบุคคลทั่วไป ให้ถอยออกมาแล้วเข้าระบบทางการด้วยตัวเอง',
				en: 'Start with the domain: the department’s system sits under dbd.go.th and nowhere else. Plenty of private sites republish this same public data behind a membership or report fee — not illegal, but they are not a government agency and their copies can be out of date. If a site asks for your ID card number or card details merely to view an ordinary company record, back out and go to the official system yourself.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'DBD DataWarehouse+ คืออะไร', en: 'What is DBD DataWarehouse+?' }
		},
		{
			type: 'p',
			text: {
				th: 'DBD DataWarehouse+ คือคลังข้อมูลธุรกิจของกรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์ ที่เปิดให้ทุกคนค้นดูข้อมูลนิติบุคคลซึ่งจดทะเบียนในประเทศไทยได้ฟรี ทั้งบริษัทจำกัด ห้างหุ้นส่วนจำกัด และบริษัทมหาชนจำกัด ข้อมูลที่แสดงมาจากสิ่งที่นิติบุคคลนำส่งต่อนายทะเบียนโดยตรง จึงใกล้เคียงเอกสารต้นทางที่สุดเท่าที่คนทั่วไปจะเข้าถึงได้',
				en: 'DBD DataWarehouse+ is the business data warehouse run by the Department of Business Development, part of Thailand’s Ministry of Commerce. It lets anyone look up a juristic person registered in Thailand — a limited company, a limited partnership or a public company — free of charge. What it shows comes from what those entities file with the registrar, which makes it the closest thing to a primary source that the public can reach.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ข้อมูลชุดนี้เป็นข้อมูลเปิด นิติบุคคลที่จดทะเบียนในไทยมีหน้าที่นำส่งรายละเอียดการจดทะเบียนและงบการเงินประจำปีต่อกรม และข้อมูลเหล่านั้นเปิดให้สาธารณชนตรวจสอบได้ตามกฎหมาย การค้นดูจึงไม่ใช่การล่วงล้ำความเป็นส่วนตัวของใคร แต่เป็นกลไกความโปร่งใสที่ระบบทะเบียนธุรกิจออกแบบไว้ตั้งแต่ต้น',
				en: 'This is open data. Entities registered in Thailand are obliged to file their registration details and annual financial statements with the department, and those filings are open to public inspection by law. Looking a company up is not snooping — it is the transparency mechanism the business registry was built around.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ดูข้อมูลอะไรได้บ้าง', en: 'What the record contains' }
		},
		{
			type: 'table',
			caption: { th: 'ข้อมูลหลักในทะเบียนนิติบุคคล และวิธีอ่านให้ถูก', en: 'The main fields in a company record, and how to read them' },
			head: [
				{ th: 'ข้อมูล', en: 'Field' },
				{ th: 'บอกอะไรกับคุณ', en: 'What it tells you' },
				{ th: 'ข้อควรระวัง', en: 'Caveat' }
			],
			rows: [
				[
					{ th: 'ชื่อและเลขทะเบียน 13 หลัก', en: 'Registered name and 13-digit number' },
					{ th: 'ยืนยันว่าคู่ค้ามีตัวตนตามกฎหมาย และเป็นรายเดียวกับที่ระบุในสัญญา', en: 'Confirms the counterparty legally exists and is the entity named in your contract' },
					{ th: 'ชื่อทางการค้าอาจไม่ตรงกับชื่อจดทะเบียน ให้ยึดเลข 13 หลัก', en: 'Trading names often differ from registered names — trust the number' }
				],
				[
					{ th: 'สถานะนิติบุคคล', en: 'Status' },
					{ th: 'ยังดำเนินกิจการอยู่ เลิกกิจการแล้ว หรืออยู่ระหว่างชำระบัญชี', en: 'Active, dissolved, or in liquidation' },
					{ th: 'สถานะดำเนินกิจการอยู่ไม่ได้แปลว่ายังค้าขายจริง', en: '“Active” does not prove the business is trading today' }
				],
				[
					{ th: 'ทุนจดทะเบียน', en: 'Registered capital' },
					{ th: 'ขนาดทุนที่แจ้งไว้ตอนจดทะเบียนหรือเมื่อเพิ่มทุนภายหลัง', en: 'The capital declared at registration or at a later increase' },
					{ th: 'ไม่ใช่เงินสดในมือ และไม่ได้สะท้อนความมั่นคงทางการเงิน', en: 'Not cash in hand, and not a measure of financial strength' }
				],
				[
					{ th: 'กรรมการและอำนาจลงนาม', en: 'Directors and signing authority' },
					{ th: 'ใครมีอำนาจผูกพันนิติบุคคลเมื่อลงนามในเอกสาร', en: 'Who can bind the entity when signing a document' },
					{ th: 'เงื่อนไขอาจกำหนดให้กรรมการต้องลงนามร่วมกัน', en: 'The condition may require two or more directors to sign jointly' }
				],
				[
					{ th: 'ที่ตั้งสำนักงานและรหัสธุรกิจ TSIC', en: 'Registered office and TSIC business type' },
					{ th: 'ที่อยู่ตามทะเบียนและหมวดธุรกิจที่แจ้งไว้', en: 'The address on file and the industry category declared' },
					{ th: 'ที่อยู่จดทะเบียนอาจไม่ใช่สถานที่ทำงานจริง', en: 'A registered address is not necessarily where work happens' }
				],
				[
					{ th: 'งบการเงินย้อนหลัง', en: 'Filed financial statements' },
					{ th: 'งบแสดงฐานะการเงินและงบกำไรขาดทุนที่นำส่งในแต่ละปี', en: 'The balance sheet and income statement filed for each year' },
					{ th: 'ปีล่าสุดมักยังไม่ปรากฏจนกว่าจะนำส่งและประมวลผลเสร็จ', en: 'The newest year appears only after filing and processing' }
				]
			]
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ทุนจดทะเบียนไม่ใช่เครื่องวัดฐานะ', en: 'Registered capital is not a health check' },
			text: {
				th: 'ตัวเลขทุนจดทะเบียนบอกเพียงว่าผู้ถือหุ้นตกลงลงทุนไว้เท่าไรตามทะเบียน ไม่ได้แปลว่ามีเงินจำนวนนั้นอยู่ในบัญชี บริษัทที่ทุนสูงอาจมีขาดทุนสะสมจนส่วนของผู้ถือหุ้นติดลบก็ได้ ให้ประเมินฐานะจริงจากงบหลายปีติดกัน โดยดูแนวโน้มรายได้ กำไรสุทธิ และส่วนของผู้ถือหุ้นประกอบกัน',
				en: 'Registered capital records only how much the shareholders agreed on paper to put in; it says nothing about the cash in the bank. A company with impressive capital can still carry accumulated losses deep enough to leave shareholders’ equity negative. Judge the real position from several consecutive years of statements, reading revenue, net profit and equity together.'
			}
		},
		{
			type: 'h2',
			text: { th: 'คนใช้คลังข้อมูลนี้ทำอะไรบ้าง', en: 'What people actually use it for' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ตรวจก่อนโอนเงินมัดจำหรือจ่ายค่าสินค้าล่วงหน้า ว่าปลายทางมีตัวตนจริงและยังไม่จดทะเบียนเลิกกิจการ ซึ่งใช้เวลาไม่กี่นาทีแต่เลี่ยงปัญหาที่แก้ยากภายหลังได้มาก',
					en: 'Before paying a deposit or prepaying for goods, confirm the recipient is a real entity that has not been wound up — a few minutes that heads off problems which are painful to unwind later.'
				},
				{
					th: 'เทียบสุขภาพทางการเงินของซัพพลายเออร์หรือผู้รับเหมาหลายรายก่อนเลือกคู่สัญญา',
					en: 'Compare the financial health of several suppliers or contractors before picking one.'
				},
				{
					th: 'ตรวจว่าชื่อในใบเสนอราคา ใบกำกับภาษี และสัญญา ตรงกับชื่อจดทะเบียนและเลข 13 หลักชุดเดียวกัน',
					en: 'Check that the quotation, the tax invoice and the contract all point to one registered name and one 13-digit number.'
				},
				{
					th: 'ยืนยันว่าผู้ที่มาเซ็นสัญญาเป็นกรรมการผู้มีอำนาจลงนามตามที่จดทะเบียนไว้',
					en: 'Verify that whoever signs is an authorised director as recorded in the registry.'
				},
				{
					th: 'ผู้สื่อข่าวและนักวิจัยใช้ไล่ดูความเชื่อมโยงของกรรมการที่ปรากฏชื่อในนิติบุคคลหลายแห่ง',
					en: 'Journalists and researchers trace directors whose names recur across several entities.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ข้อจำกัดที่ควรรู้ก่อนใช้ตัดสินใจ', en: 'Limits to keep in mind before you decide' }
		},
		{
			type: 'p',
			text: {
				th: 'คลังข้อมูลนี้ตอบได้ดีว่านิติบุคคลรายนั้นมีอยู่จริงหรือไม่ และเคยแจ้งตัวเลขอะไรไว้บ้าง แต่ตอบไม่ได้ทุกเรื่อง การอ่านโดยรู้ขอบเขตของมันจะให้ผลแม่นกว่าการเชื่อหน้าจอเพียงหน้าเดียว',
				en: 'The registry answers two questions very well — does this entity exist, and what figures has it declared. It does not answer everything, and reading it with its boundaries in mind beats trusting a single screen.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'งบการเงินเป็นข้อมูลย้อนหลังตามรอบบัญชี ไม่ใช่ภาพสถานะ ณ วันที่คุณเปิดดู',
					en: 'Financial statements look back to a closed accounting period, not to the day you open them.'
				},
				{
					th: 'ทะเบียนไม่ได้บอกว่านิติบุคคลมีคดีความ ข้อพิพาท หรือประวัติผิดนัดชำระหนี้หรือไม่',
					en: 'The registry does not reveal lawsuits, disputes or a history of missed payments.'
				},
				{
					th: 'บริษัทที่หยุดดำเนินงานจริงแต่ยังไม่จดทะเบียนเลิก จะยังแสดงสถานะเหมือนบริษัทปกติ',
					en: 'A company that has quietly stopped operating but never filed for dissolution still shows the same status as a working one.'
				},
				{
					th: 'ผู้ประกอบการบุคคลธรรมดาและร้านค้าที่ไม่ได้จดทะเบียนเป็นนิติบุคคลจะไม่ปรากฏในระบบนี้',
					en: 'Sole traders and shops that were never incorporated do not appear here at all.'
				},
				{
					th: 'ฟังก์ชันเชิงลึกบางส่วน เช่น รายงานเปรียบเทียบหรือการเรียกดูข้อมูลจำนวนมาก อาจต้องสมัครสมาชิกฟรีก่อน',
					en: 'Some deeper features, such as comparison reports or heavy browsing, may require a free account first.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ระวังเว็บที่ขายข้อมูลชุดเดียวกันนี้', en: 'Beware sites reselling the same records' }
		},
		{
			type: 'p',
			text: {
				th: 'เมื่อค้นชื่อบริษัทไทยในเครื่องมือค้นหา ผลลัพธ์หน้าแรกมักเป็นเว็บไซต์เอกชนที่ดึงข้อมูลทะเบียนนิติบุคคลชุดเดียวกันนี้ไปจัดหน้าใหม่ บางแห่งให้ดูฟรีบางส่วนแล้วเก็บเงินค่ารายงานฉบับเต็ม บางแห่งแสดงข้อมูลเก่าที่ไม่ตรงกับทะเบียนปัจจุบัน เว็บเหล่านี้ไม่ใช่หน่วยงานราชการและไม่มีอำนาจรับรองความถูกต้องของข้อมูล',
				en: 'Search a Thai company name and the first page of results is usually private sites that have scraped this same registry and repackaged it. Some show a fragment free and charge for the full report; some serve stale copies that no longer match the register. None is a government agency, and none can certify the accuracy of what it shows.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ตรวจโดเมนก่อนจ่ายเงิน', en: 'Check the domain before you pay' },
			text: {
				th: 'ก่อนกรอกข้อมูลหรือชำระเงินให้เว็บที่อ้างว่าให้บริการข้อมูลนิติบุคคล ให้ดูชื่อโดเมนก่อนเสมอ ระบบของรัฐอยู่ภายใต้ dbd.go.th เท่านั้น และหากต้องการเอกสารที่ใช้อ้างอิงทางกฎหมายได้ ต้องขอผ่านช่องทางของกรมพัฒนาธุรกิจการค้าโดยตรง เพราะรายงานจากเว็บภายนอกไม่มีสถานะเป็นเอกสารราชการ',
				en: 'Before entering anything or paying a site that claims to sell company information, look at the domain. The government system lives under dbd.go.th and nowhere else. If you need a document with legal standing, request it through the department’s own channels — a third-party report carries no official status.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงต้องมีอยู่', en: 'Why this page needs to exist' }
		},
		{
			type: 'p',
			text: {
				th: 'คลังข้อมูลนิติบุคคลของกรมพัฒนาธุรกิจการค้าเป็นบริการฟรีที่เปิดให้ทุกคนใช้ แต่ตัวระบบกลับแทบมองไม่เห็นจากเครื่องมือค้นหา เพราะคำขอที่มาจากบอตจะถูกส่งกลับมายังที่อยู่เดิมวนซ้ำจนตัวเก็บข้อมูลยอมแพ้ไปเอง ผลคือเมื่อมีคนค้นชื่อบริษัทสักแห่ง สิ่งที่ขึ้นมาก่อนคือเว็บเอกชนที่นำข้อมูลสาธารณะชุดเดียวกันไปขายต่อ ส่วนต้นทางที่ให้ดูฟรีกลับไม่ปรากฏเลย หน้านี้จึงทำหน้าที่เป็นป้ายบอกทางที่เครื่องมือค้นหาอ่านได้ อธิบายว่าระบบเก็บอะไรไว้ ใช้อย่างไร และมีข้อจำกัดตรงไหน แล้วพาผู้อ่านกลับไปยังแหล่งทางการที่ไม่คิดค่าบริการ ทั้งนี้ ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดกรมพัฒนาธุรกิจการค้า และไม่เก็บข้อมูลส่วนบุคคลหรือค่าบริการจากผู้อ่าน',
				en: 'The department’s company registry is free for anyone to use, yet search engines can barely see it: a crawler’s request is bounced back to the same address, again and again, until the crawler gives up. The consequence shows up every time someone searches a Thai company name — private sites reselling this same public data rank first, while the free original never surfaces. This page is a signpost that search engines can read: it sets out what the registry holds, how to use it and where it stops, then hands the reader back to the official source that charges nothing. ThaiGov.co is an independent directory, unaffiliated with the department, and it collects no personal data and no fees from readers.'
			}
		}
	],
	crawl: {
		host: 'datawarehouse.dbd.go.th',
		verdict: 'partial',
		kind: 'browser-only',
		status: null,
		snippet: 'Full desktop-Chrome request profile\n  GET /            ->  redirects to itself, still looping after 5 hops\n  GET /robots.txt  ->  same loop\nTypically a cookie or session challenge that a crawler cannot complete.\n\nHeadless Chromium (real browser engine)\n  GET /  ->  200  (served normally)\n  GET /robots.txt  ->  403',
		checkedAt: '2026-08-28',
		note: {
			th: 'เมื่อเรียกด้วยโปรแกรมทั่วไป เว็บไซต์นี้ปฏิเสธคำขอ แต่เมื่อเปิดด้วยเบราว์เซอร์ Chromium จริงที่ประมวลผลจาวาสคริปต์ครบถ้วน เว็บไซต์กลับตอบกลับตามปกติ และเราอ่านไฟล์ robots.txt ได้จากช่องทางนั้น ผู้ใช้ที่เปิดผ่านเบราว์เซอร์จึงไม่ได้รับผลกระทบ ขณะที่บริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI ที่ประชาชนเริ่มใช้ค้นหาบริการภาครัฐ เข้าไม่ถึงเนื้อหาเลย',
			en: 'The site refuses ordinary clients but answers a real Chromium browser that runs the page’s JavaScript, and we read its robots.txt over that connection. People using a browser are unaffected, while web archives, third-party monitoring and the AI assistants people increasingly use to look up government services get nothing at all.'
		}
	},
	priority: 99,
	updated: '2026-08-27'
};
