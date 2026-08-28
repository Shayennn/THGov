import type { Guide } from '../types';

export const guide: Guide = {
	slug: 'check-electricity-bill-online',
	title: {
		th: 'วิธีเช็กค่าไฟฟ้าออนไลน์ ทั้งในกรุงเทพฯ และต่างจังหวัด',
		en: 'How to Check Your Thai Electricity Bill Online'
	},
	deck: {
		th: 'รู้ก่อนว่าบ้านคุณอยู่ในเขตของการไฟฟ้าไหน แล้วเช็กยอด ดูหน่วยที่ใช้จริง และจ่ายบิลได้จากมือถือ โดยไม่ต้องรอใบแจ้งกระดาษ',
		en: 'Work out which utility serves your address, then check the amount, read your real usage and pay from your phone — no paper bill required.'
	},
	summary: {
		th: 'คู่มือเช็กค่าไฟออนไลน์ เริ่มจากดูว่าบ้านคุณอยู่เขต MEA หรือ PEA หาเลขมิเตอร์ ผูกบัญชี อ่านประวัติการใช้ไฟ จ่ายบิล และรับมือ SMS ปลอมที่อ้างว่าจะตัดไฟ',
		en: 'A practical guide to checking a Thai electricity bill online: whether MEA or PEA serves you, finding your meter number, reading usage history and spotting scams.'
	},
	keywords: {
		th: [
			'เช็คค่าไฟออนไลน์',
			'เช็คค่าไฟบ้าน',
			'ค่าไฟเดือนนี้',
			'จ่ายค่าไฟออนไลน์',
			'ดูบิลค่าไฟย้อนหลัง',
			'ค่าไฟแพงผิดปกติ',
			'เลขมิเตอร์ไฟฟ้าอยู่ตรงไหน',
			'MEA หรือ PEA ต่างกันอย่างไร',
			'การไฟฟ้านครหลวง เช็คค่าไฟ',
			'การไฟฟ้าส่วนภูมิภาค เช็คค่าไฟ',
			'ขอตรวจสอบมิเตอร์ไฟฟ้า',
			'SMS ปลอมอ้างตัดไฟ',
			'รับใบแจ้งค่าไฟทางอีเมล'
		],
		en: [
			'check electricity bill Thailand',
			'pay electricity bill online Thailand',
			'MEA or PEA',
			'Thai electricity meter number',
			'electricity bill too high Thailand',
			'Thailand utility scam SMS',
			'electricity usage history Thailand'
		]
	},
	services: ['mea-eservice', 'pea-eservice'],
	steps: [
		{
			title: {
				th: 'เช็กก่อนว่าใครดูแลไฟฟ้าบ้านคุณ',
				en: 'First, find out which utility serves you'
			},
			text: {
				th: 'กรุงเทพมหานคร นนทบุรี และสมุทรปราการ อยู่ในความดูแลของการไฟฟ้านครหลวง (MEA) อีก 74 จังหวัดอยู่กับการไฟฟ้าส่วนภูมิภาค (PEA) สองแห่งนี้คนละองค์กร คนละระบบ คนละแอป จึงต้องเริ่มให้ถูกฝั่งตั้งแต่ก้าวแรก',
				en: 'Bangkok, Nonthaburi and Samut Prakan are served by the Metropolitan Electricity Authority (MEA); the other 74 provinces by the Provincial Electricity Authority (PEA). Different organisations, different systems, different apps — so starting on the right side matters more than anything else here.'
			}
		},
		{
			title: {
				th: 'หาเลขมิเตอร์จากใบแจ้งค่าไฟหรือตัวมิเตอร์',
				en: 'Find the number that identifies your meter'
			},
			text: {
				th: 'ทั้งสองระบบค้นจากหมายเลขประจำมิเตอร์หรือหมายเลขผู้ใช้ไฟฟ้า ไม่ใช่ชื่อหรือที่อยู่ ตัวเลขนี้อยู่บนใบแจ้งค่าไฟฉบับล่าสุด และมักติดอยู่บนตัวมิเตอร์หน้าบ้านด้วย ถ้าใบแจ้งหายแล้ว ถ่ายรูปมิเตอร์เก็บไว้ในมือถือ',
				en: 'Both systems look you up by the meter or customer account number, not by name or address. It is printed on your latest bill and usually on the meter itself. If the bill is long gone, photograph the meter once and keep the picture on your phone.'
			}
		},
		{
			title: {
				th: 'สมัครสมาชิกด้วยอีเมลและเบอร์ที่ใช้จริง',
				en: 'Register with an email and phone you actually use'
			},
			text: {
				th: 'สมัครบัญชีได้เองด้วยอีเมลและเบอร์มือถือสำหรับรับรหัส OTP ขอให้ใช้อีเมลที่เปิดอ่านจริง เพราะใบแจ้งค่าไฟ ใบเสร็จ และการแจ้งเตือนก่อนดับไฟจะวิ่งมาทางนี้ทั้งหมด',
				en: 'You can open an account yourself with an email address and a mobile number for the OTP. Use an inbox you genuinely read: bills, receipts and planned-outage notices will all arrive there from now on.'
			}
		},
		{
			title: {
				th: 'ผูกมิเตอร์เข้าบัญชี ใส่ได้มากกว่าหนึ่ง',
				en: 'Link your meters — more than one is fine'
			},
			text: {
				th: 'เพิ่มมิเตอร์ด้วยเลขที่เตรียมไว้ หนึ่งบัญชีผูกได้หลายมิเตอร์ จึงดูแลบ้านตัวเอง บ้านพ่อแม่ และห้องเช่าที่ปล่อยอยู่ได้ในที่เดียว หากตั้งชื่อเรียกแต่ละมิเตอร์ได้ ควรทำตั้งแต่ตอนเพิ่ม',
				en: 'Add each meter using the number you noted. One account can hold several, so your own home, a parent’s house and a rented-out room all sit in one place. If you can label them, do it as you go.'
			}
		},
		{
			title: {
				th: 'อ่านยอดควบคู่กับหน่วยที่ใช้จริง',
				en: 'Read the amount together with the units used'
			},
			text: {
				th: 'อย่าดูแค่ตัวเลขเงิน ให้ดูจำนวนหน่วย (kWh) และจำนวนวันในรอบบิลไปพร้อมกัน เพราะสองอย่างนี้บอกได้ว่าใช้ไฟมากขึ้นจริง หรือแค่รอบบิลยาวกว่าเดิม',
				en: 'Do not stop at the amount owed. Read the units consumed (kWh) alongside the number of days in the cycle — together they tell you whether you really used more power or simply had a longer period. Both systems keep a month-by-month history for exactly this.'
			}
		},
		{
			title: {
				th: 'เลือกช่องทางชำระเงินที่คุ้นเคยที่สุด',
				en: 'Pay through the channel you already trust'
			},
			text: {
				th: 'ปกติจ่ายได้หลายทาง ทั้งแอปธนาคาร เคาน์เตอร์เซอร์วิส และช่องทางของการไฟฟ้าเอง แต่ละทางมีค่าธรรมเนียมต่างกัน ให้ดูยอดรวมที่หน้าจอยืนยันก่อนกดจ่าย และเก็บสลิปไว้จนกว่าสถานะจะขึ้นว่าชำระแล้ว',
				en: 'You will normally have several options: a bank app, convenience-store counters, a bank branch, or the utility’s own channel. Fees and conditions differ, so read the total on the confirmation screen before approving, and keep the slip until the system marks the bill settled.'
			}
		},
		{
			title: {
				th: 'เปลี่ยนมารับบิลทางอีเมลและเปิดแจ้งเตือน',
				en: 'Switch to an emailed bill and turn on alerts'
			},
			text: {
				th: 'เมื่อบัญชีเข้าที่แล้ว ควรเปลี่ยนมารับใบแจ้งค่าไฟทางอีเมลแทนกระดาษ ซึ่งฝั่ง MEA เรียกว่า e-Bill บิลไม่หายไปกับกล่องจดหมาย และย้อนไปค้นเดือนก่อน ๆ ได้ง่ายกว่ามาก',
				en: 'With the account settled, switch from paper to an emailed bill — MEA calls this e-Bill. Nothing disappears from a letterbox, and searching back through past months becomes trivial.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: {
				th: 'เรื่องแรกที่ต้องรู้ ก่อนจะกดอะไรทั้งนั้น',
				en: 'The one thing to settle before you click anything'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ประเทศไทยมีการไฟฟ้าสองแห่ง และที่ตั้งของมิเตอร์เป็นตัวกำหนดว่าบ้านคุณอยู่กับแห่งไหน ไม่ใช่คุณเลือกเอง ความสับสนตรงนี้คือสาเหตุอันดับหนึ่งที่ทำให้เช็กค่าไฟไม่สำเร็จ หลายคนกรอกเลขมิเตอร์ถูกทุกหลัก แต่ระบบขึ้นว่าไม่พบข้อมูล เพราะถามผิดหน่วยงาน',
				en: 'Thailand does not have a single electricity utility. Every household sits with one of two distributors, and you do not choose — the location of your meter does. That confusion is the number-one reason people fail at checking a bill online: they type a perfectly correct meter number and are told no record exists, because they are asking the wrong organisation.'
			}
		},
		{
			type: 'table',
			caption: {
				th: 'สองการไฟฟ้า แยกกันคนละระบบ',
				en: 'Two utilities, two entirely separate systems'
			},
			head: [
				{ th: 'หน่วยงาน', en: 'Utility' },
				{ th: 'พื้นที่ให้บริการ', en: 'Service area' },
				{ th: 'เว็บไซต์ทางการ', en: 'Official domain' }
			],
			rows: [
				[
					{ th: 'การไฟฟ้านครหลวง (กฟน. / MEA)', en: 'Metropolitan Electricity Authority (MEA)' },
					{ th: 'กรุงเทพมหานคร นนทบุรี สมุทรปราการ', en: 'Bangkok, Nonthaburi, Samut Prakan' },
					{ th: 'mea.or.th', en: 'mea.or.th' }
				],
				[
					{ th: 'การไฟฟ้าส่วนภูมิภาค (กฟภ. / PEA)', en: 'Provincial Electricity Authority (PEA)' },
					{ th: 'อีก 74 จังหวัดทั่วประเทศ', en: 'The other 74 provinces' },
					{ th: 'pea.co.th', en: 'pea.co.th' }
				]
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: {
				th: 'อยู่คอนโด หอพัก หรือห้องเช่า อ่านตรงนี้ก่อน',
				en: 'Renting a room, a flat or a condo? Read this first'
			},
			text: {
				th: 'ถ้าคุณจ่ายค่าไฟให้เจ้าของหอพักหรือนิติบุคคลอาคารชุด มิเตอร์ห้องคุณมักเป็นมิเตอร์ย่อยที่อาคารติดตั้งเอง ไม่ได้ขึ้นทะเบียนกับการไฟฟ้า จึงค้นในระบบไม่พบ และอัตราที่ถูกเรียกเก็บต้องคุยกับผู้ให้เช่า ไม่ใช่กับการไฟฟ้า',
				en: 'If you pay your electricity to a landlord or a condominium juristic person, your meter is usually a sub-meter the building installed rather than one registered with the utility. It will not turn up in either online system, and the rate you are charged is a conversation with the landlord, not the utility.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เตรียมของให้พร้อมก่อนเริ่ม', en: 'What to have on hand' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ใบแจ้งค่าไฟฉบับล่าสุด หรือรูปถ่ายมิเตอร์ที่เห็นเลขชัด',
					en: 'Your latest bill, or a photo of the meter with the number legible'
				},
				{
					th: 'อีเมลที่เปิดอ่านประจำ สำหรับรับบิลและใบเสร็จ',
					en: 'An email address you check regularly, for bills and receipts'
				},
				{
					th: 'เบอร์มือถือที่รับ SMS ได้ สำหรับยืนยัน OTP',
					en: 'A mobile number that can receive SMS, for the OTP'
				},
				{
					th: 'ถ้าดูแลหลายบ้าน ให้รวบรวมเลขมิเตอร์ทุกหลังไว้ก่อน',
					en: 'If you manage several properties, gather every meter number first'
				}
			]
		},
		{
			type: 'h2',
			text: {
				th: 'ค่าไฟพุ่งผิดปกติ อ่านให้ออกก่อนโทษมิเตอร์',
				en: 'When the bill spikes: read it before you blame the meter'
			}
		},
		{
			type: 'p',
			text: {
				th: 'เวลาค่าไฟกระโดด คนส่วนใหญ่ดูแต่ตัวเลขเงิน ซึ่งบอกอะไรไม่ได้เลย ตัวเลขที่ต้องดูคือจำนวนหน่วยหารด้วยจำนวนวันในรอบบิล ถ้าหน่วยต่อวันเท่าเดิม แปลว่ารอบบิลยาวขึ้นเฉย ๆ แต่ถ้าสูงขึ้นจริง ค่อยไปหาว่าเป็นเพราะอากาศร้อน เครื่องใช้ไฟฟ้าเสื่อมสภาพ หรือมิเตอร์ผิดปกติ',
				en: 'When a bill jumps, most people look only at the money, which tells you nothing. The number that matters is units divided by days in the cycle. If units per day held steady, the cycle was simply longer. If they genuinely rose, work out whether the cause is the heat, an appliance in decline, or the meter.'
			}
		},
		{
			type: 'table',
			caption: {
				th: 'อ่านประวัติแล้วเทียบกับอาการ',
				en: 'Matching what the history shows to the likely cause'
			},
			head: [
				{ th: 'สิ่งที่เห็นในประวัติ', en: 'What the history shows' },
				{ th: 'สาเหตุที่น่าจะเป็น', en: 'Most likely cause' },
				{ th: 'ทำอย่างไรต่อ', en: 'What to do next' }
			],
			rows: [
				[
					{ th: 'หน่วยเท่าเดิม แต่ยอดเงินสูงขึ้น', en: 'Units unchanged, amount higher' },
					{ th: 'รอบบิลยาวกว่าเดิม', en: 'A longer billing cycle' },
					{ th: 'คิดเป็นหน่วยต่อวันแล้วเทียบกัน', en: 'Compare the two day counts and work in units per day' }
				],
				[
					{ th: 'หน่วยเพิ่มเฉพาะเดือนที่ร้อน แล้วลดลงเอง', en: 'Units rise in the hot months, then fall back' },
					{ th: 'ภาระของเครื่องปรับอากาศตามฤดูกาล', en: 'Seasonal air-conditioning load' },
					{ th: 'เทียบกับเดือนเดียวกันของปีก่อน ถ้าซ้ำเดิมถือว่าปกติ', en: 'Compare with the same month last year; a repeating pattern is normal' }
				],
				[
					{ th: 'หน่วยไต่ขึ้นทุกเดือนโดยไม่ลดลง', en: 'Units climb every month and never fall back' },
					{ th: 'เครื่องใช้ไฟฟ้าเสื่อมสภาพ หรืออุปกรณ์ใหม่ที่เปิดทิ้งไว้', en: 'An ageing appliance, or a new one left running' },
					{ th: 'ทยอยปิดอุปกรณ์ทีละกลุ่ม ดูว่ามิเตอร์เดินช้าลงตอนไหน', en: 'Switch things off group by group and watch when the meter slows' }
				],
				[
					{ th: 'หน่วยกระโดดรอบเดียว ทั้งที่ไม่มีอะไรเปลี่ยน', en: 'One cycle far above the rest, nothing changed' },
					{ th: 'อ่านค่าผิดพลาด ไฟรั่ว หรือมิเตอร์ผิดปกติ', en: 'A misread, a current leak, or a faulty meter' },
					{ th: 'แจ้งการไฟฟ้าเพื่อขอตรวจสอบมิเตอร์', en: 'Ask your utility to inspect the meter' }
				]
			]
		},
		{
			type: 'p',
			text: {
				th: 'ถ้าไล่สามข้อแรกแล้วยังอธิบายไม่ได้ คุณมีสิทธิขอให้การไฟฟ้าเข้ามาตรวจสอบมิเตอร์ ยื่นได้ทั้งออนไลน์ ทางแอป หรือที่สำนักงานในพื้นที่ ควรเตรียมเลขมิเตอร์ ใบแจ้งค่าไฟย้อนหลังหลายเดือน และรูปถ่ายหน้าปัดมิเตอร์ในวันที่ยื่น ส่วนค่าใช้จ่ายและการคิดยอดใหม่หากมิเตอร์คลาดเคลื่อน เป็นไปตามระเบียบของแต่ละการไฟฟ้า ให้สอบถามจากช่องทางทางการก่อน',
				en: 'If the first three explanations are exhausted and the figure still makes no sense, you are entitled to ask for an inspection — online, in the app, or at a local office. Bring the meter number, several months of bills and a photo of the meter face taken that day. Whether an inspection carries a charge, and how a bill is recalculated if the meter proves inaccurate, follow each utility’s own regulations and can change, so check the current terms through an official channel first.'
			}
		},
		{
			type: 'h2',
			text: {
				th: 'มิจฉาชีพชอบอ้างชื่อการไฟฟ้าเป็นพิเศษ',
				en: 'Scammers are especially fond of posing as the utility'
			}
		},
		{
			type: 'p',
			text: {
				th: 'รูปแบบที่พบบ่อยที่สุดคือ SMS หรือข้อความแชทที่อ้างว่าค่าไฟค้างชำระและจะถูกตัดไฟภายในไม่กี่ชั่วโมง พร้อมลิงก์ให้กดจ่ายทันที ความเร่งรีบคือหัวใจของกลโกงนี้ เพราะไม่มีใครอยากเสี่ยงให้บ้านมืดทั้งคืน ลิงก์นั้นมักพาไปหน้าเว็บที่หน้าตาเหมือนของจริง แต่ใช้โดเมนที่สะกดเพี้ยนไปตัวเดียว',
				en: 'The commonest version is an SMS or chat message claiming your bill is overdue and the supply will be cut within hours, with a link to pay right now. Urgency is the whole trick — nobody wants to gamble on a dark house. The link leads to a page built to look like the real thing, on a lookalike domain with a single letter changed.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'พิมพ์ที่อยู่เว็บไซต์เอง หรือเข้าผ่านแอปที่ติดตั้งไว้',
					en: 'Type the address yourself, or use the app you already installed, instead of tapping a link'
				},
				{
					th: 'ตรวจชื่อโดเมนให้ตรงทุกตัวอักษร ระบบจริงอยู่ใต้ mea.or.th และ pea.co.th',
					en: 'Check the domain character by character — the real systems sit under mea.or.th and pea.co.th'
				},
				{
					th: 'เจอข้อความเร่งให้จ่ายภายในไม่กี่ชั่วโมง ให้เข้าไปดูยอดค้างชำระเอง ถ้าไม่มียอดค้างก็คือของปลอม',
					en: 'Treat any few-hours deadline as suspect, then check the balance yourself — no arrears means the message was fake'
				},
				{
					th: 'เขต MEA โทรตรวจสอบที่ MEA Call Center 1130 ส่วนเขต PEA ดูเบอร์ศูนย์บริการจากเว็บไซต์ทางการ',
					en: 'MEA customers can verify on the MEA Call Center number 1130; PEA customers should take the service-centre number from the official PEA site'
				}
			]
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'กฎข้อเดียวที่ควรจำให้ขึ้นใจ', en: 'The one rule worth memorising' },
			text: {
				th: 'การไฟฟ้าไม่ขอรหัส OTP รหัสผ่าน หรือเลขหลังบัตรเครดิตผ่าน SMS แชท หรือโทรศัพท์ ไม่ว่าจะอ้างเหตุผลใด ใครขอสิ่งเหล่านี้คือมิจฉาชีพ ไม่มีข้อยกเว้น',
				en: 'No electricity utility asks for an OTP, a password or the number on the back of your card by SMS, chat or phone call, whatever reason is given. Anyone who asks is a scammer. There is no exception.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดหรือเกี่ยวข้องกับการไฟฟ้านครหลวง การไฟฟ้าส่วนภูมิภาค หรือหน่วยงานใด เราไม่รับชำระเงินและไม่เก็บข้อมูลมิเตอร์ ขั้นตอนเปลี่ยนแปลงได้เสมอ จึงขอให้ยึดข้อมูลบนเว็บไซต์ทางการเป็นหลัก',
				en: 'ThaiGov.co is an independent directory, not affiliated with the Metropolitan Electricity Authority, the Provincial Electricity Authority or any other agency. We take no payments and store no meter details. Procedures and terms change, so treat what the utility itself publishes as authoritative.'
			}
		}
	],
	faq: [
		{
			q: {
				th: 'จะรู้ได้อย่างไรว่าบ้านเราอยู่เขต MEA หรือ PEA',
				en: 'How do I tell whether MEA or PEA serves my address?'
			},
			a: {
				th: 'ดูจากจังหวัดเป็นหลัก กรุงเทพมหานคร นนทบุรี และสมุทรปราการ อยู่กับการไฟฟ้านครหลวง จังหวัดอื่นทั้งหมดอยู่กับการไฟฟ้าส่วนภูมิภาค วิธีที่ชัดที่สุดคือดูชื่อหน่วยงานบนใบแจ้งค่าไฟของคุณเอง เพราะบิลออกในนามของการไฟฟ้าที่ดูแลมิเตอร์หลังนั้น',
				en: 'Province is the rule of thumb: Bangkok, Nonthaburi and Samut Prakan belong to MEA, every other province to PEA. The more definitive check is the name printed on your own bill, since it is issued by whichever utility actually owns that meter.'
			}
		},
		{
			q: {
				th: 'บัญชีเดียวดูค่าไฟหลายบ้านได้ไหม',
				en: 'Can one account cover several properties?'
			},
			a: {
				th: 'ได้ ถ้ามิเตอร์เหล่านั้นอยู่ในเขตการไฟฟ้าเดียวกัน แต่ถ้าหลังหนึ่งอยู่กรุงเทพฯ อีกหลังอยู่ต่างจังหวัด ต้องมีบัญชีของทั้งสองการไฟฟ้าแยกกัน',
				en: 'Yes, provided those meters sit with the same utility. If one is in Bangkok and another upcountry, you will need an account on each side, because the two systems are entirely separate.'
			}
		},
		{
			q: {
				th: 'ค่าไฟเดือนนี้แพงขึ้นเกือบเท่าตัว ควรทำอะไรก่อน',
				en: 'This month is nearly double last month. What should I do first?'
			},
			a: {
				th: 'เปิดประวัติการใช้ไฟย้อนหลัง แล้วเทียบหน่วยต่อวันของรอบนี้กับรอบก่อน ถ้าใกล้เคียงกันแปลว่ารอบบิลยาวขึ้นเฉย ๆ แต่ถ้าสูงขึ้นจริง ให้ไล่หาเครื่องใช้ไฟฟ้าที่ทำงานหนักหรือเสื่อมสภาพ เมื่อหาคำอธิบายไม่ได้จึงค่อยขอให้ตรวจสอบมิเตอร์',
				en: 'Open the usage history and compare units per day for this cycle against the last. If they are close, the cycle was simply longer. If units per day genuinely rose, hunt for an appliance working hard or wearing out — and only when nothing explains it, ask for the meter to be inspected.'
			}
		},
		{
			q: {
				th: 'ย้ายบ้านข้ามจังหวัด ต้องสมัครใหม่หรือไม่',
				en: 'I moved to another province — do I need to start over?'
			},
			a: {
				th: 'ถ้าย้ายภายในเขตเดิม ใช้บัญชีเดิมต่อได้ เพียงเพิ่มมิเตอร์หลังใหม่และนำหลังเก่าออก แต่ถ้าย้ายข้ามเขต ต้องสมัครกับอีกการไฟฟ้าหนึ่งใหม่ อย่าลืมเคลียร์ยอดค้างของบ้านเดิม และขอคืนเงินประกันการใช้ไฟฟ้าตามขั้นตอนของแต่ละแห่ง',
				en: 'Within the same utility’s area, keep your account: add the new meter, drop the old one. Crossing between the two means registering afresh on the other side. Either way, clear the balance at the old address and follow that utility’s process for reclaiming your electricity deposit.'
			}
		},
		{
			q: {
				th: 'ได้ SMS ว่าจะตัดไฟคืนนี้ ควรทำอย่างไร',
				en: 'I got an SMS saying my power will be cut tonight. What now?'
			},
			a: {
				th: 'อย่ากดลิงก์ในข้อความนั้น ให้เปิดแอปหรือพิมพ์ที่อยู่เว็บไซต์เข้าไปดูยอดค้างชำระเอง ถ้าไม่มียอดค้างก็คือของปลอม ผู้ใช้ไฟเขต MEA โทรถามได้ที่ MEA Call Center 1130 ส่วนเขต PEA ให้ดูเบอร์ศูนย์บริการจากเว็บไซต์ทางการ หากเผลอกรอกข้อมูลบัตรไปแล้ว ให้รีบแจ้งธนาคารระงับรายการ',
				en: 'Do not tap the link. Open the app, or type the address yourself, and look at the balance — no arrears means it was fake. MEA customers can call the MEA Call Center on 1130; PEA customers should take the service-centre number from the official PEA site. If you have already entered card details, tell your bank to stop the transaction.'
			}
		}
	],
	updated: '2026-08-28',
	minutes: 6
};
