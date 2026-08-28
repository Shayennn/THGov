import type { Service } from '../types';

export const service: Service = {
	slug: 'dol-landsmaps',
	name: {
		th: 'LandsMaps — ค้นหารูปแปลงที่ดินและตรวจสอบโฉนดออนไลน์',
		en: 'LandsMaps — Search Thai Land Parcels and Title Deeds Online'
	},
	shortName: { th: 'LandsMaps กรมที่ดิน', en: 'DOL LandsMaps' },
	url: 'https://landsmaps.dol.go.th/',
	altUrls: [
		{ label: { th: 'เว็บไซต์หลัก กรมที่ดิน', en: 'Department of Lands main website' }, url: 'https://www.dol.go.th/' }
	],
	agency: 'dol',
	categories: ['land-property'],
	summary: {
		th: 'ค้นหารูปแปลงที่ดินจากเลขที่โฉนด ดูตำแหน่งบนแผนที่ เนื้อที่ สำนักงานที่ดินที่รับผิดชอบ และราคาประเมิน ผ่านระบบ LandsMaps ของกรมที่ดิน พร้อมลิงก์ทางการ',
		en: 'Look up a Thai land parcel by deed number on the Department of Lands’ LandsMaps: its position on the map, its shape and area, and the official appraised value.'
	},
	deck: {
		th: 'ระบบแผนที่ของกรมที่ดินที่ให้คุณพิมพ์เลขที่โฉนดแล้วเห็นว่าที่ดินแปลงนั้นอยู่ตรงไหนจริง ๆ ก่อนจะตกลงซื้อหรือวางมัดจำ',
		en: 'The Department of Lands’ public map service: type a deed number and see where that parcel actually sits — before you agree to anything or hand over a deposit.'
	},
	keywords: {
		th: [
			'ค้นหารูปแปลงที่ดิน',
			'ตรวจสอบโฉนดที่ดินออนไลน์',
			'เช็คโฉนดที่ดิน',
			'LandsMaps',
			'แลนด์แมพ กรมที่ดิน',
			'ค้นหาที่ดินจากเลขที่โฉนด',
			'ดูแผนที่ที่ดินออนไลน์',
			'เช็คราคาประเมินที่ดิน',
			'ที่ดินแปลงนี้อยู่ตรงไหน',
			'ตรวจสอบที่ดินก่อนซื้อ',
			'กรมที่ดิน ค้นหาแปลงที่ดิน',
			'โฉนดปลอม ตรวจสอบยังไง',
			'เลขที่ดิน หน้าสำรวจ'
		],
		en: [
			'LandsMaps',
			'Thailand land parcel search',
			'check Thai title deed online',
			'Department of Lands map',
			'chanote deed lookup',
			'Thailand land appraised value',
			'verify land before buying Thailand'
		]
	},
	features: [
		{
			icon: 'map',
			title: { th: 'เห็นตำแหน่งจริงของแปลงที่ดิน', en: 'See where the parcel really is' },
			text: {
				th: 'กรอกเลขที่โฉนดพร้อมจังหวัดและอำเภอ ระบบจะวางรูปแปลงลงบนแผนที่และภาพถ่ายทางอากาศให้เห็นว่าที่ดินอยู่จุดใดของประเทศ',
				en: 'Enter a deed number with its province and district, and the parcel outline is drawn over a base map and aerial imagery so you can see exactly where the land lies.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'ข้อมูลทะเบียนพื้นฐานของแปลง', en: 'The basic registered particulars' },
			text: {
				th: 'ดูเลขที่โฉนด เลขที่ดิน หน้าสำรวจ เลขระวาง และเนื้อที่ตามเอกสารสิทธิ์ ได้ในหน้าเดียวโดยไม่ต้องรอคิวที่สำนักงาน',
				en: 'Deed number, parcel number, survey page, map-sheet number and the area recorded on the document — all on one screen, without queueing at a counter.'
			}
		},
		{
			icon: 'coins',
			title: { th: 'ราคาประเมินสำหรับตั้งงบค่าโอน', en: 'Appraised value for budgeting' },
			text: {
				th: 'ระบบแสดงราคาประเมินทุนทรัพย์ซึ่งเป็นฐานคำนวณค่าธรรมเนียมและภาษีตอนจดทะเบียน ใช้ตั้งงบล่วงหน้าได้ แม้ยอดจริงจะคำนวณโดยเจ้าหน้าที่',
				en: 'The official appraised value underpins the fees and taxes charged at registration, so it lets you budget ahead — even though staff calculate the final figure.'
			}
		},
		{
			icon: 'building',
			title: { th: 'รู้ว่าต้องติดต่อสำนักงานที่ดินไหน', en: 'Know which land office to go to' },
			text: {
				th: 'ผลการค้นหาระบุสำนักงานที่ดินที่รับผิดชอบแปลงนั้น จึงไม่ต้องเดาว่าต้องเดินทางไปสาขาใดเมื่อจะจดทะเบียนหรือขอตรวจสอบเอกสาร',
				en: 'Results name the land office responsible for the plot, so there is no guessing which branch to visit to register a deal or check the paperwork.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ด่านตรวจแรกก่อนวางมัดจำ', en: 'A first check before any deposit' },
			text: {
				th: 'ใช้เทียบว่าที่ดินที่ผู้ขายพาไปดูตรงกับเลขที่โฉนดในสัญญาหรือไม่ ช่วยลดความเสี่ยงจากการสลับแปลงและเอกสารที่ถูกแก้ไข',
				en: 'Match the plot a seller showed you against the deed number in the contract — the fastest way to catch a switched parcel or altered paperwork.'
			}
		},
		{
			icon: 'lock',
			title: { th: 'ไม่เปิดเผยข้อมูลเจ้าของ', en: 'Owner details stay closed' },
			text: {
				th: 'ระบบไม่แสดงชื่อผู้ถือกรรมสิทธิ์หรือภาระผูกพัน เพราะเป็นข้อมูลส่วนบุคคล การขอดูรายละเอียดเหล่านี้ต้องยื่นคำขอในฐานะผู้มีส่วนได้เสียที่สำนักงานที่ดิน',
				en: 'Names of title holders and encumbrances are not shown — they are protected personal data, released only to someone with a legitimate interest who applies at the land office.'
			}
		}
	],
	steps: [
		{
			title: { th: 'อ่านตัวเลขจากหน้าโฉนดให้ครบ', en: 'Take every number off the deed' },
			text: {
				th: 'บนโฉนดที่ดินจะระบุจังหวัดและอำเภอที่ที่ดินตั้งอยู่ เลขที่โฉนด เลขที่ดิน และหน้าสำรวจ จดไว้ให้ครบก่อนเริ่มค้นหา เพราะระบบต้องใช้พื้นที่ประกอบกับตัวเลขจึงจะระบุแปลงได้ถูกต้อง',
				en: 'A deed states the province and district where the land lies, the deed number, the parcel number and the survey page. Write them all down first — the system needs the location alongside the numbers to identify the right plot.'
			}
		},
		{
			title: { th: 'เข้าเว็บไซต์จากที่อยู่ทางการ', en: 'Open the site from its official address' },
			text: {
				th: 'พิมพ์ที่อยู่เว็บไซต์เองหรือเข้าผ่านลิงก์บนหน้านี้ การค้นหาพื้นฐานเปิดให้ประชาชนทั่วไปใช้ได้โดยไม่ต้องสมัครสมาชิก หากลิงก์มาจากแชทหรือประกาศขายที่ดิน ให้ตรวจชื่อโดเมนว่าเป็นของกรมที่ดินก่อนเสมอ',
				en: 'Type the address yourself or follow the link on this page. Basic searches are open to the public with no account. If a link reached you through chat or a property listing, confirm the domain belongs to the Department of Lands before trusting it.'
			}
		},
		{
			title: { th: 'ระบุพื้นที่ก่อน แล้วจึงค้นด้วยเลขที่โฉนด', en: 'Set the location, then search by deed number' },
			text: {
				th: 'เลือกจังหวัดและอำเภอที่ที่ดินตั้งอยู่ แล้วจึงกรอกเลขที่โฉนด หากผลไม่ตรงกับที่คาดไว้ ให้ลองค้นด้วยเลขที่ดินและหน้าสำรวจแทน ซึ่งเป็นตัวเลขคนละชุดกันและมักช่วยยืนยันแปลงได้เมื่อเลขที่โฉนดบนเอกสารเก่าอ่านไม่ชัด',
				en: 'Choose the province and district, then enter the deed number. If the result is not what you expected, search by parcel number and survey page instead — a different set of figures, and often the way to pin down a plot when an old deed is hard to read.'
			}
		},
		{
			title: { th: 'อ่านผลลัพธ์แล้วเทียบกับที่ผู้ขายบอก', en: 'Read the result against what you were told' },
			text: {
				th: 'ดูว่ารูปแปลงอยู่ตรงไหน ติดถนนสาธารณะหรือไม่ เนื้อที่ตรงกับที่ตกลงกันหรือเปล่า และสำนักงานที่ดินใดรับผิดชอบ ส่วนราคาประเมินใช้ประมาณค่าใช้จ่ายได้คร่าว ๆ แต่อัตราค่าธรรมเนียมปัจจุบันควรตรวจสอบจากแหล่งทางการอีกครั้ง',
				en: 'Check where the outline sits, whether it touches a public road, whether the area matches what was agreed, and which land office holds it. The appraised value gives a rough sense of costs, but confirm current fee rates from an official source.'
			}
		},
		{
			title: { th: 'ลงพื้นที่ดูจริงพร้อมเปิดผลค้นหาไว้', en: 'Walk the land with the result open' },
			text: {
				th: 'เปิดผลการค้นหาบนมือถือขณะยืนอยู่ในที่ดินจริง แล้วเทียบตำแหน่งกับภาพถ่ายทางอากาศและสิ่งอ้างอิงรอบข้าง เช่น แนวถนน ลำน้ำ หรือรั้วเดิม วิธีนี้จับความไม่ตรงกันได้เร็วที่สุด',
				en: 'Open the result on your phone while standing on the plot and match it against the aerial imagery and the landmarks around you — a road, a canal, an existing fence. Mismatches surface fastest this way.'
			}
		},
		{
			title: { th: 'ยืนยันที่สำนักงานที่ดินก่อนผูกมัดตัวเอง', en: 'Verify at the land office before committing' },
			text: {
				th: 'ก่อนวางมัดจำ ทำสัญญา หรือโอนเงินก้อนใด ให้นำเอกสารไปตรวจสอบกับสำนักงานที่ดินที่รับผิดชอบแปลงนั้น ข้อมูลบางรายการเปิดให้เฉพาะผู้มีส่วนได้เสีย จึงควรเตรียมเอกสารให้พร้อมและไปพร้อมผู้ขายหากทำได้',
				en: 'Before a deposit, a contract or any transfer of money, take the documents to the land office that holds the plot. Some records go only to people with a legitimate interest, so bring your paperwork and, if you can, go together with the seller.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ใช้ LandsMaps ต้องเสียเงินหรือสมัครสมาชิกไหม', en: 'Does LandsMaps cost anything, or need an account?' },
			a: {
				th: 'การค้นหาแปลงที่ดินและดูข้อมูลพื้นฐานเปิดให้ประชาชนทั่วไปใช้ได้ ไม่ต้องสมัครสมาชิกและไม่มีค่าใช้จ่าย ค่าธรรมเนียมจะเกิดขึ้นเมื่อไปขอเอกสารหรือทำธุรกรรมที่สำนักงานที่ดิน เช่น ขอคัดสำเนาเอกสารสิทธิ์หรือจดทะเบียนโอน ซึ่งอัตราปัจจุบันควรสอบถามจากกรมที่ดินโดยตรง',
				en: 'Searching for a parcel and reading its basic details is open to the public, free, and needs no registration. Fees arise only when you ask the land office for documents or carry out a transaction there — a certified copy, or a transfer registration — and current rates should be checked with the Department of Lands directly.'
			}
		},
		{
			q: { th: 'ค้นแล้วไม่พบแปลงที่ดิน ต้องทำอย่างไร', en: 'The search finds nothing — what now?' },
			a: {
				th: 'สาเหตุที่พบบ่อยคือเลือกจังหวัดหรืออำเภอไม่ตรงกับที่ระบุบนเอกสาร เพราะเขตการปกครองอาจถูกแบ่งใหม่หลังออกโฉนด หรือกรอกตัวเลขคลาดเคลื่อนเมื่อเอกสารเก่าอ่านยาก ให้ลองสลับไปค้นด้วยเลขที่ดินและหน้าสำรวจ หรือเลื่อนแผนที่ไปยังบริเวณนั้นแล้วเลือกแปลงโดยตรง หากยังไม่พบ เป็นไปได้ว่าที่ดินถือครองด้วยเอกสารสิทธิ์ประเภทอื่นที่ไม่ใช่โฉนด หรือข้อมูลยังไม่ครบในระบบ กรณีนี้ต้องสอบถามสำนักงานที่ดินในพื้นที่',
				en: 'The usual cause is a province or district that no longer matches the document — administrative boundaries get redrawn long after a deed is issued — or a digit misread from old paperwork. Try the parcel number and survey page instead, or pan the map to the area and select the plot directly. If it still does not appear, the land may be held under a document other than a full title deed, or the data may be incomplete, and the local land office is where to ask.'
			}
		},
		{
			q: { th: 'ระบบบอกได้ไหมว่าใครเป็นเจ้าของที่ดิน', en: 'Does it show who owns the land?' },
			a: {
				th: 'ไม่ได้ ระบบไม่เปิดเผยชื่อผู้ถือกรรมสิทธิ์ รายการจำนอง หรือการอายัด เพราะเป็นข้อมูลส่วนบุคคลที่ได้รับความคุ้มครอง การตรวจสอบสารบบที่ดินฉบับเต็มต้องยื่นคำขอที่สำนักงานที่ดินและแสดงได้ว่าเป็นผู้มีส่วนได้เสีย เช่น เป็นคู่สัญญาซื้อขาย ทายาท หรือผู้รับจำนอง',
				en: 'No. Names of title holders, mortgages and injunctions are withheld as protected personal data. Seeing the full register means applying at the land office and showing a legitimate interest — as a party to a sale, an heir, or a mortgagee.'
			}
		},
		{
			q: { th: 'ราคาประเมินที่แสดงคือราคาซื้อขายจริงหรือไม่', en: 'Is the appraised value the market price?' },
			a: {
				th: 'ไม่ใช่ ราคาประเมินทุนทรัพย์เป็นราคาที่ทางราชการกำหนดไว้เพื่อใช้คำนวณค่าธรรมเนียมและภาษีในการจดทะเบียนสิทธิและนิติกรรม มีการปรับปรุงเป็นรอบ และมักต่างจากราคาที่ผู้ซื้อผู้ขายตกลงกันจริงในตลาด จึงควรใช้เป็นแนวทางตั้งงบค่าใช้จ่าย ไม่ใช่ตัวชี้วัดมูลค่าตลาดของที่ดิน',
				en: 'It is not. The appraised value is set by the authorities to calculate fees and taxes at registration, it is revised on a cycle, and it commonly differs from the price a buyer and seller actually settle on. Use it to budget for costs, not to gauge what the land is worth.'
			}
		},
		{
			q: { th: 'ใช้รูปแปลงจากระบบยืนยันแนวเขตกับเพื่อนบ้านได้ไหม', en: 'Can the outline settle a boundary with a neighbour?' },
			a: {
				th: 'ไม่ได้ รูปแปลงบนแผนที่เป็นข้อมูลอ้างอิงเชิงตำแหน่ง ไม่ใช่ผลการรังวัดที่มีการปักหลักเขตในพื้นที่จริง ความคลาดเคลื่อนระหว่างเส้นบนหน้าจอกับหมุดหลักเขตในสนามเกิดขึ้นได้เสมอ หากมีข้อพิพาทหรือกำลังจะสร้างรั้วถาวร ให้ยื่นขอรังวัดสอบเขตกับสำนักงานที่ดิน เพื่อให้ช่างรังวัดออกไปชี้แนวเขตต่อหน้าเจ้าของที่ดินข้างเคียง',
				en: 'No. The outline is positional reference data, not a survey with markers set on the ground, and a gap between the line on screen and the posts in the field is always possible. For a dispute, or before building a permanent fence, request a boundary re-survey from the land office so a surveyor establishes the line in front of the adjoining owners.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าโฉนดที่ผู้ขายนำมาแสดงเป็นของจริง', en: 'How do I know the deed a seller shows me is genuine?' },
			a: {
				th: 'วิธีเดียวที่ยืนยันได้จริงคือนำเอกสารไปเทียบกับฉบับหลวงที่เก็บรักษาไว้ที่สำนักงานที่ดินซึ่งรับผิดชอบแปลงนั้น เพราะโฉนดทุกฉบับมีคู่ฉบับของทางราชการเสมอ การค้นบน LandsMaps ช่วยได้ในขั้นแรก คือดูว่าเลขที่โฉนดนั้นชี้ไปยังตำแหน่งและเนื้อที่ตรงกับที่ผู้ขายอ้างหรือไม่ แต่บอกไม่ได้ว่ากระดาษที่ถืออยู่ในมือเป็นของแท้ หากผู้ขายบ่ายเบี่ยงไม่ยอมไปสำนักงานที่ดินด้วยกัน ให้ถือเป็นสัญญาณอันตราย',
				en: 'The only real confirmation is comparing the paperwork against the official counterpart held at the land office responsible for the plot — every deed has one. A LandsMaps search covers the first step, showing whether that deed number points to the position and area the seller claims, but it cannot tell you whether the paper in your hands is authentic. A seller who avoids going to the land office with you is a warning sign.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'LandsMaps คืออะไร', en: 'What is LandsMaps?' }
		},
		{
			type: 'p',
			text: {
				th: 'LandsMaps คือระบบแผนที่ออนไลน์ของกรมที่ดิน สำหรับค้นหาว่าที่ดินแปลงหนึ่ง ๆ ตั้งอยู่ตำแหน่งใดบนแผนที่ประเทศไทย ผู้ใช้กรอกเลขที่โฉนดพร้อมจังหวัดและอำเภอที่ที่ดินตั้งอยู่ ระบบจะแสดงรูปแปลงซ้อนทับบนแผนที่ฐานและภาพถ่ายทางอากาศ พร้อมข้อมูลทะเบียนพื้นฐานของแปลงนั้น โดยไม่ต้องเดินทางไปสำนักงานที่ดินและไม่ต้องรอคิว',
				en: 'LandsMaps is the Department of Lands’ public web map for finding where a given land parcel sits on the map of Thailand. You enter a title deed number together with the province and district where the land lies, and the system draws the parcel outline over a base map and aerial imagery, alongside the plot’s basic registered particulars — no trip to a land office and no queue.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'กลุ่มที่ใช้มากที่สุดคือผู้ที่กำลังจะซื้อที่ดิน เพราะต้องการรู้ว่าแปลงที่ผู้ขายพาไปดูกับแปลงที่ระบุในโฉนดเป็นแปลงเดียวกันหรือไม่ ถัดมาคือเจ้าของที่ดินที่อยากทบทวนตำแหน่งและรูปร่างแปลงของตนเอง โดยเฉพาะที่ดินมรดกที่ไม่ได้เข้าไปดูมาหลายปีจนจำแนวเขตไม่ได้แล้ว และอีกกลุ่มคือคนที่ต้องประมาณค่าใช้จ่ายล่วงหน้า เช่น ครอบครัวที่วางแผนแบ่งมรดก หรือผู้ที่จะใช้ที่ดินเป็นหลักประกันในการขอสินเชื่อ',
				en: 'The heaviest users are prospective buyers, who want to know whether the plot a seller walked them around is the same plot named on the deed. Next come owners revisiting the position and shape of land they already hold — inherited plots nobody has visited in years, where the boundaries have long since blurred. Then there are people costing something out in advance: families planning an inheritance split, or borrowers preparing to pledge land as collateral.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ค้นหาอย่างไรให้เจอ', en: 'How the search actually works' }
		},
		{
			type: 'p',
			text: {
				th: 'การค้นที่ได้ผลแน่นอนที่สุดคือค้นจากเอกสารสิทธิ์ที่อยู่ในมือ เพราะบนหน้าโฉนดมีทั้งจังหวัด อำเภอ เลขที่โฉนด เลขที่ดิน และหน้าสำรวจ ครบอยู่แล้ว ระบบจำเป็นต้องรู้พื้นที่ก่อน เพราะเลขที่โฉนดไม่ได้เรียงเป็นชุดเดียวทั้งประเทศ แต่นับแยกตามพื้นที่ที่แต่ละสำนักงานที่ดินรับผิดชอบ เลขเดียวกันจึงมีอยู่ได้ในหลายจังหวัด ส่วนกรณีที่ยังไม่มีเอกสารอยู่ในมือ อีกทางเลือกคือเลื่อนและซูมแผนที่ไปยังบริเวณที่สนใจแล้วเลือกแปลงบนแผนที่โดยตรง',
				en: 'The most reliable route is to search from the document in your hand: the face of a deed already carries the province, the district, the deed number, the parcel number and the survey page. The system needs the location first because deed numbers do not run as one national sequence — they are counted within the area each land office covers, so the same number exists in several provinces. Without the paperwork, the alternative is to pan and zoom to the area you care about and pick the parcel off the map.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ผลที่ได้กลับมามักครอบคลุมเลขที่โฉนด เลขที่ดิน หน้าสำรวจ เลขระวาง เนื้อที่ตามเอกสารสิทธิ์ สำนักงานที่ดินที่รับผิดชอบแปลง และราคาประเมินทุนทรัพย์ซึ่งใช้เป็นฐานคำนวณค่าธรรมเนียมและภาษีเมื่อจดทะเบียนสิทธิและนิติกรรม ทั้งหมดนี้เป็นข้อมูลเชิงอ้างอิงที่ช่วยให้เห็นภาพรวมของแปลงที่ดินก่อนลงมือทำธุรกรรมจริง',
				en: 'What comes back typically covers the deed number, the parcel and survey-page numbers, the map-sheet number, the area recorded on the document, the land office responsible for the plot, and the official appraised value that serves as the basis for fees and taxes at registration. All of it is reference information, meant to give you a picture of the parcel before any real transaction starts.'
			}
		},
		{
			type: 'table',
			caption: { th: 'อะไรที่ LandsMaps ตอบได้ และอะไรที่ต้องไปสำนักงานที่ดิน', en: 'What LandsMaps answers, and what still needs the land office' },
			head: [
				{ th: 'สิ่งที่อยากรู้', en: 'What you need' },
				{ th: 'บน LandsMaps', en: 'On LandsMaps' },
				{ th: 'ที่สำนักงานที่ดิน', en: 'At the land office' }
			],
			rows: [
				[
					{ th: 'ที่ดินแปลงนี้อยู่ตรงไหน', en: 'Where the parcel is' },
					{ th: 'ดูได้ทันทีบนแผนที่', en: 'Visible immediately on the map' },
					{ th: 'ไม่จำเป็น เว้นแต่ต้องใช้เป็นหลักฐาน', en: 'Not needed unless you want it as evidence' }
				],
				[
					{ th: 'เนื้อที่และเลขทะเบียนของแปลง', en: 'Area and register numbers' },
					{ th: 'แสดงเป็นข้อมูลอ้างอิง', en: 'Shown as reference data' },
					{ th: 'ขอตรวจสอบหลักฐานทะเบียนเมื่อต้องใช้ยืนยัน', en: 'Ask for a register check when it must be confirmed' }
				],
				[
					{ th: 'ใครเป็นเจ้าของ ติดจำนองหรือไม่', en: 'Owner, mortgage, encumbrances' },
					{ th: 'ไม่แสดง', en: 'Not shown' },
					{ th: 'ยื่นคำขอในฐานะผู้มีส่วนได้เสีย', en: 'Apply as a person with a legitimate interest' }
				],
				[
					{ th: 'แนวเขตที่แน่นอนของแปลง', en: 'The exact boundary line' },
					{ th: 'เป็นเพียงรูปแปลงเชิงอ้างอิง', en: 'Only an indicative outline' },
					{ th: 'ต้องขอรังวัดสอบเขตโดยช่างรังวัด', en: 'Requires a re-survey by a land surveyor' }
				],
				[
					{ th: 'ราคาประเมินสำหรับคำนวณค่าธรรมเนียม', en: 'Appraised value for fee calculation' },
					{ th: 'ใช้ดูเป็นแนวทางได้', en: 'Useful as a guide' },
					{ th: 'เจ้าหน้าที่คำนวณยอดจริงตอนจดทะเบียน', en: 'Staff compute the actual amount at registration' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ข้อจำกัดที่ต้องเข้าใจก่อนใช้', en: 'The limits, stated plainly' }
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'รูปแปลงบนแผนที่ไม่ใช่ผลการรังวัด', en: 'A map outline is not a survey' },
			text: {
				th: 'เส้นขอบแปลงที่เห็นบน LandsMaps เป็นข้อมูลเชิงแผนที่สำหรับอ้างอิงตำแหน่งเท่านั้น ไม่ใช่ผลการรังวัดในพื้นที่จริง และใช้ชี้ขาดข้อพิพาทเรื่องแนวเขตกับที่ดินข้างเคียงไม่ได้ หากต้องการแนวเขตที่อ้างอิงทางกฎหมายได้ ต้องยื่นเรื่องขอรังวัดสอบเขตกับสำนักงานที่ดินที่รับผิดชอบแปลงนั้น',
				en: 'The parcel outline on LandsMaps is cartographic data for locating a plot, not the result of a survey on the ground, and it cannot settle a boundary dispute with the land next door. A boundary you can rely on legally comes from a formal re-survey requested through the land office that holds the plot.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ระบบนี้ไม่ใช่การตรวจสอบทางทะเบียนอย่างเป็นทางการ และไม่ใช่สำเนาโฉนดที่รับรองถูกต้อง ภาพหรือหน้าจอที่พิมพ์ออกมาจึงใช้ยื่นแทนเอกสารราชการไม่ได้',
					en: 'It is not an official register search and not a certified copy of a deed, so a printout or screenshot cannot stand in for the real document.'
				},
				{
					th: 'ข้อมูลอาจยังไม่ทันกับรายการจดทะเบียนล่าสุด หากเพิ่งมีการโอน แบ่งแยก หรือรวมแปลง ควรตรวจสอบกับสำนักงานที่ดินอีกครั้ง',
					en: 'The data may lag the latest registration. If a plot has recently been transferred, subdivided or merged, confirm the current position with the land office.'
				},
				{
					th: 'เอกสารสิทธิ์ที่ไม่ใช่โฉนดที่ดิน เช่น หนังสือรับรองการทำประโยชน์ อาจไม่ปรากฏหรือแสดงรายละเอียดได้ไม่ครบเท่าที่ดินที่มีโฉนด',
					en: 'Land held under something other than a full title deed — a certificate of use, for instance — may not appear at all, or may carry less detail than titled land.'
				},
				{
					th: 'ข้อมูลเจ้าของและภาระผูกพัน เช่น การจำนองหรือการอายัด ไม่ถูกเปิดเผยต่อสาธารณะ เพราะเป็นข้อมูลส่วนบุคคลที่ต้องคุ้มครองตามกฎหมาย',
					en: 'Ownership and encumbrances such as mortgages or injunctions are never public; the law protects them as personal data.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ตรวจให้รอบคอบก่อนวางมัดจำ', en: 'Check hard before the deposit' }
		},
		{
			type: 'p',
			text: {
				th: 'การหลอกลวงเรื่องที่ดินที่พบบ่อยที่สุดในไทยไม่ได้ซับซ้อนเลย รูปแบบคลาสสิกคือการนำโฉนดปลอมหรือโฉนดที่ถูกแก้ไขตัวเลขมาแสดง กับอีกแบบคือพาไปดูที่ดินแปลงสวยติดถนน แล้วให้ทำสัญญากับเลขที่โฉนดของอีกแปลงหนึ่งซึ่งอยู่ลึกเข้าไปและไม่มีทางเข้าออก ผู้ซื้อที่รีบวางมัดจำเพราะกลัวเสียโอกาสมักเป็นกลุ่มที่เสียหายหนักที่สุด LandsMaps ตัดความเสี่ยงชั้นแรกได้ เพราะทำให้เห็นว่าเลขที่โฉนดในเอกสารชี้ไปยังตำแหน่งใดบนแผนที่จริง ๆ',
				en: 'Land fraud in Thailand is rarely sophisticated. The classic version is a forged deed, or one whose figures have been altered. The other is a walk around a handsome roadside plot followed by a contract drawn against a different deed number, for a landlocked parcel further back. Buyers who rush a deposit for fear of losing the deal lose the most. LandsMaps strips away the first layer of that risk by showing where the deed number on the paperwork actually points.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'นำเลขที่โฉนดจากเอกสารของผู้ขายมาค้นด้วยตัวเอง แล้วเทียบตำแหน่งกับที่ดินที่ไปดูมาจริง อย่าให้ผู้ขายเป็นคนเปิดหน้าจอให้ดู',
					en: 'Run the seller’s deed number yourself and compare the position with the land you visited — do not let the seller be the one holding the screen.'
				},
				{
					th: 'ดูจากภาพถ่ายทางอากาศว่าแปลงติดถนนสาธารณะหรือไม่ ที่ดินตาบอดที่ไม่มีทางเข้าออกมีข้อจำกัดทั้งการใช้ประโยชน์ การขออนุญาตก่อสร้าง และการขายต่อ',
					en: 'Use the aerial imagery to see whether the plot touches a public road. Landlocked land is constrained in how it can be used, built on and resold.'
				},
				{
					th: 'เทียบเนื้อที่ที่ระบบแสดงกับเนื้อที่ที่ผู้ขายบอกและที่ระบุในสัญญา หากไม่ตรงกันต้องหาคำอธิบายให้ได้ก่อนจ่ายเงิน',
					en: 'Compare the area shown with what the seller states and what the contract says. Any discrepancy needs an explanation before money changes hands.'
				},
				{
					th: 'ระวังการเร่งรัดให้ตัดสินใจภายในวันเดียว ราคาที่ต่ำผิดปกติ และการขอให้โอนเงินเข้าบัญชีของบุคคลที่ไม่ใช่คู่สัญญา',
					en: 'Be wary of same-day pressure, a price far below the market, and requests to transfer money to an account belonging to someone who is not party to the contract.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'ขั้นตอนที่ข้ามไม่ได้', en: 'The step you cannot skip' },
			text: {
				th: 'ก่อนวางมัดจำหรือลงนามในสัญญาใด ๆ ต้องนำเอกสารไปตรวจสอบกับสำนักงานที่ดินที่รับผิดชอบแปลงนั้น เพราะที่นั่นเก็บโฉนดฉบับหลวงไว้เทียบกับฉบับที่ผู้ขายถืออยู่ และมีสารบบแสดงรายการจดทะเบียนทั้งหมดของที่ดินแปลงนั้น ข้อมูลจากแผนที่ออนไลน์ไม่ว่าจะดูน่าเชื่อถือเพียงใดก็แทนขั้นตอนนี้ไม่ได้',
				en: 'Before any deposit or signature, take the documents to the land office responsible for the plot. It keeps the official counterpart of the deed to set against the copy the seller carries, plus the register of every transaction recorded on that land. No online map, however convincing, substitutes for that.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงมีอยู่', en: 'Why this page exists' }
		},
		{
			type: 'p',
			text: {
				th: 'LandsMaps ทำงานเป็นแผนที่แบบโต้ตอบ ผลของแต่ละแปลงเกิดขึ้นหลังจากผู้ใช้กรอกข้อมูลเข้าไปแล้วเท่านั้น หน้าผลลัพธ์แต่ละแปลงจึงไม่มีที่อยู่ถาวรให้เครื่องมือค้นหาเก็บไว้ล่วงหน้า นอกเหนือจากนั้น เราบอกได้ไม่มากไปกว่านี้ เพราะขณะนี้เว็บไซต์ปฏิเสธคำขอจากเครื่องที่เราใช้ตรวจสอบโดยตอบกลับเป็นหน้าบล็อกของไฟร์วอลล์ แม้จะเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบก็ตาม เราจึงอ่านไฟล์ robots.txt ซึ่งเป็นเอกสารเพียงฉบับเดียวที่ระบุนโยบายการเข้าเก็บข้อมูลต่อสาธารณะ ไม่ได้อีกต่อไป การตรวจครั้งก่อนพบว่าไฟล์นั้นเคยมีกฎเฉพาะสำหรับ Googlebot อยู่จริง แต่เรายืนยันไม่ได้ว่าปัจจุบันยังเป็นเช่นนั้นอยู่หรือไม่ และการที่เว็บไซต์ปฏิเสธเครื่องของเรา ก็ไม่ใช่หลักฐานว่าปฏิเสธ Googlebot ตัวจริงด้วย เพราะ Googlebot เข้ามาจากช่วงหมายเลขไอพีของกูเกิลเอง และพิสูจน์ตัวตนได้ด้วย reverse DNS ไม่ว่าจะอย่างไร คนจำนวนมากก็ยังไม่รู้ว่ากรมที่ดินเปิดเครื่องมือแบบนี้ให้ใช้ฟรีอยู่แล้ว หน้านี้จึงทำหน้าที่เป็นป้ายบอกทาง อธิบายด้วยคำที่คนใช้ค้นหาจริงว่าระบบทำอะไรได้และทำอะไรไม่ได้ แล้วส่งต่อไปยังที่อยู่ทางการโดยตรง ThaiGov.co เป็นเว็บไซต์รวบรวมข้อมูลอิสระ ไม่ได้สังกัดหรือเกี่ยวข้องกับหน่วยงานราชการใด ไม่รับข้อมูลส่วนบุคคล และไม่เรียกเก็บค่าใช้จ่ายจากผู้ใช้',
				en: 'LandsMaps behaves as an interactive map: a parcel result only comes into existence once someone has typed the details in, so there is no fixed address for a search engine to have collected in advance. Beyond that we can say less than we once could. The site now refuses our audit host outright — even a full desktop-browser request profile comes back as a firewall block page — and that includes robots.txt, the one document that states a crawling policy publicly and identically for every requester, which we can therefore no longer read. An earlier check did find Google-specific rules in that file, but we cannot confirm they still stand, and a refusal aimed at our own host is no evidence about the real Googlebot, which crawls from Google’s own IP ranges and verifies itself by reverse DNS. Either way, plenty of people still do not know the Department of Lands offers the tool for free. This page works as a signpost — it explains, in the words people genuinely search with, what the service can and cannot do, then hands them the official address. ThaiGov.co is an independent directory with no affiliation to any government body; it takes no personal data and charges nothing.'
			}
		}
	],
	crawl: {
		host: 'landsmaps.dol.go.th',
		verdict: 'waf-blocked',
		kind: 'waf-rule',
		status: 200,
		snippet: 'GET /robots.txt  ->  200, but the body is a block page\n(Imperva / Incapsula interstitial served with a 200 status)\n\nHeadless Chromium (real browser engine)\n  GET /  ->  200  (refused: Imperva / Incapsula block page)',
		checkedAt: '2026-08-28',
		note: {
			th: 'แม้จะเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ ทั้งส่วนหัวการระบุตัวตนเบราว์เซอร์ ภาษา และ fetch metadata ครบถ้วน เซิร์ฟเวอร์ก็ยังปฏิเสธคำขอด้วยหน้าบล็อกของระบบไฟร์วอลล์ และเมื่อเปิดด้วยเบราว์เซอร์ Chromium จริงที่ประมวลผลจาวาสคริปต์ครบถ้วน ก็ยังถูกปฏิเสธด้วยรหัส 200 เช่นกัน การปิดกั้นลักษณะนี้มักกรองทราฟฟิกจากศูนย์ข้อมูลเป็นวงกว้าง เราจึงยืนยันนโยบายที่แท้จริงของเว็บไซต์จากภายนอกไม่ได้ และไม่สรุปว่า Googlebot ตัวจริงถูกปิดกั้นด้วยหรือไม่',
			en: 'Even with a full browser request profile — complete client hints, language and fetch-metadata headers — the server refuses with a firewall block page. A real Chromium browser running the page’s JavaScript is refused in the same way, with 200. Blocks shaped like this usually filter datacentre traffic broadly, so the site’s real policy cannot be verified from outside, and we draw no conclusion about whether the genuine Googlebot is refused too.'
		}
	},
	priority: 87,
	updated: '2026-08-28'
};
