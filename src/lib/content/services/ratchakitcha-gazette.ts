import type { Service } from '../types';

export const service: Service = {
	slug: 'ratchakitcha-gazette',
	name: {
		th: 'ราชกิจจานุเบกษา — ค้นหากฎหมายและประกาศทางการ',
		en: 'Royal Thai Government Gazette — Official Law and Notices'
	},
	shortName: { th: 'ราชกิจจานุเบกษา', en: 'Royal Gazette' },
	url: 'https://ratchakitcha.soc.go.th/',
	altUrls: [
		{
			label: { th: 'เว็บไซต์สำนักเลขาธิการคณะรัฐมนตรี', en: 'Secretariat of the Cabinet website' },
			url: 'https://www.soc.go.th/'
		}
	],
	agency: 'soc',
	categories: ['law-gazette'],
	summary: {
		th: 'ค้นหาและดาวน์โหลดพระราชบัญญัติ พระราชกฤษฎีกา กฎกระทรวง และประกาศทางการฉบับเต็มจากราชกิจจานุเบกษา แหล่งอ้างอิงตัวบทกฎหมายไทยที่เป็นทางการที่สุด เข้าใช้ได้ฟรี',
		en: 'Search and download the full text of Thai acts, royal decrees, ministerial regulations and notices from the Royal Gazette — the authoritative record of Thai law.'
	},
	deck: {
		th: 'สิ่งพิมพ์ทางการที่ใช้ประกาศกฎหมายของประเทศไทย — โดยหลักแล้ว ถ้ายังไม่ประกาศที่นี่ ก็ยังไม่มีผลบังคับใช้',
		en: 'Thailand’s official publication of record — as a rule, a law does not take effect until it appears here.'
	},
	keywords: {
		th: [
			'ราชกิจจานุเบกษา',
			'ราชกิจจา',
			'ค้นหาราชกิจจานุเบกษา',
			'ราชกิจจานุเบกษาล่าสุด',
			'ประกาศราชกิจจานุเบกษาวันนี้',
			'กฎหมายใหม่ล่าสุด',
			'พระราชบัญญัติฉบับเต็ม',
			'พระราชกฤษฎีกา',
			'กฎกระทรวง',
			'กฎหมายมีผลบังคับใช้เมื่อไหร่',
			'ดาวน์โหลดราชกิจจานุเบกษา pdf',
			'ประกาศแต่งตั้ง ราชกิจจา',
			'เครื่องราชอิสริยาภรณ์ ราชกิจจา',
			'เช็คว่ากฎหมายประกาศแล้วหรือยัง'
		],
		en: [
			'Royal Thai Government Gazette',
			'Ratchakitcha',
			'search Thai Government Gazette',
			'Thai law full text',
			'Thailand royal decree',
			'Thai ministerial regulation',
			'when does a Thai law take effect',
			'Secretariat of the Cabinet'
		]
	},
	features: [
		{
			icon: 'gavel',
			title: { th: 'ตัวบทฉบับทางการ ไม่ใช่บทสรุป', en: 'The official text, not a summary' },
			text: {
				th: 'สิ่งที่เผยแพร่ที่นี่คือถ้อยคำที่ใช้บังคับจริง ศาล หน่วยงานรัฐ และผู้ประกอบวิชาชีพกฎหมายอ้างอิงจากฉบับนี้',
				en: 'What appears here is the operative wording itself — the version courts, state agencies and legal professionals cite.'
			}
		},
		{
			icon: 'search',
			title: { th: 'ค้นย้อนหลังได้ฟรี', en: 'Free to search and read' },
			text: {
				th: 'เว็บไซต์เปิดให้ประชาชนค้นหาและเปิดอ่านเอกสารที่ประกาศแล้วโดยไม่มีค่าใช้จ่าย',
				en: 'The site lets anyone search and open published documents at no charge.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'ไฟล์ PDF ตรงตามหน้าต้นฉบับ', en: 'PDFs faithful to the printed page' },
			text: {
				th: 'เอกสารเผยแพร่เป็น PDF ที่คงรูปแบบหน้ากระดาษไว้ ใช้แนบประกอบเอกสารหรืออ้างอิงในงานเขียนได้',
				en: 'Documents are published as PDFs that preserve the original page layout, ready to attach or cite.'
			}
		},
		{
			icon: 'scale',
			title: { th: 'ครอบคลุมกฎหมายทุกลำดับชั้น', en: 'Every tier of legislation' },
			text: {
				th: 'ตั้งแต่พระราชบัญญัติและพระราชกฤษฎีกา ไปจนถึงกฎกระทรวง ระเบียบ และประกาศของหน่วยงาน',
				en: 'From acts and royal decrees down to ministerial regulations, rules and agency notifications.'
			}
		},
		{
			icon: 'clock',
			title: { th: 'ใช้ยืนยันว่ากฎเริ่มบังคับใช้แล้วหรือยัง', en: 'Confirm whether a rule is in force' },
			text: {
				th: 'วันที่ประกาศและมาตราที่ระบุวันใช้บังคับอยู่ในเอกสารฉบับเดียวกัน ตรวจได้จบในที่เดียว',
				en: 'The publication date and the commencement clause sit in the same document, so one file settles the question.'
			}
		},
		{
			icon: 'shield',
			title: { th: 'ตรวจสอบข่าวที่แชร์ต่อกันมา', en: 'Check what is circulating online' },
			text: {
				th: 'เมื่อมีภาพหรือข้อความอ้างว่าเป็นกฎหมายใหม่ ให้ย้อนกลับมาหาเอกสารต้นทางที่นี่ก่อนเชื่อ',
				en: 'When an image or post claims a new law exists, trace it back to the source document here before believing it.'
			}
		}
	],
	steps: [
		{
			title: { th: 'ตั้งต้นจากข้อมูลที่คุณมีอยู่', en: 'Start from what you already know' },
			text: {
				th: 'รวบรวมชื่อเรื่องอย่างเป็นทางการ หน่วยงานที่ออกประกาศ หรือช่วงวันที่ที่คาดว่าประกาศ ยิ่งมีจุดยึดที่ชัดเจนสักจุด การค้นก็ยิ่งแม่น หากรู้เรื่องนี้จากข่าว ให้จดชื่อกฎหมายเต็ม ๆ ตามที่ข่าวระบุไว้ก่อน',
				en: 'Gather the official title, the issuing agency, or the rough date of publication. One firm anchor makes the search far more accurate. If you heard about it in the news, note down the full name of the law as reported.'
			}
		},
		{
			title: { th: 'เข้าเว็บไซต์ทางการแล้วค้นด้วยคำสั้น ๆ ที่เฉพาะเจาะจง', en: 'Open the official site and search with short, distinctive terms' },
			text: {
				th: 'ชื่อกฎหมายทางการมักยาวและมีวงเล็บกำกับว่าเป็นฉบับที่เท่าไร การพิมพ์ชื่อยาวทั้งชื่อจึงมักไม่พบผล ให้เลือกใช้คำเฉพาะสั้น ๆ ที่ไม่น่าซ้ำกับเรื่องอื่นแทน',
				en: 'Official titles are long and often carry a bracketed amendment number, so pasting the whole thing tends to return nothing. Pick a short phrase unlikely to appear in other documents instead.'
			}
		},
		{
			title: { th: 'คัดกรองผลด้วยประเภทเอกสารและช่วงเวลา', en: 'Narrow by document type and date range' },
			text: {
				th: 'ถ้าคุณกำลังหาตัวบทกฎหมาย ให้ตัดผลที่เป็นประกาศแต่งตั้งหรือทะเบียนออกไปก่อน และจำกัดช่วงวันที่ให้แคบลงเมื่อรู้คร่าว ๆ ว่าเรื่องนี้เป็นข่าวเมื่อไร',
				en: 'If you want the text of a law, filter out appointment and registry notices first, and tighten the date range once you know roughly when the story broke.'
			}
		},
		{
			title: { th: 'เปิดไฟล์ แล้วตรวจหัวเอกสารก่อนอ่านเนื้อหา', en: 'Open the file and read the header before the body' },
			text: {
				th: 'หัวเอกสารจะบอกเล่ม ตอน ประเภท เลขหน้า และวันที่ประกาศ ข้อมูลชุดนี้คือสิ่งที่ยืนยันว่าคุณกำลังอ่านฉบับที่ถูกต้อง และเป็นสิ่งที่ต้องใช้เวลาอ้างอิงต่อ',
				en: 'The header gives the volume, issue, series, page and publication date. That set of details confirms you have the right document and is exactly what you will need when citing it.'
			}
		},
		{
			title: { th: 'อ่านมาตราที่ระบุวันใช้บังคับและบทเฉพาะกาล', en: 'Read the commencement clause and transitional provisions' },
			text: {
				th: 'อย่าอนุมานว่ากฎหมายมีผลทันทีในวันที่ประกาศ ให้อ่านมาตราต้น ๆ ที่ระบุวันเริ่มใช้บังคับ และบทเฉพาะกาลที่มักกำหนดว่าใครต้องทำอะไรภายในกี่วัน',
				en: 'Do not assume a law bites on the day it is published. Read the opening sections that state when it comes into force, and the transitional provisions that usually set who must do what, and by when.'
			}
		},
		{
			title: { th: 'บันทึกไฟล์และจดข้อมูลอ้างอิงไว้', en: 'Save the file and record the citation' },
			text: {
				th: 'ดาวน์โหลด PDF เก็บไว้พร้อมจดเล่ม ตอน หน้า และวันที่ เพื่อให้กลับมาหาได้เร็วในภายหลัง และเพื่อให้คนอื่นตรวจสอบตามได้',
				en: 'Download the PDF and note the volume, issue, page and date, so you can find it again quickly and so others can verify it themselves.'
			}
		}
	],
	faq: [
		{
			q: { th: 'กฎหมายมีผลบังคับใช้ทันทีที่ประกาศในราชกิจจานุเบกษาหรือไม่', en: 'Does a law take effect the moment it appears in the Gazette?' },
			a: {
				th: 'การประกาศในราชกิจจานุเบกษาคือเงื่อนไขที่ทำให้กฎหมายใช้บังคับได้ แต่วันเริ่มมีผลจริงขึ้นอยู่กับที่ตัวบทเขียนไว้ กฎหมายจำนวนมากกำหนดให้ใช้บังคับตั้งแต่วันถัดจากวันประกาศ ขณะที่บางฉบับให้มีผลเมื่อพ้นระยะเวลาหนึ่งเพื่อให้ผู้เกี่ยวข้องเตรียมตัว ทางที่ปลอดภัยที่สุดคือเปิดไฟล์ฉบับจริงแล้วอ่านมาตราที่ระบุวันใช้บังคับด้วยตนเอง',
				en: 'Publication in the Gazette is the condition that allows a law to operate, but the actual start date is whatever the text itself specifies. Many laws apply from the day after publication, while others allow a set period so those affected can prepare. The safe approach is to open the document and read the commencement clause yourself.'
			}
		},
		{
			q: { th: 'ค้นหาและดาวน์โหลดต้องเสียเงินหรือสมัครสมาชิกไหม', en: 'Is there a fee, or do I need an account?' },
			a: {
				th: 'การค้นหาและเปิดอ่านเอกสารที่ประกาศแล้วบนเว็บไซต์ราชกิจจานุเบกษาเปิดให้ประชาชนใช้ได้ฟรี และโดยทั่วไปไม่ต้องสมัครสมาชิกเพื่ออ่าน หากคุณเจอหน้าเว็บที่เรียกเก็บเงินเพื่อดูตัวบทกฎหมายไทย ให้สันนิษฐานไว้ก่อนว่านั่นไม่ใช่เว็บไซต์ทางการ',
				en: 'Searching and reading published documents on the Gazette site is free to the public, and normally requires no account. If you land on a page charging money to view the text of a Thai law, assume it is not the official site.'
			}
		},
		{
			q: { th: 'ค้นชื่อกฎหมายใน Google แล้วไม่เจอไฟล์จากราชกิจจานุเบกษาเลย เพราะอะไร', en: 'Why does a Google search never surface the Gazette itself?' },
			a: {
				th: 'จากการตรวจสอบของเรา เว็บไซต์ตอบกลับรหัส 403 ต่อทุกคำขอจากเครื่องที่เราใช้ตรวจสอบ ไม่ว่าจะระบุตัวเป็นบอทหรือเบราว์เซอร์ทั่วไป เราจึงอ่าน robots.txt เพื่อยืนยันนโยบายไม่ได้ และในทางปฏิบัติ ผลการค้นหาที่ได้จาก Google มักเป็นข่าวหรือบทความสรุปมากกว่าตัวบทจากต้นทาง วิธีที่ได้ผลกว่าคือเข้าเว็บไซต์ทางการโดยตรงแล้วค้นจากในระบบของเว็บไซต์เอง',
				en: 'In our own check, the site returns a 403 to requests carrying a search-engine crawler user-agent, so enacted text is largely absent from the index. What Google returns instead is news coverage and secondhand summaries. The reliable route is to go to the official site and search from inside it.'
			}
		},
		{
			q: { th: 'ค้นในเว็บไซต์แล้วไม่เจอ ทั้งที่แน่ใจว่ามีประกาศ ควรทำอย่างไร', en: 'The site finds nothing even though I know the notice exists — what now?' },
			a: {
				th: 'ให้ลดคำค้นลงเหลือคำเฉพาะสั้น ๆ เพราะชื่อทางการมักยาวและมีวงเล็บระบุฉบับที่แก้ไข ทำให้พิมพ์ไม่ตรงได้ง่าย ถ้ายังไม่พบ ให้เปลี่ยนไปค้นด้วยช่วงวันที่ที่คาดว่าประกาศ หรือไล่ดูรายการตามวันที่แทน อีกกรณีที่พบได้คือเอกสารเพิ่งเผยแพร่ จึงควรลองค้นอีกครั้งในภายหลัง',
				en: 'Cut the query down to a short distinctive phrase — official titles are long and carry bracketed amendment numbers that are easy to mistype. If that fails, search by the date range you expect instead, or browse chronologically. It is also possible the document was only just released, so try again a little later.'
			}
		},
		{
			q: { th: 'ได้รับภาพหน้าราชกิจจานุเบกษาทางแชท จะรู้ได้อย่างไรว่าเป็นของจริง', en: 'Someone sent me a photo of a Gazette page — how do I know it is real?' },
			a: {
				th: 'อย่าตัดสินจากภาพเพียงอย่างเดียว เพราะภาพถูกตัดต่อ ครอบตัดจนเสียบริบท หรือเป็นฉบับเก่าที่ถูกยกเลิกไปแล้วได้ ให้จดชื่อเรื่อง วันที่ และเลขเล่มกับตอนที่ปรากฏบนภาพ แล้วไปค้นเอกสารนั้นบนเว็บไซต์ทางการด้วยตัวเอง หากข้อความในไฟล์ต้นฉบับตรงกันจึงถือว่าเชื่อถือได้ และควรระวังลิงก์ที่ส่งต่อกันมาซึ่งใช้ชื่อโดเมนคล้ายของจริง',
				en: 'Never judge by the image alone: pictures get edited, cropped out of context, or turn out to be a repealed edition. Note the title, the date and the volume and issue numbers visible in the image, then look that document up on the official site yourself. Trust it only once the source file matches — and be wary of forwarded links using lookalike domain names.'
			}
		},
		{
			q: { th: 'ราชกิจจานุเบกษาต่างจากมติคณะรัฐมนตรีหรือร่างกฎหมายที่เป็นข่าวอย่างไร', en: 'How is this different from a cabinet resolution or a bill in the news?' },
			a: {
				th: 'ข่าวมักรายงานตั้งแต่ขั้นเสนอร่าง ขั้นคณะรัฐมนตรีเห็นชอบ หรือขั้นรัฐสภาลงมติ ซึ่งทั้งหมดยังเป็นกระบวนการก่อนกฎหมายมีผล ส่วนราชกิจจานุเบกษาคือจุดที่ตัวบทถูกเผยแพร่อย่างเป็นทางการ ถ้าเรื่องใดยังไม่ปรากฏที่นี่ โดยทั่วไปยังไม่ควรถือว่าเป็นกฎที่ต้องปฏิบัติตาม',
				en: 'News coverage usually starts at the drafting stage, cabinet approval, or a parliamentary vote — all steps that come before a law has any effect. The Gazette is where the text is finally published in official form. Until something appears here, it should generally not be treated as a rule you must follow.'
			}
		},
		{
			q: { th: 'ดาวน์โหลดไฟล์มาแล้ว แต่ค้นหาข้อความข้างในไม่เจอ', en: 'I downloaded the PDF but cannot search inside it.' },
			a: {
				th: 'เอกสารเก่าบางฉบับเป็นภาพสแกนของหน้ากระดาษ ไม่ใช่ข้อความที่คอมพิวเตอร์อ่านได้ การกดค้นหาในโปรแกรมอ่าน PDF จึงไม่พบคำที่ต้องการ ทางแก้คือไล่จากสารบัญหรือหัวเรื่องของฉบับนั้นเพื่อหาหน้าที่ต้องการ หรือใช้โปรแกรมแปลงภาพเป็นข้อความช่วย แล้วนำผลที่ได้กลับไปเทียบกับหน้าต้นฉบับอีกครั้งก่อนนำไปอ้างอิง',
				en: 'Some older documents are page scans rather than machine-readable text, so your PDF reader’s find function turns up nothing. Work from the table of contents or the running headings to locate the page instead, or run the file through text-recognition software — then check the result against the original page before you cite it.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ราชกิจจานุเบกษาคืออะไร', en: 'What the Royal Gazette is' }
		},
		{
			type: 'p',
			text: {
				th: 'ราชกิจจานุเบกษาคือสิ่งพิมพ์ทางการที่รัฐใช้เผยแพร่กฎหมายและประกาศของทางราชการ จัดทำและเผยแพร่โดยสำนักเลขาธิการคณะรัฐมนตรี เอกสารที่ลงในราชกิจจานุเบกษาถือเป็นฉบับทางการของเรื่องนั้น และเป็นตัวบทที่ศาล หน่วยงานรัฐ และผู้ประกอบวิชาชีพกฎหมายใช้อ้างอิงเมื่อต้องยืนยันถ้อยคำที่แท้จริงของกฎหมาย ความสำคัญนี้ผูกอยู่กับหลักการที่ว่ากฎหมายต้องเผยแพร่ให้ประชาชนรับรู้ก่อนจึงจะบังคับกับใครได้ ตามแนวปฏิบัติทางกฎหมายของไทย กฎหมายจะใช้บังคับได้ก็ต่อเมื่อได้ประกาศในราชกิจจานุเบกษาแล้ว ด้วยเหตุนี้ ข่าวที่บอกว่าคณะรัฐมนตรีเห็นชอบ หรือรัฐสภาผ่านร่างแล้ว จึงยังไม่ใช่จุดที่กฎเริ่มมีผลกับคุณ และแม้ประกาศแล้วก็ยังต้องดูต่อว่าตัวบทกำหนดวันเริ่มใช้บังคับไว้เมื่อใด',
				en: 'The Royal Gazette is the state’s official publication for laws and government notices, produced and published by the Secretariat of the Cabinet. A document printed in it is the official version of that matter, and it is the text courts, state agencies and legal practitioners fall back on whenever the exact wording of a law is in question. That authority rests on a simple principle — a law must be made public before it can bind anyone — and under Thai legal practice a law generally operates only once it has appeared here. A headline saying the cabinet approved something, or that parliament passed a bill, is therefore not yet the moment the rule starts applying to you — and even after publication you still have to check the date the text itself sets for coming into force.'
			}
		},
		{
			type: 'h2',
			text: { th: 'มีอะไรประกาศในราชกิจจานุเบกษาบ้าง', en: 'What gets published in it' }
		},
		{
			type: 'p',
			text: {
				th: 'เนื้อหาในราชกิจจานุเบกษากว้างกว่าที่หลายคนคิด ไม่ได้มีเฉพาะกฎหมายระดับพระราชบัญญัติ แต่รวมถึงกฎหมายลำดับรอง ประกาศและระเบียบของหน่วยงาน มติคณะรัฐมนตรีที่มีผลทางกฎหมาย ประกาศขององค์กรอิสระ ตลอดจนการแต่งตั้งบุคคลและการพระราชทานเครื่องราชอิสริยาภรณ์',
				en: 'The range is wider than most people expect. It is not only acts of parliament, but also subordinate legislation, agency notifications and rules, cabinet resolutions carrying legal effect, announcements from independent agencies, and appointments and honours.'
			}
		},
		{
			type: 'table',
			caption: { th: 'ประเภทเอกสารที่พบบ่อยในราชกิจจานุเบกษา', en: 'Document types you will commonly find' },
			head: [
				{ th: 'ประเภทเอกสาร', en: 'Document type' },
				{ th: 'เป็นเรื่องอะไร', en: 'What it is' },
				{ th: 'ผู้ออก', en: 'Issued by' }
			],
			rows: [
				[
					{ th: 'พระราชบัญญัติ', en: 'Act' },
					{ th: 'กฎหมายหลักที่ผ่านความเห็นชอบของรัฐสภา', en: 'Primary legislation approved by parliament' },
					{ th: 'ฝ่ายนิติบัญญัติ', en: 'The legislature' }
				],
				[
					{ th: 'พระราชกำหนด', en: 'Emergency decree' },
					{ th: 'กฎหมายที่ออกในกรณีจำเป็นเร่งด่วน แล้วเสนอให้รัฐสภาพิจารณาภายหลัง', en: 'Law issued in urgent circumstances and put to parliament afterwards' },
					{ th: 'ฝ่ายบริหาร', en: 'The executive' }
				],
				[
					{ th: 'พระราชกฤษฎีกา', en: 'Royal decree' },
					{ th: 'กฎหมายลำดับรองที่ออกโดยอาศัยอำนาจตามกฎหมายแม่บท', en: 'Subordinate legislation made under powers granted by a parent act' },
					{ th: 'ฝ่ายบริหาร', en: 'The executive' }
				],
				[
					{ th: 'กฎกระทรวง', en: 'Ministerial regulation' },
					{ th: 'รายละเอียดการปฏิบัติตามที่กฎหมายแม่บทให้อำนาจไว้', en: 'Operational detail set under authority delegated by a parent act' },
					{ th: 'กระทรวงที่รับผิดชอบ', en: 'The responsible ministry' }
				],
				[
					{ th: 'ประกาศ ระเบียบ และคำสั่ง', en: 'Notifications, rules and orders' },
					{ th: 'หลักเกณฑ์ปลีกย่อยที่ผู้ประกอบการต้องปฏิบัติตาม เช่น มาตรฐาน อัตรา และเงื่อนไข', en: 'The granular requirements businesses must meet — standards, rates and conditions' },
					{ th: 'หน่วยงานรัฐและองค์กรอิสระ', en: 'State agencies and independent bodies' }
				],
				[
					{ th: 'ประกาศแต่งตั้งและพระราชทานเครื่องราชอิสริยาภรณ์', en: 'Appointments and honours' },
					{ th: 'การแต่งตั้งผู้ดำรงตำแหน่งทางการ และรายชื่อผู้ได้รับพระราชทาน', en: 'Appointments to official positions and lists of recipients' },
					{ th: 'หน่วยงานต้นสังกัด', en: 'The relevant agency' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'อ่านการอ้างอิงราชกิจจานุเบกษาให้เป็น', en: 'How to read a Gazette citation' }
		},
		{
			type: 'p',
			text: {
				th: 'ราชกิจจานุเบกษาจัดเก็บเป็นเล่มตามลำดับปี และแบ่งย่อยเป็นตอนที่ออกต่อเนื่องกันไป แต่ละตอนยังแยกตามประเภทของเนื้อหา เช่น ตัวบทกฎหมาย ทะเบียนฐานันดรและเครื่องราชอิสริยาภรณ์ และประกาศงานทั่วไป นอกจากนี้ยังมีฉบับพิเศษสำหรับเรื่องที่ต้องเผยแพร่โดยเร็ว การอ้างอิงที่สมบูรณ์จึงประกอบด้วยเล่ม ตอน ประเภท เลขหน้า และวันที่ประกาศ ตัวเลขชุดนี้สำคัญเวลาต้องยืนยันว่าทุกฝ่ายกำลังพูดถึงเอกสารฉบับเดียวกัน โดยเฉพาะกฎหมายที่ถูกแก้ไขมาแล้วหลายครั้ง เพราะฉบับแก้ไขแต่ละครั้งจะประกาศแยกกันคนละวันคนละหน้า การอ้างเพียงชื่อกฎหมายลอย ๆ จึงยังไม่พอที่จะระบุว่าหมายถึงถ้อยคำชุดใด',
				en: 'The Gazette is bound into volumes running by year, subdivided into issues published in sequence. Issues are further separated by the kind of content they carry — statutory texts, the register of ranks and honours, and general notices — with special editions for matters that must go out quickly. A complete citation therefore names the volume, the issue, the series, the page and the date. Those numbers matter when you need everyone to be looking at the same document, especially for a law amended several times, since each amendment is published separately, on its own date and page. Naming the law alone is rarely enough to pin down which wording you mean.'
			}
		},
		{
			type: 'code',
			lang: 'text',
			text: 'ราชกิจจานุเบกษา เล่ม [เลขเล่ม] ตอนที่ [เลขตอน] [ประเภท]\nหน้า [เลขหน้า] ลงวันที่ [วัน เดือน ปี พ.ศ.]',
			caption: { th: 'โครงของการอ้างอิงที่พบในเอกสารทางกฎหมาย', en: 'The citation skeleton used in legal documents' }
		},
		{
			type: 'h2',
			text: { th: 'ใครใช้ราชกิจจานุเบกษาบ้าง', en: 'Who relies on it' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ทนายความและที่ปรึกษากฎหมาย ที่ต้องอ้างถ้อยคำของกฎหมายให้ตรงตามตัวอักษร',
					en: 'Lawyers and legal advisers who must quote statutory wording exactly.'
				},
				{
					th: 'ฝ่ายกำกับดูแลและ compliance ขององค์กร ที่ต้องรู้ว่ากฎเกณฑ์ใหม่เริ่มบังคับใช้วันไหนและกระทบขั้นตอนใดบ้าง',
					en: 'Compliance and risk teams who need to know when a new rule bites and which processes it touches.'
				},
				{
					th: 'ผู้ประกอบการ ที่ต้องตามการเปลี่ยนแปลงมาตรฐานสินค้า อัตราค่าธรรมเนียม หรือเงื่อนไขใบอนุญาต',
					en: 'Businesses tracking changes to product standards, fee schedules or licensing conditions.'
				},
				{
					th: 'นักข่าวและบรรณาธิการ ที่ต้องยืนยันก่อนรายงานว่าเรื่องนั้นประกาศแล้วจริง',
					en: 'Journalists and editors verifying that something has genuinely been enacted before they report it.'
				},
				{
					th: 'นักวิชาการและนักศึกษากฎหมาย ที่ใช้ตัวบทต้นฉบับประกอบงานวิจัยและงานเขียน',
					en: 'Academics and law students working from primary sources in their research and writing.'
				},
				{
					th: 'ประชาชนทั่วไป ที่อยากตรวจว่ากฎซึ่งเห็นในข่าวหรือในโซเชียลมีอยู่จริงและมีผลแล้วหรือยัง',
					en: 'Members of the public checking whether a rule they saw in the news or on social media exists and is actually in force.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'ข้อจำกัดที่ควรรู้ก่อนใช้งาน', en: 'Limitations worth knowing about' }
		},
		{
			type: 'p',
			text: {
				th: 'เอกสารเผยแพร่เป็นไฟล์ PDF ซึ่งเป็นภาพแทนหน้ากระดาษของฉบับจริง ข้อดีคือได้ถ้อยคำและรูปแบบตรงตามต้นฉบับ แต่ข้อเสียคือการค้นข้อความภายในไฟล์ทำได้ยากกว่าหน้าเว็บทั่วไป และเว็บไซต์ไม่ได้รวมฉบับแก้ไขทั้งหมดให้เป็นตัวบทเดียว หากกฎหมายฉบับหนึ่งถูกแก้ไขมาแล้วหลายครั้ง คุณต้องไล่อ่านฉบับแก้ไขแต่ละครั้งประกอบกันเอง หรือใช้ฐานข้อมูลกฎหมายที่จัดทำฉบับรวมไว้ แล้วย้อนกลับมาตรวจกับต้นฉบับที่นี่อีกครั้ง',
				en: 'Documents come as PDFs that reproduce the printed page. The upside is fidelity — the wording and layout are exactly as issued. The downside is that searching inside a file is harder than searching a normal web page, and the site does not merge amendments into a single consolidated text. If a law has been amended repeatedly you must read the amendments together yourself, or work from a consolidating database and then check it back against the original here.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'อย่าเชื่อภาพที่แชร์ต่อกันมาโดยไม่ตรวจ', en: 'Do not trust a forwarded screenshot' },
			text: {
				th: 'ภาพหน้าราชกิจจานุเบกษาที่แชร์ในโซเชียลถูกตัดต่อ ครอบตัดจนเสียบริบท หรือหยิบฉบับเก่าที่ถูกยกเลิกไปแล้วมาใช้ได้ง่าย วิธีตรวจที่แน่นอนที่สุดคือเปิดเว็บไซต์ทางการเอง แล้วค้นด้วยชื่อเรื่องหรือวันที่ที่ปรากฏบนภาพ หากไม่พบเอกสารที่ตรงกัน ให้ถือว่ายังไม่ได้รับการยืนยัน',
				en: 'Images of Gazette pages circulating on social media are easy to edit, easy to crop out of context, and sometimes come from a repealed edition. The only dependable check is to open the official site yourself and search for the title or date shown in the image. If no matching document turns up, treat the claim as unverified.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมกฎหมายไทยถึงต้องมีหน้าที่ค้นเจอชี้มาที่นี่', en: 'Why Thai law needs a findable page pointing here' }
		},
		{
			type: 'p',
			text: {
				th: 'ราชกิจจานุเบกษาคือแหล่งกฎหมายที่มีน้ำหนักที่สุดของประเทศ แต่จากการตรวจสอบของเราเมื่อวันที่ 27 สิงหาคม 2569 เซิร์ฟเวอร์ตอบกลับรหัส 403 ต่อทุกคำขอจากเครื่องที่เราใช้ตรวจสอบ ทั้งเมื่อระบุตัวเป็น Googlebot และเมื่อใช้เบราว์เซอร์ทั่วไป เราจึงยืนยันนโยบายของเว็บไซต์จากภายนอกไม่ได้เลย และสิ่งที่สังเกตได้คือคนที่พิมพ์ชื่อกฎหมายลงในช่องค้นหามักเจอข่าวสรุป โพสต์ในโซเชียล หรือบทความที่คัดลอกต่อ ๆ กันมาก่อนเสมอ ซึ่งอาจตกหล่นข้อความสำคัญ ตีความคลาดเคลื่อน หรือเป็นข้อมูลที่ล้าสมัยไปแล้วหลายฉบับ ทั้งที่เรื่องนี้เป็นเรื่องที่ผิดพลาดไม่ได้ เพราะปลายทางคือสิ่งที่คนต้องปฏิบัติตามจริง',
				en: 'The Gazette is the most authoritative legal source in the country, yet in our check on 27 August 2026 the server answered every request from our audit host with 403 — as Googlebot and as an ordinary browser alike — so its policy cannot be verified from outside at all. What is observable is that typing the name of a law into a search box returns news coverage first, social posts and articles copied from one another — material that can drop crucial clauses, misread them, or be several amendments out of date. That is a poor thing to get wrong, because what is at stake is what people are actually obliged to do.'
			}
		},
		{
			type: 'p',
			text: {
				th: 'THGov ไม่ได้ทำสำเนาตัวบทกฎหมายมาเก็บไว้ และไม่ได้มีความเกี่ยวข้องกับหน่วยงานใด สิ่งที่หน้านี้ทำคืออธิบายด้วยคำที่คนค้นหาจริงว่าราชกิจจานุเบกษาคืออะไร ใช้อย่างไร และอ่านการอ้างอิงอย่างไร แล้วส่งคุณไปยังเว็บไซต์ทางการเพื่ออ่านฉบับเต็มด้วยตัวคุณเอง ตราบใดที่ต้นทางของกฎหมายยังไม่เปิดให้เครื่องมือค้นหาเข้าถึง สะพานเล็ก ๆ แบบนี้ก็ยังจำเป็นสำหรับคนที่ต้องการอ่านของจริง ไม่ใช่คำบอกเล่าที่ผ่านมือคนอื่นมาแล้วหลายทอด',
				en: 'THGov keeps no copy of any statutory text and is not affiliated with any agency. What this page does is explain, in the words people actually search with, what the Gazette is, how to use it and how to read a citation — then send you to the official site to read the full document for yourself. For as long as the source of the law stays closed to search engines, a small bridge like this remains necessary for anyone who wants the real thing rather than a secondhand account of it.'
			}
		}
	],
	crawl: {
		host: 'ratchakitcha.soc.go.th',
		verdict: 'waf-blocked',
		status: 403,
		snippet: 'User-Agent: Googlebot/2.1\n  GET /robots.txt  ->  403\n  GET /            ->  403\nUser-Agent: Chrome (desktop browser)\n  GET /            ->  403',
		checkedAt: '2026-08-27',
		note: {
			th: 'เซิร์ฟเวอร์ตอบกลับรหัส 403 ต่อทุกคำขอจากเครื่องที่เราใช้ตรวจสอบ ไม่ว่าจะระบุตัวเป็น Googlebot หรือเป็นเบราว์เซอร์ทั่วไป และเว็บไซต์สำนักเลขาธิการคณะรัฐมนตรี (www.soc.go.th) ก็ให้ผลเช่นเดียวกัน เมื่ออ่านไฟล์ robots.txt ไม่ได้ เราจึงยืนยันนโยบายที่แท้จริงของเว็บไซต์ไม่ได้ และสรุปไม่ได้ว่า Googlebot ตัวจริงถูกปิดกั้นหรือไม่ สิ่งที่ยืนยันได้คือระบบปิดกั้นทราฟฟิกจากศูนย์ข้อมูลเป็นวงกว้าง ซึ่งกระทบเครื่องมือเก็บถาวร เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI ที่ประชาชนใช้ค้นกฎหมาย',
			en: 'The server answers 403 to every request from our audit host — whether it identifies as Googlebot or as an ordinary desktop browser — and the Secretariat of the Cabinet site (www.soc.go.th) behaves identically. Because robots.txt cannot be read, we cannot confirm the site’s actual policy, and cannot conclude that the genuine Googlebot is blocked. What is verifiable is a broad block on datacentre traffic, which affects archiving services, third-party monitoring and the AI assistants people increasingly use to look up the law.'
		}
	},
	priority: 94,
	updated: '2026-08-27'
};
