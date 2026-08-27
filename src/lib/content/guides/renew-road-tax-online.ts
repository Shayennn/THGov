import type { Guide } from '../types';

export const guide: Guide = {
	slug: 'renew-road-tax-online',
	title: {
		th: 'วิธีต่อภาษีรถยนต์และรถจักรยานยนต์ออนไลน์',
		en: 'How to Renew Thai Vehicle Road Tax Online'
	},
	deck: {
		th: 'ถ้ารถของคุณเข้าเงื่อนไข การต่อภาษีประจำปีจบได้บนหน้าจอ ไม่ต้องลางานไปนั่งรอที่สำนักงานขนส่ง ขอแค่เตรียมของให้ครบตามลำดับก่อน',
		en: 'If your vehicle qualifies, the annual road tax is a screen-and-a-payment job rather than a morning spent queueing — provided you line things up in the right order first.'
	},
	summary: {
		th: 'ต่อภาษีรถยนต์และรถจักรยานยนต์ออนไลน์กับกรมการขนส่งทางบก ตั้งแต่เตรียม พ.ร.บ. และใบตรวจสภาพ ตรอ. ไปจนถึงชำระเงิน รอรับป้ายภาษี และวิธีเลี่ยงเว็บปลอม',
		en: 'Renew the annual road tax on a Thai car or motorcycle online: what to line up first, how payment and sticker delivery work, and how to spot the fake renewal sites.'
	},
	keywords: {
		th: [
			'ต่อภาษีรถออนไลน์',
			'ต่อภาษีรถยนต์ออนไลน์',
			'ต่อภาษีมอเตอร์ไซค์ออนไลน์',
			'ต่อทะเบียนรถออนไลน์',
			'ต่อภาษีรถประจำปี',
			'ป้ายวงกลม',
			'ป้ายภาษีรถ',
			'พ.ร.บ. รถยนต์',
			'ตรวจสภาพรถ ตรอ.',
			'ภาษีรถขาด',
			'ต่อภาษีรถย้อนหลัง',
			'รถกี่ปีต้องตรวจสภาพ',
			'เว็บต่อภาษีรถของจริง'
		],
		en: [
			'renew road tax Thailand',
			'Thai car tax online',
			'motorcycle road tax Thailand',
			'DLT road tax renewal',
			'Thailand compulsory motor insurance',
			'vehicle inspection Thailand',
			'road tax sticker Thailand'
		]
	},
	services: ['dlt-eservice'],
	steps: [
		{
			title: {
				th: 'เริ่มจากวันหมดอายุ ไม่ใช่เริ่มจากเว็บไซต์',
				en: 'Start from the expiry date, not the website'
			},
			text: {
				th: 'ภาษีรถหมดอายุตามวันที่ในเล่มทะเบียนและบนป้ายที่ติดกระจกหน้า ไม่ได้หมดพร้อมกันทุกคัน กรมการขนส่งทางบกเปิดให้ชำระล่วงหน้าได้ระยะหนึ่งก่อนถึงวันนั้น ควรจัดการช่วงนั้น เพราะถ้าติดปัญหาจะยังมีเวลาแก้',
				en: 'Road tax expires on the date printed in your registration book and on the sticker in the windscreen — no two vehicles share a date. The department opens a window for paying ahead of it, and that is when to act, because a snag still leaves room to fix it.'
			}
		},
		{
			title: { th: 'ทำ พ.ร.บ. ให้มีผลคุ้มครองก่อน', en: 'Get compulsory insurance in force first' },
			text: {
				th: 'พ.ร.บ. คือประกันภัยรถภาคบังคับตามกฎหมาย และเป็นเงื่อนไขตั้งต้นของการชำระภาษี ถ้าหมดอายุหรือขาดช่วง ระบบจะไม่ให้ทำรายการต่อ ทั้งออนไลน์และที่เคาน์เตอร์ ซื้อจากบริษัทประกันหรือตัวแทน แล้วรอให้ข้อมูลเข้าระบบก่อน',
				en: 'Compulsory motor insurance — พ.ร.บ. — is required by law and is the precondition for paying the tax. If it has expired or lapsed, nothing goes further, online or at a counter. Buy it through an insurer or agent, then give the record time to reach the department’s system.'
			}
		},
		{
			title: {
				th: 'ถ้ารถถึงเกณฑ์อายุ ให้ตรวจสภาพที่ ตรอ.',
				en: 'If the vehicle is old enough, get it inspected'
			},
			text: {
				th: 'รถที่ใช้งานมานานถึงเกณฑ์ของรถประเภทนั้น ต้องผ่านการตรวจจากสถานตรวจสภาพรถเอกชนที่ได้รับอนุญาต หรือ ตรอ. ก่อน เกณฑ์ของรถยนต์กับรถจักรยานยนต์ไม่เท่ากัน ควรยืนยันเกณฑ์ปัจจุบันจากเว็บไซต์ทางการก่อนขับไป',
				en: 'Once a vehicle passes the age threshold set for its class, it must clear a check at a licensed private inspection centre — a ตรอ. Thresholds differ between cars and motorcycles, so confirm the current rule on the official site before driving over.'
			}
		},
		{
			title: {
				th: 'เข้าระบบทางการ แล้วกรอกข้อมูลรถตามเล่ม',
				en: 'Open the official system and enter the details'
			},
			text: {
				th: 'พิมพ์ที่อยู่เว็บไซต์ของกรมด้วยตัวเอง หรือใช้ลิงก์ที่บันทึกไว้ อย่ากดผ่านโฆษณาหรือลิงก์ในแชท จากนั้นกรอกประเภทรถ เลขทะเบียน จังหวัด และเลขตัวรถให้ตรงทุกตัวอักษร ระบบจะตรวจให้เองว่ารถคันนี้ต่อออนไลน์ได้ไหม',
				en: 'Type the department’s address yourself, or use a link you saved — never arrive through an advertisement or a forwarded message. Then enter the vehicle class, plate number, province and chassis number exactly as registered; the lookup is literal, and the system checks eligibility for you.'
			}
		},
		{
			title: {
				th: 'ดูยอดที่ระบบคำนวณ ตรวจที่อยู่ แล้วจ่าย',
				en: 'Check the amount, check the address, then pay'
			},
			text: {
				th: 'ยอดภาษีไม่เท่ากันทุกคัน เพราะคิดตามประเภทรถ ขนาดเครื่องยนต์หรือน้ำหนัก และอายุการใช้งาน ให้ยึดตัวเลขที่ระบบทางการแสดงเป็นหลัก ก่อนกดยืนยัน ตรวจที่อยู่จัดส่งให้เป็นที่อยู่ปัจจุบัน เพราะป้ายภาษีส่งทางไปรษณีย์',
				en: 'The amount differs from vehicle to vehicle, following the class, the engine size or weight, and the age, so trust the figure the official system produces. Before confirming, re-read the delivery address — the sticker is posted to it, not handed over a counter.'
			}
		},
		{
			title: {
				th: 'เก็บหลักฐานไว้ในรถระหว่างรอป้าย',
				en: 'Keep the receipt in the car while the sticker travels'
			},
			text: {
				th: 'ชำระสำเร็จแล้วระบบจะออกหลักฐานให้ทันที ส่วนป้ายภาษีตามมาทางไปรษณีย์ ให้เก็บไฟล์นั้นไว้ในรถเผื่อถูกเรียกตรวจระหว่างที่ป้ายยังมาไม่ถึง และเผื่อเวลาจัดส่งให้ป้ายมาถึงก่อนภาษีเดิมหมดอายุ',
				en: 'A receipt is issued the moment payment clears; the sticker follows by post. Keep it on your phone and in the car so you have something to show if you are stopped, and allow enough delivery time for the sticker to land before the old tax runs out.'
			}
		},
		{
			title: {
				th: 'ถ้าระบบปฏิเสธ ให้จองคิวไปที่สำนักงาน',
				en: 'If the system refuses, book a queue and go in person'
			},
			text: {
				th: 'ระบบออนไลน์ไม่ได้รับรถทุกคัน ถ้าขึ้นข้อความว่าทำรายการไม่ได้ แปลว่ารถคันนั้นต้องดำเนินการที่สำนักงานขนส่ง ให้จองคิวล่วงหน้าผ่านช่องทางของกรม แล้วเตรียมเล่มทะเบียน หลักฐาน พ.ร.บ. และใบตรวจสภาพถ้าต้องใช้',
				en: 'Not every vehicle is accepted online. A refusal means this one has to be handled by a person at a transport office. Book a queue in advance through the department’s own channel, and bring the registration book, proof of insurance and the inspection certificate if one applies.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ต่อภาษีรถออนไลน์ คืออะไรกันแน่', en: 'What online road tax renewal actually is' }
		},
		{
			type: 'p',
			text: {
				th: 'การต่อภาษีรถประจำปีคือการจ่ายภาษีให้รัฐ เพื่อให้รถวิ่งบนถนนได้อย่างถูกกฎหมายต่อไปอีกหนึ่งปี สิ่งที่ได้กลับมาคือป้ายภาษีสำหรับติดกระจกหน้า ที่หลายคนยังเรียกติดปากว่า “ป้ายวงกลม” ความสับสนที่พบบ่อยที่สุดคือการเหมารวมว่าภาษีรถ พ.ร.บ. และการตรวจสภาพเป็นเรื่องเดียวกัน ทั้งสามอย่างเกี่ยวข้องกัน แต่เป็นคนละรายการ ทำคนละที่ และมีวันหมดอายุของตัวเอง',
				en: 'Renewing road tax means paying the state for another year of legal use of the vehicle. What comes back is the windscreen sticker, still widely called ป้ายวงกลม — “the round one” — after the shape of an older design. The most common confusion is treating road tax, compulsory insurance and the roadworthiness inspection as a single errand. They are connected, but they are three separate items, obtained in three different places, each with its own expiry date.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ลำดับสำคัญกว่าที่คิด', en: 'The order matters more than people expect' }
		},
		{
			type: 'p',
			text: {
				th: 'ภาษีรถเป็นปลายทางของเงื่อนไขอื่น ไม่ใช่จุดเริ่มต้น ถ้าเริ่มจากการเปิดหน้าเว็บต่อภาษีเป็นอย่างแรก มักถูกตีกลับกลางทางแล้วต้องเริ่มใหม่',
				en: 'Road tax sits at the end of a chain, not the start of one. Opening the renewal page first is the reliable way to get bounced halfway and start over.'
			}
		},
		{
			type: 'table',
			caption: { th: 'เรียงลำดับให้ถูกก่อนต่อภาษี', en: 'The order things have to happen in' },
			head: [
				{ th: 'สิ่งที่ต้องมี', en: 'What you need' },
				{ th: 'คืออะไร', en: 'What it is' },
				{ th: 'ทำที่ไหน', en: 'Where you get it' }
			],
			rows: [
				[
					{ th: 'พ.ร.บ.', en: 'พ.ร.บ.' },
					{ th: 'ประกันภัยรถภาคบังคับตามกฎหมาย', en: 'The motor insurance the law compels every vehicle to carry' },
					{ th: 'บริษัทประกันภัยและตัวแทน', en: 'Insurers and their agents' }
				],
				[
					{ th: 'ใบตรวจสภาพ (ตรอ.)', en: 'Inspection certificate (ตรอ.)' },
					{ th: 'ตรวจสภาพประจำปี เฉพาะรถที่อายุถึงเกณฑ์', en: 'The annual roadworthiness check, once a vehicle is old enough' },
					{ th: 'สถานตรวจสภาพรถเอกชนที่ได้รับอนุญาต', en: 'A licensed private inspection centre' }
				],
				[
					{ th: 'ภาษีรถประจำปี', en: 'Annual road tax' },
					{ th: 'จ่ายแล้วได้ป้ายภาษีมาติดกระจกหน้า', en: 'The payment that earns you the windscreen sticker' },
					{ th: 'ระบบออนไลน์ของกรม หรือสำนักงานขนส่ง', en: 'The department’s online system, or a transport office' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'รถแบบไหนที่ระบบออนไลน์ไม่รับ', en: 'Which vehicles the online route turns away' }
		},
		{
			type: 'p',
			text: {
				th: 'ช่องทางออนไลน์ออกแบบมาสำหรับกรณีตรงไปตรงมา รถที่มีเงื่อนไขซับซ้อนกว่านั้นยังต้องให้เจ้าหน้าที่ดูด้วยตา ข้อจำกัดหลักคืออายุการใช้งานและสถานะทางทะเบียน ซึ่งกำหนดต่างกันตามประเภทรถ ข้อดีคือไม่ต้องจำเกณฑ์เอง เพราะระบบจะตรวจให้ทันทีที่กรอกข้อมูลรถ',
				en: 'The online channel is built for straightforward cases; anything more tangled still needs a person to look at it. The limits are the vehicle’s age and its registration status, both set differently by class. The useful part is that you need not memorise any of it — the check runs the moment you enter the details.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'รถที่มีอายุการใช้งานเกินเกณฑ์ของรถประเภทนั้น',
					en: 'Vehicles older than the threshold for their class.'
				},
				{
					th: 'รถที่ค้างชำระภาษีนานเกินกว่าที่ช่องทางออนไลน์รองรับ',
					en: 'Tax unpaid for longer than the online channel handles.'
				},
				{
					th: 'รถที่ถึงเกณฑ์ต้องตรวจสภาพแล้ว แต่ยังไม่ตรวจหรือตรวจไม่ผ่าน',
					en: 'An inspection that is due but not passed.'
				},
				{
					th: 'รถที่ไม่มี พ.ร.บ. คุ้มครองอยู่ ณ วันที่ทำรายการ',
					en: 'No compulsory insurance in force on the day you file.'
				},
				{
					th: 'รถที่มีรายการทะเบียนต้องแก้ไข เช่น เปลี่ยนเครื่องยนต์ ติดตั้งแก๊ส หรือถูกอายัด',
					en: 'Unreported changes — a new engine, an LPG conversion — or a hold on the registration.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ถ้าปล่อยให้ภาษีขาด', en: 'If you let it lapse' }
		},
		{
			type: 'p',
			text: {
				th: 'ภาษีที่เลยกำหนดไม่ได้หายไปเฉย ๆ แต่จะสะสมเป็นเงินเพิ่มตามระยะเวลาที่ค้าง ยิ่งทิ้งไว้นาน ยอดในวันที่กลับมาต่อก็ยิ่งสูง และถ้าขาดต่อเนื่องจนถึงระยะที่กฎหมายกำหนด ทะเบียนรถจะถูกระงับ เจ้าของต้องนำแผ่นป้ายไปคืนที่สำนักงานขนส่ง หากจะใช้รถคันนั้นอีกก็ต้องจดทะเบียนใหม่ ซึ่งยุ่งและแพงกว่าการต่อภาษีตามปกติมาก อัตราเงินเพิ่มและกรอบเวลาต่างกันตามประเภทรถ ควรตรวจสอบจากประกาศของกรมโดยตรง',
				en: 'Overdue tax does not quietly disappear: a surcharge accrues for as long as it stays unpaid, so the bill grows the longer it is left. Let the lapse run long enough and the registration itself is suspended — the owner must surrender the plates at a transport office, and putting the vehicle back on the road then means registering it afresh, far more work and more money than a routine renewal. Surcharges and timeframes vary by vehicle class, so read them from the department’s own announcements.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ระวังเว็บรับต่อภาษีปลอม', en: 'Lookalike renewal sites' }
		},
		{
			type: 'p',
			text: {
				th: 'ทุกช่วงที่คนค้นหาเรื่องต่อภาษีรถกันมาก จะมีเว็บไซต์หน้าตาคล้ายระบบราชการโผล่ขึ้นมาเป็นกลุ่ม บางแห่งรับเงินแล้วเงียบหาย ไม่มีป้ายภาษีส่งมาให้จริง บางแห่งบวกค่าบริการซ้อนโดยไม่แจ้ง และหลายแห่งซื้อโฆษณาให้ขึ้นเหนือผลการค้นหาจริง คนที่กำลังรีบและกดลิงก์แรกที่เห็นจึงตกเป็นเหยื่อได้ง่าย',
				en: 'Whenever searches for road tax renewal spike, a crop of sites appears wearing the look of an official system. Some take the money and go quiet, and no sticker ever comes. Some stack an undisclosed service fee on top. Many buy advertising so they sit above the genuine result — and someone in a hurry, tapping the first link they see, is exactly the target.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ดูแถบที่อยู่ก่อนกรอกข้อมูลทุกครั้ง ระบบทางการอยู่ภายใต้โดเมน dlt.go.th',
					en: 'Read the address bar first — the genuine system sits under the dlt.go.th domain.'
				},
				{
					th: 'ผลการค้นหาที่กำกับว่าเป็นโฆษณา ไม่ได้แปลว่าเป็นเว็บทางการ',
					en: 'A result labelled as an ad is not thereby official; scroll to the organic results.'
				},
				{
					th: 'อย่าเข้าผ่านลิงก์ใน SMS หรือแชท ให้พิมพ์ที่อยู่เองหรือใช้ลิงก์ที่บันทึกไว้',
					en: 'Do not enter through an SMS or chat link. Type the address, or use a bookmark.'
				},
				{
					th: 'ระวังหน้าเว็บที่เร่งให้รีบจ่าย หรือขอให้โอนเข้าบัญชีบุคคลธรรมดา',
					en: 'Be wary of countdown pressure, or any request to transfer to a personal bank account.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'ถ้าเผลอจ่ายให้เว็บปลอมไปแล้ว', en: 'If you have already paid a fake site' },
			text: {
				th: 'รีบติดต่อธนาคารหรือผู้ให้บริการชำระเงินทันทีเพื่อขอระงับรายการ เก็บภาพหน้าจอ สลิป และที่อยู่เว็บไซต์ไว้เป็นหลักฐาน แล้วแจ้งความหรือแจ้งผ่านช่องทางรับแจ้งอาชญากรรมทางเทคโนโลยี จากนั้นให้ถือว่าภาษียังไม่ได้ชำระ',
				en: 'Contact your bank or payment provider at once and ask them to stop the transaction. Keep screenshots, the receipt and the web address as evidence, then file a police report or use the official channel for reporting online crime. After that, treat the tax as still unpaid and do it again through the official system.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'เกี่ยวกับหน้านี้', en: 'About this page' },
			text: {
				th: 'THGov เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดกรมการขนส่งทางบกหรือหน่วยงานใด เราไม่รับชำระภาษี ไม่รับดำเนินการแทน และไม่เก็บข้อมูลส่วนบุคคล ส่วนอัตราภาษี เกณฑ์อายุรถ และกำหนดเวลา ให้ยึดตามประกาศทางการล่าสุด',
				en: 'THGov is an independent directory, not affiliated with the Department of Land Transport or any other agency. We take no payments, act on no one’s behalf, and collect none of your personal data. For rates, age thresholds and deadlines, always defer to the latest official announcement.'
			}
		}
	],
	faq: [
		{
			q: { th: 'รถทุกคันต้องตรวจสภาพก่อนต่อภาษีไหม', en: 'Does every vehicle need an inspection first?' },
			a: {
				th: 'ไม่ใช่ทุกคัน การตรวจที่ ตรอ. จำเป็นเมื่อรถมีอายุถึงเกณฑ์ที่กำหนดสำหรับรถประเภทนั้น รถที่ใหม่กว่านั้นยังไม่ต้องตรวจ เกณฑ์ของรถยนต์กับรถจักรยานยนต์ไม่เท่ากันและปรับปรุงเป็นระยะ ให้ดูเกณฑ์ปัจจุบันจากเว็บไซต์ของกรม',
				en: 'No. A ตรอ. inspection becomes necessary once the vehicle reaches the age threshold for its class; newer ones are exempt. The threshold differs between cars and motorcycles and is revised periodically, so check the current rule on the department’s site — or enter the details in the renewal system and let it answer.'
			}
		},
		{
			q: {
				th: 'ภาษีขาดมานานแล้ว ยังต่อออนไลน์ได้ไหม',
				en: 'My tax lapsed a while ago — can I still renew online?'
			},
			a: {
				th: 'ขึ้นอยู่กับว่าขาดมานานแค่ไหน ช่องทางออนไลน์รองรับการค้างชำระได้ในระดับหนึ่ง เกินกว่านั้นต้องไปที่สำนักงานขนส่ง ทุกกรณีจะมีเงินเพิ่มสะสมตามระยะเวลาที่ค้าง และถ้าขาดนานถึงระยะที่กฎหมายกำหนด ทะเบียนจะถูกระงับ',
				en: 'It depends how long. The online channel tolerates a certain amount of arrears and refuses beyond that, at which point it becomes a transport-office job. Either way a surcharge has been accruing, and a long enough lapse leads to the registration being suspended.'
			}
		},
		{
			q: {
				th: 'จ่ายแล้วแต่ป้ายภาษียังไม่มา ขับรถได้ไหม',
				en: 'I have paid but the sticker has not arrived — can I drive?'
			},
			a: {
				th: 'ระบบจะออกหลักฐานการชำระให้ทันทีที่จ่ายสำเร็จ ให้เก็บไว้ในรถเพื่อแสดงหากถูกเรียกตรวจระหว่างรอป้ายจริง ถ้ารอนานผิดปกติ ให้ตรวจสถานะในบัญชีที่ใช้ทำรายการ สาเหตุที่พบบ่อยที่สุดคือกรอกที่อยู่จัดส่งเป็นที่อยู่เก่า',
				en: 'Payment produces a receipt immediately; keep it in the car to show if you are stopped while the sticker is still in the post. If the wait looks unusual, check the status in the account you used — an out-of-date delivery address is the usual culprit.'
			}
		},
		{
			q: {
				th: 'มีประกันชั้น 1 อยู่แล้ว ยังต้องทำ พ.ร.บ. อีกไหม',
				en: 'I have comprehensive cover — do I still need พ.ร.บ.?'
			},
			a: {
				th: 'ต้องทำ พ.ร.บ. เป็นประกันภาคบังคับที่กฎหมายกำหนดให้รถทุกคันต้องมี ส่วนประกันชั้น 1 เป็นภาคสมัครใจที่ซื้อเพิ่มเอง คนละฉบับ คนละวันหมดอายุ ระบบต่อภาษีตรวจเฉพาะ พ.ร.บ. ถ้าไม่มีก็ทำรายการต่อไม่ได้',
				en: 'Yes. พ.ร.บ. is the compulsory policy the law requires of every vehicle; first-class and other voluntary policies are separate products bought by choice. Different documents, different expiry dates. The renewal system looks only at the compulsory one, and without it in force nothing proceeds.'
			}
		},
		{
			q: {
				th: 'จะแน่ใจได้อย่างไรว่ากำลังจ่ายเงินให้ระบบทางการ',
				en: 'How can I be sure I am paying the real system?'
			},
			a: {
				th: 'ก่อนกรอกข้อมูลหรือกดจ่าย ให้ดูแถบที่อยู่ว่าอยู่ภายใต้โดเมน dlt.go.th จริงหรือไม่ อย่าตัดสินจากหน้าตาของเว็บ เพราะลอกเลียนกันได้ง่าย เลี่ยงลิงก์จากโฆษณาและข้อความที่ส่งต่อกันมา และอย่าโอนเข้าบัญชีบุคคลธรรมดา',
				en: 'Before typing anything or pressing pay, read the address bar and confirm you are under the dlt.go.th domain. Do not judge by how the page looks; appearance is trivial to copy. Avoid links from ads and forwarded messages, and never transfer to a personal bank account.'
			}
		}
	],
	updated: '2026-08-28',
	minutes: 7
};
