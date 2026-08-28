import type { Service } from '../types';

export const service: Service = {
	slug: 'hii-thaiwater',
	name: {
		th: 'ThaiWater — ข้อมูลน้ำ ฝน และการเตือนภัยน้ำท่วม',
		en: 'ThaiWater — Rainfall, River Levels and Flood Warnings'
	},
	shortName: { th: 'ThaiWater ข้อมูลน้ำ', en: 'ThaiWater water data' },
	url: 'https://www.thaiwater.net/',
	altUrls: [
		{
			label: { th: 'เว็บไซต์สถาบันสารสนเทศทรัพยากรน้ำ (สสน.)', en: 'Hydro-Informatics Institute (HII) main website' },
			url: 'https://www.hii.or.th/'
		}
	],
	agency: 'hii',
	categories: ['environment'],
	summary: {
		th: 'ดูปริมาณฝน ระดับน้ำในแม่น้ำลำคลอง ปริมาณน้ำในเขื่อน ภาพเรดาร์ตรวจอากาศ และรายงานสถานการณ์น้ำท่วมและภัยแล้งทั่วประเทศ ผ่านคลังข้อมูลน้ำแห่งชาติ ThaiWater',
		en: 'See rainfall totals, river levels, reservoir storage, weather radar and flood and drought reporting on ThaiWater, Thailand’s national water data platform.'
	},
	deck: {
		th: 'คลังข้อมูลน้ำของประเทศที่รวมข้อมูลฝน ระดับน้ำ และปริมาณน้ำในเขื่อนจากหลายหน่วยงานไว้ในที่เดียว เพื่อให้ทุกคนดูสถานการณ์น้ำของพื้นที่ตัวเองได้',
		en: 'Thailand’s national water data platform, gathering rainfall, river levels and reservoir volumes from many agencies into one place so anyone can read the situation where they live.'
	},
	keywords: {
		th: [
			'เช็คน้ำท่วม',
			'น้ำท่วมวันนี้',
			'ระดับน้ำแม่น้ำ',
			'ระดับน้ำเจ้าพระยา',
			'ปริมาณน้ำในเขื่อน',
			'เขื่อนกี่เปอร์เซ็นต์',
			'ฝนตกที่ไหนบ้าง',
			'เรดาร์ฝน',
			'สถานการณ์น้ำ',
			'เตือนภัยน้ำท่วม',
			'ThaiWater',
			'คลังข้อมูลน้ำแห่งชาติ',
			'สถานการณ์ภัยแล้ง',
			'สสน.'
		],
		en: [
			'ThaiWater',
			'Thailand flood monitoring',
			'Thailand river water level',
			'Thailand reservoir storage',
			'Thailand rainfall radar',
			'Hydro-Informatics Institute',
			'Thailand flood warning',
			'Thailand drought situation'
		]
	},
	features: [
		{
			icon: 'cloud',
			title: { th: 'ปริมาณฝนจากสถานีตรวจวัดทั่วประเทศ', en: 'Rainfall from stations nationwide' },
			text: {
				th: 'ดูฝนสะสมรายชั่วโมงและรายวันจากสถานีโทรมาตรที่กระจายอยู่ทุกภูมิภาค เห็นได้ทันทีว่าฝนกำลังตกหนักอยู่ตรงไหน',
				en: 'Hourly and daily rainfall totals from telemetry stations across every region, so you can see at a glance where the heavy rain is falling.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'ระดับน้ำในแม่น้ำและลำคลอง', en: 'River and canal levels' },
			text: {
				th: 'ติดตามระดับน้ำที่สถานีวัดตามลำน้ำสายหลัก พร้อมกราฟย้อนหลังที่ทำให้เห็นว่าน้ำกำลังขึ้นหรือกำลังลด',
				en: 'Follow gauge readings along the main waterways, with historical graphs showing whether the water is still rising or already falling.'
			}
		},
		{
			icon: 'building',
			title: { th: 'ปริมาณน้ำในเขื่อนและอ่างเก็บน้ำ', en: 'Reservoir and dam storage' },
			text: {
				th: 'ดูปริมาตรน้ำที่กักเก็บไว้และสัดส่วนเทียบกับความจุ ซึ่งเป็นตัวเลขที่ใช้ประเมินได้ทั้งความเสี่ยงน้ำท่วมและความเสี่ยงขาดน้ำ',
				en: 'Stored volume and share of total capacity — the same figure used to gauge both flood risk and the risk of running short.'
			}
		},
		{
			icon: 'map',
			title: { th: 'แผนที่และภาพเรดาร์ตรวจอากาศ', en: 'Maps and weather radar' },
			text: {
				th: 'ภาพเรดาร์รวมและแผนที่เชิงพื้นที่ช่วยให้เห็นกลุ่มฝนที่กำลังเคลื่อนเข้ามา ก่อนที่น้ำจะไหลลงมาถึงลำน้ำในพื้นที่',
				en: 'Composite radar imagery and spatial maps show approaching rain bands before that water reaches the streams near you.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'รายงานสถานการณ์น้ำท่วมและภัยแล้ง', en: 'Flood and drought situation reports' },
			text: {
				th: 'สรุปสถานการณ์น้ำในภาพรวมของประเทศและพื้นที่เฝ้าระวัง ช่วยให้เห็นบริบทมากกว่าการดูตัวเลขจากสถานีเดียว',
				en: 'Round-ups of the national picture and the areas under watch, giving context that a single gauge reading cannot.'
			}
		},
		{
			icon: 'clock',
			title: { th: 'ข้อมูลย้อนหลังสำหรับเทียบสถานการณ์', en: 'Historical data for comparison' },
			text: {
				th: 'เรียกดูข้อมูลย้อนหลังเพื่อเทียบว่าปีนี้ฝนมากหรือน้อยกว่าปีก่อน และน้ำในอ่างเก็บน้ำต่างจากช่วงเดียวกันของปีที่ผ่านมาอย่างไร',
				en: 'Pull up past records to compare this year’s rain with last year’s, and to see how reservoir levels differ from the same point in earlier seasons.'
			}
		}
	],
	steps: [
		{
			title: { th: 'เปิดเว็บไซต์แล้วเลือกพื้นที่ที่คุณสนใจ', en: 'Open the site and zoom to your area' },
			text: {
				th: 'เริ่มจากภาพรวมทั้งประเทศ แล้วค่อยย่อขอบเขตลงมาที่ภาค จังหวัด หรือลุ่มน้ำที่บ้านของคุณตั้งอยู่ ตัวเลขจะมีความหมายขึ้นมากเมื่อดูเฉพาะพื้นที่ที่เกี่ยวข้องกับตัวเอง',
				en: 'Start from the national view, then narrow to the region, province or river basin you live in. The numbers only become meaningful once they are about your own area.'
			}
		},
		{
			title: { th: 'ดูปริมาณฝนสะสมและภาพเรดาร์ก่อน', en: 'Check accumulated rainfall and radar first' },
			text: {
				th: 'ฝนคือต้นทางของทุกอย่าง หากฝนสะสมในพื้นที่ต้นน้ำสูงผิดปกติติดต่อกันหลายวัน ให้เริ่มเฝ้าระวังระดับน้ำในลำน้ำถัดไป แม้ฝนที่บ้านคุณจะยังไม่ตกก็ตาม',
				en: 'Rain is where everything begins. If upstream areas have taken unusually heavy rain for several days running, start watching the river gauges next — even if it is not raining where you are.'
			}
		},
		{
			title: { th: 'ตรวจระดับน้ำของสถานีที่อยู่เหนือพื้นที่ของคุณ', en: 'Read the gauge upstream of you' },
			text: {
				th: 'น้ำใช้เวลาเดินทาง สถานีวัดที่อยู่เหนือน้ำจึงเป็นสัญญาณล่วงหน้าที่ดีที่สุด และการดูว่ากราฟไต่ขึ้นเร็วแค่ไหนสำคัญกว่าการดูตัวเลข ณ วินาทีเดียว',
				en: 'Water takes time to travel, so an upstream gauge is your best early signal. How fast the graph is climbing matters more than any single instantaneous reading.'
			}
		},
		{
			title: { th: 'ดูปริมาณน้ำในอ่างเก็บน้ำที่เกี่ยวข้อง', en: 'Look at the relevant reservoirs' },
			text: {
				th: 'อ่างเก็บน้ำที่เกือบเต็มเหลือพื้นที่รับน้ำน้อยลง จึงมีโอกาสต้องระบายน้ำออกมากขึ้น ส่วนอ่างที่น้ำต่ำกว่าปกติของช่วงเวลานั้นเป็นสัญญาณของความเสี่ยงขาดแคลนน้ำในฤดูแล้งถัดไป',
				en: 'A reservoir close to full has little room left to absorb inflow, raising the chance of larger releases. One sitting below its normal level for the season is an early sign of shortage ahead.'
			}
		},
		{
			title: { th: 'อ่านรายงานสถานการณ์ประกอบกับพยากรณ์อากาศ', en: 'Pair the situation report with the forecast' },
			text: {
				th: 'ThaiWater บอกว่าตอนนี้น้ำอยู่ตรงไหน ส่วนพยากรณ์ของกรมอุตุนิยมวิทยาบอกว่าฝนจะตกอีกหรือไม่ ใช้สองอย่างคู่กันจึงจะเห็นภาพครบ',
				en: 'ThaiWater tells you where the water is now; the Meteorological Department’s forecast tells you whether more rain is coming. You need both to see the whole picture.'
			}
		},
		{
			title: { th: 'ยึดประกาศของหน่วยงานในพื้นที่เป็นคำสั่งสุดท้าย', en: 'Treat local announcements as the final word' },
			text: {
				th: 'ข้อมูลบนเว็บช่วยให้เตรียมตัวล่วงหน้าได้ แต่การตัดสินใจขนย้ายสิ่งของหรืออพยพ ให้ทำตามประกาศของจังหวัด อำเภอ ท้องถิ่น และหน่วยงานป้องกันและบรรเทาสาธารณภัยในพื้นที่',
				en: 'The data helps you prepare, but decisions to move belongings or evacuate should follow the announcements of your province, district, local authority and disaster-prevention office.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ThaiWater ต่างจากกรมอุตุนิยมวิทยาอย่างไร', en: 'How is ThaiWater different from the Meteorological Department?' },
			a: {
				th: 'กรมอุตุนิยมวิทยาเป็นหน่วยงานพยากรณ์อากาศ บอกว่าฝนจะตกที่ไหนและมีพายุเข้าหรือไม่ ส่วน ThaiWater แสดงค่าที่ตรวจวัดได้จริง ทั้งฝนที่ตกไปแล้ว ระดับน้ำในลำน้ำ และปริมาณน้ำในเขื่อน อยากรู้ว่าอากาศข้างหน้าจะเป็นอย่างไรให้ดูกรมอุตุฯ อยากรู้ว่าตอนนี้น้ำอยู่ระดับไหนให้ดู ThaiWater',
				en: 'The Meteorological Department forecasts weather — where rain will fall and whether a storm is approaching. ThaiWater carries measured water data: rain that has already fallen, levels in the waterways, and volumes held in reservoirs. Use the forecast for what is coming, and ThaiWater for where the water stands now.'
			}
		},
		{
			q: { th: 'ข้อมูลอัปเดตบ่อยแค่ไหน ถือว่าเรียลไทม์หรือไม่', en: 'How often is the data updated — is it real time?' },
			a: {
				th: 'สถานีโทรมาตรส่งข้อมูลเข้าระบบเป็นช่วงเวลาถี่ ๆ จึงใกล้เคียงเวลาจริงมากกว่ารายงานรายวัน แต่ยังมีความหน่วงจากการรับส่งและประมวลผลอยู่บ้าง ให้ดูเวลาที่ระบบกำกับไว้กับข้อมูลแต่ละชุดเสมอ อย่าถือว่าตัวเลขบนหน้าจอคือค่าที่วัดได้ในวินาทีนี้พอดี',
				en: 'Telemetry stations report at frequent intervals, so the picture is far closer to live than a once-a-day bulletin — but transmission and processing still add a lag. Always check the timestamp shown with each dataset, and do not read the figure on screen as the value measured this very second.'
			}
		},
		{
			q: { th: 'ดูอย่างไรว่าบ้านของฉันเสี่ยงน้ำท่วมหรือไม่', en: 'How do I tell whether my home is at risk of flooding?' },
			a: {
				th: 'เว็บไซต์ไม่ได้ประเมินเป็นรายบ้าน สิ่งที่ทำได้คือดูสามอย่างประกอบกัน ได้แก่ ฝนสะสมในพื้นที่ต้นน้ำ ระดับน้ำที่สถานีเหนือบ้านคุณและแนวโน้มว่าขึ้นเร็วแค่ไหน และปริมาณน้ำในอ่างเก็บน้ำที่อยู่เหนือขึ้นไป แล้วเทียบกับประสบการณ์น้ำท่วมของพื้นที่ในอดีต ควบคู่กับประกาศของหน่วยงานท้องถิ่น',
				en: 'The site does not assess individual houses. What you can do is read three things together: accumulated rain in the upstream catchment, the gauge above you and how steeply it is climbing, and the storage in any reservoir upriver. Weigh that against how your area has flooded before, alongside local announcements.'
			}
		},
		{
			q: { th: 'ตัวเลขเปอร์เซ็นต์ความจุของเขื่อนหมายความว่าอย่างไร', en: 'What does a reservoir’s percentage of capacity mean?' },
			a: {
				th: 'โดยทั่วไปคือสัดส่วนของปริมาตรน้ำที่กักเก็บอยู่เทียบกับความจุของอ่างนั้น แต่น้ำที่กักเก็บไว้ไม่ได้นำมาใช้ได้ทั้งหมด เพราะมีน้ำก้นอ่างส่วนหนึ่งที่ระบายออกมาใช้ไม่ได้ ระบบจึงมักแสดงปริมาณน้ำใช้การได้แยกไว้อีกค่าหนึ่ง ให้ดูสองตัวเลขนี้ประกอบกันและดูคำนิยามที่เว็บไซต์กำกับไว้',
				en: 'Broadly, it is the stored volume as a share of that reservoir’s capacity. Not all stored water is usable, though: a portion sits below the outlets and cannot be drawn down, which is why a separate usable-water figure is normally shown. Read both numbers together, and check the definitions the site gives.'
			}
		},
		{
			q: { th: 'เปิดเว็บแล้วแผนที่ไม่ขึ้น หรือบางสถานีไม่มีข้อมูล ต้องทำอย่างไร', en: 'The map will not load, or a station shows no data — what now?' },
			a: {
				th: 'ช่วงน้ำท่วมใหญ่จะมีคนเข้าเว็บพร้อมกันมาก หน้าเว็บจึงช้าหรือแผนที่โหลดไม่ครบ ให้ลองรีเฟรช เปลี่ยนเครือข่าย หรือรอสักครู่แล้วเข้าใหม่ ส่วนสถานีที่ไม่มีตัวเลข มักเกิดจากอุปกรณ์ตรวจวัดหรือสัญญาณขัดข้องชั่วคราว ให้ดูสถานีข้างเคียงบนลำน้ำเดียวกันแทน อย่าเพิ่งสรุปว่าน้ำลดเพราะกราฟหายไป',
				en: 'During a major flood a great many people load the site at once, so pages can crawl or maps render incompletely; refresh, switch network, or wait a moment. When one station shows no value it is usually a temporary sensor or transmission fault — check a neighbouring gauge on the same river rather than concluding the water has dropped just because the graph went blank.'
			}
		},
		{
			q: { th: 'ภาพน้ำท่วมและข่าวเตือนภัยที่แชร์กันมา ตรวจสอบอย่างไรว่าจริง', en: 'How do I check whether a forwarded flood photo or warning is genuine?' },
			a: {
				th: 'ข่าวลือเรื่องเขื่อนแตกและภาพน้ำท่วมเก่าที่ถูกนำมาแชร์ซ้ำเกิดขึ้นแทบทุกฤดูฝน วิธีตรวจสอบที่ตรงที่สุดคือเปิดเว็บไซต์ทางการเอง แล้วดูว่าระดับน้ำและปริมาณน้ำในเขื่อนของพื้นที่นั้นตรงกับที่กล่าวอ้างหรือไม่ พร้อมดูวันเวลาที่กำกับข้อมูลไว้ หากไม่ตรงหรือหาที่มาไม่ได้ ให้ยึดประกาศของหน่วยงานราชการในพื้นที่และอย่าส่งต่อ',
				en: 'Rumours of a dam collapse, and old flood photos recirculated as new, surface almost every rainy season. The most direct check is to open the official site yourself and see whether the levels and reservoir volumes for that area match the claim, paying attention to the timestamps. If they do not match, or you cannot trace the source, rely on the local authorities and do not forward it.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ThaiWater คืออะไร', en: 'What is ThaiWater?' }
		},
		{
			type: 'p',
			text: {
				th: 'ThaiWater คือเว็บไซต์เปิดสาธารณะของสถาบันสารสนเทศทรัพยากรน้ำ (สสน.) ซึ่งทำหน้าที่เป็นคลังข้อมูลน้ำของประเทศ รวบรวมข้อมูลที่เกี่ยวกับน้ำจากหลายหน่วยงานมาไว้ในที่เดียว แล้วแสดงเป็นแผนที่ กราฟ และตารางที่ประชาชนเปิดดูได้เอง โดยไม่ต้องสมัครสมาชิกหรือทำเรื่องขอข้อมูล',
				en: 'ThaiWater is the public website of the Hydro-Informatics Institute (HII), which serves as Thailand’s national repository for water data. It draws water-related records from many agencies into one place and presents them as maps, graphs and tables anyone can open — no registration, no formal request.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'คุณค่าของแพลตฟอร์มอยู่ที่การรวมข้อมูลข้ามหน่วยงาน ฝน ระดับน้ำ ปริมาณน้ำในเขื่อน และภาพเรดาร์ ล้วนวัดและดูแลโดยคนละหน่วยงาน เดิมคนที่อยากเห็นภาพรวมต้องไล่เปิดเว็บไซต์ทีละแห่ง ThaiWater นำมาวางไว้บนแผนที่เดียวกัน จึงเห็นความสัมพันธ์ระหว่างฝนที่ตก น้ำที่ไหล และน้ำที่กักเก็บไว้',
				en: 'Its value lies in crossing institutional lines. Rainfall, river levels, reservoir volumes and radar imagery are each measured by different bodies, and anyone wanting the whole picture once had to visit several sites in turn. ThaiWater puts those layers on one map, making the relationship between rain falling, water flowing and water held back visible at a glance.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ข้อมูลที่ดูได้บนแพลตฟอร์ม', en: 'What the platform shows' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ปริมาณฝนจากสถานีโทรมาตรทั่วประเทศ ทั้งค่าสะสมรายชั่วโมงและรายวัน',
					en: 'Rainfall from telemetry stations nationwide, as hourly and daily accumulations.'
				},
				{
					th: 'ระดับน้ำในแม่น้ำและคลองที่สถานีวัดตามลำน้ำสายหลัก พร้อมกราฟแนวโน้ม',
					en: 'Water levels at gauging stations along the main rivers and canals, with trend graphs.'
				},
				{
					th: 'ปริมาตรน้ำในเขื่อนและอ่างเก็บน้ำ พร้อมสัดส่วนเทียบกับความจุแต่ละแห่ง',
					en: 'Volumes held in dams and reservoirs, with each one’s share of total capacity.'
				},
				{
					th: 'ภาพเรดาร์ตรวจอากาศแบบรวม ที่ช่วยให้เห็นว่ากลุ่มฝนกำลังเคลื่อนไปทางใด',
					en: 'Composite weather radar imagery showing which way rain bands are moving.'
				},
				{
					th: 'รายงานสรุปสถานการณ์น้ำ ทั้งช่วงน้ำหลากและช่วงที่หลายพื้นที่เผชิญภัยแล้ง',
					en: 'Situation summaries covering both flood periods and stretches of drought.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ใครใช้ข้อมูลชุดนี้บ้าง', en: 'Who relies on this data' }
		},
		{
			type: 'p',
			text: {
				th: 'กลุ่มใหญ่ที่สุดคือคนที่อยู่ในพื้นที่น้ำท่วมซ้ำ โดยเฉพาะบ้านริมแม่น้ำและชุมชนในที่ลุ่ม ซึ่งรู้ล่วงหน้าเพียงไม่กี่ชั่วโมงก็พอให้ยกของขึ้นที่สูงและย้ายรถได้ทัน ถัดมาคือเกษตรกรที่วางแผนเพาะปลูกโดยอิงกับน้ำต้นทุนในอ่างเก็บน้ำ และเจ้าหน้าที่ท้องถิ่นที่ใช้ข้อมูลชุดเดียวกันเตรียมกำลังและแจ้งเตือนชาวบ้าน อีกกลุ่มคือคนที่มีครอบครัวอยู่ในพื้นที่เสี่ยง การเปิดดูสถานีใกล้บ้านญาติเองมักได้คำตอบเร็วกว่ารอข่าวที่ส่งต่อกันมา',
				en: 'The largest group is people living where flooding recurs — riverside houses and low-lying communities, for whom a few hours of notice is enough to lift belongings and move a vehicle. Next are farmers planning planting around the water held in reservoirs, and local officials working from the same figures when positioning resources and alerting residents. Then there are people with family in a risk area: checking the gauge near a relative’s home yourself usually answers the question faster than waiting on second-hand reports.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ThaiWater กับกรมอุตุนิยมวิทยา ใช้ต่างกันอย่างไร', en: 'ThaiWater or the weather service — which do you need?' }
		},
		{
			type: 'p',
			text: {
				th: 'ความสับสนที่พบบ่อยคือการเข้าใจว่าสองหน่วยงานนี้ทำงานอย่างเดียวกัน ความจริงคือคนละบทบาทและใช้เสริมกัน การเลือกแหล่งข้อมูลให้ถูกตั้งแต่ต้นจึงช่วยประหยัดเวลาในสถานการณ์ที่ต้องตัดสินใจเร็ว',
				en: 'The most common confusion is assuming the two agencies do the same job. They occupy different roles and are meant to be read together, and picking the right source at the outset saves real time when decisions must be made quickly.'
			}
		},
		{
			type: 'table',
			caption: { th: 'ใครให้ข้อมูลอะไร และควรเปิดดูเมื่อไร', en: 'Who provides what, and when to look' },
			head: [
				{ th: 'แหล่งข้อมูล', en: 'Source' },
				{ th: 'ให้ข้อมูลอะไร', en: 'What it provides' },
				{ th: 'เปิดดูเมื่อ', en: 'Turn to it when' }
			],
			rows: [
				[
					{ th: 'สสน. — ThaiWater', en: 'HII — ThaiWater' },
					{ th: 'ค่าที่ตรวจวัดจริง: ฝนสะสม ระดับน้ำ ปริมาณน้ำในเขื่อน และรายงานสถานการณ์', en: 'Measured values: rainfall totals, water levels, reservoir volumes, situation reports' },
					{ th: 'อยากรู้ว่าตอนนี้น้ำอยู่ระดับไหน และกำลังขึ้นหรือลง', en: 'You need to know where the water stands and which way it is moving' }
				],
				[
					{ th: 'กรมอุตุนิยมวิทยา', en: 'Meteorological Department' },
					{ th: 'พยากรณ์อากาศ ประกาศเตือนพายุและฝนตกหนัก', en: 'Weather forecasts and warnings for storms and heavy rain' },
					{ th: 'อยากรู้ว่าฝนจะตกอีกไหม และพายุจะเข้าเมื่อใด', en: 'You need to know whether more rain or a storm is coming' }
				],
				[
					{ th: 'กรมชลประทาน', en: 'Royal Irrigation Department' },
					{ th: 'การบริหารจัดการน้ำ การระบายน้ำจากเขื่อนและประตูระบายน้ำ', en: 'Water management, releases from dams and control gates' },
					{ th: 'อยากรู้ว่าจะมีการระบายน้ำเพิ่มลงลำน้ำของคุณหรือไม่', en: 'You need to know if more water will be released into your river' }
				],
				[
					{ th: 'หน่วยงานป้องกันและบรรเทาสาธารณภัยและหน่วยงานท้องถิ่น', en: 'Disaster-prevention and local authorities' },
					{ th: 'ประกาศแจ้งเตือน การแจ้งอพยพ และการช่วยเหลือในพื้นที่', en: 'Official warnings, evacuation notices and on-the-ground help' },
					{ th: 'ถึงเวลาต้องตัดสินใจขนย้ายสิ่งของหรืออพยพ', en: 'It is time to decide whether to move belongings or leave' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ทำไมตัวเลขเขื่อนจึงสำคัญทั้งหน้าฝนและหน้าแล้ง', en: 'Why reservoir figures matter in both seasons' }
		},
		{
			type: 'p',
			text: {
				th: 'ประเทศไทยเจอปัญหาน้ำสองด้านสลับกันในรอบปีเดียว ฤดูฝนหลายพื้นที่ต้องรับมือน้ำหลากและน้ำท่วมขัง ส่วนฤดูแล้งพื้นที่เกษตรต้องลุ้นว่าน้ำต้นทุนจะพอถึงฤดูเพาะปลูกหรือไม่ ปริมาณน้ำในอ่างเก็บน้ำจึงเป็นตัวชี้วัดที่อ่านได้ทั้งสองด้าน อ่างที่ใกล้เต็มเหลือที่รองรับน้ำฝนน้อยลง ส่วนอ่างที่น้ำต่ำกว่าค่าปกติของช่วงเวลานั้นคือสัญญาณเตือนล่วงหน้าของการขาดแคลนน้ำ',
				en: 'Thailand faces opposite water problems inside a single year. In the wet season much of the country contends with runoff and standing floodwater; in the dry season farming areas wait to learn whether the stored supply will last through planting. Reservoir volume reads usefully in both directions: one close to full has less room to absorb incoming rain, while one below its normal level for the time of year is an early warning of shortage.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'อ่านตัวเลขให้ครบก่อนสรุป', en: 'Read the full set of numbers' },
			text: {
				th: 'ปริมาณน้ำที่กักเก็บอยู่ไม่เท่ากับปริมาณน้ำที่นำมาใช้ได้ เพราะน้ำส่วนหนึ่งอยู่ก้นอ่างต่ำกว่าระดับที่ระบายออกมาใช้ได้ อ่างที่ดูมีน้ำพอสมควรจึงอาจมีน้ำใช้การได้น้อยกว่าที่คิด ให้ดูค่าน้ำใช้การได้ควบคู่กับสัดส่วนความจุทุกครั้ง',
				en: 'Stored water is not the same as usable water: part of it lies below the level at which it can be drawn off. A reservoir that looks reasonably full may hold far less that can actually be used. Always read the usable-water figure alongside the percentage of capacity.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้จึงต้องมีอยู่', en: 'Why this page needs to exist' }
		},
		{
			type: 'p',
			text: {
				th: 'ตอนที่คนต้องการข้อมูลน้ำมากที่สุด คือตอนที่ฝนกำลังตกหนักและข่าวลือแพร่เร็ว ไม่มีใครนึกออกในนาทีนั้นว่าหน่วยงานที่ดูแลข้อมูลน้ำของประเทศชื่ออะไร คนพิมพ์ค้นหาว่า “เช็คน้ำท่วม” หรือ “ระดับน้ำวันนี้” ไม่ได้พิมพ์ชื่อสถาบันหรือชื่อระบบ หน้านี้จึงเขียนด้วยคำที่คนใช้ค้นหาจริง อธิบายว่าข้อมูลแต่ละชุดหมายถึงอะไร แล้วส่งต่อไปยังเว็บไซต์ทางการโดยตรง',
				en: 'The moment people most need water data is the moment rain is falling hard and rumours are spreading fast — and nobody then recalls the name of the agency that keeps the country’s water records. People search for “check flooding” or “water level today”, not for an institute or a system name. This page is written in those words, explains what each dataset means, and hands you straight to the official site.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'อีกเหตุผลคือกฎการเข้าถึงของบอตบนเว็บไซต์ของสถาบัน ซึ่งปิดกั้นบอตทุกตัวเป็นค่าเริ่มต้นและเปิดข้อยกเว้นให้เฉพาะ Googlebot กับ Bingbot ข้อมูลชุดนี้จึงยังค้นเจอผ่านสองเครื่องมือนั้น แต่ไปไม่ถึงเครื่องมือค้นหารายอื่นและผู้ช่วยตอบคำถามด้วยปัญญาประดิษฐ์ที่คนไทยเริ่มใช้ประจำ การมีหน้าเปิดสาธารณะที่อธิบายบริการนี้และเปิดให้ทุกบอตอ่านได้ จึงเพิ่มเส้นทางให้คนเดินมาเจอข้อมูลที่ควรเข้าถึงได้ตั้งแต่แรก ทั้งนี้ ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่ได้สังกัดหน่วยงานใด',
				en: 'There is a second reason. The institute’s crawler rules block every bot by default and grant exceptions only to Googlebot and Bingbot, so this material stays findable through those two while never reaching other search engines or the AI assistants people in Thailand increasingly use. A public page that describes the service and stays open to every crawler adds another route to information that should have been reachable from the start. ThaiGov.co is an independent directory, unaffiliated with any agency.'
			}
		}
	],
	crawl: {
		host: 'www.hii.or.th',
		verdict: 'partial',
		kind: 'googlebot-exception',
		status: 200,
		snippet: 'User-agent: *\nDisallow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /',
		checkedAt: '2026-08-27',
		note: {
			th: 'ไฟล์ robots.txt ปิดกั้นบอตทุกตัวเป็นค่าเริ่มต้น แต่เขียนข้อยกเว้นให้ Googlebot เข้าถึงได้ เว็บไซต์จึงยังค้นเจอผ่าน Google ได้ตามปกติ ขณะที่เครื่องมือค้นหาอื่น บริการเก็บถาวรเว็บ และผู้ช่วย AI ที่ประชาชนเริ่มใช้ค้นหาบริการภาครัฐ ถูกปฏิเสธทั้งหมด',
			en: 'The robots.txt blocks every crawler by default but writes an explicit exception for Googlebot. The site therefore remains findable through Google, while other search engines, web-archiving services and the AI assistants people increasingly use to look up government services are all refused.'
		}
	},
	priority: 78,
	updated: '2026-08-27'
};
