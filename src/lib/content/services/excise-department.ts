import type { Service } from '../types';

export const service: Service = {
	slug: 'excise-department',
	name: {
		th: 'กรมสรรพสามิต — ภาษีสรรพสามิตและบริการออนไลน์',
		en: 'Thai Excise Department — Excise Tax and Online Services'
	},
	shortName: { th: 'กรมสรรพสามิต', en: 'Excise Department' },
	url: 'https://www.excise.go.th/',
	agency: 'excise',
	categories: ['tax-finance'],
	summary: {
		th: 'ภาษีสรรพสามิตคืออะไร เก็บจากสินค้าและบริการใดบ้าง ใครต้องจดทะเบียน ยื่นแบบ และขอใบอนุญาต พร้อมลิงก์ตรงไปยังเว็บไซต์ทางการของกรมสรรพสามิต กระทรวงการคลัง',
		en: 'What Thailand’s excise tax covers, which goods and services it applies to, and who must register, file and hold a licence — plus a link to the official site.'
	},
	deck: {
		th: 'คู่มือฉบับเข้าใจง่ายว่าภาษีสรรพสามิตคืออะไร ใครต้องเข้ามาเกี่ยวข้องจริง ๆ และเว็บไซต์ของกรมสรรพสามิตมีอะไรให้ใช้บ้าง',
		en: 'A plain-language guide to what excise tax is, who actually has to deal with it, and what the Excise Department’s website offers.'
	},
	keywords: {
		th: [
			'ภาษีสรรพสามิต',
			'กรมสรรพสามิต',
			'ภาษีสรรพสามิตคืออะไร',
			'ภาษีความหวาน',
			'ภาษีน้ำตาลเครื่องดื่ม',
			'ภาษีเหล้า',
			'ภาษีบุหรี่',
			'ภาษีสรรพสามิตรถยนต์',
			'ภาษีน้ำมัน',
			'ใบอนุญาตขายสุรา',
			'ขอใบอนุญาตขายเหล้า',
			'อัตราภาษีสรรพสามิต',
			'ยื่นภาษีสรรพสามิตออนไลน์',
			'สำนักงานสรรพสามิตพื้นที่'
		],
		en: [
			'Thai excise tax',
			'Excise Department Thailand',
			'excise tax rates Thailand',
			'liquor licence Thailand',
			'sugar tax Thailand',
			'car excise tax Thailand',
			'excise tax filing Thailand'
		]
	},
	features: [
		{
			icon: 'coins',
			title: { th: 'ภาษีที่เก็บจากสินค้าเฉพาะกลุ่ม', en: 'A tax on specific goods only' },
			text: {
				th: 'ไม่ใช่ภาษีที่เก็บจากรายได้หรือจากการซื้อขายทั่วไป แต่เก็บจากสินค้าและบริการที่กฎหมายระบุไว้เป็นรายการ เช่น น้ำมัน รถยนต์ เครื่องดื่ม สุรา และยาสูบ',
				en: 'Not a tax on income or on general sales, but on a defined list of goods and services — fuel, vehicles, beverages, alcohol and tobacco among them.'
			}
		},
		{
			icon: 'receipt',
			title: { th: 'ยื่นแบบและชำระภาษีทางอินเทอร์เน็ต', en: 'File and pay online' },
			text: {
				th: 'ผู้ประกอบการที่จดทะเบียนไว้แล้วสามารถยื่นแบบรายการภาษีและชำระเงินผ่านระบบอิเล็กทรอนิกส์ แทนการเดินทางไปยื่นเอกสารที่สำนักงาน',
				en: 'Registered operators can submit returns and settle payment electronically instead of carrying paperwork to a district office.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'ขอและต่ออายุใบอนุญาต', en: 'Licence applications and renewals' },
			text: {
				th: 'ร้านค้า ร้านอาหาร และโรงแรมที่ขายสุราหรือยาสูบต้องมีใบอนุญาตจากกรมสรรพสามิต และต้องต่ออายุตามรอบที่กฎหมายกำหนด',
				en: 'Shops, restaurants and hotels selling alcohol or tobacco need an Excise Department licence, renewed on the cycle the law sets.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'ประกาศพิกัดและอัตราภาษี', en: 'Rate and classification announcements' },
			text: {
				th: 'เว็บไซต์เป็นแหล่งเผยแพร่พิกัดอัตราภาษีของสินค้าแต่ละกลุ่ม ซึ่งเป็นข้อมูลที่เปลี่ยนแปลงได้และควรอ่านจากต้นทางเสมอ',
				en: 'The site publishes the tariff classifications and rates for each product group — figures that change, and are worth reading at source.'
			}
		},
		{
			icon: 'gavel',
			title: { th: 'ร่างกฎหมายและการรับฟังความคิดเห็น', en: 'Draft rules and public consultation' },
			text: {
				th: 'กรมเปิดรับฟังความคิดเห็นต่อร่างกฎหมายลำดับรองก่อนประกาศใช้ ผู้ประกอบการที่ได้รับผลกระทบสามารถติดตามและแสดงความเห็นได้',
				en: 'The department consults on subordinate legislation before it takes effect, so affected businesses can follow and comment.'
			}
		},
		{
			icon: 'building',
			title: { th: 'สำนักงานพื้นที่ทั่วประเทศ', en: 'Area offices nationwide' },
			text: {
				th: 'งานจดทะเบียน ใบอนุญาต และการตรวจสอบส่วนใหญ่ทำผ่านสำนักงานสรรพสามิตภาคและสำนักงานสรรพสามิตพื้นที่ที่ดูแลสถานประกอบการของคุณ',
				en: 'Registration, licensing and inspection largely run through the regional and area excise offices covering your premises.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'แหล่งข้อมูลทางการที่อ้างอิงได้', en: 'A citable official source' },
			text: {
				th: 'ข้อความในประกาศบนเว็บไซต์ของกรมคือฉบับที่ใช้อ้างอิงได้ ต่างจากบทความสรุปของบุคคลที่สามซึ่งอาจล้าสมัยไปแล้ว',
				en: 'The text of an announcement on the department’s own site is the version you can cite — unlike third-party summaries, which go stale.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ดูก่อนว่าคุณเกี่ยวข้องในฐานะใด', en: 'Work out how you are involved' },
			text: {
				th: 'ถ้าคุณเป็นผู้บริโภคทั่วไป คุณจ่ายภาษีนี้ไปแล้วในราคาสินค้าและไม่ต้องทำอะไรเพิ่ม แต่ถ้าคุณผลิต นำเข้า หรือขายสินค้าในกลุ่มที่ต้องเสียภาษีสรรพสามิต หน้าที่ตามกฎหมายจะเริ่มตั้งแต่ก่อนเปิดดำเนินการ',
				en: 'If you are an ordinary consumer you have already paid this tax inside the price and need do nothing. If you manufacture, import or sell taxed goods, your legal obligations begin before you open for business.'
			}
		},
		{
			title: { th: 'ตรวจสอบว่าสินค้าของคุณอยู่ในพิกัดหรือไม่', en: 'Check whether your product is in scope' },
			text: {
				th: 'สินค้าที่ต้องเสียภาษีถูกจัดไว้เป็นพิกัดอัตราภาษี และรายละเอียดปลีกย่อยมีผลต่ออัตรามาก เช่น ปริมาณน้ำตาลในเครื่องดื่ม หรือขนาดเครื่องยนต์ของรถ ให้อ่านพิกัดฉบับปัจจุบันจากเว็บไซต์กรมโดยตรง',
				en: 'Taxable goods sit in a tariff schedule, and small details move the rate a lot — sugar content in a drink, engine size in a car. Read the current schedule on the department’s own site.'
			}
		},
		{
			title: { th: 'จดทะเบียนสรรพสามิตก่อนเริ่มผลิตหรือนำเข้า', en: 'Register before you produce or import' },
			text: {
				th: 'ผู้ประกอบอุตสาหกรรมและผู้ประกอบกิจการสถานบริการต้องจดทะเบียนสรรพสามิตกับสำนักงานสรรพสามิตพื้นที่ที่สถานประกอบการตั้งอยู่ ก่อนเริ่มดำเนินการ ไม่ใช่หลังจากเริ่มขายแล้ว',
				en: 'Manufacturers and operators of taxed service venues must register with the area excise office covering their premises before starting — not after the first sale.'
			}
		},
		{
			title: { th: 'ขอใบอนุญาตให้ครบตามประเภทกิจการ', en: 'Obtain every licence your business needs' },
			text: {
				th: 'ใบอนุญาตแยกตามประเภทสินค้าและลักษณะการขาย เช่น ขายสุราหรือยาสูบเพื่อบริโภคในร้านกับขายเพื่อนำไปบริโภคที่อื่น เป็นคนละใบกัน ตรวจสอบประเภทที่ตรงกับกิจการของคุณก่อนยื่น',
				en: 'Licences are split by product and by how you sell — drinking on the premises versus taking away are different permissions. Confirm which type matches your operation before applying.'
			}
		},
		{
			title: { th: 'สมัครใช้ระบบยื่นแบบและชำระภาษีออนไลน์', en: 'Enrol in the online filing system' },
			text: {
				th: 'เมื่อจดทะเบียนแล้ว ให้ขอสิทธิ์เข้าใช้ระบบยื่นแบบทางอินเทอร์เน็ต เพื่อยื่นแบบและชำระภาษีตามรอบของสินค้าแต่ละประเภท กำหนดเวลายื่นไม่เหมือนกันทุกกลุ่มสินค้า จึงควรยืนยันรอบของกิจการตัวเองกับเจ้าหน้าที่',
				en: 'Once registered, request access to the internet filing system and submit returns on the cycle your product follows. Filing deadlines differ between product groups, so confirm yours with the office.'
			}
		},
		{
			title: { th: 'ติดตามประกาศเปลี่ยนแปลงอัตราอย่างสม่ำเสมอ', en: 'Track rate changes as they are published' },
			text: {
				th: 'อัตราภาษีสรรพสามิตปรับเปลี่ยนได้ตามนโยบายการคลังและมาตรการด้านสุขภาพหรือสิ่งแวดล้อม บางกรณีมีการทยอยขึ้นเป็นระยะ การตั้งรอบตรวจสอบประกาศบนเว็บไซต์กรมช่วยให้ตั้งราคาและวางแผนต้นทุนได้ทัน',
				en: 'Excise rates move with fiscal policy and with health or environmental measures, sometimes in scheduled phases. A habit of checking the department’s announcements keeps your pricing and cost planning current.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ภาษีสรรพสามิตต่างจากภาษีมูลค่าเพิ่มอย่างไร', en: 'How is excise tax different from VAT?' },
			a: {
				th: 'ภาษีมูลค่าเพิ่มเก็บจากการขายสินค้าและบริการแทบทุกชนิดในอัตราเดียวกัน และจัดเก็บโดยกรมสรรพากร ส่วนภาษีสรรพสามิตเก็บเฉพาะสินค้าและบริการที่กฎหมายระบุไว้เป็นรายการ ในอัตราที่ต่างกันไปตามชนิดสินค้า และจัดเก็บโดยกรมสรรพสามิต สินค้าชิ้นหนึ่งอาจต้องเสียทั้งสองอย่างพร้อมกัน เช่น เบียร์กระป๋องที่เสียภาษีสรรพสามิตในชั้นผู้ผลิต แล้วยังมีภาษีมูลค่าเพิ่มในชั้นการขายอีกทอดหนึ่ง',
				en: 'VAT applies to almost all sales of goods and services at a single rate and is collected by the Revenue Department. Excise applies only to a listed set of goods and services, at rates that vary by product, and is collected by the Excise Department. One item can carry both — a can of beer bears excise at the manufacturing stage and VAT again when it is sold.'
			}
		},
		{
			q: { th: 'ประชาชนทั่วไปต้องยื่นแบบภาษีสรรพสามิตไหม', en: 'Do ordinary people have to file an excise return?' },
			a: {
				th: 'ไม่ต้อง ผู้บริโภคไม่มีหน้าที่ยื่นแบบหรือชำระภาษีสรรพสามิตด้วยตนเอง เพราะภาระภาษีเกิดขึ้นที่ผู้ผลิตหรือผู้นำเข้าก่อนสินค้าจะถึงมือคุณ และถูกบวกรวมอยู่ในราคาขายปลีกแล้ว คนที่ต้องยื่นแบบคือผู้ประกอบอุตสาหกรรม ผู้นำเข้า และผู้ประกอบกิจการบริการที่อยู่ในข่ายต้องเสียภาษี',
				en: 'No. Consumers never file or pay excise themselves — the liability falls on the manufacturer or importer before the goods reach you, and is already built into the shelf price. Filing is the duty of manufacturers, importers and operators of taxed services.'
			}
		},
		{
			q: { th: 'ร้านอาหารหรือร้านค้าที่ขายเหล้าเบียร์ ต้องขอใบอนุญาตจากกรมสรรพสามิตหรือไม่', en: 'Does a restaurant or shop selling alcohol need an Excise Department licence?' },
			a: {
				th: 'ต้องขอ การขายสุราและยาสูบเป็นกิจการที่ต้องมีใบอนุญาตจากกรมสรรพสามิต แม้ร้านจะไม่ได้ผลิตหรือนำเข้าเองก็ตาม ใบอนุญาตแบ่งตามประเภทของสินค้าและลักษณะการขาย และมีอายุที่ต้องต่อ ไม่ใช่ขอครั้งเดียวแล้วใช้ได้ตลอด ให้ตรวจสอบประเภทใบอนุญาตและเงื่อนไขปัจจุบันกับสำนักงานสรรพสามิตพื้นที่ที่ร้านตั้งอยู่',
				en: 'Yes. Selling liquor or tobacco requires an Excise Department licence even if you neither produce nor import it. Licences are categorised by product and selling method and must be renewed rather than obtained once and kept forever. Check the current categories and conditions with the area excise office covering your premises.'
			}
		},
		{
			q: { th: 'อัตราภาษีของสินค้าแต่ละชนิดเท่าไร', en: 'What is the rate for a particular product?' },
			a: {
				th: 'ไม่มีอัตราเดียวที่ใช้ได้กับทุกสินค้า แต่ละกลุ่มมีพิกัดของตัวเอง และรายละเอียดเล็ก ๆ ก็เปลี่ยนอัตราได้ เช่น ปริมาณน้ำตาลต่อ 100 มิลลิลิตรของเครื่องดื่ม หรือประเภทและการปล่อยคาร์บอนไดออกไซด์ของรถยนต์ อัตราเหล่านี้ยังปรับเปลี่ยนตามนโยบายเป็นระยะ จึงควรอ่านประกาศฉบับปัจจุบันจากเว็บไซต์กรมสรรพสามิตโดยตรง ไม่ควรอ้างอิงตัวเลขจากบทความสรุปที่ไม่ระบุวันที่',
				en: 'There is no single rate. Each product group has its own schedule, and small details shift the figure — sugar per 100 ml in a drink, vehicle type and CO2 output in a car. Rates are also adjusted from time to time as policy changes, so read the current announcement on the department’s site rather than trusting an undated summary article.'
			}
		},
		{
			q: { th: 'ทำไมค้นหาข้อมูลภาษีสรรพสามิตใน Google แล้วไม่เจอเว็บไซต์กรม', en: 'Why does searching for excise information not surface the department’s site?' },
			a: {
				th: 'เพราะเว็บไซต์ www.excise.go.th ตั้งค่า robots.txt ปิดกั้นเครื่องมือค้นหาทั้งเว็บไซต์ หน้าเนื้อหาจึงไม่ถูกจัดทำดัชนีและไม่ขึ้นในผลการค้นหา ไม่ใช่เพราะเว็บล่มหรือคุณค้นผิดคำ วิธีแก้คือเปิดเว็บไซต์ด้วยการพิมพ์ที่อยู่เข้าไปเอง แล้วใช้เมนูหรือช่องค้นหาภายในเว็บไซต์แทนการค้นจากภายนอก',
				en: 'Because www.excise.go.th uses robots.txt to block search engines across the whole site, its pages are never indexed and cannot appear in results. It is not an outage and not a bad query. The fix is to open the site by typing the address yourself and search from within it.'
			}
		},
		{
			q: { th: 'ยื่นแบบออนไลน์ไม่สำเร็จหรือเข้าระบบไม่ได้ ต้องทำอย่างไร', en: 'What if online filing fails or I cannot sign in?' },
			a: {
				th: 'ตรวจสอบก่อนว่าสถานะการจดทะเบียนสรรพสามิตของกิจการยังใช้งานได้ และสิทธิ์เข้าใช้ระบบผูกกับผู้มีอำนาจคนปัจจุบัน เพราะการเปลี่ยนกรรมการหรือย้ายสถานประกอบการมักทำให้ข้อมูลไม่ตรงกัน ถ้าระบบยังปฏิเสธ ให้ติดต่อสำนักงานสรรพสามิตพื้นที่ที่ดูแลกิจการของคุณพร้อมเลขทะเบียนและวันเวลาที่ทำรายการ อย่ารอจนใกล้กำหนดยื่น เพราะการแก้ไขสิทธิ์ผู้ใช้อาจต้องยื่นเอกสารเพิ่ม',
				en: 'First confirm the business’s excise registration is still active and that system access is tied to the current authorised person — a change of director or a move of premises often breaks the match. If it still refuses, contact the area excise office with your registration number and the time of the attempt. Do not leave it until the deadline, since fixing user access can require extra paperwork.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าเว็บไซต์หรือคนที่ติดต่อมาเป็นของกรมสรรพสามิตจริง', en: 'How can I tell a genuine Excise Department contact from a fake one?' },
			a: {
				th: 'หน่วยงานราชการไทยใช้ชื่อโดเมนลงท้ายด้วย .go.th เท่านั้น ถ้าลิงก์พาไปโดเมนอื่นที่หน้าตาคล้ายกัน ให้สันนิษฐานไว้ก่อนว่าไม่ใช่ของจริง ค่าธรรมเนียมและภาษีต้องชำระผ่านช่องทางราชการ ไม่ใช่การโอนเข้าบัญชีส่วนบุคคล และไม่มีเจ้าหน้าที่คนใดรับประกันว่าจะทำให้ใบอนุญาตผ่านแลกกับเงินพิเศษ หากมีข้อสงสัย ให้โทรหรือเดินเข้าไปถามที่สำนักงานสรรพสามิตพื้นที่โดยตรง',
				en: 'Thai government bodies use domains ending in .go.th and nothing else; a look-alike site on another domain should be assumed fake. Fees and tax are paid through official channels, never by transfer to a personal account, and no official can guarantee a licence in exchange for an extra payment. When in doubt, phone or walk into the area excise office and ask.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ภาษีสรรพสามิตคืออะไร', en: 'What is excise tax?' }
		},
		{
			type: 'p',
			text: {
				th: 'กรมสรรพสามิตเป็นหน่วยงานในสังกัดกระทรวงการคลัง และเป็นหนึ่งในสามกรมจัดเก็บรายได้หลักของประเทศ ร่วมกับกรมสรรพากรและกรมศุลกากร หน้าที่หลักคือการจัดเก็บภาษีสรรพสามิต ซึ่งเป็นภาษีที่เรียกเก็บจากสินค้าและบริการบางประเภทเป็นการเฉพาะ ไม่ใช่ภาษีที่เก็บจากรายได้ของคนหรือจากการซื้อขายทั่วไปทั้งระบบ เหตุผลเบื้องหลังการเก็บภาษีลักษณะนี้มีสองด้าน ด้านหนึ่งคือการหารายได้เข้ารัฐจากสินค้าที่มีกำลังซื้อรองรับ อีกด้านหนึ่งคือการใช้ราคาเป็นเครื่องมือชะลอการบริโภคสินค้าที่ส่งผลต่อสุขภาพหรือสิ่งแวดล้อม',
				en: 'The Excise Department sits under the Ministry of Finance and is one of Thailand’s three main revenue departments, alongside the Revenue Department and the Customs Department. Its job is to collect excise tax — a levy aimed at particular goods and services rather than at people’s income or at commerce in general. The rationale runs two ways: raising revenue from products that can bear it, and using price as a lever to slow consumption of things that carry health or environmental costs.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'ฐานอำนาจในการจัดเก็บอยู่ในพระราชบัญญัติภาษีสรรพสามิต พ.ศ. 2560 ซึ่งรวมกฎหมายภาษีสรรพสามิตหลายฉบับที่เคยแยกกันอยู่มาไว้ในฉบับเดียว โดยทั่วไปภาระภาษีจะเกิดขึ้นตั้งแต่ตอนนำสินค้าออกจากโรงอุตสาหกรรมหรือตอนนำเข้ามาในราชอาณาจักร ไม่ใช่ตอนที่ผู้บริโภคหยิบสินค้าออกจากชั้นวาง ผลก็คือภาษีถูกบวกรวมอยู่ในราคาขายปลีกเรียบร้อยแล้ว โดยไม่ปรากฏเป็นบรรทัดแยกบนใบเสร็จเหมือนภาษีมูลค่าเพิ่ม คนไทยจำนวนมากจึงจ่ายภาษีสรรพสามิตทุกวันโดยไม่รู้ตัว',
				en: 'The legal basis is the Excise Act B.E. 2560 (2017), which folded several separate excise statutes into one. As a rule the liability arises when goods leave the factory or enter the country, not when a shopper picks them off the shelf. The tax is therefore already inside the retail price and, unlike VAT, does not show as its own line on the receipt — which is why most people in Thailand pay excise every day without noticing.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ต่างจากภาษีมูลค่าเพิ่มและภาษีเงินได้อย่างไร', en: 'How it differs from VAT and income tax' }
		},
		{
			type: 'p',
			text: {
				th: 'ความสับสนที่พบบ่อยที่สุดคือการแยกไม่ออกระหว่างภาษีสรรพสามิตกับภาษีมูลค่าเพิ่ม ทั้งสองอย่างเป็นภาษีทางอ้อมที่ผู้บริโภคเป็นผู้รับภาระในท้ายที่สุด แต่ต่างกันที่ขอบเขตและวิธีคิด ภาษีมูลค่าเพิ่มเก็บจากการขายสินค้าและบริการเกือบทุกชนิดในอัตราเดียวกันทั้งประเทศ ส่วนภาษีสรรพสามิตเก็บเฉพาะรายการที่กฎหมายระบุไว้ และคิดในอัตราที่ต่างกันไปตามชนิดสินค้า บางรายการคิดตามมูลค่า บางรายการคิดตามปริมาณ และบางรายการใช้ทั้งสองฐานประกอบกัน ตารางด้านล่างสรุปความต่างของภาษีหลักที่ธุรกิจไทยต้องเจอ',
				en: 'The commonest confusion is between excise and VAT. Both are indirect taxes ultimately borne by the consumer, but they differ in scope and in how they are calculated. VAT applies to nearly all sales at one nationwide rate; excise applies only to listed items, at rates that vary by product — some assessed on value, some on quantity, and some on a combination of the two. The table below sets out the main taxes a Thai business encounters.'
			}
		},
		{
			type: 'table',
			caption: { th: 'ภาษีหลักของไทยและหน่วยงานที่จัดเก็บ', en: 'Thailand’s main taxes and who collects them' },
			head: [
				{ th: 'ประเภทภาษี', en: 'Tax' },
				{ th: 'จัดเก็บจาก', en: 'Levied on' },
				{ th: 'หน่วยงานที่จัดเก็บ', en: 'Collected by' }
			],
			rows: [
				[
					{ th: 'ภาษีสรรพสามิต', en: 'Excise tax' },
					{ th: 'สินค้าและบริการเฉพาะกลุ่มที่กฎหมายกำหนด เช่น น้ำมัน รถยนต์ เครื่องดื่ม สุรา ยาสูบ', en: 'A defined list of goods and services — fuel, vehicles, beverages, alcohol, tobacco' },
					{ th: 'กรมสรรพสามิต', en: 'Excise Department' }
				],
				[
					{ th: 'ภาษีมูลค่าเพิ่ม', en: 'Value added tax' },
					{ th: 'การขายสินค้าและบริการทั่วไปในแต่ละทอดของการซื้อขาย', en: 'General sales of goods and services at each stage of trade' },
					{ th: 'กรมสรรพากร', en: 'Revenue Department' }
				],
				[
					{ th: 'ภาษีเงินได้', en: 'Income tax' },
					{ th: 'รายได้ของบุคคลธรรมดาและกำไรของนิติบุคคล', en: 'Personal income and corporate profit' },
					{ th: 'กรมสรรพากร', en: 'Revenue Department' }
				],
				[
					{ th: 'อากรขาเข้า', en: 'Import duty' },
					{ th: 'สินค้าที่นำเข้ามาในราชอาณาจักร', en: 'Goods brought into the kingdom' },
					{ th: 'กรมศุลกากร', en: 'Customs Department' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'สินค้าและบริการที่ต้องเสียภาษีสรรพสามิต', en: 'What excise tax applies to' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'น้ำมันและผลิตภัณฑ์น้ำมัน รวมถึงเชื้อเพลิงบางชนิด ซึ่งเป็นกลุ่มที่สร้างรายได้ให้รัฐมากที่สุดกลุ่มหนึ่ง',
					en: 'Petroleum and petroleum products, including certain fuels — among the largest revenue groups.'
				},
				{
					th: 'รถยนต์และรถจักรยานยนต์ โดยอัตราขึ้นอยู่กับประเภทของรถ ขนาดเครื่องยนต์ และปริมาณการปล่อยคาร์บอนไดออกไซด์',
					en: 'Cars and motorcycles, with rates keyed to vehicle type, engine size and carbon dioxide emissions.'
				},
				{
					th: 'เครื่องดื่มที่ไม่มีแอลกอฮอล์ ซึ่งรวมถึงการจัดเก็บตามปริมาณน้ำตาลที่คนทั่วไปเรียกกันว่า “ภาษีความหวาน”',
					en: 'Non-alcoholic beverages, including the sugar-content component popularly called the “sugar tax”.'
				},
				{
					th: 'สุราและเครื่องดื่มแอลกอฮอล์ทุกประเภท ทั้งที่ผลิตในประเทศและนำเข้า',
					en: 'Liquor and alcoholic drinks of every kind, domestic and imported.'
				},
				{
					th: 'ยาสูบ ทั้งบุหรี่ซิกาแรตและยาเส้น ซึ่งต้องมีเครื่องหมายแสดงการเสียภาษีติดอยู่กับซอง',
					en: 'Tobacco, both cigarettes and rolling tobacco, which must carry a tax mark on the pack.'
				},
				{
					th: 'เครื่องปรับอากาศและแบตเตอรี่ ซึ่งเป็นสินค้าที่อยู่ในพิกัดภาษีสรรพสามิตมาเป็นเวลานาน',
					en: 'Air conditioners and batteries, long-standing entries in the excise schedule.'
				},
				{
					th: 'บริการบางประเภท เช่น กิจการสถานบริการและสนามแข่งม้า ซึ่งเสียภาษีจากรายรับของกิจการ',
					en: 'Certain services, such as entertainment venues and horse racing courses, taxed on business receipts.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ผู้บริโภคไม่ต้องยื่นอะไรทั้งสิ้น', en: 'Consumers file nothing' },
			text: {
				th: 'ถ้าคุณเข้ามาอ่านเพราะเห็นคำว่า “ภาษีสรรพสามิต” บนใบเสร็จหรือในข่าว ขอให้สบายใจได้ว่าคุณไม่มีหน้าที่ยื่นแบบหรือชำระภาษีนี้ด้วยตัวเอง ภาระตกอยู่กับผู้ผลิตและผู้นำเข้า และถูกส่งต่อมาถึงคุณในรูปของราคาสินค้าเรียบร้อยแล้ว',
				en: 'If you came here after seeing “excise tax” on a receipt or in the news, you have nothing to file and nothing to pay directly. The obligation rests with manufacturers and importers, and reaches you already folded into the price.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ใครต้องติดต่อกรมสรรพสามิตโดยตรง', en: 'Who actually deals with the department' }
		},
		{
			type: 'p',
			text: {
				th: 'คนส่วนใหญ่ไม่เคยต้องติดต่อกรมสรรพสามิตเลยตลอดชีวิต กลุ่มที่ต้องเข้ามาเกี่ยวข้องจริง ๆ คือผู้ประกอบอุตสาหกรรมที่ผลิตสินค้าอยู่ในพิกัดภาษีสรรพสามิต ผู้นำเข้าสินค้าเหล่านั้น และผู้ประกอบกิจการบริการที่กฎหมายกำหนดให้ต้องเสียภาษี ทั้งสามกลุ่มนี้มีหน้าที่จดทะเบียนก่อนเริ่มดำเนินการ ยื่นแบบตามรอบ และเก็บเอกสารให้พร้อมสำหรับการตรวจสอบ นอกจากนั้นยังมีอีกกลุ่มหนึ่งที่มักคาดไม่ถึงว่าเกี่ยวข้องด้วย คือร้านค้า ร้านอาหาร โรงแรม และร้านสะดวกซื้อที่ขายสุราหรือยาสูบ ซึ่งแม้ไม่ได้ผลิตเองก็ยังต้องมีใบอนุญาตขายจากกรมสรรพสามิต และต้องต่ออายุตามรอบที่กำหนด การเปิดร้านโดยยังไม่มีใบอนุญาตที่ถูกประเภทเป็นความผิดที่ตรวจพบได้ง่ายจากการออกตรวจของเจ้าหน้าที่',
				en: 'Most people never contact the Excise Department at all. Those who genuinely must are manufacturers whose products fall inside the tariff, importers of those goods, and operators of the services the law taxes. All three register before they begin, file on their cycle, and keep records ready for inspection. There is a fourth group that rarely expects to be involved: shops, restaurants, hotels and convenience stores selling alcohol or tobacco. They produce nothing, yet still need a selling licence from the department and must renew it on schedule — and trading on the wrong licence, or none, is exactly what a routine inspection finds.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เว็บไซต์กรมสรรพสามิตมีอะไรให้ใช้บ้าง', en: 'What the department’s website offers' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ประกาศ กฎกระทรวง และกฎหมายลำดับรอง รวมถึงพิกัดอัตราภาษีของสินค้าแต่ละกลุ่ม ซึ่งเป็นฉบับที่ใช้อ้างอิงได้',
					en: 'Announcements, ministerial regulations and subordinate rules, including the tariff schedules — the citable versions.'
				},
				{
					th: 'ระบบยื่นแบบรายการภาษีและชำระภาษีทางอินเทอร์เน็ต สำหรับผู้ประกอบการที่จดทะเบียนไว้แล้ว',
					en: 'Internet filing and payment for operators who have already registered.'
				},
				{
					th: 'ข้อมูลการขอและต่ออายุใบอนุญาตแต่ละประเภท พร้อมเอกสารประกอบที่ต้องเตรียม',
					en: 'Guidance on applying for and renewing each class of licence, with the supporting documents required.'
				},
				{
					th: 'แบบฟอร์ม คู่มือผู้เสียภาษี และคำอธิบายเฉพาะกลุ่มสินค้า สำหรับผู้ที่เพิ่งเริ่มดำเนินกิจการ',
					en: 'Forms, taxpayer manuals and product-specific explanations aimed at newly established businesses.'
				},
				{
					th: 'การเปิดรับฟังความคิดเห็นต่อร่างกฎหมาย ซึ่งเป็นช่องทางให้ผู้ประกอบการรู้ล่วงหน้าว่าอะไรกำลังจะเปลี่ยน',
					en: 'Public consultations on draft rules — the channel that tells businesses what is about to change.'
				},
				{
					th: 'รายชื่อและข้อมูลติดต่อของสำนักงานสรรพสามิตภาคและสำนักงานสรรพสามิตพื้นที่ทั่วประเทศ',
					en: 'Contact details for the regional and area excise offices across the country.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ตรวจสอบให้แน่ใจว่าเป็นช่องทางของหน่วยงานจริง', en: 'Make sure the channel is genuinely official' },
			text: {
				th: 'หน่วยงานราชการไทยใช้ชื่อโดเมนลงท้ายด้วย .go.th เท่านั้น หากพบเว็บไซต์หน้าตาคล้ายกันบนโดเมนอื่นที่เสนอรับยื่นแบบหรือเดินเรื่องใบอนุญาตให้ ให้ตั้งข้อสงสัยไว้ก่อน ค่าธรรมเนียมและภาษีต้องชำระผ่านช่องทางราชการ ไม่ใช่การโอนเข้าบัญชีส่วนบุคคล และไม่มีใครรับประกันผลการพิจารณาใบอนุญาตแลกกับเงินพิเศษได้',
				en: 'Thai government bodies use .go.th domains and nothing else. Treat any look-alike site on another domain that offers to file your return or push a licence through as suspect. Fees and tax go through official channels, never a transfer to a personal account, and nobody can guarantee a licensing outcome in return for an extra payment.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เมื่อเว็บไซต์ทางการค้นหาไม่เจอ หน้านี้จึงทำหน้าที่เป็นป้ายบอกทาง', en: 'When the official site cannot be found, this page stands in for it' }
		},
		{
			type: 'p',
			text: {
				th: 'การตรวจสอบไฟล์ robots.txt ของ www.excise.go.th เมื่อวันที่ 27 สิงหาคม 2569 พบคำสั่งปิดกั้นทั้งเว็บไซต์ที่ใช้กับเครื่องมือค้นหาทุกตัวโดยไม่มีข้อยกเว้น นั่นหมายความว่าประกาศอัตราภาษี คู่มือผู้เสียภาษี แบบฟอร์ม และข่าวการรับฟังความคิดเห็นทั้งหมด ไม่ถูกจัดทำดัชนีและไม่มีทางขึ้นมาในผลการค้นหา ผลกระทบตกอยู่กับคนที่ต้องการข้อมูลมากที่สุด เจ้าของโรงงานเครื่องดื่มที่พิมพ์ค้นว่าภาษีความหวานคิดอย่างไร ผู้นำเข้ารถที่อยากรู้ว่าพิกัดของตัวเองอยู่ตรงไหน หรือเจ้าของร้านอาหารที่กำลังหาว่าใบอนุญาตขายสุราต้องยื่นที่ไหน จะได้บทความของสำนักงานกฎหมาย ข่าวเก่า และกระทู้ในเว็บบอร์ดขึ้นมาก่อน ซึ่งหลายชิ้นเขียนไว้นานแล้วและไม่ได้ปรับตามประกาศฉบับปัจจุบัน หน้านี้จึงมีอยู่เพื่ออธิบายว่ากรมสรรพสามิตดูแลเรื่องอะไร ด้วยคำที่คนพิมพ์ค้นหาจริง แล้วส่งต่อไปยังที่อยู่เว็บไซต์ทางการเพื่อให้อ่านต้นทางด้วยตัวเอง THGov เป็นไดเรกทอรีอิสระ ไม่มีความเกี่ยวข้องกับกรมสรรพสามิตหรือกระทรวงการคลัง ไม่รับยื่นแบบ ไม่รับคำขอใบอนุญาต และไม่เรียกเก็บค่าธรรมเนียมใด ๆ',
				en: 'A check of robots.txt at www.excise.go.th on 27 August 2026 found a site-wide block applied to every crawler with no exceptions. Rate announcements, taxpayer manuals, forms and consultation notices are therefore never indexed and cannot appear in search results at all. The people this hurts are the ones who need the material most: a beverage manufacturer typing a question about how the sugar component is calculated, a car importer trying to locate their tariff line, a restaurant owner looking for where to lodge a liquor licence. What they get instead is law-firm commentary, old news coverage and forum threads, much of it written years ago and never reconciled with the current announcements. This page exists to describe what the Excise Department handles in the words people actually search, and then hand over the official address so they can read the source themselves. THGov is an independent directory with no connection to the Excise Department or the Ministry of Finance; we file nothing, process no licence applications, and charge no fees.'
			}
		}
	],
	crawl: {
		host: 'www.excise.go.th',
		verdict: 'blocked',
		status: 200,
		snippet: 'User-agent: *\nDisallow: /',
		checkedAt: '2026-08-27',
		note: {
			th: 'เว็บไซต์หลักของกรมสรรพสามิตปิดกั้นเครื่องมือค้นหาทั้งเว็บไซต์ผ่าน robots.txt โดยไม่มีข้อยกเว้น ทำให้ประกาศ อัตราภาษี และคู่มือผู้เสียภาษีบนเว็บไซต์ไม่ปรากฏในผลการค้นหา',
			en: 'The Excise Department’s main website blocks all crawlers site-wide through robots.txt with no exceptions, so its announcements, tax rates and taxpayer guidance never surface in search results.'
		}
	},
	priority: 88,
	updated: '2026-08-27'
};
