import type { Guide } from '../types';

export const guide: Guide = {
	slug: 'verify-a-thai-company',
	title: {
		th: 'วิธีตรวจสอบว่าบริษัทมีตัวตนจริง ก่อนโอนเงินหรือเซ็นสัญญา',
		en: 'How to Check a Thai Company Is Real Before You Pay'
	},
	deck: {
		th: 'ใช้เวลาไม่กี่นาทีก่อนโอนเงิน เพื่อไม่ต้องใช้เวลาอีกหลายเดือนตามหาเงินคืน — วิธีตรวจสอบนิติบุคคลไทยจากข้อมูลทะเบียนที่เปิดให้ทุกคนดูได้ฟรี',
		en: 'A few minutes before you transfer, so you are not spending months chasing the money afterwards — how to check a Thai company against the public registry, for free.'
	},
	summary: {
		th: 'เช็กเลขทะเบียนนิติบุคคล 13 หลัก สถานะกิจการ กรรมการผู้มีอำนาจ และงบการเงิน ก่อนโอนมัดจำหรือเซ็นสัญญากับบริษัทที่ยังไม่รู้จัก พร้อมสัญญาณอันตรายที่ควรหยุด',
		en: 'Check a Thai company’s 13-digit registration number, status, directors and accounts before you send a deposit or sign — plus the red flags that should stop you.'
	},
	keywords: {
		th: [
			'เช็คบริษัทก่อนโอนเงิน',
			'ตรวจสอบบริษัทมีตัวตนจริงไหม',
			'เช็คเลขทะเบียนนิติบุคคล 13 หลัก',
			'วิธีตรวจสอบบริษัทก่อนเซ็นสัญญา',
			'เช็คบริษัทก่อนสมัครงาน',
			'บริษัทปิดกิจการแล้วหรือยัง',
			'ชื่อบัญชีธนาคารไม่ตรงกับชื่อบริษัท',
			'ตรวจสอบทุนจดทะเบียน',
			'ดูงบการเงินบริษัทฟรี',
			'เช็คกรรมการผู้มีอำนาจลงนาม',
			'ตรวจสอบซัพพลายเออร์ก่อนสั่งของ',
			'โดนโกงโอนเงินให้บริษัท'
		],
		en: [
			'verify Thai company',
			'check Thai company before paying deposit',
			'Thai juristic person registration number',
			'Thai supplier due diligence',
			'is this Thai company real',
			'check company status Thailand',
			'Thai company financial statements check'
		]
	},
	services: ['dbd-datawarehouse'],
	steps: [
		{
			title: { th: 'ขอเลขทะเบียนนิติบุคคล 13 หลัก', en: 'Ask for the 13-digit registration number' },
			text: {
				th: 'เริ่มจากขอเลขทะเบียนนิติบุคคล 13 หลักของบริษัทที่คุณจะทำธุรกิจด้วย ธุรกิจที่จดทะเบียนถูกต้องมีเลขนี้อยู่แล้วบนใบเสนอราคา ใบกำกับภาษี ใบเสร็จ และสัญญา หลายแห่งใส่ไว้ท้ายเว็บไซต์ด้วย ถ้าอีกฝ่ายบ่ายเบี่ยง ให้ถือว่านั่นคือคำตอบแล้ว',
				en: 'Start by asking for the 13-digit juristic person registration number. A properly registered business already prints it on quotations, tax invoices, receipts and contracts, and many put it in the website footer. If the other side dodges the question, you have your answer.'
			}
		},
		{
			title: { th: 'ค้นในทะเบียนทางการด้วยตัวเอง', en: 'Search the official registry yourself' },
			text: {
				th: 'เปิดระบบค้นข้อมูลนิติบุคคลของกรมพัฒนาธุรกิจการค้าเอง โดยพิมพ์ที่อยู่เว็บไซต์หรือกดลิงก์ทางการจากหน้านี้ อย่าใช้ลิงก์หรือภาพหน้าจอที่คู่ค้าส่งมา เพราะทำเลียนแบบได้ไม่ยาก การค้นด้วยเลข 13 หลักจะตรงที่สุด',
				en: 'Open the Department of Business Development’s company search yourself — type the address, or use the official link on this page. Never rely on a link or a screenshot the counterparty sends you; both are easy to fake. Searching by the number gives the cleanest match.'
			}
		},
		{
			title: { th: 'อ่านสถานะกิจการเป็นอันดับแรก', en: 'Read the status line first' },
			text: {
				th: 'สิ่งแรกที่ต้องอ่านคือสถานะของนิติบุคคล ว่ายังดำเนินกิจการอยู่ เลิกกิจการแล้ว หรืออยู่ระหว่างชำระบัญชี เพราะคนยังออกใบเสนอราคาในนามบริษัทที่เลิกไปแล้วได้ แต่คุณจะไม่มีคู่สัญญาให้ตามทวงจริง ๆ',
				en: 'Read the status line before anything else: still trading, dissolved, or in liquidation. People do keep issuing quotations under a name that has already been wound up — and you would be left with no counterparty to pursue.'
			}
		},
		{
			title: { th: 'เทียบข้อมูลทะเบียนกับเรื่องที่เขาเล่า', en: 'Set the record against the story you were told' },
			text: {
				th: 'อ่านชื่อจดทะเบียน ที่ตั้งสำนักงาน วันจดทะเบียน และประเภทธุรกิจ แล้ววางเทียบกับสิ่งที่อีกฝ่ายเล่า บริษัทที่อ้างว่ามีโรงงานและทีมนับร้อย แต่จดทะเบียนไว้ที่ห้องชุดพักอาศัย ไม่ได้แปลว่าโกงเสมอไป แต่แปลว่าคุณมีคำถามที่ต้องถาม',
				en: 'Compare the registered name, office address, registration date and business type against what you have been told. A firm claiming a factory and a hundred staff, yet registered to a residential condo unit, is not automatically a fraud — it is automatically a set of questions.'
			}
		},
		{
			title: { th: 'ดูว่าใครมีอำนาจลงนามจริง', en: 'Check who can actually sign' },
			text: {
				th: 'ตรวจรายชื่อกรรมการและเงื่อนไขการลงนาม แล้วเทียบกับชื่อคนที่จะเซ็นสัญญากับคุณ หลายบริษัทกำหนดให้กรรมการสองคนลงนามร่วมกันพร้อมประทับตรา ถ้าลงนามไม่ครบตามเงื่อนไข อาจกลายเป็นข้อโต้แย้งภายหลัง',
				en: 'Check the directors and the signing condition, then match them against whoever is about to sign for you. Many companies require two directors signing jointly with the seal. A document signed outside that condition can be argued over later.'
			}
		},
		{
			title: { th: 'เปิดงบการเงิน แล้วดูแค่สามอย่าง', en: 'Open the accounts and look at three things' },
			text: {
				th: 'ไม่ต้องอ่านเป็นนักบัญชีก็ได้ประโยชน์ เปิดงบที่นำส่งไว้หลายปีเรียงกัน แล้วดูสามอย่าง คือมีรายได้เกิดขึ้นจริงไหม ตัวเลขนิ่งใกล้ศูนย์จนเหมือนไม่ได้ทำอะไรหรือเปล่า และหนี้สินสูงผิดส่วนกับส่วนของผู้ถือหุ้นแค่ไหน',
				en: 'You do not need accounting training here. Line up several filed years and look at three things: is there any revenue at all, do the figures sit near zero as though nothing is happening, and how far out of proportion are the liabilities against shareholders’ equity.'
			}
		},
		{
			title: { th: 'ตรวจชื่อบัญชีธนาคารก่อนกดโอน', en: 'Check the account name before you transfer' },
			text: {
				th: 'ก่อนกดยืนยันการโอน ให้ดูว่าชื่อบัญชีปลายทางตรงกับชื่อนิติบุคคลที่คุณเพิ่งตรวจหรือไม่ ถ้าเป็นชื่อบุคคลธรรมดา ชื่อบริษัทอื่น หรือสะกดต่างไปเล็กน้อย ให้หยุดแล้วถามเหตุผลก่อนเสมอ',
				en: 'Before confirming a transfer, check that the account name matches the entity you just looked up. A personal name, a different company, or the same name spelled slightly differently is always a reason to stop and ask why.'
			}
		},
		{
			title: { th: 'เก็บหลักฐานไว้ก่อนจ่ายเงิน', en: 'Save the evidence before you pay' },
			text: {
				th: 'บันทึกภาพหน้าจอข้อมูลทะเบียนพร้อมวันที่ตรวจ แล้วเก็บใบเสนอราคา บทสนทนา และเลขบัญชีที่ได้รับไว้ที่เดียวกัน ถ้ามีปัญหาขึ้นมา นี่คือสิ่งที่ธนาคารและตำรวจจะขอดูเป็นอย่างแรก',
				en: 'Screenshot the registry record with the date you checked it, and keep the quotation, the chat history and the account details in the same place. If anything goes wrong, that folder is the first thing the bank and the police will ask to see.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ทำไมต้องเช็กก่อนโอน', en: 'Why check before you pay' }
		},
		{
			type: 'p',
			text: {
				th: 'เรื่องที่จบไม่สวยส่วนใหญ่ไม่ได้เริ่มจากสัญญาซับซ้อน แต่เริ่มจากการโอนมัดจำให้บริษัทที่ไม่เคยเจอหน้ากัน เพราะราคาดี ตอบไว และคุยในแชทได้น่าเชื่อถือ ข้อมูลทะเบียนนิติบุคคลของไทยเปิดให้ค้นดูฟรี และตอบคำถามสำคัญที่สุดได้ในไม่กี่นาที คือบริษัทนี้มีตัวตนตามกฎหมายไหม และยังเปิดดำเนินการอยู่หรือเปล่า',
				en: 'Most of these stories do not begin with a complicated contract. They begin with a deposit sent to a company nobody has met, because the price was good, the replies were fast and the chat felt professional. Thailand’s company registry is public and free, and within a few minutes it answers the two questions that matter most: does this entity legally exist, and is it still operating?'
			}
		},
		{
			type: 'h2',
			text: { th: 'เลขทะเบียน 13 หลัก บอกอะไร', en: 'What the 13-digit number is' }
		},
		{
			type: 'p',
			text: {
				th: 'นิติบุคคลที่จดทะเบียนในไทยทุกรายมีเลขทะเบียน 13 หลักประจำตัว ไม่ซ้ำกับรายอื่น และไม่เปลี่ยนแม้บริษัทจะย้ายที่อยู่หรือเปลี่ยนชื่อ โดยทั่วไปเลขชุดเดียวกันนี้ใช้เป็นเลขประจำตัวผู้เสียภาษีของนิติบุคคลด้วย จึงเป็นตัวยึดที่แม่นกว่าชื่อบริษัท เพราะชื่อคล้ายกันมีอยู่เต็มไปหมด',
				en: 'Every juristic person registered in Thailand carries a unique 13-digit number. It stays the same when the company moves or changes its name, and it generally doubles as the entity’s taxpayer identification number. That makes it a far better handle than a name, because near-identical company names are everywhere.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ธุรกิจที่จดทะเบียนถูกต้องไม่มีเหตุผลต้องปิดบังเลขนี้ ปกติคุณจะเจอได้เองจาก',
				en: 'A legitimate business has no reason to withhold it. Usually you can find it yourself, on:'
			}
		},
		{
			type: 'ul',
			items: [
				{ th: 'ใบเสนอราคา ใบแจ้งหนี้ ใบกำกับภาษี และใบเสร็จรับเงิน', en: 'Quotations, invoices, tax invoices and receipts' },
				{ th: 'ส่วนที่ระบุคู่สัญญาในหนังสือสัญญา', en: 'The party-identification clause of a contract' },
				{ th: 'ท้ายเว็บไซต์ มักอยู่คู่กับที่อยู่จดทะเบียน', en: 'The website footer, often beside the registered address' },
				{ th: 'หัวจดหมายและเอกสารทางการอื่นที่ออกในนามนิติบุคคล', en: 'Letterheads and other formal documents issued by the entity' }
			]
		},
		{
			type: 'h2',
			text: { th: 'ใช้กับสถานการณ์ไหน', en: 'When this applies to you' }
		},
		{
			type: 'p',
			text: {
				th: 'คู่มือนี้มีไว้สำหรับจังหวะที่คุณกำลังจะฝากอะไรบางอย่างไว้กับคนที่ยังไม่รู้จัก เช่น โอนมัดจำค่าสินค้า ว่าจ้างผู้รับเหมา รับข้อเสนองานจากบริษัทที่เพิ่งติดต่อมา ปล่อยสินค้าล็อตใหญ่ก่อนได้เงินครบ หรือปล่อยเช่าพื้นที่ให้นิติบุคคล ยิ่งเงินก้อนใหญ่ การตรวจก็ยิ่งคุ้มเวลา',
				en: 'This guide is for the moment before you hand something over to a party you do not know: a deposit on goods, a contract with a builder, a job offer from a company that appeared out of nowhere, a large order released on credit, or a lease signed with a corporate tenant. The bigger the sum, the more those few minutes pay for themselves.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ไม่ใช่ทุกกิจการจะอยู่ในทะเบียนนี้', en: 'Not every business appears in this registry' },
			text: {
				th: 'ทะเบียนนี้ครอบคลุมบริษัทจำกัด ห้างหุ้นส่วน และบริษัทมหาชน แต่ไม่รวมผู้ประกอบการบุคคลธรรมดา ร้านค้า หรือฟรีแลนซ์ที่ไม่ได้จดทะเบียนเป็นนิติบุคคล การค้นไม่พบจึงไม่ได้แปลว่าเป็นมิจฉาชีพเสมอไป แต่แปลว่าคุณจะไม่มีข้อมูลทะเบียนช่วยยืนยัน',
				en: 'The registry covers limited companies, partnerships and public companies. It does not cover sole traders, unregistered shops or freelancers. A blank search is therefore not proof of fraud — it means the registry cannot help you here, and you will have to lean on other evidence.'
			}
		},
		{
			type: 'h2',
			text: { th: 'สัญญาณอันตรายที่ควรหยุดแล้วถามก่อน', en: 'Red flags that should stop you' }
		},
		{
			type: 'table',
			caption: { th: 'สัญญาณที่พบบ่อย ความหมายที่เป็นไปได้ และสิ่งที่ควรทำต่อ', en: 'Common signals, what they may mean, and what to do next' },
			head: [
				{ th: 'สัญญาณ', en: 'Signal' },
				{ th: 'มักหมายความว่า', en: 'What it may mean' },
				{ th: 'ควรทำอะไรต่อ', en: 'What to do' }
			],
			rows: [
				[
					{ th: 'ไม่ยอมให้เลข 13 หลัก', en: 'Will not give you the number' },
					{ th: 'ไม่อยากให้ตรวจ หรือไม่ได้จดทะเบียนจริง', en: 'Does not want checking, or was never incorporated' },
					{ th: 'ยังไม่โอนจนกว่าจะตรวจเสร็จ', en: 'Send nothing until you have checked' }
				],
				[
					{ th: 'ค้นไม่พบ หรือเลขไม่ตรงกับชื่อ', en: 'Nothing found, or number and name disagree' },
					{ th: 'เลขผิด หรือไม่ใช่ชื่อจดทะเบียน', en: 'Wrong number, or a trading name rather than the registered one' },
					{ th: 'ขอชื่อจดทะเบียนเต็มแล้วค้นซ้ำเอง', en: 'Ask for the full registered name and search again' }
				],
				[
					{ th: 'สถานะเลิกกิจการหรือชำระบัญชี', en: 'Status shows dissolved or in liquidation' },
					{ th: 'ไม่ได้ทำธุรกิจตามปกติแล้ว', en: 'No longer in normal business operation' },
					{ th: 'หยุดไว้ก่อน และหาให้ชัดว่าคู่สัญญาคือใคร', en: 'Stop, and establish who the real counterparty is' }
				],
				[
					{ th: 'ที่อยู่เป็นห้องพักอาศัย แต่อ้างว่ามีโรงงาน', en: 'Registered to a home while claiming a factory' },
					{ th: 'กิจการจริงอาจเล็กกว่าที่เล่ามาก', en: 'The real operation may be far smaller than described' },
					{ th: 'ขอดูสถานที่ทำงานจริง', en: 'Ask to see the premises' }
				],
				[
					{ th: 'ทุนจดทะเบียนน้อยนิด เทียบกับสัญญาหลายล้าน', en: 'Token capital against a multi-million-baht contract' },
					{ th: 'ถ้าเสียหาย อาจไม่มีอะไรให้เรียกคืน', en: 'Little substance to recover from if things go wrong' },
					{ th: 'แบ่งจ่ายตามงวดงาน หรือขอหลักประกัน', en: 'Pay in stages against delivery, or ask for a guarantee' }
				],
				[
					{ th: 'งบไม่มีรายได้ หรือไม่ปรากฏงบเลย', en: 'Accounts show no revenue, or none are filed' },
					{ th: 'บริษัทอาจไม่ได้ดำเนินงานจริง', en: 'The company may be dormant rather than trading' },
					{ th: 'ขอผลงานและหลักฐานการค้าที่ตรวจสอบได้', en: 'Ask for references and trading evidence you can verify' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ชื่อบัญชีธนาคารคือด่านสุดท้าย', en: 'The account name is the last gate' }
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'ชื่อบัญชีไม่ตรง คือสัญญาณที่หนักที่สุด', en: 'A mismatched account name is the loudest warning there is' },
			text: {
				th: 'ทะเบียนที่ตรวจมาทั้งหมดไม่ช่วยอะไร ถ้าเงินไม่ได้ไปถึงนิติบุคคลรายนั้นจริง ถ้าชื่อบัญชีปลายทางไม่ตรงกับชื่อบริษัทในสัญญา ให้ถือว่ายังไม่ควรโอนจนกว่าจะได้คำอธิบายที่ตรวจสอบได้ คำพูดว่าเป็นบัญชีของกรรมการหรือบัญชีสำรองชั่วคราว ไม่ใช่คำอธิบายแบบนั้น และเงินที่เข้าบัญชีบุคคลธรรมดาคือเงินที่ตามคืนยากที่สุด',
				en: 'Everything you checked in the registry counts for nothing if the money never reaches that entity. If the receiving account name does not match the company named in the contract, the transfer should wait until you have an explanation you can verify — and being told it is a director’s account, or a temporary backup, is not one. Money paid into an individual account is the hardest money to get back.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ข้อมูลชุดนี้ฟรี ไม่ต้องจ่ายให้ใคร', en: 'This data is public and free' }
		},
		{
			type: 'p',
			text: {
				th: 'ข้อมูลทะเบียนนิติบุคคลและงบการเงินที่นำส่งไว้เป็นข้อมูลเปิด ค้นดูได้ฟรีจากระบบของกรมพัฒนาธุรกิจการค้า เว็บไซต์เอกชนหลายแห่งที่ขึ้นเป็นผลค้นหาอันดับต้น ๆ คือการนำข้อมูลชุดเดียวกันไปจัดหน้าใหม่แล้วเก็บค่ารายงาน บางแห่งยังแสดงข้อมูลที่ไม่ตรงกับทะเบียนปัจจุบัน ให้ดูจากต้นทางเสมอ',
				en: 'Registration records and filed financial statements are open data, free to search in the Department of Business Development’s own system. Many of the private sites ranking highest in search results simply repackage that same data and charge for a report, and some serve copies that no longer match the register. Read the source.'
			}
		}
	],
	faq: [
		{
			q: { th: 'บริษัทไม่ยอมบอกเลขทะเบียน 13 หลัก ควรทำอย่างไร', en: 'What if the company will not give me its registration number?' },
			a: {
				th: 'ให้ถือเป็นสัญญาณเตือน ธุรกิจที่จดทะเบียนถูกต้องใช้เลขนี้ออกเอกสารอยู่ทุกวัน จึงไม่มีเหตุผลต้องปิดบัง ลองขอใบเสนอราคาหรือใบกำกับภาษีที่มีเลขนี้อยู่แล้ว ถ้ายังได้แต่คำบ่ายเบี่ยง ทางที่ปลอดภัยที่สุดคือยังไม่โอนเงิน',
				en: 'Treat it as a warning sign. A properly registered business uses that number on its paperwork every day, so there is nothing to hide. Ask instead for a quotation or tax invoice that already carries it. If all you get is deflection, the safe move is not to send money.'
			}
		},
		{
			q: { th: 'ค้นชื่อบริษัทแล้วไม่เจอ แปลว่าเป็นมิจฉาชีพหรือเปล่า', en: 'The search found nothing. Does that mean it is a scam?' },
			a: {
				th: 'ไม่เสมอไป สาเหตุที่พบบ่อยคือสะกดไม่ตรงกับชื่อจดทะเบียน ใช้ชื่อทางการค้าคนละชื่อ เป็นผู้ประกอบการบุคคลธรรมดา หรือเป็นบริษัทต่างประเทศที่ไม่ได้จดทะเบียนในไทย ให้ค้นด้วยเลข 13 หลักซึ่งแม่นกว่า ถ้ายังไม่พบทั้งเลขและชื่อเต็ม นั่นคือจุดที่ควรหยุด',
				en: 'Not necessarily. The usual reasons are a spelling that differs from the registered name, a trading name that is not the registered one, a sole trader who was never incorporated, or a foreign company with no Thai registration. Search by the number instead. If neither the number nor the full name returns anything, that is where to stop.'
			}
		},
		{
			q: { th: 'ทุนจดทะเบียนน้อย แปลว่าไม่น่าเชื่อถือหรือไม่', en: 'Does low registered capital mean the company is untrustworthy?' },
			a: {
				th: 'ไม่ใช่โดยตัวมันเอง ทุนจดทะเบียนบอกเพียงว่าผู้ถือหุ้นตกลงลงทุนไว้เท่าไร ไม่ได้แปลว่ามีเงินจำนวนนั้นอยู่ในบัญชี และบริษัทเล็กที่ทำงานดีก็มีอยู่มาก สิ่งที่ควรดูคือความสมเหตุสมผลระหว่างขนาดทุนกับมูลค่าสัญญา ถ้าจะจ่ายก้อนใหญ่กว่าทุนหลายเท่า ให้แบ่งจ่ายตามงวดงาน',
				en: 'Not on its own. Registered capital records what the shareholders agreed on paper to contribute, not cash in an account, and plenty of small companies do excellent work. What matters is the proportion between that figure and your contract. If you would be paying several times the capital, pay in stages against delivered work.'
			}
		},
		{
			q: { th: 'สถานะยังดำเนินกิจการอยู่ แปลว่าปลอดภัยแล้วใช่ไหม', en: 'The status says active. Am I safe?' },
			a: {
				th: 'ยังไม่ถึงขั้นนั้น สถานะบอกเพียงว่านิติบุคคลนั้นยังไม่ได้จดทะเบียนเลิก บริษัทที่หยุดทำงานจริงแต่ไม่ได้แจ้งเลิก ก็ยังแสดงสถานะเหมือนบริษัทปกติ และทะเบียนไม่ได้บอกว่ามีคดีความหรือประวัติผิดนัดชำระหนี้หรือไม่',
				en: 'Not quite. The status only tells you the entity has not been formally wound up. A company that quietly stopped operating but never filed for dissolution shows the same status as a working one, and the registry says nothing about lawsuits or missed payments.'
			}
		},
		{
			q: { th: 'ต้องเสียเงินหรือสมัครสมาชิกไหม', en: 'Does checking cost anything?' },
			a: {
				th: 'การค้นข้อมูลนิติบุคคลพื้นฐานใช้ได้ฟรี ฟังก์ชันเชิงลึกบางส่วนอาจให้สมัครสมาชิกก่อน ซึ่งสมัครกับหน่วยงานรัฐโดยตรงและไม่มีค่าใช้จ่าย ส่วนเว็บที่เก็บเงินค่ารายงานมักเป็นเอกชนที่นำข้อมูลชุดเดียวกันไปขายต่อ ทั้งนี้ THGov เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดหน่วยงานใด',
				en: 'Basic lookups are free. Some deeper features may ask you to register first, which goes directly to the agency and costs nothing. Sites charging for a company report are generally private operators reselling the same records. THGov, for its part, is an independent directory with no affiliation to any agency.'
			}
		},
		{
			q: { th: 'โอนเงินไปแล้วเพิ่งรู้ว่าผิดปกติ ทำอะไรได้บ้าง', en: 'I already paid and now something looks wrong. What can I do?' },
			a: {
				th: 'ให้รีบที่สุด ติดต่อธนาคารของคุณทันทีเพื่อแจ้งเหตุและสอบถามเรื่องการอายัดบัญชีปลายทาง เพราะโอกาสตามเงินคืนลดลงเร็วตามเวลาที่ผ่านไป จากนั้นรวบรวมสลิปโอนเงิน บทสนทนา และข้อมูลบัญชีปลายทาง แล้วแจ้งความกับตำรวจ และอย่าโอนเพิ่มเพื่อปลดล็อกเงินก้อนเดิม เพราะนั่นคือขั้นต่อไปของกลโกงเดียวกัน',
				en: 'Move fast. Contact your bank immediately to report it and ask about freezing the receiving account — the odds of recovery fall away quickly with time. Then gather the transfer slips, chat history and recipient account details and file a police report. Do not send more money to unlock what you already sent; that is the next step of the same scam.'
			}
		}
	],
	updated: '2026-08-28',
	minutes: 8
};
