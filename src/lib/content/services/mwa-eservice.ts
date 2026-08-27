import type { Service } from '../types';

export const service: Service = {
	slug: 'mwa-eservice',
	name: {
		th: 'MWA e-Service — เช็กและจ่ายค่าน้ำประปา การประปานครหลวง',
		en: 'MWA e-Service — Check and Pay Your Bangkok Water Bill'
	},
	shortName: { th: 'MWA e-Service', en: 'MWA e-Service' },
	url: 'https://www.mwa.co.th/',
	agency: 'mwa',
	categories: ['utilities'],
	summary: {
		th: 'เช็กค่าน้ำประปา จ่ายบิลออนไลน์ ดูประวัติการใช้น้ำย้อนหลัง แจ้งท่อแตกน้ำรั่ว ดูประกาศน้ำไม่ไหล และขอติดตั้งประปาใหม่กับการประปานครหลวง พร้อมลิงก์เข้าเว็บไซต์ทางการ',
		en: 'Check and pay your Bangkok water bill, review past consumption, report a burst pipe and look up supply interruptions with the Metropolitan Waterworks Authority.'
	},
	deck: {
		th: 'บริการออนไลน์ของการประปานครหลวงสำหรับผู้ใช้น้ำในกรุงเทพมหานคร นนทบุรี และสมุทรปราการ ตั้งแต่ดูยอดค่าน้ำเดือนนี้ ไปจนถึงแจ้งท่อประปาแตก',
		en: 'The Metropolitan Waterworks Authority’s online services for customers in Bangkok, Nonthaburi and Samut Prakan — from this month’s bill to reporting a burst pipe.'
	},
	keywords: {
		th: [
			'เช็คค่าน้ำ',
			'เช็คค่าน้ำประปาออนไลน์',
			'จ่ายค่าน้ำออนไลน์',
			'การประปานครหลวง',
			'กปน.',
			'MWA e-Service',
			'ค่าน้ำเดือนนี้',
			'น้ำไม่ไหล',
			'ประกาศน้ำประปาไม่ไหล',
			'แจ้งท่อประปาแตก',
			'ค่าน้ำแพงผิดปกติ',
			'ขอติดตั้งประปาใหม่',
			'ดูบิลค่าน้ำย้อนหลัง',
			'เลขที่ผู้ใช้น้ำ'
		],
		en: [
			'MWA e-Service',
			'check water bill Thailand',
			'pay water bill Bangkok',
			'Metropolitan Waterworks Authority',
			'water supply interruption Bangkok',
			'report burst water pipe Bangkok',
			'new water connection Thailand'
		]
	},
	features: [
		{
			icon: 'receipt',
			title: { th: 'ดูยอดค่าน้ำและชำระเงินออนไลน์', en: 'See the amount due and pay online' },
			text: {
				th: 'ตรวจสอบยอดค่าน้ำงวดปัจจุบัน ดูว่าการชำระเงินเข้าระบบแล้วหรือยัง และเก็บหลักฐานการชำระไว้เอง โดยไม่ต้องรอใบแจ้งหนี้ที่เสียบไว้หน้าบ้าน',
				en: 'Check the current amount, confirm whether a payment has been recorded and keep the proof yourself — no waiting for the slip tucked into your gate.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'ดูประวัติการใช้น้ำย้อนหลัง', en: 'Review your consumption history' },
			text: {
				th: 'เทียบหน่วยน้ำที่ใช้ในแต่ละเดือน เพื่อแยกให้ออกว่าค่าน้ำที่สูงขึ้นมาจากการใช้งานจริง หรือมาจากจุดรั่วที่ยังไม่มีใครสังเกตเห็น',
				en: 'Compare the units used month by month to tell whether a higher bill comes from real usage or from a leak nobody has spotted yet.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'รับใบแจ้งค่าน้ำอิเล็กทรอนิกส์', en: 'Get the bill electronically' },
			text: {
				th: 'เปลี่ยนมารับใบแจ้งค่าน้ำและใบเสร็จในรูปแบบอิเล็กทรอนิกส์ เก็บย้อนหลังไว้เป็นหลักฐานได้ โดยไม่ต้องกังวลว่ากระดาษจะหายหรือเปียกฝน',
				en: 'Switch to an electronic invoice and receipt that stay in your account, instead of paper that goes missing or gets rained on.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'แจ้งท่อแตก น้ำรั่ว น้ำไม่ไหล', en: 'Report a burst pipe or a dry tap' },
			text: {
				th: 'แจ้งเหตุท่อประปาแตกรั่วหรือน้ำไม่ไหลได้จากมือถือ พร้อมระบุตำแหน่งที่พบเหตุ เพื่อให้เจ้าหน้าที่เข้าตรวจสอบได้เร็วขึ้น',
				en: 'Report a burst main, a leak or a loss of supply from your phone, with the location, so a crew can get to it sooner.'
			}
		},
		{
			icon: 'map',
			title: { th: 'เช็กประกาศน้ำไม่ไหลตามพื้นที่', en: 'Check planned interruptions in your area' },
			text: {
				th: 'ดูประกาศหยุดจ่ายน้ำชั่วคราวและงานซ่อมบำรุงที่กระทบพื้นที่ของคุณ จะได้สำรองน้ำไว้ล่วงหน้าแทนที่จะรู้ตัวตอนเปิดก๊อกแล้วไม่มีน้ำ',
				en: 'Look up temporary shut-offs and maintenance work affecting your neighbourhood, so you can store water in advance instead of finding out at the tap.'
			}
		},
		{
			icon: 'building',
			title: { th: 'ขอติดตั้งประปาใหม่และงานมาตรวัดน้ำ', en: 'Apply for a new connection or meter work' },
			text: {
				th: 'ยื่นคำขอติดตั้งประปาใหม่ ขอย้ายมาตรวัดน้ำ หรือขอให้ตรวจสอบมาตร แล้วติดตามสถานะคำขอจากที่เดียวกัน',
				en: 'Request a new connection, ask for a meter to be moved or tested, and follow the status of that request in the same place.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ข้อมูลตรงจากช่องทางทางการ', en: 'Information straight from the official channel' },
			text: {
				th: 'ยอดค่าน้ำและประกาศต่าง ๆ มาจากระบบของการประปานครหลวงโดยตรง ลดความเสี่ยงจากลิงก์ปลอมและข้อความหลอกลวงที่แอบอ้างชื่อหน่วยงาน',
				en: 'Balances and announcements come from MWA’s own system, which cuts the risk from fake links and messages trading on the agency’s name.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ตรวจสอบว่าบ้านของคุณอยู่ในพื้นที่ของการประปานครหลวง', en: 'Confirm your address is in MWA’s service area' },
			text: {
				th: 'การประปานครหลวงรับผิดชอบเฉพาะกรุงเทพมหานคร นนทบุรี และสมุทรปราการ หากบ้านอยู่จังหวัดอื่น ผู้ให้บริการของคุณคือการประปาส่วนภูมิภาค (กปภ.) ซึ่งใช้คนละระบบและคนละเว็บไซต์',
				en: 'MWA is responsible for Bangkok, Nonthaburi and Samut Prakan only. In any other province your supplier is the Provincial Waterworks Authority (PWA), which runs a separate system on a separate website.'
			}
		},
		{
			title: { th: 'หยิบใบแจ้งค่าน้ำมาดูเลขที่ผู้ใช้น้ำ', en: 'Find your customer number on the bill' },
			text: {
				th: 'ระบบใช้เลขที่ผู้ใช้น้ำหรือหมายเลขมาตรวัดน้ำเป็นตัวอ้างอิงถึงบ้านของคุณ ตัวเลขนี้พิมพ์อยู่บนใบแจ้งค่าน้ำและใบเสร็จ หากหาเอกสารไม่พบ ให้ดูที่ตัวมาตรวัดน้ำหน้าบ้านประกอบ',
				en: 'The system identifies your property by the customer number or the meter number. Both appear on the bill and the receipt; if the paperwork has gone, check the meter outside the property.'
			}
		},
		{
			title: { th: 'สมัครสมาชิกหรือเข้าสู่ระบบบนเว็บไซต์ทางการ', en: 'Register or sign in on the official site' },
			text: {
				th: 'พิมพ์ที่อยู่เว็บไซต์ของการประปานครหลวงเข้าไปเอง ไม่ควรเข้าผ่านลิงก์ที่ส่งต่อกันมา แล้วสมัครด้วยอีเมลและเบอร์โทรศัพท์ที่ใช้งานจริง เพราะระบบจะใช้ช่องทางนี้ยืนยันตัวตนและส่งการแจ้งเตือน',
				en: 'Type MWA’s address in yourself rather than following a forwarded link, then register with an email address and phone number you actually use — the system verifies you and sends notices through them.'
			}
		},
		{
			title: { th: 'ผูกทะเบียนผู้ใช้น้ำเข้ากับบัญชี', en: 'Link your customer number to the account' },
			text: {
				th: 'เมื่อเข้าระบบได้แล้วให้เพิ่มเลขที่ผู้ใช้น้ำเข้าไปในบัญชี หนึ่งบัญชีดูแลได้หลายทะเบียน เหมาะกับคนที่มีทั้งบ้านพักและร้านค้า หรือปล่อยเช่าหลายห้อง',
				en: 'Once inside, add the customer number to your account. One account can hold several properties — useful if you have a home and a shop, or rent rooms out.'
			}
		},
		{
			title: { th: 'เลือกทำรายการ แล้วเก็บหลักฐานไว้ทุกครั้ง', en: 'Do what you came for — and keep the receipt' },
			text: {
				th: 'จากบัญชีเดียวนี้คุณดูยอดค้างชำระ ชำระเงิน ดูประวัติการใช้น้ำ สมัครรับใบแจ้งค่าน้ำอิเล็กทรอนิกส์ หรือแจ้งเหตุน้ำรั่วได้ และทุกครั้งที่ทำรายการ ควรบันทึกใบเสร็จหรือเลขที่รายการไว้เผื่อต้องใช้อ้างอิงภายหลัง',
				en: 'From that one account you can view arrears, pay, read your usage history, opt into electronic billing or report a leak. Save the receipt or the reference number every time, in case you need it later.'
			}
		}
	],
	faq: [
		{
			q: { th: 'การประปานครหลวงดูแลพื้นที่ไหนบ้าง', en: 'Which areas does MWA cover?' },
			a: {
				th: 'การประปานครหลวงผลิตและจ่ายน้ำประปาให้กรุงเทพมหานคร นนทบุรี และสมุทรปราการ ส่วนจังหวัดอื่นทั่วประเทศอยู่ในความรับผิดชอบของการประปาส่วนภูมิภาค ซึ่งมีระบบออนไลน์ของตัวเองแยกต่างหาก หากคุณอยู่นอกสามจังหวัดนี้ ระบบของ กปน. จะค้นไม่พบข้อมูลผู้ใช้น้ำของคุณ',
				en: 'MWA produces and distributes tap water for Bangkok, Nonthaburi and Samut Prakan. Every other province is served by the Provincial Waterworks Authority, which runs its own separate online system. Outside those three provinces, MWA will not find your account.'
			}
		},
		{
			q: { th: 'ต้องใช้เลขอะไรในการเช็กค่าน้ำ', en: 'Which number do I need to check the bill?' },
			a: {
				th: 'ใช้เลขที่ผู้ใช้น้ำบนใบแจ้งค่าน้ำ หรือหมายเลขมาตรวัดน้ำที่ตัวมาตรหน้าบ้าน ตัวเลขนี้ผูกกับสถานที่ ไม่ได้ผูกกับชื่อคน ผู้เช่าที่จ่ายค่าน้ำเองจึงตรวจสอบยอดได้ หากเพิ่งย้ายเข้าและยังไม่เคยเห็นใบแจ้งค่าน้ำ ให้ขอเลขนี้จากเจ้าของบ้านหรือนิติบุคคลอาคารชุด',
				en: 'Use the customer number on the water bill, or the meter number on the meter outside. It belongs to the address rather than to a person, so a tenant who pays the bill can check the balance. If you have just moved in and no bill has arrived, ask the owner or the building’s juristic person.'
			}
		},
		{
			q: { th: 'ค่าน้ำเดือนนี้แพงผิดปกติ ควรทำอะไรก่อน', en: 'This month’s bill is unusually high — what should I do first?' },
			a: {
				th: 'เริ่มจากเทียบหน่วยน้ำกับเดือนก่อน ๆ ในประวัติการใช้น้ำ ถ้าหน่วยพุ่งขึ้นทั้งที่ใช้เท่าเดิม ให้ปิดก๊อกและอุปกรณ์ที่ใช้น้ำทุกจุด แล้วดูว่ามาตรวัดน้ำยังหมุนหรือไม่ ถ้ายังหมุนแปลว่ามีน้ำรั่วในบ้าน ซึ่งมักมาจากชักโครกรั่วซึมหรือท่อใต้พื้นแตก ควรให้ช่างตรวจก่อนยื่นเรื่องขอตรวจสอบมาตร',
				en: 'Compare the units used with previous months in your consumption history. If they jumped while your habits did not, turn off every tap and water-using appliance and watch the meter — if it still turns, water is escaping inside your own plumbing, usually from a leaking toilet or a pipe under the floor. Have a plumber look before asking MWA to test the meter.'
			}
		},
		{
			q: { th: 'สมัครสมาชิกหรือเข้าสู่ระบบไม่สำเร็จ ต้องแก้อย่างไร', en: 'Registration or sign-in fails — how do I fix it?' },
			a: {
				th: 'ตรวจก่อนว่ากรอกเลขที่ผู้ใช้น้ำตรงตามใบแจ้งค่าน้ำ ไม่มีเว้นวรรคหรือขีดเกินมา ถ้าไม่ได้รับรหัส OTP ให้รอสักครู่แล้วขอใหม่ และลองดูในกล่องจดหมายขยะของอีเมล หากยังเข้าไม่ได้ หรือเบอร์โทรศัพท์ที่ลงทะเบียนไว้เปลี่ยนไปแล้ว ต้องติดต่อศูนย์บริการตามหมายเลขที่ประกาศบนเว็บไซต์ทางการเพื่อยืนยันตัวตน',
				en: 'Check that the customer number matches the bill exactly, with no stray spaces or dashes. If the OTP does not arrive, wait a moment and request it again, and look in your email spam folder. If you still cannot get in, or the registered phone number is no longer yours, contact the service centre on the number published on the official site.'
			}
		},
		{
			q: { th: 'น้ำไม่ไหลหรือน้ำขุ่น ควรเช็กอะไรบ้าง', en: 'No water, or cloudy water — what should I check?' },
			a: {
				th: 'ดูประกาศหยุดจ่ายน้ำในพื้นที่ก่อน เพราะงานซ่อมบำรุงมักแจ้งล่วงหน้าพร้อมระบุช่วงเวลา ถ้าไม่มีประกาศและเพื่อนบ้านยังมีน้ำใช้ตามปกติ ปัญหามักอยู่ที่ปั๊มน้ำหรือระบบท่อในบ้านของคุณเอง แต่ถ้ากระทบทั้งซอย ควรแจ้งการประปานครหลวงให้เข้าตรวจสอบ',
				en: 'Check the interruption notices for your area first — maintenance and pipe-laying are announced in advance with a time window. If nothing is listed and your neighbours still have water, the fault is probably your own pump or pipework. If the whole lane is affected, report it to MWA.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าข้อความที่อ้างว่ามาจากการประปาเป็นของจริง', en: 'How do I know a message claiming to be from MWA is genuine?' },
			a: {
				th: 'หน่วยงานไม่ส่งลิงก์ให้กรอกรหัส OTP รหัสผ่าน หรือเลขหลังบัตรเครดิตผ่าน SMS และแชท และไม่มีนโยบายเร่งให้โอนเงินภายในไม่กี่นาทีเพื่อไม่ให้ถูกตัดน้ำ วิธีที่ปลอดภัยที่สุดคือไม่กดลิงก์ที่ส่งมา แต่พิมพ์ที่อยู่เว็บไซต์ทางการซึ่งอยู่ภายใต้โดเมน mwa.co.th ด้วยตัวเอง แล้วเข้าไปดูยอดในบัญชีของคุณ',
				en: 'The agency does not send links asking for an OTP, a password or the number on the back of a card, and it does not demand a transfer within minutes to avoid disconnection. The safest move is to ignore the link, type the official address — which sits under mwa.co.th — yourself, and check the balance in your own account.'
			}
		},
		{
			q: { th: 'ใช้บริการออนไลน์นี้มีค่าใช้จ่ายเพิ่มหรือไม่', en: 'Does using the online service cost anything extra?' },
			a: {
				th: 'การดูยอดค่าน้ำ ประวัติการใช้น้ำ และประกาศต่าง ๆ ไม่มีค่าใช้จ่าย ส่วนการชำระเงินอาจมีค่าธรรมเนียมตามช่องทางที่เลือก ซึ่งจะแสดงให้เห็นก่อนยืนยันรายการ ส่วนงานอย่างการขอติดตั้งประปาใหม่มีค่าใช้จ่ายตามระเบียบของหน่วยงาน ควรตรวจสอบอัตราปัจจุบันจากเว็บไซต์ทางการ',
				en: 'Viewing your balance, your usage history and the announcements is free. Payment channels may charge their own fee, shown before you confirm. Work such as a new connection carries charges set by the agency’s regulations, so check the current figures on the official site.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'MWA e-Service คืออะไร', en: 'What is MWA e-Service?' }
		},
		{
			type: 'p',
			text: {
				th: 'MWA e-Service คือชุดบริการออนไลน์ของการประปานครหลวง (กปน.) รัฐวิสาหกิจที่ผลิตและจ่ายน้ำประปาให้กรุงเทพมหานคร นนทบุรี และสมุทรปราการ ระบบนี้ย้ายงานที่เดิมต้องเดินไปสำนักงานประปาสาขาหรือโทรเข้าศูนย์บริการมาไว้บนหน้าจอเดียว ทั้งการดูยอดค่าน้ำ การชำระเงิน ประวัติการใช้น้ำ ใบแจ้งค่าน้ำอิเล็กทรอนิกส์ การแจ้งท่อแตกรั่ว ประกาศหยุดจ่ายน้ำ และการขอติดตั้งประปาใหม่',
				en: 'MWA e-Service is the online service set run by the Metropolitan Waterworks Authority (MWA), the state enterprise that produces and distributes tap water for Bangkok, Nonthaburi and Samut Prakan. It moves work that once meant a trip to a branch office or a call to the service centre onto one screen: the amount due, payment, consumption history, electronic billing, burst-pipe reports, interruption notices and new-connection requests.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ระบบใช้เลขที่ผู้ใช้น้ำเป็นตัวอ้างอิง ซึ่งผูกกับสถานที่ ไม่ได้ผูกกับชื่อผู้อยู่อาศัย ผู้เช่าที่จ่ายค่าน้ำเองจึงดูยอดและประวัติการใช้น้ำได้ แม้ทะเบียนผู้ใช้น้ำจะยังเป็นชื่อเจ้าของบ้าน',
				en: 'The system works from the customer number, which is attached to the address rather than to a person — so a tenant who pays the bill can read the balance and the usage history even though the account stands in the owner’s name.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'อยู่นอกกรุงเทพฯ นนทบุรี และสมุทรปราการ หรือเปล่า', en: 'Outside Bangkok, Nonthaburi and Samut Prakan?' },
			text: {
				th: 'ถ้าบ้านของคุณอยู่จังหวัดอื่น ผู้ให้บริการน้ำประปาคือการประปาส่วนภูมิภาค (กปภ.) ซึ่งเป็นคนละหน่วยงานและมีระบบออนไลน์ของตัวเอง ระบบของการประปานครหลวงจะค้นไม่พบเลขที่ผู้ใช้น้ำของคุณ บางพื้นที่อยู่ในความดูแลของประปาท้องถิ่นหรือประปาหมู่บ้าน ซึ่งต้องติดต่อหน่วยงานนั้นโดยตรง',
				en: 'If your home is in another province, your supplier is the Provincial Waterworks Authority (PWA) — a separate agency with its own online system — and MWA will not find your customer number. Some areas are served by a local or village waterworks instead, which you contact directly.'
			}
		},
		{
			type: 'h2',
			text: { th: 'บริการหลักและสิ่งที่ต้องเตรียม', en: 'The main tasks, and what each needs' }
		},
		{
			type: 'table',
			caption: { th: 'สรุปงานที่ทำได้ผ่านช่องทางออนไลน์', en: 'What you can do online' },
			head: [
				{ th: 'เรื่องที่ต้องการทำ', en: 'What you want to do' },
				{ th: 'สิ่งที่ต้องเตรียม', en: 'What you need' },
				{ th: 'ข้อสังเกต', en: 'Notes' }
			],
			rows: [
				[
					{ th: 'ดูยอดค่าน้ำและชำระเงิน', en: 'Check the balance and pay' },
					{ th: 'เลขที่ผู้ใช้น้ำ', en: 'Customer number' },
					{ th: 'ยอดปรากฏหลังจดหน่วยและออกใบแจ้งค่าน้ำของงวดนั้นแล้ว', en: 'Appears once the meter is read and that cycle’s bill issued.' }
				],
				[
					{ th: 'ดูประวัติการใช้น้ำย้อนหลัง', en: 'Read your consumption history' },
					{ th: 'บัญชีที่ผูกทะเบียนผู้ใช้น้ำไว้แล้ว', en: 'An account with the property linked' },
					{ th: 'ใช้เทียบหน่วยรายเดือนเพื่อหาสาเหตุค่าน้ำผิดปกติ', en: 'Compare units month by month to explain an odd bill.' }
				],
				[
					{ th: 'รับใบแจ้งค่าน้ำอิเล็กทรอนิกส์', en: 'Receive the bill electronically' },
					{ th: 'อีเมลที่ใช้งานจริง', en: 'A working email address' },
					{ th: 'ถ้าไม่ได้รับตามรอบ ให้ตรวจกล่องจดหมายขยะก่อน', en: 'If a cycle’s bill is missing, check the spam folder.' }
				],
				[
					{ th: 'แจ้งท่อแตก น้ำรั่ว หรือน้ำไม่ไหล', en: 'Report a burst pipe, a leak or no supply' },
					{ th: 'ตำแหน่งที่พบเหตุและเบอร์ติดต่อกลับ', en: 'The location and a contact number' },
					{ th: 'ระบุจุดให้ชัด เช่น ชื่อซอยและจุดสังเกตใกล้เคียง', en: 'Be specific — the lane name and a nearby landmark.' }
				],
				[
					{ th: 'ตรวจสอบประกาศหยุดจ่ายน้ำ', en: 'Look up planned interruptions' },
					{ th: 'พื้นที่หรือเขตที่อยู่อาศัย', en: 'Your district or area' },
					{ th: 'ควรดูก่อนวางแผนงานที่ต้องใช้น้ำมาก', en: 'Check before anything water-heavy.' }
				],
				[
					{ th: 'ขอติดตั้งประปาใหม่หรือขอตรวจสอบมาตรวัดน้ำ', en: 'Apply for a connection or a meter check' },
					{ th: 'เอกสารแสดงสิทธิในสถานที่และบัตรประจำตัวประชาชน', en: 'Proof of rights over the property and an ID card' },
					{ th: 'เอกสารและค่าใช้จ่ายเป็นไปตามระเบียบ ควรดูรายการล่าสุดจากเว็บไซต์ทางการ', en: 'Paperwork and charges follow the agency’s rules — confirm on the official site.' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ค่าน้ำแพงผิดปกติ ตรวจหาสาเหตุเองได้ก่อน', en: 'An unexpectedly high bill: check it yourself first' }
		},
		{
			type: 'p',
			text: {
				th: 'ค่าน้ำที่กระโดดขึ้นผิดปกติส่วนใหญ่ไม่ได้เกิดจากมาตรวัดน้ำเสีย แต่เกิดจากน้ำที่รั่วออกไปเงียบ ๆ ตลอดทั้งเดือน จุดที่พบบ่อยที่สุดคือลูกยางในถังชักโครกเสื่อม ทำให้น้ำไหลลงโถตลอดเวลาโดยแทบไม่มีเสียง รองลงมาคือท่อที่ฝังใต้พื้นหรือใต้ดินแตกรั่ว ซึ่งสังเกตได้จากพื้นชื้นเป็นจุดโดยไม่มีสาเหตุ หรือแรงดันน้ำลดลงกว่าเดิม',
				en: 'A bill that jumps rarely means a faulty meter; it usually means water leaving quietly all month. The commonest cause is a worn flapper in the toilet cistern, letting water trickle into the bowl almost silently. Next is a pipe buried under the floor or the ground, which shows up as a damp patch with no obvious source, or a drop in pressure.'
			}
		},
		{
			type: 'ol',
			items: [
				{
					th: 'ปิดก๊อกน้ำทุกจุดในบ้าน รวมถึงเครื่องซักผ้า เครื่องทำน้ำอุ่น ระบบรดน้ำต้นไม้ และปั๊มน้ำ',
					en: 'Turn off every tap in the house, including the washing machine, the water heater, any garden irrigation and the pump.'
				},
				{
					th: 'จดตัวเลขบนหน้าปัดมาตรวัดน้ำ แล้วสังเกตเข็มหรือตัวเลขหลักเล็กที่สุดว่าขยับหรือไม่',
					en: 'Write down the reading on the meter, then watch whether the smallest dial or digit moves at all.'
				},
				{
					th: 'ทิ้งไว้หนึ่งถึงสองชั่วโมงโดยไม่ใช้น้ำเลย แล้วอ่านค่าอีกครั้ง ถ้าตัวเลขเปลี่ยน แปลว่ามีน้ำรั่วในระบบท่อของบ้าน',
					en: 'Leave it for an hour or two without using any water, then read it again. A changed number means water is escaping inside your own plumbing.'
				},
				{
					th: 'ทดสอบชักโครกด้วยการหยดสีผสมอาหารลงในถังพักน้ำ ทิ้งไว้โดยไม่กดชักโครก ถ้าสีปรากฏในโถ แสดงว่าลูกยางรั่วและควรเปลี่ยน',
					en: 'Drip food colouring into the toilet cistern and leave it without flushing. If colour appears in the bowl, the flapper is leaking and should be replaced.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ถ้ามาตรยังหมุนทั้งที่ปิดน้ำหมดแล้ว', en: 'If the meter keeps turning with everything off' },
			text: {
				th: 'ให้ถือว่ามีจุดรั่วอยู่ในระบบท่อภายในบ้าน ซึ่งเป็นส่วนที่ผู้ใช้น้ำรับผิดชอบเองและควรให้ช่างประปาตรวจสอบ ถ้าช่างตรวจแล้วไม่พบรอยรั่วแต่หน่วยน้ำยังสูงต่อเนื่อง จึงค่อยยื่นเรื่องขอให้การประปานครหลวงตรวจสอบมาตร โดยเตรียมภาพถ่ายหน้าปัดมาตรและประวัติการใช้น้ำที่พิมพ์จากระบบไว้ประกอบ',
				en: 'Treat it as a leak on your side of the meter — the customer’s responsibility, and a job for a plumber. Only if the plumber finds nothing and the units stay high should you ask MWA to test the meter, and bring photographs of the dial and a printout of the usage history when you do.'
			}
		},
		{
			type: 'h2',
			text: { th: 'น้ำไม่ไหล ท่อแตก และประกาศหยุดจ่ายน้ำ', en: 'No water, burst mains and planned shut-offs' }
		},
		{
			type: 'p',
			text: {
				th: 'เมื่อน้ำไม่ไหล สิ่งแรกที่ควรทำคือดูประกาศหยุดจ่ายน้ำในพื้นที่ เพราะงานซ่อมท่อและงานวางท่อใหม่มักประกาศล่วงหน้าพร้อมระบุช่วงเวลา ส่วนกรณีท่อแตกบนถนนหรือมีน้ำผุดขึ้นจากพื้น ควรแจ้งทันทีและระบุตำแหน่งให้ชัดที่สุด เพราะน้ำที่รั่วออกไปทำให้ผิวถนนทรุดจนเกิดอันตรายได้',
				en: 'When the taps run dry, look at the interruption notices for your area first: repairs and new pipe-laying are normally announced ahead of time with a window. For a main bursting in the street, or water welling up through the surface, report it immediately and describe the spot precisely — escaping water undermines the road until the surface gives way.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ระวังมิจฉาชีพแอบอ้างชื่อการประปา', en: 'Watch for scams using the agency’s name' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ข้อความที่อ้างว่าค้างค่าน้ำและจะตัดน้ำภายในวันนี้ พร้อมลิงก์ให้จ่ายทันที คือรูปแบบที่พบบ่อยที่สุด ให้เข้าไปดูยอดในบัญชีของคุณเองก่อนเสมอ',
					en: 'The commonest pattern is a message claiming arrears and disconnection today, with a link to pay at once. Always check the balance in your own account first.'
				},
				{
					th: 'ระบบจริงอยู่ภายใต้โดเมน mwa.co.th ให้อ่านชื่อโดเมนบนแถบที่อยู่ทุกครั้งก่อนกรอกข้อมูลหรือชำระเงิน',
					en: 'The genuine system lives under mwa.co.th. Read the domain in the address bar before entering anything or paying.'
				},
				{
					th: 'อย่าโอนเงินเข้าบัญชีธนาคารส่วนบุคคล ค่าน้ำต้องชำระผ่านช่องทางที่หน่วยงานกำหนดเท่านั้น',
					en: 'Never transfer to a personal bank account — water bills are paid only through the channels the agency designates.'
				},
				{
					th: 'ถ้ามีคนอ้างตัวเป็นเจ้าหน้าที่มาขอเก็บเงินหรือขอเปลี่ยนมาตรถึงบ้าน ให้ขอดูบัตรประจำตัวและโทรตรวจสอบกับศูนย์บริการตามหมายเลขบนเว็บไซต์ทางการก่อน',
					en: 'If someone turns up claiming to be staff, collecting money or offering to swap the meter, ask for identification and call the service centre on the number published on the official site first.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงมีอยู่', en: 'Why this page exists' }
		},
		{
			type: 'p',
			text: {
				th: 'แทบไม่มีใครค้นหาด้วยคำว่า MWA e-Service คนส่วนใหญ่พิมพ์ว่า “เช็คค่าน้ำ” “น้ำไม่ไหลวันนี้” หรือ “ค่าน้ำแพงผิดปกติ” ในจังหวะที่กำลังเดือดร้อน เว็บไซต์ของการประปานครหลวงเปิดให้เครื่องมือค้นหาเก็บข้อมูลได้ก็จริง แต่ยอดค่าน้ำและประวัติการใช้น้ำอยู่หลังหน้าเข้าสู่ระบบ จึงไม่ปรากฏในผลการค้นหา หน้านี้จึงเป็นป้ายบอกทางด้วยภาษาที่คนใช้จริง แล้วส่งต่อไปยังเว็บไซต์ทางการโดยตรง THGov เป็นไดเรกทอรีอิสระ ไม่มีส่วนเกี่ยวข้องกับการประปานครหลวง และไม่รับข้อมูลส่วนบุคคลหรือการชำระเงิน',
				en: 'Hardly anyone searches for “MWA e-Service”. People type “check water bill”, “no water today” or “why is my water bill so high”, at the moment the problem is in front of them. MWA’s site is open to search engines, but the parts that matter most — your balance and your consumption history — sit behind a sign-in and never surface in results. This page is the signpost in between: ordinary language about what the system does, then a direct hand-off to the official site. THGov is an independent directory with no connection to MWA, and it never takes personal details or payments.'
			}
		}
	],
	crawl: {
		host: 'www.mwa.co.th',
		verdict: 'allowed',
		kind: 'allowed',
		status: 200,
		snippet: '# START YOAST BLOCK\n# ---------------------------\nUser-agent: *\nAllow: /\n\n# ---------------------------\n# END YOAST BLOCK',
		checkedAt: '2026-08-27',
		note: {
			th: 'ไฟล์ robots.txt อนุญาตให้เครื่องมือค้นหาเก็บข้อมูลได้ทั้งเว็บไซต์ อย่างไรก็ตาม บริการที่ต้องเข้าสู่ระบบยังคงไม่ปรากฏในผลการค้นหา ซึ่งเป็นเรื่องปกติของระบบที่ต้องยืนยันตัวตน',
			en: 'The robots.txt permits crawling across the whole site. Services behind a sign-in still do not appear in search results, which is normal for authenticated systems.'
		}
	},
	priority: 84,
	updated: '2026-08-28'
};
