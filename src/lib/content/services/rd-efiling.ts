import type { Service } from '../types';

export const service: Service = {
	slug: 'rd-efiling',
	name: {
		th: 'ยื่นภาษีออนไลน์ กรมสรรพากร (E-FILING) — ภ.ง.ด.90 และ ภ.ง.ด.91',
		en: 'Thai Revenue Department E-Filing — Personal Income Tax Online'
	},
	shortName: { th: 'ยื่นภาษีออนไลน์ สรรพากร', en: 'RD E-Filing' },
	url: 'https://efiling.rd.go.th/',
	altUrls: [
		{ label: { th: 'เว็บไซต์หลัก กรมสรรพากร', en: 'Revenue Department main website' }, url: 'https://www.rd.go.th/' }
	],
	agency: 'rd',
	categories: ['tax-finance'],
	summary: {
		th: 'ยื่นภาษีเงินได้บุคคลธรรมดา ภ.ง.ด.90 และ ภ.ง.ด.91 ออนไลน์กับกรมสรรพากรผ่านระบบ E-FILING พร้อมวิธีเตรียมเอกสาร ค่าลดหย่อน กำหนดเวลายื่น และการขอคืนภาษี',
		en: 'File your Thai income tax return online with the Revenue Department’s E-Filing system — which form to use, what to prepare, allowances, deadlines and refunds.'
	},
	deck: {
		th: 'ระบบยื่นแบบแสดงรายการภาษีทางอินเทอร์เน็ตของกรมสรรพากร ใช้ยื่นภาษีเงินได้บุคคลธรรมดา ภาษีมูลค่าเพิ่ม และภาษีหัก ณ ที่จ่าย ได้ด้วยตัวเองตลอด 24 ชั่วโมง',
		en: 'The Revenue Department’s internet filing system, where individuals and businesses submit income tax, VAT and withholding tax returns themselves, at any hour.'
	},
	keywords: {
		th: [
			'ยื่นภาษีออนไลน์',
			'ยื่นภาษีเงินได้บุคคลธรรมดา',
			'ภ.ง.ด.90',
			'ภ.ง.ด.91',
			'e-filing สรรพากร',
			'กรมสรรพากร ยื่นภาษี',
			'ยื่นภาษีครั้งแรก',
			'ลดหย่อนภาษี',
			'ขอคืนภาษี',
			'เช็คสถานะคืนภาษี',
			'ภาษีหัก ณ ที่จ่าย',
			'ยื่นภาษีมูลค่าเพิ่ม',
			'ยื่นภาษีฟรีแลนซ์'
		],
		en: [
			'Thailand e-filing',
			'Revenue Department Thailand',
			'file Thai income tax online',
			'PND 90 PND 91',
			'Thai tax return deadline',
			'Thailand tax refund',
			'VAT filing Thailand'
		]
	},
	features: [
		{
			icon: 'doc',
			title: { th: 'ยื่นแบบภาษีเงินได้บุคคลธรรมดาด้วยตัวเอง', en: 'File your annual return yourself' },
			text: {
				th: 'กรอกและส่งแบบ ภ.ง.ด.90 หรือ ภ.ง.ด.91 ได้จากที่บ้าน โดยไม่ต้องเดินทางไปสำนักงานสรรพากรพื้นที่สาขา',
				en: 'Complete and submit a Phor Ngor Dor 90 or 91 return from home, without a trip to a district revenue office.'
			}
		},
		{
			icon: 'coins',
			title: { th: 'คำนวณภาษีและค่าลดหย่อนให้อัตโนมัติ', en: 'Tax and allowances calculated for you' },
			text: {
				th: 'ระบบคิดยอดภาษีจากตัวเลขที่กรอกและตรวจเงื่อนไขของค่าลดหย่อนแต่ละรายการให้ ลดความผิดพลาดจากการคำนวณเอง',
				en: 'The system does the arithmetic from what you enter and checks each allowance against its conditions, removing manual calculation errors.'
			}
		},
		{
			icon: 'clock',
			title: { th: 'ยื่นได้ตลอด 24 ชั่วโมง และมักมีเวลามากกว่าแบบกระดาษ', en: 'Open 24/7, and usually a longer window' },
			text: {
				th: 'ทำรายการได้ทุกวันไม่เว้นวันหยุด และผู้ยื่นทางอินเทอร์เน็ตมักได้รับการขยายเวลาออกไปจากกำหนดของการยื่นแบบกระดาษ',
				en: 'Available every day including holidays, and online filers are typically given an extension beyond the paper filing deadline.'
			}
		},
		{
			icon: 'receipt',
			title: { th: 'ขอคืนภาษีและติดตามสถานะได้ในระบบ', en: 'Claim a refund and track it' },
			text: {
				th: 'แจ้งความประสงค์ขอคืนภาษีในแบบเดียวกับที่ยื่น แล้วดูสถานะการคืนเงินและรายการเอกสารที่ถูกขอเพิ่มได้จากบัญชีของคุณ',
				en: 'Request a refund inside the same return, then follow its progress — and any documents you are asked for — from your own account.'
			}
		},
		{
			icon: 'briefcase',
			title: { th: 'รองรับแบบภาษีของผู้ประกอบการ', en: 'Business returns too' },
			text: {
				th: 'นอกจากภาษีเงินได้บุคคลธรรมดา ยังใช้ยื่นแบบภาษีมูลค่าเพิ่มและแบบภาษีหัก ณ ที่จ่ายตามรอบที่กฎหมายกำหนดได้ในระบบเดียวกัน',
				en: 'Beyond personal income tax, the same system takes value-added tax and withholding tax returns on their statutory cycles.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'เป็นช่องทางทางการ ลดความเสี่ยงจากเว็บปลอม', en: 'The official channel, not a lookalike' },
			text: {
				th: 'ยื่นและชำระผ่านระบบของกรมสรรพากรโดยตรง ไม่ต้องฝากข้อมูลรายได้หรือเลขบัญชีไว้กับตัวกลางที่ไม่รู้จัก',
				en: 'File and pay through the Revenue Department’s own system, without handing income details or bank numbers to an unknown intermediary.'
			}
		}
	],
	steps: [
		{
			title: { th: 'รวบรวมเอกสารก่อนเปิดหน้าจอยื่น', en: 'Gather your paperwork first' },
			text: {
				th: 'เตรียมเลขประจำตัวประชาชน หนังสือรับรองการหักภาษี ณ ที่จ่ายจากนายจ้างหรือผู้ว่าจ้าง หลักฐานค่าลดหย่อน เช่น เบี้ยประกันและใบเสร็จเงินบริจาค รวมถึงเลขบัญชีธนาคารหรือพร้อมเพย์ที่จะใช้รับเงินคืน การเตรียมให้ครบก่อนช่วยให้กรอกจบในรอบเดียว',
				en: 'Have your ID number, the withholding tax certificates from your employer or clients, the evidence behind each allowance — insurance premiums, donation receipts and so on — and the bank or PromptPay account you want a refund paid into. Assembling it first lets you finish in one sitting.'
			}
		},
		{
			title: { th: 'สมัครสมาชิกและยืนยันตัวตน หรือเข้าสู่ระบบ', en: 'Register and verify, or sign in' },
			text: {
				th: 'ผู้ใช้ใหม่ต้องลงทะเบียนหนึ่งครั้งด้วยข้อมูลที่ตรงกับทะเบียนของกรมสรรพากร และยืนยันตัวตนตามขั้นตอนที่ระบบกำหนด ใช้อีเมลและเบอร์โทรศัพท์ที่ใช้งานจริง เพราะจะเป็นช่องทางรับรหัสยืนยันและการแจ้งเตือนในปีถัดไปด้วย',
				en: 'New users register once with details matching the Revenue Department’s records and verify their identity as the system directs. Use an email address and phone number you actually use — they carry your verification codes now and your notifications in future years.'
			}
		},
		{
			title: { th: 'เลือกแบบให้ตรงกับประเภทเงินได้ของคุณ', en: 'Pick the form that matches your income' },
			text: {
				th: 'ถ้ามีเฉพาะเงินเดือนหรือค่าจ้างจากการเป็นลูกจ้าง ให้ใช้ ภ.ง.ด.91 ถ้ามีรายได้ประเภทอื่นร่วมด้วย เช่น งานอิสระ ค่าเช่า ขายของออนไลน์ ดอกเบี้ยหรือเงินปันผล ให้ใช้ ภ.ง.ด.90 และรวมทุกแหล่งรายได้ไว้ในแบบเดียว',
				en: 'If your only income is salary or wages from employment, use Phor Ngor Dor 91. If anything else is in the mix — freelance work, rent, online selling, interest or dividends — use Phor Ngor Dor 90 and report every source on that one return.'
			}
		},
		{
			title: { th: 'ตรวจข้อมูลรายได้ที่ระบบดึงมาให้', en: 'Check the income the system has pre-filled' },
			text: {
				th: 'ในบางกรณีระบบจะแสดงข้อมูลเงินได้และภาษีที่ถูกหักไว้ซึ่งนายจ้างนำส่งไว้แล้ว ให้เทียบกับหนังสือรับรองการหักภาษี ณ ที่จ่ายในมือทุกฉบับ หากตัวเลขไม่ตรงหรือขาดนายจ้างบางราย ให้แก้ไขและกรอกเพิ่มให้ครบตามความเป็นจริง',
				en: 'The system may show income and tax already withheld as reported by employers. Compare it line by line with every withholding certificate you hold; if a figure differs or an employer is missing, correct it and add what is missing so the return reflects reality.'
			}
		},
		{
			title: { th: 'กรอกค่าลดหย่อนแล้วตรวจยอดก่อนยืนยัน', en: 'Enter allowances, then review before you submit' },
			text: {
				th: 'ใส่ค่าลดหย่อนเท่าที่มีหลักฐานจริงเท่านั้น แล้วอ่านหน้าสรุปให้ละเอียดว่ายอดภาษีที่ต้องชำระหรือขอคืนตรงกับที่คาดไว้หรือไม่ เมื่อยืนยันการยื่นแล้ว ให้บันทึกหรือพิมพ์หลักฐานการยื่นเก็บไว้',
				en: 'Claim only what you can evidence, then read the summary page carefully to see whether the amount payable or refundable matches what you expected. Once you confirm, save or print the filing acknowledgement.'
			}
		},
		{
			title: { th: 'ชำระภาษีหรือรอรับเงินคืน และเก็บเอกสารไว้', en: 'Pay, or wait for the refund — and keep the file' },
			text: {
				th: 'หากมีภาษีต้องชำระ ให้เลือกช่องทางชำระเงินที่ระบบเสนอและทำให้เสร็จภายในกำหนด หากมีสิทธิ์ขอคืน ให้ติดตามสถานะในระบบเป็นระยะ และเก็บเอกสารประกอบทั้งหมดไว้ เพราะเจ้าหน้าที่อาจขอให้ส่งเพิ่มเพื่อตรวจสอบ',
				en: 'If tax is due, choose one of the payment channels offered and settle it before the deadline. If a refund is due, check the status periodically and keep every supporting document — officials may ask you to submit some for verification.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ใครบ้างที่ต้องยื่นภาษีเงินได้บุคคลธรรมดา', en: 'Who has to file a personal income tax return?' },
			a: {
				th: 'ผู้ที่มีเงินได้ถึงเกณฑ์ตามที่กฎหมายกำหนดในปีภาษีนั้นมีหน้าที่ยื่นแบบ แม้คำนวณแล้วจะไม่มีภาษีต้องชำระก็ตาม ทั้งพนักงานประจำ ฟรีแลนซ์ ผู้ค้าออนไลน์ และผู้มีรายได้จากค่าเช่าหรือการลงทุน อยู่ในข่ายที่ต้องพิจารณาทั้งหมด เกณฑ์เงินได้ขั้นต่ำต่างกันตามประเภทเงินได้และสถานภาพสมรส และมีการปรับปรุงเป็นระยะ จึงควรตรวจเกณฑ์ของปีภาษีที่กำลังจะยื่นจากเว็บไซต์กรมสรรพากรก่อนสรุปว่าตัวเองไม่ต้องยื่น',
				en: 'Anyone whose income for the tax year reaches the threshold set by law must file, even if the calculation ends with no tax to pay. Salaried employees, freelancers, online sellers and people with rental or investment income all need to check. The minimum thresholds vary by type of income and marital status and are revised from time to time, so confirm the figures for the year you are filing on the Revenue Department’s site before concluding that you are exempt.'
			}
		},
		{
			q: { th: 'ภ.ง.ด.90 กับ ภ.ง.ด.91 ต่างกันอย่างไร', en: 'What is the difference between Phor Ngor Dor 90 and 91?' },
			a: {
				th: 'ภ.ง.ด.91 ใช้กับผู้ที่มีเงินได้จากการจ้างแรงงานเพียงอย่างเดียว เช่น พนักงานที่รับเงินเดือนโดยไม่มีรายได้ประเภทอื่นเลย ส่วน ภ.ง.ด.90 ใช้กับผู้ที่มีเงินได้ประเภทอื่นด้วย ไม่ว่าจะเป็นงานรับจ้างอิสระ ค่าเช่า การขายของ ดอกเบี้ย หรือเงินปันผล หากปีนั้นคุณมีทั้งเงินเดือนและรายได้เสริม ให้ยื่น ภ.ง.ด.90 เพียงแบบเดียว โดยรวมรายได้ทุกแหล่งไว้ด้วยกัน ไม่ใช่ยื่นแยกคนละแบบ',
				en: 'Phor Ngor Dor 91 is for people whose only income is employment income — a salaried worker with nothing else coming in. Phor Ngor Dor 90 is for everyone with other categories of income as well: freelance work, rent, trading, interest or dividends. If you had both a salary and side income during the year, you file a single Phor Ngor Dor 90 covering all of it, not two separate returns.'
			}
		},
		{
			q: { th: 'ยื่นภาษีออนไลน์ได้ถึงวันไหน', en: 'What is the deadline for filing online?' },
			a: {
				th: 'ฤดูกาลยื่นแบบของปีภาษีที่ผ่านมาจะเปิดตั้งแต่ต้นเดือนมกราคม โดยทั่วไปการยื่นแบบกระดาษกำหนดไว้ภายในเดือนมีนาคมของปีถัดไป และผู้ที่ยื่นผ่านอินเทอร์เน็ตมักได้รับการขยายเวลาออกไปอีกช่วงหนึ่ง วันสุดท้ายของการยื่นออนไลน์ไม่เท่ากันทุกปีเพราะขึ้นอยู่กับประกาศของปีนั้น จึงควรตรวจวันที่แน่นอนจากเว็บไซต์ทางการ และไม่ควรรอถึงวันสุดท้าย เพราะช่วงโค้งสุดท้ายระบบมักมีผู้ใช้งานหนาแน่น',
				en: 'The season for the previous tax year opens in early January. Paper returns are generally due within March of the following year, and internet filers are usually granted an extension beyond that. The exact final date for online filing differs from year to year because it depends on that year’s announcement, so check it on the official site — and do not leave it to the last day, when the system is at its busiest.'
			}
		},
		{
			q: { th: 'เข้าระบบไม่ได้ หรือไม่ได้รับรหัส OTP ต้องทำอย่างไร', en: 'I cannot sign in, or the OTP never arrives. What now?' },
			a: {
				th: 'เริ่มจากตรวจว่าเลขประจำตัวผู้เสียภาษีและรหัสผ่านที่ใช้ตรงกับตอนลงทะเบียนหรือไม่ ถ้าลืมรหัสผ่าน ให้ใช้เมนูลืมรหัสผ่านบนหน้าเข้าสู่ระบบเพื่อตั้งใหม่ กรณีรหัส OTP ไม่เข้า ให้ตรวจว่าเบอร์โทรศัพท์หรืออีเมลที่ลงทะเบียนไว้ยังใช้งานได้จริง ตรวจกล่องจดหมายขยะ แล้วขอรหัสใหม่อีกครั้งหลังเว้นระยะสักครู่ หากเบอร์หรืออีเมลเดิมใช้ไม่ได้แล้ว ต้องติดต่อสำนักงานสรรพากรพื้นที่หรือช่องทางติดต่อทางการที่ประกาศไว้บนเว็บไซต์ เพราะการแก้ไขข้อมูลติดต่อต้องยืนยันตัวตนก่อน',
				en: 'Start by confirming that the taxpayer ID and password match what you registered; if the password is gone, use the forgotten-password link on the sign-in page. If the OTP does not arrive, check that the registered phone number or email address still works, look in the spam folder, and request a fresh code after a short pause. If the old number or address is no longer yours, contact your area revenue office or the official contact channel listed on the website — changing your contact details requires identity verification.'
			}
		},
		{
			q: { th: 'ยื่นแบบไปแล้วเพิ่งรู้ว่ากรอกผิด แก้ได้ไหม', en: 'I have filed and then spotted a mistake. Can I fix it?' },
			a: {
				th: 'แก้ไขได้ โดยยื่นแบบเพื่อปรับปรุงรายการใหม่ในระบบ ถ้ายังอยู่ในกำหนดเวลายื่นของปีนั้น การแก้ไขมักไม่มีภาระเพิ่ม แต่ถ้าพ้นกำหนดแล้วและการแก้ไขทำให้มีภาษีต้องชำระเพิ่มขึ้น อาจมีเงินเพิ่มหรือเบี้ยปรับตามที่กฎหมายกำหนด กรณีที่ซับซ้อน เช่น ยื่นผิดแบบทั้งฉบับ หรือยื่นซ้ำหลายครั้ง ควรติดต่อสำนักงานสรรพากรพื้นที่เพื่อให้เจ้าหน้าที่แนะนำวิธีที่ถูกต้อง จะเร็วกว่าลองแก้เองไปเรื่อย ๆ',
				en: 'Yes — you submit a corrected return through the system. While you are still inside the filing window, an amendment usually carries no extra burden; after the deadline, if the correction increases the tax due, surcharges or penalties may apply under the law. For tangled cases — the wrong form entirely, or several duplicate submissions — contact your area revenue office and let staff walk you through it rather than experimenting.'
			}
		},
		{
			q: { th: 'เงินคืนภาษีเข้าเมื่อไหร่ และรับทางช่องทางไหน', en: 'When and how is a tax refund paid?' },
			a: {
				th: 'เมื่อยื่นแบบแล้วพบว่าชำระภาษีไว้เกิน คุณแจ้งความประสงค์ขอคืนได้ในแบบฉบับเดียวกัน เงินคืนจะโอนเข้าบัญชีพร้อมเพย์ที่ผูกกับเลขประจำตัวประชาชน หรือบัญชีธนาคารตามช่องทางที่กรมสรรพากรกำหนดไว้ในปีนั้น ระยะเวลาขึ้นอยู่กับว่าต้องส่งเอกสารเพิ่มเติมหรือไม่ ถ้าถูกขอเอกสารแล้วส่งช้า การคืนเงินก็ช้าตามไปด้วย จึงควรเข้าไปดูสถานะในระบบเป็นระยะแทนการรอเฉย ๆ',
				en: 'If the return shows you overpaid, you request the refund inside that same return. Money is transferred to the PromptPay account linked to your ID card number, or to a bank account through the channel the Revenue Department specifies that year. Timing depends on whether extra documents are requested; a slow response from you means a slow refund, so check the status in the system now and then rather than simply waiting.'
			}
		},
		{
			q: { th: 'ได้ SMS บอกว่ามีเงินคืนภาษี ให้กดลิงก์ยืนยัน เป็นของจริงไหม', en: 'I got an SMS about a tax refund with a link. Is it real?' },
			a: {
				th: 'ให้ถือว่าเป็นข้อความหลอกลวงไว้ก่อน กรมสรรพากรไม่ส่งลิงก์ให้กรอกรหัสผ่านธนาคารหรือรหัส OTP ทางข้อความ และไม่มีการเรียกเก็บค่าธรรมเนียมล่วงหน้าเพื่อแลกกับการคืนภาษี วิธีตรวจสอบที่ปลอดภัยที่สุดคือเข้าระบบด้วยตัวเอง โดยพิมพ์ที่อยู่เว็บไซต์ของกรมสรรพากรซึ่งอยู่ภายใต้โดเมน rd.go.th แล้วดูสถานะการคืนภาษีในบัญชีของคุณ และไม่ควรติดตั้งแอปพลิเคชันใด ๆ ตามคำแนะนำในข้อความเหล่านั้นเด็ดขาด',
				en: 'Treat it as a scam until proven otherwise. The Revenue Department does not text links asking for banking passwords or OTP codes, and no fee is ever collected up front in exchange for a refund. The safe way to check is to open the system yourself by typing the department’s address, which lives under the rd.go.th domain, and reading the refund status in your own account — and never install an app that such a message recommends.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ระบบ E-FILING ของกรมสรรพากรคืออะไร', en: 'What the Revenue Department’s E-Filing system is' }
		},
		{
			type: 'p',
			text: {
				th: 'E-FILING คือช่องทางยื่นแบบแสดงรายการภาษีทางอินเทอร์เน็ตของกรมสรรพากร ใช้แทนการกรอกแบบกระดาษแล้วเดินทางไปยื่นที่สำนักงานสรรพากรพื้นที่สาขา ผู้มีเงินได้บุคคลธรรมดาใช้ระบบนี้ยื่นแบบประจำปีคือ ภ.ง.ด.90 และ ภ.ง.ด.91 ส่วนผู้ประกอบการใช้ยื่นแบบภาษีมูลค่าเพิ่มและแบบภาษีหัก ณ ที่จ่ายตามรอบที่กฎหมายกำหนด จุดเด่นของการยื่นแบบทางอินเทอร์เน็ตคือระบบคำนวณภาษีให้จากตัวเลขที่กรอก และแจ้งผลทันทีว่าต้องชำระเพิ่ม ไม่มีภาษีต้องชำระ หรือมีสิทธิ์ขอคืน โดยไม่ต้องคิดเองบนกระดาษทด',
				en: 'E-Filing is the Revenue Department’s internet channel for submitting tax returns — the replacement for filling in a paper form and carrying it to a district revenue office. Individuals use it for the annual Phor Ngor Dor 90 and Phor Ngor Dor 91 returns; businesses use it for value-added tax and withholding tax returns on their statutory cycles. Its practical advantage is that the arithmetic happens as you type: the system works out whether you owe more, owe nothing, or are entitled to a refund, and tells you straight away.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ใครต้องยื่นภาษีเงินได้บุคคลธรรมดา', en: 'Who must file a personal income tax return' }
		},
		{
			type: 'p',
			text: {
				th: 'หน้าที่ยื่นแบบไม่ได้ขึ้นอยู่กับว่าสุดท้ายแล้วมีภาษีต้องจ่ายหรือไม่ แต่ขึ้นอยู่กับว่าเงินได้ในปีภาษีนั้นถึงเกณฑ์ที่กฎหมายกำหนดหรือเปล่า พนักงานเงินเดือน ฟรีแลนซ์ ผู้ขายของออนไลน์ เจ้าของห้องเช่า และผู้มีรายได้จากดอกเบี้ยหรือเงินปันผล ล้วนต้องพิจารณาตัวเองทั้งสิ้น เกณฑ์เงินได้ขั้นต่ำต่างกันตามประเภทเงินได้และสถานภาพสมรส ทั้งยังถูกปรับปรุงเป็นระยะตามกฎหมายที่ออกใหม่ ดังนั้นตัวเลขที่เคยจำไว้เมื่อหลายปีก่อนอาจไม่ใช่ตัวเลขของปีนี้ ควรตรวจเกณฑ์ปัจจุบันจากเว็บไซต์กรมสรรพากรก่อนตัดสินใจว่าไม่ต้องยื่น',
				en: 'The duty to file does not hinge on whether you end up owing anything; it hinges on whether your income for the tax year reached the level the law sets. Salaried staff, freelancers, online sellers, landlords and people earning interest or dividends all have to weigh it up. The thresholds differ by category of income and by marital status, and they are revised as new legislation appears — so a figure you memorised a few years ago may no longer be this year’s figure. Check the current thresholds on the Revenue Department’s site before deciding you are in the clear.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ถูกหักภาษี ณ ที่จ่ายไปแล้ว ยังต้องยื่นอยู่ไหม', en: 'Tax was withheld all year — do I still file?' },
			text: {
				th: 'การที่นายจ้างหักภาษี ณ ที่จ่ายทุกเดือนไม่ได้แปลว่ายื่นแบบเรียบร้อยแล้ว การหักคือการทยอยจ่ายภาษีล่วงหน้า ส่วนการยื่นแบบคือการสรุปทั้งปีว่าจ่ายไว้พอดี ขาด หรือเกิน คนจำนวนมากที่ถูกหักไว้เกินจะได้เงินส่วนเกินคืนก็ต่อเมื่อยื่นแบบเท่านั้น หากไม่ยื่นก็เท่ากับปล่อยเงินของตัวเองทิ้งไว้',
				en: 'Monthly withholding by your employer is not the same as filing. Withholding is tax paid in advance, instalment by instalment; the return is the year-end reckoning that shows whether those instalments were right, short or too much. Plenty of people who overpaid only get the excess back because they filed — skip the return and you simply leave your own money behind.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ภ.ง.ด.90 กับ ภ.ง.ด.91 เลือกแบบไหน', en: 'Choosing between Phor Ngor Dor 90 and 91' }
		},
		{
			type: 'table',
			caption: { th: 'เทียบแบบแสดงรายการภาษีเงินได้บุคคลธรรมดาสองแบบหลัก', en: 'The two main personal income tax return forms' },
			head: [
				{ th: 'ลักษณะรายได้ของคุณ', en: 'Your income looks like this' },
				{ th: 'แบบที่ใช้', en: 'Form to use' },
				{ th: 'สิ่งที่ต้องเตรียมเพิ่ม', en: 'What to have ready' }
			],
			rows: [
				[
					{ th: 'มีเงินเดือนหรือค่าจ้างจากการเป็นลูกจ้างเท่านั้น', en: 'Salary or wages from employment only' },
					{ th: 'ภ.ง.ด.91', en: 'Phor Ngor Dor 91' },
					{ th: 'หนังสือรับรองการหักภาษี ณ ที่จ่ายจากนายจ้างทุกแห่งในปีนั้น', en: 'A withholding certificate from every employer you had that year' }
				],
				[
					{ th: 'มีรายได้อื่นนอกเหนือจากเงินเดือน เช่น รับงานอิสระ ค่าเช่า ขายของออนไลน์ ดอกเบี้ย เงินปันผล', en: 'Income beyond salary — freelance fees, rent, online sales, interest, dividends' },
					{ th: 'ภ.ง.ด.90', en: 'Phor Ngor Dor 90' },
					{ th: 'หลักฐานรายรับและต้นทุนของเงินได้แต่ละประเภท เพราะวิธีหักค่าใช้จ่ายไม่เหมือนกัน', en: 'Records of receipts and costs for each income category — deduction rules differ by category' }
				],
				[
					{ th: 'มีทั้งเงินเดือนประจำและรายได้เสริมในปีเดียวกัน', en: 'Both a regular salary and side income in the same year' },
					{ th: 'ภ.ง.ด.90 เพียงแบบเดียว', en: 'A single Phor Ngor Dor 90' },
					{ th: 'รวมรายได้ทุกแหล่งไว้ในแบบเดียวกัน ไม่ต้องยื่นแยกฉบับ', en: 'Everything on one return — do not file two separate ones' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ค่าลดหย่อน: รวบรวมหลักฐานก่อนเริ่มกรอก', en: 'Allowances: collect the evidence before you start typing' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ค่าลดหย่อนส่วนตัว คู่สมรสที่ไม่มีเงินได้ บุตร และบิดามารดาที่อยู่ในความอุปการะ',
					en: 'Personal allowance, a spouse without income, children, and dependent parents.'
				},
				{
					th: 'เบี้ยประกันชีวิต ประกันสุขภาพของตนเอง และประกันสุขภาพของบิดามารดา',
					en: 'Life insurance premiums, your own health insurance, and health cover for your parents.'
				},
				{
					th: 'เงินสะสมกองทุนสำรองเลี้ยงชีพ กองทุนบำเหน็จบำนาญข้าราชการ และเงินสมทบประกันสังคม',
					en: 'Provident fund contributions, the government pension fund, and social security contributions.'
				},
				{
					th: 'เงินลงทุนในกองทุนรวมเพื่อการเลี้ยงชีพ และกองทุนรวมอื่นที่ได้รับสิทธิ์ลดหย่อนภาษีในปีนั้น ตามเงื่อนไขการถือครองที่กรมสรรพากรกำหนด',
					en: 'Retirement mutual funds and any other fund carrying a deduction that year, subject to the holding conditions the Revenue Department sets.'
				},
				{
					th: 'ดอกเบี้ยเงินกู้ยืมเพื่อซื้อ เช่าซื้อ หรือสร้างที่อยู่อาศัย',
					en: 'Interest on a loan to buy, hire-purchase or build a home.'
				},
				{
					th: 'เงินบริจาคให้สถานศึกษา สถานพยาบาล ศาสนสถาน หรือองค์กรสาธารณกุศลที่อยู่ในข่ายได้รับสิทธิ์',
					en: 'Donations to qualifying schools, hospitals, religious institutions and registered charities.'
				},
				{
					th: 'มาตรการลดหย่อนเฉพาะปี เช่น ค่าใช้จ่ายจากการซื้อสินค้าและบริการตามโครงการกระตุ้นเศรษฐกิจ ซึ่งมีเฉพาะบางปี มีช่วงเวลาใช้สิทธิ์จำกัด และมักต้องใช้ใบกำกับภาษีอิเล็กทรอนิกส์เป็นหลักฐาน',
					en: 'Year-specific stimulus deductions, such as spending under a government consumption scheme — these appear only in some years, run for a limited window, and usually require an electronic tax invoice as proof.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ตัวเลขลดหย่อนเปลี่ยนได้ทุกปี', en: 'The numbers move every year' },
			text: {
				th: 'เพดานของค่าลดหย่อนแต่ละรายการ อัตราภาษีแบบขั้นบันได และเงื่อนไขของมาตรการเฉพาะปี ถูกปรับปรุงอยู่เสมอ ตัวเลขที่จำมาจากปีก่อน หรือที่เห็นในโพสต์สรุปตามโซเชียลและบทความเก่า อาจใช้กับปีภาษีนี้ไม่ได้เลย ให้ยึดข้อมูลบนเว็บไซต์กรมสรรพากรและหน้าจอในระบบยื่นแบบเป็นหลักเสมอ',
				en: 'Ceilings for each allowance, the progressive rate bands and the terms of any year-specific measure are all subject to change. A number you remember from last year, or one lifted from a social media summary or an old blog post, may simply not apply to this tax year. Take the Revenue Department’s own website and the figures shown inside the filing system as the authority.'
			}
		},
		{
			type: 'h2',
			text: { th: 'กำหนดเวลายื่น การชำระเงิน และการขอคืนภาษี', en: 'Deadlines, payment and refunds' }
		},
		{
			type: 'p',
			text: {
				th: 'ฤดูกาลยื่นภาษีเงินได้บุคคลธรรมดาของปีภาษีที่ผ่านมาจะเปิดตั้งแต่ต้นเดือนมกราคม โดยทั่วไปการยื่นแบบกระดาษต้องยื่นภายในเดือนมีนาคมของปีถัดไป ส่วนผู้ที่ยื่นผ่านอินเทอร์เน็ตมักได้รับการขยายเวลาออกไปอีกช่วงหนึ่ง ซึ่งวันสุดท้ายไม่เท่ากันทุกปี จึงควรตรวจกำหนดของปีนั้นจากประกาศบนเว็บไซต์ทางการก่อนวางแผน เมื่อยื่นแล้วหากมีภาษีต้องชำระ ระบบจะเสนอช่องทางชำระเงินให้เลือก และบางกรณีสามารถขอผ่อนชำระได้ตามเงื่อนไขที่กรมสรรพากรกำหนด ส่วนผู้ที่ชำระไว้เกิน เงินคืนจะโอนเข้าบัญชีพร้อมเพย์ที่ผูกกับเลขประจำตัวประชาชนหรือบัญชีธนาคารตามช่องทางที่กำหนดไว้ ระหว่างรอให้เก็บหนังสือรับรองการหักภาษี ณ ที่จ่าย ใบเสร็จ และหลักฐานค่าลดหย่อนทั้งหมดไว้ เพราะเจ้าหน้าที่อาจขอเอกสารเพิ่มเพื่อตรวจสอบก่อนอนุมัติคืนเงิน',
				en: 'The season for the previous tax year opens in early January. Paper returns are generally due within March of the following year, while internet filers are usually granted a further extension whose final date is not the same every year — so check that year’s announcement on the official site before you plan around it. If tax is payable, the system offers payment channels to choose from, and in some circumstances you can apply to pay in instalments under the department’s conditions. If you overpaid, the refund goes to the PromptPay account linked to your ID card number or to a bank account through the specified channel. While you wait, hold on to your withholding certificates, receipts and allowance evidence: officials may ask for them before the refund is approved.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ระวังข้อความหลอกลวงที่อ้างว่าเป็นเงินคืนภาษี', en: 'Beware of fake tax-refund messages' }
		},
		{
			type: 'p',
			text: {
				th: 'ช่วงฤดูกาลยื่นภาษีเป็นเวลาที่มิจฉาชีพขยันที่สุด รูปแบบที่พบบ่อยคือ SMS หรือข้อความแชทที่อ้างว่าคุณมีสิทธิ์ได้รับเงินคืนภาษี และให้กดลิงก์เพื่อยืนยันบัญชีภายในวันนี้ ปลายทางคือหน้าเว็บหรือแอปปลอมที่เลียนแบบของจริง แล้วขอรหัสผ่านธนาคาร รหัส OTP หรือหลอกให้ติดตั้งแอปที่ควบคุมเครื่องจากระยะไกล ข้อสังเกตที่ใช้ได้เสมอคือ กรมสรรพากรไม่ขอรหัสผ่านหรือ OTP ผ่านข้อความ ไม่เร่งให้ทำรายการภายในกี่ชั่วโมง และการรับเงินคืนภาษีไม่มีการเรียกเก็บค่าธรรมเนียมล่วงหน้า เมื่อได้รับข้อความลักษณะนี้ ให้เข้าระบบด้วยตัวเองโดยพิมพ์ที่อยู่เว็บไซต์ซึ่งอยู่ภายใต้โดเมน rd.go.th แล้วตรวจสถานะจากในบัญชีของคุณเอง',
				en: 'Filing season is when scammers work hardest. The usual form is an SMS or chat message announcing that you are due a refund and must tap a link to confirm your account today. The link leads to a page or app that imitates the real thing and then asks for banking passwords or OTP codes, or pushes you to install software that hands over remote control of your phone. Three things are always true: the Revenue Department does not ask for passwords or OTPs by message, it does not impose a countdown, and it never charges a fee up front to release a refund. When such a message arrives, open the system yourself by typing an address under the rd.go.th domain and read the status in your own account.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงต้องมีอยู่', en: 'Why a page like this needs to exist' }
		},
		{
			type: 'p',
			text: {
				th: 'ระบบยื่นแบบออนไลน์เกือบทั้งหมดอยู่หลังหน้าเข้าสู่ระบบ เครื่องมือค้นหาจึงมองไม่เห็นเนื้อหาข้างใน แม้ระบบจะไม่ได้ปิดกั้นการเก็บข้อมูลก็ตาม ผลคือเมื่อคนพิมพ์คำอย่าง “ยื่นภาษีออนไลน์” หรือ “ภ.ง.ด.91 ยื่นยังไง” ในช่วงที่ใกล้ถึงกำหนด สิ่งที่ขึ้นมาก่อนมักเป็นบทความสรุปของปีเก่า โฆษณา หรือเว็บไซต์ที่ตั้งชื่อให้คล้ายของจริง ซึ่งเป็นจังหวะที่มิจฉาชีพรอใช้ประโยชน์พอดี หน้านี้จึงอธิบายบริการด้วยคำที่คนใช้ค้นหาจริง บอกให้ชัดว่าแบบไหนใช้กับใคร ต้องเตรียมอะไร แล้วส่งต่อไปยังที่อยู่ทางการเพียงแห่งเดียว THGov เป็นสารบบอิสระ ไม่ได้สังกัดกรมสรรพากร ไม่รับยื่นแบบแทนใคร และไม่เก็บข้อมูลรายได้หรือข้อมูลภาษีของผู้ใช้ทั้งสิ้น',
				en: 'Almost everything inside the filing system sits behind a sign-in, so search engines cannot see it even though nothing there blocks crawlers. The consequence is that when someone types “file tax online” or “how do I submit Phor Ngor Dor 91” as the deadline closes in, what surfaces first tends to be a summary written for an earlier year, an advertisement, or a site named to resemble the real one — precisely the gap scammers wait for. This page describes the service in the words people actually search with, sets out which form applies to whom and what to prepare, and then hands you a single official address. THGov is an independent directory: not affiliated with the Revenue Department, unable to file on anyone’s behalf, and holding no income or tax data of any kind.'
			}
		}
	],
	crawl: {
		host: 'efiling.rd.go.th',
		verdict: 'none',
		status: 404,
		snippet: 'GET /robots.txt  ->  HTTP 404 Not Found',
		checkedAt: '2026-08-27',
		note: {
			th: 'ระบบยื่นแบบออนไลน์ไม่มีไฟล์ robots.txt ซึ่งตามมาตรฐานหมายความว่าเปิดให้เก็บข้อมูลได้ แต่เนื้อหาส่วนใหญ่อยู่หลังการเข้าสู่ระบบจึงไม่ปรากฏในผลการค้นหาอยู่ดี ส่วนเว็บไซต์หลัก www.rd.go.th เปิดให้เก็บข้อมูลได้เกือบทั้งหมด',
			en: 'The e-filing system serves no robots.txt, which by convention means crawling is permitted — but almost everything sits behind a login, so little of it is indexable anyway. The main site, www.rd.go.th, is broadly open to crawlers.'
		}
	},
	priority: 98,
	updated: '2026-08-27'
};
