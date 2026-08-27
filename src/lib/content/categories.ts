import type { Category } from './types';

/** Top-level taxonomy. Each category gets its own indexable landing page. */
export const CATEGORIES: Category[] = [
	{
		slug: 'utilities',
		name: { th: 'สาธารณูปโภค', en: 'Utilities' },
		blurb: {
			th: 'ไฟฟ้า น้ำประปา และบริการพื้นฐานที่ต้องจ่ายบิลทุกเดือน',
			en: 'Electricity, water and the basic services you pay for every month.'
		},
		icon: 'bolt',
		intro: [
			{
				type: 'p',
				text: {
					th: 'ค่าไฟและค่าน้ำเป็นบิลที่คนไทยเกือบทุกครัวเรือนต้องจ่ายทุกเดือน แต่การเช็กยอด ดูประวัติการใช้ หรือแจ้งไฟดับ ยังต้องเข้าเว็บไซต์ของแต่ละการไฟฟ้าหรือการประปาแยกกัน เพราะประเทศไทยแบ่งพื้นที่ให้บริการตามหน่วยงานรัฐวิสาหกิจคนละแห่ง',
					en: 'Electricity and water bills reach nearly every Thai household each month, yet checking a balance, reviewing consumption history or reporting an outage still means visiting a different website for each utility — because Thailand splits these services between separate state enterprises by geography.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'หลักง่าย ๆ คือ ถ้าคุณอยู่กรุงเทพมหานคร นนทบุรี หรือสมุทรปราการ ไฟฟ้าจะอยู่กับการไฟฟ้านครหลวง (กฟน.) และน้ำประปาอยู่กับการประปานครหลวง (กปน.) ส่วนจังหวัดอื่นอีก 74 จังหวัดจะใช้บริการของการไฟฟ้าส่วนภูมิภาค (กฟภ.) และการประปาส่วนภูมิภาค การเลือกเว็บไซต์ผิดหน่วยงานเป็นสาเหตุอันดับต้น ๆ ที่ทำให้ค้นหาบิลไม่เจอ',
					en: 'The rule of thumb: if you live in Bangkok, Nonthaburi or Samut Prakan, your electricity comes from the Metropolitan Electricity Authority (MEA) and your water from the Metropolitan Waterworks Authority (MWA). The other 74 provinces are served by the Provincial Electricity Authority (PEA) and the Provincial Waterworks Authority. Landing on the wrong agency’s site is the single most common reason people cannot find their bill.'
				}
			}
		]
	},
	{
		slug: 'business',
		name: { th: 'ธุรกิจและการค้า', en: 'Business & Trade' },
		blurb: {
			th: 'จดทะเบียนบริษัท ตรวจสอบคู่ค้า และงบการเงินนิติบุคคล',
			en: 'Company registration, counterparty due diligence and corporate financial statements.'
		},
		icon: 'briefcase',
		intro: [
			{
				type: 'p',
				text: {
					th: 'ข้อมูลนิติบุคคลไทยเป็นข้อมูลสาธารณะตามกฎหมาย ใครก็ตรวจสอบได้ว่าบริษัทหนึ่งจดทะเบียนจริงหรือไม่ ทุนจดทะเบียนเท่าไร ใครเป็นกรรมการ และผลประกอบการย้อนหลังเป็นอย่างไร ซึ่งเป็นเครื่องมือสำคัญก่อนตัดสินใจทำสัญญา โอนเงินมัดจำ หรือรับงานจากคู่ค้ารายใหม่',
					en: 'Thai company information is public by law. Anyone can verify whether a company is genuinely registered, how much capital it holds, who its directors are and how its finances have trended — essential checks before signing a contract, wiring a deposit or taking on a new client.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'ปัญหาคือระบบที่เก็บข้อมูลเหล่านี้ส่วนใหญ่ถูกออกแบบมาให้เข้าถึงผ่านหน้าค้นหาภายในเว็บไซต์ราชการ และหลายระบบปิดกั้นเครื่องมือค้นหา ทำให้พิมพ์ชื่อบริษัทใน Google แล้วไม่เจอหน้าข้อมูลทางการ แต่กลับเจอเว็บไซต์ตัวกลางที่คัดลอกข้อมูลไปขายแทน',
					en: 'The catch is that most of these systems are built around an internal search form, and several of them block search-engine crawlers outright. Type a company name into Google and the official record often does not surface at all — third-party scrapers reselling the same data do.'
				}
			}
		]
	},
	{
		slug: 'tax-finance',
		name: { th: 'ภาษีและการเงิน', en: 'Tax & Finance' },
		blurb: {
			th: 'ยื่นภาษี ตรวจสอบสิทธิลดหย่อน และระบบการเงินภาครัฐ',
			en: 'Filing tax returns, checking deductions and government financial systems.'
		},
		icon: 'receipt',
		intro: [
			{
				type: 'p',
				text: {
					th: 'ระบบภาษีของไทยแบ่งความรับผิดชอบออกเป็นสามกรมหลัก คือ กรมสรรพากรดูแลภาษีเงินได้และภาษีมูลค่าเพิ่ม กรมสรรพสามิตดูแลภาษีสินค้าเฉพาะอย่างเช่นน้ำมัน รถยนต์ และเครื่องดื่ม ส่วนกรมศุลกากรดูแลภาษีนำเข้าส่งออก การรู้ว่าเรื่องของคุณอยู่กับกรมไหนช่วยประหยัดเวลาได้มาก',
					en: 'Thailand splits tax administration across three main departments: the Revenue Department handles income tax and VAT, the Excise Department taxes specific goods such as fuel, vehicles and beverages, and the Customs Department handles import and export duty. Knowing which one owns your issue saves a great deal of time.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'ทุกกรมมีระบบยื่นแบบและชำระเงินออนไลน์ของตัวเอง และไม่มีระบบกลางที่รวมทุกอย่างไว้ที่เดียว หน้าหมวดนี้จึงรวบรวมทางเข้าอย่างเป็นทางการของแต่ละระบบไว้ พร้อมระบุว่าระบบใดที่ค้นหาใน Google ไม่เจอเพราะถูกปิดกั้น',
					en: 'Each department runs its own e-filing and payment platform, and there is no single unified portal. This category collects the official entry point for each system, and flags the ones that never appear in Google because they are blocked to crawlers.'
				}
			}
		]
	},
	{
		slug: 'procurement',
		name: { th: 'จัดซื้อจัดจ้างภาครัฐ', en: 'Public Procurement' },
		blurb: {
			th: 'ประกาศประกวดราคา ผลผู้ชนะ และการขึ้นทะเบียนผู้ค้ากับภาครัฐ',
			en: 'Tender announcements, award results and registering as a government supplier.'
		},
		icon: 'gavel',
		intro: [
			{
				type: 'p',
				text: {
					th: 'งบประมาณจัดซื้อจัดจ้างภาครัฐไทยมีมูลค่าหลายแสนล้านบาทต่อปี และตามพระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560 ประกาศเชิญชวนและผลการจัดซื้อจัดจ้างต้องเปิดเผยต่อสาธารณะผ่านระบบกลางเพียงระบบเดียว',
					en: 'Thai public procurement moves hundreds of billions of baht a year, and under the Public Procurement and Supplies Administration Act B.E. 2560 (2017), tender invitations and award results must be published openly through a single central system.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'แม้กฎหมายกำหนดให้เปิดเผย แต่ระบบที่เก็บประกาศเหล่านั้นกลับปิดกั้นเครื่องมือค้นหาไว้ทั้งเว็บไซต์ ผู้ประกอบการรายเล็กที่ไม่รู้จักชื่อระบบจึงแทบไม่มีทางค้นเจอโอกาสทางธุรกิจเหล่านี้ผ่าน Google ได้เลย',
					en: 'The law mandates disclosure, yet the system holding those announcements blocks search engines across the entire site. Smaller suppliers who do not already know the system by name have almost no way of discovering these opportunities through Google.'
				}
			}
		]
	},
	{
		slug: 'identity',
		name: { th: 'ทะเบียนและเอกสารราชการ', en: 'Identity & Records' },
		blurb: {
			th: 'ทะเบียนราษฎร บัตรประชาชน และเอกสารรับรองจากทางราชการ',
			en: 'Civil registration, ID cards and official certificates.'
		},
		icon: 'id',
		intro: [
			{
				type: 'p',
				text: {
					th: 'เอกสารทะเบียนราษฎร เช่น สูติบัตร ทะเบียนบ้าน ทะเบียนสมรส และบัตรประจำตัวประชาชน เป็นรากฐานของการเข้าถึงสิทธิอื่น ๆ แทบทุกอย่างในประเทศไทย ตั้งแต่การเปิดบัญชีธนาคาร การเข้าโรงเรียน ไปจนถึงการใช้สิทธิรักษาพยาบาล',
					en: 'Civil-registration documents — birth certificates, house registration, marriage records and the national ID card — underpin access to almost every other right in Thailand, from opening a bank account to enrolling in school to using public healthcare.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'ปัจจุบันหลายบริการย้ายมาอยู่บนแอปพลิเคชัน ThaID และระบบออนไลน์ของกรมการปกครอง แต่บางรายการยังต้องไปที่สำนักงานเขตหรือที่ว่าการอำเภอด้วยตนเอง หน้าหมวดนี้ช่วยให้คุณรู้ล่วงหน้าว่าเรื่องไหนทำออนไลน์ได้และเรื่องไหนต้องเดินทาง',
					en: 'Many of these services have moved to the ThaID app and the Department of Provincial Administration’s online systems, but some still require an in-person visit to a district office. This category tells you in advance which is which.'
				}
			}
		]
	},
	{
		slug: 'land-property',
		name: { th: 'ที่ดินและอสังหาริมทรัพย์', en: 'Land & Property' },
		blurb: {
			th: 'โฉนดที่ดิน การตรวจสอบแปลงที่ดิน และการโอนกรรมสิทธิ์',
			en: 'Title deeds, land-parcel checks and property transfer.'
		},
		icon: 'map',
		intro: [
			{
				type: 'p',
				text: {
					th: 'ที่ดินเป็นทรัพย์สินที่มีมูลค่าสูงที่สุดของครอบครัวไทยจำนวนมาก และเป็นเรื่องที่ความผิดพลาดมีราคาแพงที่สุดเช่นกัน เอกสารสิทธิในที่ดินของไทยมีหลายประเภทและให้สิทธิไม่เท่ากัน ตั้งแต่โฉนดที่ดินซึ่งเป็นกรรมสิทธิ์เต็ม ไปจนถึงหนังสือรับรองการทำประโยชน์ที่ให้เพียงสิทธิครอบครองและมีข้อจำกัดในการซื้อขาย การเข้าใจว่าเอกสารที่ถืออยู่เป็นประเภทใดจึงเป็นเรื่องแรกที่ต้องรู้',
					en: 'Land is the most valuable asset many Thai families hold, and the one where mistakes cost the most. Thai land documents come in several types conferring very different rights — from a full title deed down to certificates that grant only a right of use and restrict transfer. Knowing which document is actually in play is the first thing to establish.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'การซื้อขายที่ดินในประเทศไทยยังเป็นเป้าหมายของการฉ้อโกงอยู่เสมอ ทั้งเอกสารสิทธิปลอม การอ้างสิทธิในที่ดินที่ไม่ใช่ของตน และการรับมัดจำแล้วหายไป เครื่องมือออนไลน์ของกรมที่ดินช่วยตรวจสอบเบื้องต้นได้ แต่ไม่ได้แทนการตรวจสอบที่สำนักงานที่ดินก่อนวางเงิน ซึ่งเป็นขั้นตอนที่ไม่ควรข้ามไม่ว่ากรณีใด',
					en: 'Land transactions in Thailand remain a persistent target for fraud — forged deeds, people purporting to sell land they do not own, and deposits taken by someone who then disappears. The Department of Lands’ online tools support a first check, but they do not replace verifying at the land office before any money changes hands, a step that should never be skipped.'
				}
			}
		]
	},
	{
		slug: 'law-gazette',
		name: { th: 'กฎหมายและราชกิจจานุเบกษา', en: 'Law & Gazette' },
		blurb: {
			th: 'ประกาศกฎหมาย พระราชบัญญัติ และเอกสารทางการของรัฐ',
			en: 'Enacted law, acts of parliament and official state notices.'
		},
		icon: 'scale',
		intro: [
			{
				type: 'p',
				text: {
					th: 'ในระบบกฎหมายไทย กฎหมายจะมีผลบังคับใช้ก็ต่อเมื่อได้ประกาศในราชกิจจานุเบกษาแล้วเท่านั้น ราชกิจจานุเบกษาจึงเป็นแหล่งอ้างอิงสูงสุดสำหรับพระราชบัญญัติ พระราชกฤษฎีกา กฎกระทรวง ประกาศ และคำสั่งของหน่วยงานรัฐ',
					en: 'Under Thai law, a statute takes effect only once it has been published in the Royal Thai Government Gazette. The Gazette is therefore the authoritative source for acts, royal decrees, ministerial regulations, notifications and government orders.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'เอกสารเหล่านี้เป็นข้อมูลสาธารณะเต็มรูปแบบ แต่ระบบสืบค้นของราชกิจจานุเบกษาตอบกลับบอตของเครื่องมือค้นหาด้วยรหัส 403 ทำให้เนื้อหากฎหมายที่ควรค้นเจอง่ายที่สุดกลับแทบไม่ปรากฏในผลการค้นหาเลย',
					en: 'These documents are fully public, yet the Gazette’s search system answers search-engine crawlers with a 403 response — so the body of law that ought to be the easiest thing in the country to find barely appears in search results at all.'
				}
			}
		]
	},
	{
		slug: 'transport',
		name: { th: 'คมนาคมและขนส่ง', en: 'Transport' },
		blurb: {
			th: 'ใบขับขี่ ทะเบียนรถ ภาษีรถยนต์ และบริการขนส่ง',
			en: 'Driving licences, vehicle registration, road tax and transport services.'
		},
		icon: 'car',
		intro: [
			{
				type: 'p',
				text: {
					th: 'รถยนต์และรถจักรยานยนต์ทุกคันในประเทศไทยต้องต่อภาษีประจำปี และผู้ขับขี่ต้องมีใบอนุญาตขับรถที่ยังไม่หมดอายุ ทั้งสองเรื่องนี้เป็นงานของกรมการขนส่งทางบก ซึ่งเปิดให้ทำออนไลน์ได้หลายรายการโดยไม่ต้องไปสำนักงานขนส่ง',
					en: 'Every car and motorcycle in Thailand must renew its road tax annually, and every driver needs a valid licence. Both fall to the Department of Land Transport, which now allows a number of these tasks to be completed online without visiting an office.'
				}
			}
		]
	},
	{
		slug: 'health-welfare',
		name: { th: 'สุขภาพและสวัสดิการ', en: 'Health & Welfare' },
		blurb: {
			th: 'สิทธิบัตรทอง ประกันสังคม และสวัสดิการรัฐ',
			en: 'Universal healthcare, social security and state welfare entitlements.'
		},
		icon: 'heart',
		intro: [
			{
				type: 'p',
				text: {
					th: 'คนไทยทุกคนมีสิทธิรักษาพยาบาลอย่างใดอย่างหนึ่งเสมอ โดยหลักแล้วมีสามระบบ คือ สิทธิหลักประกันสุขภาพแห่งชาติหรือบัตรทองสำหรับประชาชนทั่วไป สิทธิประกันสังคมสำหรับลูกจ้างในระบบ และสิทธิสวัสดิการข้าราชการ การใช้สิทธิผิดระบบทำให้ต้องจ่ายเงินเองโดยไม่จำเป็น',
					en: 'Every Thai citizen holds some form of healthcare entitlement. There are three main schemes: Universal Coverage (the “Gold Card”) for the general public, Social Security for formal-sector employees, and the Civil Servant Medical Benefit Scheme. Using the wrong one means paying out of pocket unnecessarily.'
				}
			}
		]
	},
	{
		slug: 'environment',
		name: { th: 'สิ่งแวดล้อมและภัยพิบัติ', en: 'Environment & Hazards' },
		blurb: {
			th: 'ข้อมูลน้ำ สภาพอากาศ และการเตือนภัยธรรมชาติ',
			en: 'Water data, weather and natural-hazard warnings.'
		},
		icon: 'cloud',
		intro: [
			{
				type: 'p',
				text: {
					th: 'ประเทศไทยเผชิญทั้งน้ำท่วมและภัยแล้งเป็นประจำทุกปี ข้อมูลปริมาณฝน ระดับน้ำในเขื่อน และการพยากรณ์อากาศจึงเป็นข้อมูลที่มีผลต่อชีวิตและทรัพย์สินโดยตรง โดยเฉพาะในช่วงฤดูมรสุมระหว่างเดือนพฤษภาคมถึงตุลาคม',
					en: 'Thailand faces both flooding and drought every year. Rainfall figures, reservoir levels and weather forecasts bear directly on life and property — especially during the monsoon between May and October.'
				}
			},
			{
				type: 'p',
				text: {
					th: 'ข้อมูลเหล่านี้ผลิตโดยหน่วยงานรัฐและเปิดเผยฟรี แต่พอร์ทัลข้อมูลหลักหลายแห่งปิดกั้นเครื่องมือค้นหา ทำให้ในเวลาฉุกเฉินประชาชนมักเจอข่าวลือในโซเชียลมีเดียก่อนที่จะเจอข้อมูลทางการ',
					en: 'This data is produced by state agencies and published free of charge, yet several of the main portals block search engines — so in an emergency, people tend to encounter social-media rumours before they find the official figures.'
				}
			}
		]
	},
	{
		slug: 'immigration',
		name: { th: 'ตรวจคนเข้าเมืองและวีซ่า', en: 'Immigration & Visas' },
		blurb: {
			th: 'วีซ่า รายงานตัว 90 วัน และการแจ้งที่พักคนต่างด้าว',
			en: 'Visas, 90-day reporting and foreigner accommodation notification.'
		},
		icon: 'passport',
		intro: [
			{
				type: 'p',
				text: {
					th: 'ชาวต่างชาติที่พำนักในประเทศไทยระยะยาวมีหน้าที่ตามกฎหมายหลายอย่าง ทั้งการรายงานตัวทุก 90 วัน การแจ้งที่พักอาศัยโดยเจ้าบ้าน และการต่ออายุการอยู่ต่อ ซึ่งแต่ละเรื่องใช้ระบบออนไลน์คนละระบบและมีกำหนดเวลาที่เข้มงวด',
					en: 'Foreigners staying in Thailand long term carry several legal obligations: 90-day reporting, accommodation notification by the property owner, and extension of stay. Each runs on a different online system with strict deadlines.'
				}
			}
		]
	}
];

export const CATEGORY_BY_SLUG: Record<string, Category> = Object.fromEntries(
	CATEGORIES.map((c) => [c.slug, c])
);

export function getCategory(slug: string): Category | undefined {
	return CATEGORY_BY_SLUG[slug];
}
