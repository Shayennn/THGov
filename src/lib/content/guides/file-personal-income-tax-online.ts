import type { Guide } from '../types';

export const guide: Guide = {
	slug: 'file-personal-income-tax-online',
	title: {
		th: 'วิธียื่นภาษีเงินได้บุคคลธรรมดาออนไลน์ ฉบับมือใหม่',
		en: 'Filing Thai Personal Income Tax Online: A Beginner’s Guide'
	},
	deck: {
		th: 'ยื่นภาษีครั้งแรกไม่ยากอย่างที่กลัว ถ้ารู้ว่าต้องใช้แบบไหน ต้องเตรียมเอกสารอะไร และต้องตรวจอะไรก่อนกดยืนยัน',
		en: 'Your first return is easier than it looks — once you know which form you need, which papers to gather, and what to check before you confirm.'
	},
	summary: {
		th: 'ยื่นภาษีเงินได้บุคคลธรรมดาออนไลน์กับกรมสรรพากรครั้งแรก คู่มือนี้พาไล่ตั้งแต่เลือกแบบ ภ.ง.ด.90 หรือ 91 เตรียมเอกสาร กรอกค่าลดหย่อน จนถึงขั้นตอนขอคืนภาษี',
		en: 'A first-timer’s guide to filing Thai personal income tax online: choosing between PND 90 and PND 91, gathering documents, entering allowances and claiming a refund.'
	},
	keywords: {
		th: [
			'ยื่นภาษีออนไลน์',
			'ยื่นภาษีเงินได้บุคคลธรรมดา',
			'ยื่นภาษีครั้งแรก',
			'ภ.ง.ด.91',
			'ภ.ง.ด.90',
			'e-Filing กรมสรรพากร',
			'ใบ 50 ทวิ',
			'หนังสือรับรองการหักภาษี ณ ที่จ่าย',
			'ค่าลดหย่อนภาษี',
			'ขอคืนภาษี',
			'เช็คสถานะคืนภาษี',
			'คืนภาษีเข้าพร้อมเพย์',
			'ยื่นภาษีไม่ทันกำหนด'
		],
		en: [
			'file Thai income tax online',
			'Revenue Department e-Filing',
			'PND 91 vs PND 90',
			'Thai tax allowances and deductions',
			'withholding tax certificate Thailand',
			'tax refund Thailand PromptPay',
			'personal income tax Thailand for beginners'
		]
	},
	services: ['rd-efiling'],
	steps: [
		{
			title: { th: 'ดูก่อนว่าคุณต้องยื่นหรือไม่', en: 'Check whether you have to file' },
			text: {
				th: 'ผู้มีเงินได้ถึงเกณฑ์ที่กฎหมายกำหนดต้องยื่นแบบ แม้คำนวณแล้วไม่ต้องเสียภาษีก็ตาม เกณฑ์นี้ต่างกันตามประเภทเงินได้และสถานะสมรส ให้ดูตัวเลขของปีภาษีนั้นจากเว็บไซต์กรมสรรพากร และถ้าถูกหักภาษี ณ ที่จ่ายไว้ระหว่างปี การยื่นคือทางเดียวที่จะได้เงินส่วนเกินคืน',
				en: 'If your income reaches the threshold set in law you must file, even when nothing turns out to be payable. The threshold differs by income type and marital status, so check your tax year’s figure on the Revenue Department’s site. And where tax was withheld from you during the year, filing is the only way to get the excess back.'
			}
		},
		{
			title: { th: 'เลือกแบบให้ถูกตั้งแต่ต้น', en: 'Get the form right from the start' },
			text: {
				th: 'มีเงินได้จากเงินเดือนอย่างเดียวตลอดปีให้ใช้ ภ.ง.ด.91 แต่ถ้ามีรายได้ทางอื่นปนแม้เพียงเล็กน้อย เช่น งานฟรีแลนซ์ ค่าเช่า หรือเงินปันผล ต้องใช้ ภ.ง.ด.90 เลือกผิดแบบจะไม่มีช่องกรอกรายได้ส่วนนั้น และมักลงเอยด้วยการยื่นใหม่',
				en: 'Salary alone all year means PND 91. The moment anything else appears — freelance fees, rent, dividends — you need PND 90 instead. Choose wrong and the fields you need are simply not there, which usually ends in filing all over again.'
			}
		},
		{
			title: { th: 'รวบรวมเอกสารก่อนเปิดหน้าจอ', en: 'Gather the paperwork before you start' },
			text: {
				th: 'หัวใจของงานนี้คือหนังสือรับรองการหักภาษี ณ ที่จ่าย หรือที่เรียกกันติดปากว่าใบ 50 ทวิ ซึ่งต้องขอจากนายจ้างทุกรายในปีนั้น ไม่ใช่เฉพาะที่ทำงานปัจจุบัน แล้วค่อยรวบรวมเอกสารฝั่งค่าลดหย่อนให้ครบ การเตรียมของให้พร้อมก่อนช่วยให้กรอกรวดเดียวจบ',
				en: 'The centrepiece is the withholding tax certificate — the หนังสือรับรองการหักภาษี ณ ที่จ่าย everyone calls a 50 ทวิ — and you need one from every employer you had that year, not just your current one. Then collect the deduction side in full. Having it all to hand is what lets you finish in one sitting.'
			}
		},
		{
			title: { th: 'สมัครสมาชิกและยืนยันตัวตน', en: 'Register and verify your identity' },
			text: {
				th: 'ผู้ที่ยื่นออนไลน์ครั้งแรกต้องลงทะเบียนด้วยเลขประจำตัวประชาชนและข้อมูลที่ตรงกับทะเบียนราษฎร ใช้เบอร์โทรศัพท์และอีเมลที่เข้าถึงได้จริง เพราะรหัสยืนยันและการแจ้งเตือนสถานะจะส่งมาทางนี้ ส่วนคนที่เคยยื่นแล้วลืมรหัสผ่านกู้คืนเองได้',
				en: 'First-time online filers register with a national ID number and details that match the civil registration record. Use a phone number and email you can genuinely reach, because verification codes and status notices arrive there. If you have filed before and forgotten your password, you can reset it yourself.'
			}
		},
		{
			title: { th: 'ตรวจรายได้ที่ระบบกรอกมาให้', en: 'Check the pre-filled income' },
			text: {
				th: 'ระบบอาจแสดงเงินได้และภาษีที่ถูกหักไว้ล่วงหน้าจากข้อมูลที่นายจ้างนำส่ง ให้ถือเป็นตัวช่วย ไม่ใช่คำตอบสุดท้าย หยิบใบ 50 ทวิ ทุกใบมาเทียบทีละราย เพราะบางรายนำส่งช้าหรือนำส่งไม่ครบ และคุณอาจมีรายได้จากผู้จ่ายที่ไม่ปรากฏในระบบเลย',
				en: 'The system may pre-fill your income and withheld tax from what employers reported. Treat it as a head start, not a verdict: compare every 50 ทวิ against it, payer by payer. Some report late or incompletely, and you may have income from a payer that never appears there at all.'
			}
		},
		{
			title: { th: 'กรอกค่าลดหย่อนตามเอกสารที่มีจริง', en: 'Enter allowances you can document' },
			text: {
				th: 'กรอกเฉพาะรายการที่มีหลักฐานอยู่ในมือ และใช้ยอดที่ปรากฏบนเอกสาร ไม่ใช่ยอดที่จำได้คร่าว ๆ ถ้าไม่แน่ใจว่าใช้สิทธิได้แค่ไหน ให้ดูเงื่อนไขของปีภาษีนั้นจากเว็บไซต์กรมสรรพากร แล้วเก็บเอกสารทั้งชุดไว้เผื่อถูกขอตรวจสอบภายหลัง',
				en: 'Claim only what you can evidence, using the amount printed on the document rather than the one you half-remember. Unsure how far a right extends? Check that tax year’s conditions on the Revenue Department site. Keep the whole bundle afterwards, in case an officer asks to see it.'
			}
		},
		{
			title: {
				th: 'ตรวจผลคำนวณ แล้วรับเงินคืนหรือชำระเพิ่ม',
				en: 'Read the result, then refund or pay'
			},
			text: {
				th: 'ระบบจะสรุปว่าเหลือเป็นยอดต้องชำระเพิ่มหรือยอดขอคืนเท่าไร ถ้าต่างจากที่คาดไว้มาก ให้ย้อนไปดูช่องเงินได้และค่าลดหย่อนก่อน มักเป็นการพิมพ์เกินหลักหรือกรอกซ้ำสองครั้ง เมื่อยืนยันแล้วให้เก็บหลักฐานการยื่นไว้ และถ้าเป็นยอดขอคืนให้ผูกบัญชีธนาคารในชื่อคุณเอง หรือพร้อมเพย์ที่ผูกกับเลขประจำตัวประชาชน',
				en: 'The system shows whether you owe a balance or are due a refund. If it is far from what you expected, revisit the income and allowance fields first — a stray digit or a figure entered twice explains most surprises. Save the confirmation once you submit, and for a refund link a bank account in your own name or PromptPay registered to your national ID.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ใครต้องยื่นภาษี และยื่นไปทำไม', en: 'Who has to file, and why it matters' }
		},
		{
			type: 'p',
			text: {
				th: 'ภาษีเงินได้บุคคลธรรมดาคิดจากเงินได้ที่คุณรับมาตลอดปีปฏิทิน หักค่าใช้จ่ายและค่าลดหย่อนตามที่กฎหมายให้ แล้วจึงคำนวณภาษีจากยอดสุทธิที่เหลือ เรื่องนี้ไม่ได้เป็นหน้าที่ของมนุษย์เงินเดือนเท่านั้น แต่ครอบคลุมถึงฟรีแลนซ์ แม่ค้าออนไลน์ คนปล่อยเช่าห้อง และผู้รับดอกเบี้ยหรือเงินปันผลด้วย การที่นายจ้างหักภาษีให้ทุกเดือนเป็นเพียงการประมาณการล่วงหน้า ส่วนการยื่นแบบประจำปีคือการคิดบัญชีจริงของปีนั้น',
				en: 'Personal income tax is worked out from what you received across the calendar year, less the expenses and allowances the law grants, with tax charged on what remains. It is not a salaried person’s concern alone: it reaches freelancers, online sellers, landlords and anyone drawing interest or dividends. Monthly withholding is only an advance estimate — the annual return is where the real arithmetic happens.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ยื่นภาษี ไม่ได้แปลว่าต้องจ่ายเพิ่ม', en: 'Filing is not the same as owing' },
			text: {
				th: 'หลายคนเลี่ยงการยื่นเพราะกลัวว่าจะต้องควักเงินก้อน ทั้งที่ลูกจ้างซึ่งถูกหักภาษีไว้ทุกเดือนและมีค่าลดหย่อนตามปกติ มักลงเอยด้วยการได้เงินคืนมากกว่าต้องจ่ายเพิ่ม การยื่นแบบคือการปิดบัญชีภาษีของปีนั้นให้ตรงความจริง ไม่ใช่การเสียภาษีอีกรอบ',
				en: 'Plenty of people avoid filing for fear of a large bill. In reality, an employee who has had tax withheld every month and holds the ordinary run of allowances more often ends up with money coming back. A return closes the year’s account honestly; it is not a second round of tax.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ภ.ง.ด.91 กับ ภ.ง.ด.90 ต่างกันตรงไหน', en: 'PND 91 and PND 90, side by side' }
		},
		{
			type: 'p',
			text: {
				th: 'สองแบบนี้คือจุดที่มือใหม่สับสนมากที่สุด และเป็นสาเหตุอันดับต้น ๆ ที่ทำให้ต้องยื่นซ้ำ วิธีจำง่าย ๆ คือดูว่าเงินที่เข้ากระเป๋าคุณตลอดปีมาจากทางเดียวหรือหลายทาง',
				en: 'This is where beginners get stuck most often, and a leading reason people end up filing twice. The test is simple: did your money for the year arrive through one door, or several?'
			}
		},
		{
			type: 'table',
			caption: {
				th: 'เลือกแบบให้ตรงกับที่มาของรายได้',
				en: 'Matching the form to where your money came from'
			},
			head: [
				{ th: 'แบบ', en: 'Form' },
				{ th: 'ใช้เมื่อ', en: 'Use it when' },
				{ th: 'ตัวอย่างคนที่ใช้', en: 'Typical filer' }
			],
			rows: [
				[
					{ th: 'ภ.ง.ด.91', en: 'PND 91' },
					{
						th: 'มีเงินได้จากการจ้างแรงงานอย่างเดียวตลอดปีภาษี',
						en: 'Employment was your only income all tax year'
					},
					{
						th: 'พนักงานประจำที่ไม่มีงานเสริม ค่าเช่า หรือเงินปันผล',
						en: 'A salaried employee with no side work, rent or dividends'
					}
				],
				[
					{ th: 'ภ.ง.ด.90', en: 'PND 90' },
					{
						th: 'มีเงินได้ประเภทอื่นร่วมด้วย จะมีเงินเดือนหรือไม่ก็ตาม',
						en: 'You had other categories of income, with or without a salary'
					},
					{
						th: 'ฟรีแลนซ์ แม่ค้าออนไลน์ เจ้าของห้องเช่า หรือพนักงานที่รับงานนอก',
						en: 'A freelancer, online seller, landlord, or an employee taking outside work'
					}
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'เอกสารที่ต้องมีอยู่ตรงหน้า', en: 'What to have in front of you' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ใบ 50 ทวิ จากนายจ้างและผู้จ่ายเงินได้ทุกรายในปีภาษีนั้น',
					en: 'A 50 ทวิ certificate from every employer and payer you had that year'
				},
				{
					th: 'หนังสือรับรองการชำระเบี้ยประกันชีวิตและประกันสุขภาพ ทั้งของตัวเองและของบิดามารดา',
					en: 'Life and health insurance premium statements, yours and your parents’'
				},
				{
					th: 'รายงานกองทุนสำรองเลี้ยงชีพ และหนังสือรับรองการซื้อกองทุนรวมเพื่อการเกษียณ',
					en: 'Provident fund reports and certificates for qualifying retirement funds'
				},
				{
					th: 'หนังสือรับรองดอกเบี้ยเงินกู้ยืมเพื่อที่อยู่อาศัยจากธนาคาร',
					en: 'Your bank’s certificate of interest paid on a home loan'
				},
				{
					th: 'ใบเสร็จหรือหลักฐานการบริจาค รวมถึงรายการในระบบบริจาคอิเล็กทรอนิกส์',
					en: 'Donation receipts, including anything logged in the electronic donation system'
				},
				{
					th: 'เลขประจำตัวประชาชนของคู่สมรส บุตร และบิดามารดาที่จะใช้สิทธิลดหย่อน',
					en: 'National ID numbers for the spouse, children and parents you intend to claim'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ค่าลดหย่อนมีกลุ่มไหนบ้าง', en: 'The families of allowance' }
		},
		{
			type: 'table',
			caption: {
				th: 'ค่าลดหย่อนคือรายการที่กฎหมายให้หักก่อนคำนวณภาษี จึงทำให้คนเงินเดือนเท่ากันเสียภาษีไม่เท่ากัน',
				en: 'Allowances are what the law lets you subtract before tax is calculated — the reason two people on the same salary can owe different amounts'
			},
			head: [
				{ th: 'กลุ่ม', en: 'Group' },
				{ th: 'ครอบคลุมอะไร', en: 'What it covers' }
			],
			rows: [
				[
					{ th: 'ส่วนตัวและครอบครัว', en: 'Personal and family' },
					{
						th: 'ตัวผู้มีเงินได้ คู่สมรสที่ไม่มีเงินได้ บุตร บิดามารดา และผู้พิการในอุปการะ',
						en: 'Yourself, a spouse without income, children, parents, dependants with a disability'
					}
				],
				[
					{ th: 'ประกันและสุขภาพ', en: 'Insurance and health' },
					{
						th: 'เบี้ยประกันชีวิต ประกันสุขภาพของตนเองและของบิดามารดา และประกันชีวิตแบบบำนาญ',
						en: 'Life premiums, health cover for you and your parents, pension-type life policies'
					}
				],
				[
					{ th: 'การออมเพื่อเกษียณ', en: 'Retirement saving' },
					{
						th: 'กองทุนสำรองเลี้ยงชีพ กบข. กองทุนการออมแห่งชาติ และกองทุนรวมเพื่อการเกษียณ',
						en: 'Provident funds, the civil servant pension fund, the national savings fund, retirement funds'
					}
				],
				[
					{ th: 'ที่อยู่อาศัย', en: 'Housing' },
					{
						th: 'ดอกเบี้ยเงินกู้ยืมเพื่อซื้อ เช่าซื้อ หรือสร้างที่อยู่อาศัย',
						en: 'Interest on a loan to buy, hire-purchase or build a home'
					}
				],
				[
					{ th: 'เงินบริจาค', en: 'Donations' },
					{
						th: 'บริจาคทั่วไป และบริจาคบางประเภทที่กฎหมายให้สิทธิมากกว่าปกติ',
						en: 'General giving, plus categories the law treats more generously'
					}
				],
				[
					{ th: 'มาตรการเป็นครั้งคราว', en: 'Occasional measures' },
					{
						th: 'สิทธิลดหย่อนค่าซื้อสินค้าหรือค่าท่องเที่ยวที่รัฐประกาศเป็นปี ๆ ไป และไม่ได้มีทุกปี',
						en: 'Deductions for spending or domestic travel announced year by year, and not every year'
					}
				]
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ตัวเลขเปลี่ยนทุกปี อย่าเชื่อของเก่า', en: 'The numbers change every year' },
			text: {
				th: 'ตารางนี้ตั้งใจไม่ระบุจำนวนเงินไว้เลย เพราะเพดานของแต่ละรายการ อัตราภาษีแบบขั้นบันได เกณฑ์ขั้นต่ำที่ต้องยื่น และกำหนดเวลายื่นแบบ ล้วนปรับปรุงได้ตามกฎหมายและมาตรการของแต่ละปี ไฟล์สรุปหรือคลิปที่ทำไว้เมื่อสองสามปีก่อนจึงพาคุณกรอกผิดได้ง่ายมาก ให้ยืนยันตัวเลขของปีภาษีที่กำลังยื่นจากเว็บไซต์ทางการเสมอ',
				en: 'This table carries no baht figures on purpose. Allowance ceilings, the progressive rate bands, the threshold that triggers a duty to file and the filing deadline are all revised from year to year. A cheat sheet or video made a couple of years ago is a fast route to a wrong entry, so confirm every figure against the Revenue Department’s official site.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เจอปัญหาแบบนี้ ทำอย่างไร', en: 'When something goes wrong' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ยอดเงินได้ในระบบไม่ตรงกับใบ 50 ทวิ ให้ยึดเอกสารจริงเป็นหลัก แล้วให้ฝ่ายบุคคลหรือผู้จ่ายเงินได้ตรวจสอบข้อมูลที่นำส่ง อย่ายืนยันการยื่นทั้งที่ยังคาใจ เพราะแก้ก่อนยื่นง่ายกว่าเสมอ',
					en: 'Pre-filled income does not match your 50 ทวิ: trust the document, and ask HR or the payer to check what they submitted. Do not confirm while the gap is unexplained — fixing it beforehand is always easier.'
				},
				{
					th: 'ไม่มีใบ 50 ทวิ จากนายจ้างเก่า ผู้จ่ายเงินได้มีหน้าที่ออกให้ตามกฎหมาย ให้ขอเป็นลายลักษณ์อักษรพร้อมระบุปีภาษี ระหว่างรอให้เก็บสลิปเงินเดือนไว้ และถ้าติดต่อไม่ได้จริง ๆ ให้นำหลักฐานเท่าที่มีไปปรึกษาสำนักงานสรรพากรพื้นที่สาขา',
					en: 'A missing 50 ทวิ from a former employer: the payer is legally required to issue one, so request it in writing and name the tax year. Keep your payslips meanwhile, and if the company is truly unreachable, take what evidence you have to an area revenue office.'
				},
				{
					th: 'ยื่นไม่ทันกำหนด ยังต้องยื่นอยู่ดีและควรยื่นให้เร็วที่สุด เพราะการยื่นล่าช้ามีเบี้ยปรับและเงินเพิ่มตามที่กฎหมายกำหนด ให้ตรวจสอบกับกรมสรรพากรว่าปีภาษีนั้นยังยื่นออนไลน์ได้ หรือต้องยื่นที่สำนักงานสรรพากรพื้นที่สาขา',
					en: 'You missed the deadline: you must still file, and the sooner the better, because late filing carries surcharges and penalties set by law. Check with the Revenue Department whether that year can still go through the online channel or must be lodged at an area office.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ระวังมิจฉาชีพที่อ้างเรื่องคืนภาษี', en: 'Refund scams to watch for' }
		},
		{
			type: 'p',
			text: {
				th: 'ช่วงฤดูยื่นภาษีคือช่วงที่มิจฉาชีพขยันที่สุด เพราะรู้ว่ามีคนจำนวนมากกำลังรอเงินคืนอยู่จริง รูปแบบที่พบบ่อยคือ SMS หรืออีเมลบอกว่าเงินคืนภาษีของคุณรอการยืนยัน พร้อมลิงก์ให้กรอกเลขบัตรประชาชน เลขบัญชีธนาคาร หรือรหัส OTP บางรายทำหน้าเว็บเลียนแบบและใช้ชื่อโดเมนที่สะกดใกล้เคียงจนแทบไม่ทันสังเกต',
				en: 'Filing season is peak season for fraud, precisely because so many people really are waiting on a refund. The usual approach is an SMS or email saying your refund is pending confirmation, with a link asking for your ID number, bank account or an OTP. Some build a lookalike page on a domain spelled just closely enough to slip past a quick glance.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'เงินคืนจะเข้าบัญชีที่คุณผูกไว้เองหรือพร้อมเพย์ที่ผูกกับเลขประจำตัวประชาชน ไม่มีขั้นตอนใดต้องกรอกเลขหลังบัตรเครดิตหรือรหัส OTP',
					en: 'Refunds reach the account you linked yourself, or PromptPay tied to your national ID. No genuine step asks for a card security number or an OTP.'
				},
				{
					th: 'อย่ากดลิงก์จาก SMS หรืออีเมล ให้พิมพ์ที่อยู่เว็บไซต์กรมสรรพากรเอง หรือเข้าจากบุ๊กมาร์กที่บันทึกไว้',
					en: 'Do not tap links in messages. Type the Revenue Department’s address yourself, or use a bookmark you saved.'
				},
				{
					th: 'ตรวจชื่อโดเมนให้ละเอียดก่อนกรอกอะไรทั้งสิ้น ระบบทางการอยู่ภายใต้โดเมน rd.go.th เท่านั้น',
					en: 'Read the domain carefully before typing anything: the official systems sit under rd.go.th and nowhere else.'
				},
				{
					th: 'ไม่มีเจ้าหน้าที่คนใดขอให้โอนค่าดำเนินการเพื่อปลดล็อกเงินคืน หากเจอแบบนี้ให้วางสายแล้วตรวจสอบกับช่องทางทางการเอง',
					en: 'No official asks you to transfer a processing fee to release a refund. If someone does, end the call and check through an official channel yourself.'
				}
			]
		}
	],
	faq: [
		{
			q: {
				th: 'รายได้น้อย ไม่ถึงเกณฑ์เสียภาษี ยังต้องยื่นไหม',
				en: 'My income is low. Do I still need to file?'
			},
			a: {
				th: 'หน้าที่ยื่นแบบกับหน้าที่เสียภาษีเป็นคนละเรื่องกัน ผู้ที่มีเงินได้ถึงเกณฑ์ที่กฎหมายกำหนดต้องยื่นแบบ แม้คำนวณแล้วไม่มีภาษีต้องชำระก็ตาม เกณฑ์นี้ต่างกันตามประเภทเงินได้และสถานะสมรส และปรับปรุงเป็นระยะ จึงควรตรวจสอบตัวเลขของปีภาษีนั้นจากเว็บไซต์กรมสรรพากร',
				en: 'The duty to file and the duty to pay are separate. If your income reaches the statutory threshold you must file, even when the calculation leaves nothing payable. That threshold varies by income type and marital status and is revised periodically, so check the figure for your tax year on the Revenue Department site.'
			}
		},
		{
			q: {
				th: 'บริษัทหักภาษีให้ทุกเดือนแล้ว ทำไมยังต้องยื่นอีก',
				en: 'My employer withholds tax monthly. Why file again?'
			},
			a: {
				th: 'ภาษีหัก ณ ที่จ่ายคำนวณจากข้อมูลที่นายจ้างมีอยู่ตอนต้นปี ซึ่งยังไม่รวมสิ่งที่เกิดขึ้นจริงระหว่างปี เช่น คุณซื้อประกันเพิ่ม มีบุตร เริ่มผ่อนบ้าน หรือเปลี่ยนงานกลางปี การยื่นแบบประจำปีคือการคำนวณใหม่จากข้อมูลจริงทั้งปี ผลจึงออกมาเป็นได้เงินคืนหรือต้องชำระเพิ่มก็ได้',
				en: 'Withholding is calculated from what your employer knew at the start of the year. It cannot account for what happened afterwards — a new policy, a child, a mortgage, a change of job midway. The annual return recalculates from the real year, which is why it can end in a refund or a balance due.'
			}
		},
		{
			q: {
				th: 'ทำงานประจำแล้วรับงานฟรีแลนซ์ด้วย ต้องใช้แบบไหน',
				en: 'I have a salary and freelance work. Which form?'
			},
			a: {
				th: 'ต้องใช้ ภ.ง.ด.90 เพราะมีเงินได้มากกว่าหนึ่งประเภท เงินเดือนกรอกในส่วนเงินได้จากการจ้างแรงงาน ส่วนค่าจ้างฟรีแลนซ์กรอกในประเภทที่ตรงกับลักษณะงานของคุณ และควรมีหนังสือรับรองการหักภาษี ณ ที่จ่ายจากผู้จ่ายแต่ละราย ถ้าไม่แน่ใจว่ารายได้จัดอยู่ในประเภทใด ให้สอบถามสำนักงานสรรพากรพื้นที่สาขาก่อนยื่น',
				en: 'PND 90, because you have more than one category of income. Salary goes in the employment section; freelance fees go under the category matching the nature of the work, and each payer should give you a withholding tax certificate. If you are unsure which category your earnings fall into, ask an area revenue office before submitting.'
			}
		},
		{
			q: {
				th: 'ยื่นแล้วจะได้เงินคืนอย่างไร และติดตามสถานะได้ไหม',
				en: 'How does a refund reach me, and can I track it?'
			},
			a: {
				th: 'ทางที่สะดวกที่สุดคือผูกพร้อมเพย์กับเลขประจำตัวประชาชนของคุณเอง หรือแจ้งบัญชีธนาคารที่เป็นชื่อคุณ เงินจะโอนเข้าบัญชีนั้นโดยตรง และคุณเข้าไปดูสถานะการคืนภาษีในระบบได้ด้วยตัวเอง บางกรณีเจ้าหน้าที่อาจขอเอกสารเพิ่มก่อนอนุมัติ ซึ่งจะแจ้งผ่านช่องทางทางการ ไม่ใช่ลิงก์ที่ส่งมาทาง SMS',
				en: 'The smoothest route is PromptPay registered to your own national ID, or a bank account in your name; the money transfers straight there. You can follow the refund’s status yourself inside the system. Officers sometimes request supporting documents before approving, and they ask through official channels — never a link by SMS.'
			}
		},
		{
			q: {
				th: 'THGov เกี่ยวข้องกับกรมสรรพากรหรือไม่',
				en: 'Is THGov connected to the Revenue Department?'
			},
			a: {
				th: 'ไม่เกี่ยวข้องกัน THGov เป็นเว็บไซต์รวบรวมบริการออนไลน์ของภาครัฐที่จัดทำขึ้นอย่างอิสระ ไม่ได้สังกัดหรือได้รับมอบหมายจากหน่วยงานใด หน้านี้อธิบายขั้นตอนด้วยภาษาที่คนทั่วไปเข้าใจ แล้วส่งคุณไปยังระบบทางการเพื่อทำรายการจริง เราไม่รับข้อมูลภาษี ไม่รับเอกสาร และไม่รับชำระเงินใด ๆ',
				en: 'No. THGov is an independently produced directory of Thai government online services, not affiliated with or appointed by any agency. This page explains the process in plain language and then sends you to the official system to do the actual work. We never collect tax data, documents or payments.'
			}
		}
	],
	updated: '2026-08-28',
	minutes: 9
};
