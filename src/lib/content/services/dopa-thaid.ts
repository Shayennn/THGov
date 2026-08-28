import type { Service } from '../types';

export const service: Service = {
	slug: 'dopa-thaid',
	name: {
		th: 'ThaID และทะเบียนราษฎรออนไลน์ — บัตรประชาชนและเอกสารทะเบียน',
		en: 'ThaID and Thai Civil Registration Online'
	},
	shortName: { th: 'ThaID และงานทะเบียนราษฎร', en: 'ThaID & Civil Registration' },
	url: 'https://www.bora.dopa.go.th/',
	altUrls: [
		{ label: { th: 'เว็บไซต์กรมการปกครอง', en: 'Department of Provincial Administration' }, url: 'https://www.dopa.go.th/' }
	],
	agency: 'dopa',
	categories: ['identity'],
	summary: {
		th: 'ThaID คือแอปยืนยันตัวตนดิจิทัลของกรมการปกครอง หน้านี้อธิบายวิธีลงทะเบียน งานทะเบียนราษฎรที่ทำออนไลน์ได้ และเรื่องที่ยังต้องไปสำนักงานเขตหรือที่ว่าการอำเภอ',
		en: 'ThaID is Thailand’s official digital identity app for citizens. How to enrol, what civil registration covers, and which tasks still need a district office visit.'
	},
	deck: {
		th: 'บัตรประชาชน ทะเบียนบ้าน และการยืนยันตัวตนดิจิทัลของคนไทย รวมไว้ที่เดียว พร้อมบอกว่าเรื่องไหนทำออนไลน์ได้ และเรื่องไหนต้องไปแสดงตนด้วยตัวเอง',
		en: 'Thailand’s ID card, house registration and digital identity in one place — including which tasks start online and which still need you at the counter.'
	},
	keywords: {
		th: [
			'ThaID',
			'ไทยดี แอป',
			'ลงทะเบียน ThaID',
			'บัตรประชาชนดิจิทัล',
			'ยืนยันตัวตนออนไลน์',
			'ทำบัตรประชาชน',
			'บัตรประชาชนหมดอายุ',
			'ทะเบียนบ้านออนไลน์',
			'คัดสำเนาทะเบียนบ้าน',
			'แจ้งเกิด แจ้งตาย',
			'จดทะเบียนสมรส',
			'เปลี่ยนชื่อนามสกุล',
			'สำนักงานเขต ที่ว่าการอำเภอ',
			'กรมการปกครอง'
		],
		en: [
			'ThaID',
			'Thailand digital ID app',
			'Thai ID card renewal',
			'Thai house registration',
			'civil registration Thailand',
			'marriage registration Thailand',
			'Department of Provincial Administration'
		]
	},
	features: [
		{
			icon: 'id',
			title: { th: 'บัตรประชาชนในรูปแบบดิจิทัล', en: 'Your ID card in digital form' },
			text: {
				th: 'ThaID แสดงข้อมูลบัตรประจำตัวประชาชนของคุณบนหน้าจอมือถือ ใช้กับบริการที่รองรับได้โดยไม่ต้องยื่นบัตรตัวจริงทุกครั้ง',
				en: 'ThaID shows your national ID card details on your phone, so services that accept it no longer need the physical card every time.'
			}
		},
		{
			icon: 'lock',
			title: { th: 'บัญชีเดียว เข้าได้หลายบริการภาครัฐ', en: 'One account, many public services' },
			text: {
				th: 'ใช้ ThaID เข้าสู่ระบบของหน่วยงานรัฐที่รองรับ แทนการสมัครสมาชิกและจำรหัสผ่านแยกทีละระบบ',
				en: 'Sign in to the agencies that support it with one ThaID account, instead of a separate login and password for each system.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'งานทะเบียนราษฎรอยู่ในความดูแลเดียวกัน', en: 'Civil registration under one roof' },
			text: {
				th: 'บัตรประชาชน ทะเบียนบ้าน การแจ้งเกิด แจ้งตาย การสมรส การหย่า และการเปลี่ยนชื่อ ล้วนเป็นงานของกรมการปกครองชุดเดียวกัน',
				en: 'ID cards, house registration, births, deaths, marriage, divorce and name changes all sit with the same department.'
			}
		},
		{
			icon: 'users',
			title: { th: 'รองรับเหตุการณ์สำคัญของชีวิต', en: 'Built around life events' },
			text: {
				th: 'เมื่อมีสมาชิกใหม่ในบ้าน มีการสมรส หรือมีการสูญเสีย งานทะเบียนคือขั้นตอนทางกฎหมายที่ต้องทำ และมีกรอบเวลาที่กฎหมายกำหนดไว้',
				en: 'A birth, a marriage or a death each carries a registration step the law requires, along with a filing window.'
			}
		},
		{
			icon: 'building',
			title: { th: 'รู้ล่วงหน้าว่าเรื่องไหนต้องไปเอง', en: 'Know in advance what needs a visit' },
			text: {
				th: 'บางเรื่องเตรียมล่วงหน้าทางออนไลน์ได้ แต่บางเรื่องต้องไปแสดงตนที่สำนักงานเขตหรือที่ว่าการอำเภอ การรู้ก่อนช่วยไม่ให้เสียเที่ยว',
				en: 'Some tasks can be prepared online; others still require you in person at a district office. Knowing which is which saves a wasted trip.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ระวังแอปปลอมและลิงก์หลอก', en: 'Fake apps and fake links' },
			text: {
				th: 'ตัวตนทางดิจิทัลเป็นเป้าหมายของมิจฉาชีพ ให้ติดตั้งแอปจากสโตร์ทางการเท่านั้น และอย่ากรอกรหัสผ่านในหน้าที่เปิดจากลิงก์ในข้อความ',
				en: 'A national digital identity is a prime target. Install only from the official app stores, and never enter credentials on a page you reached from a link in a message.'
			}
		}
	],
	steps: [
		{
			title: { th: 'เตรียมบัตรประจำตัวประชาชนตัวจริง', en: 'Have your physical ID card ready' },
			text: {
				th: 'ต้องใช้บัตรตัวจริงที่ยังไม่หมดอายุ เพราะขั้นตอนลงทะเบียนต้องอ่านข้อมูลจากหน้าบัตรและเทียบกับฐานข้อมูลทะเบียนราษฎร รูปถ่ายบัตรที่เก็บไว้ในเครื่องหรือสำเนาเอกสารใช้แทนไม่ได้',
				en: 'You need the physical, unexpired card: enrolment reads the details from it and matches them against the civil registration database. A photo saved on your phone or a photocopy will not do.'
			}
		},
		{
			title: { th: 'ดาวน์โหลดแอปจากสโตร์ทางการเท่านั้น', en: 'Install only from the official app stores' },
			text: {
				th: 'ค้นหาชื่อ ThaID ใน App Store หรือ Google Play แล้วตรวจสอบว่าผู้พัฒนาคือกรมการปกครอง อย่าติดตั้งจากไฟล์หรือลิงก์ที่มีคนส่งมาให้ทางแชท SMS หรืออีเมล ไม่ว่าข้อความนั้นจะดูน่าเชื่อถือเพียงใด',
				en: 'Search for ThaID on the App Store or Google Play and confirm the publisher is the Department of Provincial Administration. Never install from a file or link sent to you by chat, SMS or email, however convincing it looks.'
			}
		},
		{
			title: { th: 'เลือกวิธีลงทะเบียนที่เหมาะกับคุณ', en: 'Choose how to enrol' },
			text: {
				th: 'คุณลงทะเบียนเองในแอปได้ โดยถ่ายภาพบัตรประจำตัวประชาชนแล้วสแกนใบหน้าเพื่อเทียบกับข้อมูลทะเบียน หรือจะไปให้เจ้าหน้าที่ยืนยันตัวตนให้ที่สำนักงานเขตในกรุงเทพมหานคร หรือที่ว่าการอำเภอในจังหวัดอื่นก็ได้ ทั้งสองทางได้บัญชีแบบเดียวกัน',
				en: 'You can enrol yourself in the app by photographing your ID card and scanning your face to match the registration record, or have staff verify you at a district office — สำนักงานเขต in Bangkok, ที่ว่าการอำเภอ elsewhere. Either route produces the same account.'
			}
		},
		{
			title: { th: 'ตั้งรหัสผ่านให้แข็งแรงและเก็บเป็นความลับ', en: 'Set a strong passcode and keep it to yourself' },
			text: {
				th: 'ระบบจะให้ตั้งรหัสสำหรับเปิดแอปและอนุมัติการยืนยันตัวตน ควรตั้งรหัสที่ไม่ซ้ำกับรหัสอื่นที่คุณใช้อยู่ ไม่ใช้วันเกิดหรือเลขเรียงกัน และเปิดล็อกหน้าจอของเครื่องไว้ด้วย เพราะรหัสนี้คือกุญแจเข้าถึงตัวตนทางราชการของคุณ',
				en: 'The app asks you to set a passcode that opens it and approves each verification. Make it unique, avoid birthdays and runs of digits, and keep your device lock switched on — this passcode is the key to your official identity.'
			}
		},
		{
			title: { th: 'ทดลองใช้ ThaID เข้าสู่ระบบสักหนึ่งบริการ', en: 'Try signing in to one service' },
			text: {
				th: 'เมื่อลงทะเบียนเสร็จ ให้ลองใช้ ThaID เข้าสู่ระบบกับบริการภาครัฐที่รองรับสักหนึ่งบริการ เพื่อยืนยันว่าบัญชีใช้งานได้จริง และคุ้นเคยกับหน้าจอขออนุญาตไว้ก่อน จะได้ไม่ต้องมาลองครั้งแรกในวันที่รีบ',
				en: 'Once enrolled, sign in to one supported government service to confirm the account really works and to get used to the consent screen — better than meeting it for the first time on a day you are in a hurry.'
			}
		},
		{
			title: { th: 'ตรวจสอบก่อนเดินทางไปสำนักทะเบียน', en: 'Check before you travel to a registration office' },
			text: {
				th: 'เรื่องที่ยังต้องทำที่เคาน์เตอร์ เช่น การทำบัตรใหม่ การจดทะเบียนสมรส หรือการแจ้งเกิด ให้ตรวจสอบเอกสารที่ต้องใช้ ท้องที่ที่ต้องยื่น ค่าธรรมเนียมปัจจุบัน และเวลาทำการจากเว็บไซต์ทางการหรือสอบถามสำนักทะเบียนในพื้นที่ก่อน จะได้ไม่ต้องเดินทางซ้ำ',
				en: 'For anything still done at the counter — a new card, a marriage registration, a birth notification — check the required documents, which office has jurisdiction, the current fees and the opening hours on the official site or with your local registrar first. It saves a second trip.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ThaID ใช้แทนบัตรประชาชนตัวจริงได้เลยหรือไม่', en: 'Can ThaID replace my physical ID card?' },
			a: {
				th: 'ThaID แสดงข้อมูลบัตรประจำตัวประชาชนในรูปแบบดิจิทัลได้ และหน่วยงานที่รองรับก็ยอมรับแทนการยื่นบัตร แต่การยอมรับยังไม่ครอบคลุมทุกที่ และธุรกรรมที่ต้องเก็บลายนิ้วมือหรือลงนามต่อหน้าเจ้าหน้าที่ยังต้องใช้บัตรตัวจริง ในทางปฏิบัติจึงควรพกบัตรจริงติดตัวไว้ และถามปลายทางก่อนถ้าไม่แน่ใจ',
				en: 'ThaID can display your ID card details digitally, and services that support it accept that in place of handing over the card. Acceptance is not yet universal, and anything requiring fingerprints or a signature in front of an official still needs the real card. In practice, keep carrying it and ask ahead if you are unsure.'
			}
		},
		{
			q: { th: 'ลงทะเบียน ThaID ต้องไปที่อำเภอไหม', en: 'Do I have to go to a district office to enrol?' },
			a: {
				th: 'ไม่จำเป็นเสมอไป คุณลงทะเบียนด้วยตนเองผ่านแอปได้ โดยถ่ายภาพบัตรประจำตัวประชาชนและสแกนใบหน้าเพื่อเทียบกับข้อมูลในฐานทะเบียนราษฎร แต่ถ้าขั้นตอนนี้ไม่ผ่าน หรือคุณอยากให้เจ้าหน้าที่ยืนยันตัวตนให้ ก็ไปที่สำนักงานเขตในกรุงเทพมหานครหรือที่ว่าการอำเภอในจังหวัดอื่นได้ โดยนำบัตรตัวจริงและมือถือที่ติดตั้งแอปไว้แล้วไปด้วย',
				en: 'Not necessarily. You can enrol yourself in the app by photographing your ID card and scanning your face to match the civil registration record. If that fails, or you would rather have an official do it, go to a district office — สำนักงานเขต in Bangkok, ที่ว่าการอำเภอ elsewhere — taking the physical card and the phone with the app already installed.'
			}
		},
		{
			q: { th: 'สแกนใบหน้าหรือถ่ายบัตรไม่ผ่านสักที ทำอย่างไรดี', en: 'The face scan or card photo keeps failing — what now?' },
			a: {
				th: 'ส่วนใหญ่เกิดจากแสงน้อยเกินไป หรือแสงสะท้อนจนตัวหนังสือบนบัตรอ่านไม่ออก ลองทำใหม่ในที่ที่แสงสม่ำเสมอและไม่ย้อนแสง ถอดแว่นและหน้ากากออก แล้วขยับให้ใบหน้าอยู่กลางกรอบพอดี หากบัตรเก่าจนผิวลอกหรือลองหลายครั้งแล้วยังไม่ผ่าน ให้ไปยืนยันตัวตนกับเจ้าหน้าที่ที่สำนักทะเบียนแทน ซึ่งเป็นเส้นทางปกติที่รองรับกรณีแบบนี้อยู่แล้ว',
				en: 'Usually it is the light — too little of it, or a reflection that makes the printing unreadable. Retry in even light with nothing bright behind you, take off glasses and any mask, and centre your face in the frame. If the card is worn, or the attempts keep failing, go and have staff verify you at a registration office instead; that route exists precisely for these cases.'
			}
		},
		{
			q: { th: 'เปลี่ยนมือถือใหม่หรือทำเครื่องหาย ข้อมูล ThaID จะเป็นอย่างไร', en: 'What happens to ThaID if I change or lose my phone?' },
			a: {
				th: 'บัญชี ThaID ผูกกับตัวคุณ ไม่ได้ผูกกับเครื่องอย่างถาวร เมื่อเปลี่ยนเครื่องคุณต้องติดตั้งแอปบนเครื่องใหม่และยืนยันตัวตนอีกครั้งตามขั้นตอนที่แอปกำหนด หากทำเครื่องหาย ให้จัดการเครื่องตามปกติ เช่น ล็อกหรือลบข้อมูลจากระยะไกล และอย่าบอกรหัสผ่านหรือรหัสยืนยันกับใครแม้ผู้นั้นจะอ้างว่าเป็นเจ้าหน้าที่ หากไม่แน่ใจให้ติดต่อสำนักทะเบียนในพื้นที่โดยตรง',
				en: 'The account belongs to you, not permanently to one handset. On a new phone you install the app again and repeat the verification it asks for. If the phone is lost, treat it like any lost device — lock or wipe it remotely — and never give your passcode or a verification code to anyone, including someone claiming to be an official. When in doubt, contact your local registration office directly.'
			}
		},
		{
			q: { th: 'เรื่องทะเบียนอะไรบ้างที่ยังต้องไปสำนักงานด้วยตัวเอง', en: 'Which registration tasks still require me in person?' },
			a: {
				th: 'งานที่ต้องพิสูจน์ตัวบุคคลต่อหน้าเจ้าหน้าที่ยังต้องไปเอง เช่น การทำบัตรประจำตัวประชาชนซึ่งต้องถ่ายรูปและเก็บลายนิ้วมือ การจดทะเบียนสมรสและการหย่าที่คู่กรณีต้องมาแสดงตน รวมถึงการแจ้งเกิดและแจ้งตายที่ต้องยื่นต่อนายทะเบียนท้องที่ ส่วนการเตรียมเอกสาร การตรวจสอบข้อมูลของตัวเอง และการนัดหมายในบางพื้นที่ ทำล่วงหน้าได้ ทำให้เวลาที่ต้องอยู่หน้าเคาน์เตอร์สั้นลงมาก',
				en: 'Anything that proves who you are in front of an official: getting an ID card, which needs a photograph and fingerprints; marriage and divorce registration, where both parties appear; and birth and death notifications, filed with the local registrar. Preparing documents, checking your own records and — in some areas — booking a slot can be done beforehand, which shortens the time at the counter considerably.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่ากำลังใช้ ThaID ของจริง', en: 'How do I know I am using the genuine ThaID?' },
			a: {
				th: 'ติดตั้งแอปจาก App Store หรือ Google Play เท่านั้น และตรวจสอบว่าผู้พัฒนาคือกรมการปกครอง อย่าติดตั้งไฟล์ที่มีคนส่งมาให้ทางแชทหรือ SMS โดยเด็ดขาด หน่วยงานรัฐไม่ส่งลิงก์ให้คุณกรอกรหัสผ่านหรือรหัสยืนยันตัวตน ถ้าได้รับข้อความที่อ้างว่าบัญชีจะถูกระงับและเร่งให้กดลิงก์ทันที ให้ถือว่าเป็นการหลอกลวงไว้ก่อน แล้วเปิดแอปหรือพิมพ์ที่อยู่เว็บไซต์ทางการด้วยตัวเองเพื่อตรวจสอบ',
				en: 'Install only from the App Store or Google Play, and check that the publisher is the Department of Provincial Administration. Never install a file someone sent you by chat or SMS. Government agencies do not send links asking you to type a password or a verification code, so treat any message warning that your account will be suspended unless you tap now as a scam, and check by opening the app or typing the official address yourself.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ThaID และงานทะเบียนราษฎรคืออะไร', en: 'What ThaID and civil registration are' }
		},
		{
			type: 'p',
			text: {
				th: 'ทะเบียนราษฎรคือระบบที่บันทึกสถานะทางกฎหมายของบุคคลตั้งแต่เกิดจนเสียชีวิต ทั้งการมีชื่ออยู่ในทะเบียนบ้าน การมีบัตรประจำตัวประชาชน การสมรส การหย่า และการเปลี่ยนชื่อ ระบบนี้อยู่ในความรับผิดชอบของกรมการปกครอง กระทรวงมหาดไทย โดยมีสำนักบริหารการทะเบียนเป็นหน่วยงานกลางที่ดูแลฐานข้อมูลและมาตรฐานการให้บริการของสำนักทะเบียนทั่วประเทศ',
				en: 'Civil registration is the system that records a person’s legal status from birth to death: the entry in a house registration record, the national ID card, marriage, divorce and changes of name. It belongs to the Department of Provincial Administration under the Ministry of Interior, with the Bureau of Registration Administration keeping the central database and setting the service standards that registration offices across the country work to.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ThaID คือแอปพลิเคชันพิสูจน์และยืนยันตัวตนทางดิจิทัลที่กรมการปกครองพัฒนาขึ้นสำหรับผู้มีสัญชาติไทยที่มีบัตรประจำตัวประชาชน เมื่อลงทะเบียนแล้วคุณจะมีบัญชีดิจิทัลที่ผูกกับข้อมูลทะเบียนของตัวเอง ใช้แสดงข้อมูลบัตรประชาชนในรูปแบบดิจิทัล และใช้เข้าสู่ระบบบริการภาครัฐที่รองรับได้โดยไม่ต้องสมัครสมาชิกใหม่ทีละหน่วยงาน ส่วนผู้ที่ไม่มีบัตรประชาชนไทยยังต้องใช้ช่องทางยืนยันตัวตนอื่นตามที่แต่ละหน่วยงานกำหนด',
				en: 'ThaID is the digital identity app the department built for Thai nationals who hold a national ID card. Once you enrol, you have a digital account tied to your own registration record: it presents your ID card details in digital form and signs you in to the public services that support it, without a separate account for every agency. Anyone without a Thai ID card still needs whatever alternative verification each agency accepts.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'สิ่งที่ทำให้ ThaID ต่างจากแอปราชการทั่วไปคือมันไม่ได้เป็นบริการปลายทางในตัวเอง แต่ทำหน้าที่เป็นกุญแจที่ระบบอื่นเรียกใช้ ทุกวันนี้บริการภาครัฐจำนวนมากขึ้นเรื่อย ๆ เปิดให้เข้าสู่ระบบด้วย ThaID และผู้ให้บริการเอกชนบางส่วน เช่น ธนาคาร ผู้ให้บริการโทรศัพท์มือถือ และโรงพยาบาล ก็เริ่มรับการยืนยันตัวตนช่องทางนี้เช่นกัน แต่ละแห่งเปิดรับไม่พร้อมกัน จึงควรสอบถามปลายทางก่อนวางแผนว่าจะใช้ ThaID เพียงอย่างเดียว',
				en: 'What sets ThaID apart from most government apps is that it is not a destination in itself — it is a key that other systems call on. A growing number of public services now offer sign-in with ThaID, and parts of the private sector, including banks, mobile operators and hospitals, have begun accepting the same verification. Adoption is uneven, so ask a particular provider before you plan on carrying nothing else.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ThaID ใช้ทำอะไรได้บ้าง', en: 'What you can do with ThaID' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'แสดงข้อมูลบัตรประจำตัวประชาชนในรูปแบบดิจิทัลบนมือถือ ในสถานการณ์ที่ปลายทางรองรับ',
					en: 'Present your national ID card details digitally on your phone, wherever the other side accepts it.'
				},
				{
					th: 'เข้าสู่ระบบบริการภาครัฐที่รองรับ โดยไม่ต้องจำรหัสผ่านแยกของแต่ละหน่วยงาน',
					en: 'Sign in to supported government services without keeping a separate password for every agency.'
				},
				{
					th: 'ยืนยันตัวตนสำหรับธุรกรรมออนไลน์ที่ต้องรู้แน่ชัดว่าคุณเป็นใคร ไม่ใช่แค่การกรอกเลขบัตร',
					en: 'Prove who you are for online transactions that need real assurance, not merely a typed ID number.'
				},
				{
					th: 'ใช้ยืนยันตัวตนกับผู้ให้บริการเอกชนที่เข้าร่วม เช่น บางบริการของธนาคารและผู้ให้บริการมือถือ',
					en: 'Verify yourself with participating private providers, including some bank and mobile-operator services.'
				},
				{
					th: 'ลดการถ่ายสำเนาบัตรและเอกสารทะเบียนในบริการที่ยอมรับข้อมูลดิจิทัลแล้ว',
					en: 'Cut down on photocopied cards and registration papers at services that already take digital records.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ลงทะเบียน ThaID ได้สองทาง', en: 'Two ways to enrol' }
		},
		{
			type: 'p',
			text: {
				th: 'การลงทะเบียนมีสองเส้นทางหลัก ทางแรกคือทำเองผ่านแอป โดยถ่ายภาพบัตรประจำตัวประชาชนแล้วสแกนใบหน้าเพื่อเทียบกับข้อมูลในฐานทะเบียน ทางที่สองคือไปยืนยันตัวตนกับเจ้าหน้าที่ที่สำนักงานเขตในกรุงเทพมหานคร หรือที่ว่าการอำเภอในจังหวัดอื่น ซึ่งเหมาะกับคนที่ทำเองแล้วไม่ผ่านหรือไม่ถนัดใช้แอป ทั้งสองทางให้ผลเหมือนกัน ต่างกันเพียงว่าใครเป็นผู้ตรวจสอบว่าคุณคือเจ้าของบัตรจริง',
				en: 'There are two main routes. The first is doing it yourself in the app: photograph your ID card, then scan your face so it can be matched against the registration record. The second is having staff verify you at a district office — สำนักงานเขต in Bangkok, ที่ว่าการอำเภอ in other provinces — which suits anyone whose self-enrolment failed or who would rather not wrestle with the app. Both end in the same account; they differ only in who confirms you are the cardholder.'
			}
		},
		{
			type: 'table',
			caption: { th: 'เปรียบเทียบสองวิธีลงทะเบียน', en: 'Comparing the two enrolment routes' },
			head: [
				{ th: 'วิธีลงทะเบียน', en: 'Route' },
				{ th: 'เหมาะกับ', en: 'Suits' },
				{ th: 'สิ่งที่ต้องเตรียม', en: 'What to bring' }
			],
			rows: [
				[
					{ th: 'ลงทะเบียนเองผ่านแอป', en: 'Self-enrolment in the app' },
					{ th: 'คนที่บัตรยังอยู่ในสภาพดีและมือถือถ่ายภาพได้ชัด', en: 'A card in good condition and a phone with a decent camera' },
					{ th: 'บัตรประชาชนตัวจริง อินเทอร์เน็ต และมุมที่มีแสงพอ', en: 'The physical card, a connection and somewhere well lit' }
				],
				[
					{ th: 'ยืนยันตัวตนกับเจ้าหน้าที่', en: 'Verification by an official' },
					{ th: 'คนที่ลงทะเบียนเองไม่ผ่าน หรืออยากให้เจ้าหน้าที่ช่วยดูให้', en: 'Anyone whose self-enrolment failed, or who wants help' },
					{ th: 'บัตรประชาชนตัวจริง และมือถือที่ติดตั้งแอปไว้แล้ว', en: 'The physical card and a phone with the app installed' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'งานทะเบียนราษฎรครอบคลุมเรื่องอะไร', en: 'What civil registration covers' }
		},
		{
			type: 'table',
			caption: {
				th: 'งานทะเบียนหลัก สิ่งที่เตรียมล่วงหน้าได้ และเรื่องที่ต้องไปแสดงตน โดยรายละเอียดอาจต่างกันตามพื้นที่',
				en: 'The main registration tasks, what you can prepare in advance and what needs you in person — local practice varies'
			},
			head: [
				{ th: 'เรื่อง', en: 'Task' },
				{ th: 'ทำล่วงหน้าได้', en: 'You can prepare' },
				{ th: 'ต้องไปแสดงตนหรือไม่', en: 'In person?' }
			],
			rows: [
				[
					{ th: 'บัตรประจำตัวประชาชน ทำใหม่ หมดอายุ หาย หรือชำรุด', en: 'ID card — first issue, renewal, loss or damage' },
					{ th: 'ตรวจสอบวันหมดอายุบนบัตรและรายการเอกสารที่ต้องใช้', en: 'Check the expiry date on the card and the document list' },
					{ th: 'ต้องไปเอง เพราะต้องถ่ายรูปและเก็บลายนิ้วมือ', en: 'Yes — a photograph and fingerprints are taken' }
				],
				[
					{ th: 'ทะเบียนบ้าน ย้ายเข้า ย้ายออก ขอเลขที่บ้าน', en: 'House registration — moving in or out, new address number' },
					{ th: 'เตรียมเอกสารและตรวจสอบว่าต้องใช้ความยินยอมของเจ้าบ้านหรือไม่', en: 'Gather documents and check whether the householder must consent' },
					{ th: 'ยื่นต่อนายทะเบียนของท้องที่ที่เกี่ยวข้อง', en: 'Filed with the registrar for the relevant locality' }
				],
				[
					{ th: 'แจ้งเกิดและแจ้งตาย', en: 'Birth and death notification' },
					{ th: 'ตรวจสอบว่าใครเป็นผู้มีหน้าที่แจ้ง และต้องใช้หลักฐานใด', en: 'Check who is required to report it and with what evidence' },
					{ th: 'ต้องแจ้งต่อนายทะเบียนท้องที่ภายในกรอบเวลาที่กฎหมายกำหนด', en: 'Yes, with the local registrar inside the window the law sets' }
				],
				[
					{ th: 'ทะเบียนสมรสและทะเบียนหย่า', en: 'Marriage and divorce registration' },
					{ th: 'เตรียมเอกสารและนัดหมายพยานล่วงหน้า', en: 'Prepare documents and line up witnesses beforehand' },
					{ th: 'คู่กรณีต้องมาแสดงตนต่อนายทะเบียน', en: 'Yes — both parties appear before the registrar' }
				],
				[
					{ th: 'เปลี่ยนชื่อตัวและชื่อสกุล', en: 'Changing a given name or surname' },
					{ th: 'ตรวจสอบหลักเกณฑ์การตั้งชื่อและเอกสารประกอบ', en: 'Check the naming rules and supporting papers' },
					{ th: 'โดยทั่วไปยื่นที่สำนักทะเบียนท้องที่ที่คุณมีชื่ออยู่ในทะเบียนบ้าน', en: 'Generally at the office where your house registration is held' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ก่อนไปสำนักงานเขตหรือที่ว่าการอำเภอ', en: 'Before you go to the district office' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ตรวจสอบก่อนว่าเรื่องของคุณต้องยื่นที่ท้องที่ใด บางเรื่องทำต่างพื้นที่ได้ บางเรื่องต้องทำที่ท้องที่ตามทะเบียนบ้าน',
					en: 'Check which office has jurisdiction. Some tasks can be done anywhere; others belong to the locality where your house registration sits.'
				},
				{
					th: 'นำบัตรประจำตัวประชาชนตัวจริงไปเสมอ พร้อมเอกสารต้นฉบับและสำเนาตามที่สำนักทะเบียนแจ้ง',
					en: 'Always take the physical ID card, plus originals and copies of whatever the office has told you to bring.'
				},
				{
					th: 'หากให้คนอื่นไปแทน ต้องถามล่วงหน้าว่าเรื่องนั้นมอบอำนาจได้หรือไม่ และใช้หนังสือมอบอำนาจแบบใด',
					en: 'If someone is going for you, ask first whether that task can be delegated at all and what form of authorisation is needed.'
				},
				{
					th: 'ค่าธรรมเนียม ระยะเวลาดำเนินการ และระบบนัดหมายต่างกันตามประเภทงานและพื้นที่ ให้ตรวจสอบจากเว็บไซต์ทางการหรือสอบถามเจ้าหน้าที่ก่อนเดินทาง',
					en: 'Fees, processing times and booking arrangements differ by task and by office — check the official site or ask staff before you set out.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'ตัวตนดิจิทัลคือเป้าหมายชั้นดีของมิจฉาชีพ', en: 'A digital identity is a prime target' },
			text: {
				th: 'เมื่อบัญชีเดียวเปิดประตูเข้าสู่บริการภาครัฐได้หลายอย่าง มิจฉาชีพย่อมสนใจ รูปแบบที่พบคือแอปเลียนแบบนอกสโตร์ทางการ และข้อความที่อ้างว่าบัญชีจะถูกระงับพร้อมแนบลิงก์ให้กรอกรหัส ให้ยึดหลักง่าย ๆ สองข้อ คือ ติดตั้งจาก App Store หรือ Google Play เท่านั้น และไม่กรอกรหัสผ่านหรือรหัสยืนยันในหน้าที่เปิดจากลิงก์ในข้อความ ไม่ว่าจะอ้างว่ามาจากใคร',
				en: 'When one account opens the door to many public services, criminals take an interest. The usual forms are lookalike apps distributed outside the official stores, and messages warning that your account is about to be suspended, with a link to enter your credentials. Two rules cover almost all of it: install only from the App Store or Google Play, and never type a password or verification code into a page you opened from a link in a message, whoever it claims to be from.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงต้องมีอยู่', en: 'Why this page needs to exist' }
		},
		{
			type: 'p',
			text: {
				th: 'งานทะเบียนราษฎรเป็นบริการที่คนไทยทุกคนต้องใช้อย่างน้อยครั้งหนึ่งในชีวิต แต่แทบไม่มีใครค้นหาด้วยชื่อหน่วยงาน คนพิมพ์ตามเหตุการณ์ที่เพิ่งเกิดกับตัวเอง เช่น บัตรประชาชนหมดอายุทำที่ไหน หรือลงทะเบียน ThaID ไม่ผ่านทำอย่างไร ขณะที่ส่วนซึ่งมีประโยชน์ที่สุดของระบบกลับอยู่หลังการเข้าสู่ระบบ เครื่องมือค้นหาจึงเห็นเพียงหน้าเปลือกนอก ยิ่งไปกว่านั้น เมื่อบัตรประชาชนกลายเป็นบัญชีดิจิทัล มันก็กลายเป็นของที่มีค่าพอให้ขโมย การมีหน้าที่ระบุจุดตั้งต้นทางการไว้ชัดเจนเพียงจุดเดียวจึงช่วยลดโอกาสที่คนจะค้นแล้วไปเจอแอปเลียนแบบหรือหน้าเข้าสู่ระบบปลอมก่อน ThaiGov.co เป็นสารบบอิสระ ไม่ได้สังกัดกรมการปกครอง ไม่รับข้อมูลส่วนบุคคล และไม่มีขั้นตอนใดให้กรอกรหัส',
				en: 'Civil registration is a service every Thai person needs at least once, yet almost nobody searches for it by the name of the agency. People type whatever just happened to them — where to renew an expired ID card, why ThaID enrolment keeps failing — while the most useful parts of the system sit behind a sign-in, so search engines see only the outer shell. And the moment an ID card becomes a digital account, it becomes worth stealing: a page that names one official starting point, plainly, lowers the odds that a search ends at a lookalike app or a counterfeit login screen. ThaiGov.co is an independent directory — not part of the Department of Provincial Administration, collecting no personal data, and asking you for no credentials at any point.'
			}
		}
	],
	crawl: {
		host: 'www.bora.dopa.go.th',
		verdict: 'none',
		kind: 'no-robots',
		status: 200,
		snippet: 'GET /robots.txt  ->  HTTP 404 Not Found',
		checkedAt: '2026-08-27',
		note: {
			th: 'เว็บไซต์นี้ไม่มีไฟล์ robots.txt ซึ่งตามมาตรฐานถือว่าอนุญาตให้เครื่องมือค้นหาเก็บข้อมูลได้ทั้งหมด แต่เนื้อหาที่อยู่หลังการเข้าสู่ระบบยังคงไม่ปรากฏในผลการค้นหาอยู่ดี',
			en: 'The site serves no robots.txt, which by convention means crawling is permitted throughout. Content behind a sign-in still never appears in search results.'
		}
	},
	priority: 90,
	updated: '2026-08-27'
};
