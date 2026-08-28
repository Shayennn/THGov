import type { Guide } from '../types';

export const guide: Guide = {
	slug: 'search-thai-law-gazette',
	title: {
		th: 'วิธีค้นหาตัวบทกฎหมายไทยฉบับจริงจากราชกิจจานุเบกษา',
		en: 'How to Find the Real Text of a Thai Law'
	},
	deck: {
		th: 'เมื่อคำตอบผิดไม่ได้ ต้องกลับไปที่ตัวบท — วิธีตามหาเอกสารฉบับจริงในราชกิจจานุเบกษา อ่านการอ้างอิงให้เป็น และตรวจให้แน่ว่าฉบับที่อ่านอยู่ยังใช้อยู่',
		en: 'When you cannot afford to be wrong, go back to the text itself — how to track down the original document in the Royal Gazette, read its citation, and confirm the version in front of you still counts.'
	},
	summary: {
		th: 'วิธีหาตัวบทกฎหมายไทยฉบับเต็มจากราชกิจจานุเบกษา อ่านการอ้างอิงเล่ม ตอนที่ และวันที่ให้เป็น ตรวจว่ามีฉบับแก้ไขตามมาหรือยัง และแยกของจริงออกจากบทสรุป',
		en: 'How to find the authoritative text of a Thai law in the Royal Gazette: read the citation, confirm it is in force, check for amendments, and never stop at a summary.'
	},
	keywords: {
		th: [
			'หาตัวบทกฎหมายฉบับเต็ม',
			'ค้นหากฎหมายไทย',
			'ค้นหาราชกิจจานุเบกษา',
			'กฎหมายฉบับจริง',
			'เช็คว่ากฎหมายบังคับใช้แล้วหรือยัง',
			'ดาวน์โหลด พ.ร.บ. pdf',
			'อ่านกฎกระทรวงฉบับเต็ม',
			'วิธีอ้างอิงราชกิจจานุเบกษา',
			'กฎหมายใหม่มีผลเมื่อไหร่',
			'ตรวจสอบข่าวกฎหมายว่าจริงไหม',
			'ค้นประกาศกระทรวงย้อนหลัง',
			'ฉบับแก้ไขเพิ่มเติมของกฎหมาย',
			'เล่ม ตอนที่ ราชกิจจานุเบกษา'
		],
		en: [
			'find Thai law full text',
			'search Royal Thai Government Gazette',
			'Thai statute official text',
			'is a Thai law in force yet',
			'Thai Gazette citation format',
			'download Thai act PDF',
			'verify Thai legal news'
		]
	},
	services: ['ratchakitcha-gazette'],
	steps: [
		{
			title: {
				th: 'รู้ก่อนว่าคุณกำลังหาเอกสารประเภทไหน',
				en: 'Work out what kind of document you are after'
			},
			text: {
				th: 'ข่าวเรียกรวมกันหมดว่ากฎหมายใหม่ ทั้งที่อาจเป็นพระราชบัญญัติ กฎกระทรวงที่ออกตามมา หรือประกาศของหน่วยงาน สามอย่างนี้อยู่คนละชั้นและใช้คำค้นคนละชุด ถ้าไม่แน่ใจ ให้จำชื่อหน่วยงานที่ออกเรื่องนั้นไว้ก่อน',
				en: 'News coverage calls them all “a new law”, though what you want may be a full act, a ministerial regulation issued under it, or an agency notification carrying the detail. The three sit on different tiers and answer to different search terms. If you are unsure, hold on to the name of the agency behind the story.'
			}
		},
		{
			title: {
				th: 'ขุดการอ้างอิงออกมาจากบทสรุปที่อ่านเจอ',
				en: 'Mine the summary you already have for a citation'
			},
			text: {
				th: 'บทความจากสำนักงานกฎหมายหรือรายงานข่าวมักบอกชื่อเต็ม วันที่ประกาศ หรือเลขเล่มและตอนที่ไว้ให้แล้ว ให้คัดข้อมูลชุดนี้จดไว้ แล้วปิดบทความไป เพราะสิ่งที่คุณต้องการจากมันคือพิกัดไปหาต้นฉบับ ไม่ใช่คำอธิบายของมัน',
				en: 'A firm briefing or a news report usually gives you the full title, the date of publication, sometimes even the volume and issue. Copy those details down, then close the article. What you wanted from it was the coordinates, not its reading of what the text means.'
			}
		},
		{
			title: {
				th: 'ค้นจากภายในเว็บไซต์ทางการ',
				en: 'Search inside the official site, not the open web'
			},
			text: {
				th: 'เว็บไซต์ราชกิจจานุเบกษาไม่ได้ถูกจัดทำดัชนีอย่างครบถ้วน การค้นด้วยเครื่องมือทั่วไปจึงมักได้ข่าวและบทความที่คัดลอกต่อกันมาขึ้นก่อนไฟล์ต้นฉบับ ให้เปิดเว็บไซต์ทางการที่ ratchakitcha.soc.go.th เอง แล้วค้นจากในระบบนั้น',
				en: 'The Gazette site is not reliably indexed, so a general web search tends to surface news pieces and copied articles long before the source file. Open the official site at ratchakitcha.soc.go.th yourself and use the search built into it.'
			}
		},
		{
			title: {
				th: 'ค้นด้วยคำสั้นและเฉพาะ แล้วค่อยกรอง',
				en: 'Search short and distinctive, then narrow'
			},
			text: {
				th: 'คำค้นยาว ๆ ที่ลอกมาทั้งประโยคมักไม่พบอะไรเลย ให้ใช้คำเฉพาะที่โดดจากชื่อเรื่อง เช่น สิ่งที่ถูกกำกับดูแล แล้วค่อยแคบผลด้วยประเภทเอกสารและช่วงเวลา ถ้ายังไม่พบ ให้ลองสะกดอีกแบบ เพราะชื่อทางการมักต่างจากคำที่ข่าวเรียก',
				en: 'Pasting a whole sentence usually returns nothing. Use the distinctive words instead — the thing being regulated, the activity being licensed — then narrow by document type and date range. If nothing comes back, try another spelling: official titles rarely use the shorthand the press settled on.'
			}
		},
		{
			title: {
				th: 'เปิดไฟล์แล้วอ่านหัวเอกสารก่อนเนื้อหา',
				en: 'Open the file and read the header first'
			},
			text: {
				th: 'ส่วนหัวของหน้าบอกเล่ม ตอนที่ ประเภท เลขหน้า และวันที่ประกาศ ซึ่งยืนยันว่าเอกสารตรงหน้าคือฉบับเดียวกับที่คนอื่นอ้างถึง ถ้าไม่ตรงกับที่จดมา แปลว่าอาจเป็นคนละฉบับ ให้กลับไปค้นใหม่ก่อนอ่านต่อ',
				en: 'The page header carries the volume, the issue, the series, the page and the date of publication — the facts proving you hold the same document everyone else is citing. If they do not match what you noted down, you are probably in a different edition; search again before reading on.'
			}
		},
		{
			title: {
				th: 'ตรวจว่ามีฉบับแก้ไขเพิ่มเติมตามมาหรือไม่',
				en: 'Check whether an amendment came later'
			},
			text: {
				th: 'กฎหมายฉบับหนึ่งอาจถูกแก้ไขหลายครั้ง และแต่ละครั้งประกาศเป็นเอกสารแยกคนละวัน เมื่อได้ฉบับหลักแล้วจึงต้องค้นด้วยชื่อเดิมอีกรอบ เพราะข้อความที่อ่านอยู่อาจถูกเปลี่ยนไปแล้ว โดยไฟล์เดิมไม่มีอะไรบอกคุณ',
				en: 'A law may be amended repeatedly, and each amendment is published as its own document on its own date. Once you have the principal text, search the same title again — the passage in front of you may already have been reworded, and nothing in the original file will say so.'
			}
		},
		{
			title: {
				th: 'บันทึกไฟล์ และจดการอ้างอิงให้ครบ',
				en: 'Save the file and record the citation'
			},
			text: {
				th: 'ดาวน์โหลด PDF เก็บไว้กับงานของคุณ อย่าเก็บแค่ลิงก์ เพราะที่อยู่ของไฟล์เปลี่ยนได้ แล้วจดข้อมูลอ้างอิงกำกับไว้ เพื่อให้คนที่อ่านงานต่อจากคุณเปิดฉบับเดียวกันได้ และให้คุณกลับมาตรวจซ้ำได้โดยไม่ต้องเริ่มใหม่',
				en: 'Download the PDF and keep it with your work rather than keeping only a link — web addresses change. Record the citation beside it, so whoever reads your work next can pull up the identical document, and so you are not starting from scratch months later.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'ทำไมบทสรุปถึงไม่พอ', en: 'Why a summary is not enough' }
		},
		{
			type: 'p',
			text: {
				th: 'บทสรุปที่อ่านง่ายเป็นสิ่งจำเป็น เพราะไม่มีใครมีเวลาไล่อ่านตัวบททุกฉบับ แต่บทสรุปทุกชิ้นล้วนตัดบางอย่างทิ้ง และสิ่งที่ถูกตัดก่อนมักเป็นชุดเดิม คือข้อยกเว้น เงื่อนไขที่ตัดสินว่ากฎนั้นใช้กับคุณหรือไม่ นิยามศัพท์ที่กำหนดขอบเขต และบทเฉพาะกาลที่ให้เวลาปรับตัว ซึ่งมักเป็นส่วนเดียวที่สำคัญจริงเมื่อต้องตอบว่าธุรกิจของคุณเข้าข่ายหรือไม่ ซ้ำร้าย บทความเก่ามักไม่ถูกแก้เมื่อกฎหมายเปลี่ยน จึงยังอ่านดูน่าเชื่อถือทั้งที่ล้าสมัยไปแล้ว',
				en: 'Readable summaries are necessary — nobody has time to read every instrument that issues. But every summary drops something, and what goes first is predictable: the exceptions, the conditions deciding whether a rule reaches you at all, the definitions that set the scope, and the transitional provisions saying how long anyone has to adjust. Those are usually the only part that mattered when the question is whether your business is caught. Worse, an old article is rarely revised when the law changes, so it still reads authoritatively long after it stopped being true.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมราชกิจจานุเบกษาถึงเป็นคำตอบสุดท้าย', en: 'Why the Gazette settles it' }
		},
		{
			type: 'p',
			text: {
				th: 'ราชกิจจานุเบกษาคือสิ่งพิมพ์ทางการที่รัฐใช้เผยแพร่กฎหมายและประกาศของทางราชการ จัดทำโดยสำนักเลขาธิการคณะรัฐมนตรี หลักคิดเบื้องหลังตรงไปตรงมา คือกฎเกณฑ์จะบังคับกับใครได้ก็ต่อเมื่อเผยแพร่ให้รับรู้ทั่วกันแล้ว กฎหมายจึงมีผลใช้บังคับก็ต่อเมื่อได้ประกาศที่นี่ ข่าวที่ว่าคณะรัฐมนตรีเห็นชอบหรือรัฐสภาผ่านร่าง จึงยังไม่ใช่จุดที่เรื่องนั้นกลายเป็นกฎที่คุณต้องทำตาม ส่วนสิ่งที่ประกาศมีตั้งแต่พระราชบัญญัติและพระราชกฤษฎีกา ลงมาถึงกฎกระทรวง ประกาศ คำสั่ง และการแต่งตั้ง',
				en: 'The Royal Gazette is the state’s official publication for laws and government notices, produced by the Secretariat of the Cabinet. The reasoning is plain: a rule can bind people only once it has been made public, so a law operates only after it appears here. That is why a headline saying the cabinet approved something, or that parliament passed a bill, is not yet the moment it becomes a rule you must follow. What appears here runs from acts and royal decrees down to ministerial regulations, notifications, orders and appointments.'
			}
		},
		{
			type: 'callout',
			tone: 'info',
			title: { th: 'ประกาศแล้ว กับ บังคับใช้แล้ว ไม่ใช่เรื่องเดียวกัน', en: 'Published and in force are not the same thing' },
			text: {
				th: 'วันที่เอกสารลงในราชกิจจานุเบกษาไม่จำเป็นต้องเป็นวันที่กฎเริ่มมีผล ตัวบทเกือบทุกฉบับมีมาตราที่ระบุเองว่าให้ใช้บังคับเมื่อใด บางฉบับทอดเวลาออกไปให้ผู้เกี่ยวข้องเตรียมตัว ให้อ่านมาตรานั้นจากตัวเอกสารเสมอ อย่าอนุมานจากวันที่บนหัวกระดาษ',
				en: 'The date a document appears in the Gazette is not necessarily the date the rule starts to bite. Almost every text contains a clause stating when it commences, and some are deliberately delayed so those affected can prepare. Read that clause in the document itself — never infer it from the date in the header.'
			}
		},
		{
			type: 'h2',
			text: { th: 'เตรียมอะไรไว้ก่อนเริ่มค้น', en: 'What to have ready before you start' }
		},
		{
			type: 'ul',
			items: [
				{
					th: 'ชื่อเรื่องเท่าที่จำได้ แม้เหลือเพียงคำสำคัญคำเดียวก็เริ่มได้',
					en: 'The title as best you know it — one distinctive word is enough to start.'
				},
				{
					th: 'ช่วงเวลาที่เรื่องนั้นเป็นข่าว ซึ่งใช้จำกัดผลการค้นหาได้ดีมาก',
					en: 'Roughly when the matter was in the news, a surprisingly powerful way to cut a result list down.'
				},
				{
					th: 'ชื่อหน่วยงานที่ออกเรื่อง ช่วยแยกเอกสารชื่อคล้ายกัน',
					en: 'The agency behind it, which separates documents with confusingly similar titles.'
				},
				{
					th: 'เลขเล่ม ตอนที่ และวันที่ ถ้าบทสรุปที่อ่านมาให้ไว้',
					en: 'The volume, issue and date, if the summary you read supplied them.'
				},
				{
					th: 'โปรแกรมอ่าน PDF ที่ค้นข้อความในไฟล์ได้ เพราะเอกสารเป็น PDF ทั้งหมด',
					en: 'A PDF reader that can search inside a file, since everything is published as a PDF.'
				}
			]
		},
		{
			type: 'h2',
			text: { th: 'อ่านการอ้างอิงให้เป็น', en: 'Learning to read a citation' }
		},
		{
			type: 'p',
			text: {
				th: 'ราชกิจจานุเบกษาจัดเก็บเป็นเล่มตามลำดับปี แต่ละเล่มแบ่งเป็นตอนที่ออกต่อเนื่องกัน และแยกตามประเภทของเนื้อหาอีกชั้น การอ้างอิงที่สมบูรณ์จึงมีทั้งเล่ม ตอนที่ ประเภท เลขหน้า และวันที่ประกาศ ตัวเลขชุดนี้มีไว้ให้ทุกฝ่ายมั่นใจว่าพูดถึงเอกสารแผ่นเดียวกัน เพราะลำพังชื่อเรื่องยังไม่พอจะระบุว่าหมายถึงถ้อยคำชุดไหน',
				en: 'The Gazette is bound into volumes running by year, each subdivided into issues published in sequence and separated again by the kind of content they carry. A complete citation therefore names the volume, the issue, the series, the page and the date. Those numbers are how everyone confirms they are looking at the same sheet of paper, because the title alone rarely pins down which wording you mean.'
			}
		},
		{
			type: 'table',
			caption: { th: 'องค์ประกอบของการอ้างอิง และวิธีใช้ค้นเอกสาร', en: 'The parts of a citation, and what each one does for you' },
			head: [
				{ th: 'องค์ประกอบ', en: 'Element' },
				{ th: 'บอกอะไร', en: 'What it tells you' },
				{ th: 'ใช้ค้นอย่างไร', en: 'How it helps you search' }
			],
			rows: [
				[
					{ th: 'เล่ม', en: 'Volume' },
					{ th: 'ชุดเอกสารของช่วงปีนั้น', en: 'The run of issues gathered for that year' },
					{ th: 'ยึดคุณไว้กับปี เรื่องชื่อคล้ายกันจะหลุดไป', en: 'Anchors you to a year, so near-identical titles elsewhere drop away' }
				],
				[
					{ th: 'ตอนที่', en: 'Issue' },
					{ th: 'ลำดับของฉบับที่ออกภายในเล่มเดียวกัน', en: 'Which instalment within that volume carried it' },
					{ th: 'ยืนยันว่าเป็นฉบับเดียวกับที่คนอื่นอ้างถึง', en: 'Confirms you and the person citing it are on the same edition' }
				],
				[
					{ th: 'ประเภท', en: 'Series' },
					{ th: 'ตัวบทกฎหมาย ประกาศทั่วไป หรือทะเบียนฐานันดร', en: 'Statutory text, a general notice, or the register of ranks and honours' },
					{ th: 'กรองผลลัพธ์ให้เหลือเฉพาะกลุ่มที่ต้องการ', en: 'Filters a broad result list down to the family you want' }
				],
				[
					{ th: 'หน้า', en: 'Page' },
					{ th: 'ตำแหน่งที่เรื่องนั้นเริ่มต้นในฉบับ', en: 'Where the item begins inside the issue' },
					{ th: 'เปิดตรงจุดเมื่อไฟล์รวมหลายเรื่องไว้', en: 'Takes you straight to the item when one file holds several' }
				],
				[
					{ th: 'วันที่ประกาศ', en: 'Date of publication' },
					{ th: 'วันที่เอกสารเผยแพร่อย่างเป็นทางการ', en: 'The day the document was officially published' },
					{ th: 'ตัวกรองที่ได้ผลที่สุดเมื่อจำชื่อไม่แม่น', en: 'The most effective filter when your memory of the title is fuzzy' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'วินัยการตรวจสอบก่อนนำไปใช้', en: 'Verification discipline before you rely on it' }
		},
		{
			type: 'ol',
			items: [
				{
					th: 'ตรวจวันที่ก่อน ทั้งวันประกาศ และวันที่ตัวบทกำหนดให้เริ่มใช้บังคับ',
					en: 'Check the dates first — both the date of publication and the commencement date the text sets for itself.'
				},
				{
					th: 'ค้นต่อว่ามีฉบับแก้ไขเพิ่มเติมตามมาหรือไม่ อย่าหยุดที่ฉบับแรก',
					en: 'Search on for later amendments. Never stop at the first document you find.'
				},
				{
					th: 'ยึดไฟล์ PDF ต้นฉบับเป็นหลัก ไม่ใช่ข้อความที่คัดลอกไปวางบนเว็บอื่น',
					en: 'Treat the Gazette PDF as the master copy, not text pasted onto somebody else’s page.'
				},
				{
					th: 'ถ้าจะอ้างอิง ให้อ้างจากไฟล์ที่คุณเปิดอ่านเอง ไม่ใช่จากที่คนอื่นอ้างต่อกันมา',
					en: 'If you are going to cite it, cite the file you opened yourself — not a citation you inherited.'
				}
			]
		},
		{
			type: 'p',
			text: {
				th: 'เว็บไซต์รวบรวมกฎหมายหลายแห่งอ่านสบายกว่าไฟล์ PDF อยู่มาก แต่ข้อความบนหน้าเว็บเหล่านั้นคือสำเนาที่มีคนพิมพ์หรือดึงมาวางอีกทอดหนึ่ง จึงตกหล่นบางวรรค ถูกย่อโดยไม่บอก หรือค้างอยู่ที่ฉบับก่อนแก้ไขได้ ใช้ช่วยอ่านและช่วยค้นได้เต็มที่ แต่เมื่อต้องตัดสินใจหรืออ้างอิง ให้กลับไปเทียบกับไฟล์ต้นฉบับ',
				en: 'Plenty of legal aggregator sites are far kinder to read than a PDF. But the text there is a copy someone keyed in or scraped, so it can lose a clause, be quietly abridged, or sit at a version from before the last amendment. Lean on them for reading and finding — then, at the point where you decide or cite something, compare against the original file.'
			}
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'บทสรุปคือแผนที่ ไม่ใช่ปลายทาง', en: 'A summary is a map, not the destination' },
			text: {
				th: 'บทความจากสำนักงานกฎหมายและรายงานข่าวมีค่ามากในขั้นที่คุณกำลังหาว่าควรเปิดเอกสารฉบับไหน หลายชิ้นให้ชื่อเต็มและวันที่มาครบจนค้นต่อได้ทันที แต่งานเหล่านั้นไม่ได้ผูกพันใคร เมื่อคำถามคือกฎเขียนไว้ว่าอย่างไรกันแน่ คำตอบอยู่ในตัวบท ไม่ใช่ในคำอธิบายของตัวบท',
				en: 'Firm briefings and news reports earn their place at the stage where you are working out which document to open, and many hand you the full title and date outright. But they bind nobody. When the question is what the rule actually says, the answer is in the text, not in anyone’s account of the text.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ThaiGov.co อยู่ตรงไหนในเรื่องนี้', en: 'Where ThaiGov.co fits in' }
		},
		{
			type: 'p',
			text: {
				th: 'ThaiGov.co เป็นเว็บไซต์รวบรวมบริการออนไลน์ของภาครัฐที่จัดทำขึ้นอย่างอิสระ ไม่ได้เป็นส่วนหนึ่งของหน่วยงานใด และไม่ได้เก็บสำเนาตัวบทกฎหมายไว้เอง หน้านี้อธิบายวิธีค้นและวิธีตรวจสอบ แล้วส่งคุณไปอ่านฉบับเต็มจากต้นทางเอง เพราะเรื่องแบบนี้ไม่ควรจบที่การเชื่อคำบอกเล่าของใคร รวมถึงของเราด้วย',
				en: 'ThaiGov.co is an independently built directory of Thai government online services. It is not part of any agency, and it keeps no copy of any statutory text. This page explains how to search and how to verify, then sends you to the source to read the document yourself — because a question like this should never end with taking anyone’s word for it, ours included.'
			}
		}
	],
	faq: [
		{
			q: {
				th: 'บทสรุปจากสำนักงานกฎหมายหรือข่าว ใช้อ้างอิงแทนตัวบทได้ไหม',
				en: 'Can I rely on a law-firm briefing or a news report instead of the text?'
			},
			a: {
				th: 'ใช้เป็นจุดตั้งต้นได้ดีมาก แต่ไม่ควรใช้เป็นข้อยุติ บทสรุปเขียนเพื่อผู้อ่านกลุ่มหนึ่งในเวลาหนึ่ง จึงตัดข้อยกเว้นและนิยามยาว ๆ ออกเป็นปกติ และแทบไม่มีใครกลับมาแก้เมื่อกฎหมายเปลี่ยน ให้ใช้มันเพื่อให้ได้ชื่อเต็มและวันที่ แล้วเปิดต้นฉบับอ่านเองก่อนตัดสินใจ',
				en: 'As a starting point, absolutely; as the last word, no. Summaries are written for a particular readership at a particular moment, so they cut the exceptions and the long definitions, and almost nobody revises them when the law changes. Take the full title and date from them, then open the source yourself before deciding anything.'
			}
		},
		{
			q: {
				th: 'ไม่มีเลขเล่มและตอนที่ จะค้นเจอไหม',
				en: 'I have no volume or issue number — can I still find it?'
			},
			a: {
				th: 'ได้ เลขเล่มและตอนที่ทำให้เร็วและแม่นขึ้น แต่ไม่จำเป็น ชื่อเรื่องคร่าว ๆ กับช่วงเวลาที่เป็นข่าวก็มักพอ ให้ค้นด้วยคำเฉพาะสั้น ๆ แล้วจำกัดช่วงวันที่ให้แคบลงทีละขั้น เมื่อเจอแล้ว เลขเล่มและตอนที่จะอยู่บนหัวเอกสารให้จดไว้ใช้ครั้งต่อไป',
				en: 'Yes. Those numbers make the search faster and sharper, but a rough title plus a sense of when the matter was in the news is usually enough. Search a short distinctive phrase and tighten the date range step by step. Once you have the document, the volume and issue are printed in the header, ready to note for next time.'
			}
		},
		{
			q: {
				th: 'จะรู้ได้อย่างไรว่าฉบับที่อ่านอยู่ยังไม่ถูกแก้ไข',
				en: 'How do I know the version I am reading has not been amended?'
			},
			a: {
				th: 'ตัวไฟล์เดิมจะไม่บอกคุณ เพราะการแก้ไขแต่ละครั้งประกาศเป็นเอกสารคนละฉบับคนละวัน จึงต้องค้นด้วยชื่อเดิมอีกครั้งว่ามีฉบับแก้ไขตามมาหรือไม่ และเว็บไซต์ไม่ได้รวมทุกฉบับเป็นตัวบทเดียวให้ หากมีผลต่อการตัดสินใจสำคัญ การให้ผู้ประกอบวิชาชีพกฎหมายตรวจอีกชั้นคุ้มค่าเสมอ',
				en: 'The original file will not tell you, because each amendment is published as a separate document on its own date. Search the same title again to see what followed it, and bear in mind that the site does not consolidate a text for you. Where the answer drives a significant decision, having a legal professional check it is worth the cost.'
			}
		},
		{
			q: {
				th: 'ค้นชื่อกฎหมายในเครื่องมือค้นหาแล้วไม่เจอไฟล์ต้นฉบับ ผิดปกติไหม',
				en: 'A web search never turns up the original file. Is that normal?'
			},
			a: {
				th: 'ไม่ผิดปกติ เว็บไซต์ราชกิจจานุเบกษาไม่ได้ถูกจัดทำดัชนีอย่างครบถ้วน สิ่งที่ขึ้นมาก่อนจึงเป็นข่าวและบทความที่คัดลอกต่อกันมา หลายคนจึงลงเอยด้วยการอ่านฉบับย่อโดยไม่รู้ตัว ทางออกคือเข้าเว็บไซต์ทางการเอง แล้วค้นจากในระบบนั้น',
				en: 'Entirely normal. The Gazette site is not reliably indexed, so news pieces and articles copied from one another rank ahead of it — which is how so many people end up reading an abridgement without realising. The way through is to open the official site yourself and search from inside it.'
			}
		},
		{
			q: {
				th: 'ต้องเสียค่าใช้จ่ายหรือสมัครสมาชิกไหม',
				en: 'Is there a fee, or do I need an account?'
			},
			a: {
				th: 'การค้นหาและเปิดอ่านเอกสารที่ประกาศแล้วบนเว็บไซต์ทางการไม่มีค่าใช้จ่าย และเป็นไฟล์ PDF ที่ดาวน์โหลดเก็บไว้ได้ หากพบบริการที่เก็บเงินเพื่อดูเอกสารเหล่านี้ สิ่งที่คุณจ่ายคือความสะดวก ไม่ใช่เอกสารที่คนอื่นเข้าไม่ถึง',
				en: 'Searching and opening published documents on the official site is free, and they come as PDFs you can download and keep. If you meet a service charging to view them, what you are buying is convenience — not access to anything other people cannot reach.'
			}
		},
		{
			q: {
				th: 'เปิดไฟล์ PDF แล้วค้นข้อความข้างในไม่ได้ ทำอย่างไร',
				en: 'I cannot search inside the PDF. What now?'
			},
			a: {
				th: 'เอกสารบางฉบับ โดยเฉพาะฉบับเก่า เป็นภาพสแกนของหน้ากระดาษ จึงไม่มีชั้นข้อความให้ค้นหา ให้ใช้เลขหน้าจากการอ้างอิงเปิดไปยังตำแหน่งที่ต้องการแทน หรือใช้โปรแกรมแปลงภาพเป็นข้อความช่วยอ่าน แต่ถ้าจะคัดลอกถ้อยคำไปอ้างอิง ให้ทานกับหน้าต้นฉบับด้วยตาอีกครั้ง',
				en: 'Some documents, older ones especially, are scans of the printed page and carry no text layer to search. Use the page number from the citation to jump to the right spot, or run it through optical character recognition to help you read. If you are copying wording to quote, check it against the page by eye.'
			}
		}
	],
	updated: '2026-08-28',
	minutes: 6
};
