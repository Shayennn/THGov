import type { Service } from '../types';

export const service: Service = {
	slug: 'tmd-weather-data',
	name: {
		th: 'ศูนย์ข้อมูลกรมอุตุนิยมวิทยา — ข้อมูลตรวจอากาศและพยากรณ์',
		en: 'Thai Meteorological Department Data Centre — Weather Observations and Forecasts'
	},
	shortName: { th: 'ศูนย์ข้อมูลกรมอุตุฯ', en: 'TMD Data Centre' },
	url: 'https://data.tmd.go.th/',
	altUrls: [
		{ label: { th: 'เว็บไซต์หลัก กรมอุตุนิยมวิทยา', en: 'TMD main website' }, url: 'https://www.tmd.go.th/' }
	],
	agency: 'tmd',
	categories: ['environment'],
	summary: {
		th: 'ข้อมูลตรวจอากาศจากสถานีทั่วประเทศ พยากรณ์อากาศ ภาพเรดาร์และดาวเทียม สถิติน้ำฝน และสภาพทะเล จากศูนย์ข้อมูลกรมอุตุนิยมวิทยา แหล่งข้อมูลอากาศทางการของไทย',
		en: 'Weather observations from stations across Thailand, forecasts, radar and satellite imagery, rainfall records and sea conditions, from the official TMD data portal.'
	},
	deck: {
		th: 'พอร์ทัลข้อมูลของกรมอุตุนิยมวิทยา ที่รวมค่าตรวจวัดจากสถานีทั่วประเทศ พยากรณ์อากาศ เรดาร์ ดาวเทียม และสภาพทะเล ไว้ในที่เดียว',
		en: 'The Thai Meteorological Department’s data portal — station measurements from across the country, forecasts, radar, satellite imagery and sea conditions in one place.'
	},
	keywords: {
		th: [
			'พยากรณ์อากาศ',
			'พยากรณ์อากาศวันนี้',
			'เช็คสภาพอากาศ',
			'กรมอุตุ',
			'กรมอุตุนิยมวิทยา',
			'เรดาร์ฝน',
			'เช็คฝนตก',
			'ภาพดาวเทียมอากาศ',
			'ข้อมูลน้ำฝนย้อนหลัง',
			'พายุเข้าไทย',
			'ประกาศกรมอุตุ',
			'สภาพอากาศทะเล',
			'คลื่นลมแรง',
			'ข้อมูลอากาศย้อนหลัง'
		],
		en: [
			'Thailand weather data',
			'Thai Meteorological Department',
			'Thailand weather radar',
			'Thailand rainfall data',
			'Thailand weather forecast',
			'TMD weather station data',
			'Thailand storm warning'
		]
	},
	features: [
		{
			icon: 'cloud',
			title: { th: 'ค่าตรวจวัดจากสถานีทั่วประเทศ', en: 'Measurements from stations nationwide' },
			text: {
				th: 'อุณหภูมิ ความชื้น ลม และปริมาณฝนที่ตรวจวัดได้จริงจากสถานีอุตุนิยมวิทยาในแต่ละภูมิภาค ไม่ใช่ค่าประมาณจากแบบจำลองเพียงอย่างเดียว',
				en: 'Temperature, humidity, wind and rainfall actually recorded at meteorological stations around the country — not model estimates alone.'
			}
		},
		{
			icon: 'clock',
			title: { th: 'พยากรณ์อากาศรายวันและรายภาค', en: 'Daily and regional forecasts' },
			text: {
				th: 'ดูแนวโน้มอากาศของภาคหรือจังหวัดที่สนใจในระยะข้างหน้า เพื่อวางแผนงานที่ต้องพึ่งสภาพอากาศได้ล่วงหน้า',
				en: 'See how the coming days look for the region or province you care about, so weather-dependent work can be planned ahead.'
			}
		},
		{
			icon: 'map',
			title: { th: 'เรดาร์ตรวจอากาศและภาพถ่ายดาวเทียม', en: 'Weather radar and satellite imagery' },
			text: {
				th: 'ติดตามกลุ่มฝนที่กำลังเคลื่อนเข้ามาแบบใกล้เวลาจริง และดูภาพรวมของระบบอากาศขนาดใหญ่ที่เคลื่อนผ่านภูมิภาค',
				en: 'Track approaching rain cells close to real time, and see the larger weather systems moving across the region.'
			}
		},
		{
			icon: 'chart',
			title: { th: 'สถิติน้ำฝนและข้อมูลย้อนหลัง', en: 'Rainfall records and historical data' },
			text: {
				th: 'ค้นข้อมูลฝนสะสมและค่าตรวจวัดย้อนหลัง สำหรับงานวิจัย งานวางแผน หรือการเปรียบเทียบกับปีก่อน ๆ',
				en: 'Look up accumulated rainfall and past measurements for research, planning, or comparison against earlier years.'
			}
		},
		{
			icon: 'globe',
			title: { th: 'สภาพทะเลและคลื่นลม', en: 'Sea state and wave conditions' },
			text: {
				th: 'ข้อมูลคลื่นลมในอ่าวไทยและทะเลอันดามัน สำหรับชาวประมง ผู้เดินเรือ และผู้ประกอบการท่องเที่ยวทางทะเล',
				en: 'Wave and wind conditions in the Gulf of Thailand and the Andaman Sea, for fishers, boat operators and marine tourism.'
			}
		},
		{
			icon: 'alert',
			title: { th: 'ประกาศเตือนภัยจากหน่วยงานที่มีอำนาจหน้าที่', en: 'Warnings from the responsible authority' },
			text: {
				th: 'กรมอุตุนิยมวิทยาเป็นหน่วยงานที่ออกคำเตือนสภาพอากาศของประเทศ ประกาศจากที่นี่จึงเป็นฉบับอ้างอิง ไม่ใช่ข้อความที่ถูกเล่าต่อกันมา',
				en: 'TMD is the national authority for weather warnings, so what appears here is the reference version rather than something passed along second-hand.'
			}
		},
		{
			icon: 'search',
			title: { th: 'จุดตั้งต้นสำหรับนักวิจัยและนักพัฒนา', en: 'A starting point for researchers and developers' },
			text: {
				th: 'เหมาะกับผู้ที่ต้องการข้อมูลอากาศไปวิเคราะห์ต่อหรือทำบริการของตัวเอง โดยควรตรวจสอบเงื่อนไขการนำข้อมูลไปใช้จากเว็บไซต์ทางการก่อน',
				en: 'For anyone who needs weather data to analyse further or to build a service on — check the official terms of use first.'
			}
		}
	],
	steps: [
		{
			title: { th: 'เปิดพอร์ทัลจากที่อยู่ทางการโดยตรง', en: 'Open the portal from the official address' },
			text: {
				th: 'พิมพ์ที่อยู่เว็บไซต์เองหรือใช้บุ๊กมาร์กที่บันทึกไว้ แทนการกดลิงก์ที่ส่งต่อกันมาในแชท เพราะช่วงที่มีข่าวพายุมักมีลิงก์ปลอมที่เลียนแบบหน้าเว็บของหน่วยงานราชการเพิ่มขึ้นอย่างชัดเจน',
				en: 'Type the address yourself or use a saved bookmark instead of tapping a forwarded link — fake pages imitating government sites multiply noticeably whenever a storm is in the news.'
			}
		},
		{
			title: { th: 'แยกให้ชัดว่าต้องการข้อมูลตรวจวัดหรือคำพยากรณ์', en: 'Decide whether you need observations or a forecast' },
			text: {
				th: 'ถ้าอยากรู้ว่าตอนนี้ฝนตกที่ไหนหรือเมื่อคืนฝนตกเท่าไร ให้ดูข้อมูลตรวจอากาศและเรดาร์ แต่ถ้าจะวางแผนล่วงหน้าให้ดูส่วนพยากรณ์ สองอย่างนี้ตอบคนละคำถามและมีความแน่นอนคนละแบบ',
				en: 'To find out where it is raining now or how much fell overnight, use the observations and radar; to plan ahead, use the forecast section. They answer different questions and carry different kinds of certainty.'
			}
		},
		{
			title: { th: 'ระบุพื้นที่และช่วงเวลาที่ต้องการ', en: 'Narrow down the area and the period' },
			text: {
				th: 'เลือกภาค จังหวัด หรือสถานีที่ใกล้พื้นที่ของคุณที่สุด แล้วกำหนดช่วงเวลาให้ตรงกับสิ่งที่ต้องการรู้ เพราะฝนในประเทศไทยแตกต่างกันได้มากแม้ห่างกันเพียงไม่กี่สิบกิโลเมตร',
				en: 'Choose the region, province or station nearest to you, then set the period that matches your question — rainfall in Thailand can differ sharply within a few dozen kilometres.'
			}
		},
		{
			title: { th: 'ดูวันและเวลาที่ข้อมูลถูกบันทึกเสมอ', en: 'Always read the timestamp' },
			text: {
				th: 'ข้อมูลอากาศมีอายุสั้น ภาพเรดาร์ที่ผ่านมาหนึ่งชั่วโมงอาจเล่าคนละเรื่องกับสถานการณ์ปัจจุบัน ก่อนตัดสินใจเรื่องใดจึงควรยืนยันก่อนว่ากำลังดูข้อมูลรอบล่าสุดอยู่จริง',
				en: 'Weather data ages quickly. A radar frame an hour old can tell a completely different story from the present, so confirm you are looking at the newest update before acting on it.'
			}
		},
		{
			title: { th: 'อ่านประกาศเตือนภัยควบคู่กับข้อมูลดิบ', en: 'Read the warnings alongside the raw data' },
			text: {
				th: 'ตัวเลขและภาพบอกสิ่งที่กำลังเกิดขึ้น ส่วนประกาศเตือนภัยบอกว่านักพยากรณ์ประเมินความรุนแรงและพื้นที่เสี่ยงไว้อย่างไร ในช่วงที่มีพายุควรดูทั้งสองอย่างประกอบกันเสมอ',
				en: 'The numbers and images say what is happening; the warnings say how forecasters judge the severity and which areas are exposed. During a storm, always use both together.'
			}
		},
		{
			title: { th: 'บันทึกที่มาไว้ถ้าจะนำข้อมูลไปใช้ต่อ', en: 'Record the source if you will reuse the data' },
			text: {
				th: 'หากจะนำข้อมูลไปใส่ในรายงาน งานวิจัย หรือเอกสารประกอบการเรียกร้องค่าเสียหาย ให้จดวันเวลาที่ดึงข้อมูล ชื่อสถานี และชุดข้อมูลที่ใช้เอาไว้ด้วย เพื่อให้ตรวจสอบย้อนกลับได้ในภายหลัง',
				en: 'If the figures are going into a report, a study or a damage claim, note the time you retrieved them, the station name and the dataset used, so the numbers can be traced back later.'
			}
		}
	],
	faq: [
		{
			q: { th: 'ศูนย์ข้อมูลกรมอุตุนิยมวิทยาต่างจากแอปพยากรณ์อากาศทั่วไปอย่างไร', en: 'How is this different from an ordinary weather app?' },
			a: {
				th: 'แอปพยากรณ์อากาศส่วนใหญ่ดึงผลจากแบบจำลองสภาพอากาศระดับโลก แล้วย่อออกมาเป็นไอคอนพระอาทิตย์หรือเมฆฝนให้เข้าใจง่าย ส่วนพอร์ทัลของกรมอุตุนิยมวิทยาเป็นข้อมูลต้นทางของประเทศไทยเอง ทั้งค่าที่ตรวจวัดได้จากสถานีจริงและการวิเคราะห์โดยนักพยากรณ์ที่คุ้นเคยกับภูมิประเทศและรูปแบบฝนของไทย เมื่อสองแหล่งให้ข้อมูลไม่ตรงกัน โดยเฉพาะเรื่องคำเตือนภัย ให้ยึดประกาศของกรมอุตุนิยมวิทยาเป็นหลัก',
				en: 'Most weather apps take output from global forecast models and compress it into a sun or rain-cloud icon. The TMD portal is Thailand’s own source material: values actually measured at stations, plus analysis by forecasters who know the country’s terrain and rainfall patterns. When the two disagree — especially about warnings — the TMD announcement is the one to follow.'
			}
		},
		{
			q: { th: 'ข้อมูลตรวจอากาศกับพยากรณ์อากาศต่างกันอย่างไร', en: 'What is the difference between observations and forecasts?' },
			a: {
				th: 'ข้อมูลตรวจอากาศคือสิ่งที่เครื่องมือวัดได้จริงไปแล้ว เช่น ฝนที่ตกลงมากี่มิลลิเมตร หรืออุณหภูมิที่บันทึกไว้เมื่อชั่วโมงก่อน ส่วนพยากรณ์อากาศคือการคาดการณ์สิ่งที่ยังไม่เกิดขึ้น จึงมีความไม่แน่นอนติดมาด้วยเสมอ เวลาใช้งานจริงควรดูควบคู่กัน เพราะข้อมูลตรวจวัดบอกสถานการณ์ที่เป็นอยู่ ขณะที่พยากรณ์ช่วยให้ตัดสินใจล่วงหน้าได้',
				en: 'Observations are what the instruments have already measured — the millimetres of rain that fell, the temperature logged an hour ago. A forecast is an estimate of what has not happened yet, so uncertainty is built into it. In practice you want both: the observations describe the situation you are in, while the forecast lets you decide in advance.'
			}
		},
		{
			q: { th: 'ขอข้อมูลย้อนหลังไปใช้ทำวิจัยหรืออ้างอิงได้ไหม', en: 'Can I get historical data for research or as evidence?' },
			a: {
				th: 'พอร์ทัลเผยแพร่ข้อมูลตรวจวัดและสถิติสำหรับการใช้งานทั่วไปอยู่แล้ว แต่ถ้าต้องการชุดข้อมูลที่ละเอียดสูง ย้อนหลังยาว หรือหนังสือรับรองข้อมูลเพื่อใช้ทางกฎหมายหรือการประกันภัย มักต้องยื่นคำขออย่างเป็นทางการ และอาจมีเงื่อนไขหรือค่าใช้จ่ายตามระเบียบของหน่วยงาน ควรตรวจสอบขั้นตอนและอัตราที่ใช้อยู่ในปัจจุบันจากเว็บไซต์ทางการก่อนดำเนินการ',
				en: 'General observation data and statistics are published on the portal already. For high-resolution datasets, long historical series, or a certified data letter to use in a legal or insurance matter, you normally have to file a formal request, and departmental rules may attach conditions or a charge. Check the current procedure and rates on the official site before you start.'
			}
		},
		{
			q: { th: 'เปิดหน้าเรดาร์หรือภาพดาวเทียมแล้วภาพไม่ขึ้น ทำอย่างไร', en: 'The radar or satellite images will not load — what now?' },
			a: {
				th: 'สาเหตุที่พบบ่อยที่สุดคือภาพเป็นไฟล์ขนาดใหญ่ที่อัปเดตเป็นรอบ ๆ จึงอาจค้างอยู่ที่ภาพเก่าในแคชของเบราว์เซอร์ ให้ลองรีเฟรชแบบล้างแคช เปลี่ยนเบราว์เซอร์ หรือปิดส่วนขยายและตัวบล็อกโฆษณาที่อาจสกัดการโหลดภาพไว้ อีกกรณีหนึ่งคือช่วงที่มีพายุหรือฝนหนัก จะมีผู้เข้าใช้งานพร้อมกันจำนวนมากจนเว็บตอบสนองช้า กรณีนี้ให้รอสักครู่แล้วลองใหม่ หรือดูข้อมูลชุดเดียวกันผ่านช่องทางทางการอื่นของกรมอุตุนิยมวิทยา',
				en: 'Most often the images are large files that refresh on a cycle, so your browser is still showing a cached copy — try a hard refresh, a different browser, or turning off extensions and ad blockers that may be stopping the image from loading. The other common cause is sheer traffic: during a storm or heavy rain a great many people open the site at once and it slows down. Wait a moment and retry, or view the same data through another official TMD channel.'
			}
		},
		{
			q: { th: 'ภาพเรดาร์หรือประกาศพายุที่แชร์กันในโซเชียล เชื่อได้แค่ไหน', en: 'How much can I trust radar images and storm notices shared on social media?' },
			a: {
				th: 'ทุกครั้งที่มีข่าวพายุ จะมีภาพเรดาร์เก่าและประกาศฉบับเก่าถูกนำกลับมาแชร์ใหม่ บางครั้งมีการแก้วันที่หรือใส่คำบรรยายเกินจริงเพื่อเรียกยอดแชร์ วิธีตรวจสอบที่เร็วที่สุดคือดูวันเวลาที่กำกับอยู่บนภาพ แล้วเปิดพอร์ทัลทางการด้วยตัวเองเพื่อเทียบกับประกาศฉบับล่าสุด นอกจากนี้ควรระวังลิงก์ที่ส่งมาทางแชทหรือ SMS โดยอ้างว่าให้ “เช็กพื้นที่เสี่ยง” เพราะเป็นรูปแบบที่มิจฉาชีพใช้หลอกให้กรอกข้อมูลส่วนตัวในจังหวะที่ผู้คนกำลังตื่นตระหนก',
				en: 'Whenever a storm is in the news, old radar frames and superseded announcements come back around, sometimes with the date altered or an exaggerated caption added to drive shares. The quickest check is to read the date and time printed on the image, then open the official portal yourself and compare it with the latest announcement. Be wary too of chat or SMS links offering to “check whether your area is at risk” — that is a standard scam pattern aimed at people who are already alarmed.'
			}
		},
		{
			q: { th: 'นำข้อมูลไปใช้ในเว็บหรือแอปของตัวเองได้ไหม', en: 'Can I use this data in my own site or app?' },
			a: {
				th: 'กรมอุตุนิยมวิทยาเปิดให้เข้าถึงข้อมูลบางส่วนในรูปแบบที่เครื่องอ่านได้สำหรับนักพัฒนา แต่เงื่อนไขการขอสิทธิ์ ขอบเขตการนำไปใช้ และวิธีอ้างอิงแหล่งที่มาเป็นเรื่องที่ต้องตรวจสอบจากประกาศทางการโดยตรง เพราะรายละเอียดเหล่านี้เปลี่ยนแปลงได้ สิ่งที่ไม่ควรทำคือการดึงข้อมูลด้วยวิธีขูดหน้าเว็บ เพราะเว็บไซต์ระบุไว้ในไฟล์ robots.txt ว่าไม่อนุญาตให้เก็บข้อมูลอัตโนมัติ ควรใช้ช่องทางที่หน่วยงานจัดไว้ให้แทน',
				en: 'TMD makes some data available to developers in machine-readable form, but the access terms, permitted uses and attribution requirements have to be checked against the department’s own notices, because those details change. What you should not do is scrape the pages: the site’s robots.txt explicitly disallows automated collection, so use the channel the department provides instead.'
			}
		},
		{
			q: { th: 'ทำไมค้นหาใน Google แล้วไม่ค่อยเจอเว็บนี้', en: 'Why does this site barely show up in Google?' },
			a: {
				th: 'เพราะพอร์ทัลกำหนดไว้ในไฟล์ robots.txt ว่าไม่ให้เครื่องมือค้นหาเก็บข้อมูลทั้งเว็บไซต์ ผลการค้นหาจึงมักขึ้นเป็นเว็บรวมข้อมูลอากาศจากต่างประเทศหรือข่าวที่เรียบเรียงต่อมาแทน วิธีที่ตรงที่สุดคือพิมพ์ที่อยู่เว็บไซต์เอง หรือบันทึกไว้เป็นบุ๊กมาร์กตั้งแต่ตอนที่ยังไม่มีเหตุฉุกเฉิน จะได้ไม่ต้องมาไล่ค้นหาในจังหวะที่ต้องรีบ',
				en: 'Because the portal’s robots.txt asks search engines not to index the site at all. What surfaces instead tends to be foreign weather aggregators or news write-ups at one remove. The most direct route is to type the address yourself, or bookmark it now, while nothing is happening — so you are not searching for it under pressure.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ศูนย์ข้อมูลกรมอุตุนิยมวิทยา คืออะไร', en: 'What the TMD Data Centre is' }
		},
		{
			type: 'p',
			text: {
				th: 'ศูนย์ข้อมูลกรมอุตุนิยมวิทยาเป็นพอร์ทัลที่กรมอุตุนิยมวิทยาใช้เผยแพร่ข้อมูลอากาศของประเทศไทยต่อสาธารณะ ครอบคลุมทั้งค่าที่ตรวจวัดได้จริงจากสถานีอุตุนิยมวิทยาซึ่งกระจายอยู่ทุกภาค เช่น อุณหภูมิ ความชื้นสัมพัทธ์ ความเร็วและทิศทางลม และปริมาณน้ำฝน ไปจนถึงผลการพยากรณ์อากาศ ภาพจากเรดาร์ตรวจอากาศ ภาพถ่ายดาวเทียม และข้อมูลสภาพทะเลในอ่าวไทยและทะเลอันดามัน จุดต่างที่สำคัญคือข้อมูลชุดนี้เป็นข้อมูลต้นทางจากหน่วยงานที่มีอำนาจหน้าที่โดยตรง ไม่ใช่ข้อมูลที่ผ่านการตีความ ย่อความ หรือแปลงเป็นภาพสวย ๆ มาแล้วอีกทอดหนึ่ง',
				en: 'The TMD Data Centre is the portal through which the Thai Meteorological Department publishes the country’s weather data. It covers what is actually measured at meteorological stations spread across every region — temperature, relative humidity, wind speed and direction, rainfall — together with forecast output, weather radar, satellite imagery and sea conditions in the Gulf of Thailand and the Andaman Sea. What sets it apart is that this is source material from the agency legally responsible for it, rather than data that has already been interpreted, summarised or repackaged by someone else.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ข้อมูลชุดหลักที่หาได้จากพอร์ทัลนี้', en: 'The main datasets on the portal' }
		},
		{
			type: 'table',
			caption: { th: 'ชุดข้อมูลหลักและวิธีอ่านให้ได้ประโยชน์', en: 'The main datasets and how to read them well' },
			head: [
				{ th: 'ชุดข้อมูล', en: 'Dataset' },
				{ th: 'ตอบคำถามอะไร', en: 'What it answers' },
				{ th: 'ควรดูควบคู่กับ', en: 'Read it alongside' }
			],
			rows: [
				[
					{ th: 'ข้อมูลตรวจอากาศจากสถานี', en: 'Station observations' },
					{ th: 'อุณหภูมิ ความชื้น ลม และฝนที่วัดได้จริงในแต่ละพื้นที่', en: 'Temperature, humidity, wind and rain actually measured in each area' },
					{ th: 'เวลาที่บันทึกข้อมูล เพราะเป็นค่าที่ผ่านมาแล้ว', en: 'The recording time — these are values from the recent past' }
				],
				[
					{ th: 'พยากรณ์อากาศ', en: 'Forecasts' },
					{ th: 'แนวโน้มอากาศรายวันและรายภาคในระยะข้างหน้า', en: 'How the weather is expected to develop, by day and by region' },
					{ th: 'ประกาศเตือนภัยฉบับล่าสุด', en: 'The most recent warning announcement' }
				],
				[
					{ th: 'เรดาร์ตรวจอากาศ', en: 'Weather radar' },
					{ th: 'ตอนนี้ฝนกำลังตกที่ไหน และกลุ่มฝนเคลื่อนไปทางใด', en: 'Where rain is falling now and which way the cells are moving' },
					{ th: 'ภาพหลายเฟรมต่อเนื่อง ไม่ใช่ภาพนิ่งภาพเดียว', en: 'Several consecutive frames, not one still image' }
				],
				[
					{ th: 'ภาพถ่ายดาวเทียม', en: 'Satellite imagery' },
					{ th: 'ภาพรวมของเมฆและระบบอากาศขนาดใหญ่เหนือภูมิภาค', en: 'The broad picture of cloud and large systems over the region' },
					{ th: 'เรดาร์ สำหรับรายละเอียดระดับพื้นที่', en: 'Radar, for detail at local scale' }
				],
				[
					{ th: 'ปริมาณน้ำฝน', en: 'Rainfall totals' },
					{ th: 'ฝนสะสมในรอบวันหรือในช่วงเวลาที่กำหนด', en: 'Rain accumulated over a day or a chosen period' },
					{ th: 'ข้อมูลระดับน้ำจากหน่วยงานด้านน้ำ', en: 'Water-level data from the water agencies' }
				],
				[
					{ th: 'สภาพทะเลและคลื่นลม', en: 'Sea and wave conditions' },
					{ th: 'ความสูงคลื่นและกำลังลมในอ่าวไทยและทะเลอันดามัน', en: 'Wave height and wind strength in the Gulf and the Andaman Sea' },
					{ th: 'คำเตือนสำหรับเรือเล็กในช่วงคลื่นลมแรง', en: 'Advisories for small boats when seas are rough' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ใครได้ประโยชน์จากข้อมูลชุดนี้', en: 'Who relies on this data' }
		},
		{
			type: 'p',
			text: {
				th: 'ผู้ใช้ข้อมูลอากาศไม่ได้มีเพียงนักอุตุนิยมวิทยา ในทางปฏิบัติ ข้อมูลชุดเดียวกันนี้ถูกนำไปใช้ตัดสินใจเรื่องที่มีต้นทุนจริงแทบทุกวัน',
				en: 'Weather data is not read only by meteorologists. In practice the same figures underpin decisions that carry real cost, almost every day.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'เกษตรกร ใช้ข้อมูลฝนและแนวโน้มอากาศกำหนดวันหว่าน วันใส่ปุ๋ย และวันเก็บเกี่ยว เพราะฝนที่มาผิดจังหวะเพียงไม่กี่วันก็ทำให้ผลผลิตเสียหายได้',
					en: 'Farmers time sowing, fertilising and harvesting around rainfall and the outlook — rain arriving a few days out of step can be enough to damage a crop.'
				},
				{
					th: 'ชาวประมงและผู้เดินเรือ ใช้ข้อมูลคลื่นลมและคำเตือนเรื่องทะเลมีคลื่นสูงเพื่อตัดสินใจว่าจะออกเรือหรือรออีกวัน',
					en: 'Fishers and boat operators use wave and wind data, and rough-sea advisories, to decide whether to go out or wait another day.'
				},
				{
					th: 'งานก่อสร้างและงานขนส่ง ใช้พยากรณ์ฝนวางแผนงานเทคอนกรีต งานยกของสูง และรอบรถบรรทุก เพื่อเลี่ยงช่วงฝนหนักและเส้นทางที่เสี่ยงน้ำท่วมขัง',
					en: 'Construction and logistics teams plan concrete pours, crane work and truck schedules around the rain forecast, avoiding downpours and routes prone to flooding.'
				},
				{
					th: 'นักวิจัยและนักศึกษา ใช้ข้อมูลย้อนหลังวิเคราะห์แนวโน้มภูมิอากาศ ทำวิทยานิพนธ์ หรือประเมินความเสี่ยงเชิงพื้นที่',
					en: 'Researchers and students use the historical series for climate trends, dissertations and area risk assessments.'
				},
				{
					th: 'นักพัฒนาแอปพลิเคชัน ใช้ข้อมูลจากหน่วยงานทางการเป็นฐานของบริการแจ้งเตือนอากาศ โดยต้องตรวจสอบเงื่อนไขการนำข้อมูลไปใช้จากเว็บไซต์ทางการก่อน',
					en: 'App developers build weather alerts on official data — after checking the department’s terms of use.'
				},
				{
					th: 'ประชาชนทั่วไป โดยเฉพาะช่วงที่มีพายุหรือฝนตกหนักต่อเนื่อง เพราะการรู้ล่วงหน้าเพียงไม่กี่ชั่วโมงก็ช่วยให้เก็บของ ย้ายรถ หรือเปลี่ยนแผนเดินทางได้ทัน',
					en: 'And the general public, above all during storms or long spells of heavy rain, when a few hours of warning is enough to move a car, pack things up or change travel plans.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ฤดูกาลของไทยกับจังหวะที่ข้อมูลอากาศสำคัญที่สุด', en: 'Thailand’s seasons and when this data matters most' }
		},
		{
			type: 'p',
			text: {
				th: 'สภาพอากาศของไทยถูกกำหนดด้วยลมมรสุมเป็นหลัก ฤดูฝนซึ่งได้รับอิทธิพลจากมรสุมตะวันตกเฉียงใต้กินเวลาราวเดือนพฤษภาคมถึงตุลาคม เป็นช่วงที่ปริมาณฝนสะสมมีความหมายทั้งต่อการเกษตรและต่อการเตรียมรับน้ำท่วม ส่วนพายุหมุนเขตร้อนที่เคลื่อนเข้ามามักส่งผลต่อประเทศไทยมากที่สุดในช่วงราวเดือนสิงหาคมถึงตุลาคม ทั้งนี้กรมอุตุนิยมวิทยาจะประกาศวันเริ่มต้นและสิ้นสุดของแต่ละฤดูกาลอย่างเป็นทางการในทุกปี ซึ่งอาจคลาดเคลื่อนจากค่าเฉลี่ยได้ตามสภาพอากาศของปีนั้น',
				en: 'Thailand’s weather is governed largely by the monsoons. The rainy season, driven by the southwest monsoon, runs roughly from May to October, and accumulated rainfall over those months matters both for farming and for flood preparation. Tropical storms reaching the country are most frequent in roughly August to October. TMD announces the official start and end of each season every year, and those dates can fall earlier or later than the long-run average.'
			}
		},
		{
			type: 'table',
			caption: { th: 'ปฏิทินอากาศคร่าว ๆ ของประเทศไทย โดยวันเริ่มต้นจริงของแต่ละฤดูกาลประกาศโดยกรมอุตุนิยมวิทยาในแต่ละปี', en: 'A rough weather calendar for Thailand — TMD announces each season’s actual start every year' },
			head: [
				{ th: 'ช่วงเวลาโดยประมาณ', en: 'Approximate period' },
				{ th: 'ลักษณะอากาศ', en: 'What the weather does' },
				{ th: 'ข้อมูลที่ควรติดตาม', en: 'What to follow' }
			],
			rows: [
				[
					{ th: 'กลางเดือนพฤษภาคม – ตุลาคม', en: 'Mid-May to October' },
					{ th: 'ฤดูฝนภายใต้อิทธิพลมรสุมตะวันตกเฉียงใต้', en: 'The rainy season under the southwest monsoon' },
					{ th: 'ปริมาณฝนสะสมและภาพเรดาร์', en: 'Accumulated rainfall and radar imagery' }
				],
				[
					{ th: 'สิงหาคม – ตุลาคม', en: 'August to October' },
					{ th: 'ช่วงที่พายุหมุนเขตร้อนมีโอกาสส่งผลต่อประเทศไทยมากที่สุด', en: 'The window when tropical storms are most likely to affect Thailand' },
					{ th: 'ประกาศเตือนภัยและภาพถ่ายดาวเทียม', en: 'Warning announcements and satellite imagery' }
				],
				[
					{ th: 'กลางเดือนตุลาคม – กุมภาพันธ์', en: 'Mid-October to February' },
					{ th: 'มรสุมตะวันออกเฉียงเหนือ อากาศเย็นและแห้งทางตอนบน แต่ฝนตกชุกทางภาคใต้ฝั่งตะวันออก', en: 'The northeast monsoon: cool, dry air over upper Thailand but heavy rain on the southern east coast' },
					{ th: 'พยากรณ์รายภาคและสภาพทะเลฝั่งอ่าวไทย', en: 'Regional forecasts and Gulf of Thailand sea conditions' }
				],
				[
					{ th: 'กุมภาพันธ์ – พฤษภาคม', en: 'February to May' },
					{ th: 'ฤดูร้อน มีพายุฤดูร้อนและลมกระโชกแรงเป็นครั้งคราว', en: 'The hot season, punctuated by summer storms and strong gusts' },
					{ th: 'ประกาศพายุฤดูร้อนและข้อมูลลม', en: 'Summer-storm advisories and wind data' }
				]
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'ช่วงสิงหาคมถึงตุลาคม ควรติดตามถี่ขึ้น', en: 'August to October deserves closer attention' },
			text: {
				th: 'เป็นช่วงที่พายุหมุนเขตร้อนมีโอกาสส่งผลต่อประเทศไทยมากที่สุด หากมีข่าวพายุ ควรเปิดดูประกาศฉบับล่าสุดจากกรมอุตุนิยมวิทยาโดยตรง เพราะเส้นทางและความรุนแรงของพายุถูกปรับปรุงเป็นระยะ ข้อมูลที่คนแชร์กันเมื่อวานอาจไม่ตรงกับสถานการณ์ของวันนี้แล้ว',
				en: 'This is when tropical storms are most likely to affect Thailand. If a storm is in the news, open the latest TMD announcement directly: tracks and intensities are revised repeatedly, and what everyone was sharing yesterday may no longer describe today.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ยึดประกาศจากกรมอุตุนิยมวิทยาเป็นหลัก', en: 'Treat TMD announcements as the reference' }
		},
		{
			type: 'p',
			text: {
				th: 'กรมอุตุนิยมวิทยาเป็นหน่วยงานที่มีหน้าที่ออกประกาศเตือนภัยด้านสภาพอากาศของประเทศ คำเตือนที่หน่วยงานอื่นและสื่อมวลชนนำไปเผยแพร่ต่อล้วนอ้างอิงต้นทางเดียวกันนี้ ปัญหาคือระหว่างทางข้อมูลมักถูกตัดทอน ในช่วงที่มีข่าวพายุ ภาพเรดาร์และภาพดาวเทียมมักถูกแคปหน้าจอไปแชร์ต่อโดยไม่มีวันเวลากำกับ บางครั้งเป็นภาพจากเหตุการณ์เมื่อหลายปีก่อน หรือถูกเติมคำบรรยายที่เกินจริงจนคนตื่นตระหนกเกินเหตุ การกลับไปดูต้นทางจึงใช้เวลาไม่กี่วินาที แต่ช่วยตัดข้อมูลผิดออกไปได้เกือบทั้งหมด',
				en: 'TMD is the body charged with issuing the country’s weather warnings; when other agencies and the media pass a warning on, they are relaying this same source. The trouble is what happens in transit. During a storm, radar and satellite images get screenshotted and shared with no date or time attached — sometimes they are years old, sometimes an exaggerated caption has been bolted on and people panic more than the situation warrants. Going back to the source takes a few seconds and removes almost all of that noise.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ดูวันและเวลาที่กำกับอยู่บนภาพหรือประกาศเสมอ ข้อมูลอากาศที่ไม่มีเวลากำกับแทบไม่มีประโยชน์',
					en: 'Always look for the date and time on the image or announcement — weather data without a timestamp is close to useless.'
				},
				{
					th: 'ประกาศทางการมักระบุลำดับฉบับและช่วงเวลาที่คำเตือนมีผล หากสิ่งที่แชร์มาไม่มีรายละเอียดเหล่านี้ ให้ถือว่ายังไม่ยืนยัน',
					en: 'Official announcements normally carry a number in sequence and the period the warning covers. If what reached you has neither, treat it as unconfirmed.'
				},
				{
					th: 'ตรวจสอบว่าที่อยู่เว็บไซต์อยู่ภายใต้โดเมน tmd.go.th ก่อนจะเชื่อหรือส่งต่อ',
					en: 'Check that the address sits under the tmd.go.th domain before believing it or forwarding it.'
				},
				{
					th: 'ระวังโพสต์ที่ระบุวันเวลาที่พายุจะขึ้นฝั่งอย่างเจาะจงล่วงหน้าหลายสัปดาห์ เพราะการพยากรณ์เส้นทางพายุมีความไม่แน่นอนสูงและถูกปรับปรุงตลอดเวลา',
					en: 'Be sceptical of posts naming the exact hour a storm will make landfall weeks ahead — storm-track forecasts carry wide uncertainty and are revised continuously.'
				},
				{
					th: 'อย่ากดลิงก์ที่ส่งมาทางแชทหรือ SMS โดยอ้างว่าให้ดูภาพพายุหรือเช็กพื้นที่เสี่ยงน้ำท่วม ให้พิมพ์ที่อยู่เว็บไซต์เองแทน',
					en: 'Do not tap chat or SMS links promising storm images or a flood-risk check for your area; type the address in yourself instead.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'เมื่อแหล่งข้อมูลอากาศที่แม่นที่สุดกลับเป็นแหล่งที่ค้นหาไม่เจอ', en: 'When the most accurate weather source is the one you cannot find' }
		},
		{
			type: 'p',
			text: {
				th: 'ผลการตรวจสอบไฟล์ robots.txt ของพอร์ทัลนี้พบบรรทัด Disallow: / แปลว่าขอให้เครื่องมือค้นหาไม่เก็บข้อมูลทั้งเว็บไซต์ เพิ่มเติมจากการห้ามเฉพาะส่วนแผนที่ ภาพดาวเทียม และเรดาร์ ผลที่ตามมาไม่ใช่เรื่องเทคนิคล้วน ๆ แต่กระทบคนจริงในจังหวะที่สำคัญที่สุด เพราะเมื่อฝนตกหนักติดต่อกันหลายวันแล้วมีคนพิมพ์ค้นหาว่า “เรดาร์ฝน” หรือ “พายุเข้าไทย” สิ่งที่ขึ้นมาก่อนคือเว็บรวมข้อมูลจากต่างประเทศ ภาพที่ถูกแชร์ต่อกันมา และข่าวที่เรียบเรียงมาอีกทอด ส่วนต้นทางที่แม่นยำที่สุดและเป็นผู้ออกคำเตือนตัวจริงกลับอยู่นอกสายตา หน้านี้จึงทำหน้าที่เป็นป้ายบอกทางที่ค้นเจอได้ อธิบายด้วยถ้อยคำแบบที่คนไทยพิมพ์หาจริง แล้วส่งต่อไปยังพอร์ทัลทางการโดยตรง ทั้งนี้ ThaiGov.co เป็นไดเรกทอรีอิสระ ไม่ได้มีส่วนเกี่ยวข้องกับกรมอุตุนิยมวิทยา และไม่ได้ทำสำเนาหรือดัดแปลงข้อมูลอากาศชุดใดไว้เอง',
				en: 'Our check of this portal’s robots.txt found a blanket Disallow: / — a request that search engines index none of the site — on top of the specific exclusions for maps, satellite imagery and radar. The consequence is not merely technical; it lands on people at the worst possible moment. After several days of heavy rain, someone types “rain radar” or “storm heading for Thailand” and what comes back first is a foreign aggregator, a re-shared screenshot, or a news article at one remove, while the most accurate source — the office that actually issues the warnings — stays out of view. This page exists to be the findable signpost: it describes the portal in the words Thai people really search with, then sends you straight to the official site. ThaiGov.co is an independent directory, unaffiliated with the Thai Meteorological Department, and it keeps no copy or adaptation of any of this weather data.'
			}
		}
	],
	crawl: {
		host: 'data.tmd.go.th',
		verdict: 'blocked',
		kind: 'robots-disallow-all',
		status: 200,
		snippet: 'User-agent: *\nDisallow: /maps/\nDisallow: /satellite/\nDisallow: /radar/\nDisallow: /\nDisallow: /iws13',
		checkedAt: '2026-08-28',
		note: {
			th: 'ไฟล์ robots.txt ของเว็บไซต์นี้สั่งห้ามเครื่องมือค้นหาทุกตัวเก็บข้อมูลทุกหน้า และไม่มีข้อยกเว้นให้ Googlebot นี่เป็นหลักฐานที่หนักแน่นที่สุด เพราะไฟล์ robots.txt เป็นสาธารณะและให้ผลเหมือนกันกับทุกคนที่เรียกดู ใครก็ตรวจสอบซ้ำได้',
			en: 'This site’s robots.txt instructs every crawler not to fetch any page, with no exception for Googlebot. This is the strongest form of evidence available, because robots.txt is public and identical for every requester — anyone can reproduce the check.'
		}
	},
	priority: 72,
	updated: '2026-08-27'
};
