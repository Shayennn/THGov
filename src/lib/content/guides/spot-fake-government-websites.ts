import type { Guide } from '../types';

export const guide: Guide = {
	slug: 'spot-fake-government-websites',
	title: {
		th: 'วิธีดูว่าเว็บไซต์ราชการที่คุณเปิดอยู่ ของจริงหรือของปลอม',
		en: 'How to Tell a Real Thai Government Website From a Fake'
	},
	deck: {
		th: 'มิจฉาชีพลอกหน้าเว็บให้เหมือนของจริงได้ในไม่กี่ชั่วโมง แต่ลอกชื่อโดเมนไม่ได้ — นี่คือวิธีดูให้ออกภายในสิบวินาที ก่อนกรอกเลขบัตรประชาชนหรือกดจ่ายเงิน',
		en: 'A scammer can clone a government page in an afternoon, but cannot clone its address. Here is how to check in ten seconds — before you type your ID number or pay.'
	},
	summary: {
		th: 'เว็บราชการไทยของจริงเกือบทั้งหมดลงท้ายด้วย .go.th อ่านชื่อโดเมนให้ถูกวิธี รู้ทันลิงก์ปลอมใน SMS และไลน์ และต้องรีบทำอะไรบ้างถ้าเผลอกรอกข้อมูลไปแล้ว',
		en: 'Genuine Thai government sites end in .go.th. Learn to read a domain properly, spot fake links in SMS and LINE, and act fast if you have already handed over details.'
	},
	keywords: {
		th: [
			'เว็บไซต์ราชการปลอม',
			'วิธีดูเว็บปลอม',
			'เช็คว่าเว็บนี้ของจริงไหม',
			'go.th คืออะไร',
			'ลิงก์ปลอมใน sms',
			'มิจฉาชีพแอบอ้างหน่วยงานราชการ',
			'เผลอกรอกข้อมูลในเว็บปลอม',
			'กดลิงก์ปลอมไปแล้วทำยังไง',
			'ตรวจสอบชื่อโดเมนเว็บไซต์',
			'มีกุญแจ https ปลอดภัยจริงไหม',
			'เว็บหลอกให้โอนเงินค่าปรับ',
			'ลิงก์ในไลน์ กดดีไหม',
			'ขอ otp อ้างเป็นเจ้าหน้าที่',
			'เว็บราชการตัวจริง ดูตรงไหน'
		],
		en: [
			'fake Thai government website',
			'verify go.th domain',
			'is this Thai government site official',
			'Thai government phishing SMS',
			'how to read a URL safely',
			'padlock does not mean legitimate',
			'entered details on a fake site'
		]
	},
	services: ['mea-eservice', 'dbd-datawarehouse'],
	steps: [
		{
			title: { th: 'ยังไม่ต้องกรอกอะไร ดูแถบที่อยู่ก่อน', en: 'Enter nothing yet — read the address bar' },
			text: {
				th: 'ก่อนพิมพ์เลขบัตรประชาชน เบอร์โทร หรือข้อมูลบัตรใด ๆ ให้เลื่อนสายตาขึ้นไปที่แถบที่อยู่ของเบราว์เซอร์ก่อน บนมือถือแถบนี้มักถูกย่อจนเห็นไม่ครบ ให้แตะหนึ่งครั้งเพื่อดูให้เต็ม สิบวินาทีนี้คือด่านที่ได้ผลที่สุด',
				en: 'Before you type an ID number, a phone number or any card details, move your eyes to the browser’s address bar. On a phone it is usually shortened, so tap it once to see the whole thing. These ten seconds are the most effective check you will make.'
			}
		},
		{
			title: { th: 'หาสแลชแรก แล้วอ่านย้อนกลับ', en: 'Find the first slash, then read backwards' },
			text: {
				th: 'ชื่อโดเมนจริงคือส่วนที่อยู่ติดสแลชอันแรก ไม่ใช่คำแรกที่คุณเห็น ที่อยู่แบบ rd.go.th.secure-login.xyz/… ไม่ใช่เว็บราชการ เพราะโดเมนจริงคือ secure-login.xyz ส่วน rd.go.th ถูกวางไว้ข้างหน้าให้คุณอ่านผ่าน ๆ แล้วสบายใจ กลลวงแบบนี้พบบ่อยมาก',
				en: 'The real domain is the part sitting immediately before the first single slash — not the first words you happen to see. An address shaped like rd.go.th.secure-login.xyz/… is not a government site: its real domain is secure-login.xyz, and “rd.go.th” was pasted in front so a quick glance would reassure you. This is the most common trick of all.'
			}
		},
		{
			title: { th: 'ดูว่าท้ายโดเมนเป็น .go.th หรือไม่', en: 'Check what that domain ends in' },
			text: {
				th: 'เมื่อจับโดเมนจริงได้แล้วให้อ่านตัวท้าย หน่วยงานราชการไทยเกือบทั้งหมดอยู่บน .go.th ส่วนรัฐวิสาหกิจและองค์การมหาชนบางแห่งใช้ .or.th หรือ .co.th ถ้าหน้านั้นอ้างเป็นกรมหรือกระทรวงแต่ลงท้ายด้วย .com หรือ .xyz ให้ถือว่าไม่ใช่ไว้ก่อน',
				en: 'Once you have isolated the real domain, read its ending. Almost every Thai government body sits on .go.th, while some state enterprises and public organisations use .or.th or .co.th. If the page claims to be a department or a ministry but ends in .com or .xyz, treat it as fake until proven otherwise.'
			}
		},
		{
			title: { th: 'เข้าเว็บด้วยตัวเอง ไม่ใช่ตามลิงก์ที่ส่งมา', en: 'Arrive under your own steam' },
			text: {
				th: 'ถ้าเรื่องนี้มาถึงคุณทาง SMS อีเมล หรือไลน์ ให้พักข้อความนั้นไว้ก่อน แล้วเปิดเว็บของหน่วยงานด้วยวิธีที่คุณควบคุมเอง คือพิมพ์ที่อยู่เอง เปิดบุ๊กมาร์ก หรือใช้แอปทางการที่ติดตั้งไว้แล้ว เรื่องจริงจะยังรออยู่เมื่อคุณเข้าไปเอง',
				en: 'If the matter reached you by SMS, email or LINE, set that message aside and open the agency’s site in a way you control: type the address, use a bookmark, or open the official app already on your phone. Anything genuine will still be waiting when you get there yourself.'
			}
		},
		{
			title: { th: 'เลื่อนผ่านผลค้นหาที่เป็นโฆษณา', en: 'Scroll past the sponsored results' },
			text: {
				th: 'ผลลัพธ์อันแรกในเสิร์ชเอนจินไม่ได้แปลว่าเป็นของจริง เพราะมิจฉาชีพซื้อโฆษณาบนคำค้นที่ฟังดูเป็นทางการได้เหมือนกัน ให้มองหาป้ายเล็ก ๆ ที่บอกว่าเป็นโฆษณา แล้วเลื่อนผ่าน ค่อยอ่านโดเมนของผลลัพธ์ที่เหลือ',
				en: 'The first result is not automatically the real one — scammers buy ads against official-sounding terms too. Look for the small label marking a result as an ad, scroll past it, then read the domains of whatever remains.'
			}
		},
		{
			title: { th: 'ถามว่าหน้านี้กำลังขออะไรจากคุณ', en: 'Ask what the page is asking of you' },
			text: {
				th: 'มีคำขอบางอย่างที่หน่วยงานรัฐไม่ทำ ไม่ว่าหน้าเว็บจะดูดีแค่ไหน คือขอรหัส OTP ขอรหัสผ่าน ขอเลขบัตรเครดิตเต็มใบ หรือเร่งให้จ่ายเดี๋ยวนี้เพื่อไม่ให้ถูกปรับ ถ้าเจอข้อใดข้อหนึ่ง ให้หยุดตรงนั้น ไม่ต้องอธิบายตัวเอง',
				en: 'Some requests no Thai agency makes, however polished the page: an OTP code, your password, a full card number, or immediate payment to avoid a fine. If you meet any of them, stop there. You owe no explanation to whoever is on the other end.'
			}
		},
		{
			title: { th: 'ถ้ากรอกไปแล้ว รีบทำสามอย่างนี้', en: 'Already entered something? Three things, now' },
			text: {
				th: 'อย่างแรก ติดต่อธนาคารทันทีผ่านเบอร์บนบัตรหรือช่องทางในแอปธนาคารของคุณเอง เพื่ออายัดบัตรและระงับรายการที่น่าสงสัย อย่างที่สอง เปลี่ยนรหัสผ่านทุกที่ที่ใช้ซ้ำกัน เริ่มจากอีเมลหลักและแอปธนาคาร อย่างที่สาม เก็บภาพหน้าจอและที่อยู่เว็บไว้ แล้วแจ้งความ ความเร็วสำคัญกว่าความอาย',
				en: 'First, contact your bank at once — using the number on your card or the help channel inside your own banking app — and ask them to freeze the card and hold anything suspicious. Second, change every password you reused elsewhere, starting with your main email and your banking app. Third, keep screenshots and the full address, then file a police report. Speed matters more than embarrassment.'
			}
		}
	],
	body: [
		{
			type: 'h2',
			text: { th: 'หน้าเว็บที่เหมือนเป๊ะ ไม่ได้แปลว่าเป็นของจริง', en: 'A page that looks right proves nothing' }
		},
		{
			type: 'p',
			text: {
				th: 'การลอกหน้าเว็บของหน่วยงานรัฐไม่ใช่เรื่องยาก ทุกอย่างที่คุณเห็นบนหน้าจอถูกส่งมาที่เครื่องของคุณอยู่แล้ว ใครคัดลอกไปวางบนเว็บตัวเองก็ได้หน้าตาเหมือนกันแทบทุกจุด สิ่งเดียวที่ลอกตามไม่ได้คือที่อยู่ของเว็บ เพราะชื่อโดเมนหนึ่งชื่อมีเจ้าของได้รายเดียวในโลก การตรวจสอบจึงต้องเริ่มจากที่อยู่ ไม่ใช่จากหน้าตา',
				en: 'Cloning a government page is not hard. Everything you see on screen has already been sent to your device, and anyone who copies it onto their own site ends up with a near-identical page. The one thing they cannot copy is the address, because a domain name has exactly one owner in the world. A real check starts there, not with the appearance.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมท้ายชื่อโดเมนถึงเป็นสัญญาณที่แข็งแรงที่สุด', en: 'Why the domain ending carries the most weight' }
		},
		{
			type: 'p',
			text: {
				th: 'โดเมนที่ลงท้ายด้วย .go.th ไม่ได้เปิดให้ใครก็ได้จดทะเบียน ผู้ขอต้องเป็นหน่วยงานของรัฐและต้องมีเอกสารมายืนยัน ต่างจากโดเมนสากลอย่าง .com หรือ .xyz ที่จ่ายเงินไม่กี่บาทก็ได้ชื่อมาในไม่กี่นาที ข้อจำกัดตรงนี้เองที่ทำให้ท้ายโดเมนน่าเชื่อถือกว่าทุกอย่างบนหน้าเว็บรวมกัน',
				en: 'A .go.th domain is not open to just anyone: the applicant has to be a state body and has to produce documentation from it. A global domain such as .com or .xyz costs pocket change and is issued within minutes, with nobody asking who you are. That restriction is why a domain ending is worth more than everything printed on the page put together.'
			}
		},
		{
			type: 'ul',
			items: [
				{
					th: '.go.th — หน่วยงานราชการไทย พบบ่อยที่สุดและน่าเชื่อถือที่สุด',
					en: '.go.th — Thai government bodies; the most common and most trustworthy group.'
				},
				{
					th: '.or.th — รัฐวิสาหกิจ องค์การมหาชน มูลนิธิและสมาคม เช่น การไฟฟ้านครหลวงใช้ mea.or.th',
					en: '.or.th — state enterprises, public organisations, foundations and associations; the Metropolitan Electricity Authority uses mea.or.th.'
				},
				{
					th: '.co.th — บริษัทที่จดทะเบียนในไทย รวมถึงรัฐวิสาหกิจบางแห่ง',
					en: '.co.th — companies registered in Thailand, including some state enterprises.'
				},
				{
					th: 'ท้ายโดเมนอื่นอย่าง .com .net .xyz — ใครก็จดได้ทั่วโลก จึงไม่บอกอะไรเกี่ยวกับเจ้าของเลย',
					en: 'Other endings — .com, .net, .xyz — can be registered by anyone anywhere, so they tell you nothing about who owns them.'
				}
			]
		},
		{
			type: 'callout',
			tone: 'warn',
			title: { th: 'กุญแจกับ https ไม่ใช่เครื่องหมายรับรอง', en: 'The padlock is not a badge of legitimacy' },
			text: {
				th: 'หลายคนถูกสอนมาว่าเห็นรูปกุญแจแล้วปลอดภัย ซึ่งไม่จริง กุญแจและตัวอักษร https บอกเพียงว่าข้อมูลระหว่างเครื่องของคุณกับปลายทางถูกเข้ารหัสไว้ แต่ไม่ได้บอกว่าปลายทางนั้นคือใคร ทุกวันนี้ใบรับรองพื้นฐานขอได้ฟรีและออกให้อัตโนมัติ เว็บหลอกลวงจึงมีกุญแจครบเหมือนกัน กุญแจบอกแค่ว่าข้อมูลเดินทางอย่างปลอดภัย ไม่ได้บอกว่าปลายทางเป็นใคร',
				en: 'Most of us were taught that a padlock means safe. It does not. The padlock and the https tell you only that traffic between your device and the far end is encrypted — they say nothing about who that far end is. Basic certificates are now free and issued automatically, so fraudulent sites carry the padlock too. It guarantees your data arrives safely in someone’s hands; it never tells you whose.'
			}
		},
		{
			type: 'h2',
			text: { th: 'สัญญาณน่าเชื่อถือ กับ สัญญาณที่ควรถอย', en: 'Reassuring signals, and signals to back away from' }
		},
		{
			type: 'table',
			caption: {
				th: 'อ่านสัญญาณเรียงตามน้ำหนักความน่าเชื่อถือ จากมากไปหาน้อย',
				en: 'Signals in order of how much weight each deserves'
			},
			head: [
				{ th: 'สิ่งที่ดู', en: 'What to look at' },
				{ th: 'แบบที่น่าเชื่อถือ', en: 'Reassuring' },
				{ th: 'แบบที่ควรถอย', en: 'Back away' }
			],
			rows: [
				[
					{ th: 'ท้ายชื่อโดเมน', en: 'The domain ending' },
					{ th: '.go.th หรือ .or.th ของหน่วยงานที่มีอยู่จริง', en: '.go.th or .or.th of a body that genuinely exists' },
					{ th: 'ลงท้ายด้วย .com .xyz หรือคำแปลกที่ไม่เคยเห็น', en: 'Ends in .com, .xyz or something unfamiliar' }
				],
				[
					{ th: 'ตำแหน่งของชื่อหน่วยงาน', en: 'Where the agency name sits' },
					{ th: 'อยู่ติดสแลชแรก เช่น dbd.go.th แล้วตามด้วยสแลช', en: 'Immediately before the first slash — dbd.go.th/' },
					{ th: 'ชื่อหน่วยงานอยู่ต้น ๆ แต่โดเมนจริงเป็นชื่ออื่น', en: 'The name appears early; the real domain is something else' }
				],
				[
					{ th: 'วิธีที่คุณมาถึงหน้านี้', en: 'How you got here' },
					{ th: 'พิมพ์ที่อยู่เอง เปิดบุ๊กมาร์ก หรือเข้าจากแอปทางการ', en: 'Typed it, opened a bookmark, or used the official app' },
					{ th: 'กดลิงก์จาก SMS ไลน์ อีเมล หรือโฆษณาในผลค้นหา', en: 'Tapped a link in SMS, LINE, email or a search ad' }
				],
				[
					{ th: 'ปลายทางของเงิน', en: 'Where the money goes' },
					{ th: 'ช่องทางชำระเงินในระบบของหน่วยงานเอง', en: 'A payment channel inside the agency’s own system' },
					{ th: 'ให้โอนเข้าบัญชีชื่อบุคคลธรรมดา', en: 'A transfer into an account in a personal name' }
				]
			]
		},
		{
			type: 'h2',
			text: { th: 'ลิงก์ที่ส่งมาหาคุณ อันตรายกว่าลิงก์ที่คุณหาเอง', en: 'The link that comes to you is the dangerous one' }
		},
		{
			type: 'p',
			text: {
				th: 'เกือบทุกเรื่องที่จบไม่สวยเริ่มจากข้อความที่วิ่งเข้ามาหาเราเอง ทั้ง SMS ที่อ้างว่าพัสดุตกค้างหรือมีเงินคืนภาษีรออยู่ ข้อความในไลน์ที่ส่งต่อกันมาด้วยความหวังดี และอีเมลที่ลงท้ายว่าด่วนที่สุด จุดร่วมคือมันมาถึงตอนที่คุณกำลังรีบ และยื่นลิงก์ที่กดง่ายกว่าการเปิดเว็บเอง ข้อความที่คนใกล้ตัวส่งต่อมาก็ไม่ได้ปลอดภัยขึ้น เพราะคนส่งเองก็ไม่ได้ตรวจ ถ้าที่บ้านมีผู้สูงอายุ ให้ช่วยกันบันทึกเว็บที่ใช้บ่อยไว้เป็นบุ๊กมาร์ก จะได้มีทางเข้าที่ปลอดภัยรออยู่ก่อน',
				en: 'Almost every bad outcome begins with a message that came looking for you: an SMS about a parcel held at the depot or a tax refund waiting, a LINE forward passed around the family group with the best of intentions, an email signed off as most urgent. What they share is timing — they arrive when you are busy, and they offer a link that is easier to tap than opening the site yourself. A forward from someone close to you is no safer, because they almost certainly did not check either. If there is an older relative in the house, bookmark the sites they use, so a safe way in already exists before the alarming message arrives.'
			}
		},
		{
			type: 'callout',
			tone: 'danger',
			title: { th: 'กฎข้อเดียวที่ควรจำให้ขึ้นใจ', en: 'The one rule worth memorising' },
			text: {
				th: 'หน่วยงานรัฐไม่ขอรหัส OTP ไม่ขอรหัสผ่าน และไม่ขอเลขบัตรเครดิตเต็มใบ ไม่ว่าทางโทรศัพท์ ทางแชท หรือทางข้อความ และไม่มีหน่วยงานไหนบังคับให้จ่ายเงินเดี๋ยวนี้เพื่อแลกกับการไม่ถูกปรับ ถ้ามีใครทำแบบนี้ ไม่ต้องคิดต่อว่าเขาเป็นใคร วางสายหรือปิดหน้าต่างได้เลย',
				en: 'A Thai government body will not ask for an OTP, a password or a full card number — not by phone, not by chat, not by message — and none of them will press you to pay this minute to escape a fine or a prosecution. When someone does, you do not need to work out who they are. Hang up, or close the window.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ถ้าเผลอกรอกข้อมูลไปแล้ว', en: 'If you have already handed something over' }
		},
		{
			type: 'p',
			text: {
				th: 'สิ่งที่ทำให้ความเสียหายลุกลามมักไม่ใช่ความไม่รู้ แต่เป็นเวลาที่หายไปกับความรู้สึกผิดและการคิดว่าจะบอกใครดี ให้แยกก่อนว่าสิ่งที่หลุดออกไปคืออะไร ถ้าเป็นข้อมูลบัตรหรือรหัส OTP คือเรื่องที่ต้องจัดการภายในไม่กี่นาที ถ้าเป็นชื่อหรือเลขบัตรประชาชน เงินอาจยังไม่หาย แต่การหลอกรอบถัดไปจะรู้ข้อมูลคุณมากขึ้น',
				en: 'What usually makes the damage worse is not ignorance but the time lost to embarrassment and to wondering who to tell. Start by separating what actually left your hands. Card details or an OTP are a matter of minutes. A name or an ID number may cost you nothing today, but expect the next approach to know more about you, and so to sound more convincing.'
			}
		},
		{
			type: 'h2',
			text: { th: 'ทำไมหน้านี้ถึงมีอยู่', en: 'Why this page exists' }
		},
		{
			type: 'p',
			text: {
				th: 'THGov เป็นเว็บรวมลิงก์บริการออนไลน์ของราชการไทยที่จัดทำขึ้นอย่างอิสระ ไม่ได้สังกัดหน่วยงานใด เราไม่รับข้อมูลส่วนบุคคลและไม่รับชำระเงินแทนหน่วยงานใดทั้งสิ้น สิ่งที่หน้านี้ตั้งใจให้คือทักษะการอ่านที่อยู่เว็บ ซึ่งใช้ได้กับทุกหน้าที่คุณจะเจอต่อจากนี้',
				en: 'THGov is an independently made directory of Thai government online services. We are not part of any agency; we never collect personal data and never take payments for anyone. What this page is really for is the habit of reading an address — a skill that travels with you to every page you meet from here on, not only the ones we happen to list.'
			}
		}
	],
	faq: [
		{
			q: { th: 'เว็บที่ลงท้ายด้วย .or.th หรือ .co.th ปลอมหรือเปล่า', en: 'Is a site ending in .or.th or .co.th a fake?' },
			a: {
				th: 'ไม่จำเป็น รัฐวิสาหกิจและองค์การมหาชนใช้ .or.th หรือ .co.th มานานแล้ว เช่น การไฟฟ้านครหลวงใช้ mea.or.th วิธีอ่านที่ถูกคือดูทั้งชื่อ ไม่ใช่ดูแค่ตัวท้าย ถ้าชื่อองค์กรในโดเมนตรงกับหน่วยงานที่คุณตั้งใจติดต่อ และคุณเข้ามาถึงหน้านั้นด้วยตัวเอง ก็ถือว่าสอดคล้องกัน',
				en: 'Not necessarily. State enterprises, public organisations and some other bodies have used .or.th or .co.th for years — the Metropolitan Electricity Authority sits on mea.or.th. Read the whole domain rather than just the ending: if the organisation named in it matches the body you meant to contact, and you reached the page under your own steam, the two agree.'
			}
		},
		{
			q: { th: 'กดลิงก์เข้าไปแล้ว แต่ยังไม่ได้กรอกอะไร อันตรายไหม', en: 'I tapped the link but entered nothing — am I in trouble?' },
			a: {
				th: 'ความเสี่ยงต่ำกว่าการกรอกข้อมูลหรือติดตั้งอะไรลงเครื่องมาก ให้ปิดหน้านั้น ไม่กรอกอะไร ไม่กดอนุญาตสิทธิ์ที่เด้งขึ้นมา และไม่ติดตั้งไฟล์หรือแอปที่หน้านั้นเสนอให้ แต่ถ้าเผลอติดตั้งแอปจากนอกสโตร์ทางการ หรือให้สิทธิ์ควบคุมหน้าจอ ให้ตัดการเชื่อมต่อ ถอนการติดตั้ง แล้วตรวจบัญชีธนาคารทันที',
				en: 'The risk is far lower than entering details or installing something. Close the page, type nothing, grant no permission prompt that appears, and install no file or app it offers. If you did install an app from outside the official store, or granted it control of your screen, treat that seriously: disconnect, uninstall it, and check your bank accounts straight away.'
			}
		},
		{
			q: { th: 'แล้วแอปกับบัญชีไลน์ทางการ ตรวจอย่างไร', en: 'What about apps and official LINE accounts?' },
			a: {
				th: 'หลักคิดเดียวกัน คือเข้าถึงผ่านช่องทางที่คุณควบคุมเอง ดาวน์โหลดแอปจากสโตร์ทางการ แล้วดูว่าชื่อผู้พัฒนาเป็นหน่วยงานนั้นจริงหรือไม่ ส่วนบัญชีไลน์ให้ดูเครื่องหมายรับรอง และเลี่ยงการเพิ่มเพื่อนจากคิวอาร์โค้ดที่ส่งต่อกันมา ทางที่ปลอดภัยที่สุดคือเปิดเว็บทางการก่อน แล้วค่อยกดไปช่องทางอื่น',
				en: 'The same principle: reach them through a route you control. Download apps from your platform’s official store and check that the developer really is the agency. For LINE, look for the verified badge and avoid adding an account from a QR code that has been forwarded around. Safest of all is to open the official website first and follow its own links out to any other channel.'
			}
		},
		{
			q: { th: 'ตรวจแล้วยังไม่แน่ใจ ควรทำอย่างไรต่อ', en: 'I checked and I am still unsure — now what?' },
			a: {
				th: 'ให้ถือว่าความไม่แน่ใจคือคำตอบอยู่แล้วว่ายังไม่ควรกรอก จากนั้นยืนยันจากช่องทางที่คุณมีอยู่ในมือ เช่น โทรตามหมายเลขที่พิมพ์บนบิลหรือเอกสารทางการที่คุณถืออยู่ ไม่ใช่หมายเลขที่แนบมากับข้อความ เรื่องจริงจะไม่เสียหายเพราะคุณตรวจช้าไปหนึ่งวัน แต่เรื่องหลอกลวงมักพังทันทีเมื่อถูกตรวจสอบ',
				en: 'Treat the uncertainty as your answer: do not enter anything yet. Then confirm through a channel you already hold — call the number printed on your own bill or official paperwork rather than the one attached to the message. Anything genuine survives a day’s delay without harm; anything fraudulent tends to fall apart the moment it is checked.'
			}
		}
	],
	updated: '2026-08-28',
	minutes: 7
};
