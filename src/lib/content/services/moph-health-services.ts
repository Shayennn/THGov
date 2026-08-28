import type { Service } from '../types';

export const service: Service = {
	slug: 'moph-health-services',
	name: {
		th: 'กระทรวงสาธารณสุข — ตรวจสอบสถานพยาบาลและข้อมูลสุขภาพจากแหล่งทางการ',
		en: 'Thai Ministry of Public Health — Verified Health Information and Facilities'
	},
	shortName: { th: 'กระทรวงสาธารณสุข', en: 'Ministry of Public Health' },
	url: 'https://www.moph.go.th/',
	altUrls: [
		{
			label: { th: 'สำนักงานคณะกรรมการอาหารและยา (อย.)', en: 'Thai FDA' },
			url: 'https://www.fda.moph.go.th/'
		},
		{
			label: { th: 'กรมสนับสนุนบริการสุขภาพ', en: 'Department of Health Service Support' },
			url: 'https://hss.moph.go.th/'
		}
	],
	agency: 'moph',
	categories: ['health-welfare'],
	summary: {
		th: 'กระทรวงสาธารณสุขดูแลเรื่องอะไร ตรวจสอบใบอนุญาตคลินิกและโรงพยาบาลได้ที่ไหน อ่านประกาศสถานการณ์โรค และเช็กข่าวสุขภาพที่ถูกส่งต่อกันมาก่อนจะเชื่อหรือแชร์ต่อ',
		en: 'What the Thai Ministry of Public Health handles, where to check that a clinic or hospital is licensed, and how to verify the health claims people forward you.'
	},
	deck: {
		th: 'คู่มือสั้น ๆ ว่ากระทรวงสาธารณสุขรับผิดชอบเรื่องใด ตรวจสอบสถานพยาบาลอย่างไร และจะเช็กข่าวสุขภาพที่ถูกส่งต่อกันมาได้จากที่ไหน',
		en: 'A short guide to what the Ministry of Public Health is responsible for, how to check that a clinic is licensed, and where to verify the health claims being forwarded to you.'
	},
	keywords: {
		th: [
			'กระทรวงสาธารณสุข',
			'สธ.',
			'เว็บไซต์กระทรวงสาธารณสุข',
			'ตรวจสอบคลินิกมีใบอนุญาตไหม',
			'เช็กสถานพยาบาลถูกกฎหมาย',
			'ร้องเรียนคลินิกเถื่อน',
			'ข่าวสุขภาพจริงหรือปลอม',
			'ข่าวปลอมเรื่องสุขภาพ',
			'สถานการณ์โรคระบาดล่าสุด',
			'กรมควบคุมโรค',
			'เช็กเลข อย.',
			'อาหารเสริมมี อย. จริงไหม',
			'โรงพยาบาลรัฐสังกัดไหน',
			'moph.go.th'
		],
		en: [
			'Ministry of Public Health Thailand',
			'MOPH Thailand',
			'verify Thai clinic licence',
			'Thailand disease outbreak advisory',
			'Thai FDA product check',
			'Thai health misinformation',
			'moph.go.th'
		]
	},
	features: [
		{
			icon: 'building',
			title: { th: 'เจ้าของนโยบายและเครือข่ายโรงพยาบาลรัฐ', en: 'Policy owner and state hospital network' },
			text: {
				th: 'กำหนดนโยบายสุขภาพของประเทศ และดูแลโรงพยาบาลรัฐตั้งแต่ระดับจังหวัดลงไปถึงระดับตำบล',
				en: 'Sets national health policy and runs the state hospital network, from provincial hospitals down to sub-district health centres.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'รายงานสถานการณ์โรคจากต้นทาง', en: 'Outbreak reporting at source' },
			text: {
				th: 'ประกาศสถานการณ์โรคติดต่อและคำแนะนำการป้องกันจากหน่วยงานที่รับผิดชอบโดยตรง ไม่ใช่ข่าวที่ถูกเล่าต่อ',
				en: 'Disease situation reports and prevention advice issued by the responsible body itself, not retold second-hand.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'มาตรฐานและการอนุญาตสถานพยาบาล', en: 'Facility standards and licensing' },
			text: {
				th: 'กำหนดเกณฑ์ที่คลินิกและโรงพยาบาลต้องผ่าน และเป็นผู้ออกใบอนุญาตให้สถานพยาบาลเอกชน',
				en: 'Defines the standards clinics and hospitals must meet, and issues the licences private facilities operate under.'
			}
		},
		{
			icon: 'search',
			title: { th: 'จุดตรวจสอบผลิตภัณฑ์สุขภาพ', en: 'Where health products are checked' },
			text: {
				th: 'ยา อาหาร เครื่องสำอาง อาหารเสริม และเครื่องมือแพทย์ อยู่ในการกำกับของ อย. ซึ่งเป็นหน่วยงานในสังกัดกระทรวง',
				en: 'Medicines, food, cosmetics, supplements and medical devices are regulated by the FDA, an agency under this ministry.'
			}
		},
		{
			icon: 'heart',
			title: { th: 'คำเตือนสุขภาพตามฤดูกาล', en: 'Seasonal health advisories' },
			text: {
				th: 'คำแนะนำที่ออกตามช่วงเวลาของปี เช่น ไข้เลือดออกช่วงฝน โรคทางเดินหายใจช่วงฝุ่น และอาหารเป็นพิษหน้าร้อน',
				en: 'Guidance timed to the year — dengue in the rains, respiratory illness in the dust season, food-borne illness in the heat.'
			}
		},
		{
			icon: 'users',
			title: { th: 'มีหน่วยงานในพื้นที่ทุกจังหวัด', en: 'A presence in every province' },
			text: {
				th: 'สำนักงานสาธารณสุขจังหวัดเป็นด่านหน้าในพื้นที่ ทั้งเรื่องใบอนุญาต การร้องเรียน และการควบคุมโรค',
				en: 'Provincial public health offices are the local front line for licensing, complaints and disease control.'
			}
		}
	],
	steps: [
		{
			title: { th: 'แยกก่อนว่าเรื่องของคุณเป็นเรื่องอะไร', en: 'Work out which kind of problem you have' },
			text: {
				th: 'เรื่องสิทธิการรักษาให้ไปที่กองทุนที่ถือสิทธิของคุณ เรื่องยาหรืออาหารเสริมไปที่ อย. เรื่องใบอนุญาตสถานพยาบาลไปที่กรมสนับสนุนบริการสุขภาพหรือสำนักงานสาธารณสุขจังหวัด ส่วนเรื่องสถานการณ์โรคไปที่กรมควบคุมโรค แยกให้ถูกตั้งแต่ต้นช่วยประหยัดเวลาได้มาก',
				en: 'Entitlement questions go to whichever fund holds your coverage; medicines and supplements to the FDA; facility licensing to the Department of Health Service Support or your provincial health office; outbreak questions to the Department of Disease Control. Sorting this out first saves a great deal of time.'
			}
		},
		{
			title: { th: 'ใช้เว็บไซต์กระทรวงเป็นสารบัญของหน่วยงาน', en: 'Use the ministry site as the directory of departments' },
			text: {
				th: 'เว็บไซต์ส่วนกลางเชื่อมไปยังกรมและหน่วยงานในสังกัด ใช้เป็นจุดตั้งต้นเพื่อเข้าเว็บไซต์ของกรมที่ดูแลเรื่องนั้นโดยตรง ดีกว่าค้นชื่อหน่วยงานลอย ๆ แล้วเสี่ยงเจอเว็บไซต์เลียนแบบ',
				en: 'The central site links out to the departments and agencies beneath it. Start there and follow the link to the right department, rather than searching a department name cold and risking a copycat site.'
			}
		},
		{
			title: { th: 'ตรวจสอบใบอนุญาตก่อนใช้บริการสถานพยาบาลเอกชน', en: 'Check the licence before using a private facility' },
			text: {
				th: 'ขอดูใบอนุญาตที่สถานพยาบาลต้องแสดงไว้ในที่เปิดเผย ดูว่าชื่อผู้ดำเนินการตรงกับผู้ให้บริการจริงหรือไม่ และสอบถามหน่วยงานผู้ออกใบอนุญาตหากยังสงสัย อย่าใช้รีวิวหรือคำโฆษณาแทนหลักฐาน',
				en: 'Look for the licence the facility is required to display, check that the named operator matches who is actually treating you, and ask the licensing office if anything looks off. Reviews and advertising are not evidence.'
			}
		},
		{
			title: { th: 'ตรวจสอบผลิตภัณฑ์สุขภาพกับ อย. ก่อนซื้อ', en: 'Check health products with the FDA before buying' },
			text: {
				th: 'ยา อาหารเสริม เครื่องสำอาง และเครื่องมือแพทย์ ต้องขึ้นทะเบียนหรือได้รับอนุญาตตามประเภทของผลิตภัณฑ์ ให้ตรวจสอบจากช่องทางของ อย. โดยตรง และจำไว้ว่าการมีเลขทะเบียนไม่เท่ากับการรับรองว่ารักษาโรคได้',
				en: 'Medicines, supplements, cosmetics and devices each require registration or approval appropriate to their category. Check through the FDA’s own channels — and remember that holding a registration number is not a state endorsement that the product treats disease.'
			}
		},
		{
			title: { th: 'เทียบข่าวสุขภาพกับประกาศทางการก่อนส่งต่อ', en: 'Match health news against the official notice before forwarding it' },
			text: {
				th: 'เมื่อได้รับข้อความเตือนเรื่องโรคระบาดหรือคำแนะนำการรักษา ให้ลองหาประกาศต้นทางจากเว็บไซต์ของกระทรวงหรือกรมที่ถูกอ้างถึง ถ้าหาไม่พบ ให้ชะลอการส่งต่อไว้ก่อน',
				en: 'When a warning about an outbreak or a treatment tip reaches you, look for the original notice on the site of the ministry or department it names. If you cannot find it, hold off on passing it along.'
			}
		}
	],
	faq: [
		{
			q: { th: 'กระทรวงสาธารณสุขต่างจาก สปสช. อย่างไร', en: 'How is the ministry different from the NHSO?' },
			a: {
				th: 'กระทรวงสาธารณสุขกำหนดนโยบายและมาตรฐาน และเป็นผู้ดูแลโรงพยาบาลรัฐส่วนใหญ่ของประเทศ ส่วนสำนักงานหลักประกันสุขภาพแห่งชาติหรือ สปสช. เป็นหน่วยงานแยกต่างหากที่บริหารสิทธิบัตรทองและจ่ายเงินให้หน่วยบริการ พูดง่าย ๆ คือกระทรวงดูแลฝั่งผู้ให้บริการ ส่วน สปสช. ดูแลฝั่งสิทธิของประชาชน เรื่องสิทธิ การลงทะเบียน หรือการย้ายหน่วยบริการ จึงต้องติดต่อ สปสช.',
				en: 'The ministry sets policy and standards and runs most of the country’s state hospitals. The National Health Security Office (NHSO) is a separate body that administers the Gold Card entitlement and pays providers. Roughly: the ministry looks after the provider side, the NHSO after the public’s entitlement. Questions about coverage, registration or changing your assigned provider go to the NHSO.'
			}
		},
		{
			q: { th: 'จะรู้ได้อย่างไรว่าคลินิกที่จะไปมีใบอนุญาตถูกต้อง', en: 'How do I know a clinic is properly licensed?' },
			a: {
				th: 'สถานพยาบาลเอกชนต้องได้รับอนุญาตตามกฎหมายว่าด้วยสถานพยาบาล และต้องแสดงใบอนุญาตไว้ในที่ที่ผู้รับบริการมองเห็นได้ หากไม่เห็นให้ถามได้โดยตรง ผู้ออกใบอนุญาตในกรุงเทพมหานครคือกรมสนับสนุนบริการสุขภาพ ส่วนต่างจังหวัดคือสำนักงานสาธารณสุขจังหวัด ซึ่งเป็นที่ที่คุณสอบถามหรือร้องเรียนได้ อย่ายึดคำโฆษณาของสถานพยาบาลเองเป็นข้อยืนยัน',
				en: 'Private healthcare facilities must be licensed under Thailand’s health facility law and must display that licence where patients can see it — if you cannot see one, ask. Licences are issued by the Department of Health Service Support in Bangkok and by the provincial public health office elsewhere, and those are the offices to ask or complain to. A facility’s own advertising is not confirmation.'
			}
		},
		{
			q: { th: 'เห็นข่าวสุขภาพในไลน์หรือเฟซบุ๊ก จะเช็กอย่างไรว่าจริง', en: 'Something spread on LINE or Facebook — how do I check it?' },
			a: {
				th: 'ให้สืบย้อนไปหาต้นทางเสมอ ถ้าข้อความอ้างชื่อกระทรวงหรือกรมใด ให้ไปหาประกาศฉบับนั้นบนเว็บไซต์ของหน่วยงานนั้นเอง ไม่ใช่เชื่อจากภาพจับหน้าจอที่ถูกส่งต่อกันมา เพราะภาพและเอกสารปลอมแปลงได้ง่าย ข้อความที่เร่งให้รีบแชร์ ไม่ระบุแหล่งที่มา หรืออ้างว่ามีข้อมูลที่ “แพทย์ไม่อยากให้รู้” มักเป็นข่าวลวง หากหาต้นฉบับไม่พบ ให้ถือว่ายังไม่ยืนยัน',
				en: 'Trace it back to the source. If the message names a ministry or department, look for that notice on the body’s own website rather than trusting a forwarded screenshot — images and documents are trivially faked. Messages that push you to share immediately, cite no source, or claim to reveal what “doctors don’t want you to know” are classic misinformation. If you cannot find the original, treat it as unconfirmed.'
			}
		},
		{
			q: { th: 'อาหารเสริมที่โฆษณาว่า “อย. รับรองว่ารักษาโรคได้” เชื่อได้ไหม', en: 'A supplement claims the FDA certifies it cures disease — is that real?' },
			a: {
				th: 'ไม่ควรเชื่อ การมีเลขทะเบียนหรือเลขสารบบอาหารหมายความว่าผลิตภัณฑ์ผ่านการกำกับดูแลตามประเภทของมัน ไม่ได้แปลว่าหน่วยงานรัฐรับรองสรรพคุณในการรักษาโรค การโฆษณาอาหารหรืออาหารเสริมโดยอ้างสรรพคุณทางการแพทย์เป็นสิ่งที่กฎหมายควบคุม หากพบโฆษณาลักษณะนี้ ให้ตรวจสอบข้อมูลผลิตภัณฑ์กับ อย. โดยตรง และสามารถแจ้งเรื่องไปยัง อย. ได้',
				en: 'No. A registration or food serial number means the product has been through the oversight appropriate to its category; it is not a state endorsement of therapeutic claims. Advertising food or supplements with medical claims is legally restricted. If you see it, check the product through the FDA directly — and you can report the advertisement to them.'
			}
		},
		{
			q: { th: 'เปิดเว็บไซต์กระทรวงแล้วขึ้นข้อผิดพลาดหรือโหลดไม่ขึ้น ทำอย่างไร', en: 'The ministry site shows an error or will not load — what now?' },
			a: {
				th: 'ส่วนใหญ่เป็นหน้าตรวจสอบความปลอดภัยที่คั่นอยู่ก่อนเข้าเว็บไซต์ ซึ่งต้องให้เบราว์เซอร์ประมวลผลจาวาสคริปต์สักครู่ก่อนจึงจะผ่านไปยังหน้าจริง หากค้างอยู่ตรงนั้น ให้ตรวจว่าเปิดใช้งานจาวาสคริปต์อยู่ ปิดส่วนขยายที่บล็อกสคริปต์ แล้วโหลดใหม่ ผู้ที่เข้าผ่าน VPN เครือข่ายองค์กร หรือเซิร์ฟเวอร์ในต่างประเทศ มักเจอการตรวจสอบเข้มกว่าปกติ ให้ลองใหม่ด้วยอินเทอร์เน็ตบ้านหรือเน็ตมือถือในประเทศ หากยังไม่ได้ ให้เข้าเว็บไซต์ของกรมที่เกี่ยวข้องโดยตรง เพราะแต่ละกรมใช้คนละเซิร์ฟเวอร์',
				en: 'Most often what you are seeing is the security check page in front of the site: your browser has to run a short piece of JavaScript before it is let through. If you are stuck there, check that JavaScript is enabled, switch off any script-blocking extension and reload. Connections through a VPN, a corporate network or an overseas server tend to be challenged harder. Retry on home broadband or a Thai mobile connection. If it still fails, go straight to the relevant department’s own site — each runs on separate infrastructure.'
			}
		},
		{
			q: { th: 'ใช้สิทธิรักษาที่โรงพยาบาลรัฐ ต้องติดต่อกระทรวงก่อนไหม', en: 'Do I need to contact the ministry before using a state hospital?' },
			a: {
				th: 'ไม่ต้อง การเข้ารับบริการทำที่โรงพยาบาลหรือหน่วยบริการโดยตรง โดยใช้บัตรประชาชนและสิทธิที่คุณมีอยู่ กระทรวงไม่ได้ทำหน้าที่รับคำร้องของผู้ป่วยรายบุคคล หากติดปัญหาเรื่องการใช้สิทธิ ให้ติดต่อกองทุนที่ถือสิทธิของคุณ ส่วนเรื่องคุณภาพบริการหรือพฤติกรรมของสถานพยาบาล ให้ร้องเรียนผ่านหน่วยงานที่กำกับดูแลสถานพยาบาลนั้น',
				en: 'No. You go to the hospital or health centre directly with your ID card and whatever entitlement you hold. The ministry does not take individual patient requests. If your entitlement is the problem, contact the fund that holds it; if the problem is service quality or a facility’s conduct, complain to the body that regulates that facility.'
			}
		},
		{
			q: { th: 'อยากร้องเรียนสถานพยาบาลหรือคลินิกที่ทำผิด ต้องไปที่ไหน', en: 'Where do I complain about a clinic or hospital?' },
			a: {
				th: 'เริ่มจากหน่วยงานที่ออกใบอนุญาตให้สถานพยาบาลนั้น คือกรมสนับสนุนบริการสุขภาพในกรุงเทพมหานคร และสำนักงานสาธารณสุขจังหวัดในจังหวัดอื่น หากเรื่องเกี่ยวกับพฤติกรรมของผู้ประกอบวิชาชีพโดยตรง สภาวิชาชีพของสาขานั้นเป็นผู้พิจารณา เช่น แพทยสภาสำหรับแพทย์ เตรียมชื่อสถานพยาบาล วันเวลาที่เกิดเหตุ เอกสารค่าใช้จ่ายและหลักฐานอื่นไว้ให้พร้อมก่อนยื่นเรื่อง',
				en: 'Start with the office that licensed the facility: the Department of Health Service Support in Bangkok, or the provincial public health office elsewhere. If the complaint is about a practitioner’s own conduct, the relevant professional council handles it — the Medical Council for doctors, for example. Have the facility’s name, the date and time, receipts and any other evidence ready before you file.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'กระทรวงสาธารณสุขคือหน่วยงานอะไร', en: 'What the Ministry of Public Health is' }
		},
		{
			type: 'p',
			text: {
				th: 'กระทรวงสาธารณสุข หรือที่เรียกกันสั้น ๆ ว่า สธ. คือกระทรวงที่รับผิดชอบระบบสุขภาพของประเทศในภาพรวม หน้าที่หลักคือกำหนดนโยบายและมาตรฐานทางการแพทย์และการสาธารณสุข ควบคุมและป้องกันโรค กำกับคุณภาพของสถานพยาบาล และบริหารเครือข่ายโรงพยาบาลของรัฐทั่วประเทศ ตั้งแต่โรงพยาบาลศูนย์และโรงพยาบาลทั่วไปในระดับจังหวัด ลงไปถึงโรงพยาบาลชุมชนระดับอำเภอ และโรงพยาบาลส่งเสริมสุขภาพตำบลที่อยู่ใกล้บ้านคนมากที่สุด สิ่งที่ทำให้หลายคนสับสนคือ กระทรวงไม่ใช่หน่วยงานที่ประชาชนติดต่อโดยตรงบ่อยนัก เวลาเจ็บป่วยเราไปโรงพยาบาล เวลาติดขัดเรื่องสิทธิบัตรทองเราติดต่อ สปสช. เวลาเป็นลูกจ้างในระบบเราติดต่อสำนักงานประกันสังคม กระทรวงจึงทำงานอยู่ชั้นบนของระบบมากกว่าอยู่ที่เคาน์เตอร์บริการ แต่กลับเป็นแหล่งอ้างอิงที่สำคัญที่สุดเมื่อคำถามเปลี่ยนจาก “ไปรักษาที่ไหน” เป็น “ข้อมูลนี้เชื่อได้หรือไม่”',
				en: 'The Ministry of Public Health — สธ. in everyday Thai — is the ministry responsible for the country’s health system as a whole. Its core work is setting medical and public health policy and standards, controlling and preventing disease, regulating the quality of healthcare facilities, and running the state hospital network: regional and general hospitals at provincial level, community hospitals at district level, and the sub-district health-promoting hospitals closest to where people live. The confusing part is that the ministry is not the body most people deal with directly. When you are ill you go to a hospital; when your Gold Card entitlement stalls you contact the NHSO; if you are a formal-sector employee you contact the Social Security Office. The ministry sits above the service counter rather than behind it — yet it becomes the reference that matters most when the question shifts from “where do I get treated?” to “can I trust this information?”'
			}
		},
		{
			type: 'h2',
			text: { th: 'เรื่องไหนต้องไปหาใคร', en: 'Which body handles what' }
		},
		{
			type: 'p',
			text: {
				th: 'ระบบสุขภาพไทยแยกหน้าที่กันค่อนข้างชัด แต่ชื่อหน่วยงานคล้ายกันจนคนสับสนเป็นประจำ และการไปผิดที่มักจบด้วยการถูกส่งต่อไปเรื่อย ๆ ตารางนี้สรุปว่าเรื่องที่พบบ่อยแต่ละเรื่องอยู่ในความรับผิดชอบของใคร',
				en: 'Thailand’s health system divides responsibilities fairly clearly, but the names sound alike enough that people routinely go to the wrong door and get passed along. This table sets out who owns the questions that come up most.'
			}
		},
		{
			type: 'table',
			caption: { th: 'เรื่องที่พบบ่อยกับหน่วยงานที่รับผิดชอบ', en: 'Common needs and the body responsible' },
			head: [
				{ th: 'เรื่องที่ต้องการ', en: 'What you need' },
				{ th: 'หน่วยงานที่รับผิดชอบ', en: 'Responsible body' },
				{ th: 'ข้อสังเกต', en: 'Note' }
			],
			rows: [
				[
					{ th: 'สิทธิบัตรทอง ลงทะเบียน ย้ายหน่วยบริการ', en: 'Gold Card entitlement, registration, changing provider' },
					{ th: 'สำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.)', en: 'National Health Security Office (NHSO)' },
					{ th: 'เป็นหน่วยงานแยกจากกระทรวง ทำหน้าที่บริหารสิทธิและกองทุน', en: 'A separate body from the ministry; it administers the entitlement and the fund' }
				],
				[
					{ th: 'สิทธิรักษาพยาบาลของผู้ประกันตน', en: 'Medical entitlement for insured employees' },
					{ th: 'สำนักงานประกันสังคม', en: 'Social Security Office' },
					{ th: 'อยู่ในสังกัดกระทรวงแรงงาน ไม่ใช่กระทรวงสาธารณสุข', en: 'Sits under the Ministry of Labour, not this ministry' }
				],
				[
					{ th: 'ยา อาหาร อาหารเสริม เครื่องสำอาง เครื่องมือแพทย์', en: 'Medicines, food, supplements, cosmetics, medical devices' },
					{ th: 'สำนักงานคณะกรรมการอาหารและยา (อย.)', en: 'Food and Drug Administration (FDA)' },
					{ th: 'เป็นหน่วยงานในสังกัดกระทรวงสาธารณสุข', en: 'An agency under the Ministry of Public Health' }
				],
				[
					{ th: 'ใบอนุญาตคลินิกและโรงพยาบาลเอกชน', en: 'Licences for private clinics and hospitals' },
					{ th: 'กรมสนับสนุนบริการสุขภาพ และสำนักงานสาธารณสุขจังหวัด', en: 'Department of Health Service Support and provincial health offices' },
					{ th: 'กรุงเทพมหานครอยู่กับกรม ส่วนจังหวัดอื่นอยู่กับ สสจ.', en: 'The department covers Bangkok; provincial offices cover the rest' }
				],
				[
					{ th: 'ใบอนุญาตประกอบวิชาชีพของผู้ให้บริการ', en: 'Practitioners’ professional licences' },
					{ th: 'สภาวิชาชีพของแต่ละสาขา เช่น แพทยสภา', en: 'The professional council for each field, such as the Medical Council' },
					{ th: 'คนละเรื่องกับใบอนุญาตของตัวสถานพยาบาล', en: 'A different thing from the facility’s own licence' }
				],
				[
					{ th: 'สถานการณ์โรคติดต่อและคำแนะนำการป้องกัน', en: 'Outbreak situation and prevention advice' },
					{ th: 'กรมควบคุมโรค', en: 'Department of Disease Control' },
					{ th: 'เผยแพร่รายงานสถานการณ์และประกาศเตือนเป็นระยะ', en: 'Publishes situation reports and periodic advisories' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ข้อมูลที่เผยแพร่จากส่วนกลาง', en: 'What gets published centrally' }
		},
		{
			type: 'p',
			text: {
				th: 'ข้อมูลชุดที่กระทรวงและกรมในสังกัดเผยแพร่ออกมา มักเป็นข้อมูลที่คนทั่วไปไม่ได้เข้าไปอ่านทุกวัน แต่กลายเป็นสิ่งที่ต้องหาให้เจอทันทีเมื่อมีข่าวลือแพร่ในกลุ่มไลน์ หรือเมื่อต้องตัดสินใจเรื่องสุขภาพของคนในครอบครัว โดยหลักแล้วครอบคลุมสี่กลุ่มต่อไปนี้',
				en: 'The material the ministry and its departments publish is not daily reading for most people — but it becomes the thing you urgently need when a rumour is circulating in a family chat, or when a decision about a relative’s health has to be made. It falls broadly into four groups.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'รายงานสถานการณ์โรคติดต่อและโรคระบาด พร้อมคำแนะนำสำหรับประชาชนและบุคลากรทางการแพทย์',
					en: 'Communicable disease and outbreak situation reports, with guidance for the public and for health workers.'
				},
				{
					th: 'คำเตือนสุขภาพตามฤดูกาล เช่น ไข้เลือดออกในฤดูฝน โรคทางเดินหายใจในช่วงอากาศเย็นและฝุ่นละออง หรือโรคอาหารเป็นพิษในหน้าร้อน',
					en: 'Seasonal advisories — dengue in the rainy months, respiratory illness in cool and dusty air, food-borne illness in the hot season.'
				},
				{
					th: 'มาตรฐานและหลักเกณฑ์ของสถานพยาบาล รวมถึงแนวทางที่หน่วยบริการต้องใช้เป็นกรอบการทำงาน',
					en: 'Standards and criteria for healthcare facilities, including the frameworks providers are expected to work within.'
				},
				{
					th: 'ประกาศและกฎหมายลำดับรองด้านสาธารณสุข ซึ่งมีผลกับทั้งสถานประกอบการและประชาชนทั่วไป',
					en: 'Public health announcements and subordinate legislation, affecting businesses and the general public alike.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ตรวจสอบสถานพยาบาลก่อนตัดสินใจรักษา', en: 'Check the facility before you commit to treatment' }
		},
		{
			type: 'p',
			text: {
				th: 'ป้ายหน้าร้าน ภาพในโฆษณา หรือคำว่า “มาตรฐานสากล” บนเว็บไซต์ของคลินิก ไม่ใช่หลักฐานว่าสถานพยาบาลนั้นได้รับอนุญาตอย่างถูกต้อง สถานพยาบาลเอกชนต้องได้รับอนุญาตตามกฎหมายว่าด้วยสถานพยาบาล และต้องแสดงใบอนุญาตให้ผู้รับบริการเห็นได้ ณ สถานที่ให้บริการ ขณะเดียวกันผู้ที่ลงมือรักษาก็ต้องมีใบอนุญาตประกอบวิชาชีพตรงกับงานที่ทำ ซึ่งเป็นคนละใบกับใบอนุญาตของสถานพยาบาล วิธีตรวจสอบที่ใช้ได้จริงคือถามไปที่หน่วยงานผู้ออกใบอนุญาต ไม่ใช่ถามจากสถานพยาบาลเอง สำหรับพื้นที่กรุงเทพมหานคร ผู้ออกใบอนุญาตคือกรมสนับสนุนบริการสุขภาพ ส่วนจังหวัดอื่นคือสำนักงานสาธารณสุขจังหวัด หน่วยงานเดียวกันนี้ยังเป็นที่รับเรื่องร้องเรียนเมื่อบริการไม่เป็นไปตามที่ควรจะเป็น สำหรับใบอนุญาตของผู้ประกอบวิชาชีพ ให้ตรวจสอบกับสภาวิชาชีพของสาขานั้นโดยตรง',
				en: 'A shopfront sign, a glossy advertisement, or the phrase “international standard” on a clinic’s website proves nothing about whether it is licensed. Private facilities must be licensed under Thailand’s health facility law and must display that licence where patients can see it. Separately, whoever actually performs the treatment needs a professional licence matching the work — a different document from the facility’s licence. The check that actually works is asking the office that issued the licence, not the facility itself. In Bangkok that is the Department of Health Service Support; in other provinces it is the provincial public health office. The same offices receive complaints when care falls short. For an individual practitioner’s licence, go to the professional council for that field.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'สิ่งที่ไม่ใช่หลักฐานการได้รับอนุญาต', en: 'What is not proof of a licence' },
			text: {
				th: 'รีวิวในโซเชียลมีเดีย จำนวนผู้ติดตาม ภาพถ่ายคู่กับบุคคลมีชื่อเสียง ใบประกาศจากการอบรมระยะสั้น และคำว่า “ได้รับการรับรอง” ที่ไม่บอกว่าใครเป็นผู้รับรอง ล้วนไม่ใช่เครื่องยืนยันว่าสถานพยาบาลหรือผู้ให้บริการมีใบอนุญาตถูกต้อง หากไม่เห็นใบอนุญาตแสดงไว้ ให้ถามตรง ๆ ก่อนตกลงรับบริการ โดยเฉพาะบริการที่มีการฉีด สอด หรือผ่าตัด',
				en: 'Social media reviews, follower counts, photographs with celebrities, certificates from short courses, and the word “certified” with no named certifier are none of them evidence that a facility or practitioner is licensed. If no licence is on display, ask before agreeing to anything — particularly for procedures involving injection, insertion or surgery.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ข่าวสุขภาพปลอมกับการหาแหล่งอ้างอิงที่เชื่อถือได้', en: 'Health misinformation and where to check it' }
		},
		{
			type: 'p',
			text: {
				th: 'ข้อมูลสุขภาพที่ไม่ผ่านการตรวจสอบแพร่กระจายได้เร็วเป็นพิเศษในไทย ทั้งในกลุ่มไลน์ของครอบครัว โพสต์ที่ถูกแชร์ต่อบนเฟซบุ๊ก และคลิปสั้นที่อ้างสรรพคุณเกินจริง รูปแบบที่พบซ้ำ ๆ มีอยู่ไม่กี่แบบ ได้แก่ การอ้างว่าสมุนไพรหรืออาหารเสริมชนิดหนึ่งรักษาโรคร้ายให้หายขาด การเตือนว่ามีโรคระบาดใหม่โดยไม่ระบุที่มา และการหยิบชื่อแพทย์ โรงพยาบาล หรือหน่วยงานที่มีอยู่จริงมาประกอบเรื่องที่แต่งขึ้นเพื่อให้ดูน่าเชื่อ จุดตั้งต้นของการตรวจสอบคือหน่วยงานทางการ กระทรวงสาธารณสุขและกรมในสังกัดเป็นผู้เผยแพร่ข้อมูลสถานการณ์โรคและคำแนะนำอย่างเป็นทางการ ส่วน อย. เป็นผู้กำกับดูแลว่าผลิตภัณฑ์ใดได้รับอนุญาตจริง และกล่าวอ้างอะไรได้บ้าง ข้อควรจำที่ใช้ได้เสมอคือ การมีเลขทะเบียนกับ อย. หมายถึงผลิตภัณฑ์นั้นผ่านการกำกับดูแลตามประเภทของมัน ไม่ได้แปลว่ารัฐรับรองว่ารักษาโรคได้',
				en: 'Unverified health information travels unusually fast in Thailand — through family LINE groups, reshared Facebook posts, and short videos making outsized claims. The patterns repeat: a herb or supplement said to cure a serious disease outright; a warning about a new outbreak with no source attached; and the name of a real doctor, hospital or agency attached to an invented story to lend it weight. The starting point for checking is the official body. The ministry and its departments issue the authoritative disease situation reports and advice; the FDA is the regulator that determines which products are genuinely approved and what may be claimed for them. One rule holds up everywhere: an FDA registration number means the product has passed the oversight appropriate to its category — never that the state has endorsed it as a cure.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'สืบย้อนหาต้นทางเสมอ หากตามกลับไปไม่เจอหน่วยงานหรือผู้รับผิดชอบที่ระบุชื่อได้ ให้ถือว่ายังไม่ยืนยัน',
					en: 'Always trace back to the source; if you cannot reach a named body or a named person, treat it as unconfirmed.'
				},
				{
					th: 'ระวังข้อความที่เร่งให้แชร์ต่อทันที หรืออ้างว่ามีข้อมูลที่ “แพทย์ไม่อยากให้คุณรู้”',
					en: 'Be wary of anything urging you to forward it immediately, or claiming to reveal what “doctors don’t want you to know”.'
				},
				{
					th: 'ผลิตภัณฑ์ที่อ้างว่ารักษาได้สารพัดโรคในตัวเดียว เป็นสัญญาณอันตราย ไม่ใช่จุดขาย',
					en: 'A product claiming to cure many unrelated conditions at once is a warning sign, not a selling point.'
				},
				{
					th: 'ภาพจับหน้าจอข่าวและเอกสารราชการปลอมแปลงได้ง่ายมาก ให้ยึดต้นฉบับจากเว็บไซต์ของหน่วยงานเป็นหลัก',
					en: 'Screenshots of news and official documents are trivially faked; rely on the original on the agency’s own site.'
				},
				{
					th: 'เมื่อไม่แน่ใจ อย่าเพิ่งส่งต่อ การหยุดข้อความหนึ่งข้อความไว้ก่อนมีต้นทุนต่ำกว่าการช่วยกระจายข้อมูลผิด',
					en: 'When unsure, do not forward. Holding one message costs far less than helping bad information travel.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงมีอยู่', en: 'Why this page exists' }
		},
		{
			type: 'p',
			text: {
				th: 'เว็บไซต์ของกระทรวงสาธารณสุขมีหน้าตรวจสอบของ Cloudflare คั่นอยู่ด้านหน้า ผู้เข้าชมต้องให้เบราว์เซอร์ประมวลผลจาวาสคริปต์ก่อนจึงจะผ่านเข้าไปได้ เบราว์เซอร์ทั่วไปผ่านได้ในไม่กี่วินาที และ Cloudflare มักยกเว้นให้บอตของเครื่องมือค้นหาที่ยืนยันตัวตนแล้ว Google จึงน่าจะเข้าถึงเว็บไซต์ได้ตามปกติ แม้เราจะยืนยันจากภายนอกไม่ได้ เพราะบอตของ Google ตัวจริงเข้ามาจากช่วงหมายเลขไอพีของ Google เอง และพิสูจน์ตัวตนด้วยการตรวจสอบ DNS ย้อนกลับ ซึ่งการทดสอบจากภายนอกเลียนแบบไม่ได้ ส่วนไฟล์ robots.txt นั้นเปิดให้ทุกคนเรียกดูได้ และกฎในไฟล์สาธารณะนี้เท่านั้นที่ถือเป็นคำตอบที่เชื่อถือได้ว่าบอตใดเข้าถึงอะไรได้บ้าง สิ่งที่ผ่านเข้าไปไม่ได้แน่ ๆ คือเครื่องมือที่อ่านหน้าเว็บโดยไม่ประมวลผลจาวาสคริปต์ ทั้งบริการเก็บถาวรเว็บ เครื่องมือตรวจสอบจากภายนอก และผู้ช่วย AI ข้อสุดท้ายกระทบเรื่องสุขภาพมากที่สุด เพราะเมื่อมีคนถามผู้ช่วย AI ว่าข่าวสุขภาพที่ถูกส่งต่อมาจริงหรือไม่ ผู้ช่วยนั้นเปิดเว็บไซต์ของกระทรวงเพื่อตรวจสอบไม่ได้ ขณะเดียวกันคำที่คนไทยพิมพ์ค้นหาก็มักเป็นคำถามปลายเปิด เช่น “คลินิกนี้มีใบอนุญาตไหม” หรือ “ข่าวที่แม่ส่งมาจริงหรือเปล่า” มากกว่าจะเป็นชื่อกระทรวงหรือชื่อกรม หน้านี้จึงทำหน้าที่เป็นป้ายบอกทางในภาษาที่คนใช้จริง ระบุว่าเรื่องไหนอยู่กับหน่วยงานใด แล้วส่งต่อไปยังเว็บไซต์ทางการโดยตรง ในเรื่องสุขภาพ การรู้ว่าควรฟังใครสำคัญไม่แพ้ตัวข้อมูลเอง เพราะความเข้าใจผิดครั้งเดียวอาจหมายถึงการรักษาที่ล่าช้าหรือเงินที่เสียไปกับสิ่งที่ไม่ได้ผล ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่มีความเกี่ยวข้องกับกระทรวงสาธารณสุขหรือหน่วยงานใดของรัฐ เราไม่รับคำร้อง ไม่รับเรื่องร้องเรียน และไม่เก็บข้อมูลส่วนบุคคลแทนหน่วยงานใดทั้งสิ้น',
				en: 'A Cloudflare check page sits in front of the ministry’s website: a visitor has to run JavaScript before being let through. An ordinary browser clears it in a moment, and Cloudflare normally exempts the search-engine crawlers it has verified, so Google most likely reaches the site — though we cannot confirm that from outside, because the real Googlebot crawls from Google’s own address ranges and proves itself by reverse DNS, which no external test can imitate. The site’s robots.txt is served to anyone who asks, and a rule in that public file would be the only authoritative word on what crawlers may fetch. What certainly does not get through is anything that reads a page without running JavaScript: web archives, outside monitoring, and AI assistants — and that last one bites hardest here, because an assistant asked whether a forwarded health claim is true cannot open the ministry to check it. Meanwhile the phrases Thai people actually type are open questions — “is this clinic licensed?”, “is the thing my mother forwarded real?” — not the name of a ministry or a department. So this page works as a signpost in ordinary language: it says which body owns which problem, then hands you straight to the official site. In health, knowing whose word to take is worth as much as the information itself, because one misunderstanding can mean delayed treatment or money spent on something that was never going to work. ThaiGov.co is an independent directory with no affiliation to the Ministry of Public Health or any government body. We do not accept applications, take complaints, or collect personal data on any agency’s behalf.'
			}
		}
	],
	crawl: {
		host: 'www.moph.go.th',
		verdict: 'partial',
		kind: 'js-challenge',
		status: 403,
		snippet: 'Full desktop-Chrome request profile\n  GET /  ->  403  (Cloudflare managed challenge (JavaScript interstitial))\nGooglebot user-agent\n  GET /  ->  403\nGET /robots.txt  ->  200\n\nHeadless Chromium (real browser engine)\n  GET /  ->  200  (served normally)\n  GET /robots.txt  ->  200\n\n# As a condition of accessing this website, you agree to abide by the following\n# content signals:\n\n# (a)  If a Content-Signal = yes, you may collect content for the corresponding\n#      use.\n# (b)  If a Content-Signal = no, you may not collect content for the\n#      corresponding use.\n# (c)  If the website operator do',
		checkedAt: '2026-08-28',
		note: {
			th: 'เมื่อเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ เซิร์ฟเวอร์ตอบกลับด้วยหน้าท้าทายของ Cloudflare ที่ต้องประมวลผลจาวาสคริปต์ก่อนจึงจะผ่านได้ เบราว์เซอร์จริงผ่านได้ และบอตของเครื่องมือค้นหาที่ Cloudflare ยืนยันตัวตนแล้วมักได้รับการยกเว้น เราจึงไม่สรุปว่า Google ถูกปิดกั้น แต่สิ่งที่ปิดกั้นแน่นอนคือเครื่องมือที่ไม่ประมวลผลจาวาสคริปต์ ทั้งบริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI',
			en: 'Requested with a full browser profile, the server answers with a Cloudflare challenge that must be solved by running JavaScript. Real browsers pass it, and search-engine crawlers Cloudflare has verified are normally exempted — so we do not conclude that Google is blocked. What is certainly blocked is anything that does not execute JavaScript: web archives, third-party monitoring, and AI assistants.'
		}
	},
	priority: 79,
	updated: '2026-08-28'
};
