import type { Service } from '../types';

export const service: Service = {
	slug: 'cgd-comptroller',
	name: {
		th: 'กรมบัญชีกลาง — สวัสดิการรักษาพยาบาลข้าราชการและการเบิกจ่ายภาครัฐ',
		en: 'Comptroller General’s Department — Civil Servant Benefits and State Disbursement'
	},
	shortName: { th: 'กรมบัญชีกลาง', en: 'Comptroller General’s Dept' },
	url: 'https://www.cgd.go.th/',
	agency: 'cgd',
	categories: ['tax-finance', 'health-welfare'],
	summary: {
		th: 'สรุปงานของกรมบัญชีกลาง ทั้งสิทธิรักษาพยาบาลข้าราชการและผู้รับบำนาญ บำเหน็จบำนาญ บัตรสวัสดิการแห่งรัฐ ระเบียบการเบิกจ่าย และระบบ e-GP พร้อมลิงก์เว็บไซต์ทางการ',
		en: 'What the Comptroller General’s Department handles: medical benefits for civil servants and pensioners, pensions, the state welfare card, disbursement rules and e-GP.'
	},
	deck: {
		th: 'หน่วยงานที่กำหนดว่าเงินของแผ่นดินจะจ่ายออกไปได้เมื่อไรและอย่างไร ตั้งแต่ค่ารักษาพยาบาลของข้าราชการ ไปจนถึงเงินที่ผู้ค้ากับภาครัฐรออยู่',
		en: 'The department that decides when and how state money leaves the treasury — from a civil servant’s hospital bill to the invoice a government supplier is still waiting on.'
	},
	keywords: {
		th: [
			'กรมบัญชีกลาง',
			'สิทธิข้าราชการ รักษาพยาบาล',
			'เบิกค่ารักษาพยาบาลข้าราชการ',
			'เบิกจ่ายตรง',
			'เช็คสิทธิเบิกจ่ายตรง',
			'ข้าราชการบำนาญ รักษาพยาบาล',
			'บำเหน็จบำนาญข้าราชการ',
			'พ่อแม่เบิกค่ารักษาข้าราชการได้ไหม',
			'ระเบียบการเบิกจ่ายเงินภาครัฐ',
			'หนังสือเวียนกรมบัญชีกลาง',
			'บัตรสวัสดิการแห่งรัฐ',
			'ลงทะเบียนสิทธิบุคลากรภาครัฐ',
			'จัดซื้อจัดจ้างภาครัฐ e-GP'
		],
		en: [
			'Comptroller General’s Department',
			'CGD Thailand',
			'Civil Servant Medical Benefit Scheme',
			'CSMBS Thailand',
			'Thai government pension',
			'government disbursement regulations Thailand',
			'state welfare card Thailand',
			'e-GP Thailand'
		]
	},
	features: [
		{
			icon: 'heart',
			title: { th: 'สิทธิรักษาพยาบาลของข้าราชการ', en: 'Civil-servant medical benefits' },
			text: {
				th: 'กรมบัญชีกลางเป็นผู้วางหลักเกณฑ์ว่าค่ารักษาพยาบาลรายการใดเบิกได้ เบิกได้เท่าใด และต้องใช้เอกสารอะไรประกอบ',
				en: 'The department sets the rules on which medical costs can be claimed, up to what limit, and with what supporting documents.'
			}
		},
		{
			icon: 'users',
			title: { th: 'ครอบคลุมถึงคนในครอบครัว', en: 'Cover extends to family' },
			text: {
				th: 'สิทธิไม่ได้จำกัดเฉพาะตัวข้าราชการ แต่ครอบคลุมบิดามารดา คู่สมรส และบุตรตามเงื่อนไขที่ระเบียบกำหนด',
				en: 'Entitlement is not limited to the official: parents, a spouse and children may also be covered under the conditions in the regulations.'
			}
		},
		{
			icon: 'coins',
			title: { th: 'บำเหน็จบำนาญของข้าราชการเกษียณ', en: 'Pensions and gratuities' },
			text: {
				th: 'ดูแลการขอรับและการจ่ายบำเหน็จบำนาญ รวมถึงสิทธิที่ต่อเนื่องไปถึงทายาทเมื่อผู้รับบำนาญเสียชีวิต',
				en: 'Administers pension and gratuity claims and payments, including the entitlements that pass to heirs when a pensioner dies.'
			}
		},
		{
			icon: 'book',
			title: { th: 'ระเบียบและหนังสือเวียนที่ต้องอ้างอิง', en: 'The regulations officers must cite' },
			text: {
				th: 'ออกระเบียบ หลักเกณฑ์ และหนังสือเวียนที่เจ้าหน้าที่การเงินทุกส่วนราชการต้องใช้เป็นฐานในการตั้งเบิก',
				en: 'Issues the regulations, criteria and circulars that finance officers across every agency must rely on when raising a payment.'
			}
		},
		{
			icon: 'id',
			title: { th: 'การจ่ายเงินสวัสดิการเข้าบัตรสวัสดิการแห่งรัฐ', en: 'State welfare card payments' },
			text: {
				th: 'รับผิดชอบด้านการจ่ายเงินสวัสดิการของรัฐเข้าสู่บัตรสวัสดิการแห่งรัฐและบัญชีของผู้มีสิทธิ',
				en: 'Responsible for moving state welfare payments onto the welfare card and into recipients’ accounts.'
			}
		},
		{
			icon: 'briefcase',
			title: { th: 'เจ้าของระบบจัดซื้อจัดจ้างภาครัฐ e-GP', en: 'Owner of the e-GP procurement system' },
			text: {
				th: 'กำกับดูแลระบบจัดซื้อจัดจ้างภาครัฐด้วยอิเล็กทรอนิกส์ ซึ่งเป็นทางเข้าเดียวของผู้ค้าที่ต้องการขายให้หน่วยงานรัฐ',
				en: 'Oversees the electronic government procurement system — the single gateway for any supplier selling to the Thai state.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ต้นทางที่ใช้ยืนยันข่าวลือได้', en: 'The source that settles a rumour' },
			text: {
				th: 'เมื่อมีข่าวเรื่องเงินสวัสดิการหรือสิทธิใหม่ ๆ แพร่ในโซเชียล ประกาศบนเว็บไซต์ทางการคือหลักฐานที่ใช้ตรวจสอบได้',
				en: 'When claims about new payouts or entitlements spread on social media, the official announcements are what you check them against.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ระบุก่อนว่าคุณอยู่ในสถานะการจ้างงานแบบใด', en: 'Work out your employment status first' },
			text: {
				th: 'สิทธิรักษาพยาบาลของภาครัฐไม่ได้เป็นระบบเดียวกันทั้งหมด ข้าราชการและลูกจ้างประจำใช้สวัสดิการรักษาพยาบาลข้าราชการ ส่วนพนักงานราชการและลูกจ้างชั่วคราวอยู่ในระบบประกันสังคม การเข้าใจข้อนี้ก่อนช่วยให้ไม่เสียเวลาอ่านระเบียบที่ไม่เกี่ยวกับตัวเอง',
				en: 'Public-sector health cover is not one single scheme. Civil servants and permanent employees use the civil-servant medical benefit scheme, while government employees on contract and temporary staff fall under social security. Settling this first saves you reading regulations that do not apply to you.'
			}
		},
		{
			title: { th: 'ตรวจสอบว่าชื่อของคุณและคนในครอบครัวอยู่ในฐานข้อมูลแล้ว', en: 'Check that you and your family are in the database' },
			text: {
				th: 'สิทธิจะใช้ได้จริงก็ต่อเมื่อหน่วยงานต้นสังกัดนำข้อมูลของผู้มีสิทธิและบุคคลในครอบครัวเข้าสู่ฐานข้อมูลบุคลากรภาครัฐเรียบร้อยแล้ว หากเพิ่งบรรจุ เพิ่งแต่งงาน เพิ่งมีบุตร หรือเพิ่งเกษียณ ให้แจ้งงานการเจ้าหน้าที่ปรับปรุงข้อมูลทันที',
				en: 'Entitlement only works once your agency has entered you and your dependants into the government personnel database. If you have just been appointed, married, had a child or retired, ask your HR office to update the record straight away.'
			}
		},
		{
			title: { th: 'เข้าเว็บไซต์ทางการเพื่อค้นระเบียบและหนังสือเวียนที่เกี่ยวข้อง', en: 'Search the official site for the relevant regulation' },
			text: {
				th: 'ให้ค้นจากช่องค้นหาภายในเว็บไซต์กรมบัญชีกลางโดยตรง เพราะเอกสารจำนวนมากไม่ปรากฏในผลการค้นหาของเสิร์ชเอนจิน และควรดูวันที่ของหนังสือทุกครั้ง เนื่องจากหลักเกณฑ์เก่ามักถูกยกเลิกหรือแก้ไขด้วยฉบับใหม่',
				en: 'Use the search box on the department’s own website, because many documents never surface in search engines. Always check the date on a circular — older criteria are frequently superseded or amended by a later issue.'
			}
		},
		{
			title: { th: 'ใช้สิทธิที่สถานพยาบาลด้วยระบบเบิกจ่ายตรง', en: 'Use direct billing at the hospital' },
			text: {
				th: 'สถานพยาบาลที่เข้าร่วมระบบเบิกจ่ายตรงจะเรียกเก็บค่ารักษาจากทางราชการโดยตรง ผู้มีสิทธิไม่ต้องสำรองจ่ายแล้วมาตั้งเบิกภายหลัง ควรแจ้งสิทธิและยื่นบัตรประจำตัวประชาชนตั้งแต่ขั้นตอนลงทะเบียนที่เวชระเบียน',
				en: 'Hospitals in the direct-billing system charge the state directly, so you do not pay up front and claim it back later. Declare your entitlement and present your ID card at registration, before treatment starts.'
			}
		},
		{
			title: { th: 'ถ้าเบิกไม่ผ่าน ให้ไล่ลำดับจากต้นสังกัดก่อน', en: 'If a claim is refused, start with your own agency' },
			text: {
				th: 'ปัญหาส่วนใหญ่จบที่ฝ่ายการเงินหรืองานการเจ้าหน้าที่ของหน่วยงานต้นสังกัด เพราะมักเกิดจากข้อมูลในฐานทะเบียนไม่ตรงหรือเอกสารไม่ครบ ค่อยยกระดับไปหารือกรมบัญชีกลางเมื่อเป็นประเด็นการตีความระเบียบจริง ๆ',
				en: 'Most problems are resolved by your own finance or HR office, since they usually stem from mismatched records or missing paperwork. Escalate to the department only when the question is genuinely one of interpreting the regulation.'
			}
		},
		{
			title: { th: 'ผู้ค้ากับภาครัฐให้ติดตามผ่านช่องทางทางการเท่านั้น', en: 'Suppliers: follow official channels only' },
			text: {
				th: 'ประกาศจัดซื้อจัดจ้าง การขึ้นทะเบียนผู้ค้า และหลักเกณฑ์การจ่ายเงิน ให้ตรวจสอบจากระบบ e-GP และเว็บไซต์กรมบัญชีกลาง อย่ายึดข้อมูลจากผู้รับจ้างช่วงหรือกลุ่มแชทเป็นหลัก เพราะหลักเกณฑ์มีการแก้ไขบ่อย',
				en: 'Check procurement announcements, supplier registration and payment criteria in e-GP and on the department’s site. Do not rely on subcontractors or chat groups as your source — the criteria change often.'
			}
		}
	],
	faq: [
		{
			q: { th: 'กรมบัญชีกลางเกี่ยวข้องกับคนทั่วไปอย่างไร', en: 'How does the department affect ordinary people?' },
			a: {
				th: 'แม้ชื่อจะฟังดูเป็นงานหลังบ้านของราชการ แต่กรมบัญชีกลางคือผู้กำหนดกฎการจ่ายเงินของแผ่นดินเกือบทั้งหมด ค่ารักษาพยาบาลของข้าราชการ เงินบำนาญของผู้เกษียณ เงินสวัสดิการที่โอนเข้าบัตรสวัสดิการแห่งรัฐ และเงินที่หน่วยงานรัฐจ่ายให้ผู้รับจ้าง ล้วนเดินตามหลักเกณฑ์ที่หน่วยงานนี้วางไว้ ถ้าเงินก้อนใดจ่ายช้าหรือเบิกไม่ได้ คำตอบมักอยู่ในระเบียบของกรมบัญชีกลาง',
				en: 'The name sounds like government back-office work, but this department writes almost all the rules on how state money is paid out. Civil-servant medical costs, pensions, welfare-card transfers and payments to government contractors all follow criteria it sets. When money is delayed or a claim is rejected, the answer is usually somewhere in its regulations.'
			}
		},
		{
			q: { th: 'พนักงานราชการหรือลูกจ้างชั่วคราว ใช้สิทธิรักษาพยาบาลข้าราชการได้ไหม', en: 'Do contract or temporary government staff get civil-servant medical cover?' },
			a: {
				th: 'ไม่ได้ สวัสดิการรักษาพยาบาลข้าราชการครอบคลุมข้าราชการ ลูกจ้างประจำ และผู้รับเบี้ยหวัดบำนาญเป็นหลัก ส่วนพนักงานราชการและลูกจ้างชั่วคราวอยู่ในระบบประกันสังคมตามที่นายจ้างขึ้นทะเบียนไว้ หากไม่แน่ใจว่าตัวเองอยู่สถานะใด ให้สอบถามงานการเจ้าหน้าที่ของหน่วยงานต้นสังกัด เพราะสถานะการจ้างเป็นตัวกำหนดสิทธิทั้งหมด',
				en: 'No. The civil-servant scheme covers officials, permanent employees and pensioners. Government employees on contract and temporary staff are enrolled in social security by their employer instead. If you are unsure which category you are in, ask your HR office — your employment status determines everything else.'
			}
		},
		{
			q: { th: 'พ่อแม่ คู่สมรส และลูก เบิกค่ารักษาพยาบาลด้วยสิทธิเราได้หรือไม่', en: 'Can my parents, spouse and children claim under my entitlement?' },
			a: {
				th: 'โดยหลักการแล้วสิทธิครอบคลุมบิดามารดา คู่สมรส และบุตรของผู้มีสิทธิ แต่มีเงื่อนไขเฉพาะสำหรับแต่ละความสัมพันธ์ เช่น อายุและสถานะของบุตร รวมถึงกรณีที่บุคคลนั้นมีสิทธิรักษาพยาบาลจากทางอื่นอยู่แล้ว ให้ตรวจสอบเงื่อนไขฉบับที่ใช้อยู่ปัจจุบันจากเว็บไซต์ทางการ และที่สำคัญคือชื่อของบุคคลเหล่านั้นต้องถูกบันทึกในฐานข้อมูลบุคลากรภาครัฐผ่านหน่วยงานต้นสังกัดก่อน',
				en: 'In principle the scheme extends to the holder’s parents, spouse and children, but each relationship carries its own conditions — a child’s age and status, for example, and whether the person already holds cover from another source. Check the current conditions on the official site, and note that each dependant must first be recorded in the government personnel database by your agency.'
			}
		},
		{
			q: { th: 'ไปโรงพยาบาลแล้วระบบขึ้นว่าไม่มีสิทธิเบิกจ่ายตรง ต้องทำอย่างไร', en: 'The hospital says I have no direct-billing entitlement — what now?' },
			a: {
				th: 'สาเหตุที่พบบ่อยที่สุดคือข้อมูลในฐานทะเบียนยังไม่อัปเดต เช่น เพิ่งบรรจุ เพิ่งย้ายหน่วยงาน เพิ่งเกษียณ หรือข้อมูลชื่อสกุลไม่ตรงกับบัตรประชาชน ให้ติดต่องานการเจ้าหน้าที่หรือฝ่ายการเงินของต้นสังกัดเพื่อตรวจสอบและแก้ไขข้อมูลก่อน ระหว่างที่ยังแก้ไม่เสร็จ ผู้มีสิทธิสามารถสำรองจ่ายไปก่อนแล้วเก็บใบเสร็จและใบรับรองแพทย์ไว้ให้ครบเพื่อยื่นเบิกภายหลังตามระเบียบ',
				en: 'The usual cause is an out-of-date record: a recent appointment, a transfer, a retirement, or a name that does not match your ID card. Contact your HR or finance office to have the record checked and corrected. While that is being sorted out you can pay yourself and keep the full set of receipts and medical certificates to submit a claim afterwards under the regulations.'
			}
		},
		{
			q: { th: 'เกษียณแล้วยังใช้สิทธิรักษาพยาบาลได้อยู่ไหม', en: 'Do I keep medical cover after I retire?' },
			a: {
				th: 'ผู้รับเบี้ยหวัดบำนาญยังคงมีสิทธิในระบบสวัสดิการรักษาพยาบาลข้าราชการต่อเนื่อง ไม่ได้หมดสิทธิในวันที่พ้นราชการ แต่ช่วงรอยต่อระหว่างเกษียณกับการเริ่มรับบำนาญเป็นจุดที่ข้อมูลในระบบมักยังไม่อัปเดต ทำให้ใช้สิทธิที่โรงพยาบาลไม่ผ่านชั่วคราว จึงควรติดตามเรื่องกับหน่วยงานต้นสังกัดตั้งแต่ก่อนวันเกษียณ',
				en: 'Pensioners remain in the civil-servant medical scheme; entitlement does not end on your last day of service. The gap between retiring and the pension starting is, however, where records commonly lag, which can make the hospital system reject you temporarily. Start following it up with your agency before your retirement date.'
			}
		},
		{
			q: { th: 'ข่าวเรื่องเงินสวัสดิการหรือบัตรสวัสดิการแห่งรัฐ จะรู้ได้อย่างไรว่าจริง', en: 'How do I tell whether news about welfare payments is genuine?' },
			a: {
				th: 'ให้ยึดประกาศจากเว็บไซต์ของหน่วยงานรัฐที่ลงท้ายด้วย go.th เป็นหลักเสมอ หน่วยงานรัฐไม่ส่งลิงก์ให้กรอกเลขบัตรประชาชน เลขบัญชี หรือรหัส OTP ทาง SMS หรือแชท และไม่ให้ติดตั้งแอปพลิเคชันจากลิงก์ที่ส่งมา หากได้รับข้อความลักษณะนี้ให้ถือว่าเป็นมิจฉาชีพไว้ก่อน แล้วตรวจสอบกับหน่วยงานต้นสังกัดหรือธนาคารที่รับเงินโดยตรง',
				en: 'Treat announcements on a government site ending in go.th as the reference point. State agencies do not send links asking for your ID number, bank account or an OTP by SMS or chat, and they do not ask you to install an app from a forwarded link. Assume anything like that is a scam and verify with your own agency or the bank that receives your payments.'
			}
		},
		{
			q: { th: 'ทำไมค้นระเบียบของกรมบัญชีกลางใน Google แล้วไม่ค่อยเจอ', en: 'Why is it so hard to find the department’s regulations on Google?' },
			a: {
				th: 'เว็บไซต์ของกรมบัญชีกลางตอบกลับรหัส 403 ต่อทุกคำขอจากเครื่องที่เราใช้ตรวจสอบ ทั้งที่ระบุตัวเป็นบอตและที่ใช้เบราว์เซอร์ทั่วไป จึงตรวจสอบสถานะการจัดทำดัชนีจากภายนอกไม่ได้ ทางออกที่ได้ผลคือเข้าเว็บไซต์ทางการแล้วใช้ช่องค้นหาภายในเว็บ หรือขอเลขที่หนังสือเวียนจากฝ่ายการเงินของหน่วยงานต้นสังกัดเพื่อไปค้นให้ตรงฉบับ',
				en: 'The department’s server answers search-engine crawlers with a 403, so most document pages are never indexed and never appear in results. The reliable route is to open the official site and use its own internal search, or ask your finance office for the circular reference number so you can look up the exact document.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'กรมบัญชีกลางคือหน่วยงานอะไร', en: 'What the Comptroller General’s Department is' }
		},
		{
			type: 'p',
			text: {
				th: 'กรมบัญชีกลางเป็นหน่วยงานในสังกัดกระทรวงการคลัง ทำหน้าที่ควบคุมการเบิกจ่ายเงินของแผ่นดินและวางมาตรฐานการบัญชีภาครัฐ พูดให้เข้าใจง่ายคือ เมื่อหน่วยงานราชการใดต้องการจ่ายเงินออกไป ไม่ว่าจะเป็นค่ารักษาพยาบาลของข้าราชการ เงินบำนาญ ค่าจ้างผู้รับเหมา หรือเงินสวัสดิการที่โอนถึงประชาชน กฎเกณฑ์ว่าจ่ายได้หรือไม่ จ่ายเท่าใด และต้องมีเอกสารอะไร ล้วนมาจากระเบียบและหนังสือเวียนของหน่วยงานนี้',
				en: 'The Comptroller General’s Department sits under the Ministry of Finance and controls how public money is disbursed, along with the accounting standards the state runs on. Put plainly: whenever a government body wants to pay money out — a civil servant’s medical bill, a pension, a contractor’s invoice, a welfare transfer to a member of the public — the rules on whether it can be paid, how much, and against what paperwork come from this department’s regulations and circulars.'
			}
		},
		{
			type: 'h2',
			text: { th: 'งานหลักที่คนมักตามหา', en: 'The parts people actually come looking for' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ระเบียบการเบิกจ่ายเงินและมาตรฐานการบัญชีภาครัฐ ซึ่งเป็นฐานอ้างอิงของเจ้าหน้าที่การเงินทุกส่วนราชการ',
					en: 'Disbursement regulations and public-sector accounting standards — the reference every agency’s finance officer works from.'
				},
				{
					th: 'สวัสดิการรักษาพยาบาลข้าราชการ ครอบคลุมข้าราชการ ผู้รับบำนาญ และบุคคลในครอบครัวตามเงื่อนไข',
					en: 'The civil-servant medical benefit scheme, covering officials, pensioners and eligible family members.'
				},
				{
					th: 'การขอรับและการจ่ายบำเหน็จบำนาญของข้าราชการที่พ้นจากราชการ รวมถึงสิทธิที่ตกทอดถึงทายาท',
					en: 'Pension and gratuity claims and payments for officials who have left service, including entitlements passing to heirs.'
				},
				{
					th: 'การบริหารการจ่ายเงินสวัสดิการของรัฐ รวมถึงบัตรสวัสดิการแห่งรัฐ',
					en: 'Administration of state welfare payments, including the state welfare card.'
				},
				{
					th: 'ระบบจัดซื้อจัดจ้างภาครัฐด้วยอิเล็กทรอนิกส์ (e-GP) ตามกฎหมายว่าด้วยการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560',
					en: 'The electronic government procurement system (e-GP) under the Public Procurement and Supplies Administration Act B.E. 2560 (2017).'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'สิทธิรักษาพยาบาล ใครอยู่ระบบไหน', en: 'Medical cover: which scheme applies to you' }
		},
		{
			type: 'p',
			text: {
				th: 'ความเข้าใจผิดที่พบบ่อยที่สุดคือคิดว่า “ทำงานราชการ” เท่ากับ “มีสิทธิข้าราชการ” ซึ่งไม่จริง คนที่ทำงานอยู่ในหน่วยงานรัฐเดียวกัน นั่งอยู่ห้องเดียวกัน อาจใช้สิทธิรักษาพยาบาลคนละระบบกันโดยสิ้นเชิง เพราะสิทธิผูกอยู่กับสถานะการจ้างงาน ไม่ได้ผูกกับสถานที่ทำงาน ตารางด้านล่างช่วยให้เห็นภาพว่าควรไปอ่านหลักเกณฑ์ของระบบใด',
				en: 'The most common misunderstanding is that “working for the government” means “having civil-servant entitlement”. It does not. Two people in the same office can sit under entirely different health schemes, because cover attaches to employment status rather than to the workplace. The table below shows which set of rules you should be reading.'
			}
		},
		{
			type: 'table',
			caption: { th: 'สิทธิรักษาพยาบาลตามสถานะการจ้างงานในภาครัฐ', en: 'Health cover by public-sector employment status' },
			head: [
				{ th: 'สถานะ', en: 'Status' },
				{ th: 'ใช้สิทธิระบบใด', en: 'Which scheme' },
				{ th: 'ข้อสังเกต', en: 'Notes' }
			],
			rows: [
				[
					{ th: 'ข้าราชการและลูกจ้างประจำของส่วนราชการ', en: 'Civil servants and permanent employees of state agencies' },
					{ th: 'สวัสดิการรักษาพยาบาลข้าราชการ', en: 'Civil servant medical benefit scheme' },
					{ th: 'หลักเกณฑ์อยู่ในความดูแลของกรมบัญชีกลาง', en: 'Criteria are maintained by the Comptroller General’s Department' }
				],
				[
					{ th: 'ผู้รับเบี้ยหวัดบำนาญ', en: 'Pensioners and gratuity recipients' },
					{ th: 'สวัสดิการรักษาพยาบาลข้าราชการ', en: 'Civil servant medical benefit scheme' },
					{ th: 'สิทธิต่อเนื่องหลังพ้นราชการ ไม่สิ้นสุดในวันเกษียณ', en: 'Cover continues after service; it does not end on the retirement date' }
				],
				[
					{ th: 'พนักงานราชการและลูกจ้างชั่วคราว', en: 'Government employees on contract and temporary staff' },
					{ th: 'ประกันสังคม', en: 'Social security' },
					{ th: 'ขึ้นทะเบียนโดยหน่วยงานที่จ้าง ไม่ใช่ระบบของกรมบัญชีกลาง', en: 'Registered by the employing agency, not through this department' }
				],
				[
					{ th: 'ข้าราชการและพนักงานส่วนท้องถิ่น', en: 'Local-government officials and staff' },
					{ th: 'ระบบสวัสดิการรักษาพยาบาลของท้องถิ่น', en: 'The local-government medical benefit scheme' },
					{ th: 'เป็นคนละระบบกับข้าราชการส่วนกลาง ให้ตรวจสอบกับต้นสังกัด', en: 'A separate scheme from central government — check with your own agency' }
				],
				[
					{ th: 'พนักงานรัฐวิสาหกิจ', en: 'State-enterprise employees' },
					{ th: 'สวัสดิการของรัฐวิสาหกิจแต่ละแห่ง', en: 'Each enterprise’s own welfare scheme' },
					{ th: 'เงื่อนไขต่างกันไปตามระเบียบของแต่ละองค์กร', en: 'Conditions vary with each organisation’s own rules' }
				]
			]
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'มีสิทธิแล้ว แต่ต้องมีชื่อในฐานข้อมูลก่อนจึงจะใช้ได้', en: 'Entitled is not the same as registered' },
			text: {
				th: 'ระบบเบิกจ่ายตรงทำให้ผู้มีสิทธิยื่นบัตรประจำตัวประชาชนที่สถานพยาบาลที่เข้าร่วมได้เลย โดยไม่ต้องสำรองจ่าย แต่จะทำได้ก็ต่อเมื่อหน่วยงานต้นสังกัดนำข้อมูลของคุณและบุคคลในครอบครัวเข้าฐานข้อมูลบุคลากรภาครัฐเรียบร้อยแล้ว หากมีการเปลี่ยนแปลง เช่น บรรจุใหม่ ย้ายหน่วยงาน แต่งงาน มีบุตร หรือเกษียณ ให้แจ้งปรับปรุงข้อมูลทันที อย่ารอจนถึงวันที่ต้องเข้าโรงพยาบาล',
				en: 'Direct billing lets you present your ID card at a participating hospital without paying up front — but only once your agency has entered you and your dependants into the government personnel database. After any change such as a new appointment, a transfer, a marriage, a birth or a retirement, have the record updated immediately rather than on the day you need a hospital.'
			}
		},
		{
			type: 'h2',
			text: { th: 'บำเหน็จบำนาญและเงินที่รัฐจ่ายให้ประชาชน', en: 'Pensions and the money the state pays out to people' }
		},
		{
			type: 'p',
			text: {
				th: 'สำหรับข้าราชการที่ใกล้เกษียณ กรมบัญชีกลางคือปลายทางของเรื่องบำเหน็จบำนาญ ตั้งแต่การยื่นขอรับ การคำนวณ ไปจนถึงการจ่ายเงินเข้าบัญชีในแต่ละเดือน รวมถึงสิทธิที่เกี่ยวเนื่องอย่างบำเหน็จดำรงชีพและบำเหน็จตกทอดที่ตกถึงทายาท เรื่องเหล่านี้เริ่มต้นที่หน่วยงานต้นสังกัดเป็นผู้รวบรวมเอกสาร ดังนั้นความล่าช้าที่พบบ่อยจึงมักเกิดจากเอกสารไม่ครบตั้งแต่ต้นทาง ไม่ใช่จากขั้นตอนการจ่ายเงิน',
				en: 'For officials approaching retirement, this department is where the pension question ends up — the claim, the calculation, and the monthly payment into an account, along with related entitlements such as the lump sum drawn during life and the gratuity that passes to heirs. The process begins with your own agency assembling the paperwork, which is why the delays people run into usually trace back to incomplete documents at that stage rather than to the payment itself.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'อีกด้านหนึ่งที่กระทบคนจำนวนมากคือการจ่ายเงินสวัสดิการของรัฐ ซึ่งรวมถึงบัตรสวัสดิการแห่งรัฐ กรมบัญชีกลางรับผิดชอบด้านการโอนเงินไปยังผู้มีสิทธิ ส่วนหลักเกณฑ์ว่าใครมีสิทธิและการเปิดลงทะเบียนแต่ละรอบเป็นเรื่องที่ประกาศผ่านหลายหน่วยงาน ผู้ที่รอเงินจึงควรตรวจสอบทั้งวันที่โอนและสถานะสิทธิของตนจากประกาศทางการ แทนที่จะเชื่อวันที่ซึ่งส่งต่อกันมาในกลุ่มแชท',
				en: 'The other side that touches large numbers of people is the payment of state welfare, including the welfare card. The department handles transferring the money to recipients, while the eligibility criteria and each registration round are announced through several agencies. If you are waiting on a payment, check both the transfer date and your own eligibility against official announcements rather than a date forwarded around a chat group.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'มิจฉาชีพชอบใช้ชื่อเงินสวัสดิการเป็นเหยื่อ', en: 'Scammers love the words “welfare payment”' },
			text: {
				th: 'ข้อความที่อ้างว่าคุณได้รับสิทธิเงินช่วยเหลือรอบใหม่ พร้อมลิงก์ให้กดยืนยันตัวตน กรอกเลขบัตรประชาชน เลขบัญชี หรือให้ติดตั้งแอปพลิเคชันจากลิงก์ ล้วนเป็นรูปแบบของการหลอกลวงที่พบซ้ำ ๆ หน่วยงานรัฐไม่ติดต่อขอข้อมูลเหล่านี้ผ่าน SMS หรือแชท และไม่เร่งให้ทำรายการภายในกี่ชั่วโมง หากไม่แน่ใจ ให้เปิดเว็บไซต์ที่ลงท้ายด้วย go.th ด้วยตัวเอง หรือสอบถามธนาคารที่รับเงินโดยตรง',
				en: 'A message telling you a new round of assistance has been approved, with a link to confirm your identity, enter your ID or bank details, or install an app, is a pattern that repeats constantly. State agencies do not ask for those details by SMS or chat and do not impose a countdown. If you are unsure, open a go.th site yourself or ask the bank that receives your payments.'
			}
		},
		{
			type: 'h2',
			text: { th: 'สำหรับเจ้าหน้าที่การเงินและผู้ค้ากับภาครัฐ', en: 'For finance officers and government suppliers' }
		},
		{
			type: 'p',
			text: {
				th: 'เจ้าหน้าที่การเงินและพัสดุใช้ระเบียบของกรมบัญชีกลางเป็นเครื่องมือทำงานประจำวัน ทุกครั้งที่ตั้งเบิกต้องอ้างอิงหลักเกณฑ์ที่ยังมีผลบังคับใช้อยู่ ซึ่งเปลี่ยนแปลงผ่านหนังสือเวียนอยู่เสมอ การใช้ฉบับที่ถูกยกเลิกไปแล้วทำให้เรื่องถูกตีกลับและกระทบไปถึงผู้ค้าที่รอรับเงิน ส่วนผู้ประกอบการที่ต้องการขายสินค้าหรือบริการให้หน่วยงานรัฐจะต้องผ่านระบบ e-GP ซึ่งเป็นระบบกลางของประเทศ ทั้งการขึ้นทะเบียนผู้ค้า การเสนอราคา และการทำสัญญา ดังนั้นทั้งสองฝ่ายจึงต้องอ่านเอกสารชุดเดียวกัน และควรยึดฉบับที่เผยแพร่บนเว็บไซต์ทางการเป็นหลักเสมอ',
				en: 'For finance and procurement officers these regulations are a daily working tool: every payment request must cite criteria that are still in force, and those change through a steady stream of circulars. Citing a superseded version gets the request bounced back, which in turn holds up the supplier waiting to be paid. Businesses selling to the state, meanwhile, go through e-GP — the national system for supplier registration, bidding and contracting. Both sides are reading the same documents, and both should treat the version published on the official site as authoritative.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมเรื่องนี้ต้องมีหน้าที่ค้นเจอได้', en: 'Why this subject needs a page search engines can reach' }
		},
		{
			type: 'p',
			text: {
				th: 'กฎที่ตัดสินว่าใบเสร็จค่ารักษาพยาบาลใบหนึ่งจะเบิกได้หรือไม่ ตั้งอยู่บนเซิร์ฟเวอร์ที่ปฏิเสธบอตของเสิร์ชเอนจิน ผลที่ตามมาไม่ใช่แค่เรื่องเทคนิค แต่คือคนที่ควรได้อ่านตัวระเบียบกลับไปตั้งคำถามในเว็บบอร์ด กลุ่มไลน์ของเพื่อนร่วมงาน หรือกลุ่มข้าราชการบำนาญ แล้วได้คำตอบจากความทรงจำของคนอื่นซึ่งอาจอ้างหลักเกณฑ์ที่ถูกยกเลิกไปแล้วหลายปี ข้าราชการที่กำลังตัดสินใจเรื่องการรักษาของพ่อแม่ เจ้าหน้าที่การเงินที่ต้องตั้งเบิกให้ทันสิ้นปีงบประมาณ และผู้ค้าที่รอเงินงวดสุดท้าย ต่างต้องการเอกสารฉบับจริง ไม่ใช่คำบอกเล่า หน้านี้จึงอธิบายขอบเขตงานของกรมบัญชีกลางด้วยคำที่คนพิมพ์ค้นหาจริง แล้วส่งต่อไปยังเว็บไซต์ทางการเพื่อให้ไปอ่านฉบับที่มีผลบังคับใช้ด้วยตัวเอง THGov เป็นไดเรกทอรีอิสระ ไม่มีความเกี่ยวข้องกับหน่วยงาน ไม่รับเรื่องเบิกจ่าย และไม่รับข้อมูลส่วนบุคคลใด ๆ',
				en: 'The rules that decide whether a single hospital receipt can be reimbursed sit on a server that turns search-engine crawlers away. The consequence is not merely technical: the people who ought to be reading the regulation ask in web forums, in colleagues’ chat groups or in pensioners’ groups instead, and get answers from someone else’s memory of criteria that may have been revoked years ago. An official weighing up treatment for a parent, a finance officer racing the end of the budget year, a supplier waiting on a final instalment — each needs the actual document, not a recollection of it. This page describes what the department does in the words people type into a search box, then hands them to the official site to read the version in force. THGov is an independent directory: no affiliation with the agency, no involvement in any claim, and no personal data collected here.'
			}
		}
	],
	crawl: {
		host: 'www.cgd.go.th',
		verdict: 'waf-blocked',
		status: 403,
		snippet: 'User-Agent: Googlebot/2.1\n  GET /robots.txt  ->  403\n  GET /            ->  403\nUser-Agent: Chrome (desktop browser)\n  GET /            ->  403',
		checkedAt: '2026-08-27',
		note: {
			th: 'เซิร์ฟเวอร์ปฏิเสธคำขอจากเครื่องที่เราใช้ตรวจสอบด้วยรหัส 403 ทั้งกรณีที่ระบุตัวเป็น Googlebot และกรณีที่ใช้เบราว์เซอร์ทั่วไป จึงอ่านไฟล์ robots.txt เพื่อยืนยันนโยบายไม่ได้ การปิดกั้นลักษณะนี้มักเป็นการกรองทราฟฟิกจากศูนย์ข้อมูลโดยรวม ไม่ใช่การเจาะจงปิดกั้นเครื่องมือค้นหา เราจึงไม่สรุปว่า Googlebot ตัวจริงเข้าไม่ได้ แต่ผลที่ตามมาคือเครื่องมือภายนอกตรวจสอบความพร้อมใช้งานของเว็บไซต์นี้ไม่ได้',
			en: 'The server refuses our audit host with 403 both when it identifies as Googlebot and when it presents as an ordinary browser, so robots.txt cannot be read to confirm the policy. A block shaped like this usually filters datacentre traffic as a whole rather than targeting search engines, so we do not conclude that the genuine Googlebot is shut out — but it does mean no outside tool can verify this site’s availability.'
		}
	},
	priority: 82,
	updated: '2026-08-27'
};
