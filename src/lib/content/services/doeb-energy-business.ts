import type { Service } from '../types';

export const service: Service = {
	slug: 'doeb-energy-business',
	name: {
		th: 'กรมธุรกิจพลังงาน — มาตรฐานน้ำมันเชื้อเพลิงและความปลอดภัยสถานีบริการ',
		en: 'Department of Energy Business — Fuel Standards and Station Safety'
	},
	shortName: { th: 'กรมธุรกิจพลังงาน', en: 'Energy Business Department' },
	url: 'https://www.doeb.go.th/',
	agency: 'doeb',
	categories: ['environment', 'business'],
	summary: {
		th: 'รวมเรื่องที่ต้องรู้ก่อนติดต่อกรมธุรกิจพลังงาน ทั้งมาตรฐานคุณภาพน้ำมัน ใบอนุญาตสถานีบริการและคลังน้ำมัน ความปลอดภัยก๊าซ และวิธีร้องเรียนน้ำมันผิดสเปก',
		en: 'What to know before dealing with the Department of Energy Business: fuel quality standards, station and depot licences, gas safety, and reporting bad fuel.'
	},
	deck: {
		th: 'หน่วยงานในกระทรวงพลังงานที่กำหนดว่าน้ำมันในถังรถของคุณต้องมีคุณภาพแค่ไหน และปั๊มที่คุณเข้าไปเติมต้องปลอดภัยตามกฎอะไรบ้าง',
		en: 'The Ministry of Energy department that decides how good the fuel in your tank must be, and what safety rules the station pumping it has to meet.'
	},
	keywords: {
		th: [
			'กรมธุรกิจพลังงาน',
			'ธพ.',
			'เปิดปั๊มน้ำมันต้องขออนุญาต',
			'ใบอนุญาตสถานีบริการน้ำมัน',
			'กิจการควบคุมน้ำมันเชื้อเพลิง',
			'มาตรฐานน้ำมันเชื้อเพลิง',
			'ร้องเรียนปั๊มน้ำมัน',
			'น้ำมันไม่ได้คุณภาพ',
			'เติมน้ำมันแล้วรถเสีย',
			'เติมน้ำมันไม่เต็มลิตร',
			'ขออนุญาตปั๊มแก๊ส LPG',
			'ขออนุญาตคลังน้ำมัน',
			'ถังเก็บน้ำมันในโรงงาน'
		],
		en: [
			'Department of Energy Business Thailand',
			'DOEB Thailand',
			'Thailand fuel quality standards',
			'petrol station licence Thailand',
			'LPG station permit Thailand',
			'fuel storage safety Thailand',
			'report off-spec fuel Thailand'
		]
	},
	features: [
		{
			icon: 'gavel',
			title: { th: 'ผู้กำกับดูแลธุรกิจพลังงานปลายน้ำ', en: 'Regulator of the downstream fuel trade' },
			text: {
				th: 'ดูแลช่วงตั้งแต่น้ำมันและก๊าซออกจากโรงกลั่นหรือถูกนำเข้า จนถึงหัวจ่ายในปั๊มและถังก๊าซหุงต้มในครัวเรือน',
				en: 'Covers the chain from the refinery gate or the import terminal all the way to the pump nozzle and the cooking-gas cylinder in a kitchen.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'กำหนดลักษณะและคุณภาพของเชื้อเพลิง', en: 'Sets the specification for every fuel grade' },
			text: {
				th: 'ออกประกาศกำหนดสเปกของน้ำมันเบนซิน แก๊สโซฮอล์ ดีเซลหมุนเร็ว น้ำมันเตา และก๊าซปิโตรเลียมเหลว ที่ผู้ค้าทุกรายต้องทำตาม',
				en: 'Issues the announcements that define petrol, gasohol, high-speed diesel, fuel oil and LPG — binding on every trader.'
			}
		},
		{
			icon: 'building',
			title: { th: 'ออกใบอนุญาตสถานีบริการและคลังน้ำมัน', en: 'Licenses stations, depots and storage sites' },
			text: {
				th: 'กิจการที่เก็บหรือจำหน่ายเชื้อเพลิงเกินเกณฑ์ที่กฎหมายกำหนด ต้องแจ้งหรือขอใบอนุญาตก่อนเริ่มประกอบกิจการ',
				en: 'Anyone storing or selling fuel above the legal thresholds must notify the authority or hold a licence before opening.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'วางกฎความปลอดภัยในการเก็บและขนส่ง', en: 'Writes the storage and transport safety rules' },
			text: {
				th: 'ครอบคลุมระยะปลอดภัย ถังเก็บ ระบบระบายไอ อุปกรณ์ดับเพลิง รวมถึงการทดสอบถังและรถขนส่งเชื้อเพลิงตามรอบเวลา',
				en: 'Safety distances, tanks, vapour venting, firefighting equipment, and the periodic testing of cylinders and tanker vehicles.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'รับเรื่องร้องเรียนน้ำมันผิดสเปก', en: 'Takes complaints about off-spec fuel' },
			text: {
				th: 'สุ่มเก็บตัวอย่างน้ำมันจากสถานีบริการไปตรวจในห้องปฏิบัติการ และดำเนินการกับผู้ค้าที่จำหน่ายเชื้อเพลิงไม่ได้มาตรฐาน',
				en: 'Samples fuel from stations for laboratory testing and acts against traders selling product that fails the specification.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'ติดตามปริมาณและการสำรองเชื้อเพลิง', en: 'Tracks fuel volumes and legal reserves' },
			text: {
				th: 'รวบรวมข้อมูลการผลิต นำเข้า ส่งออก และจำหน่ายเชื้อเพลิง พร้อมกำกับให้ผู้ค้ารายใหญ่สำรองน้ำมันตามที่กฎหมายกำหนด',
				en: 'Collects production, import, export and sales data, and holds large traders to the statutory stockholding obligation.'
			}
		}
	],
	steps: [
		{
			title: { th: 'แยกก่อนว่าเรื่องของคุณเป็นเรื่องแบบไหน', en: 'Work out which kind of matter you have' },
			text: {
				th: 'งานของกรมแบ่งกว้าง ๆ เป็นสามกลุ่ม คือ ใบอนุญาตและการแจ้งประกอบกิจการ มาตรฐานคุณภาพเชื้อเพลิง และความปลอดภัยของสถานที่หรืออุปกรณ์ การรู้ว่าเรื่องของคุณอยู่กลุ่มไหนช่วยให้หาช่องทางติดต่อได้เร็วขึ้นมาก',
				en: 'The department’s work falls into three broad groups: licensing and notification, fuel quality standards, and the safety of premises and equipment. Knowing which group your matter belongs to shortens the search for the right contact considerably.'
			}
		},
		{
			title: { th: 'ตรวจว่ากิจการของคุณเข้าข่ายควบคุมประเภทใด', en: 'Check which control category your operation falls into' },
			text: {
				th: 'กฎหมายว่าด้วยการควบคุมน้ำมันเชื้อเพลิงแบ่งกิจการเป็นสามประเภทตามชนิดและปริมาณเชื้อเพลิงที่เก็บหรือจำหน่าย แต่ละประเภทมีภาระต่างกัน ตั้งแต่ไม่ต้องขออนุญาต ไปจนถึงต้องได้รับใบอนุญาตก่อนก่อสร้าง',
				en: 'The fuel-control law sorts operations into three categories according to the type and volume of fuel stored or sold. The obligations range from none at all to a licence that must be in hand before construction starts.'
			}
		},
		{
			title: { th: 'หาให้เจอว่าใครคือผู้อนุญาตของคุณ', en: 'Identify who your licensing authority actually is' },
			text: {
				th: 'ผู้อนุญาตไม่ได้เป็นกรมธุรกิจพลังงานเสมอไป หลายกรณีอำนาจอนุญาตอยู่ที่ราชการส่วนท้องถิ่นในพื้นที่ที่ตั้งกิจการ การสอบถามกับท้องถิ่นก่อนยื่นเอกสารช่วยประหยัดเวลาได้มาก',
				en: 'It is not always the department itself. In many cases the power to license sits with the local administrative authority where the site is located, so asking there before you file anything can save weeks.'
			}
		},
		{
			title: { th: 'เตรียมแบบแปลนและเอกสารทางเทคนิคให้ครบ', en: 'Assemble the drawings and technical paperwork' },
			text: {
				th: 'คำขอสำหรับสถานีบริการ คลังน้ำมัน หรือสถานที่บรรจุก๊าซ ต้องแนบแผนผังบริเวณ แบบก่อสร้าง และรายการคำนวณที่รับรองโดยวิศวกรผู้มีใบอนุญาตประกอบวิชาชีพ พร้อมเอกสารสิทธิ์ในที่ดินและเอกสารนิติบุคคล',
				en: 'An application for a station, depot or gas-filling site needs a site layout, construction drawings and calculations certified by a licensed engineer, together with proof of land rights and company documents.'
			}
		},
		{
			title: { th: 'ยื่นคำขอ รับการตรวจสถานที่ แล้ววางแผนต่ออายุ', en: 'File, receive the inspection, then plan for renewal' },
			text: {
				th: 'หลังยื่นคำขอจะมีการตรวจเอกสารและตรวจสถานที่จริงก่อนออกใบอนุญาต เมื่อเปิดดำเนินการแล้วยังมีหน้าที่ต่อเนื่อง ทั้งการต่ออายุใบอนุญาต การแจ้งเมื่อมีการเปลี่ยนแปลงสาระสำคัญ และการทดสอบถังหรืออุปกรณ์ตามรอบเวลา',
				en: 'Your papers are reviewed and the site inspected before a licence is issued. Once you are trading the duties continue: renewals, notifying material changes, and periodic testing of tanks and equipment.'
			}
		}
	],
	faq: [
		{
			q: { th: 'กรมธุรกิจพลังงานดูแลอะไร และไม่ได้ดูแลอะไร', en: 'What does the department cover — and what does it not?' },
			a: {
				th: 'กรมดูแลคุณภาพเชื้อเพลิง ใบอนุญาตและความปลอดภัยของสถานที่ที่เก็บหรือจำหน่ายเชื้อเพลิง รวมถึงข้อมูลปริมาณและการสำรองน้ำมัน แต่ไม่ได้เป็นผู้กำหนดราคาขายปลีกหน้าปั๊ม เรื่องโครงสร้างราคาและกองทุนน้ำมันเชื้อเพลิงอยู่ในความรับผิดชอบของหน่วยงานอื่นในกระทรวงพลังงาน',
				en: 'It covers fuel quality, the licensing and safety of premises that store or sell fuel, and volume and reserve data. It does not set pump prices — price structure and the oil fund sit with other bodies inside the Ministry of Energy. A question about pricing or margins is a different matter entirely.'
			}
		},
		{
			q: { th: 'อยากเปิดปั๊มน้ำมัน ต้องเริ่มขออนุญาตจากตรงไหน', en: 'I want to open a petrol station — where do I start?' },
			a: {
				th: 'สถานีบริการน้ำมันโดยทั่วไปเป็นกิจการควบคุมที่ต้องได้รับใบอนุญาตก่อนก่อสร้าง ไม่ใช่ขออนุญาตหลังสร้างเสร็จ ขั้นแรกให้ตรวจสอบผังเมืองและข้อกำหนดการใช้ที่ดินของแปลงนั้นก่อน แล้วจึงติดต่อผู้อนุญาตในพื้นที่ ซึ่งหลายกรณีคือราชการส่วนท้องถิ่น เพื่อขอรายการเอกสารและแบบที่ต้องใช้ฉบับล่าสุด',
				en: 'A service station is normally a controlled operation that must be licensed before construction begins, not after. Start by checking the town-planning zoning for the plot, then approach the licensing authority for that area — often the local administration — for the current list of required documents and drawings.'
			}
		},
		{
			q: { th: 'สงสัยว่าปั๊มขายน้ำมันไม่ได้คุณภาพ ร้องเรียนที่ไหน', en: 'I suspect a station is selling bad fuel. Who do I tell?' },
			a: {
				th: 'เรื่องคุณภาพหรือสเปกของเชื้อเพลิงเป็นงานของกรมธุรกิจพลังงานโดยตรง ให้แจ้งผ่านช่องทางรับเรื่องร้องเรียนบนเว็บไซต์ทางการของกรม พร้อมระบุชื่อและที่ตั้งสถานีบริการ วันเวลาที่เติม ชนิดน้ำมัน และหมายเลขหัวจ่ายถ้าจำได้ ยิ่งข้อมูลละเอียด การสุ่มเก็บตัวอย่างไปตรวจก็ยิ่งตรงจุด',
				en: 'Fuel quality is squarely the department’s job. Report it through the official complaint channel on its website, giving the station’s name and location, the date and time you filled up, the grade, and the pump number if you noted it. The more precise the details, the better targeted the sampling visit.'
			}
		},
		{
			q: { th: 'เติมน้ำมันแล้วรู้สึกว่าไม่เต็มลิตร ต้องแจ้งใคร', en: 'The pump seems to be short-measuring. Same department?' },
			a: {
				th: 'ไม่ใช่หน่วยงานเดียวกัน ความเที่ยงตรงของมาตรวัดที่หัวจ่ายคือเรื่องชั่งตวงวัด ซึ่งอยู่ในความดูแลของกรมการค้าภายใน กระทรวงพาณิชย์ ส่วนกรมธุรกิจพลังงานดูเรื่องคุณภาพของเนื้อน้ำมัน จำง่าย ๆ ว่า “ได้ของไม่ดี” แจ้งกรมธุรกิจพลังงาน แต่ “ได้ของไม่ครบ” แจ้งฝ่ายชั่งตวงวัด',
				en: 'No — the accuracy of the dispenser is a weights-and-measures matter, handled by the Department of Internal Trade under the Ministry of Commerce. The Department of Energy Business looks after what is in the fuel, not how much of it came out. Bad product goes to one; short measure goes to the other.'
			}
		},
		{
			q: { th: 'เติมน้ำมันแล้วรถมีอาการผิดปกติทันที ควรทำอย่างไร', en: 'My car started running badly right after filling up. What now?' },
			a: {
				th: 'เก็บหลักฐานไว้ก่อนเป็นอันดับแรก ทั้งใบเสร็จหรือสลิป รูปถ่ายหัวจ่าย และวันเวลาที่เติม อย่าเพิ่งถ่ายน้ำมันในถังทิ้ง เพราะน้ำมันที่ค้างอยู่คือตัวอย่างสำคัญที่ใช้ตรวจได้ จากนั้นแจ้งสถานีบริการเป็นลายลักษณ์อักษรและแจ้งกรมคู่ขนานกันไป หากมีผู้ใช้รถรายอื่นเจอปัญหาเดียวกันในวันเดียวกัน ให้ระบุไปด้วย',
				en: 'Preserve the evidence first: the receipt, a photo of the pump, and the exact date and time. Do not drain the tank yet — the fuel still in it is the sample that can be tested. Then notify the station in writing and file with the department in parallel. If other drivers hit the same trouble on the same day, say so; it points at the station’s storage rather than at your car.'
			}
		},
		{
			q: { th: 'ร้านแก๊สหุงต้มและปั๊ม LPG ต้องขออนุญาตด้วยไหม', en: 'Do LPG shops and stations need a licence too?' },
			a: {
				th: 'ต้องขอเช่นกัน กิจการเกี่ยวกับก๊าซปิโตรเลียมเหลว ทั้งสถานีบริการ สถานที่บรรจุก๊าซ และร้านจำหน่ายที่เก็บก๊าซเกินเกณฑ์ที่กำหนด อยู่ในข่ายกิจการควบคุมทั้งหมด นอกจากใบอนุญาตแล้วยังมีข้อกำหนดเรื่องระยะปลอดภัย การจัดวางถัง และการทดสอบถังตามรอบเวลา ร้านเล็กที่เก็บก๊าซปริมาณน้อยอาจอยู่ในชั้นที่เบากว่า แต่ก็ยังต้องทำตามหลักเกณฑ์ความปลอดภัย',
				en: 'Yes. LPG stations, filling plants and retail shops holding more than the prescribed quantity are all controlled operations. Beyond the licence there are rules on safety distances, how cylinders are arranged, and periodic cylinder testing. A small shop holding little gas may sit in a lighter tier, but the safety requirements still apply.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าประกาศหรือคนที่อ้างชื่อกรมเป็นของจริง', en: 'How do I know an announcement or a caller is genuinely from the department?' },
			a: {
				th: 'ประกาศฉบับจริงเผยแพร่บนเว็บไซต์ของกรมภายใต้โดเมน doeb.go.th และฉบับที่มีผลบังคับจะประกาศในราชกิจจานุเบกษาด้วย ให้ระวังผู้ที่ติดต่อมาเสนอ “เดินเรื่องใบอนุญาตให้ผ่านแน่นอน” โดยขอค่าดำเนินการเป็นเงินสดหรือโอนเข้าบัญชีส่วนบุคคล ค่าธรรมเนียมของทางราชการมีอัตราที่กำหนดไว้และมีใบเสร็จเสมอ หากไม่แน่ใจให้ตรวจสอบกับผู้อนุญาตในพื้นที่ก่อนจ่ายเงิน',
				en: 'Genuine announcements are published on the department’s site under the doeb.go.th domain, and instruments in force also appear in the Royal Gazette. Be wary of anyone offering to “guarantee” a licence for a cash fee or a transfer to a personal account. Official fees are set by law and always come with a receipt — if in doubt, check with the local licensing authority before paying anything.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'กรมธุรกิจพลังงานคือใคร และดูแลอะไร', en: 'What the Department of Energy Business does' }
		},
		{
			type: 'p',
			text: {
				th: 'กรมธุรกิจพลังงาน หรือ ธพ. เป็นหน่วยงานในสังกัดกระทรวงพลังงาน ทำหน้าที่กำกับดูแลธุรกิจพลังงานช่วงปลายน้ำ นับตั้งแต่น้ำมันและก๊าซออกจากโรงกลั่นหรือถูกนำเข้ามา ไปจนถึงหัวจ่ายที่ผู้ใช้รถเติมและถังก๊าซที่วางอยู่ข้างเตาในครัว เครื่องมือหลักของกรมมีสองอย่าง อย่างแรกคือประกาศกำหนดลักษณะและคุณภาพของเชื้อเพลิงแต่ละชนิด ซึ่งบอกว่าน้ำมันที่ขายในประเทศต้องมีคุณสมบัติทางเคมีอย่างไรจึงจะถูกกฎหมาย อย่างที่สองคือระบบใบอนุญาตและการตรวจสถานที่ ซึ่งกำหนดว่าใครเก็บเชื้อเพลิงได้เท่าไร เก็บอย่างไร และต้องมีมาตรการความปลอดภัยระดับไหน สองเรื่องนี้เชื่อมกันอยู่ เพราะเชื้อเพลิงผิดสเปกกับสถานที่ที่ไม่ปลอดภัย ต่างก็จบลงที่ความเสียหายของคนกลุ่มเดียวกัน',
				en: 'The Department of Energy Business — DOEB — sits under the Ministry of Energy and regulates the downstream end of the fuel trade: from the moment petrol or gas leaves a refinery or clears an import terminal, through to the nozzle a driver holds and the cylinder standing beside a kitchen stove. It works through two instruments. The first is the set of announcements defining the characteristics and quality of each fuel — the chemistry a product must meet to be sold legally. The second is licensing and site inspection, which governs who may store fuel, how much, in what manner and with which safety measures. The two are linked: off-spec fuel and an unsafe forecourt end up harming the same people.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ใครบ้างที่ต้องเกี่ยวข้องกับกรมนี้', en: 'Who ends up dealing with it' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ผู้ลงทุนที่จะเปิดสถานีบริการน้ำมันหรือปั๊มก๊าซ ซึ่งต้องเข้าสู่กระบวนการอนุญาตตั้งแต่ขั้นเลือกที่ดินและออกแบบ',
					en: 'Anyone opening a petrol or gas station — the licensing process begins at the land-selection and design stage, well before the first pile goes in.'
				},
				{
					th: 'ผู้ค้าน้ำมันและผู้นำเข้าเชื้อเพลิง ที่ต้องขอเป็นผู้ค้าตามประเภทที่กฎหมายกำหนด และรายงานปริมาณให้กรมเป็นระยะ',
					en: 'Fuel traders and importers, who must register in the trading class the law assigns them and report their volumes to the department at regular intervals.'
				},
				{
					th: 'เจ้าของคลังน้ำมัน สถานที่เก็บรักษา และผู้ขนส่งเชื้อเพลิงทางรถหรือทางท่อ',
					en: 'Depot owners, operators of bulk storage sites, and those moving fuel by tanker or by pipeline.'
				},
				{
					th: 'ผู้ประกอบกิจการก๊าซปิโตรเลียมเหลว ทั้งสถานที่บรรจุก๊าซ ร้านจำหน่าย และผู้ทดสอบและตรวจสอบถัง',
					en: 'LPG businesses — filling plants, retail outlets, and the cylinder testers and inspectors who work for them.'
				},
				{
					th: 'โรงงาน ฟาร์ม และไซต์ก่อสร้างที่มีถังเก็บน้ำมันไว้ใช้เอง ซึ่งหลายรายไม่รู้ว่าปริมาณที่เก็บอยู่เข้าข่ายต้องแจ้งหรือขออนุญาต',
					en: 'Factories, farms and construction sites keeping fuel for their own use — many of whom do not realise the quantity on site already triggers a duty to notify or to hold a licence.'
				},
				{
					th: 'ผู้ใช้รถที่ต้องการร้องเรียนสถานีบริการซึ่งสงสัยว่าจำหน่ายเชื้อเพลิงไม่ได้มาตรฐาน',
					en: 'Drivers who want to report a station they suspect of selling fuel that does not meet the standard.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'กิจการควบคุมสามประเภท ต่างกันตรงไหน', en: 'The three control categories, and how they differ' }
		},
		{
			type: 'p',
			text: {
				th: 'กฎหมายว่าด้วยการควบคุมน้ำมันเชื้อเพลิงไม่ได้บังคับทุกคนเท่ากัน แต่แบ่งกิจการเป็นสามประเภทตามชนิดและปริมาณเชื้อเพลิงที่เก็บหรือจำหน่าย ยิ่งปริมาณมากและความเสี่ยงสูง ภาระตามกฎหมายก็ยิ่งหนักขึ้นเป็นลำดับ เกณฑ์ปริมาณที่ใช้แบ่งประเภทกำหนดไว้ในกฎกระทรวงและมีการปรับปรุงเป็นระยะ จึงควรตรวจสอบตัวเลขจากฉบับล่าสุดก่อนตัดสินใจ',
				en: 'The fuel-control law does not treat everyone alike. It sorts operations into three categories by the type and volume of fuel held or sold, and the legal burden rises with the volume and the risk. The thresholds themselves live in ministerial regulations and are revised from time to time, so check the current figures before relying on them.'
			}
		},
		{
			type: 'table',
			caption: {
				th: 'ภาพรวมการแบ่งประเภทกิจการควบคุมตามกฎหมายว่าด้วยการควบคุมน้ำมันเชื้อเพลิง',
				en: 'How the fuel-control law tiers an operation'
			},
			head: [
				{ th: 'ประเภท', en: 'Category' },
				{ th: 'ลักษณะโดยย่อ', en: 'Roughly what it covers' },
				{ th: 'ต้องทำอะไรก่อนเริ่ม', en: 'What you must do first' }
			],
			rows: [
				[
					{ th: 'ประเภทที่ 1', en: 'Category 1' },
					{ th: 'เก็บหรือจำหน่ายเชื้อเพลิงปริมาณน้อย ความเสี่ยงต่ำ', en: 'Small quantities, lower risk' },
					{ th: 'ไม่ต้องแจ้งและไม่ต้องขออนุญาต แต่ยังต้องปฏิบัติตามหลักเกณฑ์ความปลอดภัยที่กำหนด', en: 'No notification or licence, but the prescribed safety rules still bind you' }
				],
				[
					{ th: 'ประเภทที่ 2', en: 'Category 2' },
					{ th: 'ปริมาณปานกลาง เกินเกณฑ์ประเภทที่ 1 แต่ยังไม่ถึงขั้นต้องมีใบอนุญาต', en: 'Mid-range volumes — above category 1, below the licence threshold' },
					{ th: 'ต้องแจ้งต่อผู้อนุญาตก่อนประกอบกิจการ', en: 'Notify the licensing authority before you start' }
				],
				[
					{ th: 'ประเภทที่ 3', en: 'Category 3' },
					{ th: 'กิจการขนาดใหญ่ เช่น สถานีบริการ คลังน้ำมัน สถานที่บรรจุก๊าซ', en: 'Large operations: service stations, depots, gas-filling plants' },
					{ th: 'ต้องได้รับใบอนุญาตก่อนก่อสร้างและก่อนเปิดดำเนินการ พร้อมรับการตรวจสอบตามรอบ', en: 'Hold a licence before building and before opening, and accept periodic inspection' }
				]
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'อย่าเพิ่งลงเสาเข็ม', en: 'Do not break ground first' },
			text: {
				th: 'ความผิดพลาดที่ราคาแพงที่สุดของผู้ประกอบการรายใหม่ คือการสร้างก่อนแล้วค่อยไปขออนุญาต เพราะสิ่งที่สร้างไปแล้วอาจไม่ผ่านเกณฑ์ระยะปลอดภัยหรือผังบริเวณ และการแก้ที่หน้างานมีต้นทุนสูงกว่าการแก้แบบมาก อีกจุดที่พลาดกันบ่อยคือเข้าใจว่าผู้อนุญาตต้องเป็นกรมเสมอ ทั้งที่หลายกรณีอำนาจอยู่กับราชการส่วนท้องถิ่นในพื้นที่',
				en: 'The costliest mistake a newcomer makes is building first and applying afterwards: a finished forecourt may fail on safety distances or site layout, and fixing concrete costs far more than fixing a drawing. The second common error is assuming the department is always the licensing authority, when in many cases that power rests with the local administration.'
			}
		},
		{
			type: 'h2',
			text: { th: 'คุณภาพน้ำมันที่หัวจ่าย และเรื่องร้องเรียน', en: 'Fuel quality at the pump, and how complaints work' }
		},
		{
			type: 'p',
			text: {
				th: 'ประกาศกำหนดลักษณะและคุณภาพของเชื้อเพลิงเป็นเอกสารที่ผู้ใช้รถแทบไม่เคยเปิดอ่าน แต่มีผลกับทุกคนที่เติมน้ำมัน เพราะเป็นตัวกำหนดค่าที่ยอมรับได้ของน้ำมันแต่ละชนิด ตั้งแต่ค่าออกเทน สัดส่วนเอทานอลหรือไบโอดีเซล ไปจนถึงปริมาณกำมะถันซึ่งเชื่อมโดยตรงกับมลพิษทางอากาศและฝุ่นละอองขนาดเล็ก การยกระดับข้อกำหนดเรื่องกำมะถันจึงเป็นเครื่องมือด้านสิ่งแวดล้อมที่ใช้ได้จริง ไม่ใช่แค่เรื่องเทคนิคของโรงกลั่น ส่วนตัวเลขที่บังคับใช้อยู่ในปัจจุบันควรดูจากประกาศฉบับล่าสุดบนเว็บไซต์ทางการ',
				en: 'The quality announcements are documents almost no motorist ever opens, yet they touch everyone who fills a tank. They fix the acceptable values for each grade — octane, the ethanol or biodiesel share, and the sulphur content that feeds directly into air pollution and fine particulate matter. Tightening the sulphur limit is a real environmental lever, not merely a refinery technicality. For the values in force today, read the most recent announcement on the official site.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'คุณภาพกับปริมาณ อยู่คนละหน่วยงาน', en: 'Quality and quantity are two different agencies' },
			text: {
				th: 'ถ้าปัญหาคือเนื้อน้ำมันไม่ได้มาตรฐาน เช่น สงสัยว่ามีการปนหรือคุณสมบัติไม่ตรงสเปก เรื่องนั้นอยู่ที่กรมธุรกิจพลังงาน แต่ถ้าปัญหาคือเติมแล้วได้ปริมาณไม่ครบตามที่มาตรวัดแสดง นั่นเป็นเรื่องชั่งตวงวัด ซึ่งอยู่ในความดูแลของกรมการค้าภายใน กระทรวงพาณิชย์ การแจ้งถูกหน่วยงานตั้งแต่แรกทำให้เรื่องเดินเร็วขึ้นมาก',
				en: 'If the problem is what is in the fuel — contamination, or properties that miss the specification — that is the Department of Energy Business. If the problem is that you did not receive the litres the meter claimed, that is metrology, handled by the Department of Internal Trade under the Ministry of Commerce. Sending it to the right desk first is the single biggest time-saver.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ความปลอดภัยในการเก็บขนส่ง และปริมาณสำรอง', en: 'Storage and transport safety, and the national reserve' }
		},
		{
			type: 'p',
			text: {
				th: 'อีกครึ่งหนึ่งของงานกรมคือเรื่องที่มองไม่เห็นจากหน้าปั๊ม ข้อกำหนดความปลอดภัยครอบคลุมตั้งแต่ระยะห่างระหว่างถังกับอาคารข้างเคียง ชนิดและการติดตั้งถังเก็บ ระบบระบายไอ อุปกรณ์ดับเพลิง ไปจนถึงการทดสอบถังก๊าซและรถขนส่งเชื้อเพลิงตามรอบเวลา อีกด้านหนึ่งคือความมั่นคงด้านเชื้อเพลิง ผู้ค้ารายใหญ่มีหน้าที่สำรองน้ำมันตามอัตราที่กฎหมายกำหนด และรายงานปริมาณการผลิต นำเข้า ส่งออก และจำหน่ายให้กรมทราบ อัตราสำรองเป็นเรื่องนโยบายที่ปรับได้ จึงไม่ควรอ้างอิงตัวเลขจากแหล่งที่ไม่ใช่ประกาศทางการ',
				en: 'The other half of the department’s work is invisible from the forecourt. The safety rules reach from the distance between a tank and the building next door, through tank types and installation, vapour venting and firefighting equipment, to the periodic testing of cylinders and tanker vehicles. Alongside that sits security of supply: large traders must hold reserve stock at the rate the law prescribes and report their production, imports, exports and sales, so the country can see how much fuel is actually in the system. That rate is a policy setting and can change, so never quote a figure from anywhere but an official announcement.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงต้องมีอยู่', en: 'Why this page has to exist' }
		},
		{
			type: 'p',
			text: {
				th: 'เว็บไซต์ของกรมธุรกิจพลังงานปิดกั้นเครื่องมือค้นหาทั้งเว็บไซต์ ประกาศเรื่องคุณภาพน้ำมัน ขั้นตอนขอใบอนุญาต และหลักเกณฑ์ความปลอดภัย ซึ่งล้วนเป็นข้อมูลที่กรมตั้งใจเผยแพร่ จึงไม่ปรากฏในผลการค้นหาเลย คนที่ได้รับผลกระทบจริงคือเจ้าของที่ดินที่กำลังคิดจะเปิดปั๊ม เจ้าของโรงงานที่ไม่แน่ใจว่าถังน้ำมันในโรงงานต้องแจ้งหรือไม่ และผู้ใช้รถที่เพิ่งเติมน้ำมันแล้วรถมีอาการ ทุกคนพิมพ์คำถามเป็นภาษาไทยลงกูเกิล แล้วได้กระทู้เก่าในเว็บบอร์ด โพสต์รับเดินเรื่องใบอนุญาต หรือบทความที่คัดลอกต่อ ๆ กันมา แทนที่จะเป็นหน้าเว็บของหน่วยงานที่เขียนกฎเหล่านั้นเอง',
				en: 'The department’s website shuts search engines out of the entire site. Its fuel-quality announcements, licence procedures and safety criteria — material it publishes deliberately — therefore never surface in search results at all. The people this actually hurts are the landowner weighing up a filling station, the factory manager unsure whether the tank in the yard needs to be notified, and the driver whose car started misbehaving an hour after a fill-up. Each of them types a question into Google in Thai and gets back an old forum thread, an advert from a licence fixer, or an article copied from another article, rather than a page written by the body that made the rules.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'หน้านี้จึงทำหน้าที่เป็นป้ายบอกทางที่ค้นเจอได้ อธิบายขอบเขตงานของกรมด้วยคำที่คนใช้จริง แยกให้ชัดว่าเรื่องไหนของกรมนี้และเรื่องไหนของหน่วยงานอื่น แล้วส่งต่อไปยังเว็บไซต์ทางการเพื่ออ่านตัวบทฉบับปัจจุบัน ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดกรมธุรกิจพลังงาน ไม่รับคำขออนุญาต ไม่รับเรื่องร้องเรียน และไม่รับชำระค่าธรรมเนียมใด ๆ',
				en: 'So this page stands in as the signpost that can be found: it explains the department’s remit in the words people actually use, separates what belongs to it from what belongs elsewhere, and hands you on to the official site for the current text. ThaiGov.co is an independent directory with no affiliation to the department. We take no applications, no complaints and no fees.'
			}
		}
	],
	crawl: {
		host: 'www.doeb.go.th',
		verdict: 'blocked',
		kind: 'robots-disallow-all',
		status: 200,
		snippet: 'User-agent: *\nDisallow: /',
		checkedAt: '2026-08-28',
		note: {
			th: 'ไฟล์ robots.txt ของเว็บไซต์นี้สั่งห้ามเครื่องมือค้นหาทุกตัวเก็บข้อมูลทุกหน้า และไม่มีข้อยกเว้นให้ Googlebot นี่เป็นหลักฐานที่หนักแน่นที่สุด เพราะไฟล์ robots.txt เป็นสาธารณะและให้ผลเหมือนกันกับทุกคนที่เรียกดู ใครก็ตรวจสอบซ้ำได้',
			en: 'This site’s robots.txt instructs every crawler not to fetch any page, with no exception for Googlebot. This is the strongest form of evidence available, because robots.txt is public and identical for every requester — anyone can reproduce the check.'
		}
	},
	priority: 74,
	updated: '2026-08-27'
};
