import type { Service } from '../types';

export const service: Service = {
	slug: 'mea-eservice',
	name: {
		th: 'MEA e-Service — เช็กและจ่ายค่าไฟฟ้าออนไลน์ การไฟฟ้านครหลวง',
		en: 'MEA e-Service — Check and Pay Your Electricity Bill Online'
	},
	shortName: { th: 'MEA e-Service', en: 'MEA e-Service' },
	url: 'https://meaeservice.mea.or.th/',
	altUrls: [
		{ label: { th: 'เว็บไซต์หลัก การไฟฟ้านครหลวง', en: 'MEA main website' }, url: 'https://www.mea.or.th/' },
		{ label: { th: 'LINE Official Account @meathailand', en: 'LINE Official Account @meathailand' }, url: 'https://line.me/R/ti/p/@meathailand' }
	],
	agency: 'mea',
	categories: ['utilities'],
	summary: {
		th: 'เช็กค่าไฟ จ่ายบิล ดูประวัติการใช้ไฟฟ้าย้อนหลัง ขอใช้ไฟใหม่ และแจ้งไฟฟ้าขัดข้องกับการไฟฟ้านครหลวง ผ่าน MEA e-Service ได้ตลอด 24 ชั่วโมง พร้อมลิงก์เข้าระบบทางการ',
		en: 'Check your electricity bill, pay it, review past usage, request a new supply and report an outage with the Metropolitan Electricity Authority — 24 hours a day through MEA e-Service. Direct link to the official system.'
	},
	deck: {
		th: 'บริการออนไลน์ของการไฟฟ้านครหลวงสำหรับผู้ใช้ไฟฟ้าในกรุงเทพมหานคร นนทบุรี และสมุทรปราการ — แค่คลิกก็ครบ จบทุกเรื่องไฟฟ้า',
		en: 'The Metropolitan Electricity Authority’s online service for customers in Bangkok, Nonthaburi and Samut Prakan — everything about your electricity in one place.'
	},
	keywords: {
		th: [
			'เช็คค่าไฟ',
			'เช็คค่าไฟฟ้าออนไลน์',
			'จ่ายค่าไฟออนไลน์',
			'MEA e-Service',
			'การไฟฟ้านครหลวง',
			'ค่าไฟเดือนนี้',
			'ดูบิลค่าไฟย้อนหลัง',
			'แจ้งไฟดับ',
			'ขอใช้ไฟฟ้าใหม่',
			'MEA e-Bill',
			'กฟน.',
			'เช็คค่าไฟบ้าน'
		],
		en: [
			'MEA e-Service',
			'check electricity bill Thailand',
			'pay electricity bill Bangkok',
			'Metropolitan Electricity Authority',
			'MEA e-Bill',
			'report power outage Bangkok',
			'new electricity connection Thailand'
		]
	},
	features: [
		{
			icon: 'bolt',
			title: { th: 'เช็กและจ่ายค่าไฟได้ตลอด 24 ชั่วโมง', en: 'Check and pay 24/7' },
			text: {
				th: 'ดูยอดค่าไฟงวดปัจจุบันและชำระเงินได้ทุกที่ทุกเวลา ไม่ต้องรอบิลกระดาษหรือเดินทางไปที่ทำการ',
				en: 'See the current amount due and settle it from anywhere, at any hour — no paper bill and no trip to a service centre.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'ดูประวัติการใช้ไฟฟ้าย้อนหลัง', en: 'Review your usage history' },
			text: {
				th: 'เปรียบเทียบหน่วยการใช้ไฟและค่าไฟของเดือนก่อน ๆ เพื่อหาสาเหตุที่ค่าไฟสูงผิดปกติ',
				en: 'Compare units consumed and amounts billed across previous months to work out why a bill spiked.'
			}
		},
		{
			icon: 'receipt',
			title: { th: 'รับบิลออนไลน์ MEA e-Bill และสะสม MEA Point', en: 'MEA e-Bill and MEA Point rewards' },
			text: {
				th: 'เปลี่ยนมารับใบแจ้งค่าไฟทางอีเมลแทนกระดาษ และสะสมแต้ม MEA Point เพื่อแลกรับสิทธิประโยชน์',
				en: 'Switch from paper to an emailed bill, and collect MEA Points that can be redeemed for rewards.'
			}
		},
		{
			icon: 'plug',
			title: { th: 'ขอใช้ไฟใหม่และขอเพิ่มขนาดมิเตอร์', en: 'Apply for new or upgraded supply' },
			text: {
				th: 'ยื่นคำขอใช้ไฟฟ้าใหม่หรือขอเพิ่มขนาดเครื่องวัด พร้อมติดตามสถานะคำขอได้ด้วยตัวเอง',
				en: 'Submit a request for a new connection or a larger meter, and track the status of that request yourself.'
			}
		},
		{
			icon: 'bell',
			title: { th: 'แจ้งเตือนล่วงหน้าเมื่อจะดับไฟ', en: 'Advance outage notices' },
			text: {
				th: 'รับแจ้งเตือนก่อนมีการดับไฟเพื่อบำรุงรักษาระบบ ทำให้วางแผนล่วงหน้าได้',
				en: 'Get notified before planned maintenance outages so you can prepare.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'แจ้งไฟฟ้าขัดข้องเพียง 2 คลิก', en: 'Report a fault in two clicks' },
			text: {
				th: 'แจ้งไฟดับหรือไฟฟ้าขัดข้องได้ทันทีจากมือถือ โดยไม่ต้องรอสายศูนย์บริการ',
				en: 'Report an outage straight from your phone without waiting on the call-centre line.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'รับข่าวสารจาก MEA โดยตรง ปลอดภัยไร้มิจฉาชีพ', en: 'News direct from MEA — scam-free' },
			text: {
				th: 'ข่าวและการแจ้งเตือนมาจากช่องทางทางการโดยตรง ลดความเสี่ยงจากมิจฉาชีพที่แอบอ้างเป็นการไฟฟ้า',
				en: 'Announcements arrive through the official channel, reducing the risk from scammers impersonating the utility.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ตรวจสอบว่าคุณอยู่ในพื้นที่ของการไฟฟ้านครหลวง', en: 'Confirm you are in MEA’s service area' },
			text: {
				th: 'MEA ให้บริการเฉพาะกรุงเทพมหานคร นนทบุรี และสมุทรปราการ หากคุณอยู่จังหวัดอื่น ผู้ให้บริการของคุณคือการไฟฟ้าส่วนภูมิภาค (PEA) ซึ่งใช้คนละระบบ',
				en: 'MEA serves only Bangkok, Nonthaburi and Samut Prakan. In any other province your provider is the Provincial Electricity Authority (PEA), which runs a separate system.'
			}
		},
		{
			title: { th: 'เตรียมรหัสเครื่องวัดหรือบัญชีแสดงสัญญา', en: 'Have your meter or contract account number ready' },
			text: {
				th: 'ตัวเลขนี้อยู่บนใบแจ้งค่าไฟฟ้าฉบับล่าสุด หรือบนตัวมิเตอร์หน้าบ้าน เป็นข้อมูลที่ใช้ผูกบัญชีเข้ากับบ้านของคุณ',
				en: 'You will find this number on your most recent bill or on the meter itself. It links your account to your property.'
			}
		},
		{
			title: { th: 'สมัครสมาชิกหรือเข้าสู่ระบบ MEA e-Service', en: 'Register or sign in to MEA e-Service' },
			text: {
				th: 'สมัครด้วยอีเมลและเบอร์โทรศัพท์ที่ใช้งานจริง เพราะระบบจะส่งรหัส OTP เพื่อยืนยันตัวตน และใช้ช่องทางเดียวกันนี้ส่งใบแจ้งค่าไฟและการแจ้งเตือน',
				en: 'Sign up with an email address and phone number you actually use — the system sends an OTP to verify you, and later delivers bills and alerts through the same channels.'
			}
		},
		{
			title: { th: 'ผูกมิเตอร์เข้ากับบัญชีของคุณ', en: 'Link your meter to the account' },
			text: {
				th: 'หนึ่งบัญชีสามารถผูกได้หลายมิเตอร์ เหมาะกับผู้ที่ดูแลทั้งบ้านพักและร้านค้า หรือปล่อยเช่าหลายห้อง',
				en: 'One account can hold several meters — useful if you manage a home and a shop, or rent out multiple units.'
			}
		},
		{
			title: { th: 'เลือกทำรายการที่ต้องการ', en: 'Choose what you need to do' },
			text: {
				th: 'จากหน้าหลักคุณสามารถดูยอดค้างชำระ จ่ายบิล ดาวน์โหลดใบเสร็จ ดูกราฟการใช้ไฟย้อนหลัง หรือยื่นคำขอใช้ไฟใหม่ได้จากเมนูเดียวกัน',
				en: 'From the dashboard you can view outstanding amounts, pay, download receipts, read usage charts, or file a new-supply request — all from the same menu.'
			}
		}
	],
	faq: [
		{
			q: { th: 'MEA e-Service ใช้ได้กับจังหวัดไหนบ้าง', en: 'Which provinces does MEA e-Service cover?' },
			a: {
				th: 'ใช้ได้เฉพาะผู้ใช้ไฟฟ้าในเขตกรุงเทพมหานคร นนทบุรี และสมุทรปราการ เท่านั้น เพราะเป็นพื้นที่รับผิดชอบของการไฟฟ้านครหลวง ส่วนอีก 74 จังหวัดอยู่ในความดูแลของการไฟฟ้าส่วนภูมิภาค (PEA) ซึ่งมีระบบออนไลน์แยกต่างหาก',
				en: 'Only customers in Bangkok, Nonthaburi and Samut Prakan — the Metropolitan Electricity Authority’s service area. The other 74 provinces are served by the Provincial Electricity Authority (PEA), which has its own separate online system.'
			}
		},
		{
			q: { th: 'ใช้บริการมีค่าใช้จ่ายเพิ่มหรือไม่', en: 'Is there a fee for using the service?' },
			a: {
				th: 'การเข้าใช้ระบบ ดูยอดค่าไฟ และดูประวัติการใช้ไฟฟ้าไม่มีค่าใช้จ่าย ส่วนการชำระเงินอาจมีค่าธรรมเนียมตามช่องทางที่คุณเลือก ซึ่งระบบจะแสดงให้เห็นก่อนยืนยันรายการเสมอ',
				en: 'Accessing the system, viewing your balance and reading your usage history are free. Payment channels may carry their own fee, which the system shows before you confirm.'
			}
		},
		{
			q: { th: 'ทำไมค่าไฟเดือนนี้สูงกว่าปกติมาก', en: 'Why is this month’s bill much higher than usual?' },
			a: {
				th: 'สาเหตุที่พบบ่อยคือจำนวนวันในรอบบิลไม่เท่ากัน อากาศร้อนทำให้เครื่องปรับอากาศทำงานหนักขึ้น หรือมีเครื่องใช้ไฟฟ้าที่เสื่อมสภาพจนกินไฟมากขึ้น ให้เปิดดูกราฟการใช้ไฟย้อนหลังในระบบเพื่อเทียบหน่วยที่ใช้จริงเป็นรายเดือน หากตัวเลขผิดปกติอย่างชัดเจน ให้แจ้งการไฟฟ้านครหลวงเพื่อขอตรวจสอบมิเตอร์',
				en: 'The usual causes are a billing cycle with more days than the last one, hot weather driving air-conditioning use, or an ageing appliance drawing more power. Open the usage chart in the system and compare actual units month by month; if the figures look clearly wrong, ask MEA to inspect the meter.'
			}
		},
		{
			q: { th: 'ลืมรหัสผ่าน หรือเข้าระบบไม่ได้ ต้องทำอย่างไร', en: 'What if I forget my password or cannot sign in?' },
			a: {
				th: 'ใช้ลิงก์ลืมรหัสผ่านบนหน้าเข้าสู่ระบบเพื่อรับลิงก์ตั้งรหัสใหม่ทางอีเมลที่ลงทะเบียนไว้ หากอีเมลหรือเบอร์โทรศัพท์เปลี่ยนไปแล้ว ต้องติดต่อศูนย์บริการข้อมูลผู้ใช้ไฟฟ้า MEA Call Center 1130 เพื่อยืนยันตัวตน',
				en: 'Use the forgotten-password link on the sign-in page to receive a reset link at your registered email. If your email or phone number has changed, contact the MEA Call Center on 1130 to verify your identity.'
			}
		},
		{
			q: { th: 'มีช่องทางอื่นนอกจากเว็บไซต์ไหม', en: 'Are there channels other than the website?' },
			a: {
				th: 'มีสามช่องทางหลัก ได้แก่ แอปพลิเคชัน MEA Smart Life, LINE Official Account @meathailand และเว็บไซต์ MEA e-Service ทั้งสามช่องทางใช้บัญชีเดียวกันและเห็นข้อมูลชุดเดียวกัน',
				en: 'Three main channels: the MEA Smart Life app, the LINE Official Account @meathailand, and the MEA e-Service website. All three share one account and show the same data.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าข้อความที่อ้างว่ามาจากการไฟฟ้าเป็นของจริง', en: 'How do I know a message claiming to be from MEA is genuine?' },
			a: {
				th: 'การไฟฟ้านครหลวงจะไม่ส่งลิงก์ให้กรอกข้อมูลบัตรเครดิตหรือรหัส OTP ผ่าน SMS หรือแชท และไม่มีนโยบายโทรขู่ให้ชำระเงินทันทีเพื่อไม่ให้ถูกตัดไฟ หากได้รับข้อความลักษณะนี้ ให้เข้าระบบด้วยตัวเองผ่านที่อยู่เว็บไซต์ทางการ หรือโทร 1130 เพื่อตรวจสอบ',
				en: 'MEA does not send links asking for card details or OTP codes by SMS or chat, and does not call demanding immediate payment to avoid disconnection. If you receive something like that, open the official site yourself or call 1130 to check.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'MEA e-Service คืออะไร', en: 'What is MEA e-Service?' }
		},
		{
			type: 'p',
			text: {
				th: 'MEA e-Service คือระบบบริการออนไลน์ของการไฟฟ้านครหลวง (กฟน.) ที่รวมงานบริการผู้ใช้ไฟฟ้าซึ่งเดิมต้องทำที่สำนักงานเขตหรือโทรเข้าศูนย์บริการ ให้มาอยู่บนหน้าจอเดียว ตั้งแต่การตรวจสอบยอดค่าไฟฟ้าประจำเดือน การชำระเงิน การดูประวัติการใช้ไฟย้อนหลัง ไปจนถึงการยื่นคำขอใช้ไฟฟ้าใหม่และการแจ้งไฟฟ้าขัดข้อง',
				en: 'MEA e-Service is the Metropolitan Electricity Authority’s online platform. It gathers the customer tasks that once required a visit to a district office or a phone call to the service centre and puts them on a single screen — from checking the monthly amount due and paying it, to reviewing consumption history, applying for a new supply and reporting a fault.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'การไฟฟ้านครหลวงสรุปจุดเด่นของระบบไว้เป็นเจ็ดข้อ ภายใต้แนวคิด “MEA e-Service แค่คลิกก็ครบ จบทุกเรื่องไฟฟ้า” ซึ่งครอบคลุมทั้งเรื่องบิล เรื่องการใช้งาน และเรื่องความปลอดภัยจากมิจฉาชีพที่แอบอ้างชื่อการไฟฟ้า',
				en: 'MEA summarises the platform in seven points under the line “MEA e-Service — one click covers everything about your electricity”, spanning billing, day-to-day usage and protection from scammers impersonating the utility.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ใครใช้บริการนี้ได้บ้าง', en: 'Who can use it' }
		},
		{
			type: 'p',
			text: {
				th: 'ผู้ใช้ไฟฟ้าทุกประเภทในพื้นที่ให้บริการของการไฟฟ้านครหลวงสามารถใช้ MEA e-Service ได้ ทั้งบ้านอยู่อาศัย กิจการขนาดเล็ก อาคารชุด และผู้ประกอบการ โดยพื้นที่ให้บริการครอบคลุมสามจังหวัด ได้แก่ กรุงเทพมหานคร นนทบุรี และสมุทรปราการ',
				en: 'Every category of customer inside MEA’s service area can use it — households, small businesses, condominium buildings and commercial operators. That area covers three provinces: Bangkok, Nonthaburi and Samut Prakan.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'อยู่จังหวัดอื่นใช่ไหม', en: 'Live somewhere else?' },
			text: {
				th: 'หากบ้านของคุณอยู่นอกสามจังหวัดนี้ ผู้ให้บริการไฟฟ้าของคุณคือการไฟฟ้าส่วนภูมิภาค (PEA) ซึ่งมีระบบออนไลน์ของตัวเองแยกต่างหาก การสมัคร MEA e-Service จะไม่พบข้อมูลมิเตอร์ของคุณ',
				en: 'If your home is outside those three provinces, your provider is the Provincial Electricity Authority (PEA), which runs its own separate online system. Registering for MEA e-Service will not find your meter.'
			}
		},
		{
			type: 'h2',
			text: { th: 'สามช่องทางที่เข้าถึงบริการเดียวกัน', en: 'Three routes into the same service' }
		},
		{
			type: 'p',
			text: {
				th: 'การไฟฟ้านครหลวงเปิดให้เข้าถึงบริการชุดเดียวกันผ่านสามช่องทาง เลือกใช้ช่องทางไหนก็ได้ตามความถนัด และข้อมูลจะตรงกันทั้งหมดเพราะใช้บัญชีเดียวกัน',
				en: 'MEA exposes the same set of services through three channels. Use whichever suits you — they share one account, so the data always matches.'
			}
		},
		{
			type: 'table',
			caption: { th: 'เปรียบเทียบช่องทางการใช้งาน', en: 'Comparing the channels' },
			head: [
				{ th: 'ช่องทาง', en: 'Channel' },
				{ th: 'เหมาะกับ', en: 'Best for' },
				{ th: 'ข้อสังเกต', en: 'Notes' }
			],
			rows: [
				[
					{ th: 'เว็บไซต์ MEA e-Service', en: 'MEA e-Service website' },
					{ th: 'ดูข้อมูลละเอียด พิมพ์ใบเสร็จ จัดการหลายมิเตอร์', en: 'Detailed views, printing receipts, managing several meters' },
					{ th: 'ทำงานได้ทั้งบนคอมพิวเตอร์และมือถือ', en: 'Works on desktop and mobile' }
				],
				[
					{ th: 'แอปพลิเคชัน MEA Smart Life', en: 'MEA Smart Life app' },
					{ th: 'ใช้งานประจำวัน รับการแจ้งเตือนแบบพุช', en: 'Everyday use and push notifications' },
					{ th: 'ดาวน์โหลดได้ทั้ง iOS และ Android', en: 'Available for iOS and Android' }
				],
				[
					{ th: 'LINE Official Account @meathailand', en: 'LINE OA @meathailand' },
					{ th: 'เช็กยอดเร็ว ๆ และรับข่าวสาร', en: 'Quick balance checks and announcements' },
					{ th: 'ตรวจสอบให้แน่ใจว่าเป็นบัญชีที่มีเครื่องหมายรับรอง', en: 'Check for the verified badge before adding' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ระวังมิจฉาชีพแอบอ้างการไฟฟ้า', en: 'Watch out for utility scams' }
		},
		{
			type: 'p',
			text: {
				th: 'การแอบอ้างเป็นเจ้าหน้าที่การไฟฟ้าเป็นรูปแบบการหลอกลวงที่พบบ่อยในประเทศไทย มักมาในรูปของ SMS หรือข้อความแชทที่อ้างว่าค่าไฟค้างชำระและจะตัดไฟภายในวันนี้ พร้อมแนบลิงก์ให้กดชำระเงินทันที ซึ่งลิงก์เหล่านั้นจะพาไปยังหน้าเว็บปลอมที่เลียนแบบระบบจริง',
				en: 'Impersonating utility staff is a common scam in Thailand. It usually arrives as an SMS or chat message claiming an overdue bill and imminent disconnection, with a link to pay immediately — leading to a fake page that mimics the real system.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ตรวจสอบชื่อโดเมนทุกครั้งก่อนกรอกข้อมูล ระบบจริงอยู่ภายใต้โดเมน mea.or.th เท่านั้น',
					en: 'Check the domain before entering anything — the genuine system lives only under mea.or.th.'
				},
				{
					th: 'อย่ากดลิงก์จาก SMS ให้พิมพ์ที่อยู่เว็บไซต์เองหรือเข้าผ่านแอปที่ติดตั้งไว้แล้ว',
					en: 'Do not tap links in SMS; type the address yourself or use the app you already installed.'
				},
				{
					th: 'การไฟฟ้าไม่ขอรหัส OTP รหัสผ่าน หรือเลขหลังบัตรเครดิตผ่านโทรศัพท์และแชท',
					en: 'The utility never asks for OTP codes, passwords or card security numbers by phone or chat.'
				},
				{
					th: 'หากไม่แน่ใจ ให้โทรศูนย์บริการข้อมูลผู้ใช้ไฟฟ้า MEA Call Center หมายเลข 1130 เพื่อยืนยัน',
					en: 'If in doubt, call the MEA Call Center on 1130 to confirm.'
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
				th: 'ชื่อระบบราชการมักไม่ตรงกับคำที่ประชาชนใช้ค้นหาจริง คนส่วนใหญ่พิมพ์ว่า “เช็คค่าไฟ” หรือ “จ่ายค่าไฟออนไลน์” มากกว่าจะพิมพ์ชื่อระบบว่า MEA e-Service หน้านี้จึงอธิบายบริการด้วยภาษาที่คนใช้จริง แล้วพาไปยังระบบทางการโดยตรง โดยที่เราไม่รับข้อมูลส่วนบุคคลหรือการชำระเงินใด ๆ ทั้งสิ้น',
				en: 'Government systems are rarely named the way people search. Most people type “check electricity bill” rather than “MEA e-Service”. This page describes the service in the words people actually use and then hands you straight to the official system — we never take personal data or payments ourselves.'
			}
		}
	],
	crawl: {
		host: 'meaeservice.mea.or.th',
		verdict: 'none',
		kind: 'no-robots',
		status: 200,
		snippet: 'GET /  ->  200 (site reachable)\nGET /robots.txt  ->  no response',
		checkedAt: '2026-08-28',
		note: {
			th: 'เว็บไซต์นี้ไม่มีไฟล์ robots.txt ซึ่งตามมาตรฐานถือว่าอนุญาตให้เครื่องมือค้นหาเก็บข้อมูลได้ทั้งหมด แต่เนื้อหาที่อยู่หลังการเข้าสู่ระบบยังคงไม่ปรากฏในผลการค้นหาอยู่ดี',
			en: 'The site serves no robots.txt, which by convention means crawling is permitted throughout. Content behind a sign-in still never appears in search results.'
		}
	},
	priority: 100,
	updated: '2026-08-27',
	related: ['pea-eservice', 'mwa-eservice']
};
