import type { Service } from '../types';

export const service: Service = {
	slug: 'dlt-eservice',
	name: {
		th: 'กรมการขนส่งทางบก — ต่อภาษีรถและใบขับขี่ออนไลน์',
		en: 'Thai Department of Land Transport — Road Tax and Driving Licence Online'
	},
	shortName: { th: 'ขนส่งทางบกออนไลน์', en: 'DLT Online Services' },
	url: 'https://www.dlt.go.th/',
	agency: 'dlt',
	categories: ['transport'],
	summary: {
		th: 'ต่อภาษีรถประจำปี ทำและต่ออายุใบขับขี่ โอนทะเบียนรถ และจองคิวล่วงหน้ากับกรมการขนส่งทางบก พร้อมสิ่งที่ต้องเตรียมก่อน ขั้นตอน และลิงก์เข้าเว็บไซต์ทางการ',
		en: 'Renew road tax, renew a driving licence, transfer a vehicle or book a queue with Thailand’s Department of Land Transport — what to prepare, plus the official link.'
	},
	deck: {
		th: 'รวมเรื่องรถและคนขับที่ต้องทำกับกรมการขนส่งทางบก พร้อมบอกให้ชัดว่าเรื่องไหนทำออนไลน์ได้ และเรื่องไหนยังต้องไปที่สำนักงานขนส่ง',
		en: 'Everything drivers and vehicle owners deal with at the Department of Land Transport — and a clear line between what you can finish online and what still needs an office visit.'
	},
	keywords: {
		th: [
			'ต่อภาษีรถออนไลน์',
			'ต่อทะเบียนรถ',
			'ต่อภาษีรถยนต์',
			'ต่อภาษีมอเตอร์ไซค์',
			'ทำใบขับขี่',
			'ต่อใบขับขี่ออนไลน์',
			'จองคิวทำใบขับขี่',
			'อบรมใบขับขี่ออนไลน์',
			'ตรวจสภาพรถ ตรอ.',
			'โอนรถมือสอง',
			'กรมการขนส่งทางบก',
			'ป้ายภาษีรถ',
			'DLT Smart Queue',
			'ขนส่งจังหวัด'
		],
		en: [
			'renew road tax Thailand',
			'Thai driving licence renewal',
			'Department of Land Transport',
			'DLT Smart Queue',
			'driving licence test Thailand',
			'vehicle transfer Thailand',
			'Thailand vehicle registration'
		]
	},
	features: [
		{
			icon: 'receipt',
			title: { th: 'ต่อภาษีรถประจำปีทางอินเทอร์เน็ต', en: 'Renew annual road tax online' },
			text: {
				th: 'รถที่เข้าเงื่อนไขสามารถชำระภาษีประจำปีผ่านระบบออนไลน์ได้โดยไม่ต้องไปที่สำนักงาน แล้วรอรับป้ายภาษีทางไปรษณีย์',
				en: 'Eligible vehicles can pay the annual tax through the online system without visiting an office, with the tax sticker posted out afterwards.'
			}
		},
		{
			icon: 'id',
			title: { th: 'ใบขับขี่ ทั้งขอใหม่และต่ออายุ', en: 'Driving licences, new and renewed' },
			text: {
				th: 'ครอบคลุมใบอนุญาตขับรถทุกประเภท ตั้งแต่ผู้ขอครั้งแรกที่ต้องอบรมและสอบ ไปจนถึงผู้ที่ใบขับขี่ใกล้หมดอายุ',
				en: 'Covers every class of licence, from first-time applicants who must train and sit tests to holders whose licence is close to expiring.'
			}
		},
		{
			icon: 'book',
			title: { th: 'อบรมภาคทฤษฎีออนไลน์', en: 'Theory training you can do online' },
			text: {
				th: 'การอบรมที่กำหนดให้ทำก่อนสอบหรือก่อนต่ออายุ สามารถเรียนผ่านระบบ e-Learning ของกรมแล้วนำผลไปใช้ที่สำนักงานได้',
				en: 'The training session required before testing or renewal can be completed through the department’s e-learning system and presented at the office.'
			}
		},
		{
			icon: 'clock',
			title: { th: 'จองคิวล่วงหน้าด้วย DLT Smart Queue', en: 'Book ahead with DLT Smart Queue' },
			text: {
				th: 'งานที่ยังต้องไปแสดงตัวที่สำนักงานขนส่ง สามารถจองวันและเวลาไว้ก่อน ลดการรอคิวหน้างาน',
				en: 'For tasks that still require you in person, reserve a date and time in advance instead of queuing on arrival.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'งานทะเบียนรถและการโอนกรรมสิทธิ์', en: 'Registration and ownership transfer' },
			text: {
				th: 'การโอนรถเมื่อซื้อขาย การแจ้งย้าย และการแก้ไขรายการทางทะเบียน เริ่มต้นจากข้อมูลและแบบฟอร์มบนเว็บไซต์ของกรม',
				en: 'Transfers after a sale, moving a registration between provinces and correcting registration details all start from the department’s own guidance and forms.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'เข้าจากช่องทางทางการ ลดความเสี่ยงเว็บปลอม', en: 'Start from the official channel' },
			text: {
				th: 'หน้าต่อภาษีรถเป็นเป้าหมายยอดนิยมของเว็บเลียนแบบ การเข้าจากที่อยู่ทางการโดยตรงจึงปลอดภัยกว่าการกดลิงก์ที่ส่งต่อกันมา',
				en: 'Road-tax pages are a favourite target for copycat sites, so opening the official address directly is safer than tapping a forwarded link.'
			}
		}
	],
	steps: [
		{
			title: { th: 'แยกให้ชัดว่ากำลังทำเรื่องอะไร', en: 'Decide which task you are doing' },
			text: {
				th: 'ภาษีรถประจำปี ใบขับขี่ และงานทะเบียนรถ เป็นคนละเรื่องกัน ใช้เอกสารคนละชุด และบางเรื่องทำออนไลน์ได้ บางเรื่องต้องนำรถหรือตัวเองไปแสดงที่สำนักงาน การแยกให้ชัดตั้งแต่ต้นช่วยไม่ให้เตรียมเอกสารผิด',
				en: 'Annual road tax, driving licences and registration work are separate processes with separate paperwork. Some can be finished online; others need the vehicle or yourself present at an office. Sorting this out first saves a wasted trip.'
			}
		},
		{
			title: { th: 'เตรียมเอกสารตั้งต้นให้ครบก่อน', en: 'Gather the prerequisites first' },
			text: {
				th: 'สำหรับภาษีรถ ต้องมีกรมธรรม์ พ.ร.บ. ที่ยังไม่หมดอายุ และถ้ารถมีอายุการใช้งานถึงเกณฑ์ที่กำหนด ต้องมีใบรับรองการตรวจสภาพจากสถานตรวจสภาพรถเอกชน (ตรอ.) ด้วย ส่วนเรื่องใบขับขี่มักต้องใช้บัตรประชาชนและใบรับรองแพทย์ ควรตรวจเงื่อนไขล่าสุดบนเว็บไซต์ทางการก่อนเสมอ',
				en: 'For road tax you need compulsory motor insurance (พ.ร.บ.) that is still in force, and — once a vehicle passes the age threshold set for its type — a certificate from a licensed private inspection centre (ตรอ.). Licence work generally needs your ID card and a medical certificate. Confirm the current requirements on the official site before you start.'
			}
		},
		{
			title: { th: 'เข้าเว็บไซต์ทางการและสมัครสมาชิก', en: 'Open the official site and register' },
			text: {
				th: 'พิมพ์ที่อยู่เว็บไซต์เองแทนการกดลิงก์จาก SMS หรือโฆษณา แล้วสมัครบัญชีด้วยเลขบัตรประชาชน อีเมล และเบอร์โทรศัพท์ที่ใช้งานจริง เพราะระบบใช้ช่องทางเหล่านี้ยืนยันตัวตนและแจ้งผลกลับมา',
				en: 'Type the address yourself rather than tapping a link from an SMS or an ad, then register with your national ID number and an email address and phone number you actually use — the system verifies you and reports back through them.'
			}
		},
		{
			title: { th: 'กรอกข้อมูลรถหรือข้อมูลใบขับขี่แล้วชำระเงิน', en: 'Enter your details and pay' },
			text: {
				th: 'สำหรับภาษีรถ ให้กรอกเลขทะเบียน จังหวัด และข้อมูลตามเล่มทะเบียน ระบบจะคำนวณยอดที่ต้องชำระให้เอง อัตราภาษีขึ้นอยู่กับประเภท อายุ และขนาดเครื่องยนต์ของรถ จึงควรดูยอดจริงที่ระบบแสดงก่อนยืนยันทุกครั้ง',
				en: 'For road tax, enter the plate number, province and the details shown in the registration book; the system works out the amount due. Rates depend on the vehicle’s type, age and engine size, so read the figure the system shows before confirming.'
			}
		},
		{
			title: { th: 'เก็บหลักฐานไว้ระหว่างรอป้ายภาษี', en: 'Keep proof while the sticker is in the post' },
			text: {
				th: 'เมื่อชำระเงินสำเร็จ ระบบจะออกหลักฐานการชำระให้ก่อน แล้วจึงจัดส่งป้ายภาษีทางไปรษณีย์ตามที่อยู่ที่แจ้งไว้ ควรพิมพ์หรือเก็บหลักฐานนั้นไว้ในรถระหว่างที่ป้ายยังมาไม่ถึง',
				en: 'A payment record is issued immediately, with the tax sticker mailed to the address you gave. Print or save that record and keep it in the vehicle until the sticker arrives.'
			}
		},
		{
			title: { th: 'ถ้าต้องไปสำนักงาน ให้จองคิวก่อนไป', en: 'If you must attend in person, book a queue' },
			text: {
				th: 'งานอย่างการสอบใบขับขี่ การโอนรถ หรือกรณีที่ระบบออนไลน์ไม่รับรายการของคุณ ต้องไปที่สำนักงานขนส่ง ให้จองวันเวลาผ่าน DLT Smart Queue ล่วงหน้า และไปถึงก่อนเวลานัดพอสมควร',
				en: 'Driving tests, ownership transfers and any case the online system will not accept require an office visit. Reserve a slot through DLT Smart Queue in advance and arrive a little ahead of your appointment.'
			}
		}
	],
	faq: [
		{
			q: { th: 'รถทุกคันต่อภาษีออนไลน์ได้ไหม', en: 'Can every vehicle renew its road tax online?' },
			a: {
				th: 'ไม่ใช่ทุกคัน ระบบออนไลน์รับเฉพาะรถที่เข้าเงื่อนไขตามประเภทและอายุการใช้งานที่กรมกำหนดไว้ รถที่เกินเกณฑ์ ค้างชำระภาษีมานาน หรือมีรายการทางทะเบียนที่ต้องแก้ไข มักถูกระบบปฏิเสธและต้องดำเนินการที่สำนักงานขนส่งแทน วิธีที่เร็วที่สุดคือลองกรอกเลขทะเบียนในระบบทางการดู แล้วระบบจะแจ้งเองว่ารถคันนั้นทำออนไลน์ได้หรือไม่',
				en: 'No. The online channel accepts only vehicles that fall inside the type and age conditions the department sets. Vehicles beyond those limits, with long-overdue tax, or with registration details that need correcting are usually rejected and must be handled at an office. The quickest check is to enter the plate number in the official system and let it tell you.'
			}
		},
		{
			q: { th: 'ต้องมี พ.ร.บ. ก่อนต่อภาษีรถหรือไม่', en: 'Do I need compulsory insurance before renewing road tax?' },
			a: {
				th: 'ต้องมี กรมธรรม์ พ.ร.บ. ที่ยังมีผลคุ้มครองเป็นเงื่อนไขตั้งต้นของการชำระภาษีรถประจำปี ถ้า พ.ร.บ. ขาดหรือหมดอายุ ระบบจะไม่ให้ทำรายการต่อ ให้ซื้อ พ.ร.บ. ให้เรียบร้อยก่อน แล้วค่อยกลับมาต่อภาษี ทั้งนี้ พ.ร.บ. กับประกันภัยรถยนต์ภาคสมัครใจเป็นคนละอย่างกัน มีประกันชั้นหนึ่งอยู่แล้วก็ยังต้องมี พ.ร.บ. ด้วย',
				en: 'Yes. Valid compulsory motor insurance (พ.ร.บ.) is a precondition for paying the annual tax, and the system will not let you continue without it. Buy or renew the policy first, then come back. Note that compulsory insurance is not the same thing as voluntary motor insurance — holding a comprehensive policy does not remove the requirement.'
			}
		},
		{
			q: { th: 'รถต้องตรวจสภาพที่ ตรอ. ก่อนไหม', en: 'Does my vehicle need a ตรอ. inspection first?' },
			a: {
				th: 'ขึ้นอยู่กับประเภทและอายุของรถ รถที่มีอายุการใช้งานเกินเกณฑ์ที่กำหนดต้องผ่านการตรวจสภาพจากสถานตรวจสภาพรถเอกชน (ตรอ.) ก่อนจึงจะชำระภาษีได้ ส่วนรถใหม่กว่านั้นยังไม่ต้องตรวจ เกณฑ์อายุต่างกันระหว่างรถยนต์กับรถจักรยานยนต์ จึงควรยืนยันเกณฑ์ปัจจุบันจากเว็บไซต์ทางการก่อนขับไปตรวจ',
				en: 'It depends on the vehicle’s type and age. Once a vehicle is older than the threshold set for its class, it must pass an inspection at a licensed private centre (ตรอ.) before the tax can be paid; newer vehicles are exempt. The thresholds differ between cars and motorcycles, so confirm the current rule on the official site before driving over.'
			}
		},
		{
			q: { th: 'จ่ายภาษีออนไลน์แล้ว แต่ป้ายภาษียังไม่มา ทำอย่างไร', en: 'I paid online but the tax sticker has not arrived — what now?' },
			a: {
				th: 'ป้ายภาษีจัดส่งทางไปรษณีย์ จึงต้องเผื่อเวลาส่งไว้พอสมควร ระหว่างรอให้เก็บหลักฐานการชำระเงินที่ระบบออกให้ไว้ในรถ และตรวจสอบสถานะการจัดส่งในบัญชีที่ใช้ทำรายการ สาเหตุที่พบบ่อยคือที่อยู่จัดส่งไม่ตรงกับที่อยู่ปัจจุบัน หากเลยกำหนดไปมากแล้วยังไม่ได้รับ ให้ติดต่อสำนักงานขนส่งพร้อมหลักฐานการชำระเงินเพื่อตรวจสอบ',
				en: 'The sticker travels by post, so allow time for delivery. Keep the payment record the system issued in the vehicle meanwhile, and check the delivery status in the account you used. The usual cause of a long delay is a delivery address that no longer matches where you live. If it is well overdue, contact a transport office with your payment record.'
			}
		},
		{
			q: { th: 'ต่อใบขับขี่ต้องอบรมและไปที่สำนักงานไหม', en: 'Does renewing a licence mean training and an office visit?' },
			a: {
				th: 'ปกติผู้ต่ออายุต้องผ่านการอบรมตามที่กำหนด ซึ่งสามารถเรียนผ่านระบบ e-Learning ออนไลน์ของกรมได้ แล้วนำผลการอบรมไปใช้ที่สำนักงาน ส่วนขั้นตอนที่ยังต้องไปด้วยตัวเองคือการทดสอบสมรรถภาพร่างกายและการยืนยันตัวตน จึงควรจองคิวล่วงหน้าไว้ เงื่อนไขเรื่องเอกสารประกอบ เช่น ใบรับรองแพทย์ มีการปรับเปลี่ยนเป็นระยะ ควรตรวจสอบก่อนเดินทาง',
				en: 'Renewals normally require a training session, which can be completed through the department’s online e-learning system and then presented at the office. What still needs you in person is the physical-ability check and identity verification, so book a queue ahead. Supporting-document rules, such as the medical certificate, change from time to time — check before you travel.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าเว็บต่อภาษีรถที่เจอเป็นของจริง', en: 'How can I tell a road-tax site is genuine?' },
			a: {
				th: 'ให้ดูที่ชื่อโดเมนเป็นหลัก ระบบทางการอยู่ภายใต้โดเมน dlt.go.th เท่านั้น เว็บเลียนแบบมักใช้ชื่อคล้ายกันแต่ลงท้ายต่างออกไป และมักซื้อโฆษณาให้ขึ้นเหนือผลการค้นหาจริงในช่วงใกล้สิ้นปี อย่ากรอกเลขบัตรหรือข้อมูลบัตรเครดิตในหน้าที่มาจากลิงก์ใน SMS หรือแชท ถ้าไม่แน่ใจ ให้ปิดหน้านั้นแล้วพิมพ์ที่อยู่เว็บไซต์ทางการเข้าไปใหม่ด้วยตัวเอง',
				en: 'Judge by the domain: the genuine systems sit under dlt.go.th and nowhere else. Copycat sites use similar-looking names with a different ending and often buy ads that sit above the real result. Never enter ID or card details on a page you reached from an SMS or chat link — close it and type the official address yourself.'
			}
		},
		{
			q: { th: 'ซื้อรถมือสองมาแล้ว เจ้าของเดิมยังไม่โอนให้ ทำอย่างไร', en: 'I bought a used vehicle but the seller has not transferred it — what should I do?' },
			a: {
				th: 'ตราบใดที่ยังไม่โอน ชื่อในทะเบียนยังเป็นของเจ้าของเดิม ซึ่งหมายความว่าภาระทางทะเบียนและความรับผิดที่ตามมาก็ยังผูกกับชื่อนั้นอยู่ ทางแก้คือนัดผู้ขายไปที่สำนักงานขนส่งพร้อมกัน โดยนำเล่มทะเบียน บัตรประชาชนของทั้งสองฝ่าย และแบบคำขอที่ลงนามครบไปด้วย กฎหมายกำหนดกรอบเวลาให้แจ้งโอนหลังการซื้อขาย จึงไม่ควรปล่อยไว้นาน และควรตรวจสอบกำหนดเวลาปัจจุบันจากเว็บไซต์ทางการ',
				en: 'Until the transfer is filed, the registration still names the previous owner, and the obligations that follow the registration stay with that name. The fix is to go to a transport office together with the registration book, both parties’ ID cards and the signed application. The law sets a window for reporting a sale, so do not let it drift — check the current deadline on the official site.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'กรมการขนส่งทางบกดูแลเรื่องอะไรบ้าง', en: 'What the Department of Land Transport handles' }
		},
		{
			type: 'p',
			text: {
				th: 'กรมการขนส่งทางบก (ขบ.) เป็นหน่วยงานที่ดูแลสองเรื่องใหญ่ซึ่งเกี่ยวข้องกับคนใช้รถแทบทุกคน คือเรื่องของ “ตัวรถ” และเรื่องของ “ตัวคนขับ” ฝั่งตัวรถครอบคลุมการจดทะเบียนรถ การชำระภาษีรถประจำปี การโอนกรรมสิทธิ์เมื่อมีการซื้อขาย และการแก้ไขรายการทางทะเบียน ส่วนฝั่งคนขับคือใบอนุญาตขับรถทุกประเภท ตั้งแต่ผู้ที่ขอครั้งแรกไปจนถึงผู้ที่ใบขับขี่ใกล้หมดอายุ ในช่วงหลายปีที่ผ่านมา งานบางส่วนถูกย้ายขึ้นมาทำผ่านอินเทอร์เน็ตได้เต็มรูปแบบ เช่น การชำระภาษีรถประจำปีของรถที่เข้าเงื่อนไข และการอบรมภาคทฤษฎีของผู้ขอหรือต่ออายุใบขับขี่ ขณะที่งานอีกหลายอย่างยังต้องไปแสดงตัวหรือนำรถไปให้ตรวจจริง เพราะมีขั้นตอนที่ทำแทนกันบนหน้าจอไม่ได้ เว็บไซต์ของกรมจึงเป็นจุดตั้งต้นทั้งของงานที่ทำจบได้ทางออนไลน์ และของการนัดหมายเข้าไปที่สำนักงานขนส่ง',
				en: 'The Department of Land Transport (DLT) is responsible for two large areas that touch almost everyone who owns or drives a vehicle: the vehicle itself, and the driver. On the vehicle side that means registration, the annual road tax, transfers of ownership after a sale, and corrections to registration records. On the driver side it means every class of driving licence, from first-time applicants to holders approaching expiry. Over the past few years some of this work has moved fully online — the annual tax for eligible vehicles, and the theory training required of licence applicants and renewers — while much of the rest still needs you or the vehicle present, because a screen cannot stand in for an inspection or a driving test. The department’s website is the starting point for both: the tasks you can finish at home, and the appointment that gets you through an office door.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ก่อนต่อภาษีรถประจำปี ต้องมีอะไรครบบ้าง', en: 'What you need before renewing road tax' }
		},
		{
			type: 'p',
			text: {
				th: 'คนจำนวนมากเข้าใจว่าการต่อภาษีรถคือการจ่ายเงินอย่างเดียว แต่จริง ๆ แล้วภาษีรถเป็นปลายทางของเงื่อนไขหลายอย่างที่ต้องครบก่อน ถ้าขาดข้อใดข้อหนึ่ง ระบบออนไลน์จะไม่ให้ทำรายการต่อ และไปที่สำนักงานก็จะถูกตีกลับเช่นกัน อีกเรื่องที่มักเข้าใจผิดคือยอดภาษี ซึ่งไม่ได้เท่ากันทุกคัน แต่คิดตามประเภทของรถ ขนาดเครื่องยนต์หรือน้ำหนักบรรทุก และอายุการใช้งาน โดยรถบางประเภทที่ใช้งานมานานจะได้รับส่วนลดตามที่กฎหมายกำหนด ยอดจริงจะปรากฏในระบบหลังกรอกข้อมูลรถ จึงควรดูตัวเลขจากระบบทางการแทนการเชื่อยอดที่บอกต่อกันมา ส่วนสิ่งที่ต้องเตรียมให้ครบก่อนมีดังนี้',
				en: 'Many people picture road tax as simply a payment, but it is really the last step in a chain of conditions. If one link is missing, the online system stops you — and a counter visit ends the same way. The amount is a second common misunderstanding: it is not the same for every vehicle but follows the vehicle’s class, its engine size or load capacity and its age, with statutory reductions for older vehicles in some categories. The real figure appears once you enter the vehicle’s details, so read it there rather than relying on a number someone passed along. What you need in hand before you start:'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'กรมธรรม์ พ.ร.บ. (ประกันภัยรถภาคบังคับ) ที่ยังมีผลคุ้มครองอยู่ ณ วันที่ชำระภาษี',
					en: 'Compulsory motor insurance (พ.ร.บ.) that is still in force on the day you pay.'
				},
				{
					th: 'ใบรับรองการตรวจสภาพรถจากสถานตรวจสภาพรถเอกชน (ตรอ.) สำหรับรถที่มีอายุการใช้งานถึงเกณฑ์ที่กำหนดตามประเภทของรถ',
					en: 'An inspection certificate from a licensed private centre (ตรอ.) once the vehicle reaches the age threshold set for its class.'
				},
				{
					th: 'ข้อมูลตามเล่มทะเบียนรถ ได้แก่ เลขทะเบียน จังหวัดที่จดทะเบียน และรายละเอียดของรถที่ตรงกับฐานข้อมูล',
					en: 'The details from the registration book — plate number, province of registration and vehicle particulars that match the database.'
				},
				{
					th: 'ที่อยู่จัดส่งที่ถูกต้อง เพราะป้ายภาษีจะถูกส่งไปตามที่อยู่ที่กรอกไว้ ไม่ได้รับที่หน้าเคาน์เตอร์',
					en: 'A correct delivery address, since the sticker is posted to the address you enter rather than handed over at a counter.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'ระวังเว็บปลอมรับต่อภาษีรถ', en: 'Beware of fake road-tax sites' },
			text: {
				th: 'มีเว็บไซต์จำนวนมากที่ทำหน้าตาเลียนแบบระบบต่อภาษีรถ รับเงินจากผู้ใช้ แล้วไม่ได้ดำเนินการจริง หรือเก็บค่าบริการซ้อนโดยไม่แจ้ง บางแห่งซื้อโฆษณาให้ขึ้นเหนือผลการค้นหาจริงในช่วงที่คนค้นหาเยอะ ก่อนกรอกข้อมูลหรือชำระเงินทุกครั้ง ให้ดูแถบที่อยู่ว่าอยู่ภายใต้โดเมน dlt.go.th จริงหรือไม่ และหลีกเลี่ยงการเข้าผ่านลิงก์ที่ส่งต่อมาทาง SMS หรือแชท',
				en: 'A number of sites copy the look of the road-tax system, take payment and then either do nothing or add an undisclosed service charge on top. Some buy ads that outrank the real result during peak renewal season. Before entering anything or paying, check that the address bar really sits under dlt.go.th, and avoid arriving through links forwarded by SMS or chat.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ใบขับขี่: ขอใหม่กับต่ออายุไม่เหมือนกัน', en: 'Licences: a first one and a renewal are different journeys' }
		},
		{
			type: 'p',
			text: {
				th: 'ผู้ที่ขอใบขับขี่ครั้งแรกต้องผ่านสามด่านตามลำดับ คือการอบรมภาคทฤษฎีตามชั่วโมงที่กำหนด ซึ่งปัจจุบันสามารถเรียนผ่านระบบ e-Learning ของกรมจากที่บ้านได้ จากนั้นคือการทดสอบข้อเขียนเกี่ยวกับกฎจราจรและการขับขี่อย่างปลอดภัย และปิดท้ายด้วยการทดสอบขับรถจริงในสนามสอบ ทั้งสองการทดสอบต้องทำที่สำนักงานขนส่ง และต้องมีเอกสารประจำตัวพร้อมใบรับรองแพทย์ตามที่กำหนด',
				en: 'A first-time applicant passes three gates in order. First the theory training for the required number of hours, which can now be taken through the department’s e-learning system from home. Then a written test on traffic law and safe driving. Finally a practical driving test on a testing ground. Both tests happen at a transport office, and you must bring identification along with the medical certificate the rules call for.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ส่วนผู้ที่ต่ออายุใบขับขี่เดิมจะสั้นกว่ามาก โดยทั่วไปคือการอบรมตามที่กำหนด ซึ่งทำออนไลน์ได้เช่นกัน แล้วเข้าไปทดสอบสมรรถภาพร่างกาย เช่น การมองเห็นและปฏิกิริยาตอบสนอง ที่สำนักงาน ข้อควรระวังคือควรเริ่มดำเนินการก่อนวันหมดอายุพอสมควร เพราะถ้าปล่อยให้ขาดต่อเป็นเวลานาน เงื่อนไขอาจเปลี่ยนไปจนต้องกลับไปสอบใหม่ทั้งข้อเขียนและภาคปฏิบัติ ระยะเวลาที่ยอมให้ขาดได้และอายุของใบอนุญาตแต่ละชนิดไม่เท่ากัน จึงควรตรวจสอบจากเว็บไซต์ทางการ',
				en: 'Renewing an existing licence is much shorter: the required training, which can also be done online, followed by a physical-ability check at the office covering things like eyesight and reaction time. The thing to watch is timing — start well before the expiry date, because letting a licence lapse for long enough can push you back into sitting the written and practical tests again. How long a lapse is tolerated, and how long each class of licence runs, differ by licence type, so confirm both on the official site.'
			}
		},
		{
			type: 'h2',
			text: { th: 'โอนทะเบียนรถเมื่อซื้อขายรถมือสอง', en: 'Transferring registration when a used vehicle changes hands' }
		},
		{
			type: 'p',
			text: {
				th: 'การซื้อขายรถมือสองจบลงที่การส่งมอบรถและเงินเท่านั้นไม่ได้ ตราบใดที่ยังไม่แจ้งโอนทางทะเบียน ชื่อเจ้าของในเล่มทะเบียนยังเป็นของผู้ขายอยู่ ซึ่งสร้างปัญหาได้ทั้งสองฝ่าย ผู้ซื้อไม่สามารถทำธุรกรรมเกี่ยวกับรถได้เต็มที่ ส่วนผู้ขายยังมีชื่อผูกกับรถที่ตัวเองไม่ได้ครอบครองแล้ว การโอนตามปกติต้องใช้เล่มทะเบียนตัวจริง เอกสารแสดงตนของทั้งผู้โอนและผู้รับโอน แบบคำขอที่ลงนามครบถ้วน และในหลายกรณีต้องนำรถไปให้เจ้าหน้าที่ตรวจสอบที่สำนักงานขนส่งด้วย',
				en: 'A used-vehicle sale is not finished when the keys and the money change hands. Until the transfer is filed, the registration book still names the seller — awkward for both sides. The buyer cannot deal freely with the vehicle, and the seller stays attached to a vehicle they no longer hold. A transfer normally needs the original registration book, identification for both parties, a fully signed application form and, in many cases, the vehicle itself presented for inspection at a transport office.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เรื่องไหนทำออนไลน์ได้ เรื่องไหนต้องไปสำนักงาน', en: 'What finishes online, and what needs an office' }
		},
		{
			type: 'table',
			caption: { th: 'ภาพรวมของงานหลักและช่องทางที่ใช้ได้', en: 'The main tasks and how each one is done' },
			head: [
				{ th: 'เรื่องที่ต้องทำ', en: 'Task' },
				{ th: 'ทำออนไลน์ได้หรือไม่', en: 'Can it be done online?' },
				{ th: 'สิ่งที่ต้องเตรียม', en: 'What to prepare' }
			],
			rows: [
				[
					{ th: 'ต่อภาษีรถประจำปี', en: 'Annual road tax' },
					{ th: 'ได้ เฉพาะรถที่เข้าเงื่อนไขตามประเภทและอายุ', en: 'Yes, for vehicles within the type and age conditions' },
					{ th: 'พ.ร.บ. ที่ยังไม่หมดอายุ ใบตรวจสภาพจาก ตรอ. ถ้าถึงเกณฑ์ และข้อมูลตามเล่มทะเบียน', en: 'Valid compulsory insurance, a ตรอ. certificate if the vehicle is old enough, and the registration details' }
				],
				[
					{ th: 'ต่ออายุใบขับขี่', en: 'Driving licence renewal' },
					{ th: 'อบรมออนไลน์ได้ แต่ยังต้องไปทดสอบสมรรถภาพร่างกายที่สำนักงาน', en: 'Training online; the physical-ability check is still in person' },
					{ th: 'บัตรประชาชน ใบขับขี่เดิม และเอกสารประกอบตามที่กำหนด', en: 'ID card, the existing licence and the supporting documents required' }
				],
				[
					{ th: 'ขอใบขับขี่ครั้งแรก', en: 'First driving licence' },
					{ th: 'อบรมและจองคิวออนไลน์ได้ แต่การสอบทั้งสองส่วนต้องไปที่สำนักงาน', en: 'Training and booking online; both tests are in person' },
					{ th: 'บัตรประชาชน ใบรับรองแพทย์ และผลการอบรม', en: 'ID card, medical certificate and proof of training' }
				],
				[
					{ th: 'โอนทะเบียนรถ', en: 'Ownership transfer' },
					{ th: 'ต้องไปที่สำนักงานขนส่ง', en: 'Requires a transport office' },
					{ th: 'เล่มทะเบียนตัวจริง เอกสารแสดงตนของทั้งสองฝ่าย และแบบคำขอที่ลงนามแล้ว', en: 'The original registration book, identification for both parties and the signed application' }
				]
			]
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ไปสำนักงานทั้งที ให้จองคิวก่อน', en: 'Going in person? Book first' },
			text: {
				th: 'สำนักงานขนส่งในเมืองใหญ่มีคนเข้าใช้บริการหนาแน่น โดยเฉพาะช่วงต้นเดือนและวันหลังวันหยุดยาว การจองคิวล่วงหน้าผ่าน DLT Smart Queue ช่วยกำหนดวันเวลาที่แน่นอนได้ และควรตรวจสอบก่อนไปว่าสำนักงานสาขาที่จะไปให้บริการเรื่องที่เราต้องการจริงหรือไม่ เพราะบางสาขารับเฉพาะบางประเภทงาน',
				en: 'Transport offices in larger cities get busy, especially at the start of the month and the day after a long weekend. Booking through DLT Smart Queue fixes a date and time, and it is worth checking beforehand that the branch you plan to visit actually handles your kind of task — some branches take only certain categories of work.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงต้องมีอยู่', en: 'Why a page like this needs to exist' }
		},
		{
			type: 'p',
			text: {
				th: 'เว็บไซต์ของกรมการขนส่งทางบกไม่ได้ปิดกั้นเครื่องมือค้นหาแต่อย่างใด แต่ปัญหาของผู้ใช้ไม่ใช่เรื่องการเข้าถึง เป็นเรื่องการหาคำตอบให้เจอมากกว่า เพราะข้อมูลกระจายอยู่ในหลายระบบย่อยและประกาศจำนวนมากอยู่ในรูปไฟล์เอกสาร คนที่พิมพ์ว่า “ต่อภาษีรถออนไลน์” หรือ “รถกี่ปีต้องตรวจสภาพ” จึงมักได้ผลลัพธ์เป็นหน้าแรกของหน่วยงาน หรือแย่กว่านั้นคือได้เว็บนายหน้าที่จ่ายค่าโฆษณาไว้ ซึ่งเป็นช่องว่างที่มิจฉาชีพใช้หากินมาตลอด หน้านี้จึงทำหน้าที่แคบ ๆ อย่างเดียว คืออธิบายว่าแต่ละเรื่องต้องเตรียมอะไรและทำที่ไหนได้บ้าง ด้วยคำที่คนพิมพ์ค้นหาจริง แล้วส่งต่อไปยังที่อยู่ทางการโดยตรง THGov เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดกรมการขนส่งทางบก ไม่รับชำระภาษี ไม่รับดำเนินการแทน และไม่เก็บข้อมูลส่วนบุคคลของผู้ใช้ ทุกธุรกรรมเกิดขึ้นบนระบบของหน่วยงานเท่านั้น',
				en: 'The department’s website blocks no search engine at all. The user’s problem is not access but retrieval: the information is spread across several sub-systems, and a great deal of it is published as documents. Someone typing “renew road tax online” or “how old before a vehicle needs inspecting” tends to land on an institutional front page — or worse, on a broker site that paid for the placement, which is precisely the gap the scam operators have been living in. So this page does one narrow job: explain what each task requires and where it can be done, in the words people actually search with, then hand you to the official address. THGov is an independent directory. It is not part of the Department of Land Transport, it takes no tax payments, it does not act on anyone’s behalf and it collects no personal data — every transaction happens on the agency’s own systems.'
			}
		}
	],
	crawl: {
		host: 'www.dlt.go.th',
		verdict: 'none',
		status: 404,
		snippet: 'GET /robots.txt  ->  HTTP 404 Not Found',
		checkedAt: '2026-08-27',
		note: {
			th: 'เว็บไซต์กรมการขนส่งทางบกไม่มีไฟล์ robots.txt ซึ่งตามมาตรฐานถือว่าอนุญาตให้เครื่องมือค้นหาเก็บข้อมูลได้ทั้งหมด',
			en: 'The department’s website serves no robots.txt, which by convention means search engines may crawl the whole site.'
		}
	},
	priority: 89,
	updated: '2026-08-27'
};
