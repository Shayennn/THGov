import type { Service } from '../types';

export const service: Service = {
	slug: 'nbtc-telecom',
	name: {
		th: 'กสทช. — ร้องเรียนปัญหามือถือ อินเทอร์เน็ต และตรวจสอบสิทธิผู้บริโภค',
		en: 'Thailand’s NBTC — Telecom Complaints and Consumer Rights'
	},
	shortName: { th: 'กสทช. คุ้มครองผู้บริโภค', en: 'NBTC Consumer Complaints' },
	url: 'https://www.nbtc.go.th/',
	agency: 'nbtc',
	categories: ['identity'],
	summary: {
		th: 'ร้องเรียนปัญหามือถือ เน็ตบ้าน ค่าบริการที่ไม่ได้สมัคร ย้ายค่ายไม่สำเร็จ หรือสัญญาณใช้ไม่ได้ กับ กสทช. หน่วยงานกำกับดูแลโทรคมนาคมของไทย พร้อมลิงก์เว็บไซต์ทางการ',
		en: 'Complain to Thailand’s NBTC about mobile billing, charges you never agreed to, a failed number transfer or poor coverage — the telecom regulator’s official site.'
	},
	deck: {
		th: 'หน่วยงานกำกับดูแลคลื่นความถี่ โทรคมนาคม และการกระจายเสียงของไทย ที่รับเรื่องร้องเรียนเมื่อผู้ให้บริการมือถือหรืออินเทอร์เน็ตไม่ยอมแก้ปัญหาให้คุณ',
		en: 'Thailand’s regulator for spectrum, telecoms and broadcasting — and where a complaint goes when your mobile or internet provider will not put things right.'
	},
	keywords: {
		th: [
			'ร้องเรียน กสทช.',
			'กสทช',
			'โดนหักเงินค่าบริการที่ไม่ได้สมัคร',
			'ยกเลิกบริการเสริมไม่ได้',
			'ร้องเรียนเครือข่ายมือถือ',
			'เน็ตบ้านช้า ร้องเรียนที่ไหน',
			'ย้ายค่ายเบอร์เดิมไม่สำเร็จ',
			'เช็คซิมในชื่อเรา',
			'ซิมผูกบัตรประชาชนกี่เบอร์',
			'ค่าโทรศัพท์แพงผิดปกติ',
			'ร้องเรียนรายการทีวี',
			'สัญญาณมือถือไม่ดี แจ้งใคร',
			'คุ้มครองผู้บริโภคโทรคมนาคม'
		],
		en: [
			'NBTC Thailand',
			'telecom complaint Thailand',
			'mobile bill dispute Thailand',
			'unwanted subscription charges Thailand',
			'number portability problem Thailand',
			'check SIM registered to my ID Thailand',
			'Thai broadcasting regulator'
		]
	},
	features: [
		{
			icon: 'receipt',
			title: { th: 'ข้อพิพาทเรื่องค่าบริการ', en: 'Billing disputes' },
			text: {
				th: 'บิลสูงผิดปกติ ยอดไม่ตรงกับแพ็กเกจที่ตกลงไว้ หรือถูกคิดเงินซ้ำ เป็นเรื่องที่ผู้ใช้บริการโต้แย้งได้ และส่งต่อถึงหน่วยงานกำกับดูแลได้หากผู้ให้บริการไม่แก้ไข',
				en: 'A bill far above normal, an amount that does not match the package you agreed to, or a duplicated charge — all of these are disputable, and escalate to the regulator if the operator will not fix them.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'บริการเสริมที่ถูกคิดเงินโดยไม่ได้ตกลง', en: 'Charges you never agreed to' },
			text: {
				th: 'การถูกหักเงินรายเดือนจากบริการที่ไม่เคยสมัครอย่างชัดแจ้ง หรือสมัครไปโดยไม่มีการแจ้งราคาให้ทราบก่อน เป็นเรื่องร้องเรียนที่พบบ่อยที่สุดเรื่องหนึ่ง',
				en: 'A recurring charge for something you never knowingly signed up for, or signed up for without ever being told the price, is one of the most common complaints of all.'
			}
		},
		{
			icon: 'scale',
			title: { th: 'สิทธิที่จะรู้ราคาและสิทธิที่จะยกเลิก', en: 'The right to know, the right to cancel' },
			text: {
				th: 'ผู้ให้บริการที่ถือใบอนุญาตต้องแจ้งเงื่อนไขและค่าใช้จ่ายให้ชัดเจนก่อนเรียกเก็บเงิน และต้องเปิดทางให้ยกเลิกบริการที่ผู้ใช้ไม่ต้องการได้จริง',
				en: 'A licensed operator has to make terms and costs clear before it charges you, and has to make cancelling an unwanted service something you can actually complete.'
			}
		},
		{
			icon: 'map',
			title: { th: 'คุณภาพสัญญาณและการย้ายค่ายเบอร์เดิม', en: 'Coverage quality and keeping your number' },
			text: {
				th: 'สัญญาณที่ใช้งานไม่ได้ต่อเนื่องในพื้นที่ที่ระบุว่าให้บริการ ความเร็วต่ำกว่าที่โฆษณา หรือการย้ายค่ายที่ไม่สำเร็จซ้ำ ๆ ล้วนเป็นเรื่องที่ร้องเรียนได้',
				en: 'Service that keeps dropping inside an area advertised as covered, speeds well below what was promised, or a number transfer that fails again and again are all grounds for a complaint.'
			}
		},
		{
			icon: 'id',
			title: { th: 'ซิมที่ผูกกับบัตรประชาชนของคุณ', en: 'SIMs tied to your ID card' },
			text: {
				th: 'ทุกเลขหมายในไทยต้องลงทะเบียนผูกกับตัวตนผู้ใช้ ซึ่งแปลว่าเบอร์ที่คนอื่นเปิดในชื่อคุณก็ตามกลับมาหาคุณได้ด้วย จึงควรตรวจสอบไว้สักครั้ง',
				en: 'Every Thai mobile number is registered against a person’s identity — which also means a number someone else opened in your name traces back to you. Worth checking at least once.'
			}
		},
		{
			icon: 'bell',
			title: { th: 'เนื้อหาในวิทยุและโทรทัศน์', en: 'Broadcast content' },
			text: {
				th: 'นอกจากงานด้านโทรคมนาคม หน่วยงานนี้ยังกำกับดูแลกิจการกระจายเสียงและโทรทัศน์ จึงรับเรื่องร้องเรียนเกี่ยวกับรายการและโฆษณาที่ออกอากาศด้วย',
				en: 'Alongside telecoms, the same body regulates radio and television, so complaints about programmes and advertising that go to air belong here too.'
			}
		}
	],
	steps: [
		{
			title: { th: 'แจ้งผู้ให้บริการก่อนเสมอ และขอเลขรับเรื่อง', en: 'Go to your operator first — and get a case number' },
			text: {
				th: 'ติดต่อคอลเซ็นเตอร์ แอปพลิเคชัน หรือศูนย์บริการของค่ายที่คุณใช้ อธิบายปัญหาให้จบในครั้งเดียว แล้วขอเลขรับเรื่องหรือเลขอ้างอิงไว้ทุกครั้ง พร้อมจดวันเวลาที่แจ้ง เลขนี้คือหลักฐานว่าคุณเปิดโอกาสให้ผู้ให้บริการแก้ไขแล้ว',
				en: 'Contact your operator’s call centre, app or service shop, explain the problem once and completely, then ask for a case or reference number and note the date and time. That number is your proof that the operator was given its chance to fix things.'
			}
		},
		{
			title: { th: 'รวบรวมหลักฐานก่อนที่ข้อมูลจะหาย', en: 'Gather the evidence before it disappears' },
			text: {
				th: 'เก็บใบแจ้งค่าบริการย้อนหลัง ภาพหน้าจอข้อความและแพ็กเกจที่สมัคร ผลทดสอบความเร็วพร้อมวันเวลา และข้อความทุกฉบับที่ผู้ให้บริการส่งมา ระบบของค่ายมักเก็บประวัติย้อนหลังได้จำกัด การบันทึกไว้เองตั้งแต่ต้นจึงสำคัญ',
				en: 'Save recent bills, screenshots of messages and of the package you signed up for, speed tests with their timestamps, and every message the operator sent you. Operator systems keep only a limited history, so capturing it yourself early matters.'
			}
		},
		{
			title: { th: 'เขียนให้ชัดว่าคุณต้องการผลลัพธ์อะไร', en: 'State plainly what outcome you want' },
			text: {
				th: 'เรื่องร้องเรียนที่เดินหน้าได้เร็วคือเรื่องที่ระบุชัดว่าต้องการอะไร เช่น ขอคืนเงินส่วนที่ถูกคิดโดยไม่ได้ยินยอม ขอให้ยกเลิกบริการและหยุดเรียกเก็บ หรือขอให้แก้ไขยอดในบิลให้ถูกต้อง แทนการเล่าเหตุการณ์อย่างเดียวโดยไม่บอกข้อเรียกร้อง',
				en: 'Complaints move fastest when they name the remedy: a refund of what was charged without consent, cancellation and an end to the billing, or a corrected invoice. A narrative with no request attached is much harder to act on.'
			}
		},
		{
			title: { th: 'ยื่นเรื่องต่อ กสทช. ผ่านช่องทางบนเว็บไซต์ทางการ', en: 'File with the NBTC through its official channels' },
			text: {
				th: 'เมื่อผู้ให้บริการไม่แก้ไข ตอบไม่ตรงประเด็น หรือเวลาผ่านไปแล้วยังเงียบ ให้ส่งเรื่องต่อพร้อมแนบเลขรับเรื่องเดิมและหลักฐานทั้งหมด ช่องทางรับเรื่องและแบบฟอร์มที่ใช้อยู่ในปัจจุบันให้ดูจากเว็บไซต์ทางการเป็นหลัก',
				en: 'When the operator will not act, answers something other than what you asked, or simply goes quiet, escalate — attaching the original case number and all your evidence. Check the official site for the intake channels and forms currently in use.'
			}
		},
		{
			title: { th: 'เก็บเลขรับเรื่องชุดที่สองไว้ และติดตามเป็นระยะ', en: 'Keep the second reference number and follow up' },
			text: {
				th: 'เมื่อยื่นเรื่องแล้วคุณจะได้เลขรับเรื่องของหน่วยงานอีกชุดหนึ่ง เก็บไว้คู่กับเลขของผู้ให้บริการ แล้วอ้างเลขนี้ทุกครั้งที่ติดตาม เพื่อไม่ต้องเล่าเรื่องใหม่ตั้งแต่ต้นในทุกครั้งที่ติดต่อ',
				en: 'Filing produces a second reference number, from the agency itself. Keep it beside the operator’s one and quote it every time you follow up, so you never have to retell the whole story from scratch.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ต้องร้องเรียนกับผู้ให้บริการก่อนไหม หรือส่งเรื่องถึง กสทช. ได้เลย', en: 'Do I have to complain to my operator first?' },
			a: {
				th: 'ในทางปฏิบัติควรแจ้งผู้ให้บริการก่อนเสมอ เพราะหน่วยงานกำกับดูแลตั้งต้นจากการที่ผู้ให้บริการได้มีโอกาสแก้ไขปัญหาแล้ว เมื่อแจ้งให้ขอเลขรับเรื่องไว้ทุกครั้ง เพราะเป็นหลักฐานว่าคุณทำตามลำดับ หากผู้ให้บริการไม่แก้ไข ตอบไม่ตรงเรื่อง หรือปล่อยเงียบ จึงส่งเรื่องพร้อมเลขรับเรื่องนั้นต่อไป',
				en: 'In practice, yes — the regulator works from the premise that the operator has already had its chance. Ask for a case number when you report the problem, because that is your evidence of having followed the order. If the operator does not fix it, answers beside the point, or goes silent, escalate with that number attached.'
			}
		},
		{
			q: { th: 'เรื่องแบบไหนที่ไม่ได้อยู่ในขอบเขตของ กสทช.', en: 'What falls outside the NBTC’s remit?' },
			a: {
				th: 'หน่วยงานนี้กำกับดูแลผู้รับใบอนุญาตด้านโทรคมนาคมและกระจายเสียง เรื่องที่เกี่ยวกับค่ายมือถือ ผู้ให้บริการอินเทอร์เน็ต และสถานีวิทยุโทรทัศน์จึงอยู่ในขอบเขต ส่วนข้อพิพาทกับร้านค้าออนไลน์ แพลตฟอร์มโซเชียลมีเดียต่างประเทศ หรือการถูกหลอกโอนเงิน เป็นคนละเรื่องและมีหน่วยงานรับผิดชอบต่างหาก เส้นแบ่งที่ใช้ได้ในกรณีส่วนใหญ่คือ คู่กรณีของคุณเป็นผู้ถือใบอนุญาตหรือไม่',
				en: 'It regulates licence holders in telecommunications and broadcasting, so anything involving a mobile operator, an internet provider or a radio or TV station is in scope. Disputes with online sellers, with foreign social platforms, or a transfer scam are separate matters handled by other bodies. The dividing line that works in most cases: is the other party a licence holder?'
			}
		},
		{
			q: { th: 'ถูกหักเงินค่าบริการเสริมที่ไม่เคยสมัคร ต้องทำอย่างไร', en: 'I am being charged for a subscription I never ordered. What now?' },
			a: {
				th: 'เริ่มจากบันทึกหลักฐานก่อนข้อมูลจะหาย ทั้งรายการหักเงินในบิลหรือประวัติเติมเงิน วันที่เริ่มถูกคิดเงิน และข้อความที่ระบบส่งมาเกี่ยวกับบริการนั้น จากนั้นแจ้งผู้ให้บริการเพื่อขอยกเลิกและขอคืนเงินส่วนที่ถูกคิดโดยไม่ได้ยินยอม พร้อมขอเลขรับเรื่อง หากบอกว่ายกเลิกให้แล้วแต่รอบบิลถัดไปยังถูกคิดอีก ให้เก็บบิลรอบใหม่เป็นหลักฐานเพิ่มแล้วส่งเรื่องต่อ',
				en: 'Capture the evidence before it ages out: the charge lines on the bill or top-up history, the date the charges began, and any message the system sent you about the service. Then ask the operator to cancel it and refund what was taken without your consent, and get a case number. If you are told it is cancelled but the next cycle bills you again, keep that new bill as further evidence and escalate.'
			}
		},
		{
			q: { th: 'ย้ายค่ายเบอร์เดิมไม่สำเร็จหลายครั้ง เกิดจากอะไรได้บ้าง', en: 'My number transfer keeps failing — why?' },
			a: {
				th: 'สาเหตุที่พบบ่อยคือข้อมูลผู้จดทะเบียนไม่ตรงกับที่ให้ไว้ตอนยื่นย้าย ยังมีค่าบริการค้างชำระ หรือเลขหมายยังติดเงื่อนไขสัญญากับค่ายเดิม ให้ขอเหตุผลที่ชัดเจนเป็นลายลักษณ์อักษรหรือเป็นข้อความ แล้วแก้ที่ต้นเหตุนั้นก่อน หากถูกปฏิเสธซ้ำ ๆ โดยไม่ได้รับคำอธิบาย หรือคำอธิบายไม่ตรงกับข้อเท็จจริง เรื่องนี้ร้องเรียนได้ และควรแนบข้อความแจ้งผลการย้ายทุกฉบับที่ได้รับ',
				en: 'The usual causes are registration details that do not match what you submitted, an unpaid balance, or a contract commitment still attached to the number. Ask for the reason in writing or as a message, and fix that cause first. If you are refused repeatedly with no explanation, or the explanation does not match the facts, that is a complaint worth filing — attach every transfer-result message you received.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่ามีซิมกี่เบอร์ที่ลงทะเบียนในชื่อเรา', en: 'How do I find out how many SIMs are registered in my name?' },
			a: {
				th: 'ผู้ให้บริการแต่ละรายมีช่องทางให้ตรวจสอบเลขหมายที่ผูกกับเลขบัตรประชาชนของคุณ ทั้งในแอปของค่ายนั้นและที่ศูนย์บริการ ควรตรวจทีละค่ายเพราะข้อมูลไม่ได้รวมอยู่ที่เดียว หากพบเบอร์ที่คุณไม่ได้เป็นคนเปิด ให้แจ้งค่ายนั้นขอยกเลิกและขอให้บันทึกเรื่องไว้ทันที เพราะซิมที่อยู่ในชื่อคุณแต่คนอื่นถือใช้ อาจถูกนำไปใช้ในทางที่ผิดโดยที่คุณไม่รู้ตัว',
				en: 'Each operator has its own way to check which numbers sit under your ID number — through its app and at its service shops. Check operator by operator, because the picture is not pooled in one place. If you find a number you did not open, tell that operator immediately, ask for it to be cancelled and ask that the report be recorded, since a SIM in your name but in someone else’s hands can be misused without your knowing.'
			}
		},
		{
			q: { th: 'มีสายโทรมาอ้างว่าเป็นเจ้าหน้าที่ กสทช. บอกว่าเบอร์เราจะถูกระงับ เรื่องจริงไหม', en: 'Someone called claiming to be from the NBTC, saying my number will be suspended. Is that real?' },
			a: {
				th: 'ให้ตั้งข้อสงสัยไว้ก่อน รูปแบบที่มิจฉาชีพใช้บ่อยคืออ้างว่าเลขหมายของคุณเกี่ยวข้องกับคดี แล้วโอนสายไปยังคนที่อ้างเป็นเจ้าหน้าที่อีกคนเพื่อขอข้อมูลส่วนตัวหรือให้โอนเงินเพื่อ “ตรวจสอบ” หน่วยงานรัฐไม่ขอรหัส OTP ไม่ขอให้โอนเงินไปพิสูจน์ความบริสุทธิ์ และไม่เร่งให้ตัดสินใจในไม่กี่นาที วิธีที่ปลอดภัยที่สุดคือวางสาย แล้วติดต่อกลับเองผ่านช่องทางบนเว็บไซต์ทางการเท่านั้น',
				en: 'Treat it as a scam until proven otherwise. The standard script claims your number is linked to a criminal case, then transfers you to a second “officer” who wants personal details or money moved so it can be “verified”. Government bodies do not ask for OTP codes, do not ask you to transfer money to prove your innocence, and do not demand a decision within minutes. Hang up, and if you want to be certain, make contact yourself only through the details published on the official site.'
			}
		},
		{
			q: { th: 'ส่งเรื่องแล้วจะรู้ผลเมื่อไหร่', en: 'How long does a complaint take?' },
			a: {
				th: 'ระยะเวลาขึ้นอยู่กับประเภทของเรื่องและความครบถ้วนของหลักฐาน จึงไม่มีตัวเลขเดียวที่ใช้ได้กับทุกกรณี ให้ดูกรอบระยะเวลาและขั้นตอนที่ประกาศไว้บนเว็บไซต์ทางการเป็นหลัก สิ่งที่ช่วยได้จริงคือเก็บเลขรับเรื่องทั้งของผู้ให้บริการและของหน่วยงานไว้ แล้วติดตามเป็นระยะโดยอ้างเลขนั้นทุกครั้ง',
				en: 'It depends on the type of case and on how complete your evidence is, so there is no single figure that holds for every complaint. Read the timeframes and procedure published on the official site. What genuinely helps is keeping both reference numbers — the operator’s and the agency’s — and following up periodically while quoting them.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'กสทช. คือใคร และช่วยผู้บริโภคเรื่องอะไรได้บ้าง', en: 'What the NBTC is, and what it does for you' }
		},
		{
			type: 'p',
			text: {
				th: 'สำนักงานคณะกรรมการกิจการกระจายเสียง กิจการโทรทัศน์ และกิจการโทรคมนาคมแห่งชาติ หรือที่คนทั่วไปเรียกสั้น ๆ ว่า กสทช. เป็นหน่วยงานกำกับดูแลที่จัดสรรคลื่นความถี่ ออกใบอนุญาตให้ผู้ประกอบการมือถือ ผู้ให้บริการอินเทอร์เน็ต และสถานีวิทยุโทรทัศน์ พร้อมทั้งวางกติกาที่ผู้ได้รับใบอนุญาตทุกรายต้องปฏิบัติตาม งานส่วนใหญ่ในภาพรวมจึงเป็นเรื่องเชิงนโยบายที่คนทั่วไปไม่ได้สัมผัสโดยตรง',
				en: 'The National Broadcasting and Telecommunications Commission — กสทช. in everyday Thai — allocates spectrum, licenses the mobile operators, the internet providers and the radio and television stations, and writes the rules every licence holder has to follow. Most of that work is policy, at a distance from daily life.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'แต่มีงานอีกด้านหนึ่งที่ใกล้ตัวมาก นั่นคือการรับเรื่องร้องเรียนจากผู้ใช้บริการ เมื่อค่ายมือถือ ผู้ให้บริการเน็ตบ้าน หรือสถานีโทรทัศน์ไม่ยอมแก้ปัญหาให้ ผู้บริโภคส่งเรื่องต่อมาที่หน่วยงานกำกับดูแลได้ เพราะผู้ให้บริการเหล่านั้นถือใบอนุญาตและต้องอยู่ภายใต้เงื่อนไขที่กำหนดไว้ ในทางปฏิบัติ นี่คือช่องทางที่ทำให้คำว่าสิทธิผู้บริโภคมีน้ำหนักขึ้นมา แทนที่จะจบลงแค่การเถียงกับพนักงานคอลเซ็นเตอร์แล้วยอมแพ้ไปเอง',
				en: 'The other half is much closer to home: it receives complaints from the people who use those services. When an operator, an ISP or a broadcaster will not resolve something, the matter can be escalated to the regulator, because those companies hold licences and are bound by the conditions attached to them. In practice this is what gives the phrase “consumer rights” any weight at all, instead of leaving it to end in an argument with a call-centre agent that you eventually abandon.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เรื่องแบบไหนที่ส่งถึง กสทช. ได้', en: 'The kinds of problem it takes' }
		},
		{
			type: 'p',
			text: {
				th: 'ขอบเขตครอบคลุมทั้งฝั่งโทรคมนาคมและฝั่งกระจายเสียง ตารางด้านล่างสรุปกลุ่มเรื่องที่พบบ่อย พร้อมหลักฐานที่ควรมีไว้ตั้งแต่ก่อนเริ่มร้องเรียน',
				en: 'The scope runs across both telecoms and broadcasting. The table below sets out the common groups, with the evidence worth having in hand before you start.'
			}
		},
		{
			type: 'table',
			caption: { th: 'ประเภทเรื่องร้องเรียนที่พบบ่อย และหลักฐานที่ควรเตรียม', en: 'Common complaint types and the evidence to keep' },
			head: [
				{ th: 'ประเภทปัญหา', en: 'Type of problem' },
				{ th: 'ตัวอย่างที่พบบ่อย', en: 'What it looks like' },
				{ th: 'หลักฐานที่ควรเตรียม', en: 'Evidence to keep' }
			],
			rows: [
				[
					{ th: 'ค่าบริการและการคิดเงิน', en: 'Billing' },
					{ th: 'บิลสูงผิดปกติ คิดเงินซ้ำ หรือยอดไม่ตรงกับแพ็กเกจที่ตกลงไว้', en: 'A bill far above normal, a duplicated charge, or an amount that does not match the agreed package' },
					{ th: 'ใบแจ้งค่าบริการย้อนหลัง ภาพหน้าจอแพ็กเกจที่สมัคร และวันที่เกิดปัญหา', en: 'Recent bills, a screenshot of the package you signed up for, and the dates involved' }
				],
				[
					{ th: 'บริการเสริมที่ไม่ได้สมัคร', en: 'Charges without clear consent' },
					{ th: 'ถูกหักเงินรายเดือนจากบริการที่ไม่เคยกดยืนยัน หรือสมัครไปโดยไม่รู้ว่ามีค่าใช้จ่าย', en: 'A monthly charge for something you never confirmed, or that you accepted without being told it cost anything' },
					{ th: 'ข้อความยืนยันการสมัคร รายการหักเงิน และผลของการขอยกเลิก', en: 'The activation message, the charge lines, and the outcome of your cancellation request' }
				],
				[
					{ th: 'ยกเลิกบริการไม่ได้', en: 'Cancellation that never completes' },
					{ th: 'แจ้งยกเลิกแล้วยังถูกเรียกเก็บเงินต่อ หรือถูกโยนไปหลายช่องทางจนเรื่องไม่จบ', en: 'Billing continues after you cancelled, or you are passed between channels until the request dies' },
					{ th: 'วันเวลาที่แจ้งยกเลิก ช่องทางที่ใช้ และเลขรับเรื่องของผู้ให้บริการ', en: 'When you cancelled, through which channel, and the operator’s case number' }
				],
				[
					{ th: 'ย้ายค่ายเบอร์เดิม', en: 'Number portability' },
					{ th: 'ย้ายไม่สำเร็จซ้ำ ๆ ถูกปฏิเสธโดยไม่มีคำอธิบาย หรือเบอร์ใช้ไม่ได้ระหว่างย้าย', en: 'Repeated failures, refusals with no reason given, or a number that goes dead mid-transfer' },
					{ th: 'ข้อความแจ้งผลการย้าย วันที่ยื่นคำขอ และเหตุผลที่ผู้ให้บริการแจ้ง', en: 'Transfer-result messages, the request date, and the reason the operator gave' }
				],
				[
					{ th: 'คุณภาพสัญญาณและความเร็ว', en: 'Coverage and speed' },
					{ th: 'สัญญาณใช้ไม่ได้ต่อเนื่องในพื้นที่ที่ระบุว่าให้บริการ หรือความเร็วต่ำกว่าที่โฆษณามาก', en: 'Service that keeps dropping inside an area sold as covered, or speeds far below those advertised' },
					{ th: 'ผลทดสอบความเร็วพร้อมวันเวลา ที่อยู่ของจุดที่มีปัญหา และเลขรับเรื่องเดิม', en: 'Timestamped speed tests, the address where it happens, and the earlier case number' }
				],
				[
					{ th: 'เนื้อหาวิทยุและโทรทัศน์', en: 'Broadcast content' },
					{ th: 'รายการหรือโฆษณาที่เห็นว่าไม่เหมาะสมหรือทำให้เข้าใจผิด', en: 'A programme or advertisement you consider improper or misleading' },
					{ th: 'ชื่อช่อง ชื่อรายการ วันและเวลาที่ออกอากาศ', en: 'The channel, the programme, and the date and time it aired' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ลำดับที่สำคัญ — ผู้ให้บริการก่อน แล้วจึงถึงหน่วยงานกำกับดูแล', en: 'The order that matters: operator first, regulator second' }
		},
		{
			type: 'p',
			text: {
				th: 'ขั้นตอนที่คนมักข้ามแล้วทำให้เรื่องช้าลง คือการส่งเรื่องมาที่หน่วยงานกำกับดูแลทั้งที่ยังไม่เคยแจ้งผู้ให้บริการเลย การกำกับดูแลตั้งต้นจากการที่ผู้ให้บริการได้มีโอกาสแก้ไขปัญหาก่อน เรื่องจึงควรเริ่มที่ค่ายที่คุณใช้อยู่เสมอ และสิ่งสำคัญที่สุดในขั้นนี้คือขอเลขรับเรื่องหรือเลขอ้างอิงไว้ทุกครั้ง พร้อมจดวันเวลาและชื่อผู้รับเรื่อง เพราะเป็นหลักฐานว่าคุณให้โอกาสผู้ให้บริการแล้ว และมักเป็นสิ่งแรกที่ถูกถามหาเมื่อส่งเรื่องต่อ หากคอลเซ็นเตอร์ไม่ให้เลขรับเรื่อง ให้บันทึกวันเวลาที่โทร หมายเลขที่โทรออก และสรุปสิ่งที่พนักงานตอบไว้แทน',
				en: 'The step people skip — and the reason their case stalls — is going to the regulator without ever having told the operator. Regulation of this kind starts from the premise that the company has already had its chance, so a complaint should always begin with the provider you are actually with. The one thing not to leave that conversation without is a case or reference number, along with the date, the time and the name of whoever took it: that is your proof the operator was given its chance, and it is usually the first thing asked for when you escalate. If the call centre will not issue one, record when you called, the number you dialled and a summary of what you were told.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'สามอย่างที่ควรมีก่อนส่งเรื่องต่อ', en: 'Three things to have before you escalate' },
			text: {
				th: 'หนึ่ง เลขรับเรื่องจากผู้ให้บริการพร้อมวันที่แจ้ง สอง หลักฐานที่แสดงตัวปัญหา เช่น ใบแจ้งค่าบริการ ภาพหน้าจอ หรือผลทดสอบความเร็วพร้อมวันเวลา และสาม คำตอบสุดท้ายที่ผู้ให้บริการให้มา หรือข้อเท็จจริงว่าเวลาผ่านไปแล้วแต่ยังไม่มีคำตอบ ครบสามอย่างนี้ เรื่องจะเดินหน้าได้เร็วกว่าการเล่าเหตุการณ์เพียงอย่างเดียวมาก',
				en: 'One: the operator’s case number and the date you reported it. Two: evidence of the problem itself — bills, screenshots, timestamped speed tests. Three: the operator’s final answer, or the fact that time has passed with no answer at all. With those three in place, a complaint travels a great deal faster than a story told on its own.'
			}
		},
		{
			type: 'h2',
			text: { th: 'สิทธิที่ใช้เป็นหลักในการโต้แย้ง', en: 'The principles a complaint rests on' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'คุณมีสิทธิรู้ราคาและเงื่อนไขที่ชัดเจนก่อนจะถูกเรียกเก็บเงิน ไม่ใช่รู้ทีหลังตอนเห็นยอดในบิลแล้ว',
					en: 'You are entitled to know the price and the terms clearly before you are charged — not afterwards, when the amount shows up on the bill.'
				},
				{
					th: 'การคิดค่าบริการต้องมาจากความยินยอมของผู้ใช้ การกดปุ่มโดยไม่รู้ว่ามีค่าใช้จ่าย หรือการต่ออายุอัตโนมัติที่ไม่เคยแจ้ง ไม่ใช่ความยินยอมที่ชัดแจ้ง',
					en: 'A charge has to rest on the user’s consent. Tapping a button without being told it costs money, or an automatic renewal nobody mentioned, is not clear consent.'
				},
				{
					th: 'คุณมีสิทธิยกเลิกบริการที่ไม่ต้องการ และการยกเลิกต้องทำได้จริง ไม่ใช่ถูกโยนไปมาจนคุณล้มเลิกไปเอง',
					en: 'You have the right to cancel a service you no longer want, and cancelling has to be something you can complete — not a loop designed to outlast your patience.'
				},
				{
					th: 'คุณมีสิทธิได้รับใบแจ้งค่าบริการที่ตรวจสอบรายการได้ และมีสิทธิโต้แย้งยอดที่เห็นว่าไม่ถูกต้อง',
					en: 'You are entitled to a bill itemised well enough to check, and entitled to dispute a figure you believe is wrong.'
				},
				{
					th: 'คุณมีสิทธิได้รับบริการตามคุณภาพที่ผู้ให้บริการโฆษณาไว้หรือระบุไว้ในสัญญา',
					en: 'You are entitled to the quality of service that was advertised to you or written into the contract.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ซิมที่ลงทะเบียนในชื่อคุณ เรื่องที่ควรตรวจสักครั้ง', en: 'The SIMs registered in your name — worth checking once' }
		},
		{
			type: 'p',
			text: {
				th: 'ทุกเลขหมายมือถือในประเทศไทยต้องลงทะเบียนผูกกับตัวตนของผู้ใช้ ซึ่งเป็นกติกาที่หน่วยงานกำกับดูแลวางไว้ร่วมกับผู้ให้บริการ ข้อดีคือเลขหมายทุกเลขสาวกลับไปหาผู้ถือครองได้ แต่ผลอีกด้านหนึ่งคือ หากมีคนนำสำเนาบัตรประชาชนของคุณไปเปิดเบอร์ เบอร์นั้นจะอยู่ในชื่อคุณ และถ้าถูกนำไปใช้ในทางที่ผิด ชื่อของคุณคือชื่อแรกที่ปรากฏ การตรวจว่ามีเลขหมายกี่เลขผูกอยู่กับเลขบัตรประชาชนของคุณจึงควรทำสักครั้ง ผู้ให้บริการแต่ละรายมีช่องทางของตัวเองให้ตรวจสอบและขอยกเลิกเบอร์ที่คุณไม่ได้เป็นคนเปิด และเนื่องจากข้อมูลไม่ได้รวมอยู่ที่เดียว จึงต้องตรวจทีละค่าย',
				en: 'Every mobile number in Thailand has to be registered against the identity of its user — a rule the regulator maintains together with the operators. Its virtue is that any number can be traced back to a person. Its other edge is that if someone opens a line using a copy of your ID card, that line stands in your name, and if it is then used for something criminal, yours is the first name any investigation meets. That is reason enough to check, at least once, how many numbers sit under your ID: each operator has its own route to look and to cancel a line you did not open, and because the picture is pooled nowhere, you have to check operator by operator.'
			}
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'สายที่อ้างว่าโทรมาจาก กสทช.', en: 'Calls claiming to come from the regulator' },
			text: {
				th: 'มีการหลอกลวงรูปแบบหนึ่งที่หยิบชื่อหน่วยงานกำกับดูแลโทรคมนาคมไปใช้ โดยอ้างว่าเลขหมายของคุณถูกใช้ในการกระทำผิดหรือกำลังจะถูกระงับ แล้วโอนสายต่อไปยังคนที่อ้างเป็นเจ้าหน้าที่อีกคน เพื่อขอข้อมูลส่วนตัวหรือให้โอนเงินเพื่อพิสูจน์ความบริสุทธิ์ หน่วยงานรัฐไม่ทำงานแบบนั้น ไม่มีการขอรหัส OTP ไม่มีการขอให้โอนเงินไปตรวจสอบ และไม่มีการเร่งให้ตัดสินใจภายในไม่กี่นาที ถ้าไม่แน่ใจให้วางสายก่อน แล้วติดต่อกลับผ่านช่องทางที่ประกาศไว้บนเว็บไซต์ทางการเท่านั้น',
				en: 'One long-running scam borrows the telecom regulator’s name: a caller says your number has been used in a crime or is about to be cut off, then transfers you to a second “officer” who wants personal details or money moved to prove your innocence. No government body works that way — no OTP codes, no funds sent off to be checked, no decision demanded inside a few minutes. Hang up first; if you want to be sure, make contact yourself through the details published on the official site.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมต้องมีหน้าที่ค้นเจอได้ชี้มาที่หน่วยงานนี้', en: 'Why a findable page has to point here' }
		},
		{
			type: 'p',
			text: {
				th: 'คนที่กำลังเดือดร้อนเรื่องบิลมือถือไม่ได้ค้นหาด้วยคำว่า “องค์กรกำกับดูแลกิจการโทรคมนาคม” เขาพิมพ์ว่า “โดนหักเงินค่าบริการที่ไม่ได้สมัคร” หรือ “ยกเลิกบริการเสริมไม่ได้” แล้วสิ่งที่ขึ้นมาก่อนมักเป็นกระทู้เก่าที่ตอบกันไปคนละทาง ระยะห่างระหว่างคำที่คนใช้จริงกับชื่อของหน่วยงานที่มีอำนาจแก้ปัญหา คือเหตุผลตั้งต้นของหน้านี้ และในการตรวจสอบเมื่อวันที่ 27 สิงหาคม 2569 เรายังพบอีกเหตุผลหนึ่ง คือเซิร์ฟเวอร์ของเว็บไซต์ยอมให้อ่านไฟล์ robots.txt ได้ตามปกติ ซึ่งเป็นสิ่งเดียวที่ตรวจสอบจากภายนอกได้จริงเพราะเป็นไฟล์สาธารณะที่ทุกคนเห็นเหมือนกัน แต่ตอบหน้าเว็บจริงด้วยหน้าท้าทายของ Cloudflare ที่ต้องประมวลผลจาวาสคริปต์ก่อนจึงจะผ่านได้ เบราว์เซอร์ทั่วไปผ่านด่านนี้ได้ และ Cloudflare มักยกเว้นให้บอตของเครื่องมือค้นหาที่ยืนยันตัวตนแล้ว Google จึงมีแนวโน้มสูงว่าเข้าถึงเว็บไซต์นี้ได้ตามปกติ การที่เครื่องซึ่งเราใช้ตรวจสอบถูกปฏิเสธ แม้ในครั้งที่ส่งชื่อ Googlebot ไปด้วย ก็ไม่ใช่หลักฐานว่า Googlebot ตัวจริงถูกปิดกั้น เพราะ Googlebot ตัวจริงเก็บข้อมูลจากช่วงหมายเลขไอพีของ Google เอง และยืนยันตัวตนด้วยการตรวจสอบ reverse DNS สิ่งที่ถูกกันออกไปแน่ ๆ คือเครื่องมือที่ไม่ประมวลผลจาวาสคริปต์ ทั้งบริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI หน้านี้จึงเป็นป้ายบอกทางที่ค้นเจอได้ อธิบายด้วยภาษาที่คนใช้จริงว่าหน่วยงานรับเรื่องอะไรและต้องเตรียมอะไรไว้ก่อน แล้วส่งผู้อ่านไปยังเว็บไซต์ทางการโดยตรง ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่มีความเกี่ยวข้องกับ กสทช. ไม่รับเรื่องร้องเรียนแทนหน่วยงานใด และไม่เก็บข้อมูลส่วนบุคคลของผู้อ่าน',
				en: 'Nobody in the middle of a billing fight searches for “national telecommunications regulator”. They type “charged for something I never subscribed to” or “cannot cancel this add-on”, and what surfaces first is usually an old forum thread pulling in three directions. That gap — between the words people actually use and the name of the body with the power to act — is why this page starts where it does. Our check on 27 August 2026 adds a second reason. The site serves robots.txt normally — the one thing anyone can verify from outside, since that file is public and identical for every requester — but answers the pages themselves with a Cloudflare challenge that only clears once JavaScript has run. Ordinary browsers get through it, and Cloudflare normally waves verified search-engine crawlers past, so Google most likely reaches the site perfectly well; the refusal our audit host met, even when it announced itself as Googlebot, is no evidence about the real Googlebot, which crawls from Google’s own IP ranges and proves who it is by reverse DNS. What the challenge does shut out is everything that does not execute JavaScript: web archives, outside monitoring services, and AI assistants. So this page acts as the findable signpost: it explains, in the language people use, what the agency handles and what to have ready first, then sends the reader straight to the official site. ThaiGov.co is an independent directory with no affiliation to the NBTC; we take no complaints on anyone’s behalf and collect no personal data from readers.'
			}
		}
	],
	crawl: {
		host: 'www.nbtc.go.th',
		verdict: 'partial',
		kind: 'partial',
		status: 403,
		snippet: 'Full desktop-Chrome request profile\n  GET /  ->  403  (Cloudflare managed challenge (JavaScript interstitial))\nGooglebot user-agent\n  GET /  ->  403\nGET /robots.txt  ->  200\n\nHeadless Chromium (real browser engine)\n  GET /  ->  200  (served normally)\n  GET /robots.txt  ->  200\n\nUser-agent: *\nDisallow: /wps/contenthandler/',
		checkedAt: '2026-08-28',
		note: {
			th: 'ไฟล์ robots.txt ปิดกั้นบางเส้นทางไว้ แต่ไม่ได้ปิดกั้นทั้งเว็บไซต์ หน้าเนื้อหาทั่วไปจึงยังถูกจัดทำดัชนีได้ ส่วนบริการที่ต้องเข้าสู่ระบบยังไม่ปรากฏในผลการค้นหาตามปกติของระบบที่ต้องยืนยันตัวตน',
			en: 'The robots.txt closes some paths but does not block the site as a whole, so ordinary content pages remain indexable. Services behind a sign-in still do not appear in search results, as is normal for authenticated systems.'
		}
	},
	priority: 76,
	updated: '2026-08-28'
};
