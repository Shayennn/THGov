import type { Guide } from '../types';

export const guide: Guide = {
	slug: 'check-social-security-entitlements',
	title: {
		th: 'วิธีเช็กสิทธิประกันสังคมและเงินสมทบของตัวเอง',
		en: 'How to Check Your Thai Social Security Entitlements'
	},
	deck: {
		th: 'คู่มือสำหรับคนที่ส่งเงินสมทบมาหลายปี แต่ยังไม่แน่ใจว่าตัวเองมีสิทธิอะไรอยู่บ้าง และต้องเข้าไปดูตรงไหน',
		en: 'For anyone who has paid into the fund for years without ever being sure what it gives them, or where to look.'
	},
	summary: {
		th: 'เช็กสิทธิประกันสังคมด้วยตัวเอง ทั้งมาตราที่คุณอยู่ ประวัติเงินสมทบ เดือนสะสมกรณีชราภาพ โรงพยาบาลตามสิทธิ และวิธีดูว่าตอนนี้ใช้สิทธิประกันสังคมหรือบัตรทอง',
		en: 'Check your Thai social security yourself: which section covers you, whether contributions arrived, months toward the pension, and where your care sits.'
	},
	keywords: {
		th: [
			'เช็กสิทธิประกันสังคม',
			'เช็คเงินสมทบประกันสังคม',
			'ประกันสังคมมาตรา 33',
			'ประกันสังคมมาตรา 39',
			'ประกันสังคมมาตรา 40',
			'เช็คเดือนสะสมชราภาพ',
			'โรงพยาบาลตามสิทธิประกันสังคม',
			'เปลี่ยนโรงพยาบาลประกันสังคม',
			'ประกันสังคมกับบัตรทองต่างกันอย่างไร',
			'ออกจากงานแล้วประกันสังคมใช้ได้ไหม',
			'นายจ้างไม่ส่งเงินสมทบ',
			'สิทธิว่างงานประกันสังคม',
			'เงินชราภาพประกันสังคม'
		],
		en: [
			'check Thai social security entitlements',
			'Thai social security Section 33 39 40',
			'social security contribution history Thailand',
			'change social security hospital Thailand',
			'social security vs Gold Card Thailand',
			'Thai social security old-age pension',
			'employer not remitting social security'
		]
	},
	services: ['sso-eservices'],
	steps: [
		{
			title: { th: 'ยืนยันก่อนว่าคุณอยู่มาตราไหน', en: 'Pin down which section covers you' },
			text: {
				th: 'มีนายจ้างและเห็นรายการหักประกันสังคมในสลิปเงินเดือน คือมาตรา 33 ออกจากงานแล้วส่งเงินสมทบต่อเอง คือมาตรา 39 ทำงานอิสระแล้วสมัครเอง คือมาตรา 40 คำตอบข้อนี้กำหนดความคุ้มครองและที่มาของสิทธิรักษาพยาบาล',
				en: 'An employer and a social security line on your payslip means Section 33. Leaving that job and paying in yourself means Section 39. Working for yourself and enrolling on your own means Section 40. This answer governs your cover and where your medical care comes from.'
			}
		},
		{
			title: { th: 'เตรียมเลขบัตรประชาชนและช่องทางรับรหัสยืนยัน', en: 'Ready your ID and a working contact channel' },
			text: {
				th: 'ระบบยืนยันตัวตนจากเลขประจำตัวประชาชนที่ต้องตรงกับข้อมูลที่ขึ้นทะเบียนไว้ แล้วส่งรหัสยืนยันไปที่เบอร์โทรศัพท์หรืออีเมล ปัญหาที่พบบ่อยคือเบอร์ในระบบยังเป็นของนายจ้างรายก่อน รหัสจึงไม่มาถึง ต้องแก้ข้อมูลกับเจ้าหน้าที่ก่อน',
				en: 'The system matches your ID number against the details on record, then sends a code to your phone or email. The usual obstacle is a number a previous employer registered years ago, so the code never arrives — that has to be corrected with staff first.'
			}
		},
		{
			title: { th: 'เข้าระบบผ่านที่อยู่เว็บไซต์ที่คุณพิมพ์เอง', en: 'Enter through an address you typed yourself' },
			text: {
				th: 'พิมพ์ที่อยู่เว็บไซต์ของสำนักงานประกันสังคมเอง หรือใช้ลิงก์ที่ตรวจสอบแล้ว หลีกเลี่ยงลิงก์จาก SMS แชท หรืออีเมลที่ไม่ได้ร้องขอ เพราะเป็นช่องทางที่มิจฉาชีพใช้เก็บรหัสผ่านมากที่สุด',
				en: 'Type the Social Security Office address yourself, or use a link you have verified. Avoid anything arriving by SMS, chat or unsolicited email — the route impersonators rely on most to harvest ID numbers and passwords.'
			}
		},
		{
			title: { th: 'ไล่ดูประวัติการนำส่งเงินสมทบทีละเดือน', en: 'Walk the contribution history month by month' },
			text: {
				th: 'เปิดรายการนำส่งย้อนหลังแล้วเทียบกับสลิปเงินเดือนเดือนเดียวกัน มองหาเดือนที่หายไป ยอดที่ไม่ตรงกับที่ถูกหัก และช่วงเปลี่ยนงานซึ่งมักเกิดรอยต่อ ถ้าเจอความผิดปกติ ให้จดเดือนนั้นไว้',
				en: 'Set the remittance history beside your payslips for the same months. Look for missing months, amounts that do not match what was deducted, and the seams around a change of job. Note anything that looks wrong.'
			}
		},
		{
			title: { th: 'ดูจำนวนเดือนสะสมกรณีชราภาพ', en: 'Read the months accrued for old age' },
			text: {
				th: 'ตัวเลขนี้ตัดสินว่าเมื่อถึงวัยเกษียณคุณจะได้เป็นเงินก้อนครั้งเดียวหรือบำนาญรายเดือน และเดินหน้าเฉพาะเดือนที่มีการนำส่งจริง คนที่เคยหยุดส่งหรือเคยสลับมาตรา ควรดูเป็นพิเศษ',
				en: 'This figure decides whether the old-age benefit arrives as a lump sum or a monthly pension, and it advances only in months actually remitted. Anyone who has paused contributing, or switched sections, should look closely.'
			}
		},
		{
			title: { th: 'ตรวจโรงพยาบาลตามสิทธิ และดูว่าตอนนี้ถือสิทธิใด', en: 'Confirm your hospital and your current entitlement' },
			text: {
				th: 'ดูว่าระบบบันทึกโรงพยาบาลตามสิทธิไว้ที่ใด แล้วถามตัวเองว่าถ้าป่วยวันนี้ คุณเดินทางไปไหวหรือไม่ คนที่เพิ่งเริ่มงานหรือเพิ่งลาออก ควรดูด้วยว่าสิทธิยังอยู่กับประกันสังคมหรือกลับไปบัตรทองแล้ว',
				en: 'Find which hospital the record holds, then ask whether you could get there if you fell ill today. If you have just started or just left a job, check too whether your care still sits with Social Security or has moved back to the Gold Card.'
			}
		},
		{
			title: { th: 'จดสิ่งที่ต้องตามต่อ แล้วตั้งรอบกลับมาเช็กซ้ำ', en: 'Note the loose ends and set a reminder' },
			text: {
				th: 'ก่อนปิดหน้าจอ ให้จดมาตราที่คุณอยู่ ชื่อโรงพยาบาลตามสิทธิ และเดือนที่เงินสมทบไม่ครบถ้ามี แล้วตั้งเตือนกลับมาดูปีละครั้ง และทุกครั้งที่เปลี่ยนงานหรือย้ายบ้าน',
				en: 'Before closing the page, write down your section, the hospital on record, and any months that look short. Then set a yearly reminder, and check again whenever you change jobs or move house.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'เช็กสิทธิประกันสังคม จริง ๆ แล้วเช็กอะไร', en: 'What “checking your entitlements” really means' }
		},
		{
			type: 'p',
			text: {
				th: 'คำว่าเช็กสิทธิรวมคำถามไว้อย่างน้อยสี่ข้อ คือคุณอยู่มาตราไหน เงินสมทบเข้าครบทุกเดือนหรือไม่ สะสมมากี่เดือนแล้วสำหรับกรณีชราภาพ และสิทธิรักษาพยาบาลอยู่ที่โรงพยาบาลใด ทั้งสี่ข้อตอบได้จากข้อมูลชุดเดียวกัน แต่คนส่วนใหญ่เปิดดูครั้งแรกในวันที่สายเกินแก้',
				en: 'The phrase bundles at least four questions: which section covers you, whether contributions arrived every month, how many months you have banked toward the old-age benefit, and which hospital your care is tied to. All four come from one record — which most people first open on the day it is already too late to fix anything.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เตรียมอะไรไว้ก่อนเริ่ม', en: 'What to have on hand' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'เลขประจำตัวประชาชน และเบอร์โทรศัพท์หรืออีเมลที่ใช้ได้จริง',
					en: 'Your ID number, and a phone or email you can actually reach'
				},
				{
					th: 'สลิปเงินเดือนย้อนหลัง ไว้เทียบกับยอดที่นำส่ง',
					en: 'Payslips, to compare against what was remitted'
				},
				{
					th: 'ชื่อโรงพยาบาลที่คุณคิดว่าเป็นโรงพยาบาลตามสิทธิ',
					en: 'The hospital you believe is your registered one'
				},
				{
					th: 'เวลาสักสิบนาทีในช่วงที่ระบบไม่หนาแน่น',
					en: 'Ten unhurried minutes at a quiet hour'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'สามมาตรา คุณเข้ามาอยู่ในระบบด้วยเส้นทางไหน', en: 'Three sections, three routes in' }
		},
		{
			type: 'table',
			caption: {
				th: 'กองทุนแบ่งผู้ประกันตนตามเส้นทางที่เข้าสู่ระบบ ไม่ใช่ตามอาชีพ',
				en: 'The fund sorts people by how they entered it, not by occupation'
			},
			head: [
				{ th: 'มาตรา', en: 'Section' },
				{ th: 'คุณเข้าสู่ระบบด้วยวิธีใด', en: 'How you came to be covered' },
				{ th: 'สิ่งที่ควรเช็กเป็นพิเศษ', en: 'What to watch for' }
			],
			rows: [
				[
					{ th: 'มาตรา 33', en: 'Section 33' },
					{
						th: 'ลูกจ้างของนายจ้างที่ขึ้นทะเบียนไว้ นายจ้างหักและนำส่งเงินสมทบแทนทุกเดือน',
						en: 'An employee of a registered employer, who deducts and remits contributions for you each month'
					},
					{
						th: 'ว่าเงินที่ถูกหักนำส่งเข้ากองทุนครบทุกเดือน และเป็นกลุ่มเดียวที่มีสิทธิว่างงาน',
						en: 'That the deductions genuinely reached the fund. The only group with unemployment cover.'
					}
				],
				[
					{ th: 'มาตรา 39', en: 'Section 39' },
					{
						th: 'เคยเป็นมาตรา 33 แล้วออกจากงาน จึงสมัครส่งต่อเอง โดยต้องยื่นภายในกำหนดเวลา',
						en: 'A former Section 33 member who left work and applied to keep contributing, within a deadline running from the last day of the job'
					},
					{
						th: 'ว่าจ่ายต่อเนื่องไม่ขาดส่ง เพราะขาดเกินเกณฑ์จะสิ้นสภาพ และกลุ่มนี้ไม่มีสิทธิว่างงาน',
						en: 'That payments stay unbroken — missing too many ends your status. No unemployment cover here.'
					}
				],
				[
					{ th: 'มาตรา 40', en: 'Section 40' },
					{
						th: 'ทำงานอิสระหรือแรงงานนอกระบบที่สมัครเอง และเลือกทางเลือกจ่ายเงินสมทบได้',
						en: 'Self-employed or informal workers who enrolled themselves, choosing between several contribution tiers'
					},
					{
						th: 'ว่าทางเลือกที่เลือกไว้คุ้มครองกรณีใด และสิทธิรักษาพยาบาลไม่ได้มาจากกองทุนนี้',
						en: 'Which events your tier covers — and that medical care does not come from this fund.'
					}
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'กองทุนคุ้มครองอะไรบ้าง', en: 'What the fund covers' }
		},
		{
			type: 'ul',
			items: [
				{ th: 'เจ็บป่วยและการรักษาพยาบาล ที่โรงพยาบาลตามสิทธิ', en: 'Sickness and medical care, at your registered hospital' },
				{ th: 'คลอดบุตร ตามเงื่อนไขของแต่ละมาตรา', en: 'Maternity, on each section’s terms' },
				{ th: 'ทุพพลภาพ เมื่อทำงานไม่ได้อย่างถาวร', en: 'Invalidity, on permanently losing the ability to work' },
				{ th: 'เสียชีวิต จ่ายให้ผู้จัดการศพและทายาท', en: 'Death, paid to the funeral organiser and beneficiaries' },
				{ th: 'สงเคราะห์บุตร ตามเกณฑ์อายุที่กำหนด', en: 'Child allowance, within the qualifying ages' },
				{ th: 'ว่างงาน เฉพาะมาตรา 33 และต้องขึ้นทะเบียนกับกรมการจัดหางาน', en: 'Unemployment, Section 33 only, with registration at the Department of Employment' },
				{ th: 'ชราภาพ เป็นเงินก้อนหรือบำนาญ ตามจำนวนเดือนที่สะสม', en: 'Old age, a lump sum or a pension, by the months accumulated' }
			]
		},
		{
			type: 'h2',
			text: { th: 'ประกันสังคมหรือบัตรทอง ตอนนี้คุณใช้สิทธิไหนอยู่', en: 'Social Security or the Gold Card?' }
		},
		{
			type: 'p',
			text: {
				th: 'คนไทยถือสิทธิรักษาพยาบาลจากรัฐได้ทีละสิทธิ ไม่ใช่พร้อมกัน เมื่อเข้าทำงานและกลายเป็นมาตรา 33 สิทธิจะย้ายจากบัตรทองมาเป็นประกันสังคม และผูกกับโรงพยาบาลเพียงแห่งเดียว เมื่อออกจากงานและไม่ได้ต่อมาตรา 39 ก็ย้ายกลับ ส่วนมาตรา 40 ใช้บัตรทองตลอด เพราะไม่ได้รับสิทธิรักษาพยาบาลจากกองทุน',
				en: 'A Thai citizen holds one state medical entitlement at a time, never two. Take a job and become insured under Section 33, and it moves from the Gold Card to Social Security, attached to a single hospital. Leave without continuing under Section 39, and it moves back. Section 40 members stay on the Gold Card throughout, since the fund gives them no medical care.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'การย้ายสิทธิเกิดขึ้นเบื้องหลังโดยไม่มีใครแจ้ง คนที่เพิ่งเริ่มงาน เพิ่งลาออก หรือกลับเข้าทำงานหลังว่างเว้นนาน จึงเสี่ยงเข้าใจผิดที่สุด ทางที่ปลอดภัยคือตรวจสองด้าน ทั้งสถานะในระบบประกันสังคม และสิทธิบัตรทองผ่านช่องทางของสำนักงานหลักประกันสุขภาพแห่งชาติ',
				en: 'The switch happens quietly, and nobody calls to announce it. People starting a job, resigning, or returning after a long gap are likeliest to get it wrong. Check both sides — your status in the SSO record, and your universal-coverage status through the National Health Security Office.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ไปผิดโรงพยาบาล อาจจบที่จ่ายเอง', en: 'The wrong hospital can land on your own bill' },
			text: {
				th: 'ถ้าไม่ใช่กรณีฉุกเฉิน และคุณรักษาที่โรงพยาบาลซึ่งไม่ใช่โรงพยาบาลตามสิทธิ ค่ารักษาอาจตกเป็นภาระของคุณเอง คนที่เพิ่งย้ายงานมักเข้าใจว่ายังใช้ที่เดิมได้ ก่อนไปพบแพทย์จึงควรเปิดดูชื่อโรงพยาบาลปัจจุบัน',
				en: 'Outside a genuine emergency, treatment at a hospital that is not your registered one can fall entirely to you. People who have just changed jobs tend to assume the old hospital still applies. Before an ordinary appointment, confirm the current one.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เมื่อเงินสมทบบางเดือนหายไป', en: 'When contributions go missing' }
		},
		{
			type: 'p',
			text: {
				th: 'เงินสมทบของมาตรา 33 ถูกหักจากค่าจ้างก่อนถึงมือคุณ แล้วนายจ้างมีหน้าที่นำส่ง ปัญหาที่เกิดขึ้นจริงคือถูกหักแล้วแต่ยอดไม่ปรากฏในระบบ อาจเพราะนำส่งล่าช้า นำส่งไม่ครบ หรือกรอกเลขประจำตัวประชาชนผิด และมักไม่มีใครทักจนถึงวันที่ยื่นขอรับประโยชน์ทดแทนแล้วพบว่าเดือนไม่ถึงเกณฑ์',
				en: 'Section 33 contributions leave your wages before you see them, and the employer is responsible for passing them on. In practice the deduction can appear on the payslip while the remittance never appears in the record — through late payment, short payment, or an ID number mistyped at registration. Nobody flags it, and the discovery comes at the counter, when a claim falls short of the required months.'
			}
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'ข้อความชวนกดลิงก์รับเงิน ให้สงสัยไว้ก่อน', en: 'Treat any “claim your money” link as suspect' },
			text: {
				th: 'มิจฉาชีพชอบอ้างชื่อประกันสังคมเพื่อชวนกดลิงก์ลงทะเบียนรับเงิน แล้วพาไปหน้าเว็บปลอมที่ขอเลขบัตรประชาชน เลขบัญชีธนาคาร หรือรหัส OTP การตรวจสอบสิทธิของตัวเองไม่ต้องใช้ลิงก์จากใคร ให้พิมพ์ที่อยู่เว็บไซต์ทางการเอง หรือโทรสายด่วน 1506',
				en: 'Scammers invoke Social Security to get people tapping a link to “register” for a payout, landing them on a fake page that asks for an ID number, a bank account or an OTP. Checking your own record never requires a link from anyone. Type the official address yourself, or call the hotline on 1506.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'THGov เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดสำนักงานประกันสังคมหรือหน่วยงานใด เราไม่รับข้อมูลส่วนบุคคลและไม่รับชำระเงิน ตัวเลขอย่างอัตราเงินสมทบ จำนวนเดือนขั้นต่ำ และกำหนดเวลายื่นเรื่อง เปลี่ยนแปลงได้ตามประกาศ จึงควรยึดตัวเลขล่าสุดจากเว็บไซต์ทางการ',
				en: 'THGov is an independent directory, unaffiliated with the Social Security Office or any agency. We take no personal data and accept no payments. Figures such as contribution rates, minimum qualifying months and filing deadlines change by announcement, so always take the current numbers from the official site.'
			}
		}
	],
	faq: [
		{
			q: {
				th: 'จะรู้ได้อย่างไรว่าตัวเองเป็นผู้ประกันตนอยู่หรือเปล่า',
				en: 'How do I know whether I am insured at all?'
			},
			a: {
				th: 'ถ้าเคยทำงานประจำกับนายจ้างที่ขึ้นทะเบียนไว้ โดยทั่วไปคุณถูกขึ้นทะเบียนตั้งแต่ตอนนั้น และประวัติยังอยู่แม้ออกจากงานไปนานแล้ว วิธีตรวจที่ง่ายที่สุดคือสมัครใช้งานด้วยเลขประจำตัวประชาชนของตัวเอง ถ้าข้อมูลไม่ตรง ให้ไปแก้ที่สำนักงานพื้นที่',
				en: 'If you have ever held a regular job with a registered employer, you were almost certainly enrolled then, and the record survives long after the job ends. The simplest test is to register with your own ID number; if the details do not match, your area office can correct them.'
			}
		},
		{
			q: { th: 'เดือนสะสมกรณีชราภาพสำคัญตรงไหน', en: 'Why does the accumulated-months figure matter?' },
			a: {
				th: 'เพราะเป็นตัวชี้ว่าคุณจะได้รับเงินชราภาพเป็นเงินก้อนหรือบำนาญรายเดือน และยังมีผลต่อจำนวนเงินด้วย เดือนที่นับได้คือเดือนที่มีการนำส่งจริง ไม่ใช่เดือนที่เป็นลูกจ้างเฉย ๆ ส่วนเกณฑ์และวิธีคำนวณ ควรดูจากประกาศล่าสุด',
				en: 'It decides the form the benefit takes — a lump sum or a pension paid monthly — and it also affects the amount. Only months with an actual remittance count, not months in which you merely held a job. The thresholds and the calculation are set by announcement, so read the current version rather than what a colleague remembers.'
			}
		},
		{
			q: {
				th: 'ลาออกจากงานแล้ว สิทธิรักษาพยาบาลจะกลับไปเป็นบัตรทองเมื่อไร',
				en: 'After I resign, when does my care return to the Gold Card?'
			},
			a: {
				th: 'ความคุ้มครองบางส่วนยังต่อเนื่องอีกระยะหนึ่งหลังสิ้นสภาพการเป็นลูกจ้าง แต่ระยะเวลาและขอบเขตเป็นไปตามเงื่อนไขที่ประกาศไว้ จึงควรตรวจสอบจากเว็บไซต์ทางการ เมื่อพ้นช่วงนั้นและไม่ได้สมัครมาตรา 39 ต่อ สิทธิจะกลับไปอยู่กับบัตรทอง',
				en: 'Part of your cover continues for a period after the job ends, but the length and scope follow published conditions, so confirm them officially rather than assuming. Once that period passes and you have not taken up Section 39, the entitlement reverts to the Gold Card.'
			}
		},
		{
			q: {
				th: 'นายจ้างหักเงินสมทบแล้ว แต่ยอดไม่ขึ้นในระบบ ต้องทำอย่างไร',
				en: 'The deduction is on my payslip but not in the record. What now?'
			},
			a: {
				th: 'เริ่มจากรวบรวมหลักฐานว่าถูกหักจริง เช่น สลิปเงินเดือนของเดือนที่หายไป แล้วแจ้งฝ่ายบุคคลก่อน เพราะหลายกรณีเป็นการนำส่งล่าช้าหรือกรอกเลขประจำตัวประชาชนผิด ถ้ายังไม่มีการแก้ไข ให้นำหลักฐานไปติดต่อสำนักงานประกันสังคมพื้นที่ อย่าปล่อยไว้ข้ามปี',
				en: 'Start by collecting proof that the money was taken — payslips for the missing months. Raise it with HR first, since many cases are a late remittance or a mistyped ID number fixable at source. If nothing changes, bring the evidence to your area social security office. Do not let it roll into another year, when the paperwork gets harder to find.'
			}
		},
		{
			q: { th: 'เปลี่ยนโรงพยาบาลตามสิทธิได้ตอนไหน', en: 'When can I change my registered hospital?' },
			a: {
				th: 'สำนักงานประกันสังคมเปิดให้ยื่นเปลี่ยนสถานพยาบาลเป็นช่วงในแต่ละปี และยังยื่นได้เมื่อมีเหตุจำเป็น เช่น ย้ายที่อยู่หรือย้ายที่ทำงาน ช่วงเวลาที่แน่นอนประกาศเป็นรายปี เมื่อยื่นแล้วให้กลับไปดูว่าชื่อโรงพยาบาลเปลี่ยนจริงก่อนใช้สิทธิ',
				en: 'The SSO opens a window each year, and a change can also be requested when circumstances require it — moving home, or moving workplace. The dates are announced annually, so check officially before planning around them. Filing is not the same as the change taking effect: confirm the new hospital appears before you next rely on it.'
			}
		},
		{
			q: {
				th: 'ผู้ประกันตนมาตรา 40 ใช้สิทธิรักษาพยาบาลของประกันสังคมได้ไหม',
				en: 'Do Section 40 members get medical care from the fund?'
			},
			a: {
				th: 'ไม่ได้ กองทุนไม่ได้ให้สิทธิรักษาพยาบาลกับผู้ประกันตนมาตรา 40 กลุ่มนี้จึงใช้บัตรทองตามเดิม สิ่งที่ได้รับคือประโยชน์ทดแทนตามทางเลือกที่เลือกไว้ เช่น เงินทดแทนการขาดรายได้เมื่อเจ็บป่วยจนทำงานไม่ได้ ซึ่งคนละเรื่องกับค่ารักษาพยาบาล',
				en: 'No. The fund provides no medical treatment to Section 40 members, who keep using the Gold Card when they need care. What the tier provides is compensation for lost income — money for the days illness keeps you from working, which is not the same as paying a hospital bill.'
			}
		}
	],
	updated: '2026-08-28',
	minutes: 7
};
