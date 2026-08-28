import type { Service } from '../types';

export const service: Service = {
	slug: 'pea-eservice',
	name: {
		th: 'PEA Smart Plus — เช็กและจ่ายค่าไฟฟ้าส่วนภูมิภาคออนไลน์',
		en: 'PEA e-Service — Check and Pay Provincial Electricity Bills'
	},
	shortName: { th: 'PEA Smart Plus', en: 'PEA e-Service' },
	url: 'https://www.pea.co.th/',
	agency: 'pea',
	categories: ['utilities'],
	summary: {
		th: 'เช็กค่าไฟ จ่ายบิล ดูหน่วยที่ใช้ย้อนหลัง แจ้งไฟดับ และขอใช้ไฟใหม่กับการไฟฟ้าส่วนภูมิภาค ผ่านเว็บไซต์และแอป PEA Smart Plus พร้อมลิงก์เข้าระบบทางการ',
		en: 'Check your PEA electricity bill, pay it, review past usage, report an outage and apply for a new supply — on the web or in the PEA Smart Plus app. Official link.'
	},
	deck: {
		th: 'ช่องทางออนไลน์ของการไฟฟ้าส่วนภูมิภาคสำหรับผู้ใช้ไฟใน 74 จังหวัดนอกเขตกรุงเทพมหานคร นนทบุรี และสมุทรปราการ — เช็ก จ่าย และแจ้งเหตุได้จากที่เดียว',
		en: 'The Provincial Electricity Authority’s online channel for the 74 provinces outside Bangkok, Nonthaburi and Samut Prakan — check, pay and report faults in one place.'
	},
	keywords: {
		th: [
			'เช็คค่าไฟ',
			'เช็คค่าไฟ pea',
			'จ่ายค่าไฟออนไลน์',
			'PEA Smart Plus',
			'การไฟฟ้าส่วนภูมิภาค',
			'กฟภ.',
			'ค่าไฟเดือนนี้',
			'ดูบิลค่าไฟย้อนหลัง',
			'แจ้งไฟดับ',
			'ขอใช้ไฟใหม่',
			'เช็คค่าไฟบ้านต่างจังหวัด',
			'ค่าไฟแพงผิดปกติ',
			'หมายเลขผู้ใช้ไฟฟ้า'
		],
		en: [
			'PEA e-Service',
			'PEA Smart Plus',
			'check electricity bill Thailand',
			'Provincial Electricity Authority',
			'pay PEA bill online',
			'report power outage Thailand',
			'new electricity connection PEA'
		]
	},
	features: [
		{
			icon: 'bolt',
			title: { th: 'เช็กยอดและจ่ายค่าไฟได้ทุกเวลา', en: 'Check and pay at any hour' },
			text: {
				th: 'ดูยอดค่าไฟงวดปัจจุบันและชำระเงินได้จากมือถือ ไม่ต้องรอใบแจ้งค่าไฟมาถึงบ้าน และไม่ต้องรอเวลาทำการของสำนักงาน',
				en: 'See the current amount due and settle it from your phone — no waiting for the paper bill to arrive, and no waiting for office hours.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'ดูหน่วยที่ใช้ย้อนหลังเป็นรายเดือน', en: 'Month-by-month usage history' },
			text: {
				th: 'เปรียบเทียบหน่วยไฟฟ้าที่ใช้จริงและยอดเงินของเดือนก่อน ๆ เพื่อแยกให้ออกว่าค่าไฟที่สูงขึ้นมาจากการใช้งานจริงหรือจากรอบบิลที่ยาวกว่าเดิม',
				en: 'Compare the units actually consumed against the amounts billed in earlier months, so you can tell a genuine rise in usage from a longer billing cycle.'
			}
		},
		{
			icon: 'receipt',
			title: { th: 'ใบแจ้งค่าไฟอิเล็กทรอนิกส์', en: 'Electronic bills and receipts' },
			text: {
				th: 'รับใบแจ้งค่าไฟและใบเสร็จเป็นไฟล์แทนกระดาษ ค้นย้อนหลังได้ทันทีเวลาต้องใช้ประกอบการเบิกจ่ายหรือยื่นเอกสารกับหน่วยงานอื่น',
				en: 'Receive bills and receipts as files instead of paper, and pull up old ones the moment you need them for a claim or another agency’s paperwork.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'แจ้งไฟฟ้าขัดข้องจากจุดเกิดเหตุ', en: 'Report a fault from where you are' },
			text: {
				th: 'แจ้งไฟดับหรือไฟตกได้จากมือถือโดยไม่ต้องรอสายศูนย์บริการ ซึ่งช่วยได้มากในช่วงพายุเข้าที่มีผู้แจ้งเหตุพร้อมกันจำนวนมาก',
				en: 'Report an outage or voltage problem from your phone instead of holding on the call-centre line — a real help during storms, when everyone reports at once.'
			}
		},
		{
			icon: 'plug',
			title: { th: 'ขอใช้ไฟใหม่และเปลี่ยนขนาดมิเตอร์', en: 'New supply and meter changes' },
			text: {
				th: 'ยื่นคำขอใช้ไฟฟ้าใหม่ ขอเปลี่ยนขนาดเครื่องวัด และติดตามสถานะคำขอได้เอง โดยขั้นตอนสำรวจหน้างานและติดตั้งยังต้องมีเจ้าหน้าที่ลงพื้นที่',
				en: 'File a request for a new connection or a different meter size and follow its status yourself, though the survey and installation still need a site visit.'
			}
		},
		{
			icon: 'map',
			title: { th: 'ครอบคลุมผู้ใช้ไฟ 74 จังหวัด', en: 'Covers customers in 74 provinces' },
			text: {
				th: 'ใช้ได้กับผู้ใช้ไฟทุกประเภทนอกเขตกรุงเทพมหานคร นนทบุรี และสมุทรปราการ ทั้งบ้านอยู่อาศัย ร้านค้า กิจการขนาดเล็ก และโรงงาน',
				en: 'Open to every class of customer outside Bangkok, Nonthaburi and Samut Prakan — homes, shops, small businesses and factories alike.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ตรวจยอดจริงจากช่องทางทางการ', en: 'Verify the real balance at the source' },
			text: {
				th: 'เมื่อได้รับข้อความอ้างว่าค้างชำระค่าไฟ การเปิดดูยอดในบัญชีของตัวเองคือวิธีตรวจสอบที่เชื่อถือได้ที่สุด โดยไม่ต้องแตะลิงก์ที่แนบมากับข้อความ',
				en: 'When a message claims you owe money, opening your own account is the most reliable way to check — without touching the link that came with it.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ยืนยันว่ามิเตอร์ของคุณอยู่ในเขต กฟภ.', en: 'Confirm your meter sits in PEA’s area' },
			text: {
				th: 'การไฟฟ้าส่วนภูมิภาคดูแล 74 จังหวัด คือทุกจังหวัดยกเว้นกรุงเทพมหานคร นนทบุรี และสมุทรปราการ หากมิเตอร์อยู่ในสามจังหวัดนั้น ผู้ให้บริการของคุณคือการไฟฟ้านครหลวง ซึ่งใช้คนละระบบและคนละบัญชี',
				en: 'PEA serves 74 provinces — everywhere except Bangkok, Nonthaburi and Samut Prakan. If your meter is in those three, your supplier is the Metropolitan Electricity Authority, on a separate system with separate accounts.'
			}
		},
		{
			title: { th: 'หยิบใบแจ้งค่าไฟฉบับล่าสุดมาดูหมายเลขผู้ใช้ไฟฟ้า', en: 'Find the customer number on your latest bill' },
			text: {
				th: 'หมายเลขผู้ใช้ไฟฟ้าหรือรหัสเครื่องวัดคือกุญแจที่ผูกบัญชีออนไลน์เข้ากับมิเตอร์ของบ้าน ตัวเลขนี้พิมพ์อยู่บนใบแจ้งค่าไฟและใบเสร็จ ควรถ่ายรูปเก็บไว้ในมือถือเพื่อไม่ต้องรื้อหาทุกครั้ง',
				en: 'The customer or meter number is what ties your online account to the physical meter. It is printed on every bill and receipt — photograph it once so you never have to dig for it again.'
			}
		},
		{
			title: { th: 'สมัครบัญชีหรือเข้าสู่ระบบ', en: 'Register or sign in' },
			text: {
				th: 'สมัครผ่านเว็บไซต์ของการไฟฟ้าส่วนภูมิภาคหรือแอป PEA Smart Plus ด้วยเบอร์โทรศัพท์และอีเมลที่ใช้งานจริง เพราะระบบจะส่งรหัสยืนยันตัวตน และใช้ช่องทางเดียวกันนี้ส่งใบแจ้งค่าไฟกับการแจ้งเตือนต่อไป',
				en: 'Sign up on PEA’s website or in the PEA Smart Plus app using a phone number and email you actually read — the system sends a verification code there, and later delivers bills and alerts the same way.'
			}
		},
		{
			title: { th: 'ผูกมิเตอร์เข้ากับบัญชี', en: 'Link the meter to your account' },
			text: {
				th: 'กรอกหมายเลขผู้ใช้ไฟฟ้าเพื่อดึงข้อมูลมิเตอร์เข้ามา หนึ่งบัญชีผูกได้หลายมิเตอร์ เหมาะกับผู้ที่ดูแลทั้งบ้าน ร้านค้า หรือห้องเช่าหลายห้อง และทำให้เทียบค่าไฟระหว่างแต่ละหลังได้ในที่เดียว',
				en: 'Enter the customer number to pull the meter in. One account can hold several meters, which suits anyone running a home, a shop or rental units, and lets you compare them side by side.'
			}
		},
		{
			title: { th: 'ตรวจยอดแล้วเลือกช่องทางชำระ', en: 'Check the amount, then choose how to pay' },
			text: {
				th: 'ดูยอดงวดปัจจุบันและวันครบกำหนดก่อนจ่ายทุกครั้ง จากนั้นเลือกชำระผ่านช่องทางของ กฟภ. แอปธนาคาร หรือตัวแทนรับชำระที่สะดวก แล้วเก็บหลักฐานการชำระไว้จนกว่าสถานะในบัญชีจะเปลี่ยนเป็นชำระแล้ว',
				en: 'Read the current amount and the due date before paying anything, then settle through PEA’s own channels, a bank app or a payment agent. Keep the proof of payment until the account shows it as paid.'
			}
		},
		{
			title: { th: 'เปิดใบแจ้งค่าไฟอิเล็กทรอนิกส์และการแจ้งเตือน', en: 'Switch on e-billing and alerts' },
			text: {
				th: 'เปลี่ยนมารับใบแจ้งค่าไฟทางอิเล็กทรอนิกส์แทนกระดาษ และเปิดการแจ้งเตือนไว้ เพื่อให้รู้ยอดตั้งแต่วันที่ออกบิลโดยไม่ต้องรอใบแจ้งมาถึง ซึ่งช่วยได้มากกับบ้านที่ไม่มีคนอยู่ประจำ',
				en: 'Move from paper to electronic bills and turn notifications on, so you learn the amount on the day it is issued rather than when the envelope arrives — invaluable for a house nobody lives in full time.'
			}
		}
	],
	faq: [
		{
			q: { th: 'การไฟฟ้าส่วนภูมิภาคดูแลจังหวัดไหนบ้าง', en: 'Which provinces does PEA cover?' },
			a: {
				th: 'กฟภ. จำหน่ายไฟฟ้าใน 74 จังหวัด คือทุกจังหวัดยกเว้นกรุงเทพมหานคร นนทบุรี และสมุทรปราการ ซึ่งเป็นพื้นที่ของการไฟฟ้านครหลวง การแบ่งยึดตามที่ตั้งของมิเตอร์ ไม่ใช่ภูมิลำเนาของเจ้าของบ้าน หากมิเตอร์อยู่นอกสามจังหวัดนั้น ระบบของ กฟภ. คือที่ที่คุณจะพบบิลของตัวเอง',
				en: 'PEA distributes electricity in 74 provinces — everywhere except Bangkok, Nonthaburi and Samut Prakan, which belong to the Metropolitan Electricity Authority. The split follows where the meter stands, not where the owner is registered. If your meter is outside those three, PEA’s system is where your bill lives.'
			}
		},
		{
			q: { th: 'ต้องใช้เลขอะไรในการเช็กค่าไฟ', en: 'What number do I need to look up my bill?' },
			a: {
				th: 'ใช้หมายเลขผู้ใช้ไฟฟ้าหรือรหัสเครื่องวัดที่พิมพ์อยู่บนใบแจ้งค่าไฟและใบเสร็จ ไม่ใช่บ้านเลขที่หรือชื่อเจ้าของบ้าน หากใบแจ้งหายและหาตัวเลขไม่พบ ให้ติดต่อสำนักงานการไฟฟ้าในพื้นที่พร้อมหลักฐานแสดงสิทธิในสถานที่ เจ้าหน้าที่จะค้นให้จากตำแหน่งของมิเตอร์',
				en: 'The customer or meter number printed on your bill and receipts — not the house number and not the owner’s name. If the bill is lost and the number is nowhere to be found, take proof of your right to the property to a local PEA office and staff can look it up from the meter’s location.'
			}
		},
		{
			q: { th: 'จ่ายเงินไปแล้วแต่ยอดในระบบยังไม่ลด ต้องทำอย่างไร', en: 'I paid, but the balance has not cleared. What now?' },
			a: {
				th: 'การตัดยอดของแต่ละช่องทางไม่ได้เกิดขึ้นทันทีเสมอไป โดยเฉพาะการชำระผ่านตัวแทนรับชำระนอกเวลาทำการหรือในวันหยุด ให้เก็บสลิปไว้ก่อนแล้วตรวจสอบใหม่ในวันทำการถัดไป หากยอดยังค้างอยู่ ให้ติดต่อ กฟภ. พร้อมภาพหลักฐานที่เห็นวันเวลาและหมายเลขผู้ใช้ไฟฟ้าชัดเจน',
				en: 'Not every channel clears in real time, especially payments made through an agent outside working hours or on a holiday. Keep the slip and look again on the next business day. If it is still outstanding, contact PEA with an image of the payment showing the date, time and customer number.'
			}
		},
		{
			q: { th: 'ได้รับ SMS ว่าค้างค่าไฟและจะถูกตัดไฟวันนี้ เป็นเรื่องจริงไหม', en: 'I got an SMS saying my power will be cut today. Is it real?' },
			a: {
				th: 'ให้ถือว่าเป็นข้อความน่าสงสัยไว้ก่อน มิจฉาชีพนิยมใช้ถ้อยคำเร่งรัดแบบนี้เพราะทำให้คนรีบกดลิงก์โดยไม่ทันตรวจสอบ วิธีที่ปลอดภัยที่สุดคือเปิดแอปที่ติดตั้งไว้แล้วหรือพิมพ์ที่อยู่เว็บไซต์ทางการเข้าไปดูยอดด้วยตัวเอง ถ้าบัญชีไม่มียอดค้าง ข้อความนั้นก็ไม่จริง และไม่ควรกดลิงก์หรือกรอกข้อมูลใด ๆ',
				en: 'Treat it as suspicious by default. Scammers lean on urgency precisely because it makes people tap before they check. The safe move is to open the app you already installed, or type the official address yourself, and read your own balance. If nothing is outstanding, the message is false — do not tap the link or enter anything.'
			}
		},
		{
			q: { th: 'ใช้บริการออนไลน์มีค่าใช้จ่ายเพิ่มหรือไม่', en: 'Does using the online service cost anything?' },
			a: {
				th: 'การสมัครบัญชี การดูยอดค่าไฟ และการดูประวัติการใช้ไฟไม่มีค่าใช้จ่าย ส่วนการชำระเงินอาจมีค่าธรรมเนียมตามเงื่อนไขของช่องทางที่เลือก ซึ่งต่างกันไปและปรับเปลี่ยนได้ ให้ดูจำนวนเงินที่ระบบแสดงก่อนกดยืนยัน และตรวจสอบอัตราปัจจุบันจากเว็บไซต์ทางการ',
				en: 'Opening an account, reading your balance and reviewing usage history cost nothing. Payment may carry a fee depending on the channel; those differ and can change, so read the figure the system shows before you confirm and check current rates on the official site.'
			}
		},
		{
			q: { th: 'ย้ายเข้าบ้านใหม่ต่างจังหวัด ต้องขอใช้ไฟอย่างไร', en: 'I am moving into a new house upcountry — how do I get supply?' },
			a: {
				th: 'ถ้าสถานที่นั้นยังไม่เคยมีมิเตอร์ ต้องยื่นคำขอใช้ไฟฟ้าใหม่กับ กฟภ. พร้อมเอกสารแสดงตัวตนและเอกสารแสดงสิทธิในที่ดินหรืออาคาร ระบบออนไลน์รับคำขอและให้ติดตามสถานะได้ แต่ขั้นตอนสำรวจและติดตั้งยังต้องมีเจ้าหน้าที่ลงพื้นที่ ส่วนกรณีที่มีมิเตอร์อยู่แล้วและเพียงเปลี่ยนผู้รับผิดชอบค่าไฟ ให้ดำเนินการโอนเปลี่ยนชื่อผู้ใช้ไฟแทน ซึ่งเป็นคนละเรื่องกัน',
				en: 'If the site has never had a meter, file a new-supply request with PEA, with identity documents and proof of your right to the land or building. The online system takes the request and tracks it, but the survey and installation still need staff on site. Where a meter already exists and only the responsible person changes, the right route is a transfer of the account name — a different procedure.'
			}
		},
		{
			q: { th: 'แจ้งไฟดับทางออนไลน์ต่างจากโทรแจ้งอย่างไร', en: 'How does reporting an outage online differ from calling?' },
			a: {
				th: 'ใช้ได้ทั้งสองทาง ข้อดีของการแจ้งออนไลน์คือระบบทราบตำแหน่งมิเตอร์ที่ผูกไว้กับบัญชีอยู่แล้ว จึงไม่ต้องอธิบายที่อยู่ซ้ำ และยังใช้ได้ในช่วงที่สายโทรศัพท์เต็ม แต่หากเป็นเหตุอันตรายเฉพาะหน้า เช่น สายไฟขาดพาดถนนหรือเสาไฟล้ม ควรแจ้งทางโทรศัพท์เพื่อให้ถึงเจ้าหน้าที่เร็วที่สุด และอย่าเข้าใกล้จุดเกิดเหตุ',
				en: 'Both work. Reporting online means the system already knows where your linked meter is, so you need not describe the address, and it still works when the phone lines are saturated. But for immediate danger — a downed line across a road, a fallen pole — call instead, so a crew hears fastest, and stay well away.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'บริการออนไลน์ของการไฟฟ้าส่วนภูมิภาคคืออะไร', en: 'What PEA’s online service is' }
		},
		{
			type: 'p',
			text: {
				th: 'การไฟฟ้าส่วนภูมิภาค หรือ กฟภ. (PEA) เป็นรัฐวิสาหกิจในสังกัดกระทรวงมหาดไทย จำหน่ายไฟฟ้าให้ผู้ใช้ไฟใน 74 จังหวัด คือทุกจังหวัดยกเว้นกรุงเทพมหานคร นนทบุรี และสมุทรปราการ บริการออนไลน์ของ กฟภ. ยกงานที่เคยต้องเดินทางไปสำนักงานการไฟฟ้าในพื้นที่ ทั้งการดูยอดค่าไฟงวดปัจจุบัน การชำระเงิน การรับใบแจ้งค่าไฟทางอิเล็กทรอนิกส์ การแจ้งไฟฟ้าขัดข้อง และการยื่นคำขอใช้ไฟฟ้าใหม่ ให้มาทำได้จากหน้าจอเดียวโดยไม่ต้องรอเวลาราชการ',
				en: 'The Provincial Electricity Authority — PEA, or กฟภ. in Thai — is a state enterprise under the Ministry of Interior supplying electricity across 74 provinces: everywhere except Bangkok, Nonthaburi and Samut Prakan. Its online service lifts the tasks that once meant a trip to a district electricity office — reading the current amount due, paying it, taking bills electronically, reporting a fault, applying for a new supply — onto one screen, office hours or not.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ช่องทางหลักมีสองทางที่ใช้ข้อมูลชุดเดียวกัน คือเว็บไซต์ของการไฟฟ้าส่วนภูมิภาค และแอปพลิเคชัน PEA Smart Plus บนมือถือ เมื่อผูกมิเตอร์เข้ากับบัญชีแล้ว ยอดค้างชำระและประวัติการใช้ไฟจะตรงกันทั้งสองที่ ผู้ที่ดูแลหลายมิเตอร์ เช่น บ้านพัก ร้านค้า และห้องเช่า รวมทุกมิเตอร์ไว้ในบัญชีเดียวเพื่อเทียบกันได้',
				en: 'Two main routes reach the same data: PEA’s website and the PEA Smart Plus mobile app. Once a meter is linked, the outstanding balance and the consumption history match in both. Anyone looking after several meters — a house, a shop, a few rental units — can gather them under one login and compare them.'
			}
		},
		{
			type: 'h2',
			text: { th: 'PEA หรือ MEA — ดูให้ชัดก่อนว่าใครจ่ายไฟให้บ้านคุณ', en: 'PEA or MEA? Establish who actually supplies you' }
		},
		{
			type: 'p',
			text: {
				th: 'ประเทศไทยแบ่งการจำหน่ายไฟฟ้าให้ผู้ใช้ไฟรายย่อยออกเป็นสองหน่วยงาน การไฟฟ้านครหลวง (กฟน. หรือ MEA) รับผิดชอบกรุงเทพมหานคร นนทบุรี และสมุทรปราการ ส่วนพื้นที่ที่เหลือทั้งประเทศเป็นของการไฟฟ้าส่วนภูมิภาค เส้นแบ่งนี้ยึดตามที่ตั้งของมิเตอร์ ไม่ใช่ทะเบียนบ้านหรือที่อยู่ที่ใช้ส่งเอกสาร คนที่ทำงานในกรุงเทพฯ แต่มีบ้านต่างจังหวัดจึงต้องใช้ระบบของ กฟภ. สำหรับบ้านหลังนั้น และผู้ที่มีทั้งสองที่ต้องดูแลบัญชีแยกกัน',
				en: 'Retail electricity in Thailand is split between two authorities. The Metropolitan Electricity Authority covers Bangkok, Nonthaburi and Samut Prakan; the rest of the country belongs to PEA. The line follows where the meter physically sits, not household registration or a postal address. Someone working in Bangkok with a family house upcountry uses PEA for that house — and anyone with both maintains two separate accounts.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'สาเหตุอันดับหนึ่งที่หาบิลของตัวเองไม่เจอ', en: 'The number-one reason people cannot find their bill' },
			text: {
				th: 'ถ้ากรอกหมายเลขผู้ใช้ไฟฟ้าแล้วระบบแจ้งว่าไม่พบข้อมูล ให้ตรวจก่อนว่ากำลังเข้าระบบของหน่วยงานที่ถูกต้องหรือไม่ ผู้ใช้ไฟในเขต กฟภ. จะไม่พบข้อมูลของตัวเองในระบบของ กฟน. และในทางกลับกันก็เช่นกัน วิธีตรวจสอบที่เร็วที่สุดคือดูชื่อหน่วยงานบนหัวใบแจ้งค่าไฟฉบับล่าสุด',
				en: 'If you enter a customer number and the system reports no record, check first that you are on the right authority’s system. A PEA customer never finds their data inside MEA’s platform, and the reverse holds too. The quickest test is the name printed at the top of your most recent bill.'
			}
		},
		{
			type: 'h2',
			text: { th: 'จ่ายค่าไฟได้ทางไหนบ้าง', en: 'Where you can pay' }
		},
		{
			type: 'p',
			text: {
				th: 'สิ่งที่ต้องเตรียมทุกครั้งคือหมายเลขผู้ใช้ไฟฟ้าหรือรหัสเครื่องวัด ซึ่งพิมพ์อยู่บนใบแจ้งค่าไฟและใบเสร็จทุกฉบับ ตัวเลขนี้ผูกยอดเงินเข้ากับมิเตอร์ ไม่ใช่กับชื่อเจ้าของบ้าน บ้านที่เปลี่ยนผู้เช่าบ่อยจึงควรบันทึกไว้ให้ชัดเจน แต่ละช่องทางชำระมีเงื่อนไขค่าธรรมเนียมและเวลาตัดยอดต่างกัน ให้ดูจำนวนเงินที่ระบบแสดงก่อนกดยืนยันเสมอ',
				en: 'Whatever route you take, you need the customer or meter number printed on every bill and receipt. It binds the amount to the meter rather than to a person’s name, which is why a property with changing tenants should have it recorded somewhere reliable. Each channel carries its own fee terms and clearing times, so read the figure on screen before confirming.'
			}
		},
		{
			type: 'table',
			caption: { th: 'ภาพรวมช่องทางชำระค่าไฟฟ้า', en: 'An overview of the ways to pay' },
			head: [
				{ th: 'ช่องทาง', en: 'Channel' },
				{ th: 'เหมาะกับ', en: 'Best for' },
				{ th: 'ข้อควรรู้', en: 'Worth knowing' }
			],
			rows: [
				[
					{ th: 'เว็บไซต์และแอป PEA Smart Plus', en: 'PEA website and PEA Smart Plus app' },
					{ th: 'ดูยอด จ่าย และเก็บประวัติไว้ที่เดียว', en: 'Reading, paying and keeping the history in one place' },
					{ th: 'เห็นยอดปัจจุบันและหน่วยที่ใช้ย้อนหลังในหน้าจอเดียวกัน', en: 'Shows the current amount and past consumption on the same screen' }
				],
				[
					{ th: 'แอปธนาคารบนมือถือ', en: 'Mobile banking apps' },
					{ th: 'คนที่จ่ายบิลหลายรายการรวดเดียวอยู่แล้ว', en: 'People who already settle several bills in one sitting' },
					{ th: 'สแกนบาร์โค้ดบนใบแจ้งค่าไฟ หรือค้นหาผู้ให้บริการแล้วกรอกหมายเลขผู้ใช้ไฟฟ้า', en: 'Scan the barcode on the bill, or find the biller and type the customer number' }
				],
				[
					{ th: 'เคาน์เตอร์รับชำระและร้านสะดวกซื้อ', en: 'Payment counters and convenience stores' },
					{ th: 'คนที่ใช้เงินสดหรือไม่ได้ใช้แอปธนาคาร', en: 'Anyone paying cash or not using a banking app' },
					{ th: 'ควรเก็บใบเสร็จไว้จนกว่ายอดในระบบจะอัปเดต', en: 'Hold on to the receipt until the balance updates' }
				],
				[
					{ th: 'สำนักงานการไฟฟ้าส่วนภูมิภาคในพื้นที่', en: 'A local PEA office' },
					{ th: 'เรื่องที่ต้องคุยกับเจ้าหน้าที่ เช่น ข้อโต้แย้งเรื่องยอด', en: 'Matters needing a conversation, such as disputing an amount' },
					{ th: 'ตรวจสอบวันและเวลาทำการก่อนเดินทาง', en: 'Check the opening days and hours before travelling' }
				],
				[
					{ th: 'หักบัญชีธนาคารอัตโนมัติ', en: 'Automatic bank deduction' },
					{ th: 'คนที่มักลืมวันครบกำหนด', en: 'People who keep missing the due date' },
					{ th: 'ต้องสมัครล่วงหน้า และต้องมีเงินคงเหลือพอในวันที่เรียกเก็บ', en: 'Must be arranged in advance, with enough balance on the collection day' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ค่าไฟเดือนนี้พุ่งขึ้น ตรวจสอบอย่างไร', en: 'The bill jumped — how to check it properly' }
		},
		{
			type: 'p',
			text: {
				th: 'ก่อนจะสรุปว่ามิเตอร์ผิดพลาด ควรแยกให้ออกระหว่าง “ยอดเงินสูงขึ้น” กับ “หน่วยที่ใช้จริงสูงขึ้น” เพราะสองอย่างนี้ไม่ได้ขยับพร้อมกันเสมอไป จำนวนวันในรอบบิลที่ไม่เท่ากัน อากาศร้อนจัดที่ทำให้เครื่องปรับอากาศทำงานนานขึ้น เครื่องใช้ไฟฟ้าที่เสื่อมสภาพจนกินไฟมากกว่าเดิม รวมถึงค่าไฟฟ้าผันแปรที่ประกาศเป็นรายงวด ล้วนทำให้ตัวเลขเปลี่ยนได้ ประวัติการใช้ไฟย้อนหลังในระบบตอบคำถามนี้ได้ตรงที่สุด เพราะแสดงหน่วยที่ใช้จริงแยกจากยอดเงิน',
				en: 'Before concluding the meter is wrong, separate “the amount went up” from “the units went up” — they do not always move together. A longer billing cycle, a hot spell keeping the air-conditioning on, an ageing appliance drawing more than it used to, and the variable tariff component announced each period all shift the figure. The usage history answers this most directly, because it shows units consumed separately from baht owed.'
			}
		},
		{
			type: 'ol',
			items: [
				{
					th: 'เปิดประวัติการใช้ไฟย้อนหลังในบัญชีของคุณ แล้วดูที่จำนวนหน่วย (kWh) ของแต่ละเดือน ไม่ใช่ดูเฉพาะยอดเงิน',
					en: 'Open the usage history in your account and read the units (kWh) for each month, not just the amount billed.'
				},
				{
					th: 'เทียบกับเดือนเดียวกันของปีก่อนเพื่อตัดผลของฤดูกาลออกไป แทนที่จะเทียบกับเดือนที่เพิ่งผ่านมา',
					en: 'Compare against the same month last year to strip out the season, rather than against the month just gone.'
				},
				{
					th: 'ดูจำนวนวันในรอบบิล ถ้ารอบนี้ยาวกว่ารอบก่อนหลายวัน หน่วยที่ใช้ย่อมสูงขึ้นตามธรรมชาติ',
					en: 'Check the number of days in the cycle: if this one ran several days longer, higher consumption follows naturally.'
				},
				{
					th: 'จดเลขหน้ามิเตอร์เองในเวลาเดียวกันของสองวันติดกัน เพื่อดูว่าบ้านใช้ไฟวันละกี่หน่วย แล้วคูณกลับเป็นรายเดือน',
					en: 'Read the meter yourself at the same time on two consecutive days to get a daily figure, then scale it up for a rough monthly estimate.'
				},
				{
					th: 'หากตัวเลขยังขัดกับการใช้งานจริงอย่างชัดเจน ให้ยื่นเรื่องขอตรวจสอบมิเตอร์กับสำนักงานในพื้นที่ พร้อมแนบประวัติการใช้ไฟที่พิมพ์จากระบบ',
					en: 'If the numbers still contradict how you actually live, ask your local PEA office to inspect the meter and bring the usage history printed from the system.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'SMS อ้างว่าจะตัดไฟวันนี้ — ตรวจสอบก่อนกด', en: 'SMS threatening disconnection today — check before you tap' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'การงดจ่ายไฟมีขั้นตอนแจ้งเตือนล่วงหน้า และเอกสารแจ้งจะอ้างอิงหมายเลขผู้ใช้ไฟฟ้าเสมอ ข้อความที่ไม่มีตัวเลขนี้ควรถูกสงสัยไว้ก่อน',
					en: 'Disconnection follows a notice process, and any genuine notice cites your customer number. A message without it deserves suspicion.'
				},
				{
					th: 'อย่าแตะลิงก์ในข้อความ ให้พิมพ์ที่อยู่เว็บไซต์ทางการเองหรือเปิดแอปที่ติดตั้งไว้ หากมียอดค้างชำระจริง ยอดนั้นย่อมปรากฏในบัญชีอยู่แล้ว',
					en: 'Do not tap the link. Type the official address yourself or open the app you already have — a real arrears figure will be sitting in your account anyway.'
				},
				{
					th: 'ไม่มีเจ้าหน้าที่การไฟฟ้าคนใดขอรหัส OTP รหัสผ่าน หรือเลขสามหลักหลังบัตร ผ่านโทรศัพท์ ไลน์ หรือ SMS',
					en: 'No utility employee asks for an OTP, a password or the three digits on the back of a card by phone, LINE or SMS.'
				},
				{
					th: 'ระวังลิงก์ที่ชวนให้ติดตั้งไฟล์แอปจากนอกสโตร์ทางการ เพราะเป็นวิธีที่มิจฉาชีพใช้เข้าควบคุมเครื่อง',
					en: 'Be wary of any link urging you to install an app file from outside the official stores — that is how attackers take over a phone and move money out.'
				},
				{
					th: 'หากยังไม่แน่ใจ ให้ติดต่อศูนย์บริการข้อมูลผู้ใช้ไฟฟ้าของ กฟภ. ตามหมายเลขที่ประกาศบนเว็บไซต์ทางการ หรือสอบถามที่สำนักงานในพื้นที่โดยตรง',
					en: 'Still unsure? Contact PEA’s customer service centre on the number published on the official site, or ask at a local PEA office in person.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ทำไมต้องมีหน้านี้', en: 'Why this page exists' }
		},
		{
			type: 'p',
			text: {
				th: 'คนที่ค้นหาเรื่องค่าไฟแทบไม่มีใครพิมพ์ชื่อเต็มว่า “การไฟฟ้าส่วนภูมิภาค” ส่วนใหญ่พิมพ์สั้น ๆ ว่า “เช็คค่าไฟ” หรือ “จ่ายค่าไฟออนไลน์” ซึ่งให้ผลลัพธ์ปะปนกันระหว่างสองการไฟฟ้า และมักมีหน้าเว็บลอกเลียนแทรกอยู่ด้วย ความกำกวมนี้กระทบบริการนี้หนักกว่าบริการรัฐทั่วไป เพราะผู้ใช้ไฟต้องรู้ก่อนว่าบ้านตัวเองอยู่ในเขตของหน่วยงานใด จึงจะค้นเจอบิลได้ หน้านี้จึงแยกทางให้ถูกตั้งแต่ต้นด้วยคำที่คนพิมพ์จริง แล้วส่งต่อไปยังที่อยู่ทางการของ กฟภ. โดยตรง ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่มีความเกี่ยวข้องกับหน่วยงานใด และไม่รับข้อมูลส่วนบุคคลหรือการชำระเงินแทนหน่วยงาน',
				en: 'Almost nobody searching about their electricity types “Provincial Electricity Authority”. They type “check electricity bill” or “pay electricity online” — phrases returning a mixture of both utilities, with imitation pages among the results. That ambiguity bites harder here than with most government services, because a customer must know which authority covers their house before they can find their bill at all. This page sends people down the right fork from the start, in the words they actually use, and hands them to PEA’s official address. ThaiGov.co is an independent directory, unaffiliated with any agency, and never collects personal data or payments on an agency’s behalf.'
			}
		}
	],
	crawl: {
		host: 'www.pea.co.th',
		verdict: 'allowed',
		kind: 'allowed',
		status: 200,
		snippet: '#\n# robots.txt\n#\n# This file is to prevent the crawling and indexing of certain parts\n# of your site by web crawlers and spiders run by sites like Yahoo!\n# and Google. By telling these "robots" where not to go on your site,\n# you save bandwidth and server resources.\n#\n# This file will be ignored unless it is at the roo',
		checkedAt: '2026-08-27',
		note: {
			th: 'ไฟล์ robots.txt อนุญาตให้เครื่องมือค้นหาเก็บข้อมูลได้ทั้งเว็บไซต์ อย่างไรก็ตาม บริการที่ต้องเข้าสู่ระบบยังคงไม่ปรากฏในผลการค้นหา ซึ่งเป็นเรื่องปกติของระบบที่ต้องยืนยันตัวตน',
			en: 'The robots.txt permits crawling across the whole site. Services behind a sign-in still do not appear in search results, which is normal for authenticated systems.'
		}
	},
	priority: 95,
	updated: '2026-08-28'
};
