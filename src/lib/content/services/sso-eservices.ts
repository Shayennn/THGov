import type { Service } from '../types';

export const service: Service = {
	slug: 'sso-eservices',
	name: {
		th: 'ประกันสังคม e-Service — ตรวจสอบสิทธิและเงินสมทบ',
		en: 'Thai Social Security e-Services — Check Your Entitlements'
	},
	shortName: { th: 'ประกันสังคม e-Service', en: 'SSO e-Services' },
	url: 'https://www.sso.go.th/',
	agency: 'sso',
	categories: ['health-welfare'],
	summary: {
		th: 'เช็กสิทธิประกันสังคมด้วยตัวเอง ทั้งประวัติเงินสมทบ เดือนสะสมกรณีชราภาพ โรงพยาบาลตามสิทธิ และความต่างของผู้ประกันตนมาตรา 33 39 และ 40 พร้อมลิงก์เข้าระบบทางการ',
		en: 'Check your Thai social security record online: contributions, months toward the old-age benefit, your registered hospital, and how Sections 33, 39 and 40 differ.'
	},
	deck: {
		th: 'บริการออนไลน์ของสำนักงานประกันสังคม สำหรับผู้ประกันตนมาตรา 33 มาตรา 39 และมาตรา 40 ที่อยากรู้ให้ชัดว่าตัวเองมีสิทธิอะไรอยู่บ้าง',
		en: 'The Social Security Office’s online service for insured persons under Sections 33, 39 and 40 who want to know exactly what they are entitled to.'
	},
	keywords: {
		th: [
			'เช็คสิทธิประกันสังคม',
			'เช็คเงินสมทบประกันสังคม',
			'ประกันสังคมมาตรา 33',
			'ประกันสังคมมาตรา 39',
			'ประกันสังคมมาตรา 40',
			'เปลี่ยนโรงพยาบาลประกันสังคม',
			'เช็คโรงพยาบาลตามสิทธิ',
			'เงินชราภาพประกันสังคม',
			'เช็คเดือนสะสมประกันสังคม',
			'ประกันสังคมว่างงาน',
			'สิทธิคลอดบุตรประกันสังคม',
			'ประกันสังคมออนไลน์',
			'ออกจากงานแล้วประกันสังคมใช้ได้ไหม',
			'สปส.'
		],
		en: [
			'Thai social security',
			'SSO Thailand',
			'check social security contributions Thailand',
			'Section 33 social security',
			'Section 40 social security',
			'change social security hospital',
			'Thai social security pension',
			'Social Security Office Thailand'
		]
	},
	features: [
		{
			icon: 'receipt',
			title: { th: 'ตรวจสอบประวัติการส่งเงินสมทบ', en: 'Check your contribution history' },
			text: {
				th: 'ดูย้อนหลังได้ว่าเงินสมทบถูกนำส่งครบทุกเดือนหรือไม่ ซึ่งเป็นจุดตั้งต้นของสิทธิเกือบทุกกรณี',
				en: 'See month by month whether contributions were actually remitted — the basis of nearly every benefit you can claim.'
			}
		},
		{
			icon: 'clock',
			title: { th: 'นับเดือนสะสมกรณีชราภาพ', en: 'Track months toward the old-age benefit' },
			text: {
				th: 'รู้ว่าตอนนี้สะสมมาแล้วกี่เดือน ซึ่งเป็นตัวชี้ว่าเมื่อถึงเวลาจะได้รับเป็นเงินก้อนหรือบำนาญรายเดือน',
				en: 'Know how many months you have accumulated — the figure that decides between a lump sum and a monthly pension.'
			}
		},
		{
			icon: 'heart',
			title: { th: 'ดูและเปลี่ยนโรงพยาบาลตามสิทธิ', en: 'Check and change your registered hospital' },
			text: {
				th: 'ตรวจสอบว่าสิทธิรักษาพยาบาลของคุณผูกอยู่กับโรงพยาบาลใด และยื่นขอเปลี่ยนในช่วงที่เปิดให้เปลี่ยน',
				en: 'Confirm which hospital holds your medical entitlement, and apply to change it while the annual window is open.'
			}
		},
		{
			icon: 'users',
			title: { th: 'แยกให้ออกว่าคุณอยู่มาตราไหน', en: 'Work out which section you are in' },
			text: {
				th: 'มาตรา 33 มาตรา 39 และมาตรา 40 มีเงื่อนไขและสิทธิไม่เหมือนกัน ข้อมูลในระบบจะบอกสถานะที่คุณถืออยู่จริง',
				en: 'Sections 33, 39 and 40 carry different conditions and different benefits; your record shows the status you actually hold.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ดูขอบเขตความคุ้มครองของตัวเอง', en: 'See the cover you actually have' },
			text: {
				th: 'ตั้งแต่เจ็บป่วย คลอดบุตร ทุพพลภาพ เสียชีวิต สงเคราะห์บุตร ว่างงาน ไปจนถึงชราภาพ',
				en: 'From sickness and maternity to invalidity, death, child allowance, unemployment and old age.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'อ่านขั้นตอนและเอกสารก่อนยื่นเรื่อง', en: 'Check the steps and paperwork before filing' },
			text: {
				th: 'แต่ละกรณีมีแบบฟอร์มและเอกสารประกอบต่างกัน การเตรียมให้ครบตั้งแต่แรกช่วยลดการต้องยื่นซ้ำ',
				en: 'Every benefit has its own form and supporting documents; getting them right the first time saves a second trip.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ตรวจสอบก่อนว่าคุณเป็นผู้ประกันตนมาตราไหน', en: 'Establish which section you are insured under' },
			text: {
				th: 'ถ้ายังเป็นลูกจ้างของนายจ้างที่ขึ้นทะเบียนไว้ คุณคือมาตรา 33 ถ้าลาออกแล้วสมัครส่งเงินสมทบต่อด้วยตนเอง คือมาตรา 39 และถ้าทำงานอิสระแล้วสมัครเข้าระบบเอง คือมาตรา 40 เพราะสิทธิของแต่ละกลุ่มไม่เหมือนกัน จุดนี้จึงต้องชัดก่อนเรื่องอื่น',
				en: 'If you are employed by a registered employer you are under Section 33; if you resigned and chose to keep contributing yourself, Section 39; if you are self-employed and enrolled on your own, Section 40. The benefits differ by group, so settle this before anything else.'
			}
		},
		{
			title: { th: 'เตรียมเลขประจำตัวประชาชนและช่องทางติดต่อที่ใช้ได้จริง', en: 'Have your ID number and working contact details ready' },
			text: {
				th: 'ระบบยืนยันตัวตนด้วยเลขประจำตัวประชาชนและข้อมูลส่วนบุคคลที่ต้องตรงกับที่ขึ้นทะเบียนไว้ และมักส่งรหัสยืนยันไปยังเบอร์โทรศัพท์หรืออีเมล จึงควรใช้ช่องทางที่คุณเข้าถึงได้จริงในวันนี้ ไม่ใช่เบอร์เก่าที่เคยให้ไว้กับที่ทำงานเดิม',
				en: 'Registration checks you against your national ID and the personal details already on record, and usually sends a confirmation code to your phone or email. Use contact details you can reach today, not an old number you once gave a former employer.'
			}
		},
		{
			title: { th: 'สมัครสมาชิกและเข้าสู่ระบบผ่านเว็บไซต์ทางการ', en: 'Register and sign in on the official site' },
			text: {
				th: 'พิมพ์ที่อยู่เว็บไซต์ของสำนักงานประกันสังคมเข้าไปเอง หรือใช้ลิงก์ที่คุณตรวจสอบแล้ว ไม่ควรเข้าผ่านลิงก์ที่ส่งมาทาง SMS หรือแชท เพราะเป็นช่องทางที่มิจฉาชีพใช้หลอกเอาข้อมูลบ่อยที่สุด',
				en: 'Type the Social Security Office address yourself, or use a link you have verified. Avoid links arriving by SMS or chat — that is the route impersonators rely on most.'
			}
		},
		{
			title: { th: 'เปิดดูข้อมูลผู้ประกันตนของตัวเอง', en: 'Open your own insured-person record' },
			text: {
				th: 'ดูประวัติการนำส่งเงินสมทบรายเดือน จำนวนเดือนสะสมกรณีชราภาพ และสถานะความเป็นผู้ประกันตนว่ายังมีผลอยู่หรือไม่ หากตัวเลขไม่ตรงกับที่ถูกหักจากเงินเดือน ให้เก็บสลิปเงินเดือนไว้เป็นหลักฐานก่อนไปติดต่อเจ้าหน้าที่',
				en: 'Review month-by-month remittances, the months accrued toward the old-age benefit, and whether your insured status is still active. If the figures do not match what was deducted from your pay, keep your payslips as evidence before you raise it.'
			}
		},
		{
			title: { th: 'ตรวจสอบโรงพยาบาลตามสิทธิ และเปลี่ยนถ้าจำเป็น', en: 'Check your registered hospital, and change it if needed' },
			text: {
				th: 'ดูว่าสิทธิรักษาพยาบาลของคุณผูกอยู่กับโรงพยาบาลใด หากย้ายที่อยู่หรือย้ายที่ทำงานจนเดินทางไม่สะดวก ให้ยื่นขอเปลี่ยนสถานพยาบาลในช่วงเวลาที่สำนักงานประกันสังคมเปิดให้เปลี่ยนของปีนั้น',
				en: 'Find out which hospital your medical entitlement sits with. If you have moved home or workplace and it is now impractical, apply to change it during the period the SSO opens for changes that year.'
			}
		},
		{
			title: { th: 'ก่อนยื่นขอรับประโยชน์ทดแทน ให้อ่านเงื่อนไขของกรณีนั้นก่อน', en: 'Read the conditions for your benefit before you claim' },
			text: {
				th: 'แต่ละกรณีมีเงื่อนไขจำนวนเดือนที่ต้องส่งเงินสมทบ ระยะเวลาที่ต้องยื่น และเอกสารที่ต้องแนบต่างกัน โดยเฉพาะกรณีว่างงานที่ต้องไปขึ้นทะเบียนผู้ว่างงานกับกรมการจัดหางานด้วย จึงควรตรวจสอบรายละเอียดล่าสุดจากเว็บไซต์ทางการทุกครั้ง',
				en: 'Each benefit has its own contribution requirement, filing deadline and document list — unemployment in particular also requires registering with the Department of Employment. Check the current details on the official site every time.'
			}
		}
	],
	faq: [
		{
			q: { th: 'มาตรา 33 มาตรา 39 และมาตรา 40 ต่างกันอย่างไร', en: 'What is the difference between Sections 33, 39 and 40?' },
			a: {
				th: 'มาตรา 33 คือลูกจ้างที่ทำงานกับนายจ้างซึ่งขึ้นทะเบียนไว้ นายจ้างจะหักเงินสมทบจากค่าจ้างและนำส่งให้ทุกเดือน มาตรา 39 คือคนที่เคยเป็นผู้ประกันตนมาตรา 33 แล้วออกจากงาน จึงสมัครส่งเงินสมทบต่อด้วยตนเองเพื่อรักษาสิทธิไว้ ส่วนมาตรา 40 คือผู้ประกอบอาชีพอิสระและแรงงานนอกระบบที่สมัครเข้าระบบเอง โดยเลือกทางเลือกการจ่ายเงินสมทบได้หลายแบบ ความคุ้มครองของทั้งสามกลุ่มไม่เท่ากัน จึงควรตรวจสอบรายละเอียดล่าสุดจากเว็บไซต์ทางการก่อนตัดสินใจ',
				en: 'Section 33 covers employees of a registered employer, whose contributions are deducted from wages and remitted monthly. Section 39 is for people who were once insured under Section 33, left employment, and applied to keep contributing themselves in order to preserve their cover. Section 40 is for self-employed and informal-sector workers who enrol on their own and choose between several contribution tiers. The three do not receive the same cover, so check the current details on the official site before you decide.'
			}
		},
		{
			q: { th: 'จะเช็กว่าส่งเงินสมทบมาแล้วกี่เดือนได้อย่างไร', en: 'How do I check how many months of contributions I have?' },
			a: {
				th: 'ต้องสมัครสมาชิกและเข้าสู่ระบบบนเว็บไซต์ของสำนักงานประกันสังคมด้วยเลขประจำตัวประชาชนของตัวเองก่อน จากนั้นจะเห็นประวัติการนำส่งเงินสมทบรายเดือนและจำนวนเดือนสะสมสำหรับกรณีชราภาพ ตัวเลขนี้สำคัญ เพราะเป็นตัวกำหนดว่าคุณจะได้รับประโยชน์ทดแทนกรณีชราภาพเป็นเงินก้อนครั้งเดียวหรือเป็นบำนาญรายเดือน หากยอดไม่ตรงกับที่ถูกหักจากเงินเดือน ให้เก็บสลิปไว้เป็นหลักฐานแล้วแจ้งสำนักงานประกันสังคมพื้นที่เพื่อขอตรวจสอบ',
				en: 'Register and sign in on the SSO website with your own national ID number; the record then shows your monthly remittance history and the months accumulated toward the old-age benefit. That number matters, because it determines whether you eventually receive a single lump sum or a monthly pension. If it does not match what was deducted from your salary, keep the payslips as evidence and ask your area social security office to look into it.'
			}
		},
		{
			q: { th: 'ใช้สิทธิประกันสังคมกับบัตรทองพร้อมกันได้ไหม', en: 'Can I use Social Security and the Gold Card at the same time?' },
			a: {
				th: 'โดยทั่วไปใช้ได้ทีละสิทธิเท่านั้น เมื่อคุณเป็นผู้ประกันตนมาตรา 33 หรือมาตรา 39 สิทธิรักษาพยาบาลจะเป็นของประกันสังคม และผูกอยู่กับโรงพยาบาลตามสิทธิที่คุณเลือกไว้เพียงแห่งเดียว ส่วนผู้ประกันตนมาตรา 40 ไม่ได้รับสิทธิรักษาพยาบาลจากกองทุนประกันสังคม จึงยังใช้สิทธิบัตรทองตามเดิม ถ้าไม่แน่ใจว่าตอนนี้ตัวเองอยู่สิทธิใด ให้ตรวจสอบในระบบก่อนไปโรงพยาบาลจะปลอดภัยที่สุด',
				en: 'As a rule you hold one entitlement at a time, not both. Once you are insured under Section 33 or Section 39, your medical entitlement belongs to Social Security and is tied to the single hospital you registered with. Section 40 members receive no medical treatment from the fund and keep using the Gold Card. If you are unsure which one you currently hold, check the system before you go to hospital.'
			}
		},
		{
			q: { th: 'ลาออกจากงานแล้ว สิทธิรักษาพยาบาลหมดทันทีหรือไม่', en: 'Does my medical cover stop the day I leave my job?' },
			a: {
				th: 'ไม่หมดทันที กฎหมายกำหนดให้ความคุ้มครองบางส่วนต่อเนื่องไปอีกระยะหนึ่งหลังสิ้นสภาพการเป็นลูกจ้าง แต่ระยะเวลาและขอบเขตมีเงื่อนไข จึงควรตรวจสอบจากเว็บไซต์ทางการหรือสอบถามเจ้าหน้าที่โดยตรง หากต้องการรักษาสิทธิไว้ต่อเนื่อง สามารถสมัครเป็นผู้ประกันตนมาตรา 39 ได้ แต่ต้องเคยส่งเงินสมทบมาแล้วตามเงื่อนไขที่กำหนด และต้องยื่นภายในกำหนดเวลาหลังออกจากงาน ถ้าปล่อยจนเลยกำหนดจะสมัครไม่ได้อีก',
				en: 'Not immediately — the law continues part of the cover for a period after employment ends, though the length and scope come with conditions, so confirm them on the official site or with the office directly. If you want unbroken cover you can apply to become a Section 39 member, but only if you have paid the required contributions and you apply within the deadline after leaving. Miss that deadline and the option closes.'
			}
		},
		{
			q: { th: 'สมัครสมาชิกหรือเข้าสู่ระบบไม่ได้ ต้องทำอย่างไร', en: 'I cannot register or sign in — what should I do?' },
			a: {
				th: 'สาเหตุที่พบบ่อยคือกรอกเลขประจำตัวประชาชนหรือวันเดือนปีเกิดไม่ตรงกับข้อมูลที่ขึ้นทะเบียนไว้ หรือเบอร์โทรศัพท์และอีเมลที่นายจ้างเคยแจ้งไว้ไม่ใช่ของคุณแล้ว ทำให้ไม่ได้รับรหัสยืนยัน ลองใช้เบราว์เซอร์อื่นหรือลองใหม่ในช่วงที่คนใช้งานน้อย เพราะระบบมักหนาแน่นในช่วงต้นเดือนและช่วงที่มีมาตรการใหม่ หากยังไม่ได้ ให้ติดต่อสายด่วนประกันสังคม 1506 หรือไปที่สำนักงานประกันสังคมพื้นที่พร้อมบัตรประจำตัวประชาชนเพื่อขอแก้ไขข้อมูลให้ตรงกัน',
				en: 'The usual causes are an ID number or date of birth that does not match the details on record, or a phone number and email your employer registered long ago that are no longer yours, so the confirmation code never arrives. Try another browser, or try again at a quieter hour — the system is busiest at the start of the month and whenever a new measure launches. If it still fails, call the social security hotline on 1506 or visit your area office with your ID card to have the details corrected.'
			}
		},
		{
			q: { th: 'ข้อความที่บอกว่ามีเงินคืนจากประกันสังคม เชื่อได้ไหม', en: 'Is a message about a social security refund genuine?' },
			a: {
				th: 'ให้ถือว่าน่าสงสัยไว้ก่อน มิจฉาชีพนิยมอ้างชื่อประกันสังคมเพื่อหลอกให้กดลิงก์ลงทะเบียนรับเงินคืน เงินเยียวยา หรือเงินชราภาพ แล้วพาไปยังหน้าเว็บปลอมที่ขอเลขบัตรประชาชน เลขบัญชีธนาคาร หรือรหัส OTP สำนักงานประกันสังคมไม่ขอรหัส OTP หรือรหัสผ่านผ่านแชทและโทรศัพท์ วิธีที่ปลอดภัยที่สุดคือไม่กดลิงก์จากข้อความ แต่พิมพ์ที่อยู่เว็บไซต์ทางการเอง หรือโทรสายด่วน 1506 เพื่อตรวจสอบก่อนทำอะไรทั้งสิ้น',
				en: 'Treat it as suspect. Scammers routinely invoke Social Security to get people to tap a link and “register” for a refund, a relief payment or an old-age payout, landing them on a fake page that asks for an ID number, a bank account or an OTP. The SSO does not ask for OTPs or passwords by chat or phone. The safe habit is never to tap the link: type the official address yourself, or call the 1506 hotline to check before doing anything.'
			}
		},
		{
			q: { th: 'เปลี่ยนโรงพยาบาลตามสิทธิได้ตอนไหน', en: 'When can I change my registered hospital?' },
			a: {
				th: 'โดยปกติเปลี่ยนได้ปีละครั้งในช่วงเวลาที่สำนักงานประกันสังคมประกาศกำหนดของแต่ละปี และจะเปลี่ยนนอกช่วงเวลานั้นได้เฉพาะเมื่อมีเหตุจำเป็น เช่น ย้ายที่พักอาศัยหรือย้ายสถานที่ทำงาน ควรตรวจสอบช่วงเวลาของปีปัจจุบันจากเว็บไซต์ทางการ เพราะประกาศแต่ละปีไม่ตรงกันเสมอไป และเมื่อยื่นแล้วสิทธิที่โรงพยาบาลใหม่จะเริ่มใช้ได้ตามวันที่ระบบแจ้ง ไม่ใช่มีผลทันทีในวันที่ยื่น',
				en: 'Normally once a year, during the window the SSO announces for that year, and outside it only for a genuine reason such as moving home or changing workplace. Check the current year’s window on the official site, because the announcement is not the same dates every year. Note too that cover at the new hospital starts on the date the system gives you, not the moment you submit the request.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ประกันสังคม e-Service คืออะไร', en: 'What the SSO e-Services are' }
		},
		{
			type: 'p',
			text: {
				th: 'สำนักงานประกันสังคม (สปส.) สังกัดกระทรวงแรงงาน เป็นผู้ดูแลกองทุนประกันสังคม ซึ่งเป็นระบบประกันแบบร่วมจ่าย โดยผู้ประกันตน นายจ้าง และรัฐบาลส่งเงินสมทบเข้ากองทุนตามสัดส่วนที่กฎหมายกำหนด แล้วกองทุนจะจ่ายคืนเป็นประโยชน์ทดแทนเมื่อผู้ประกันตนเจ็บป่วย คลอดบุตร ทุพพลภาพ เสียชีวิต ตกงาน หรือเข้าสู่วัยเกษียณ ส่วนบริการออนไลน์บนเว็บไซต์ของสำนักงานคือประตูที่ให้ผู้ประกันตนเข้าไปดูข้อมูลของตัวเองได้ โดยไม่ต้องเดินทางไปสำนักงานประกันสังคมพื้นที่หรือสำนักงานจังหวัด',
				en: 'The Social Security Office (SSO), part of the Ministry of Labour, administers Thailand’s Social Security Fund — a contributory scheme in which the insured person, the employer and the government each pay in according to the proportions set by law. The fund pays benefits back when an insured person falls ill, gives birth, becomes disabled, dies, loses a job or reaches retirement. The online services on the SSO website are the door into your own record, so you no longer have to travel to an area or provincial office to see it.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'งานที่คนเข้ามาทำบ่อยที่สุดมีอยู่ไม่กี่อย่าง ได้แก่ ตรวจสอบว่าเงินสมทบถูกนำส่งครบทุกเดือนหรือไม่ ดูว่าตนเองมีเดือนสะสมสำหรับประโยชน์ทดแทนกรณีชราภาพไปแล้วเท่าไร ตรวจสอบว่าโรงพยาบาลตามสิทธิของตนคือแห่งใดและยื่นขอเปลี่ยนสถานพยาบาลในช่วงที่เปิดให้เปลี่ยน รวมถึงอ่านเงื่อนไขและรายการเอกสารก่อนยื่นขอรับประโยชน์ทดแทนแต่ละกรณี ทั้งหมดนี้ต้องสมัครสมาชิกและเข้าสู่ระบบด้วยเลขประจำตัวประชาชนของตัวเองก่อน',
				en: 'Most visits come down to a handful of tasks: confirming that contributions were actually remitted every month, seeing how many months have accumulated toward the old-age benefit, checking which hospital holds your medical entitlement and applying to change it while the window is open, and reading the conditions and document lists before filing a claim. All of it requires registering and signing in with your own national ID number.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ผู้ประกันตนสามแบบ: มาตรา 33 มาตรา 39 และมาตรา 40', en: 'Three kinds of insured person: Sections 33, 39 and 40' }
		},
		{
			type: 'p',
			text: {
				th: 'คำถามแรกที่ต้องตอบให้ได้ก่อนใช้สิทธิใด ๆ คือตอนนี้คุณเป็นผู้ประกันตนตามมาตราไหน เพราะวิธีส่งเงินสมทบและสิทธิที่ได้รับต่างกันชัดเจน หลายคนเข้าใจว่าเคยทำงานบริษัทมาก่อนแล้วสิทธิจะติดตัวไปตลอด ทั้งที่ความจริงสถานะจะเปลี่ยนทันทีที่ออกจากงาน และถ้าไม่ได้ดำเนินการอะไรต่อ ความคุ้มครองก็จะสิ้นสุดลงตามระยะเวลาที่กฎหมายกำหนด',
				en: 'Before using any entitlement, answer one question: which section are you insured under right now? The way contributions are paid and the benefits you receive differ substantially. Many people assume that having once worked for a company means the cover follows them for life; in reality your status changes the moment you leave employment, and if you do nothing further the cover lapses after the period the law allows.'
			}
		},
		{
			type: 'table',
			caption: { th: 'เปรียบเทียบผู้ประกันตนแต่ละมาตรา', en: 'The three insured-person categories compared' },
			head: [
				{ th: 'มาตรา', en: 'Section' },
				{ th: 'ใครอยู่ในกลุ่มนี้', en: 'Who it covers' },
				{ th: 'จุดที่ต้องรู้', en: 'What to know' }
			],
			rows: [
				[
					{ th: 'มาตรา 33', en: 'Section 33' },
					{ th: 'ลูกจ้างที่ทำงานกับนายจ้างซึ่งขึ้นทะเบียนไว้', en: 'Employees working for a registered employer' },
					{
						th: 'นายจ้างหักเงินสมทบจากค่าจ้างและนำส่งให้ทุกเดือน เป็นกลุ่มเดียวที่ได้รับความคุ้มครองกรณีว่างงาน',
						en: 'The employer deducts contributions from wages and remits them monthly. This is the only category with unemployment cover.'
					}
				],
				[
					{ th: 'มาตรา 39', en: 'Section 39' },
					{
						th: 'ผู้ที่เคยเป็นผู้ประกันตนมาตรา 33 แล้วออกจากงาน และสมัครส่งเงินสมทบต่อด้วยตนเอง',
						en: 'Former Section 33 members who left employment and chose to keep contributing voluntarily'
					},
					{
						th: 'ต้องส่งเงินสมทบเองทุกเดือน หากขาดส่งเกินเกณฑ์ที่กำหนดจะสิ้นสภาพผู้ประกันตน และไม่ได้รับความคุ้มครองกรณีว่างงาน',
						en: 'You pay every month yourself; missing payments beyond the permitted limit ends your insured status, and unemployment benefit is not included.'
					}
				],
				[
					{ th: 'มาตรา 40', en: 'Section 40' },
					{
						th: 'ผู้ประกอบอาชีพอิสระและแรงงานนอกระบบ ที่ไม่ได้เป็นลูกจ้างของนายจ้างรายใด',
						en: 'Self-employed people and informal-sector workers who are nobody’s employee'
					},
					{
						th: 'สมัครด้วยตนเองและเลือกทางเลือกจ่ายเงินสมทบได้หลายแบบ ความคุ้มครองต่างกันตามทางเลือกที่เลือก และไม่ได้รับสิทธิรักษาพยาบาลจากกองทุนประกันสังคม',
						en: 'You enrol yourself and pick from several contribution tiers. Cover varies by tier, and medical treatment is not provided through the Social Security Fund.'
					}
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'กองทุนคุ้มครองอะไรบ้าง', en: 'What the fund covers' }
		},
		{
			type: 'p',
			text: {
				th: 'กองทุนประกันสังคมออกแบบมาเพื่อรองรับเหตุการณ์ที่ทำให้คนทำงานขาดรายได้ หรือมีรายจ่ายก้อนใหญ่โดยไม่ทันตั้งตัว จึงแบ่งความคุ้มครองออกเป็นกรณีต่าง ๆ ดังนี้ ทั้งนี้ผู้ประกันตนแต่ละมาตราไม่ได้รับความคุ้มครองเท่ากัน ก่อนวางแผนอะไรจึงควรตรวจสอบว่ากรณีที่คุณสนใจครอบคลุมถึงมาตราของคุณด้วยหรือไม่',
				en: 'The fund is built around the events that interrupt a working person’s income or impose a sudden large expense, and its cover is organised into the categories below. The sections are not covered equally, so before you plan around any of them, check that the category you care about applies to yours.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'เจ็บป่วยและการรักษาพยาบาล — ผู้ประกันตนมาตรา 33 และมาตรา 39 ใช้สิทธิรักษาที่โรงพยาบาลตามสิทธิที่เลือกไว้ ส่วนมาตรา 40 จะได้รับเป็นเงินทดแทนการขาดรายได้ ไม่ใช่ค่ารักษาพยาบาล',
					en: 'Sickness and medical treatment — Sections 33 and 39 receive care at the hospital they registered with; Section 40 receives compensation for lost income rather than medical treatment.'
				},
				{
					th: 'คลอดบุตร — ค่าคลอดบุตรและเงินสงเคราะห์การหยุดงานสำหรับผู้ประกันตนหญิง โดยมีเงื่อนไขจำนวนเดือนที่ต้องส่งเงินสมทบมาก่อน',
					en: 'Maternity — childbirth costs and a payment covering time off work, subject to a minimum number of contribution months beforehand.'
				},
				{
					th: 'ทุพพลภาพ — ความช่วยเหลือเมื่อสูญเสียความสามารถในการทำงานจนไม่อาจประกอบอาชีพได้อย่างเดิม',
					en: 'Invalidity — support when a loss of capacity leaves you unable to work as you did before.'
				},
				{
					th: 'เสียชีวิต — ค่าทำศพและเงินสงเคราะห์แก่ผู้มีสิทธิที่ผู้ประกันตนระบุไว้ หรือแก่ทายาทตามกฎหมาย',
					en: 'Death — funeral costs and a grant to the beneficiary you nominated or to your legal heirs.'
				},
				{
					th: 'สงเคราะห์บุตร — เงินช่วยเหลือรายเดือนสำหรับบุตรที่อายุยังไม่เกินเกณฑ์ ครั้งละไม่เกินจำนวนบุตรที่กฎหมายกำหนด',
					en: 'Child allowance — a monthly payment for children below the qualifying age, up to the number of children the law allows.'
				},
				{
					th: 'ว่างงาน — เงินทดแทนระหว่างว่างงานสำหรับผู้ประกันตนมาตรา 33 ที่ออกจากงาน โดยต้องไปขึ้นทะเบียนผู้ว่างงานกับกรมการจัดหางานภายในเวลาที่กำหนดด้วย',
					en: 'Unemployment — income support for Section 33 members who leave a job, conditional on registering as unemployed with the Department of Employment within the required period.'
				},
				{
					th: 'ชราภาพ — จ่ายคืนเมื่ออายุครบเกณฑ์และสิ้นสุดความเป็นผู้ประกันตน โดยจ่ายเป็นบำเหน็จก้อนเดียวหรือบำนาญรายเดือน ขึ้นอยู่กับจำนวนเดือนที่ส่งเงินสมทบสะสมไว้',
					en: 'Old age — paid once you reach the qualifying age and cease to be insured, either as a single lump sum or as a monthly pension depending on how many months of contributions you accumulated.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'สิทธิประกันสังคมกับบัตรทอง ต้องใช้อันไหน', en: 'Social Security or the Gold Card — which one applies?' }
		},
		{
			type: 'p',
			text: {
				th: 'คนไทยทุกคนมีสิทธิรักษาพยาบาลจากรัฐอย่างใดอย่างหนึ่งเสมอ แต่ใช้ได้ทีละสิทธิ ไม่ใช่ใช้พร้อมกัน เมื่อคุณเข้าทำงานและกลายเป็นผู้ประกันตนมาตรา 33 สิทธิรักษาพยาบาลจะย้ายจากสิทธิหลักประกันสุขภาพแห่งชาติ ที่คนทั่วไปเรียกกันว่าบัตรทอง มาเป็นสิทธิประกันสังคม และผูกอยู่กับโรงพยาบาลที่คุณเลือกไว้เพียงแห่งเดียว ในทางกลับกัน ผู้ประกันตนมาตรา 40 ไม่ได้รับสิทธิรักษาพยาบาลจากกองทุนประกันสังคม จึงยังใช้สิทธิบัตรทองตามเดิม ความสับสนตรงนี้เป็นสาเหตุของค่าใช้จ่ายที่ไม่ควรต้องจ่ายในหลายกรณี',
				en: 'Every Thai citizen holds one form of state medical entitlement, and only one at a time. When you take a job and become insured under Section 33, that entitlement moves from the Universal Coverage scheme — the Gold Card — to Social Security, and it attaches to a single hospital of your choosing. Section 40 members, by contrast, receive no medical treatment from the fund and continue to use the Gold Card as before. Confusion on this point is behind a great many bills that need never have been paid.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ไปผิดโรงพยาบาล อาจต้องจ่ายเอง', en: 'The wrong hospital can cost you' },
			text: {
				th: 'หากเดินเข้าโรงพยาบาลที่ไม่ใช่โรงพยาบาลตามสิทธิของคุณ และไม่ใช่กรณีฉุกเฉิน คุณอาจต้องรับผิดชอบค่ารักษาเองทั้งหมด ปัญหานี้พบบ่อยกับคนที่เพิ่งเปลี่ยนงาน เพิ่งย้ายที่อยู่ หรือเพิ่งยื่นขอเปลี่ยนสถานพยาบาลแล้วจำไม่ได้ว่าระบบอัปเดตเป็นแห่งใด ก่อนไปพบแพทย์ทุกครั้งที่ไม่ใช่เหตุฉุกเฉิน ให้เข้าไปดูชื่อโรงพยาบาลตามสิทธิปัจจุบันในระบบให้แน่ใจก่อน',
				en: 'Turn up at a hospital that is not your registered one, outside a genuine emergency, and you may be liable for the entire bill. It catches people who have just changed jobs, moved house, or filed a hospital change and cannot remember which one the system now holds. For anything that is not an emergency, confirm your current registered hospital in the system first.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ตรวจสอบเงินสมทบ เรื่องเล็กที่กลายเป็นเรื่องใหญ่ตอนใช้สิทธิ', en: 'Checking contributions: the small habit that matters at claim time' }
		},
		{
			type: 'p',
			text: {
				th: 'เงินสมทบของผู้ประกันตนมาตรา 33 ถูกหักจากค่าจ้างและนำส่งโดยนายจ้าง หลายคนจึงคิดว่าไม่มีอะไรต้องตรวจสอบ แต่กรณีที่นายจ้างหักเงินแล้วนำส่งล่าช้าหรือนำส่งไม่ครบก็เกิดขึ้นได้จริง และมักมารู้ตอนที่จะใช้สิทธิ เพราะประโยชน์ทดแทนเกือบทุกกรณีผูกกับจำนวนเดือนที่ส่งเงินสมทบภายในช่วงเวลาที่กำหนด การเปิดดูประวัติการนำส่งสักปีละครั้งจึงคุ้มค่ากับเวลาไม่กี่นาที เช่นเดียวกับตัวเลขเดือนสะสมกรณีชราภาพ ซึ่งเป็นตัวชี้ว่าเมื่อถึงเวลาคุณจะได้รับเป็นเงินก้อนครั้งเดียวหรือบำนาญรายเดือนไปตลอดชีวิต หากพบว่าข้อมูลไม่ตรงกับความเป็นจริง ให้รวบรวมสลิปเงินเดือนหรือหลักฐานการจ่ายค่าจ้างแล้วติดต่อสำนักงานประกันสังคมพื้นที่เพื่อขอตรวจสอบ',
				en: 'Section 33 contributions are deducted from wages and remitted by the employer, so members often assume there is nothing to verify. Yet employers do remit late or incompletely, and the problem usually surfaces at the moment you try to claim, because almost every benefit depends on how many months were paid within a defined window. Reviewing the remittance history once a year is a few minutes well spent — as is the accumulated-months figure for the old-age benefit, which decides whether you eventually receive a lump sum or a monthly pension for life. If the record does not match reality, gather your payslips or other proof of wages and ask your area social security office to investigate.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมต้องมีหน้านี้', en: 'Why this page exists' }
		},
		{
			type: 'p',
			text: {
				th: 'ประกันสังคมเป็นสิทธิที่คนทำงานหลายสิบล้านคนถืออยู่ แต่กลับเป็นสิทธิที่คนรู้รายละเอียดน้อยที่สุดอย่างหนึ่ง ส่วนหนึ่งเพราะถูกอธิบายด้วยภาษากฎหมาย คนที่เพิ่งลาออกจากงานไม่ได้ค้นหาคำว่า “ผู้ประกันตนมาตรา 39” แต่ค้นหาว่า “ออกจากงานแล้วประกันสังคมยังใช้ได้ไหม” คนที่เพิ่งย้ายบ้านก็ไม่ได้ค้นหาชื่อระบบ แต่ค้นหาว่า “เปลี่ยนโรงพยาบาลประกันสังคม” หน้านี้จึงทำหน้าที่เป็นสะพานระหว่างคำที่คนใช้จริงกับระบบทางการ อธิบายว่ามาตราไหนคือใคร กองทุนคุ้มครองอะไร และต้องเข้าไปดูตรงไหน แล้วส่งต่อไปยังเว็บไซต์ของสำนักงานประกันสังคมโดยตรง อีกเหตุผลหนึ่งคือในการตรวจสอบของเราเมื่อวันที่ 27 สิงหาคม 2569 เว็บไซต์เข้าถึงได้ตามปกติ และไม่มีไฟล์ robots.txt เลย ซึ่งตามมาตรฐานถือว่าอนุญาตให้เครื่องมือค้นหาเก็บข้อมูลได้ทั้งหมด สิ่งที่ไม่ปรากฏในผลการค้นหาคือข้อมูลที่อยู่หลังการเข้าสู่ระบบ ซึ่งเป็นเรื่องปกติของระบบที่ต้องยืนยันตัวตนก่อนจึงจะเห็นข้อมูลของตัวเอง การมีหน้าอธิบายที่ค้นเจอได้ว่าข้างในมีอะไรจึงยังมีประโยชน์ ทั้งนี้ ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดสำนักงานประกันสังคม ไม่รับข้อมูลส่วนบุคคลและไม่รับชำระเงินใด ๆ ทั้งสิ้น',
				en: 'Social security is an entitlement tens of millions of working people hold and comparatively few understand in detail, partly because it is described in the language of statute. Someone who has just resigned does not search for “insured person under Section 39” — they search for “can I still use social security after leaving my job”. Someone who has just moved house does not search for a system name; they search for “change social security hospital”. This page bridges the words people actually use and the official service: which section is which, what the fund covers, and where to look — and then hands you to the Social Security Office’s own site. There is a second reason. In our check on 27 August 2026 the site was reachable and served no robots.txt at all, which by convention leaves crawling permitted throughout. What stays out of search results is whatever sits behind the sign-in, which is normal for a system that shows each person their own record, so a plainly findable explanation of what is inside still earns its place. ThaiGov.co is an independent directory, unaffiliated with the SSO; we collect no personal data and take no payments.'
			}
		}
	],
	crawl: {
		host: 'www.sso.go.th',
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
	priority: 92,
	updated: '2026-08-27'
};
