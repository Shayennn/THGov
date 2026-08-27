import type { Agency } from './types';

/** Agencies that own the services in this directory. Keyed by `slug`. */
export const AGENCIES: Agency[] = [
	{
		slug: 'mea',
		name: { th: 'การไฟฟ้านครหลวง', en: 'Metropolitan Electricity Authority' },
		abbr: { th: 'กฟน.', en: 'MEA' },
		ministry: { th: 'กระทรวงมหาดไทย', en: 'Ministry of Interior' },
		site: 'https://www.mea.or.th/',
		blurb: {
			th: 'รัฐวิสาหกิจผู้จำหน่ายไฟฟ้าในกรุงเทพมหานคร นนทบุรี และสมุทรปราการ ดูแลผู้ใช้ไฟฟ้ากว่า 4 ล้านราย',
			en: 'The state enterprise distributing electricity across Bangkok, Nonthaburi and Samut Prakan, serving more than four million customers.'
		}
	},
	{
		slug: 'pea',
		name: { th: 'การไฟฟ้าส่วนภูมิภาค', en: 'Provincial Electricity Authority' },
		abbr: { th: 'กฟภ.', en: 'PEA' },
		ministry: { th: 'กระทรวงมหาดไทย', en: 'Ministry of Interior' },
		site: 'https://www.pea.co.th/',
		blurb: {
			th: 'ผู้จำหน่ายไฟฟ้าใน 74 จังหวัดทั่วประเทศ นอกเขตความรับผิดชอบของการไฟฟ้านครหลวง',
			en: 'Distributes electricity in the 74 provinces outside the Metropolitan Electricity Authority’s service area.'
		}
	},
	{
		slug: 'mwa',
		name: { th: 'การประปานครหลวง', en: 'Metropolitan Waterworks Authority' },
		abbr: { th: 'กปน.', en: 'MWA' },
		ministry: { th: 'กระทรวงมหาดไทย', en: 'Ministry of Interior' },
		site: 'https://www.mwa.co.th/',
		blurb: {
			th: 'ผู้ผลิตและจำหน่ายน้ำประปาในกรุงเทพมหานคร นนทบุรี และสมุทรปราการ',
			en: 'Produces and supplies tap water in Bangkok, Nonthaburi and Samut Prakan.'
		}
	},
	{
		slug: 'dbd',
		name: { th: 'กรมพัฒนาธุรกิจการค้า', en: 'Department of Business Development' },
		abbr: { th: 'พค.', en: 'DBD' },
		ministry: { th: 'กระทรวงพาณิชย์', en: 'Ministry of Commerce' },
		site: 'https://www.dbd.go.th/',
		blurb: {
			th: 'นายทะเบียนกลางของนิติบุคคลไทย ดูแลการจดทะเบียนธุรกิจและการนำส่งงบการเงินประจำปี',
			en: 'Thailand’s central company registrar, responsible for business registration and annual financial-statement filings.'
		}
	},
	{
		slug: 'cgd',
		name: { th: 'กรมบัญชีกลาง', en: 'Comptroller General’s Department' },
		abbr: { th: 'กรมบัญชีกลาง', en: 'CGD' },
		ministry: { th: 'กระทรวงการคลัง', en: 'Ministry of Finance' },
		site: 'https://www.cgd.go.th/',
		blurb: {
			th: 'ควบคุมการเบิกจ่ายเงินแผ่นดิน สวัสดิการข้าราชการ และระบบจัดซื้อจัดจ้างภาครัฐ (e-GP)',
			en: 'Controls government disbursement, civil-servant welfare and the national e-Government Procurement (e-GP) system.'
		}
	},
	{
		slug: 'excise',
		name: { th: 'กรมสรรพสามิต', en: 'Excise Department' },
		abbr: { th: 'สรรพสามิต', en: 'Excise' },
		ministry: { th: 'กระทรวงการคลัง', en: 'Ministry of Finance' },
		site: 'https://www.excise.go.th/',
		blurb: {
			th: 'จัดเก็บภาษีสรรพสามิตจากสินค้าและบริการเฉพาะ เช่น น้ำมัน ยานยนต์ เครื่องดื่ม และสุรา',
			en: 'Collects excise tax on specific goods and services such as fuel, vehicles, beverages and alcohol.'
		}
	},
	{
		slug: 'rd',
		name: { th: 'กรมสรรพากร', en: 'The Revenue Department' },
		abbr: { th: 'สรรพากร', en: 'RD' },
		ministry: { th: 'กระทรวงการคลัง', en: 'Ministry of Finance' },
		site: 'https://www.rd.go.th/',
		blurb: {
			th: 'จัดเก็บภาษีเงินได้บุคคลธรรมดา ภาษีเงินได้นิติบุคคล และภาษีมูลค่าเพิ่ม',
			en: 'Collects personal income tax, corporate income tax and value-added tax.'
		}
	},
	{
		slug: 'doeb',
		name: { th: 'กรมธุรกิจพลังงาน', en: 'Department of Energy Business' },
		abbr: { th: 'ธพ.', en: 'DOEB' },
		ministry: { th: 'กระทรวงพลังงาน', en: 'Ministry of Energy' },
		site: 'https://www.doeb.go.th/',
		blurb: {
			th: 'กำกับดูแลคุณภาพน้ำมันเชื้อเพลิง สถานีบริการ คลังน้ำมัน และความปลอดภัยด้านก๊าซ',
			en: 'Regulates fuel quality, service stations, oil depots and gas safety nationwide.'
		}
	},
	{
		slug: 'hii',
		name: { th: 'สถาบันสารสนเทศทรัพยากรน้ำ (องค์การมหาชน)', en: 'Hydro–Informatics Institute' },
		abbr: { th: 'สสน.', en: 'HII' },
		ministry: { th: 'กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม', en: 'Ministry of Higher Education, Science, Research and Innovation' },
		site: 'https://www.hii.or.th/',
		blurb: {
			th: 'ศูนย์กลางข้อมูลน้ำของประเทศ เผยแพร่ข้อมูลฝน น้ำท่า และการเตือนภัยผ่าน ThaiWater',
			en: 'Thailand’s national water-data centre, publishing rainfall, river and flood-warning data through ThaiWater.'
		}
	},
	{
		slug: 'tmd',
		name: { th: 'กรมอุตุนิยมวิทยา', en: 'Thai Meteorological Department' },
		abbr: { th: 'อต.', en: 'TMD' },
		ministry: { th: 'กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม', en: 'Ministry of Digital Economy and Society' },
		site: 'https://www.tmd.go.th/',
		blurb: {
			th: 'หน่วยงานพยากรณ์อากาศและเตือนภัยธรรมชาติของประเทศไทย',
			en: 'Thailand’s national weather forecasting and natural-hazard warning agency.'
		}
	},
	{
		slug: 'soc',
		name: { th: 'สำนักเลขาธิการคณะรัฐมนตรี', en: 'The Secretariat of the Cabinet' },
		abbr: { th: 'สลค.', en: 'SOC' },
		ministry: { th: 'สำนักนายกรัฐมนตรี', en: 'Office of the Prime Minister' },
		site: 'https://www.soc.go.th/',
		blurb: {
			th: 'ดูแลงานคณะรัฐมนตรีและการประกาศราชกิจจานุเบกษา ซึ่งเป็นช่องทางประกาศกฎหมายอย่างเป็นทางการ',
			en: 'Supports the Cabinet and publishes the Royal Thai Government Gazette, the official channel for enacting law.'
		}
	},
	{
		slug: 'sec',
		name: { th: 'สำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์', en: 'Securities and Exchange Commission, Thailand' },
		abbr: { th: 'ก.ล.ต.', en: 'SEC' },
		site: 'https://www.sec.or.th/',
		blurb: {
			th: 'กำกับดูแลตลาดทุนไทย ผู้ประกอบธุรกิจหลักทรัพย์ และการเปิดเผยข้อมูลของบริษัทจดทะเบียน',
			en: 'Regulates Thailand’s capital market, securities businesses and listed-company disclosure.'
		}
	},
	{
		slug: 'dopa',
		name: { th: 'กรมการปกครอง', en: 'Department of Provincial Administration' },
		abbr: { th: 'ปค.', en: 'DOPA' },
		ministry: { th: 'กระทรวงมหาดไทย', en: 'Ministry of Interior' },
		site: 'https://www.dopa.go.th/',
		blurb: {
			th: 'ดูแลงานทะเบียนราษฎร บัตรประจำตัวประชาชน และทะเบียนครอบครัว',
			en: 'Runs civil registration, the national ID card and family registration.'
		}
	},
	{
		slug: 'dlt',
		name: { th: 'กรมการขนส่งทางบก', en: 'Department of Land Transport' },
		abbr: { th: 'ขบ.', en: 'DLT' },
		ministry: { th: 'กระทรวงคมนาคม', en: 'Ministry of Transport' },
		site: 'https://www.dlt.go.th/',
		blurb: {
			th: 'ออกใบอนุญาตขับรถ จดทะเบียนรถ และจัดเก็บภาษีรถประจำปี',
			en: 'Issues driving licences, registers vehicles and collects annual vehicle tax.'
		}
	},
	{
		slug: 'sso',
		name: { th: 'สำนักงานประกันสังคม', en: 'Social Security Office' },
		abbr: { th: 'สปส.', en: 'SSO' },
		ministry: { th: 'กระทรวงแรงงาน', en: 'Ministry of Labour' },
		site: 'https://www.sso.go.th/',
		blurb: {
			th: 'บริหารกองทุนประกันสังคมและสิทธิประโยชน์ 7 กรณีของผู้ประกันตน',
			en: 'Administers the Social Security Fund and the seven benefit categories for insured persons.'
		}
	},
	{
		slug: 'dol',
		name: { th: 'กรมที่ดิน', en: 'Department of Lands' },
		abbr: { th: 'ทด.', en: 'DOL' },
		ministry: { th: 'กระทรวงมหาดไทย', en: 'Ministry of Interior' },
		site: 'https://www.dol.go.th/',
		blurb: {
			th: 'ออกโฉนดที่ดิน จดทะเบียนสิทธิและนิติกรรม และให้บริการค้นหาแปลงที่ดินออนไลน์',
			en: 'Issues land title deeds, registers property rights and provides online land-parcel search.'
		}
	},
	{
		slug: 'immigration',
		name: { th: 'สำนักงานตรวจคนเข้าเมือง', en: 'Immigration Bureau' },
		abbr: { th: 'ตม.', en: 'Immigration' },
		ministry: { th: 'สำนักงานตำรวจแห่งชาติ', en: 'Royal Thai Police' },
		site: 'https://www.immigration.go.th/',
		blurb: {
			th: 'ดูแลการตรวจลงตรา การแจ้งที่พักคนต่างด้าว และการรายงานตัว 90 วัน',
			en: 'Handles visas, foreigner accommodation notification and 90-day reporting.'
		}
	},
	{
		slug: 'dip',
		name: { th: 'กรมทรัพย์สินทางปัญญา', en: 'Department of Intellectual Property' },
		abbr: { th: 'ทป.', en: 'DIP' },
		ministry: { th: 'กระทรวงพาณิชย์', en: 'Ministry of Commerce' },
		site: 'https://www.ipthailand.go.th/',
		blurb: {
			th: 'รับจดทะเบียนเครื่องหมายการค้า สิทธิบัตร และลิขสิทธิ์ในประเทศไทย',
			en: 'Registers trademarks, patents and copyright in Thailand.'
		}
	},
	{
		slug: 'nhso',
		name: { th: 'สำนักงานหลักประกันสุขภาพแห่งชาติ', en: 'National Health Security Office' },
		abbr: { th: 'สปสช.', en: 'NHSO' },
		site: 'https://www.nhso.go.th/',
		blurb: {
			th: 'บริหารสิทธิหลักประกันสุขภาพแห่งชาติ หรือ “บัตรทอง” ให้คนไทยกว่า 47 ล้านคน',
			en: 'Administers Thailand’s Universal Coverage Scheme — the “Gold Card” — for more than 47 million people.'
		}
	},
	{
		slug: 'ocsc',
		name: { th: 'สำนักงานคณะกรรมการข้าราชการพลเรือน', en: 'Office of the Civil Service Commission' },
		abbr: { th: 'ก.พ.', en: 'OCSC' },
		ministry: { th: 'สำนักนายกรัฐมนตรี', en: 'Office of the Prime Minister' },
		site: 'https://www.ocsc.go.th/',
		blurb: {
			th: 'กำหนดมาตรฐานกำลังคนภาครัฐ จัดสอบวัดความรู้ความสามารถทั่วไป และดูแลทุนรัฐบาล',
			en: 'Sets civil-service standards, runs the national aptitude examination and administers government scholarships.'
		}
	},
	{
		slug: 'nbtc',
		name: {
			th: 'สำนักงานคณะกรรมการกิจการกระจายเสียง กิจการโทรทัศน์ และกิจการโทรคมนาคมแห่งชาติ',
			en: 'National Broadcasting and Telecommunications Commission'
		},
		abbr: { th: 'กสทช.', en: 'NBTC' },
		site: 'https://www.nbtc.go.th/',
		blurb: {
			th: 'กำกับดูแลคลื่นความถี่ กิจการโทรคมนาคม และการคุ้มครองผู้บริโภคด้านมือถือและอินเทอร์เน็ต',
			en: 'Regulates spectrum, telecommunications, and consumer protection for mobile and internet services.'
		}
	},
	{
		slug: 'moph',
		name: { th: 'กระทรวงสาธารณสุข', en: 'Ministry of Public Health' },
		abbr: { th: 'สธ.', en: 'MOPH' },
		site: 'https://www.moph.go.th/',
		blurb: {
			th: 'กำกับดูแลระบบสาธารณสุขของประเทศ โรงพยาบาลรัฐ การควบคุมโรค และมาตรฐานบริการทางการแพทย์',
			en: 'Oversees Thailand’s public health system, state hospitals, disease control and clinical service standards.'
		}
	}
];

export const AGENCY_BY_SLUG: Record<string, Agency> = Object.fromEntries(
	AGENCIES.map((a) => [a.slug, a])
);

export function getAgency(slug: string): Agency | undefined {
	return AGENCY_BY_SLUG[slug];
}
