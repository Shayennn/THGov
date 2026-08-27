import type { Service } from '../types';

export const service: Service = {
	slug: 'nhso-gold-card',
	name: {
		th: 'สิทธิบัตรทอง 30 บาท — ตรวจสอบสิทธิและเปลี่ยนหน่วยบริการ',
		en: 'Thailand’s Gold Card (Universal Coverage) — Check and Change Your Entitlement'
	},
	shortName: { th: 'สิทธิบัตรทอง 30 บาท', en: 'Gold Card (UCS)' },
	url: 'https://www.nhso.go.th/',
	agency: 'nhso',
	categories: ['health-welfare'],
	summary: {
		th: 'ตรวจสอบว่าคุณอยู่ในสิทธิรักษาพยาบาลใดและลงทะเบียนไว้กับหน่วยบริการใด พร้อมวิธีเปลี่ยนหน่วยบริการเมื่อย้ายที่อยู่ และสิทธิเมื่อเจ็บป่วยฉุกเฉิน กับ สปสช.',
		en: 'Find out which health scheme covers you and which primary care unit you are registered with, how to change it when you move, and what the rules are in an emergency.'
	},
	deck: {
		th: 'สิทธิหลักประกันสุขภาพแห่งชาติที่คนไทยส่วนใหญ่ใช้อยู่ — รู้ว่าตัวเองอยู่ในสิทธิใด ลงทะเบียนไว้ที่ไหน และต้องไปรักษาที่ใดจึงไม่ต้องควักเงินจ่ายเอง',
		en: 'The health entitlement most Thai citizens already hold — know which scheme covers you, where you are registered, and where to go so you don’t end up paying out of pocket.'
	},
	keywords: {
		th: [
			'บัตรทอง',
			'ตรวจสอบสิทธิบัตรทอง',
			'เช็คสิทธิรักษาพยาบาล',
			'สิทธิ 30 บาท',
			'เปลี่ยนโรงพยาบาลบัตรทอง',
			'ย้ายสิทธิบัตรทอง',
			'สปสช.',
			'หน่วยบริการประจำ',
			'บัตรทองใช้ที่ไหนได้บ้าง',
			'30 บาทรักษาทุกที่',
			'เช็คสิทธิด้วยเลขบัตรประชาชน',
			'ออกจากงานแล้วสิทธิรักษาพยาบาลเป็นอย่างไร',
			'บัตรทองกับประกันสังคมต่างกันอย่างไร'
		],
		en: [
			'Thailand gold card',
			'NHSO universal coverage',
			'check health entitlement Thailand',
			'change hospital gold card',
			'30 baht scheme Thailand',
			'Thai universal health coverage'
		]
	},
	features: [
		{
			icon: 'id',
			title: { th: 'รู้ว่าคุณอยู่ในสิทธิรักษาพยาบาลใด', en: 'See which scheme covers you' },
			text: {
				th: 'ตรวจสอบด้วยเลขประจำตัวประชาชนว่าขณะนี้คุณอยู่ในสิทธิบัตรทอง ประกันสังคม หรือสวัสดิการข้าราชการ',
				en: 'Check with your national ID number whether you currently sit under the Gold Card, Social Security or the civil-servant scheme.'
			}
		},
		{
			icon: 'building',
			title: { th: 'รู้ว่าหน่วยบริการประจำของคุณคือที่ไหน', en: 'Find your registered primary care unit' },
			text: {
				th: 'ระบบจะแสดงชื่อสถานพยาบาลที่ผูกกับสิทธิของคุณ ซึ่งเป็นที่ที่ควรไปเป็นแห่งแรกเมื่อเจ็บป่วยทั่วไป',
				en: 'The system names the facility tied to your entitlement — the place to go first for anything that is not an emergency.'
			}
		},
		{
			icon: 'map',
			title: { th: 'เปลี่ยนหน่วยบริการเมื่อย้ายที่อยู่', en: 'Change your unit when you move' },
			text: {
				th: 'ย้ายบ้านหรือย้ายจังหวัดแล้วยื่นเปลี่ยนหน่วยบริการประจำได้เอง โดยทั่วไปไม่ต้องเดินทางไปที่สำนักงาน',
				en: 'After a move, you can request a new primary care unit yourself — usually with no trip to an office at all.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'ฉุกเฉินวิกฤตเข้าที่ใกล้ที่สุดได้', en: 'Critical emergencies: nearest hospital' },
			text: {
				th: 'กรณีอาการอันตรายถึงชีวิต เข้ารับการรักษาที่โรงพยาบาลใกล้ที่สุดได้ทันที ไม่ว่าจะลงทะเบียนไว้ที่ใด',
				en: 'When life is at risk you go to the closest hospital immediately, whatever your registration says.'
			}
		},
		{
			icon: 'heart',
			title: { th: 'คุ้มครองตั้งแต่ตรวจรักษาจนถึงคลอดบุตร', en: 'From a check-up to childbirth' },
			text: {
				th: 'ครอบคลุมผู้ป่วยนอก ผู้ป่วยใน ยาตามบัญชียาหลักแห่งชาติ การคลอดบุตร และการสร้างเสริมสุขภาพป้องกันโรค',
				en: 'Covers outpatient and inpatient care, medicines on the national list, maternity, and health promotion and prevention.'
			}
		},
		{
			icon: 'briefcase',
			title: { th: 'สิทธิขยับตามสถานะการทำงาน', en: 'Your scheme follows your job' },
			text: {
				th: 'เริ่มงานประจำแล้วสิทธิมักย้ายไปประกันสังคม ออกจากงานแล้วสิทธิบัตรทองจะกลับมา จึงควรตรวจสอบทุกครั้งที่เปลี่ยนงาน',
				en: 'Starting a salaried job normally moves you to Social Security; leaving one brings the Gold Card back. Check after every change of job.'
			}
		}
	],
	steps: [
		{
			title: { th: 'เตรียมบัตรประชาชนและเบอร์โทรศัพท์ที่ใช้อยู่จริง', en: 'Have your ID card and a working phone number' },
			text: {
				th: 'ระบบตรวจสอบสิทธิอ้างอิงเลขประจำตัวประชาชน 13 หลักเทียบกับฐานข้อมูลทะเบียนราษฎร และใช้เบอร์โทรศัพท์ในการส่งรหัสยืนยันตัวตน จึงควรใช้เบอร์ที่รับข้อความได้ทันที',
				en: 'Entitlement checks are keyed to your 13-digit ID number against the civil registration database, and a verification code is sent to your phone — so use a number you can receive messages on right away.'
			}
		},
		{
			title: { th: 'เข้าเว็บไซต์ สปสช. หรือติดตั้งแอปพลิเคชันของ สปสช.', en: 'Open the NHSO website or install the NHSO app' },
			text: {
				th: 'ทั้งสองช่องทางใช้ข้อมูลชุดเดียวกัน เว็บไซต์เหมาะกับการอ่านหลักเกณฑ์และประกาศ ส่วนแอปพลิเคชันสะดวกกว่าเมื่อต้องยืนยันตัวตนและทำรายการจากมือถือ',
				en: 'Both draw on the same records. The website suits reading rules and announcements; the app is easier when you need to verify your identity and file something from a phone.'
			}
		},
		{
			title: { th: 'ยืนยันตัวตนก่อนดูข้อมูลสิทธิของตัวเอง', en: 'Verify your identity before viewing your record' },
			text: {
				th: 'ข้อมูลสิทธิเป็นข้อมูลส่วนบุคคล ระบบจึงเปิดให้ดูได้เฉพาะเจ้าของสิทธิที่ผ่านการยืนยันตัวตนแล้วเท่านั้น ไม่มีหน้าใดที่แสดงสิทธิของคนอื่นได้',
				en: 'Entitlement data is personal data, so only the verified holder can see it. No page anywhere will show you someone else’s record.'
			}
		},
		{
			title: { th: 'อ่านผลให้ครบสองบรรทัด: สิทธิที่ถืออยู่ และหน่วยบริการประจำ', en: 'Read both lines: your scheme and your registered unit' },
			text: {
				th: 'บรรทัดแรกบอกว่าคุณอยู่ในสิทธิใด บรรทัดที่สองบอกชื่อสถานพยาบาลที่ผูกไว้กับคุณ หลายคนดูแต่บรรทัดแรกแล้วเข้าใจผิดว่าไปโรงพยาบาลใดก็ได้',
				en: 'The first line tells you which scheme you are in; the second names the facility you are tied to. Plenty of people read only the first and assume any hospital will do.'
			}
		},
		{
			title: { th: 'ถ้าหน่วยบริการไม่ตรงกับที่อยู่ปัจจุบัน ให้ยื่นขอเปลี่ยน', en: 'If the unit doesn’t match where you live, request a change' },
			text: {
				th: 'ยื่นคำขอเปลี่ยนหน่วยบริการประจำผ่านช่องทางออนไลน์ได้ทันที แล้วกลับมาตรวจสอบซ้ำอีกครั้งเพื่อดูว่าสิทธิใหม่มีผลแล้วหรือยัง อย่าเพิ่งวางแผนไปรักษาที่ใหม่ก่อนเห็นผลยืนยัน',
				en: 'File the change online, then check again later to confirm the new unit has taken effect. Do not plan treatment at the new place before you see that confirmation.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ใครมีสิทธิบัตรทองบ้าง', en: 'Who is entitled to the Gold Card?' },
			a: {
				th: 'คนไทยที่มีเลขประจำตัวประชาชน 13 หลัก และไม่ได้มีสิทธิรักษาพยาบาลจากระบบอื่นของรัฐ ถือว่าอยู่ในสิทธิบัตรทองโดยอัตโนมัติ ไม่ต้องสมัครและไม่มีค่าสมัคร กลุ่มที่ไม่อยู่ในสิทธินี้คือผู้ประกันตนของประกันสังคม ข้าราชการและผู้รับบำนาญที่ใช้สวัสดิการรักษาพยาบาลของทางราชการ รวมถึงผู้มีสิทธิจากรัฐวิสาหกิจหรือหน่วยงานรัฐอื่น หากไม่แน่ใจว่าตัวเองอยู่กลุ่มใด ให้ตรวจสอบด้วยเลขบัตรประชาชนผ่านช่องทางของ สปสช.',
				en: 'Any Thai citizen with a 13-digit ID number who is not covered by another state health scheme holds the Gold Card automatically — there is nothing to apply for and no joining fee. Those outside it are Social Security members, civil servants and pensioners on the government medical benefit, and people covered through state enterprises or other public bodies. If you are not sure which group you fall into, check with your ID number through NHSO’s own channels.'
			}
		},
		{
			q: { th: 'มีบัตรทองแล้วทำไมโรงพยาบาลยังเรียกเก็บเงิน', en: 'I have the Gold Card — why did the hospital still charge me?' },
			a: {
				th: 'สาเหตุที่พบบ่อยที่สุดคือไปรับบริการที่สถานพยาบาลซึ่งไม่ใช่หน่วยบริการประจำของคุณ โดยไม่มีใบส่งตัวและไม่ใช่กรณีฉุกเฉิน อีกสาเหตุหนึ่งคือรายการที่รับบริการอยู่นอกขอบเขตความคุ้มครอง เช่น การรักษาเพื่อความสวยงาม หรือยาที่อยู่นอกบัญชียาหลักแห่งชาติ ทั้งนี้นโยบาย “30 บาทรักษาทุกที่ด้วยบัตรประชาชนใบเดียว” ได้ขยายการใช้สิทธิข้ามหน่วยบริการในพื้นที่ที่เข้าร่วมแล้ว จึงควรตรวจสอบสถานะล่าสุดของจังหวัดที่คุณอยู่จากเว็บไซต์ทางการก่อนเดินทาง',
				en: 'The usual reason is that you were treated somewhere other than your registered primary care unit, without a referral and outside an emergency. The other common reason is that the item itself falls outside the benefit package — cosmetic treatment, say, or a medicine not on the national list. The “30 baht, treatment anywhere with one ID card” policy has widened cross-facility use in participating areas, so check the current status for your province on the official site before you travel.'
			}
		},
		{
			q: { th: 'เพิ่งเริ่มงานประจำหรือเพิ่งลาออก สิทธิเปลี่ยนไหม', en: 'I just started or left a salaried job — does my scheme change?' },
			a: {
				th: 'เปลี่ยน เมื่อเริ่มงานประจำและนายจ้างขึ้นทะเบียนคุณเป็นผู้ประกันตน สิทธิรักษาพยาบาลจะย้ายไปอยู่กับประกันสังคม และต้องใช้โรงพยาบาลที่เลือกไว้กับประกันสังคมแทน เมื่อออกจากงาน ความคุ้มครองของประกันสังคมยังต่อเนื่องอีกระยะหนึ่งตามที่กฎหมายกำหนด แล้วสิทธิบัตรทองจึงกลับมา ควรตรวจสอบสิทธิทุกครั้งหลังเปลี่ยนงาน เพราะหน่วยบริการประจำที่ระบบกำหนดให้อาจอิงตามทะเบียนบ้าน ไม่ใช่ที่ที่คุณอาศัยอยู่จริง',
				en: 'Yes. Once you start salaried work and your employer registers you, your medical entitlement moves to Social Security and you use the hospital you nominated there. When you leave, Social Security cover continues for a further period set in law, after which the Gold Card resumes. Check your entitlement after every job change: the unit the system assigns may follow your house registration rather than where you actually live.'
			}
		},
		{
			q: { th: 'เปลี่ยนหน่วยบริการประจำต้องไปที่สำนักงานไหม', en: 'Do I have to go in person to change my registered unit?' },
			a: {
				th: 'โดยทั่วไปไม่ต้อง ปัจจุบันการเปลี่ยนหน่วยบริการประจำทำได้ด้วยตัวเองผ่านช่องทางออนไลน์หรือแอปพลิเคชันของ สปสช. หลังยืนยันตัวตนแล้ว ส่วนผู้ที่ไม่สะดวกใช้ช่องทางออนไลน์ยังยื่นเรื่องที่หน่วยบริการหรือจุดรับลงทะเบียนในพื้นที่ได้ตามปกติ จำนวนครั้งที่เปลี่ยนได้ต่อปีและระยะเวลาที่สิทธิใหม่จะมีผลเป็นไปตามหลักเกณฑ์ที่ สปสช. กำหนด จึงควรอ่านเงื่อนไขล่าสุดบนเว็บไซต์ทางการก่อนยื่น',
				en: 'Usually not. Changing your primary care unit can be done yourself online or in the NHSO app once your identity is verified. If online is not practical for you, a facility or a local registration point will still take the request. How many changes are allowed per year, and how soon the new unit takes effect, follow NHSO’s current rules — read those on the official site before you file.'
			}
		},
		{
			q: { th: 'ตรวจสอบสิทธิแล้วระบบไม่พบข้อมูล หรือยืนยันตัวตนไม่ผ่าน ทำอย่างไร', en: 'The system can’t find my record, or identity verification fails — what now?' },
			a: {
				th: 'เริ่มจากตรวจสอบว่าเลขบัตรประชาชนและวันเดือนปีเกิดที่กรอกตรงกับข้อมูลทะเบียนราษฎรทุกตัวอักษร เพราะระบบเทียบกับฐานข้อมูลนั้นโดยตรง หากยืนยันตัวตนผ่านแอปแล้วไม่ผ่าน สาเหตุที่พบบ่อยคือเบอร์โทรศัพท์ที่เคยผูกไว้เปลี่ยนไปแล้ว หรือเพิ่งเปลี่ยนชื่อสกุลจนข้อมูลยังไม่สอดคล้องกัน ถ้าแก้ด้วยตัวเองไม่ได้ ให้ติดต่อหน่วยบริการประจำหรือช่องทางติดต่อทางการที่ประกาศไว้บนเว็บไซต์ สปสช. เพื่อให้เจ้าหน้าที่ตรวจสอบข้อมูลให้',
				en: 'Start by checking that the ID number and date of birth you typed match the civil registration record exactly, since that is what the system compares against. If app-based verification keeps failing, the usual causes are a phone number that has since changed, or a recent change of name that has not propagated. When you cannot resolve it yourself, ask your registered unit or use the official contact channels published on NHSO’s site so staff can check the record for you.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าเพจหรือข้อความที่อ้างว่าเป็น สปสช. เป็นของจริง', en: 'How do I know a page or message claiming to be NHSO is genuine?' },
			a: {
				th: 'ให้ยึดโดเมน nhso.go.th เป็นหลัก เพราะเว็บไซต์ของหน่วยงานรัฐไทยลงท้ายด้วย .go.th เสมอ การตรวจสอบสิทธิและการเปลี่ยนหน่วยบริการประจำไม่มีค่าใช้จ่าย หากมีเพจหรือบัญชีแชทเสนอ “เช็กสิทธิให้” หรือ “เร่งเรื่องให้” โดยขอค่าดำเนินการ ให้ถือว่าผิดปกติทันที อย่าส่งภาพบัตรประชาชนหรือรหัส OTP ให้ใครทางแชท และหากได้รับลิงก์ทาง SMS ให้พิมพ์ที่อยู่เว็บไซต์เองแทนการกดลิงก์',
				en: 'Anchor on the domain nhso.go.th — Thai government sites always end in .go.th. Checking your entitlement and changing your registered unit are free, so a page or chat account offering to “check it for you” or “speed it up” for a fee should be treated as suspect straight away. Never send a photo of your ID card or an OTP code over chat, and if a link arrives by SMS, type the address yourself instead of tapping it.'
			}
		},
		{
			q: { th: 'เจ็บป่วยตอนอยู่ต่างจังหวัดหรือกลางดึก ต้องกลับไปหน่วยบริการประจำไหม', en: 'If I fall ill away from home or in the middle of the night, must I return to my registered unit?' },
			a: {
				th: 'ถ้าอาการเข้าข่ายเจ็บป่วยฉุกเฉินวิกฤต ให้ไปโรงพยาบาลที่ใกล้ที่สุดทันที ไม่ว่าจะเป็นของรัฐหรือเอกชน และไม่ต้องเดินทางกลับไปที่หน่วยบริการประจำ ตามนโยบาย “เจ็บป่วยฉุกเฉินวิกฤต มีสิทธิทุกที่” หรือ UCEP ส่วนอาการเจ็บป่วยทั่วไปที่เกิดขึ้นระหว่างอยู่ต่างพื้นที่ เงื่อนไขการใช้สิทธิต่างออกไปจากกรณีฉุกเฉิน จึงควรตรวจสอบหลักเกณฑ์การใช้สิทธิข้ามพื้นที่ล่าสุดจากเว็บไซต์ สปสช. ก่อน',
				en: 'If the condition is a critical emergency, go to the nearest hospital immediately — public or private — and do not travel back to your registered unit. That is the “critical emergency, treatment anywhere” policy, known as UCEP. For ordinary illness while you are away from home the rules are different from an emergency, so check NHSO’s current guidance on using your entitlement outside your area first.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'สิทธิบัตรทอง 30 บาท คืออะไร', en: 'What the Gold Card actually is' }
		},
		{
			type: 'p',
			text: {
				th: 'บัตรทอง หรือชื่อทางการว่าสิทธิหลักประกันสุขภาพแห่งชาติ คือระบบที่รัฐรับผิดชอบค่ารักษาพยาบาลให้คนไทยซึ่งไม่ได้อยู่ในสิทธิประกันสังคมหรือสวัสดิการรักษาพยาบาลของทางราชการ ดูแลโดยสำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.) เป็นระบบที่มีผู้ใช้สิทธิมากที่สุดในสามระบบหลักของประเทศ และคนจำนวนมากอยู่ในสิทธินี้โดยไม่เคยกรอกใบสมัครเลย เพราะระบบลงทะเบียนให้ตั้งแต่ต้น ส่วนคำว่า “30 บาท” มาจากค่าธรรมเนียมที่เคยเรียกเก็บในยุคเริ่มต้นของนโยบาย เงื่อนไขการร่วมจ่ายในปัจจุบันเปลี่ยนไปจากเดิม จึงควรอ่านหลักเกณฑ์ล่าสุดจากเว็บไซต์ทางการมากกว่าจะเชื่อตามชื่อเรียก',
				en: 'The Gold Card — formally the National Health Security entitlement — is the scheme through which the state meets the medical costs of Thai citizens who are not in Social Security or the civil-servant medical benefit. It is run by the National Health Security Office (NHSO) and is the largest of the country’s three main schemes by membership. Many people hold it without ever having filled in a form, because registration happens for them. The “30 baht” in its nickname comes from a charge levied in the policy’s early years; the co-payment arrangements have since changed, so read the current rules on the official site rather than trusting the name.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ผู้มีสิทธิคือคนไทยที่มีเลขประจำตัวประชาชน 13 หลัก และยังไม่มีสิทธิรักษาพยาบาลจากระบบอื่นของรัฐ กลุ่มที่เห็นภาพชัดที่สุดได้แก่ ผู้ประกอบอาชีพอิสระ เกษตรกร ผู้ค้าขาย แรงงานนอกระบบ เด็กและนักเรียนนักศึกษาที่ยังไม่ได้ทำงาน ผู้สูงอายุที่ไม่ได้รับบำนาญข้าราชการ รวมถึงผู้ที่เพิ่งออกจากงานประจำจนความคุ้มครองของประกันสังคมสิ้นสุดลง',
				en: 'You are entitled if you are a Thai citizen with a 13-digit ID number and hold no other state medical entitlement. In practice that means the self-employed, farmers, traders and informal workers, children and students who are not yet working, older people without a civil-service pension, and anyone who has recently left salaried employment and whose Social Security cover has run out.'
			}
		},
		{
			type: 'h2',
			text: { th: 'หน่วยบริการประจำ คือหัวใจของการใช้สิทธิ', en: 'The registered unit is the part that matters' }
		},
		{
			type: 'p',
			text: {
				th: 'สิ่งที่ทำให้สิทธิบัตรทองใช้ได้จริงไม่ใช่ตัวบัตร แต่คือ “หน่วยบริการประจำ” ซึ่งเป็นสถานพยาบาลที่ระบบผูกชื่อคุณไว้ตามที่อยู่ที่ลงทะเบียน อาจเป็นโรงพยาบาลส่งเสริมสุขภาพตำบล ศูนย์บริการสาธารณสุข คลินิกที่เข้าร่วมโครงการ หรือโรงพยาบาลของรัฐในพื้นที่ เมื่อเจ็บป่วยทั่วไปควรเริ่มต้นที่หน่วยบริการประจำก่อนเสมอ หากอาการเกินขีดความสามารถของหน่วยบริการนั้น เจ้าหน้าที่จะออกใบส่งตัวไปยังโรงพยาบาลที่มีศักยภาพสูงกว่า และค่าใช้จ่ายยังอยู่ในความคุ้มครองต่อเนื่อง ลำดับขั้นนี้เองที่ทำให้ระบบทำงานได้',
				en: 'What makes the entitlement usable is not a card but the registered primary care unit — the facility the system ties your name to, based on the address you are registered at. It might be a sub-district health promoting hospital, a municipal health centre, a participating clinic or a local public hospital. For ordinary illness, always start there. If the case is beyond what that unit can handle, staff issue a referral to a better-equipped hospital and cover continues without interruption. That sequence is precisely what makes the scheme work.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'เดินเข้าโรงพยาบาลอื่นเอง อาจต้องจ่ายเอง', en: 'Walk into the wrong hospital and you pay' },
			text: {
				th: 'หากคุณไปรับการรักษาที่สถานพยาบาลซึ่งไม่ใช่หน่วยบริการประจำของคุณ ไม่มีใบส่งตัว และไม่ใช่กรณีเจ็บป่วยฉุกเฉิน สถานพยาบาลนั้นมีสิทธิเรียกเก็บค่ารักษาจากคุณโดยตรง นี่คือสาเหตุที่พบบ่อยที่สุดที่ผู้มีสิทธิบัตรทองต้องควักเงินจ่ายเองทั้งที่สิทธิยังสมบูรณ์อยู่ ก่อนย้ายบ้านหรือย้ายจังหวัดจึงควรเข้าไปตรวจสอบและเปลี่ยนหน่วยบริการประจำให้ตรงกับที่อยู่ปัจจุบันเสียก่อน',
				en: 'If you are treated somewhere that is not your registered unit, with no referral and outside an emergency, that facility may bill you directly. This is the single most common way people with a perfectly valid entitlement end up paying cash. Before you move house or move province, check your registration and change the unit to match where you now live.'
			}
		},
		{
			type: 'h2',
			text: { th: 'บัตรทอง ประกันสังคม และสวัสดิการข้าราชการ ต่างกันอย่างไร', en: 'Gold Card, Social Security and the civil-servant scheme' }
		},
		{
			type: 'table',
			caption: { th: 'สามระบบหลักด้านสิทธิรักษาพยาบาลของไทย', en: 'Thailand’s three main medical entitlement systems' },
			head: [
				{ th: 'สิทธิ', en: 'Scheme' },
				{ th: 'ใครอยู่ในสิทธินี้', en: 'Who it covers' },
				{ th: 'หน่วยงานที่ดูแล', en: 'Administered by' }
			],
			rows: [
				[
					{ th: 'หลักประกันสุขภาพแห่งชาติ (บัตรทอง)', en: 'Universal Coverage (Gold Card)' },
					{ th: 'คนไทยที่ไม่ได้มีสิทธิรักษาพยาบาลจากระบบอื่นของรัฐ', en: 'Thai citizens with no other state medical entitlement' },
					{ th: 'สำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.)', en: 'National Health Security Office (NHSO)' }
				],
				[
					{ th: 'ประกันสังคม', en: 'Social Security' },
					{ th: 'ลูกจ้างที่นายจ้างขึ้นทะเบียนไว้ และผู้ประกันตนที่ส่งเงินสมทบเอง', en: 'Employees registered by an employer, and self-paying insured persons' },
					{ th: 'สำนักงานประกันสังคม', en: 'Social Security Office' }
				],
				[
					{ th: 'สวัสดิการรักษาพยาบาลข้าราชการ', en: 'Civil-servant medical benefit' },
					{ th: 'ข้าราชการ ลูกจ้างประจำ ผู้รับบำนาญ และบุคคลในครอบครัวตามหลักเกณฑ์', en: 'Civil servants, permanent employees, pensioners and eligible family members' },
					{ th: 'กรมบัญชีกลาง', en: 'Comptroller General’s Department' }
				]
			]
		},
		{
			type: 'p',
			text: {
				th: 'สิทธิของคนคนหนึ่งไม่ได้ตายตัว แต่ขยับตามสถานะการทำงาน เมื่อคุณเริ่มงานประจำและนายจ้างขึ้นทะเบียนคุณเป็นผู้ประกันตน สิทธิรักษาพยาบาลจะย้ายไปอยู่กับประกันสังคม และต้องไปรักษาที่โรงพยาบาลที่เลือกไว้กับประกันสังคมแทนหน่วยบริการประจำเดิม ในทางกลับกัน เมื่อออกจากงานและความคุ้มครองของประกันสังคมสิ้นสุดลงตามระยะเวลาที่กฎหมายกำหนด สิทธิบัตรทองจะกลับมาเอง ปัญหาที่พบบ่อยคือหน่วยบริการประจำที่ระบบผูกให้ในจังหวะนั้นมักอิงตามทะเบียนบ้าน ซึ่งอาจอยู่คนละจังหวัดกับที่คุณอาศัยอยู่จริง ช่วงเปลี่ยนงานจึงเป็นจังหวะที่ควรเข้าไปตรวจสอบสิทธิด้วยตัวเองทุกครั้ง',
				en: 'Your scheme is not fixed; it moves with your employment. When you take a salaried job and your employer registers you, your medical entitlement shifts to Social Security and you use the hospital nominated there instead of your old primary care unit. Leave that job, and once Social Security cover ends after the period set in law, the Gold Card returns on its own. The recurring problem is that the unit assigned at that moment tends to follow your house registration, which may be in a different province from the one you actually live in — which is why a change of job is always a moment to check your record yourself.'
			}
		},
		{
			type: 'h2',
			text: { th: 'สิทธิบัตรทองครอบคลุมอะไรบ้าง', en: 'What the entitlement covers' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'บริการผู้ป่วยนอก ตั้งแต่การตรวจวินิจฉัย การรักษา ไปจนถึงการติดตามอาการต่อเนื่อง',
					en: 'Outpatient care — diagnosis, treatment and ongoing follow-up.'
				},
				{
					th: 'บริการผู้ป่วยใน รวมค่าห้องและค่าอาหารตามเกณฑ์ที่กำหนด',
					en: 'Inpatient care, including room and board within the defined standard.'
				},
				{
					th: 'ยาและเวชภัณฑ์ตามบัญชียาหลักแห่งชาติ',
					en: 'Medicines and supplies on the National List of Essential Medicines.'
				},
				{
					th: 'การฝากครรภ์ การคลอดบุตร และการดูแลมารดาหลังคลอด',
					en: 'Antenatal care, childbirth and postnatal care for the mother.'
				},
				{
					th: 'บริการทันตกรรมพื้นฐานและการฟื้นฟูสมรรถภาพ',
					en: 'Basic dental services and rehabilitation.'
				},
				{
					th: 'บริการสร้างเสริมสุขภาพและป้องกันโรค เช่น วัคซีนและการตรวจคัดกรองตามกลุ่มวัย ซึ่งจัดให้คนไทยทุกคนไม่ว่าจะถือสิทธิใด',
					en: 'Health promotion and disease prevention — vaccinations and age-appropriate screening — offered to every Thai citizen regardless of which scheme they hold.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'เจ็บป่วยฉุกเฉินวิกฤต เข้าโรงพยาบาลที่ใกล้ที่สุดได้', en: 'In a critical emergency, go to the nearest hospital' }
		},
		{
			type: 'p',
			text: {
				th: 'ข้อยกเว้นที่สำคัญที่สุดของกฎหน่วยบริการประจำคือกรณีเจ็บป่วยฉุกเฉินวิกฤต หากอาการเข้าข่ายอันตรายถึงชีวิต เช่น หมดสติ เจ็บแน่นหน้าอกรุนแรง หายใจไม่ออก หรือมีอาการของโรคหลอดเลือดสมอง ให้เข้ารับการรักษาที่โรงพยาบาลใกล้ที่สุดทันที ไม่ว่าจะเป็นของรัฐหรือเอกชน และไม่ต้องคำนึงว่าลงทะเบียนไว้ที่ใด นโยบายนี้เรียกกันว่า “เจ็บป่วยฉุกเฉินวิกฤต มีสิทธิทุกที่” หรือ UCEP โดยคุ้มครองในช่วงวิกฤตช่วงแรกตามหลักเกณฑ์ที่กำหนดไว้ ก่อนส่งต่อผู้ป่วยเข้าสู่การรักษาตามสิทธิปกติ ข้อควรเข้าใจคือการชี้ว่าเข้าข่ายฉุกเฉินวิกฤตหรือไม่เป็นการประเมินทางการแพทย์ ไม่ใช่การตัดสินใจของผู้ป่วยหรือญาติ',
				en: 'The most important exception to the registered-unit rule is a genuine, life-threatening emergency. If the situation is critical — loss of consciousness, severe chest pain, difficulty breathing, signs of a stroke — go straight to the nearest hospital, public or private, regardless of where you are registered. This is the policy known as “critical emergency, treatment anywhere”, or UCEP, and it covers the initial critical window under defined criteria before the patient is transferred back into ordinary scheme-based care. One thing to understand: whether a case qualifies as a critical emergency is a clinical assessment, not a judgement made by the patient or the family.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ข้อมูลสิทธิของคุณ ค้นหาจากเสิร์ชเอนจินไม่ได้', en: 'Your own record will never turn up in a search' },
			text: {
				th: 'หน้าตรวจสอบสิทธิรายบุคคลอยู่หลังการยืนยันตัวตน จึงไม่ถูกจัดเก็บโดยเครื่องมือค้นหาและไม่ปรากฏในผลการค้นหาใด ๆ ทั้งสิ้น หากพบเว็บไซต์ที่อ้างว่าค้นสิทธิของคนอื่นได้จากเลขบัตรประชาชน หรือเสนอตรวจสอบสิทธิให้โดยมีค่าบริการ ให้สันนิษฐานไว้ก่อนว่าไม่ใช่ช่องทางของทางการ',
				en: 'The individual entitlement checker sits behind identity verification, so it is never indexed and will not appear in any search result. If you find a site claiming it can look up someone else’s entitlement from an ID number, or offering to check yours for a fee, assume it is not an official channel.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมต้องมีหน้าที่ค้นเจอง่ายชี้ไปยังบริการนี้', en: 'Why a findable page pointing here needs to exist' }
		},
		{
			type: 'p',
			text: {
				th: 'คนไทยหลายสิบล้านคนใช้สิทธินี้อยู่ทุกวัน แต่คำที่ระบบใช้เรียกอย่าง “หน่วยบริการประจำ” หรือ “การลงทะเบียนสิทธิ” แทบไม่ใช่คำที่ใครพิมพ์ลงช่องค้นหา คนส่วนใหญ่พิมพ์ว่า “เช็คสิทธิรักษาพยาบาล” “บัตรทองใช้ที่ไหนได้” หรือ “ย้ายโรงพยาบาลบัตรทอง” ยิ่งไปกว่านั้น ตัวระบบตรวจสอบสิทธิรายบุคคลอยู่หลังการยืนยันตัวตน จึงไม่มีวันปรากฏในผลการค้นหาให้คนเจอเอง สิ่งที่ค้นเจอแทนจึงมักเป็นเพจต่อ ๆ กันมาที่ข้อมูลล้าสมัยหรือไม่ใช่ของทางการ หน้านี้จึงทำหน้าที่อธิบายแนวคิดที่ต้องเข้าใจก่อนใช้สิทธิ — ว่าคุณอยู่ในระบบใด ผูกไว้กับที่ไหน และเมื่อไรที่ไปที่อื่นได้ — ด้วยภาษาที่คนใช้กันจริง แล้วส่งคุณไปยังเว็บไซต์ของ สปสช. โดยตรง THGov เป็นไดเรกทอรีอิสระที่ไม่ได้สังกัดหน่วยงานใด เราไม่รับเลขบัตรประชาชน ไม่เก็บข้อมูลสุขภาพ และไม่ตรวจสอบสิทธิแทนใครทั้งสิ้น',
				en: 'Tens of millions of people rely on this entitlement, yet the words the system uses for it — “registered primary care unit”, “entitlement registration” — are almost never the words anyone types into a search box. People search for how to check their medical coverage, where the Gold Card can be used, or how to switch hospitals. On top of that, the personal entitlement checker sits behind identity verification and therefore can never surface in search results on its own. What surfaces instead is a chain of unofficial pages carrying stale information. So this page sets out the ideas you need before you use the entitlement — which system you are in, what you are tied to, and when you may go elsewhere — in the language people actually use, and then hands you straight to NHSO’s own site. THGov is an independent directory with no affiliation to any agency: we take no ID numbers, hold no health data and check no one’s entitlement on their behalf.'
			}
		}
	],
	crawl: {
		host: 'www.nhso.go.th',
		verdict: 'partial',
		kind: 'partial',
		status: 200,
		snippet: '# If the Joomla site is installed within a folder\n# eg www.example.com/joomla/ then the robots.txt file\n# MUST be moved to the site root\n# eg www.example.com/robots.txt\n# AND the joomla folder name MUST be prefixed to all of the\n# paths.\n# eg the Disallow rule for the /administrator/ folder MUST\n# be changed to read\n# ',
		checkedAt: '2026-08-27',
		note: {
			th: 'ไฟล์ robots.txt ปิดกั้นบางเส้นทางไว้ แต่ไม่ได้ปิดกั้นทั้งเว็บไซต์ หน้าเนื้อหาทั่วไปจึงยังถูกจัดทำดัชนีได้ ส่วนบริการที่ต้องเข้าสู่ระบบยังไม่ปรากฏในผลการค้นหาตามปกติของระบบที่ต้องยืนยันตัวตน',
			en: 'The robots.txt closes some paths but does not block the site as a whole, so ordinary content pages remain indexable. Services behind a sign-in still do not appear in search results, as is normal for authenticated systems.'
		}
	},
	priority: 91,
	updated: '2026-08-28'
};
