import type { Service } from '../types';

export const service: Service = {
	slug: 'ocsc-civil-service',
	name: {
		th: 'สำนักงาน ก.พ. — สอบภาค ก. ทุนรัฐบาล และการเข้ารับราชการ',
		en: 'Thai Office of the Civil Service Commission — Entrance Exams and Scholarships'
	},
	shortName: { th: 'สอบ ก.พ. ภาค ก.', en: 'OCSC Exams and Scholarships' },
	url: 'https://www.ocsc.go.th/',
	agency: 'ocsc',
	categories: ['identity'],
	summary: {
		th: 'สอบ ก.พ. ภาค ก. คืออะไร ต่างจากภาค ข. และภาค ค. ที่ส่วนราชการจัดเองอย่างไร รวมเรื่องทุนรัฐบาลและเส้นทางเข้ารับราชการ พร้อมลิงก์ไปเว็บไซต์ทางการ',
		en: 'What the OCSC Part A aptitude exam is, how it differs from the Part B and Part C stages departments run themselves, and how government scholarships work.'
	},
	deck: {
		th: 'สำนักงาน ก.พ. เป็นหน่วยงานกลางด้านกำลังคนภาครัฐ และเป็นผู้จัดสอบภาค ก. ซึ่งเป็นด่านแรกของคนที่อยากเข้ารับราชการพลเรือน',
		en: 'The OCSC is Thailand’s central personnel agency for the civil service, and it runs Part A — the first gate for anyone who wants a government career.'
	},
	keywords: {
		th: [
			'สอบ ก.พ.',
			'สอบภาค ก.',
			'สมัครสอบภาค ก. ออนไลน์',
			'ภาค ก ภาค ข ภาค ค ต่างกันอย่างไร',
			'หนังสือรับรองผลการสอบผ่านภาค ก.',
			'สอบราชการ',
			'สมัครงานราชการ',
			'สำนักงาน ก.พ.',
			'ทุนรัฐบาล ก.พ.',
			'ทุนเล่าเรียนหลวง',
			'สอบ ก.พ. e-Exam',
			'เตรียมสอบ ก.พ.',
			'ประกาศผลสอบภาค ก.'
		],
		en: [
			'OCSC exam Thailand',
			'Thai civil service exam',
			'Part A aptitude test Thailand',
			'Office of the Civil Service Commission',
			'Thai government scholarship',
			'work for the Thai government',
			'ocsc.go.th'
		]
	},
	features: [
		{
			icon: 'doc',
			title: { th: 'ภาค ก. คือด่านแรกของสายราชการพลเรือน', en: 'Part A is the first gate' },
			text: {
				th: 'การสอบเพื่อวัดความรู้ความสามารถทั่วไปที่สำนักงาน ก.พ. จัดขึ้น เป็นเงื่อนไขที่ส่วนราชการส่วนใหญ่กำหนดไว้ก่อนรับสมัครสอบในขั้นถัดไป',
				en: 'The general aptitude examination run by the OCSC is the prerequisite most departments set before you may sit their own selection stages.'
			}
		},
		{
			icon: 'book',
			title: { th: 'วัดความสามารถทั่วไป ไม่ใช่ความรู้เฉพาะตำแหน่ง', en: 'General ability, not job knowledge' },
			text: {
				th: 'ข้อสอบมุ่งวัดการคิดวิเคราะห์ การใช้ภาษาไทย และภาษาอังกฤษ ไม่ได้ถามเนื้อหาวิชาชีพของตำแหน่งที่คุณจะสมัคร',
				en: 'The paper tests reasoning, Thai language use and English — not the professional subject matter of the post you are aiming for.'
			}
		},
		{
			icon: 'id',
			title: { th: 'ได้หนังสือรับรองไว้ยื่นกับหลายหน่วยงาน', en: 'A certificate you carry between agencies' },
			text: {
				th: 'ผู้สอบผ่านจะได้หนังสือรับรองผลการสอบผ่านภาค ก. ซึ่งใช้เป็นหลักฐานยื่นสมัครกับส่วนราชการต่าง ๆ ได้ ไม่ต้องสอบภาค ก. ใหม่ทุกครั้ง',
				en: 'Passing produces a certificate you attach to applications at any number of departments — you do not resit Part A for each one.'
			}
		},
		{
			icon: 'users',
			title: { th: 'แยกให้ชัดว่าอะไร ก.พ. จัด อะไรกรมจัด', en: 'A clear split between OCSC and departments' },
			text: {
				th: 'สำนักงาน ก.พ. ดูแลภาค ก. และมาตรฐานกลาง ส่วนการเปิดรับตำแหน่ง การสอบความรู้เฉพาะตำแหน่ง และการสัมภาษณ์ เป็นงานของแต่ละกรม',
				en: 'The OCSC owns Part A and the central standards; advertising posts, testing subject knowledge and interviewing belong to each department.'
			}
		},
		{
			icon: 'globe',
			title: { th: 'ทุนรัฐบาลทั้งในและต่างประเทศ', en: 'Scholarships at home and abroad' },
			text: {
				th: 'สำนักงาน ก.พ. ดูแลการคัดเลือกและการจัดการทุนรัฐบาลหลายประเภท ทั้งทุนสำหรับนักเรียน นักศึกษา และทุนพัฒนาข้าราชการที่รับราชการอยู่แล้ว',
				en: 'The OCSC selects and administers several families of government scholarship — for school leavers, for students, and for serving officials.'
			}
		},
		{
			icon: 'clock',
			title: { th: 'ทุกอย่างผูกกับประกาศของแต่ละปี', en: 'Everything follows the year’s announcement' },
			text: {
				th: 'กำหนดการรับสมัคร ค่าธรรมเนียม รูปแบบการสอบ และเกณฑ์ผ่าน เปลี่ยนได้ในแต่ละรอบ จึงต้องอ่านประกาศฉบับปัจจุบันเสมอ',
				en: 'Windows, fees, exam formats and pass criteria can change each round, so the current announcement is the only source that counts.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ตรวจแหล่งข้อมูลก่อนจ่ายเงิน', en: 'Check the source before paying' },
			text: {
				th: 'มีเว็บไซต์และบัญชีโซเชียลจำนวนมากที่ทำหน้าตาคล้ายหน่วยงาน แล้วขายคอร์สหรือแนวข้อสอบ ควรยืนยันข้อมูลกับช่องทางทางการก่อนเสมอ',
				en: 'Many sites and social accounts dress themselves up as official while selling courses or “exam leaks”. Confirm anything against the official channel first.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ตรวจก่อนว่าเส้นทางของคุณต้องใช้ภาค ก. หรือไม่', en: 'Check whether your route needs Part A at all' },
			text: {
				th: 'ภาค ก. ใช้กับการเข้าเป็นข้าราชการพลเรือนสามัญเป็นหลัก สายอาชีพอื่นในภาครัฐ เช่น ครู ตำรวจ ทหาร ข้าราชการท้องถิ่น หรือการเป็นพนักงานราชการ มีระบบคัดเลือกของตัวเองแยกต่างหาก อ่านประกาศของตำแหน่งที่คุณสนใจก่อนเป็นอันดับแรก',
				en: 'Part A applies mainly to the ordinary civil service. Teaching, police, military, local-government and contract government-employee routes run their own selection systems. Read the announcement for the post you actually want before anything else.'
			}
		},
		{
			title: { th: 'ติดตามประกาศรับสมัครสอบภาค ก. ประจำปี', en: 'Watch for the year’s Part A announcement' },
			text: {
				th: 'สำนักงาน ก.พ. ประกาศรับสมัครเป็นรอบ พร้อมระบุระดับวุฒิที่เปิดรับ รูปแบบการสอบ ศูนย์สอบ ช่วงเวลารับสมัคร และค่าธรรมเนียม วันที่และตัวเลขทั้งหมดให้ยึดตามประกาศฉบับนั้น ไม่ใช่ตามที่เพจอื่นสรุปต่อ',
				en: 'The OCSC opens registration in announced rounds, naming the qualification levels, exam format, test centres, window and fee. Take every date and figure from that announcement, not from a page summarising it second-hand.'
			}
		},
		{
			title: { th: 'สมัครออนไลน์ภายในช่วงเวลาที่กำหนด', en: 'Register online inside the window' },
			text: {
				th: 'กรอกข้อมูลส่วนตัวและวุฒิการศึกษาให้ตรงกับหลักฐานจริง เพราะบางรายการแก้ไขไม่ได้หลังยืนยัน ระบบรับสมัครเป็นระบบทางการที่อยู่ภายใต้โดเมนของสำนักงาน ก.พ. และประกาศจะระบุที่อยู่ที่ถูกต้องไว้',
				en: 'Enter your personal details and qualification exactly as your documents show them — some fields cannot be edited after you confirm. The registration system sits under the OCSC’s own domain, and the announcement names the correct address.'
			}
		},
		{
			title: { th: 'ชำระเงินและเก็บหลักฐานการสมัคร', en: 'Pay, then keep the paperwork' },
			text: {
				th: 'ชำระค่าธรรมเนียมตามช่องทางและกำหนดเวลาที่ประกาศระบุไว้ การสมัครจะสมบูรณ์เมื่อชำระเงินแล้วเท่านั้น จากนั้นเก็บเลขที่นั่งสอบและเอกสารประจำตัวสอบไว้ให้ครบ',
				en: 'Pay the fee through the channel and by the deadline the announcement states — the application is only complete once payment clears. Then keep your seat number and admission documents as instructed.'
			}
		},
		{
			title: { th: 'เข้าสอบและรอประกาศผล', en: 'Sit the exam and wait for results' },
			text: {
				th: 'ไปถึงศูนย์สอบตามเวลาพร้อมบัตรประจำตัวประชาชนตัวจริง ผลสอบจะประกาศผ่านช่องทางทางการ และผู้สอบผ่านจะได้หนังสือรับรองผลการสอบผ่านภาค ก. ตามวิธีที่ประกาศกำหนด',
				en: 'Arrive at your centre on time with your original national ID card. Results are published through the official channel, and those who pass receive the Part A certificate in the manner the announcement sets out.'
			}
		},
		{
			title: { th: 'นำหนังสือรับรองไปสมัครกับส่วนราชการ', en: 'Take the certificate to a department' },
			text: {
				th: 'การสอบผ่านภาค ก. ยังไม่ใช่การได้งาน ขั้นต่อไปคือติดตามประกาศรับสมัครของกรมที่คุณสนใจ แล้วสมัครสอบภาค ข. ซึ่งเป็นความรู้เฉพาะตำแหน่ง และภาค ค. ซึ่งเป็นการประเมินความเหมาะสมกับตำแหน่ง เมื่อผ่านครบแล้วจึงขึ้นบัญชีผู้สอบแข่งขันได้ และรอเรียกบรรจุตามลำดับ',
				en: 'Passing Part A is not a job. Next you follow the recruitment announcements of the department you want, and sit its Part B subject examination and Part C suitability assessment. Clear those and you join its list of successful candidates, to be called up in order.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ภาค ก. ภาค ข. และภาค ค. ต่างกันอย่างไร', en: 'What is the difference between Part A, Part B and Part C?' },
			a: {
				th: 'ภาค ก. วัดความรู้ความสามารถทั่วไป จัดโดยสำนักงาน ก.พ. ส่วนภาค ข. วัดความรู้เฉพาะตำแหน่งตามสายงานที่สมัคร และภาค ค. คือการประเมินความเหมาะสมกับตำแหน่ง ซึ่งโดยทั่วไปคือการสัมภาษณ์ ทั้งภาค ข. และภาค ค. เป็นงานของส่วนราชการที่เปิดรับสมัคร ไม่ใช่ของ ก.พ.',
				en: 'Part A measures general ability and is run centrally by the OCSC. Part B tests the knowledge specific to the post applied for, and Part C assesses suitability for it, usually through an interview. Both Part B and Part C belong to the recruiting department, not to the OCSC.'
			}
		},
		{
			q: { th: 'หนังสือรับรองผลการสอบผ่านภาค ก. ใช้ได้นานแค่ไหน', en: 'How long is the Part A certificate valid?' },
			a: {
				th: 'หนังสือรับรองเป็นเอกสารประจำตัวผู้สอบผ่าน ใช้ยื่นกับส่วนราชการได้หลายแห่งโดยไม่ต้องสอบใหม่ แต่เงื่อนไขการใช้และระดับวุฒิที่ต้องตรงกับตำแหน่ง แต่ละประกาศกำหนดต่างกัน จึงควรอ่านประกาศของตำแหน่งที่จะสมัครทุกครั้ง',
				en: 'The certificate is yours as proof of having passed, and you can present it to several departments without resitting. But the conditions of use — and whether its qualification level matches the post — are set by each announcement, so read them every time you apply.'
			}
		},
		{
			q: { th: 'ทุนรัฐบาลของ ก.พ. มีข้อผูกพันอะไรบ้าง', en: 'What obligations come with an OCSC scholarship?' },
			a: {
				th: 'ทุนรัฐบาลมีข้อผูกพันให้กลับมาปฏิบัติงานในหน่วยงานของรัฐหลังสำเร็จการศึกษา ระยะเวลาและเงื่อนไขระบุไว้ในสัญญารับทุนและประกาศของทุนแต่ละประเภท หากไม่ปฏิบัติตามจะมีภาระชดใช้เงินทุน จึงควรอ่านสัญญาให้ละเอียดก่อนสมัคร',
				en: 'Government scholarships bind the recipient to return and serve in the public sector after graduating. The length and terms sit in the scholarship contract and in each scheme’s announcement, and not serving triggers the repayment terms you agreed to. Read the contract closely before applying.'
			}
		},
		{
			q: { th: 'สมัครไม่สำเร็จ หรือกรอกข้อมูลผิด ต้องทำอย่างไร', en: 'What if registration fails or I entered something wrong?' },
			a: {
				th: 'ช่วงเปิดรับสมัครมักมีผู้ใช้งานพร้อมกันมากจนระบบตอบสนองช้า ทางที่ปลอดภัยคือสมัครแต่เนิ่น ๆ และเก็บภาพหน้าจอทุกขั้นตอนไว้เป็นหลักฐาน หากกรอกผิด ให้ดูวิธีแก้ไขที่กำหนดไว้ในประกาศ เพราะบางรายการแก้ได้ก่อนชำระเงินเท่านั้น หากเว็บไซต์ติดต่อไม่ได้ ให้ใช้ช่องทางที่ระบุไว้ในประกาศ',
				en: 'Registration days draw heavy simultaneous traffic and the system can slow down, so apply early rather than on the closing day and screenshot each step. If you mistyped something, check what the announcement says about corrections — some fields can only be changed before payment. If the site will not respond, use the contact route named in the announcement itself.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าเว็บหรือเพจที่อ้างว่าเป็น ก.พ. เป็นของจริง', en: 'How can I tell a site or page claiming to be the OCSC is genuine?' },
			a: {
				th: 'ข้อมูลทางการอยู่ภายใต้โดเมน ocsc.go.th ซึ่งเป็นโดเมน .go.th ของหน่วยงานรัฐ ให้ตรวจชื่อโดเมนก่อนกรอกข้อมูลหรือชำระเงินทุกครั้ง เว็บและเพจที่ขายแนวข้อสอบ รับประกันว่าสอบผ่าน หรืออ้างว่ารู้ข้อสอบล่วงหน้า ไม่ใช่ช่องทางของหน่วยงาน หากพบข้อความเร่งให้โอนเงินจองสิทธิ์สมัครสอบ ให้ถือว่าหลอกลวง',
				en: 'Official material sits under ocsc.go.th, a .go.th government domain — check the domain before entering data or paying. Pages selling question banks, guaranteeing a pass or claiming advance sight of the paper are not official channels, and nobody can guarantee a result. Treat any message pressing you to transfer money to reserve an exam place as a scam.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'สำนักงาน ก.พ. คือใคร และ “สอบ ก.พ.” คืออะไร', en: 'Who the OCSC is, and what “the OCSC exam” means' }
		},
		{
			type: 'p',
			text: {
				th: 'สำนักงานคณะกรรมการข้าราชการพลเรือน หรือที่เรียกกันสั้น ๆ ว่า ก.พ. เป็นหน่วยงานกลางที่ดูแลกำลังคนของราชการพลเรือน เมื่อคนพูดว่า “สอบ ก.พ.” มักหมายถึงการสอบเพื่อวัดความรู้ความสามารถทั่วไป หรือที่เรียกติดปากว่าภาค ก. ซึ่งไม่ได้ถามความรู้เฉพาะทางของตำแหน่ง แต่วัดการคิดวิเคราะห์ การใช้ภาษาไทย และภาษาอังกฤษ ส่วนวิชาที่สอบในปีนั้นและเกณฑ์ผ่าน ให้ยึดตามประกาศของรอบนั้น',
				en: 'The Office of the Civil Service Commission — shortened by everyone to ก.พ. — is the central agency for the civil-service workforce. When Thais say “the OCSC exam” they almost always mean the general aptitude examination, known to all as Part A. It asks nothing about any particular profession; it measures reasoning, use of Thai and English. Which subjects appear in a given year, and what counts as a pass, come from that round’s announcement.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ใครจัดสอบส่วนไหน — จุดที่คนสับสนมากที่สุด', en: 'Who runs which stage — the commonest confusion' }
		},
		{
			type: 'p',
			text: {
				th: 'ความเข้าใจผิดที่พบบ่อยที่สุดคือคิดว่าสำนักงาน ก.พ. รับสมัครงานราชการทั้งหมด ความจริงคือ ก.พ. ดูแลด่านกลางด่านเดียว ส่วนตำแหน่งงานจริงนั้นแต่ละกรมเป็นผู้ประกาศรับ กำหนดคุณสมบัติ ออกข้อสอบเฉพาะตำแหน่ง และสัมภาษณ์เอง',
				en: 'The commonest misunderstanding is that the OCSC recruits for the whole of government. In fact it owns one central gate. Vacancies are advertised by individual departments, which set the qualifications, write the subject paper and interview.'
			}
		},
		{
			type: 'table',
			caption: { th: 'ขั้นตอนการสอบเข้ารับราชการพลเรือนโดยทั่วไป', en: 'The usual stages of entering the civil service' },
			head: [
				{ th: 'ขั้นตอน', en: 'Stage' },
				{ th: 'วัดอะไร', en: 'What it tests' },
				{ th: 'ใครเป็นผู้จัด', en: 'Who runs it' }
			],
			rows: [
				[
					{ th: 'ภาค ก.', en: 'Part A' },
					{
						th: 'การคิดวิเคราะห์ ภาษาไทยและภาษาอังกฤษ โดยวิชาและสัดส่วนคะแนนตามประกาศแต่ละปี',
						en: 'General ability: reasoning, Thai and English, with subjects and weightings set by each year’s announcement'
					},
					{ th: 'สำนักงาน ก.พ. จัดสอบเป็นรอบส่วนกลาง', en: 'The OCSC, in central rounds' }
				],
				[
					{ th: 'ภาค ข.', en: 'Part B' },
					{ th: 'ความรู้ที่ใช้เฉพาะตำแหน่งตามสายงานที่สมัคร', en: 'The knowledge specific to the post applied for' },
					{ th: 'กรมหรือหน่วยงานที่เปิดรับสมัคร', en: 'The department advertising the post' }
				],
				[
					{ th: 'ภาค ค.', en: 'Part C' },
					{ th: 'ความเหมาะสมกับตำแหน่ง โดยทั่วไปคือการสัมภาษณ์', en: 'Suitability for the post — normally an interview' },
					{ th: 'หน่วยงานเดียวกันนั้น', en: 'The same department' }
				]
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ไม่ใช่ทุกงานราชการที่ต้องใช้ภาค ก.', en: 'Not every public job goes through Part A' },
			text: {
				th: 'ครู ตำรวจ ทหาร ข้าราชการส่วนท้องถิ่น และหน่วยงานที่มีระบบบริหารงานบุคคลของตนเอง ใช้การคัดเลือกคนละระบบกับภาค ก. เช่นเดียวกับพนักงานราชการซึ่งหน่วยงานคัดเลือกเอง ก่อนเตรียมสอบจึงควรอ่านคุณสมบัติในประกาศของตำแหน่งที่ต้องการ',
				en: 'Teachers, police, the military, local-government officials and bodies with their own personnel systems select staff outside Part A — as do contract government-employee posts, which agencies fill themselves. Before you start revising, go back and read the eligibility section of the announcement for the post you actually want.'
			}
		},
		{
			type: 'h2',
			text: { th: 'การสมัครสอบเปิดเป็นรอบ ไม่ใช่ตลอดทั้งปี', en: 'Registration comes in rounds, not year-round' }
		},
		{
			type: 'p',
			text: {
				th: 'ภาค ก. เปิดรับสมัครเป็นช่วงเวลาที่ประกาศไว้ล่วงหน้า ผู้สมัครเลือกระดับวุฒิที่ตรงกับการศึกษา เลือกศูนย์สอบ ชำระค่าธรรมเนียม แล้วเข้าสอบตามวันเวลาที่ได้รับ สิ่งที่เปลี่ยนได้ในแต่ละรอบมีทั้งจำนวนที่นั่ง ศูนย์สอบที่เปิด และรูปแบบการสอบว่าเป็นกระดาษหรือระบบอิเล็กทรอนิกส์ บางปียังมีการจัดสอบเพิ่มเติมให้เฉพาะผู้ที่สอบผ่านภาค ข. แล้วแต่ยังไม่มีหนังสือรับรอง',
				en: 'Part A opens for registration in windows announced ahead of time. You pick the qualification level matching your education, choose a test centre, pay the fee and sit on the date you are given. What changes between rounds includes the number of seats, which centres open, and whether the paper is written or computer-based. Some years also bring an extra sitting restricted to people who have already passed a department’s Part B but hold no certificate.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทุนรัฐบาล อีกงานหลักของสำนักงาน ก.พ.', en: 'Scholarships, the OCSC’s other main role' }
		},
		{
			type: 'p',
			text: {
				th: 'นอกจากการสอบเข้ารับราชการ สำนักงาน ก.พ. ยังดูแลทุนรัฐบาล ทั้งทุนสำหรับผู้สำเร็จชั้นมัธยมปลาย ทุนสำหรับบุคคลทั่วไปเพื่อศึกษาต่อระดับปริญญาในประเทศและต่างประเทศ และทุนพัฒนาข้าราชการที่ปฏิบัติงานอยู่แล้ว แต่ละประเภทมีคุณสมบัติ สาขา และปฏิทินคัดเลือกของตนเอง',
				en: 'Beyond recruitment, the OCSC administers government scholarships centrally: awards for school leavers, awards for the general public to read for a degree in Thailand or abroad, and development awards for serving officials. Each family has its own eligibility rules, eligible fields and selection calendar.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ทุนรัฐบาลมาพร้อมข้อผูกพัน', en: 'A government scholarship is a commitment' },
			text: {
				th: 'ทุนรัฐบาลไม่ใช่ทุนให้เปล่า ผู้รับทุนต้องกลับมาปฏิบัติงานในหน่วยงานของรัฐตามที่กำหนดไว้ในสัญญา หากไม่ปฏิบัติตามจะมีภาระชดใช้เงินทุน ก่อนสมัครจึงควรอ่านสัญญาให้เข้าใจ โดยเฉพาะระยะเวลาปฏิบัติงานและการจัดสรรหน่วยงาน',
				en: 'These are not gifts. Recipients return to serve in the public sector on the terms written into the contract, and failing to do so brings the repayment obligations that contract sets out. Read the contract before applying — especially the service period and how you are assigned to a receiving agency.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ระวังเว็บและเพจที่แอบอ้าง', en: 'Beware of sites and pages that pose as official' }
		},
		{
			type: 'p',
			text: {
				th: 'ตลาดติวสอบราชการมีขนาดใหญ่ และมีไม่น้อยที่ทำหน้าเว็บและชื่อเพจให้ดูเหมือนหน่วยงาน',
				en: 'The exam-prep market around government recruitment is large, and plenty of operators design their pages and names to look institutional.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ตรวจโดเมนก่อนเสมอ ข้อมูลทางการอยู่ภายใต้ ocsc.go.th',
					en: 'Check the domain first — official material lives under ocsc.go.th.'
				},
				{
					th: 'ไม่มีใครรับประกันผลสอบได้ คำโฆษณาว่าไม่ผ่านคืนเงินหรือมีข้อสอบจริง คือสัญญาณอันตราย',
					en: '“Pass or your money back” and “we have the real paper” are warning signs — nobody can guarantee a result.'
				},
				{
					th: 'การสมัครทำผ่านระบบทางการเท่านั้น ไม่มีตัวแทน และไม่มีการโอนเงินจองสิทธิ์',
					en: 'Applications go through the official system only — no agents, and no transfers to reserve a place.'
				},
				{
					th: 'ตัวเลขและวันที่จากเพจสรุปข่าว ควรเทียบกับประกาศฉบับจริงก่อนวางแผน',
					en: 'Dates and figures from summary pages should be checked against the actual announcement before you plan around them.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้จึงมีอยู่', en: 'Why this page exists' }
		},
		{
			type: 'p',
			text: {
				th: 'คำที่คนไทยพิมพ์ค้นหาคือ “สอบ ก.พ.” ไม่ใช่ชื่อเต็มของหน่วยงาน และคำถามที่ค้างคามักเป็นเรื่องโครงสร้าง เช่น ภาค ก. กับภาค ข. ใครเป็นผู้จัด ซึ่งประกาศรายฉบับไม่ได้อธิบายซ้ำ ช่องว่างนี้ทำให้เพจขายคอร์สขึ้นมาอยู่เหนือต้นทางในผลการค้นหา ยิ่งไปกว่านั้น เว็บไซต์ของหน่วยงานมีระบบป้องกันที่ให้ผู้เข้าชมประมวลผลจาวาสคริปต์ก่อนจึงจะเปิดหน้าได้ เบราว์เซอร์ทั่วไปผ่านได้ และบอตของเครื่องมือค้นหาที่ยืนยันตัวตนแล้วตามปกติก็ได้รับการยกเว้น เราจึงไม่สรุปว่า Google เข้าไม่ถึง แต่สิ่งที่เข้าไม่ถึงแน่นอนคือบริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI ที่ไม่ประมวลผลจาวาสคริปต์ จึงไม่มีสำเนาหน้าเว็บไว้ให้ย้อนดู และข้อมูลที่หมุนเวียนอยู่ก็มาจากแหล่งที่คัดลอกต่อกันมาเป็นหลัก หน้านี้อธิบายภาพรวมด้วยภาษาที่คนใช้จริง แล้วส่งคุณกลับไปอ่านประกาศฉบับปัจจุบัน โดย ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่เกี่ยวข้องกับสำนักงาน ก.พ. และไม่รับสมัครสอบหรือรับชำระเงิน',
				en: 'People type “สอบ ก.พ.”, not the agency’s formal name, and what actually blocks them are structural questions such as who runs Part A versus Part B. Individual announcements do not re-explain that each time, and the gap lets course sellers outrank the source. On top of that, the site sits behind a protection layer that asks visitors to run JavaScript before a page will open. Ordinary browsers clear it, and search-engine crawlers that verify themselves are normally exempted, so Google most likely reaches the site. What does not get through is anything that executes no JavaScript — web archives, outside monitoring and AI assistants — which leaves no archived copy to check against, so most of what circulates online comes from sources copying one another. This page lays out the shape of it in the words people use, then sends you back to the official site for the current announcement. ThaiGov.co is an independent directory with no connection to the OCSC, and takes no applications or payments.'
			}
		}
	],
	crawl: {
		host: 'www.ocsc.go.th',
		verdict: 'partial',
		kind: 'js-challenge',
		status: 403,
		snippet: 'Full desktop-Chrome request profile\n  GET /  ->  403  (Cloudflare managed challenge (JavaScript interstitial))\nGooglebot user-agent\n  GET /  ->  403\nGET /robots.txt  ->  200\n\nHeadless Chromium (real browser engine)\n  GET /  ->  200  (served normally)\n  GET /robots.txt  ->  200\n\n# As a condition of accessing this website, you agree to abide by the following\n# content signals:\n\n# (a)  If a Content-Signal = yes, you may collect content for the corresponding\n#      use.\n# (b)  If a Content-Signal = no, you may not collect content for the\n#      corresponding use.\n# (c)  If the website operator do',
		checkedAt: '2026-08-28',
		note: {
			th: 'เมื่อเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ เซิร์ฟเวอร์ตอบกลับด้วยหน้าท้าทายของ Cloudflare ที่ต้องประมวลผลจาวาสคริปต์ก่อนจึงจะผ่านได้ เบราว์เซอร์จริงผ่านได้ และบอตของเครื่องมือค้นหาที่ Cloudflare ยืนยันตัวตนแล้วมักได้รับการยกเว้น เราจึงไม่สรุปว่า Google ถูกปิดกั้น แต่สิ่งที่ปิดกั้นแน่นอนคือเครื่องมือที่ไม่ประมวลผลจาวาสคริปต์ ทั้งบริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI',
			en: 'Requested with a full browser profile, the server answers with a Cloudflare challenge that must be solved by running JavaScript. Real browsers pass it, and search-engine crawlers Cloudflare has verified are normally exempted — so we do not conclude that Google is blocked. What is certainly blocked is anything that does not execute JavaScript: web archives, third-party monitoring, and AI assistants.'
		}
	},
	priority: 83,
	updated: '2026-08-28'
};
