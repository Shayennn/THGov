import type { Service } from '../types';

export const service: Service = {
	slug: 'ipthailand-trademark',
	name: {
		th: 'กรมทรัพย์สินทางปัญญา — จดทะเบียนและตรวจค้นเครื่องหมายการค้า',
		en: 'Thai Department of Intellectual Property — Trademarks and Patents'
	},
	shortName: { th: 'กรมทรัพย์สินทางปัญญา', en: 'IP Thailand' },
	url: 'https://www.ipthailand.go.th/',
	agency: 'dip',
	categories: ['business'],
	summary: {
		th: 'จดทะเบียนเครื่องหมายการค้า สิทธิบัตร อนุสิทธิบัตร และการออกแบบผลิตภัณฑ์ กับกรมทรัพย์สินทางปัญญา พร้อมวิธีตรวจค้นเครื่องหมายก่อนยื่น และลิงก์เว็บไซต์ทางการ',
		en: 'Register a trademark, patent, petty patent or product design with Thailand’s Department of Intellectual Property — and why you search existing marks first.'
	},
	deck: {
		th: 'หน่วยงานที่รับจดทะเบียนสิทธิในแบรนด์ สิ่งประดิษฐ์ และงานออกแบบของไทย ซึ่งสำหรับเครื่องหมายการค้าแล้ว ใครยื่นก่อนย่อมได้รับพิจารณาก่อน',
		en: 'Thailand’s registry for brands, inventions and designs — where, for trademarks, the queue is decided by who filed first.'
	},
	keywords: {
		th: [
			'จดเครื่องหมายการค้า',
			'จดแบรนด์',
			'จดทะเบียนโลโก้',
			'ตรวจค้นเครื่องหมายการค้า',
			'เช็คชื่อแบรนด์ซ้ำ',
			'จดสิทธิบัตร',
			'อนุสิทธิบัตรคืออะไร',
			'จดลิขสิทธิ์',
			'จดทะเบียนสิทธิบัตรการออกแบบ',
			'กรมทรัพย์สินทางปัญญา',
			'ยื่นจดเครื่องหมายการค้าเอง',
			'จดแบรนด์ต้องทำยังไง',
			'ค่าธรรมเนียมจดเครื่องหมายการค้า'
		],
		en: [
			'trademark registration Thailand',
			'Thai trademark search',
			'IP Thailand',
			'DIP Thailand',
			'patent registration Thailand',
			'register brand name Thailand',
			'copyright recordation Thailand'
		]
	},
	features: [
		{
			icon: 'shield',
			title: { th: 'คุ้มครองชื่อแบรนด์และโลโก้', en: 'Protect a brand name or logo' },
			text: {
				th: 'เครื่องหมายการค้าและเครื่องหมายบริการทำให้คุณมีสิทธิแต่เพียงผู้เดียวในการใช้ชื่อหรือสัญลักษณ์นั้นกับสินค้าและบริการตามที่ระบุไว้ในทะเบียน',
				en: 'A registered trade or service mark gives you the exclusive right to use that name or symbol on the goods and services listed in the registration.'
			}
		},
		{
			icon: 'clock',
			title: { th: 'ยื่นก่อนได้รับพิจารณาก่อน', en: 'First to file, first in line' },
			text: {
				th: 'ไทยใช้ระบบยื่นก่อนได้สิทธิก่อนสำหรับเครื่องหมายการค้า วันที่ยื่นคำขอจึงเป็นตัวตัดสินลำดับ ไม่ใช่ระยะเวลาที่คุณใช้ชื่อนั้นมา',
				en: 'Thailand runs a first-to-file system for trademarks. The filing date sets the order, not how long you have been using the name.'
			}
		},
		{
			icon: 'search',
			title: { th: 'ตรวจค้นเครื่องหมายที่มีอยู่เดิม', en: 'Search the existing register' },
			text: {
				th: 'ฐานข้อมูลของกรมเปิดให้ตรวจดูว่ามีใครยื่นหรือจดเครื่องหมายที่เหมือนหรือคล้ายกับของคุณไว้แล้วหรือไม่ ก่อนที่จะเสียค่าธรรมเนียมและเวลารอผล',
				en: 'The department’s database lets you check whether anyone has already filed or registered something identical or similar — before you spend the fee and the waiting time.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'สิทธิบัตร อนุสิทธิบัตร และงานออกแบบ', en: 'Patents, petty patents and designs' },
			text: {
				th: 'นอกจากแบรนด์ กรมยังรับจดทะเบียนสิ่งประดิษฐ์และกรรมวิธี รวมถึงรูปลักษณ์ของผลิตภัณฑ์ ซึ่งเป็นคนละสิทธิและคนละกระบวนการกับเครื่องหมายการค้า',
				en: 'Beyond brands, the department registers inventions and processes as well as the appearance of a product — separate rights with separate procedures.'
			}
		},
		{
			icon: 'book',
			title: { th: 'แจ้งข้อมูลลิขสิทธิ์ไว้เป็นหลักฐาน', en: 'Record a copyright as evidence' },
			text: {
				th: 'ลิขสิทธิ์เกิดขึ้นทันทีที่สร้างงานเสร็จโดยไม่ต้องจดทะเบียน แต่การแจ้งข้อมูลไว้กับกรมช่วยให้มีเอกสารอ้างอิงเมื่อต้องพิสูจน์ว่าใครเป็นเจ้าของงาน',
				en: 'Copyright exists the moment a work is created, with no registration needed — but recording it with the department gives you a document to point to when ownership is questioned.'
			}
		},
		{
			icon: 'globe',
			title: { th: 'ขอบเขตสิ้นสุดที่ชายแดน', en: 'The right stops at the border' },
			text: {
				th: 'ทะเบียนของไทยคุ้มครองภายในประเทศไทย หากต้องการสิทธิในต่างประเทศต้องยื่นแยกในแต่ละประเทศ หรือใช้ระบบยื่นคำขอระหว่างประเทศที่ไทยเป็นภาคี',
				en: 'A Thai registration covers Thailand. Rights elsewhere mean filing in each country you care about, or using the international routes Thailand belongs to.'
			}
		}
	],
	steps: [
		{
			title: { th: 'เลือกประเภทสิทธิให้ตรงกับสิ่งที่จะคุ้มครอง', en: 'Match the right to the thing you are protecting' },
			text: {
				th: 'ถามตัวเองก่อนว่ากำลังจะปกป้องอะไร ชื่อและสัญลักษณ์ที่ติดอยู่บนสินค้าคือเครื่องหมายการค้า กลไกหรือกรรมวิธีคือสิทธิบัตรหรืออนุสิทธิบัตร รูปทรงและลวดลายของตัวสินค้าคือสิทธิบัตรการออกแบบผลิตภัณฑ์ ส่วนงานสร้างสรรค์อย่างข้อความ ภาพ หรือโค้ด เป็นเรื่องของลิขสิทธิ์ สินค้าชิ้นเดียวอาจเกี่ยวข้องกับหลายสิทธิพร้อมกันได้',
				en: 'Start by naming what you are protecting. The name and symbol on the packaging is a trademark; a mechanism or process is a patent or petty patent; the shape and pattern of the product itself is a design patent; and creative material such as text, images or code is copyright. One product can involve several of these at once.'
			}
		},
		{
			title: { th: 'ตรวจค้นว่ามีใครยื่นไว้ก่อนหรือยัง', en: 'Search for earlier marks' },
			text: {
				th: 'ค้นในฐานข้อมูลของกรมด้วยทั้งคำสะกดของคุณเอง คำที่อ่านออกเสียงคล้ายกัน และคำแปลหรือคำทับศัพท์ที่ใกล้เคียง เพราะเครื่องหมายไม่จำเป็นต้องเหมือนกันทุกตัวอักษรจึงจะถือว่าคล้ายกันจนสับสน หากพบเครื่องหมายที่ใกล้เคียงมากในสินค้าประเภทเดียวกัน การปรับชื่อตั้งแต่ตอนนี้ถูกกว่าการเถียงกันภายหลังมาก',
				en: 'Search the department’s database for your own spelling, for words that sound alike, and for translations or transliterations — marks do not have to match letter for letter to be confusingly similar. If something very close already exists in the same kind of goods, changing the name now is far cheaper than arguing about it later.'
			}
		},
		{
			title: { th: 'กำหนดรายการสินค้าหรือบริการและจำพวกให้ชัด', en: 'Define your goods, services and classes' },
			text: {
				th: 'เขียนให้ตรงกับสิ่งที่คุณขายจริงและสิ่งที่วางแผนจะขายในอนาคตอันใกล้ เพราะความคุ้มครองจะจำกัดอยู่แค่รายการที่ระบุไว้ในคำขอ การเขียนแคบเกินไปทำให้คู่แข่งใช้ชื่อคล้ายกันกับสินค้าข้างเคียงได้ ส่วนการเขียนกว้างเกินไปก็เพิ่มโอกาสที่จะไปชนกับเครื่องหมายของผู้อื่น',
				en: 'Describe what you actually sell and what you plan to sell soon, because protection reaches only the items you list. Too narrow and a competitor can use a similar name on adjacent goods; too broad and you increase the chance of colliding with someone else’s mark.'
			}
		},
		{
			title: { th: 'เตรียมภาพเครื่องหมายและเอกสารของผู้ขอ แล้วยื่นคำขอ', en: 'Prepare the mark and your documents, then file' },
			text: {
				th: 'ต้องมีภาพเครื่องหมายที่คมชัดตามรูปแบบที่กำหนด ข้อมูลผู้ขอ และเอกสารแสดงตัวตนหรือหนังสือรับรองนิติบุคคล หากให้ผู้อื่นดำเนินการแทนต้องมีหนังสือมอบอำนาจด้วย ตรวจสอบรายการเอกสารและอัตราค่าธรรมเนียมที่เป็นปัจจุบันจากเว็บไซต์ของกรมก่อนยื่นเสมอ เพราะขอบเขตที่ขอคุ้มครองมีผลต่อค่าธรรมเนียมที่ต้องชำระ',
				en: 'You will need a clean image of the mark in the required form, the applicant’s details, and identification or a company certificate; if someone files on your behalf, a power of attorney as well. Check the current document list and fee rates on the department’s site first — the scope you ask for affects what you pay.'
			}
		},
		{
			title: { th: 'ติดตามสถานะและตอบหนังสือของกรมให้ทันกำหนด', en: 'Track the file and answer on time' },
			text: {
				th: 'หลังยื่นแล้วงานยังไม่จบ กรมอาจมีหนังสือแจ้งให้แก้ไขเอกสาร ชี้แจงเหตุผล หรือแจ้งผลการตรวจสอบ ซึ่งแต่ละฉบับมีกำหนดเวลาให้ตอบระบุไว้ในตัวหนังสือเอง เก็บเลขคำขอไว้ให้ดี ตรวจสถานะเป็นระยะ และอย่าปล่อยให้พ้นกำหนด เพราะการไม่ตอบภายในเวลาอาจทำให้คำขอตกไปทั้งที่เนื้อหาไม่มีปัญหา',
				en: 'Filing is not the end of the job. The department may write asking you to correct documents, explain something, or notify you of an examination result, and each letter states its own deadline. Keep your application number, check the status periodically, and do not let a deadline pass — an unanswered letter can end an application that had nothing wrong with it.'
			}
		}
	],
	faq: [
		{
			q: { th: 'เครื่องหมายการค้า สิทธิบัตร และลิขสิทธิ์ ต่างกันอย่างไร', en: 'What is the difference between a trademark, a patent and copyright?' },
			a: {
				th: 'เครื่องหมายการค้าคุ้มครองชื่อหรือสัญลักษณ์ที่ใช้กับสินค้าและบริการ เพื่อบอกว่าของชิ้นนั้นมาจากใคร สิทธิบัตรคุ้มครองสิ่งประดิษฐ์หรือกรรมวิธีที่ใหม่และใช้ในทางอุตสาหกรรมได้ ส่วนสิทธิบัตรการออกแบบผลิตภัณฑ์คุ้มครองหน้าตาของสินค้า ไม่ใช่วิธีทำงาน ขณะที่ลิขสิทธิ์เกิดขึ้นเองทันทีที่สร้างงานเสร็จโดยไม่ต้องจดทะเบียน แต่แจ้งข้อมูลไว้กับกรมเพื่อใช้เป็นหลักฐานได้',
				en: 'A trademark protects the name or symbol used on goods and services so customers know whose they are. A patent protects an invention or process that is new and industrially applicable, while a design patent protects how a product looks rather than how it works. Copyright arises by itself the moment a work is finished, with no registration required, though you may record it with the department as evidence.'
			}
		},
		{
			q: { th: 'จำเป็นต้องตรวจค้นก่อนยื่นหรือไม่', en: 'Do I have to search before filing?' },
			a: {
				th: 'ไม่ใช่ขั้นตอนบังคับ แต่เป็นขั้นตอนที่คุ้มค่าที่สุดขั้นตอนหนึ่ง เพราะเหตุผลที่คำขอถูกปฏิเสธบ่อยข้อหนึ่งคือเครื่องหมายเหมือนหรือคล้ายกับของผู้อื่นที่ยื่นหรือจดไว้ก่อน การรู้ตั้งแต่ต้นว่ามีอะไรอยู่แล้วบ้าง ทำให้คุณปรับชื่อหรือปรับรายการสินค้าได้ ก่อนจ่ายค่าธรรมเนียมและก่อนสั่งพิมพ์ป้ายกับบรรจุภัณฑ์ทั้งชุด',
				en: 'It is not compulsory, but it is one of the highest-value steps you can take. A common ground for refusal is that the mark is identical or confusingly similar to something filed earlier, and knowing that early lets you adjust the name or the list of goods before you pay the fee and order a whole run of signage and packaging.'
			}
		},
		{
			q: { th: 'ใช้ชื่อแบรนด์มานานแล้วแต่ไม่เคยจด ยังปลอดภัยไหม', en: 'I have used my brand name for years without filing. Am I safe?' },
			a: {
				th: 'การใช้มานานไม่ได้ทำให้คุณมีทะเบียนโดยอัตโนมัติ และในระบบที่ยื่นก่อนได้รับพิจารณาก่อน ผู้ที่ยื่นชื่อเดียวกันเข้ามาก่อนย่อมอยู่ในลำดับที่ดีกว่า หากเกิดกรณีเช่นนี้ คุณอาจต้องคัดค้านหรือโต้แย้งโดยอาศัยพยานหลักฐานการใช้จริงย้อนหลัง ซึ่งใช้ทั้งเวลาและค่าใช้จ่ายมากกว่าการยื่นคำขอตั้งแต่แรกหลายเท่า',
				en: 'Long use does not hand you a registration, and in a first-to-file system whoever filed the name first is in the better position. If that happens you may have to oppose or contest it on evidence of your earlier use, which costs far more in time and money than filing would have.'
			}
		},
		{
			q: { th: 'จดทะเบียนในไทยแล้วคุ้มครองในต่างประเทศด้วยหรือไม่', en: 'Does a Thai registration protect me abroad?' },
			a: {
				th: 'ไม่ สิทธิที่ได้จากการจดทะเบียนมีผลเฉพาะในอาณาเขตของประเทศไทย หากคุณส่งออก ขายผ่านแพลตฟอร์มต่างประเทศ หรือมีแผนขยายตลาด ต้องยื่นขอความคุ้มครองในแต่ละประเทศที่ต้องการ หรือใช้ระบบยื่นคำขอระหว่างประเทศที่ไทยเป็นภาคี คือพิธีสารมาดริดสำหรับเครื่องหมายการค้า และสนธิสัญญาความร่วมมือด้านสิทธิบัตร (PCT) สำหรับสิทธิบัตร',
				en: 'No — the right runs only inside Thailand. If you export, sell through overseas platforms or plan to expand, you file in each country you want covered, or use the international routes Thailand is party to: the Madrid Protocol for trademarks and the Patent Cooperation Treaty for patents.'
			}
		},
		{
			q: { th: 'ได้รับหนังสือจากกรมให้แก้ไขหรือชี้แจงคำขอ ต้องทำอย่างไร', en: 'The department sent a letter asking me to amend or explain. What now?' },
			a: {
				th: 'อ่านให้ชัดก่อนว่าประเด็นคืออะไร เพราะเอกสารไม่ครบ รายการสินค้าคลุมเครือ และเครื่องหมายที่ถูกมองว่าไม่มีลักษณะบ่งเฉพาะ เป็นคนละปัญหาที่แก้คนละแบบ จากนั้นตอบกลับภายในกำหนดเวลาที่ระบุไว้ในหนังสือฉบับนั้น และอย่าปล่อยให้เลยกำหนด หากเป็นเรื่องความเหมือนคล้ายซึ่งต้องอ้างเหตุผลทางกฎหมาย การขอคำแนะนำจากผู้ที่ทำงานด้านทรัพย์สินทางปัญญาก่อนตอบมักคุ้มกว่า',
				en: 'Read it closely first, because missing documents, a vague list of goods and a mark seen as lacking distinctiveness are different problems with different fixes. Then reply within the deadline the letter itself states, and do not let it lapse. Where the objection turns on similarity and rests on legal argument, advice from someone who works in intellectual property usually beats a reply written from intuition.'
			}
		},
		{
			q: { th: 'มีจดหมายหรืออีเมลแจ้งให้จ่ายเงินเรื่องเครื่องหมายการค้า จะรู้ได้อย่างไรว่าของจริง', en: 'I received a letter or email demanding payment about my trademark. Is it real?' },
			a: {
				th: 'ทั่วโลกมีการส่งเอกสารหน้าตาเป็นทางการจากบริษัทเอกชนที่ไม่ใช่หน่วยงานรัฐ โดยอ้างเรื่องการต่ออายุหรือการบันทึกชื่อของคุณลงในทะเบียนบางอย่าง วิธีที่ปลอดภัยคือไม่กดลิงก์และไม่โอนเงินจากเอกสารนั้น แต่พิมพ์ที่อยู่เว็บไซต์ของกรมเองเพื่อตรวจสถานะคำขอของคุณ แล้วดูว่าเลขคำขอและชื่อเจ้าของตรงกันหรือไม่ หากยังสงสัยให้ติดต่อกรมผ่านช่องทางที่ประกาศไว้บนเว็บไซต์ทางการ',
				en: 'Official-looking invoices from private companies that are not government offices circulate worldwide, usually about a renewal or about entering your name in some register. The safe move is to click nothing and pay nothing from the document itself: type the department’s address yourself, check the status of your own application, and confirm the application number and owner name match exactly. If doubt remains, contact the department through the channels published on the official site.'
			}
		},
		{
			q: { th: 'ต้องใช้ตัวแทนหรือทนายความหรือไม่', en: 'Do I need an agent or a lawyer?' },
			a: {
				th: 'คำขอที่ตรงไปตรงมา เช่น เครื่องหมายเป็นคำธรรมดาและรายการสินค้าไม่ซับซ้อน ผู้ประกอบการจำนวนไม่น้อยจัดการเองได้ ส่วนกรณีที่ยุ่งกว่านั้น เช่น มีเครื่องหมายใกล้เคียงอยู่ก่อน ถูกคัดค้าน หรือผู้ขออยู่ต่างประเทศ ตัวแทนที่มีประสบการณ์ช่วยได้จริง ข้อควรระวังคือค่าบริการของตัวแทนเป็นคนละส่วนกับค่าธรรมเนียมทางการ ควรขอให้แยกสองรายการนี้ให้ชัดก่อนตกลงจ้าง',
				en: 'For a straightforward application — an ordinary word mark, an uncomplicated list of goods — plenty of business owners handle it themselves. For messier situations, such as a close earlier mark, an objection to argue, an opposition, or an applicant based overseas, an experienced agent genuinely helps. Just remember that an agent’s service charge is separate from the official fees, and ask for the two to be itemised before you agree.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'กรมทรัพย์สินทางปัญญาทำอะไร', en: 'What the Department of Intellectual Property does' }
		},
		{
			type: 'p',
			text: {
				th: 'กรมทรัพย์สินทางปัญญาเป็นหน่วยงานในสังกัดกระทรวงพาณิชย์ ทำหน้าที่เป็นนายทะเบียนสิทธิในทรัพย์สินทางปัญญาของไทย ทั้งเครื่องหมายการค้าและเครื่องหมายบริการ สิทธิบัตรการประดิษฐ์ อนุสิทธิบัตร และสิทธิบัตรการออกแบบผลิตภัณฑ์ รวมถึงรับแจ้งข้อมูลลิขสิทธิ์ นอกจากงานทะเบียนแล้ว กรมยังดูแลฐานข้อมูลสำหรับตรวจค้นสิทธิที่มีอยู่ก่อน ซึ่งเป็นเครื่องมือชิ้นแรกที่ควรหยิบใช้ก่อนตั้งชื่อแบรนด์ใหม่หรือออกสินค้าใหม่',
				en: 'The Department of Intellectual Property sits under the Ministry of Commerce and acts as Thailand’s registrar for intellectual property: trade and service marks, invention patents, petty patents and product design patents, along with copyright recordation. Besides keeping the register, it maintains the databases used to search rights that already exist — the first tool to reach for before settling on a brand name or launching a product.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทรัพย์สินทางปัญญาแต่ละแบบคุ้มครองอะไร', en: 'What each type of right actually protects' }
		},
		{
			type: 'p',
			text: {
				th: 'ในภาษาพูด คนไทยมักใช้คำว่า “จดลิขสิทธิ์” เหมารวมการจดทะเบียนทุกอย่าง ทั้งที่ชื่อร้าน กรรมวิธีการผลิต และรูปทรงของตัวสินค้า อยู่คนละหมวดกันโดยสิ้นเชิง การเลือกประเภทสิทธิผิดตั้งแต่ต้นทำให้เสียทั้งเวลาและค่าใช้จ่ายไปกับคำขอที่ไม่ได้คุ้มครองสิ่งที่คุณกังวลจริง ๆ',
				en: 'In everyday Thai people say “register the copyright” for almost anything, yet a shop name, a manufacturing process and the shape of a product fall into completely different categories. Picking the wrong one at the outset spends time and money on an application that does not cover the thing you were actually worried about.'
			}
		},
		{
			type: 'table',
			caption: { th: 'สิทธิหลักที่เกี่ยวข้องกับกรมทรัพย์สินทางปัญญา', en: 'The main rights the department handles' },
			head: [
				{ th: 'ประเภท', en: 'Type' },
				{ th: 'คุ้มครองอะไร', en: 'What it protects' },
				{ th: 'สิทธิเกิดขึ้นเมื่อใด', en: 'When the right arises' }
			],
			rows: [
				[
					{ th: 'เครื่องหมายการค้า / เครื่องหมายบริการ', en: 'Trademark / service mark' },
					{ th: 'ชื่อแบรนด์ โลโก้ หรือสัญลักษณ์ที่ใช้กับสินค้าหรือบริการ เพื่อให้ลูกค้าแยกออกว่าเป็นของใคร', en: 'A brand name, logo or symbol used on goods or services so customers can tell whose they are' },
					{ th: 'เมื่อได้รับจดทะเบียน โดยลำดับขึ้นอยู่กับวันที่ยื่นคำขอ', en: 'On registration, with priority set by the filing date' }
				],
				[
					{ th: 'สิทธิบัตรการประดิษฐ์', en: 'Invention patent' },
					{ th: 'สิ่งประดิษฐ์หรือกรรมวิธีที่ใหม่และนำไปใช้ในทางอุตสาหกรรมได้', en: 'An invention or process that is new and industrially applicable' },
					{ th: 'เมื่อได้รับจดทะเบียนหลังผ่านการตรวจสอบเนื้อหา', en: 'On registration, after substantive examination' }
				],
				[
					{ th: 'อนุสิทธิบัตร', en: 'Petty patent' },
					{ th: 'การประดิษฐ์ที่ใหม่และใช้งานได้จริง แต่ระดับการพัฒนาไม่ซับซ้อนเท่าสิทธิบัตร', en: 'An invention that is new and useful but less advanced than one meriting a full patent' },
					{ th: 'เมื่อได้รับจดทะเบียน โดยขั้นตอนตรวจสอบและอายุคุ้มครองต่างจากสิทธิบัตร', en: 'On registration, with a different examination path and a shorter term' }
				],
				[
					{ th: 'สิทธิบัตรการออกแบบผลิตภัณฑ์', en: 'Design patent' },
					{ th: 'รูปร่าง ลวดลาย หรือองค์ประกอบของสีที่ทำให้ผลิตภัณฑ์มีหน้าตาแตกต่าง ไม่เกี่ยวกับการทำงาน', en: 'The shape, pattern or colour composition that gives a product its look — not how it functions' },
					{ th: 'เมื่อได้รับจดทะเบียน', en: 'On registration' }
				],
				[
					{ th: 'ลิขสิทธิ์', en: 'Copyright' },
					{ th: 'งานสร้างสรรค์ เช่น ข้อความ ภาพ ดนตรี ภาพยนตร์ และโปรแกรมคอมพิวเตอร์', en: 'Creative works such as text, images, music, film and software' },
					{ th: 'เกิดขึ้นทันทีเมื่อสร้างงานเสร็จ การแจ้งข้อมูลเป็นการทำหลักฐาน ไม่ใช่การก่อสิทธิ', en: 'The moment the work is created; recording it is evidence, not the source of the right' }
				]
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ไทยใช้ระบบยื่นก่อนได้สิทธิก่อน', en: 'Thailand is a first-to-file country' },
			text: {
				th: 'สำหรับเครื่องหมายการค้า ผู้ที่ยื่นคำขอเข้ามาก่อนจะได้รับพิจารณาก่อน ไม่ใช่ผู้ที่ใช้ชื่อนั้นมานานกว่า ร้านที่ขายดีมาหลายปีแต่ไม่เคยยื่น จึงอาจพบว่ามีคนอื่นยื่นชื่อเดียวกันไปแล้ว แล้วต้องมาพิสูจน์สิทธิกันภายหลังด้วยต้นทุนที่สูงกว่าการยื่นตั้งแต่แรกมาก ถ้าคุณกำลังจะเปิดตัวแบรนด์ ให้ถือว่าการยื่นคำขอเป็นงานชุดเดียวกับการจดทะเบียนธุรกิจ',
				en: 'For trademarks the earlier application is the one considered first — not the business that has used the name longest. A shop trading successfully for years without filing can find someone else has already filed the same name, leaving it to prove its position afterwards at a cost far above what filing would have been. If you are launching a brand, treat the application as part of the same job as registering the company.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ตรวจค้นก่อนยื่น: ขั้นตอนที่คนข้ามบ่อยที่สุด', en: 'Search before you file — the step most often skipped' }
		},
		{
			type: 'p',
			text: {
				th: 'การยื่นคำขอมีทั้งค่าธรรมเนียมและเวลารอผล การถูกปฏิเสธจึงหมายถึงเสียไปทั้งสองอย่างโดยไม่ได้สิทธิใดกลับมา และเหตุผลที่พบบ่อยข้อหนึ่งคือเครื่องหมายเหมือนหรือคล้ายกับของผู้อื่นที่ยื่นหรือจดไว้ก่อนจนผู้บริโภคสับสน การตรวจค้นฐานข้อมูลของกรมก่อนยื่นจึงเป็นการใช้เวลาไม่กี่ชั่วโมงเพื่อประหยัดทั้งเงินและการรอคอย และรู้แต่เนิ่น ๆ ว่าควรปรับชื่อหรือปรับรูปแบบก่อนสั่งทำป้ายและบรรจุภัณฑ์',
				en: 'Filing costs a fee and takes time to examine, so a refusal means losing both and receiving no right in return. One common ground for refusal is that the mark is identical or confusingly similar to one filed or registered earlier. Searching the department’s database first is a few hours’ work that saves the fee and the wait, and tells you early whether to adjust the name or the styling before ordering signage and packaging.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'คำที่สะกดต่างกันแต่อ่านออกเสียงใกล้เคียงกัน รวมถึงคำไทยที่ทับศัพท์มาจากคำภาษาอังกฤษเดียวกัน',
					en: 'Words spelled differently but pronounced alike, including Thai transliterations of the same English word'
				},
				{
					th: 'เครื่องหมายที่คล้ายกันในจำพวกสินค้าหรือบริการเดียวกันหรือที่เกี่ยวข้องกัน ไม่ใช่เฉพาะที่เหมือนกันทุกตัวอักษร',
					en: 'Similar marks in the same or related classes, not only letter-for-letter matches'
				},
				{
					th: 'คำที่บรรยายลักษณะหรือคุณสมบัติของสินค้าตรง ๆ ซึ่งมักถูกมองว่าไม่มีลักษณะบ่งเฉพาะพอจะเป็นของผู้ใดผู้หนึ่ง',
					en: 'Words that plainly describe the goods or their qualities, often treated as too unspecific to belong to anyone'
				},
				{
					th: 'ชื่อทางภูมิศาสตร์ ชื่อสามัญของสินค้า และสัญลักษณ์ที่กฎหมายห้ามนำมาจดทะเบียน เช่น ธงชาติและเครื่องหมายราชการ',
					en: 'Geographic names, generic product names, and symbols the law bars from registration such as national flags and official emblems'
				},
				{
					th: 'ภาพและรูปแบบตัวอักษร ไม่ใช่แค่ตัวสะกด เพราะความคล้ายกันทางสายตาก็เป็นเหตุให้ถูกปฏิเสธได้',
					en: 'Images and lettering, not just spelling — visual similarity is a ground for refusal too'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'หลังยื่นคำขอแล้วเกิดอะไรขึ้นบ้าง', en: 'What happens after you file' }
		},
		{
			type: 'ol',
			items: [
				{
					th: 'ยื่นคำขอพร้อมภาพเครื่องหมาย รายการสินค้าหรือบริการ และเอกสารของผู้ขอ',
					en: 'File the application with the image of the mark, the list of goods or services, and the applicant’s documents'
				},
				{
					th: 'ตรวจสอบความถูกต้องของแบบและเอกสาร หากไม่ครบถ้วน กรมจะมีหนังสือแจ้งให้แก้ไข',
					en: 'Formal examination of the paperwork; if anything is missing, the department writes asking you to correct it'
				},
				{
					th: 'ตรวจสอบเนื้อหาว่าเครื่องหมายมีลักษณะบ่งเฉพาะ ไม่เป็นเครื่องหมายต้องห้าม และไม่เหมือนหรือคล้ายกับของผู้อื่นที่มีอยู่ก่อน',
					en: 'Substantive examination: whether the mark is distinctive, not prohibited, and not identical or confusingly similar to an earlier one'
				},
				{
					th: 'ประกาศโฆษณาคำขอ เพื่อเปิดโอกาสให้ผู้ที่เห็นว่าตนมีสิทธิดีกว่ายื่นคัดค้าน',
					en: 'Publication of the application, giving anyone who believes they hold a better right the chance to oppose'
				},
				{
					th: 'หากไม่มีการคัดค้านหรือคัดค้านไม่เป็นผล ผู้ขอชำระค่าธรรมเนียมรับจดทะเบียนและได้รับหนังสือสำคัญแสดงการจดทะเบียน',
					en: 'If no opposition is filed or it does not succeed, you pay the registration fee and receive the certificate of registration'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'จำพวกสินค้าและขอบเขตของสิทธิ', en: 'Classes, and the limits of what you get' }
		},
		{
			type: 'p',
			text: {
				th: 'เครื่องหมายการค้าไม่ได้คุ้มครองชื่อของคุณในทุกบริบท แต่คุ้มครองเฉพาะรายการสินค้าหรือบริการที่ระบุไว้ในคำขอ ซึ่งจัดกลุ่มเป็นจำพวกตามระบบสากล ชื่อเดียวกันจึงอาจมีเจ้าของคนละรายในคนละจำพวกได้ เช่น ร้านอาหารกับซอฟต์แวร์ การเขียนรายการให้ตรงกับสิ่งที่ขายจริงและสิ่งที่จะขายในอนาคตอันใกล้จึงสำคัญกว่าที่หลายคนคิด และเนื่องจากขอบเขตที่ขอคุ้มครองมีผลต่อค่าธรรมเนียม ควรตรวจสอบอัตราที่เป็นปัจจุบันจากเว็บไซต์ของกรมก่อนตัดสินใจ',
				en: 'A trademark does not protect your name in every context — only for the goods or services listed in the application, grouped into classes under an international system. The same word can therefore belong to different owners in different classes: a restaurant and a software product, say. Writing the list to match what you sell now and will sell soon matters more than most people expect, and because the scope you claim affects the fee, check the current rates on the department’s site before deciding.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'สิทธิที่ได้มีผลเฉพาะในประเทศไทย', en: 'A Thai registration covers Thailand only' },
			text: {
				th: 'การจดทะเบียนกับกรมไม่ได้ทำให้คุณมีสิทธิในประเทศอื่นโดยอัตโนมัติ หากขายข้ามประเทศหรือส่งออก ต้องยื่นขอความคุ้มครองในแต่ละประเทศที่ต้องการ หรือใช้ระบบยื่นคำขอระหว่างประเทศที่ไทยเป็นภาคี ได้แก่ พิธีสารมาดริดสำหรับเครื่องหมายการค้า และสนธิสัญญาความร่วมมือด้านสิทธิบัตร (PCT) สำหรับสิทธิบัตร รายละเอียดและเงื่อนไขปัจจุบันควรตรวจสอบจากเว็บไซต์ทางการ',
				en: 'Registering with the department gives you no automatic right anywhere else. If you sell across borders or export, seek protection in each country you care about, or use the international routes Thailand belongs to — the Madrid Protocol for trademarks and the Patent Cooperation Treaty for patents. Check the current details on the official site.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงมีอยู่', en: 'Why this page exists' }
		},
		{
			type: 'p',
			text: {
				th: 'ลองค้นคำว่า “จดเครื่องหมายการค้า” เป็นภาษาไทย แล้วผลลัพธ์อันดับต้น ๆ มักเป็นสำนักงานตัวแทนและสำนักงานกฎหมายที่ลงทุนกับโฆษณาและการทำอันดับอย่างจริงจัง ส่วนหน่วยงานที่ออกสิทธิให้จริงกลับอยู่ไกลลงไปกว่านั้น ผู้ประกอบการรายเล็กจำนวนมากจึงจ่ายค่าบริการโดยไม่เคยรู้ว่าตนเองยื่นเองได้ ในการตรวจสอบของเรา แม้จะเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ เว็บไซต์ของกรมก็ยังตอบกลับด้วยหน้าบล็อกของระบบไฟร์วอลล์ แม้แต่คำขอไฟล์ robots.txt ก็ได้หน้าบล็อกกลับมาแทนตัวไฟล์ เราจึงอ่านนโยบายที่แท้จริงของเว็บไซต์จากภายนอกไม่ได้ และไม่สรุปว่า Googlebot ตัวจริงซึ่งเรียกจากช่วงหมายเลขไอพีของกูเกิลและตรวจสอบย้อนกลับทางดีเอ็นเอสได้ ถูกปฏิเสธไปด้วยหรือไม่ การปิดกั้นลักษณะนี้มักกรองทราฟฟิกจากศูนย์ข้อมูลเป็นวงกว้างมากกว่าจะกันเครื่องมือค้นหา แต่ผลในทางปฏิบัติคือเครื่องมือภายนอก ทั้งบริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI ตรวจสอบหรือเก็บเนื้อหาของเว็บไซต์นี้ไว้แทนไม่ได้ หน้านี้จึงทำหน้าที่เพียงอย่างเดียว คืออธิบายว่าแต่ละสิทธิคืออะไรด้วยคำที่คนใช้จริง แล้วชี้ไปยังต้นทางที่เป็นทางการ ThaiGov.co เป็นสารบบอิสระ ไม่มีความเกี่ยวข้องกับกรมทรัพย์สินทางปัญญา ไม่รับยื่นคำขอแทนใคร และไม่เก็บค่าบริการใด ๆ',
				en: 'Search “จดเครื่องหมายการค้า” in Thai and the top results are usually filing agents and law firms with real advertising and ranking budgets, while the office that actually grants the right sits well below them. Plenty of small businesses pay for help without ever learning they may file themselves. In our own check the department’s site answered a full desktop-browser request profile with a firewall block page — even the request for robots.txt came back as that block page rather than the file — so the site’s real crawler policy cannot be read from outside, and we draw no conclusion about the genuine Googlebot, which requests from Google’s own IP ranges and verifies itself by reverse DNS. Refusals shaped like this usually filter datacentre traffic broadly rather than single out search engines, but the practical effect is that outside tools — web archives, third-party monitoring and the AI assistants people ask about government services — cannot check or keep a copy of what the site says. So this page does one thing: explain each right in the words people really use, then point at the official source. ThaiGov.co is an independent directory with no connection to the department; we file nothing on anyone’s behalf and charge nothing.'
			}
		}
	],
	crawl: {
		host: 'www.ipthailand.go.th',
		verdict: 'waf-blocked',
		kind: 'waf-rule',
		status: 200,
		snippet: 'GET /robots.txt  ->  200, but the body is a block page\n(Imperva / Incapsula interstitial served with a 200 status)',
		checkedAt: '2026-08-27',
		note: {
			th: 'แม้จะเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ ทั้งส่วนหัวการระบุตัวตนเบราว์เซอร์ ภาษา และ fetch metadata ครบถ้วน เซิร์ฟเวอร์ก็ยังปฏิเสธคำขอด้วยหน้าบล็อกของระบบไฟร์วอลล์ การปิดกั้นลักษณะนี้มักกรองทราฟฟิกจากศูนย์ข้อมูลเป็นวงกว้าง เราจึงยืนยันนโยบายที่แท้จริงของเว็บไซต์จากภายนอกไม่ได้ และไม่สรุปว่า Googlebot ตัวจริงถูกปิดกั้นด้วยหรือไม่',
			en: 'Even with a full browser request profile — complete client hints, language and fetch-metadata headers — the server refuses with a firewall block page. Blocks shaped like this usually filter datacentre traffic broadly, so the site’s real policy cannot be verified from outside, and we draw no conclusion about whether the genuine Googlebot is refused too.'
		}
	},
	priority: 80,
	updated: '2026-08-28'
};
