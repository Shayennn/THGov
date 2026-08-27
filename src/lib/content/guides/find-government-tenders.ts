import type { Guide } from '../types';

export const guide: Guide = {
	slug: 'find-government-tenders',
	title: {
		th: 'วิธีหาประกาศประกวดราคาภาครัฐ สำหรับผู้ประกอบการรายเล็ก',
		en: 'How Small Businesses Can Find Thai Government Tenders'
	},
	deck: {
		th: 'งานราชการไม่ได้หายไปไหน แต่มันไม่โผล่บน Google คู่มือนี้พาคุณเข้าไปหามันให้เจอในระบบกลาง ตั้งแต่ลงทะเบียนผู้ค้า จนถึงอ่านผลผู้ชนะเพื่อตั้งราคาครั้งต่อไป',
		en: 'The work is there — it just never shows up on Google. This guide walks a first-time bidder into the central system, from registering as a supplier to reading award results before pricing a bid.'
	},
	summary: {
		th: 'ธุรกิจรายเล็กหางานราชการไม่เจอ เพราะประกาศประกวดราคาไม่ขึ้นบน Google คู่มือนี้อธิบายวิธีลงทะเบียนผู้ค้า ค้นประกาศในระบบ e-GP อ่านเงื่อนไข และใช้ผลผู้ชนะตั้งราคา',
		en: 'Thai tender notices never reach Google, so small firms never see them. How to register as a supplier, search inside e-GP, read a notice and price from past awards.'
	},
	keywords: {
		th: [
			'หางานราชการ',
			'ขายของให้ราชการ',
			'วิธีหาประกาศประกวดราคา',
			'ประมูลงานราชการ เริ่มยังไง',
			'ลงทะเบียนผู้ค้ากับภาครัฐ',
			'SME ขายให้ภาครัฐ',
			'หาประกาศจัดซื้อจัดจ้าง',
			'ประกวดราคาอิเล็กทรอนิกส์',
			'e-bidding คืออะไร',
			'ดูผลผู้ชนะการเสนอราคา',
			'เอกสารประกวดราคา',
			'ค้นหาประกาศในระบบ e-GP',
			'รับงานราชการ'
		],
		en: [
			'find Thai government tenders',
			'sell to Thai government',
			'e-GP supplier registration',
			'Thailand e-bidding guide',
			'Thai public procurement for SMEs',
			'government contract opportunities Thailand',
			'Thai tender award results'
		]
	},
	services: ['egp-procurement'],
	steps: [
		{
			title: {
				th: 'เช็กก่อนว่าธุรกิจของคุณเป็นคู่สัญญาได้',
				en: 'Check that your business can contract with the state'
			},
			text: {
				th: 'คู่สัญญากับหน่วยงานรัฐเป็นได้ทั้งบุคคลธรรมดาและนิติบุคคล ขอเพียงจดทะเบียนถูกต้องและไม่ถูกระบุชื่อเป็นผู้ทิ้งงาน จากนั้นลองมองย้อนว่างานที่เคยทำให้ลูกค้าเอกชนใช้เป็นผลงานอ้างอิงได้หรือไม่ เพราะประกาศจำนวนมากขอผลงานลักษณะเดียวกัน',
				en: 'Individuals and registered companies can both contract with the state, provided you are properly registered and not named as a defaulting contractor. Then look back at your private-sector work and ask whether it can serve as a reference project — many notices want a comparable track record.'
			}
		},
		{
			title: {
				th: 'ลงทะเบียนเป็นผู้ค้ากับภาครัฐ',
				en: 'Register as a state supplier'
			},
			text: {
				th: 'เข้าดูประกาศไม่ต้องลงทะเบียน แต่การยื่นข้อเสนอต้องลงทะเบียนก่อนเสมอ ระบบผูกบัญชีผู้ค้าเข้ากับเลขทะเบียนนิติบุคคลหรือเลขประจำตัวผู้เสียภาษีอากร 13 หลัก จึงต้องกรอกชื่อและที่อยู่ให้ตรงกับที่จดทะเบียนไว้ทุกตัวอักษร ถ้าไม่ตรงกับฐานทะเบียนราชการ ระบบจะไม่ผ่าน',
				en: 'Reading notices needs no account; bidding always does. The system keys your supplier account to your 13-digit registration or taxpayer number, so enter your name and address exactly as the register has them. Details that do not match official registry data will simply fail, costing you days over a typo.'
			}
		},
		{
			title: {
				th: 'เลิกค้นใน Google แล้วเข้าไปค้นในระบบ',
				en: 'Stop searching Google — search inside the system'
			},
			text: {
				th: 'ระบบ e-GP ปิดกั้นเครื่องมือค้นหาไว้ทั้งหมด ต่อให้พิมพ์ชื่อสินค้าที่คุณขายลงใน Google ก็จะไม่เจอประกาศที่กำลังเปิดรับ ต้องเข้าเว็บไซต์ทางการที่ www.gprocurement.go.th แล้วค้นจากภายใน โดยกรองด้วยเงื่อนไขเท่าที่ระบบเปิดให้ เช่น ประเภทงาน หน่วยงาน จังหวัด หรือช่วงวันที่ ประกาศใหม่เข้ามาแทบทุกวันทำการ ดูเดือนละครั้งจึงช้าเกินไป',
				en: 'e-GP blocks search engines outright, so typing what you sell into Google will never surface an open notice. Go to the official site at www.gprocurement.go.th and search from inside it, narrowing by whatever the system offers — type of work, agency, province, date range. New notices arrive on nearly every working day, so looking once a month is always too late.'
			}
		},
		{
			title: {
				th: 'อ่านประกาศให้ครบทั้งสี่เรื่อง',
				en: 'Read the notice for all four things'
			},
			text: {
				th: 'ทุกฉบับบอกสี่เรื่องที่ตัดสินว่าควรยื่นหรือไม่ ได้แก่ ขอบเขตของงาน กำหนดวันเวลายื่น คุณสมบัติและเอกสารที่ต้องมี และค่าใช้จ่ายที่ประกาศระบุไว้ เช่น ค่าซื้อเอกสารหรือหลักประกันการเสนอราคา อย่าอ่านแค่ชื่อโครงการกับวงเงิน เพราะรายละเอียดที่ทำให้ต้นทุนบานปลายซ่อนอยู่ในขอบเขตของงาน ถ้าข้อกำหนดใดตีความได้หลายทาง ให้ถามผ่านช่องทางที่ประกาศระบุก่อนถึงกำหนด',
				en: 'Every notice tells you the four things that decide whether to bid: the scope of work, the submission deadline, the qualifications and documents required, and any charge it specifies, such as a fee for the bidding documents or a bid guarantee. Never read only the title and the budget figure — the details that blow up your costs hide in the scope. If a requirement reads two ways, ask through the channel the notice names before the deadline.'
			}
		},
		{
			title: {
				th: 'ใช้ผลผู้ชนะย้อนหลังตั้งราคา',
				en: 'Price from past award results'
			},
			text: {
				th: 'ก่อนกรอกตัวเลข ให้ย้อนดูประกาศผลผู้ชนะของงานลักษณะเดียวกัน ซึ่งเปิดเผยทั้งชื่อผู้ที่ได้งานและราคาที่ตกลงกัน นี่คือข้อมูลตลาดที่ดีที่สุดที่คุณหาได้ฟรี เพราะเห็นช่วงราคาที่หน่วยงานยอมรับจริง แทนที่จะเดาจากราคาขายปลีกของคุณเอง',
				en: 'Before you fill in a number, go back through the award notices for comparable work — they name the winning supplier and the agreed price. This is the best market research available to you and it costs nothing, showing the range agencies have actually accepted rather than leaving you to guess from your own retail pricing.'
			}
		},
		{
			title: {
				th: 'ยื่นเผื่อเวลา แล้วติดตามจนจบ',
				en: 'Submit early, then follow it through'
			},
			text: {
				th: 'อัปโหลดเอกสารให้เสร็จก่อนกำหนดหลายชั่วโมง ไฟล์ใหญ่ อินเทอร์เน็ตช้า หรือเอกสารขาดใบเดียว ก็ทำให้พลาดเส้นตายได้ จากนั้นติดตามประกาศผลและข้อมูลสาระสำคัญของสัญญาต่อจนจบ ไม่ว่าจะชนะหรือไม่ เพราะเป็นบทเรียนสำหรับครั้งถัดไป',
				en: 'Finish uploading hours before the cut-off — large files, a slow connection or one missing document are all it takes to miss a deadline. Then follow the award notice and the published contract summary through to the end, win or lose, because that is your preparation for the next bid.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: {
				th: 'ทำไมงานภาครัฐหายไปจากสายตารายเล็ก',
				en: 'Why government work is invisible to small businesses'
			}
		},
		{
			type: 'p',
			text: {
				th: 'กฎหมายกำหนดให้หน่วยงานรัฐประกาศการจัดซื้อจัดจ้างผ่านระบบกลางระบบเดียว คือระบบ e-GP ซึ่งกรมบัญชีกลางดูแล ตั้งแต่กระทรวง รัฐวิสาหกิจ มหาวิทยาลัยของรัฐ ไปจนถึงเทศบาลเล็ก ๆ ต่างจังหวัด ทุกแห่งต้องนำประกาศมาไว้ที่เดียวกัน โอกาสจึงมีอยู่จริงและเข้าถึงได้ฟรี',
				en: 'Thai law requires state bodies to announce their purchasing through a single central system: e-GP, operated by the Comptroller General’s Department. Ministries, state enterprises, public universities and small provincial municipalities all publish to the same place. The opportunities genuinely exist, gathered somewhere you can reach for free.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ปัญหาคือเว็บไซต์ของระบบปิดกั้นเครื่องมือค้นหาไว้ทั้งหมด ถ้าคุณขายเก้าอี้สำนักงานแล้วพิมพ์คำนั้นลงใน Google จะไม่มีวันเจอประกาศที่โรงเรียนหรือโรงพยาบาลรัฐกำลังเปิดรับอยู่ นี่คือเหตุผลตรง ๆ ที่ธุรกิจรายเล็กจำนวนมากไม่เคยยื่นข้อเสนอกับภาครัฐเลยสักครั้ง ไม่ใช่เพราะไม่มีงาน แต่เพราะไม่รู้ว่ามีงาน',
				en: 'The catch is that the system’s website blocks search engines entirely. If you sell office chairs, typing “office chairs” into Google will never show you the notice a school or a state hospital has open at that moment. This is the plain reason so many small firms have never bid on public work even once — not an absence of opportunity, but an absence of any way to hear about it.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: {
				th: 'เปิดเผยตามกฎหมาย ไม่เท่ากับค้นเจอ',
				en: 'Public by law is not the same as findable'
			},
			text: {
				th: 'ประกาศเชิญชวน ราคากลาง และผลผู้ชนะ เป็นข้อมูลที่กฎหมายกำหนดให้เปิดเผย ใครก็เข้าดูได้ฟรีโดยไม่ต้องสมัครสมาชิก แต่การเปิดเผยกับการค้นเจอเป็นคนละเรื่อง เมื่อระบบไม่ให้เครื่องมือค้นหาเข้าไปเก็บข้อมูล คนที่ได้เปรียบคือผู้ที่รู้อยู่ก่อนว่าต้องดูตรงไหน',
				en: 'Invitations to bid, reference prices and award results are all public by law — free to read, no account needed. But being published and being findable are different things. When a system keeps crawlers out, the advantage goes to whoever already knew where to look.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ใครยื่นได้ และต้องเตรียมอะไร', en: 'Who can bid, and what to prepare' }
		},
		{
			type: 'p',
			text: {
				th: 'ขนาดของธุรกิจไม่ใช่ข้อห้าม ทั้งบุคคลธรรมดาและนิติบุคคลเสนอราคาได้ ตราบใดที่มีคุณสมบัติตามที่ประกาศกำหนด ในทางปฏิบัติ งานที่รายเล็กมีโอกาสมากที่สุดมักเป็นงานวงเงินไม่สูงของหน่วยงานในพื้นที่ เช่น โรงเรียนหรือองค์กรปกครองส่วนท้องถิ่น ซึ่งรายใหญ่ไม่สนใจเข้าแข่ง อุปสรรคจริงจึงไม่ใช่ฝีมือ แต่เป็นงานเอกสาร ข่าวดีคือเอกสารส่วนใหญ่ใช้ซ้ำได้ทุกโครงการ จัดแฟ้มให้ครบตั้งแต่ครั้งแรก ครั้งต่อไปจะเหลือแค่ปรับตัวเลขกับเขียนข้อเสนอ',
				en: 'Size is not a bar. Individuals and registered companies can both bid, provided they meet the qualifications a notice sets. In practice a small firm’s best odds are on lower-value contracts from local bodies — schools, municipal offices — the work large contractors rarely chase. The real obstacle is paperwork, not capability. The good news is that most documents are reusable: assemble the folder properly once, and each later bid comes down to adjusting figures and writing the proposal.'
			}
		},
		{
			type: 'table',
			caption: {
				th: 'เอกสารที่ประกาศมักเรียกหา',
				en: 'Documents notices commonly ask for'
			},
			head: [
				{ th: 'เอกสาร', en: 'Document' },
				{ th: 'ใช้พิสูจน์อะไร', en: 'What it proves' },
				{ th: 'ข้อควรรู้', en: 'Worth knowing' }
			],
			rows: [
				[
					{ th: 'หนังสือรับรองการจดทะเบียนนิติบุคคล', en: 'Certificate of registration' },
					{ th: 'ธุรกิจมีตัวตน และใครมีอำนาจลงนาม', en: 'The business exists, and who signs for it' },
					{ th: 'หลายประกาศขอฉบับที่ออกใหม่ ให้ดูเงื่อนไขในประกาศ', en: 'Many notices want a recent copy — check the wording' }
				],
				[
					{ th: 'เอกสารภาษีและงบการเงิน', en: 'Tax records and financial statements' },
					{ th: 'กิจการดำเนินอยู่จริง และมีฐานะพอรับงาน', en: 'You are trading and can carry the work' },
					{ th: 'เก็บฉบับล่าสุดเป็นไฟล์ให้พร้อมใช้', en: 'Keep the latest set scanned and ready' }
				],
				[
					{ th: 'ผลงานและหนังสือรับรองผลงาน', en: 'Past projects and reference letters' },
					{ th: 'เคยทำงานลักษณะเดียวกันสำเร็จ', en: 'You have delivered comparable work' },
					{ th: 'ขอจากคู่สัญญาเดิมตั้งแต่งานจบ อย่ารอถึงวันที่ต้องใช้', en: 'Ask clients when the job ends, not when you need it' }
				],
				[
					{ th: 'หลักประกันการเสนอราคา', en: 'Bid guarantee' },
					{ th: 'ผู้เสนอราคาจริงจัง ไม่ถอนกลางคัน', en: 'The bid is serious and will not be withdrawn' },
					{ th: 'บางโครงการเท่านั้น จำนวนตามที่ประกาศกำหนด ควรคุยกับธนาคารล่วงหน้า', en: 'Some notices only; the amount is whatever the notice states, so talk to your bank early' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'สิ่งที่ทำให้ข้อเสนอตกรอบ', en: 'What gets a bid thrown out' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ลงนามไม่ครบทุกจุด หรือผู้ลงนามไม่มีอำนาจตามที่กำหนด',
					en: 'Not signed everywhere required, or signed by someone without the authority'
				},
				{
					th: 'คุณสมบัติไม่ตรงประกาศ เช่น ไม่มีผลงานประเภทที่ระบุไว้',
					en: 'Qualifications that miss the mark, such as no track record of the specified type'
				},
				{
					th: 'ตั้งราคาจากราคาสินค้าอย่างเดียว ลืมค่าขนส่ง ติดตั้ง อบรม หรือการรับประกันตามขอบเขตงาน',
					en: 'Pricing the goods alone, forgetting delivery, installation, training or the warranty the scope demands'
				},
				{
					th: 'รอยื่นวันสุดท้าย แล้วติดปัญหาไฟล์หรือสัญญาณจนไม่ทันกำหนด',
					en: 'Leaving it to the last day, then losing the deadline to a file problem or a bad connection'
				}
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: {
				th: 'ต้นทุนที่มองไม่เห็นตอนกดยื่น',
				en: 'The costs you do not see when you click submit'
			},
			text: {
				th: 'ประเมินเวลาให้ตรงความจริงตั้งแต่แรก การเตรียมเอกสารและอ่านขอบเขตงานกินเวลาทำงานหลายวัน บางประกาศมีค่าซื้อเอกสารประกวดราคา และบางโครงการต้องวางหลักประกันซึ่งทำให้เงินสดถูกล็อกไว้ช่วงหนึ่ง ตัวเลขเหล่านี้อยู่ในประกาศแต่ละฉบับ ให้คิดรวมเป็นต้นทุนก่อนตัดสินใจแข่ง',
				en: 'Be honest about the time. Assembling documents and working through a scope of work eats real working days. Some notices charge for the bidding documents, and some contracts require a guarantee that ties up cash for a while. Those figures are stated in each notice — fold them into your costs before deciding a contract is worth competing for.'
			}
		},
		{
			type: 'h2',
			text: {
				th: 'แพ้แล้วยังได้ข้อมูล และสิทธิอุทธรณ์',
				en: 'Losing still pays you in data — and the right of appeal'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ประกาศผลผู้ชนะเปิดเผยทั้งชื่อผู้ที่ได้งานและราคาที่ตกลงกัน ทำให้เห็นว่าคู่แข่งเป็นใคร และงานลักษณะเดียวกันจบที่ราคาประมาณเท่าไร แต่ต้องอ่านอย่างเข้าใจว่าราคาต่ำสุดไม่ได้ชนะเสมอไป เพราะคุณสมบัติและความครบถ้วนของเอกสารก็มีผล',
				en: 'Award notices name the winner and the agreed price, so you can see who your competitors are and roughly where comparable jobs land. Read them with judgement, though: the lowest price does not always win, because qualifications and complete paperwork weigh on the decision too.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ถ้าเห็นว่าการพิจารณาไม่เป็นธรรม พระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560 ให้สิทธิยื่นอุทธรณ์ โดยเริ่มจากหน่วยงานที่จัดซื้อจัดจ้าง แล้วส่งต่อไปยังคณะกรรมการที่กฎหมายกำหนด กรอบเวลาที่กฎหมายให้ไว้สั้น จึงควรตรวจสอบกำหนดปัจจุบันจากช่องทางทางการทันทีที่ผลออก และเก็บเอกสารกับวันเวลาที่ทำรายการไว้ให้ครบ',
				en: 'If you believe a decision was unfair, the Public Procurement and Supplies Administration Act B.E. 2560 (2017) gives bidders a right of appeal, starting with the procuring agency and passing from there to the committee the law designates. The window is short, so check the current rule through official channels as soon as a result is published — and keep your documents and submission timestamps from the start.'
			}
		},
		{
			type: 'callout',
			tone: 'danger',
			title: {
				th: 'ไม่มีใครรับประกันให้คุณชนะได้',
				en: 'Nobody can guarantee you a win'
			},
			text: {
				th: 'ถ้ามีคนเสนอว่าจ่ายเงินแล้วช่วยให้ได้งาน หรืออ้างว่ารู้จักคนในและรับวิ่งเต้นให้ ให้ถือเป็นสัญญาณอันตรายทันที ค่าใช้จ่ายที่ถูกต้องมีเฉพาะที่ประกาศระบุไว้ และต้องชำระผ่านช่องทางที่ประกาศกำหนด ส่วนเว็บไซต์เอกชนที่รวบรวมประกาศไปขายต่อ ใช้เป็นตัวช่วยเตือนได้ แต่ควรกลับไปยืนยันกับระบบทางการเสมอ THGov เป็นไดเรกทอรีอิสระ ไม่เกี่ยวข้องกับหน่วยงานรัฐใด และไม่รับยื่นเอกสารหรือรับชำระเงินแทนใคร',
				en: 'If somebody offers to secure you a contract for a fee, or claims an inside connection they can work on your behalf, treat it as a red flag immediately. The only legitimate charges are the ones the notice states, paid through the channel it names. Private sites that repackage these notices can be useful as an alert service, but always go back to the official system to confirm. THGov is an independent directory with no affiliation to any agency, and we never file documents or take payments on anyone’s behalf.'
			}
		}
	],
	faq: [
		{
			q: {
				th: 'ไม่ได้จดทะเบียนบริษัท เป็นบุคคลธรรมดา ยื่นได้ไหม',
				en: 'I am a sole trader, not a company. Can I still bid?'
			},
			a: {
				th: 'ยื่นได้ กฎหมายเปิดให้ทั้งบุคคลธรรมดาและนิติบุคคลเป็นคู่สัญญากับรัฐ สิ่งที่ตัดสินคือคุณสมบัติที่ประกาศฉบับนั้นระบุ ซึ่งบางงานขอผลงานที่ผ่านมา ทุนจดทะเบียนขั้นต่ำ หรือใบอนุญาตเฉพาะทาง ให้อ่านหัวข้อคุณสมบัติผู้เสนอราคาก่อนเสมอ',
				en: 'Yes. The law lets both individuals and registered companies contract with the state. What decides it is the qualifications in that particular notice, which may call for a track record, a minimum registered capital or a specialist licence. Always read the bidder-qualifications section first.'
			}
		},
		{
			q: {
				th: 'ทำไมค้นใน Google ถึงไม่เจอประกาศเลย',
				en: 'Why can’t I find any of these notices on Google?'
			},
			a: {
				th: 'เพราะเว็บไซต์ของระบบตั้งค่าปิดกั้นบอตของเครื่องมือค้นหาไว้ทุกตัวและทุกหน้า ข้อมูลจึงไม่เข้าดัชนีของ Google ตั้งแต่แรก ไม่ใช่ว่าคุณใช้คำค้นผิด และการเปลี่ยนคำค้นก็ไม่ช่วย ทางเดียวคือเข้าระบบทางการแล้วค้นจากภายใน',
				en: 'Because the site tells every search-engine crawler to stay out of every page, so the content never enters Google’s index in the first place. It is not your search terms, and rephrasing will not help. The only workable route is to open the official system and search from inside it.'
			}
		},
		{
			q: {
				th: 'การเข้าดูประกาศและการยื่นข้อเสนอมีค่าใช้จ่ายไหม',
				en: 'Does it cost anything to look at notices or to bid?'
			},
			a: {
				th: 'การเข้าดูประกาศ ราคากลาง และผลผู้ชนะ ไม่มีค่าใช้จ่ายและไม่ต้องลงทะเบียน ส่วนการยื่นข้อเสนอต้องลงทะเบียนเป็นผู้ค้าก่อน และบางโครงการมีค่าซื้อเอกสารหรือต้องวางหลักประกัน ซึ่งระบุไว้ในประกาศฉบับนั้น ให้ยึดตัวเลขจากประกาศที่คุณกำลังจะยื่น ไม่ใช่จากโครงการก่อน',
				en: 'Reading notices, reference prices and award results is free and needs no account. Bidding requires supplier registration first, and some contracts carry a charge for the documents or require a guarantee — stated in that notice. Take the figures from the notice you are about to bid on, never from one you saw last time.'
			}
		},
		{
			q: {
				th: 'ธุรกิจเล็ก ๆ จะสู้รายใหญ่ได้จริงหรือ',
				en: 'Can a small business realistically compete?'
			},
			a: {
				th: 'ได้ในบางสนาม และควรเลือกสนามให้เป็น รายใหญ่มักไม่สนใจงานวงเงินไม่สูงหรืองานที่ต้องดูแลใกล้ชิดในพื้นที่ ซึ่งเป็นจุดที่ผู้ประกอบการท้องถิ่นได้เปรียบทั้งต้นทุนขนส่งและความเร็วในการบริการ ให้เริ่มจากงานที่ทำได้สบายเพื่อสร้างผลงานอ้างอิง แล้วค่อยขยับไปงานใหญ่ขึ้น',
				en: 'In some arenas, yes — the skill is picking the right ones. Large contractors often ignore lower-value work or jobs needing close local attention, which is exactly where a nearby supplier wins on delivery costs and response time. Start with contracts you can deliver comfortably, build a reference record, then move up.'
			}
		},
		{
			q: {
				th: 'มีเว็บเอกชนที่เก็บค่าสมาชิกเพื่อรวมประกาศให้ ควรจ่ายไหม',
				en: 'Private sites charge a subscription to aggregate these notices. Worth paying?'
			},
			a: {
				th: 'เป็นการตัดสินใจทางธุรกิจ บริการเหล่านั้นมีอยู่ได้เพราะระบบทางการค้นหายากและไม่ขึ้นบนเครื่องมือค้นหา สิ่งที่คุณจ่ายคือความสะดวกในการแจ้งเตือน ไม่ใช่ข้อมูลที่คนอื่นเข้าไม่ถึง เพราะข้อมูลชุดเดียวกันเปิดเผยฟรีอยู่แล้ว ถ้าใช้ก็ควรกลับไปตรวจกำหนดเวลากับประกาศต้นทางเสมอ',
				en: 'That is purely a business decision. Those services exist because the official system is hard to search and invisible to search engines. What you are buying is the convenience of an alert, not access to anything exclusive — the same data is published free. If you use one, still verify deadlines against the original notice.'
			}
		}
	],
	updated: '2026-08-28',
	minutes: 7
};
