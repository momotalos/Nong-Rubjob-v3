// ============ GEMINI API CONFIG ============
// API key is stored securely in Netlify env vars — never exposed in frontend code.
// Browser calls /api/chat (Netlify function) which forwards to Gemini with the key.
const GEMINI_MODEL = 'gemini-3.1-flash-lite-preview';
const GEMINI_FALLBACK = 'gemini-3.1-flash-lite-preview';

// ============ i18n TRANSLATIONS ============
const I18N = {
  en: {
    nav_chat: "Chat", nav_data: "Personal Data", nav_hr: "Org Dashboard",
    logout: "Logout",
    eyebrow: "MENTAL WELLNESS PLATFORM",
    hero_title: "Meet <em>N'Rub Job</em><br>Your quiet companion<br>at work",
    hero_lede: "MindHub helps employees manage stress and emotions through private AI conversations — while giving HR organization-level insights without breaking anyone's trust.",
    cta_start: "Get Started", cta_learn: "Learn more",
    hero_bubble: "Hi there! I'm <strong>N'Rub Job</strong>. How are you feeling today?",
    features_title: "Four ways MindHub <em>supports</em> you",
    feature_1_title: "Talk with N'Rub Job",
    feature_1_desc: "A private, judgment-free AI companion trained on clinical assessment frameworks (DSM-5, PHQ-9, GAD-7) to listen, reflect, and gently help you work through stress.",
    feature_2_title: "Privacy by Design",
    feature_2_desc: "Your conversations stay private. HR sees only aggregated clinical indicators — risk scores, symptom severity — never your actual messages.",
    feature_3_title: "Chat History",
    feature_3_desc: "Every conversation is saved securely to your device so you can pick up where you left off. Organize sessions, delete anytime.",
    feature_4_title: "Your Wellness Sanctuary",
    feature_4_desc: "A private garden that grows with every act of self-care. No streaks to break, no points to chase — just quiet evidence that you're taking care of yourself.",
    consent_title: "Before we begin",
    consent_sub: "Please review and agree to the following before using MindHub",
    consent_ai_title: "This is an AI, not a clinician",
    consent_ai_desc: "N'Rub Job is an AI companion trained on clinical assessment frameworks (DSM-5, PHQ-9, GAD-7, Perceived Stress Scale). It is <strong>not</strong> a licensed therapist or psychiatrist and cannot diagnose, prescribe medication, or replace professional care. For acute crises, it will direct you to emergency services (1323, 1669, Samaritans 02-713-6793).",
    consent_data_title: "What we collect from your conversations",
    consent_data_desc: "Our AI analyzes your messages to derive clinical-style indicators (anonymized aggregates only):",
    consent_data_item_1: "<strong>Risk level</strong> (1–3) based on symptom patterns",
    consent_data_item_2: "<strong>Primary emotion &amp; intensity</strong> (stress, anxiety, burnout, etc.)",
    consent_data_item_3: "<strong>Session phase</strong> (which stage of the conversation you're in)",
    consent_data_item_4: "<strong>Themes</strong> (work stress, relationships, sleep, etc.)",
    consent_privacy_title: "Your messages stay private",
    consent_privacy_desc: "Your actual conversation text is never shared with HR or your employer. Only anonymized, aggregated clinical indicators are used for organizational reporting. You can delete your data at any time.",
    consent_cancel: "Cancel",
    consent_agree: "Agree & Continue",
    login_title: "Welcome back",
    login_sub: "Sign in to continue your wellness journey",
    login_email: "Email",
    login_password: "Password",
    login_submit: "Sign In",
    login_error: "Invalid email or password",
    login_test_title: "🧪 Test credentials",
    login_test_emp: "Employee:",
    login_test_hr: "HR:",
    logout: "Logout",
    greeting_initial: "Hi, I'm N'Rub Job 💙\n\nI'm here as a quiet companion — whether you want to talk something through, vent, or just check in. No judgment, no pressure.\n\nHow are you feeling today?",
    chip_drained: "Drained from meetings", chip_burnout: "Feeling burned out",
    chip_pressure: "Manager pressure", chip_sleep: "Can't sleep",
    session_untitled: "New conversation",
    empty_sessions: "No conversations yet.\nStart chatting to save your first one.",
    confirm_delete: "Delete this conversation?",
    side_chat: "Talk with N'Rub Job",
    side_sanctuary: "Your Sanctuary",
    side_data: "Personal Data",
    sanctuary_title: "Your Sanctuary",
    sanctuary_sub: "A private space that grows with you · nothing is ever lost here",
    garden_title: "Your Wellness Garden",
    garden_sub: "Every act of self-care grows a plant. No failure states. No streaks to break.",
    garden_empty: "Your garden is waiting.<br>Chat with N'Rub Job or try a breathing exercise to plant your first seed.",
    plants: "plants", days_visited: "days visited", rare_blooms: "rare blooms",
    try_breathing: "Try a 1-minute breathing exercise",
    milestones_title: "Moonlight Milestones", milestones_sub: "Markers of depth, not frequency",
    vault_title: "Reflection Vault", vault_sub: "Insights N'Rub Job captured from your conversations",
    vault_empty: "No reflections yet. Start a conversation and insights will appear here.",
    m_new_moon_t: "New Moon", m_new_moon_d: "Your first conversation",
    m_first_light_t: "First Light", m_first_light_d: "Named 5 different feelings",
    m_half_moon_t: "Half Moon", m_half_moon_d: "Completed a breathing exercise",
    m_waxing_t: "Waxing Moon", m_waxing_d: "Noticed a pattern in yourself",
    m_full_moon_t: "Full Moon", m_full_moon_d: "30 days of showing up",
    m_aurora_t: "Aurora", m_aurora_d: "Reached deep reflection phase",
    breathe_ready: "Ready", breathe_inhale: "Breathe in…",
    breathe_exhale: "Breathe out…", breathe_hold: "Hold…",
    breathe_close: "Close", breathe_done: "Well done 💙",
    toast_grew: "Your garden grew",
    toast_plant: "A new plant appeared",
    toast_breathing: "Plant grown from breathing",
    toast_reflection: "Plant grown from reflection",
    toast_milestone: "New milestone unlocked",
    phase_label_1: "PHASE 1 · RAPPORT",
    phase_label_2: "PHASE 2 · INTAKE",
    phase_label_3: "PHASE 3 · SCREENING",
    phase_label_4: "PHASE 4 · MSE",
    phase_label_5: "PHASE 5 · INTEGRATION",
    phase_label_6: "PHASE 6 · FORMULATION",
    phase_label_7: "PHASE 7 · SUPPORT",
    mascot_tooltip: "Click to talk with me 💙",
    consent_company_title: "How your company uses this data",
    consent_company_desc: "Your employer sees <strong>only aggregated, anonymized</strong> organizational trends — never your raw messages or individual identity. Data is used to:",
    consent_company_item_1: "Identify organizational stress patterns (e.g., team-level burnout)",
    consent_company_item_2: "Inform workplace wellness policies and interventions",
    consent_company_item_3: "Connect you with EAP/professional support when risk is elevated",
    consent_rights_title: "Your rights (PDPA/GDPR)",
    consent_rights_desc: "You may access, export, or delete all your data at any time. You can withdraw consent and close your account without affecting your employment.",
    consent_crisis: "<strong>⚠ In crisis?</strong> If you are in immediate danger, call emergency services (1669) or Thailand Mental Health Hotline <strong>1323</strong>.",
    consent_chk_1_title: "I understand this is an AI and not a substitute for professional care",
    consent_chk_1_desc: "I will seek professional help for serious mental health concerns.",
    consent_chk_2_title: "I consent to clinical-style data collection from my conversations",
    consent_chk_2_desc: "Anonymized aggregates only — no raw messages leave my device.",
    consent_chk_3_title: "I consent to my company accessing anonymized organizational insights",
    consent_chk_3_desc: "For wellness planning and support — never my individual messages.",
    consent_data_item_3: "<strong>Clinical screening scores</strong> (mood, anxiety, stress, sleep, energy)",
    consent_data_item_4: "<strong>Topic themes</strong> (workload, management, relationships — no specifics)",
    consent_data_item_5: "<strong>Assessment phase</strong> (which clinical step we're in)",
    footer_powered: "Powered by Claude / Gemini · N'Rub Job listens first, advises second",
    nav_chat: "Chat", nav_data: "Personal Data", nav_hr: "Org Dashboard"
  },
  th: {
    nav_chat: "คุยกับน้องรับจบ", nav_data: "ข้อมูลส่วนตัว", nav_hr: "แดชบอร์ดองค์กร",
    logout: "ออกจากระบบ",
    eyebrow: "แพลตฟอร์มดูแลสุขภาพจิตในที่ทำงาน",
    hero_title: "พบกับ <em>น้องรับจบ</em><br>เพื่อนเงียบๆ<br>ในที่ทำงานของคุณ",
    hero_lede: "MindHub ช่วยให้พนักงานจัดการกับความเครียดและอารมณ์ผ่านการพูดคุยกับ AI แบบส่วนตัว พร้อมให้ข้อมูลเชิงลึกระดับองค์กรแก่ HR โดยไม่ละเมิดความไว้วางใจของใคร",
    cta_start: "เริ่มต้นใช้งาน", cta_learn: "ดูเพิ่มเติม",
    hero_bubble: "สวัสดีครับ! ผม<strong>น้องรับจบ</strong> วันนี้พี่รู้สึกยังไงบ้างครับ?",
    features_title: "สี่วิธีที่ MindHub <em>ช่วยเหลือ</em>คุณ",
    feature_1_title: "คุยกับน้องรับจบ",
    feature_1_desc: "AI คู่คิดส่วนตัว ไม่ตัดสิน ฝึกมาบนกรอบการประเมินทางคลินิก (DSM-5, PHQ-9, GAD-7) รับฟัง สะท้อน และช่วยคลี่คลายความเครียดอย่างอ่อนโยน",
    feature_2_title: "ความเป็นส่วนตัวตั้งแต่ออกแบบ",
    feature_2_desc: "บทสนทนาของคุณเป็นส่วนตัว HR เห็นเฉพาะตัวชี้วัดทางคลินิกแบบรวม ไม่เห็นข้อความจริง",
    feature_3_title: "ประวัติการสนทนา",
    feature_3_desc: "ทุกบทสนทนาบันทึกไว้อย่างปลอดภัย กลับมาต่อได้ทุกเวลา จัดระเบียบหรือลบได้เสมอ",
    feature_4_title: "สวนแห่งใจของคุณ",
    feature_4_desc: "สวนส่วนตัวที่เติบโตไปกับทุกการดูแลตัวเอง ไม่มี streak ไม่มีคะแนนต้องไล่ล่า แค่หลักฐานเงียบๆ ว่าคุณกำลังดูแลตัวเอง",
    consent_title: "ก่อนเริ่มต้น",
    consent_sub: "กรุณาอ่านและยอมรับเงื่อนไขต่อไปนี้ก่อนใช้งาน MindHub",
    consent_ai_title: "นี่คือ AI ไม่ใช่นักคลินิก",
    consent_ai_desc: "น้องรับจบเป็น AI ที่ฝึกบนกรอบการประเมินทางคลินิก (DSM-5, PHQ-9, GAD-7) <strong>ไม่ใช่</strong>นักบำบัดหรือจิตแพทย์ที่มีใบอนุญาต ไม่สามารถวินิจฉัย สั่งยา หรือแทนที่การดูแลจากผู้เชี่ยวชาญได้",
    consent_data_title: "สิ่งที่เราเก็บจากบทสนทนา",
    consent_data_desc: "AI วิเคราะห์ข้อความเพื่อสร้างตัวชี้วัดทางคลินิก (แบบรวมและไม่ระบุตัวตน):",
    consent_data_item_1: "<strong>ระดับความเสี่ยง</strong> (1–3) จากรูปแบบอาการ",
    consent_data_item_2: "<strong>อารมณ์หลัก &amp; ความเข้มข้น</strong> (เครียด วิตก หมดไฟ ฯลฯ)",
    consent_data_item_3: "<strong>เฟสการสนทนา</strong> (ขั้นตอนที่คุณอยู่)",
    consent_data_item_4: "<strong>ธีม</strong> (ความเครียดงาน ความสัมพันธ์ การนอน ฯลฯ)",
    consent_privacy_title: "ข้อความของคุณเป็นส่วนตัว",
    consent_privacy_desc: "ข้อความบทสนทนาจริงไม่ถูกแชร์กับ HR หรือนายจ้าง มีเฉพาะตัวชี้วัดแบบรวมที่ใช้ในรายงานองค์กร คุณลบข้อมูลได้ตลอดเวลา",
    consent_cancel: "ยกเลิก",
    consent_agree: "ยอมรับ & ดำเนินต่อ",
    login_title: "ยินดีต้อนรับกลับ",
    login_sub: "เข้าสู่ระบบเพื่อเดินทางต่อ",
    login_email: "อีเมล",
    login_password: "รหัสผ่าน",
    login_submit: "เข้าสู่ระบบ",
    login_error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    login_test_title: "🧪 ข้อมูลทดสอบ",
    login_test_emp: "พนักงาน:",
    login_test_hr: "HR:",
    greeting_initial: "สวัสดีครับ ผมน้องรับจบ 💙\n\nผมอยู่ตรงนี้ในฐานะเพื่อนเงียบๆ ของพี่ครับ ไม่ว่าพี่อยากจะเล่า ระบาย หรือแค่มาเช็คอิน ผมไม่ตัดสินและไม่กดดัน\n\nวันนี้พี่รู้สึกยังไงบ้างครับ?",
    chip_drained: "หมดพลังจากการประชุม", chip_burnout: "รู้สึกหมดไฟ",
    chip_pressure: "หัวหน้ากดดัน", chip_sleep: "นอนไม่หลับ",
    session_untitled: "การสนทนาใหม่",
    empty_sessions: "ยังไม่มีบทสนทนา\nเริ่มคุยเพื่อบันทึกครั้งแรก",
    confirm_delete: "ลบบทสนทนานี้?",
    side_chat: "คุยกับน้องรับจบ",
    side_sanctuary: "สวนของคุณ",
    side_data: "ข้อมูลส่วนตัว",
    sanctuary_title: "สวนส่วนตัวของคุณ",
    sanctuary_sub: "พื้นที่ส่วนตัวที่เติบโตไปพร้อมกับคุณ · ไม่มีอะไรสูญหายที่นี่",
    garden_title: "สวนแห่งใจของคุณ",
    garden_sub: "ทุกการดูแลตัวเองปลูกต้นไม้ 1 ต้น ไม่มี streak ไม่มีภาวะล้มเหลว",
    garden_empty: "สวนของคุณกำลังรอ<br>คุยกับน้องรับจบ หรือลองฝึกหายใจ เพื่อปลูกเมล็ดแรก",
    plants: "ต้น", days_visited: "วันที่มา", rare_blooms: "ดอกไม้หายาก",
    try_breathing: "ลองฝึกหายใจ 1 นาที",
    milestones_title: "เหตุการณ์สำคัญแสงจันทร์", milestones_sub: "สัญลักษณ์แห่งความลึก ไม่ใช่ความถี่",
    vault_title: "ห้องเก็บบทสะท้อนใจ", vault_sub: "ข้อคิดที่น้องรับจบจับได้จากบทสนทนาของคุณ",
    vault_empty: "ยังไม่มีบทสะท้อน เริ่มสนทนาแล้วข้อคิดจะปรากฏที่นี่",
    m_new_moon_t: "จันทร์ดับ", m_new_moon_d: "บทสนทนาแรกของคุณ",
    m_first_light_t: "แสงแรก", m_first_light_d: "บอกความรู้สึกได้ 5 แบบ",
    m_half_moon_t: "จันทร์ครึ่งดวง", m_half_moon_d: "ฝึกหายใจจบ 1 ครั้ง",
    m_waxing_t: "จันทร์ข้างขึ้น", m_waxing_d: "สังเกตรูปแบบของตัวเอง",
    m_full_moon_t: "จันทร์เต็มดวง", m_full_moon_d: "มาเยี่ยม 30 วัน",
    m_aurora_t: "แสงเหนือ", m_aurora_d: "เข้าถึงขั้นสะท้อนใจลึก",
    breathe_ready: "พร้อม", breathe_inhale: "หายใจเข้า…",
    breathe_exhale: "หายใจออก…", breathe_hold: "กลั้นไว้…",
    breathe_close: "ปิด", breathe_done: "เก่งมากครับ 💙",
    toast_grew: "สวนของคุณเติบโตขึ้น",
    toast_plant: "ต้นไม้ใหม่ปรากฏแล้ว",
    toast_breathing: "ต้นไม้งอกจากการฝึกหายใจ",
    toast_reflection: "ต้นไม้งอกจากการสะท้อนใจ",
    toast_milestone: "ปลดล็อก milestone ใหม่",
    phase_label_1: "เฟส 1 · สร้างความไว้ใจ",
    phase_label_2: "เฟส 2 · รับฟังปัญหา",
    phase_label_3: "เฟส 3 · ประเมินเบื้องต้น",
    phase_label_4: "เฟส 4 · สังเกตสภาวะจิตใจ",
    phase_label_5: "เฟส 5 · วิเคราะห์รวม",
    phase_label_6: "เฟส 6 · สรุปภาพรวม",
    phase_label_7: "เฟส 7 · ให้การสนับสนุน",
    mascot_tooltip: "คลิกเพื่อคุยกับผม 💙",
    consent_company_title: "บริษัทใช้ข้อมูลนี้อย่างไร",
    consent_company_desc: "นายจ้างของคุณเห็นเฉพาะ<strong>แนวโน้มระดับองค์กรที่รวมและไม่ระบุตัวตน</strong>เท่านั้น ไม่เห็นข้อความจริงหรือตัวตนส่วนบุคคล ข้อมูลใช้เพื่อ:",
    consent_company_item_1: "ระบุรูปแบบความเครียดขององค์กร (เช่น ภาวะหมดไฟระดับทีม)",
    consent_company_item_2: "กำหนดนโยบายและมาตรการดูแลสุขภาพในที่ทำงาน",
    consent_company_item_3: "เชื่อมต่อคุณกับการสนับสนุนจากผู้เชี่ยวชาญเมื่อมีความเสี่ยงสูง",
    consent_rights_title: "สิทธิ์ของคุณ (PDPA/GDPR)",
    consent_rights_desc: "คุณสามารถเข้าถึง ส่งออก หรือลบข้อมูลทั้งหมดได้ตลอดเวลา สามารถถอนความยินยอมและปิดบัญชีได้โดยไม่กระทบการจ้างงาน",
    consent_crisis: "<strong>⚠ วิกฤต?</strong> หากคุณอยู่ในอันตราย โทร 1669 หรือสายด่วนสุขภาพจิต <strong>1323</strong> ทันที",
    consent_chk_1_title: "ฉันเข้าใจว่านี่คือ AI และไม่ใช่ตัวแทนการดูแลจากผู้เชี่ยวชาญ",
    consent_chk_1_desc: "ฉันจะขอความช่วยเหลือจากผู้เชี่ยวชาญสำหรับปัญหาสุขภาพจิตที่ร้ายแรง",
    consent_chk_2_title: "ฉันยินยอมให้เก็บข้อมูลแบบคลินิกจากบทสนทนา",
    consent_chk_2_desc: "เฉพาะข้อมูลรวมที่ไม่ระบุตัวตน — ข้อความจริงไม่ออกจากอุปกรณ์ของฉัน",
    consent_chk_3_title: "ฉันยินยอมให้บริษัทเข้าถึงข้อมูลเชิงลึกระดับองค์กรที่ไม่ระบุตัวตน",
    consent_chk_3_desc: "สำหรับการวางแผนสวัสดิการ — ไม่ใช่ข้อความส่วนตัวของฉัน",
    consent_data_item_3: "<strong>คะแนนคัดกรองทางคลินิก</strong> (อารมณ์ ความวิตก ความเครียด การนอน พลังงาน)",
    consent_data_item_4: "<strong>ธีมหัวข้อ</strong> (ภาระงาน การจัดการ ความสัมพันธ์ — ไม่ระบุรายละเอียด)",
    consent_data_item_5: "<strong>ระยะการประเมิน</strong> (ขั้นตอนทางคลินิกที่กำลังดำเนินอยู่)",
    footer_powered: "Powered by Claude / Gemini · น้องรับจบรับฟังก่อน แนะนำทีหลัง"
  }
};

// ============ LANGUAGE SWITCHING ============
let currentLang = localStorage.getItem('mindhub_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('mindhub_lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key] !== undefined) {
      el.innerHTML = I18N[lang][key];
    }
  });
  updateChipsI18n();
  updateInputPlaceholder();
  renderSessionList();
  updatePhaseTag();
}

function updateInputPlaceholder() {
  const inp = document.getElementById('input');
  if (inp) inp.placeholder = currentLang === 'th' ? 'แบ่งปันสิ่งที่อยู่ในใจ...' : "Share what's on your mind...";
}

function updateChipsI18n() {
  const chipsEl = document.getElementById('quick-chips');
  if (!chipsEl) return;
  const t = I18N[currentLang];
  chipsEl.innerHTML = `
    <button class="chip" data-chip="drained">${t.chip_drained}</button>
    <button class="chip" data-chip="burnout">${t.chip_burnout}</button>
    <button class="chip" data-chip="pressure">${t.chip_pressure}</button>
    <button class="chip" data-chip="sleep">${t.chip_sleep}</button>
  `;
  chipsEl.querySelectorAll('.chip').forEach(c => {
    c.addEventListener('click', () => {
      const texts = {
        drained: { en: "I had back-to-back meetings today and I'm drained", th: "วันนี้ประชุมติดกันทั้งวันเลย หมดพลังมาก" },
        burnout: { en: "I feel burned out lately", th: "ช่วงนี้รู้สึกหมดไฟ" },
        pressure: { en: "My manager is putting too much pressure on me", th: "หัวหน้ากดดันฉันเยอะมาก" },
        sleep: { en: "I can't sleep well these days", th: "ช่วงนี้นอนไม่ค่อยหลับ" }
      };
      const key = c.dataset.chip;
      const text = texts[key][currentLang];
      document.getElementById('input').value = text;
      sendMessage();
    });
  });
}

// ============ CLINICAL SYSTEM PROMPT (7-phase framework) ============
const SYSTEM_PROMPT = `You are N'Rub Job (น้องรับจบ), a caring and clinically-informed AI companion on the MindHub platform. You conduct structured mental wellness conversations following a 7-phase psychological assessment framework adapted for a workplace wellness context.

# PERSONALITY
Warm, non-judgmental, younger-sibling energy. In Thai, call user "พี่" and refer to yourself as "ผม/น้อง." Respond in the SAME LANGUAGE the user writes in (Thai or English).

# CORE BEHAVIOR RULES
1. ANSWER FIRST, SUPPORT SECOND — If the user asks a question, answer it directly and clearly first, THEN offer emotional support or ask follow-up. Never dodge the question.
2. Keep replies short and conversational (2-4 sentences typically), unless the user asks for detail.
3. Never diagnose, prescribe medication, or promise things will be fine.
4. Never compare suffering ("others have it worse").
5. Use active listening + reflection ("it sounds like..." / "ฟังดูเหมือนพี่...").

# 7-PHASE CLINICAL ASSESSMENT FRAMEWORK
**Phase 1 — RAPPORT**: Greet warmly, establish psychological safety, explain you're an AI companion.
**Phase 2 — INTAKE**: Gather presenting concerns gently. What brought them today?
**Phase 3 — SCREENING**: Weave in clinical screening items conversationally (PHQ-9, GAD-7, PSS).
**Phase 4 — MSE**: Observe through conversation: thought content, speech patterns, emotional regulation.
**Phase 5 — INTEGRATION**: Cross-check self-report with patterns observed.
**Phase 6 — FORMULATION**: Biopsychosocial synthesis in accessible language.
**Phase 7 — SUPPORT**: Offer techniques or escalate to professional.

# RISK TRIAGE
- Level 1 (everyday): work stress, bad sleep → respond normally
- Level 2 (persistent): sustained burnout, worthlessness → validate, suggest professional support
- Level 3 (CRISIS): self-harm, suicidal thoughts → Thai hotlines: 1323, Samaritans 02-713-6793, Emergency 1669

# SIGNAL BLOCK (append to EVERY response, no exceptions)
After your reply, append a JSON block exactly like this:
<SIGNAL>
{
  "phase": 1,
  "risk_level": 1,
  "primary_emotion": "stress",
  "emotion_intensity": 0.5,
  "mascot_mood": "neutral",
  "session_summary_update": "",
  "next_phase_readiness": 0.3
}
</SIGNAL>

mascot_mood options: happy, neutral, stressed, sad
risk_level: 1=low, 2=moderate, 3=crisis
session_summary_update: brief insight string, empty if nothing new`;

// ============ AUTH (Hardcoded demo — no Firebase Auth needed) ============
const DEMO_ACCOUNTS = {
  'abc123@gmail.com':   { password: '12345678', role: 'employee', name: 'Alex Chen',  id: 'EMP-4729', uid: 'demo_employee' },
  'admin999@gmail.com': { password: '99999999', role: 'hr',       name: 'Admin (HR)', id: 'HR-001',   uid: 'demo_hr' }
};
let currentUser = null;
let hasConsented = false;
let sanctuaryCache = null;

function openConsent() {
  document.getElementById('consent-modal').classList.add('show');
}
function closeConsent() {
  document.getElementById('consent-modal').classList.remove('show');
  ['consent-chk-1','consent-chk-2','consent-chk-3'].forEach(id => { document.getElementById(id).checked = false; });
  updateConsent();
}
function updateConsent() {
  const all = ['consent-chk-1','consent-chk-2','consent-chk-3'].every(id => document.getElementById(id).checked);
  document.getElementById('btn-agree').disabled = !all;
}
function agreeConsent() {
  hasConsented = true;
  localStorage.setItem('mindhub_consented', '1');
  document.getElementById('consent-modal').classList.remove('show');
  goto('login');
}

async function setupLoggedInUser() {
  document.getElementById('top-nav').style.display = 'flex';
  document.getElementById('top-user').style.display = 'flex';
  document.getElementById('user-avatar').textContent = currentUser.name[0];
  document.getElementById('user-name').textContent = currentUser.name;
  document.getElementById('user-role').textContent = currentUser.role === 'hr' ? 'HR · Full Access' : 'Employee · #' + currentUser.id;

  if (currentUser.role === 'hr') {
    document.getElementById('nav-hr').style.display = 'inline-block';
    document.getElementById('nav-chat').style.display = 'none';
    document.getElementById('nav-data').style.display = 'none';
    goto('hr');
  } else {
    document.getElementById('nav-hr').style.display = 'none';
    document.getElementById('nav-chat').style.display = 'inline-block';
    document.getElementById('nav-data').style.display = 'inline-block';
    await loadUserSessions();
    await initSanctuary();
    goto('employee');
    showMascot();
  }
}

async function doLogin() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pw = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  errEl.classList.remove('show');

  const account = DEMO_ACCOUNTS[email];
  if (!account || account.password !== pw) {
    errEl.classList.add('show');
    return;
  }

  currentUser = { uid: account.uid, email, role: account.role, name: account.name, id: account.id, consented: true };
  localStorage.setItem('mindhub_user', JSON.stringify(currentUser));
  await setupLoggedInUser();
}

async function seedDemoSanctuary() {
  if (!currentUser) return;
  const existing = await DB.loadSanctuary(currentUser.uid);
  if (existing && existing.plants && existing.plants.length > 0) return;
  const seed = emptySanctuary();
  const demoPlants = [
    { emoji: '🌱', type: 'seedling', rare: false, x: 15, y: 70, size: 1.0, source: 'chat' },
    { emoji: '🌿', type: 'grass', rare: false, x: 30, y: 75, size: 1.1, source: 'chat' },
    { emoji: '🌼', type: 'flower_yellow', rare: false, x: 50, y: 72, size: 1.0, source: 'breathing' },
    { emoji: '🌸', type: 'flower_pink', rare: false, x: 68, y: 78, size: 1.2, source: 'chat' },
    { emoji: '🌻', type: 'sunflower', rare: false, x: 85, y: 68, size: 1.3, source: 'breathing' },
    { emoji: '🍀', type: 'leaf', rare: false, x: 22, y: 85, size: 0.9, source: 'chat' },
    { emoji: '🌷', type: 'tulip', rare: false, x: 42, y: 88, size: 1.0, source: 'chat' }
  ];
  demoPlants.forEach((p, i) => {
    seed.plants.push({ id: 'seed_' + i, ...p, dateEarned: Date.now() - (7 - i) * 24 * 60 * 60 * 1000 });
  });
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    seed.daysVisited.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`);
  }
  seed.chatCount = 5;
  seed.breathingCount = 2;
  seed.uniqueEmotions = ['stress', 'anxiety', 'burnout'];
  seed.maxPhase = 3;
  seed.vault = [
    { text: "I notice my stress spikes when I don't eat lunch.", date: Date.now() - 2 * 86400000 },
    { text: "Saying 'no' to a meeting didn't break anything.", date: Date.now() - 4 * 86400000 },
    { text: "Sleep affects my mood more than I realized.", date: Date.now() - 6 * 86400000 }
  ];
  sanctuaryCache = seed;
  saveSanctuary(seed);
  checkMilestones();
}

async function initSanctuary() {
  if (!currentUser || currentUser.role !== 'employee') return;
  await seedDemoSanctuary();
  sanctuaryCache = await DB.loadSanctuary(currentUser.uid);
  if (!sanctuaryCache) sanctuaryCache = emptySanctuary();
  refreshSanctuary();
}

function logout() {
  currentUser = null;
  sanctuaryCache = null;
  sessions = [];
  activeSessionId = null;
  localStorage.removeItem('mindhub_user');
  document.getElementById('top-nav').style.display = 'none';
  document.getElementById('top-user').style.display = 'none';
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  hideMascot();
  goto('landing');
}

// ============ VIEW ROUTING ============
function goto(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  document.querySelectorAll('.top-nav-btn').forEach(b => b.classList.remove('active'));
  if (name === 'hr') { document.getElementById('nav-hr').classList.add('active'); hideMascot(); }
  window.scrollTo(0, 0);
}

function gotoEmployeeTab(tab) {
  goto('employee');
  switchEmpTab(tab);
  showMascot();
}

function switchEmpTab(tab) {
  document.querySelectorAll('.emp-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelectorAll('.side-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.top-nav-btn').forEach(b => b.classList.remove('active'));
  const navBtn = document.getElementById('nav-' + tab);
  if (navBtn) navBtn.classList.add('active');
  if (tab === 'data') drawPersonalChart();
  if (tab === 'sanctuary') refreshSanctuary();
  if (tab === 'home') initHomeTab();
}

// ============ MASCOT ============
function showMascot() { document.getElementById('mascot-fab').classList.remove('hidden'); }
function hideMascot() { document.getElementById('mascot-fab').classList.add('hidden'); }

// NOTE: setupMascotDrag is called inside init() after DOM is ready — NOT as a top-level IIFE
function setupMascotDrag() {
  const fab = document.getElementById('mascot-fab');
  if (!fab) return; // safety guard
  let dragging = false, startX, startY, initialX, initialY, moved = false;

  fab.addEventListener('mousedown', (e) => {
    dragging = true; moved = false;
    startX = e.clientX; startY = e.clientY;
    const rect = fab.getBoundingClientRect();
    initialX = rect.left; initialY = rect.top;
    fab.style.right = 'auto'; fab.style.bottom = 'auto';
    fab.style.left = initialX + 'px'; fab.style.top = initialY + 'px';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    fab.style.left = (initialX + dx) + 'px';
    fab.style.top = (initialY + dy) + 'px';
  });

  // FIX: removed e.stopPropagation() — it was blocking ALL clicks on the page
  document.addEventListener('mouseup', () => {
    dragging = false;
    setTimeout(() => { moved = false; }, 50);
  });

  fab.addEventListener('click', (e) => {
    if (moved) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);
}

function setMascotMood(mood) {
  const grad = document.querySelector('#mascot-fab #bodyGrad2');
  if (!grad) return;
  const moods = {
    happy: ['#86efac', '#10b981'],
    neutral: ['#60a5fa', '#2563eb'],
    stressed: ['#fdba74', '#ea580c'],
    sad: ['#cbd5e1', '#64748b']
  };
  const m = moods[mood] || moods.neutral;
  grad.querySelector('stop:first-child').setAttribute('stop-color', m[0]);
  grad.querySelector('stop:last-child').setAttribute('stop-color', m[1]);
}

// ============ CHAT + PERSISTENCE ============
let sessions = [];
let activeSessionId = null;
let currentPhase = 1;

async function loadUserSessions() {
  if (!currentUser) return;
  try {
    sessions = await DB.loadSessions(currentUser.uid);
  } catch(e) { sessions = []; }
  const profile = await DB.loadProfile(currentUser.uid);
  const lastActive = profile?.activeSessionId;
  if (lastActive && sessions.find(s => s.id === lastActive)) {
    activeSessionId = lastActive;
  } else if (sessions.length > 0) {
    activeSessionId = sessions[0].id;
  } else {
    activeSessionId = null;
  }
  renderSessionList();
  renderActiveSession();
}

function saveSessions() {
  if (!currentUser?.uid) return;
  const active = sessions.find(s => s.id === activeSessionId);
  if (active) {
    DB.saveSession(currentUser.uid, active).catch(e => console.error('saveSessions error:', e));
  }
  DB.saveProfile(currentUser.uid, { activeSessionId }).catch(e => console.error('saveActiveId error:', e));
}

function newSession() {
  const sid = 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
  const s = {
    id: sid,
    title: I18N[currentLang].session_untitled,
    messages: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    phase: 1,
    lastSignal: null
  };
  sessions.unshift(s);
  activeSessionId = sid;
  currentPhase = 1;
  saveSessions();
  renderSessionList();
  renderActiveSession();
}

function switchSession(sid) {
  activeSessionId = sid;
  const s = sessions.find(x => x.id === sid);
  if (s) currentPhase = s.phase || 1;
  saveSessions();
  renderSessionList();
  renderActiveSession();
}

function deleteSession(sid, ev) {
  if (ev) ev.stopPropagation();
  if (!confirm(I18N[currentLang].confirm_delete)) return;
  sessions = sessions.filter(s => s.id !== sid);
  if (activeSessionId === sid) {
    activeSessionId = sessions.length > 0 ? sessions[0].id : null;
  }
  if (currentUser?.uid) {
    DB.deleteSession(currentUser.uid, sid).catch(e => console.error('deleteSession error:', e));
  }
  saveSessions();
  renderSessionList();
  renderActiveSession();
}

function renderSessionList() {
  const list = document.getElementById('session-list');
  if (!list) return;
  if (sessions.length === 0) {
    list.innerHTML = `<div class="session-row empty">${I18N[currentLang].empty_sessions}</div>`;
    return;
  }
  list.innerHTML = sessions.map(s => {
    const d = new Date(s.updatedAt);
    const dateStr = d.toLocaleDateString(currentLang === 'th' ? 'th-TH' : 'en-US', { month: 'short', day: 'numeric' });
    const timeStr = d.toLocaleTimeString(currentLang === 'th' ? 'th-TH' : 'en-US', { hour: 'numeric', minute: '2-digit' });
    const active = s.id === activeSessionId ? 'active' : '';
    const safeTitle = (s.title || I18N[currentLang].session_untitled).replace(/[<>"'&]/g, m => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' }[m]));
    return `<div class="session-row ${active}" onclick="switchSession('${s.id}')">
      <button class="s-delete" onclick="deleteSession('${s.id}', event)">✕</button>
      <div class="s-title">${safeTitle}</div>
      <div class="s-meta">${dateStr} · ${timeStr} · ${s.messages.length} msgs</div>
    </div>`;
  }).join('');
}

function renderActiveSession() {
  const messagesEl = document.getElementById('messages');
  if (!messagesEl) return;
  messagesEl.innerHTML = '';
  const s = sessions.find(x => x.id === activeSessionId);
  if (!s || s.messages.length === 0) {
    appendMsg('ai', I18N[currentLang].greeting_initial, false);
  } else {
    s.messages.forEach(m => {
      if (m.role === 'user') {
        appendMsg('user', m.content, false);
      } else {
        const visible = (m.content || '').replace(/<SIGNAL>[\s\S]*?<\/SIGNAL>/, '').trim();
        appendMsg('ai', visible, false);
      }
    });
  }
  currentPhase = (s && s.phase) || 1;
  updatePhaseTag();
  if (s && s.lastSignal && s.lastSignal.mascot_mood) setMascotMood(s.lastSignal.mascot_mood);
}

function updatePhaseTag() {
  const tag = document.getElementById('phase-tag');
  if (!tag) return;
  tag.textContent = I18N[currentLang]['phase_label_' + currentPhase] || `PHASE ${currentPhase}`;
}

function appendMsg(role, text, doScroll = true) {
  const messagesEl = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  messagesEl.appendChild(div);
  if (doScroll) messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

function appendTyping() {
  const messagesEl = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

async function sendMessage() {
  const inputEl = document.getElementById('input');
  const sendBtn = document.getElementById('send');
  const text = inputEl.value.trim();
  if (!text) return;

  if (!activeSessionId) newSession();
  const session = sessions.find(s => s.id === activeSessionId);

  appendMsg('user', text);
  session.messages.push({ role: 'user', content: text });
  if (session.title === I18N[currentLang].session_untitled || session.messages.filter(m => m.role === 'user').length === 1) {
    session.title = text.slice(0, 40) + (text.length > 40 ? '…' : '');
  }
  session.updatedAt = Date.now();
  inputEl.value = '';
  inputEl.style.height = 'auto';
  sendBtn.disabled = true;

  const typingEl = appendTyping();

  try {
    // Filter out [ERROR] messages — they must NOT be sent to the API as model responses
    const cleanMessages = session.messages.filter(m => !m.content?.startsWith('[ERROR]'));
    
    // Gemini API requires STRICT alternating roles (user -> model -> user). 
    // Past errors may have left consecutive user messages in history, causing 400 Bad Request.
    const alternatingMessages = [];
    for (const m of cleanMessages) {
      const role = m.role === 'assistant' ? 'model' : 'user';
      if (alternatingMessages.length === 0) {
        if (role === 'user') alternatingMessages.push({ role, content: m.content });
      } else {
        const last = alternatingMessages[alternatingMessages.length - 1];
        if (last.role === role) {
          last.content += '\n\n' + m.content; // Collapse consecutive messages
        } else {
          alternatingMessages.push({ role, content: m.content });
        }
      }
    }

    const geminiContents = alternatingMessages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    // We only use the primary model (gemini-3.1-flash-lite-preview)
    // but we will retry a couple of times if the server is overloaded.
    const modelsToTry = [GEMINI_MODEL, GEMINI_MODEL, GEMINI_MODEL];
    const delays =       [0,            2000,          3000];

    const tryModel = async (modelName) => {
      const res = await fetch('/api/chat', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: modelName,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: geminiContents,
          generationConfig: { maxOutputTokens: 1000, temperature: 0.7 }
        })
      });
      return res;
    };

    const fetchWithFallback = async () => {
      let lastRes = null;
      for (let i = 0; i < modelsToTry.length; i++) {
        // Show friendly "please wait" message when retrying
        if (i > 0) {
          const waitMsg = currentLang === 'th'
            ? 'รอน้องรับจบสักครู่นะครับ คนใช้เยอะมากเลยกำลังลองส่งใหม่อีกครั้ง... 💙'
            : "Hang on — lots of people are chatting! N'Rub Job is retrying your message... 💙";
          typingEl.innerHTML = `<div class="typing-wait">${waitMsg}</div>`;
        }
        if (delays[i] > 0) {
          await new Promise(r => setTimeout(r, delays[i]));
        }
        console.log(`Attempt ${i + 1}: trying ${modelsToTry[i]}`);
        lastRes = await tryModel(modelsToTry[i]);
        if (lastRes.ok) return lastRes;
        // Only continue to next model on 503/429, otherwise fail immediately
        if (lastRes.status !== 503 && lastRes.status !== 429) break;
      }
      // All attempts failed
      const errBody = await lastRes.json().catch(() => ({}));
      throw new Error(`API ${lastRes.status}: ${errBody.error?.message || errBody.error || lastRes.statusText}`);
    };
    const response = await fetchWithFallback();
    const data = await response.json();
    const fullText = (data.candidates?.[0]?.content?.parts || []).map(p => p.text).join('\n');
    const visibleText = fullText.replace(/<SIGNAL>[\s\S]*?<\/SIGNAL>/, '').trim();

    const sigMatch = fullText.match(/<SIGNAL>([\s\S]*?)<\/SIGNAL>/);
    let signal = null;
    if (sigMatch) {
      try {
        signal = JSON.parse(sigMatch[1].trim());
        if (signal.mascot_mood) setMascotMood(signal.mascot_mood);
        if (signal.phase) {
          currentPhase = signal.phase;
          session.phase = signal.phase;
          updatePhaseTag();
        }
        session.lastSignal = signal;
        if (currentUser && currentUser.role === 'employee') {
          registerEmotionSignal(signal.primary_emotion, signal.phase);
          if (signal.session_summary_update && signal.session_summary_update.length > 10) {
            if (signal.phase >= 2 && session.messages.filter(m => m.role === 'user').length >= 2) {
              addVaultReflection(signal.session_summary_update);
            }
          }
          const userMsgCount = session.messages.filter(m => m.role === 'user').length;
          if (userMsgCount > 0 && userMsgCount % 3 === 1) {
            growPlant('chat');
          }
        }
      } catch(e) { console.warn('Bad signal JSON', e); }
    }

    typingEl.innerHTML = '';
    typingEl.textContent = visibleText;
    session.messages.push({ role: 'assistant', content: fullText });
    session.updatedAt = Date.now();
    saveSessions();
    renderSessionList();
  } catch (err) {
    typingEl.className = 'msg ai';
    const isOverload = err.message.includes('503') || err.message.includes('429') || err.message.includes('overloaded');
    if (isOverload) {
      typingEl.innerHTML = currentLang === 'th'
        ? 'ขอโทษนะครับพี่ ตอนนี้น้องรับจบมีคนคุยเยอะมากเลย 😅 รอสักครู่แล้วลองส่งข้อความใหม่อีกครั้งนะครับ น้องจะรีบกลับมาตอบให้เร็วที่สุดครับ 💙'
        : "Sorry! N'Rub Job is a bit busy right now — lots of people are chatting 😅 Please wait a moment and try sending your message again. I'll be right back! 💙";
    } else {
      typingEl.innerHTML = currentLang === 'th'
        ? `เกิดข้อผิดพลาดครับ: ${err.message} 🙏`
        : `Something went wrong: ${err.message} 🙏`;
      console.error('Chat error:', err.message);
    }
    // Remove the user message that caused the error so they can retry cleanly
    session.messages.pop();
    session.updatedAt = Date.now();
    saveSessions();
  } finally {
    sendBtn.disabled = false;
    inputEl.focus();
  }
}

// ============ HR BAR CHART ============
function renderBarChart() {
  const bc = document.getElementById('bar-chart');
  if (!bc) return;
  const barData = [
    { d: 'M', low: 30, med: 12, high: 3 }, { d: 'T', low: 34, med: 15, high: 3 },
    { d: 'W', low: 40, med: 22, high: 6 }, { d: 'T', low: 42, med: 24, high: 5 },
    { d: 'F', low: 38, med: 17, high: 3 }, { d: 'S', low: 24, med: 7, high: 1 },
    { d: 'S', low: 22, med: 5, high: 1 }, { d: 'M', low: 40, med: 18, high: 3 },
    { d: 'T', low: 45, med: 24, high: 4 }, { d: 'W', low: 48, med: 28, high: 6 },
    { d: 'T', low: 50, med: 32, high: 6 }, { d: 'F', low: 48, med: 27, high: 4 },
    { d: 'S', low: 30, med: 9, high: 2 }, { d: 'S', low: 26, med: 7, high: 2 }
  ];
  const maxTotal = Math.max(...barData.map(d => d.low + d.med + d.high));
  bc.innerHTML = '';
  barData.forEach(d => {
    const total = d.low + d.med + d.high;
    const stack = document.createElement('div');
    stack.className = 'bar-stack';
    stack.setAttribute('data-label', d.d);
    stack.title = `${total} sessions · Low:${d.low} Med:${d.med} High:${d.high}`;
    stack.style.height = (total / maxTotal * 100) + '%';
    ['low', 'med', 'high'].forEach(lvl => {
      const seg = document.createElement('div');
      seg.className = 'bar-seg ' + lvl;
      seg.style.flex = d[lvl];
      stack.appendChild(seg);
    });
    bc.appendChild(stack);
  });
}

function renderHeatmap() {
  const teams = ['Engineering', 'Sales', 'Marketing', 'Operations', 'HR', 'Finance'];
  const heatColors = ['#10b981', '#6ee7b7', '#fde68a', '#fb923c', '#ef4444'];
  const hm = document.getElementById('heatmap');
  if (!hm) return;
  hm.innerHTML = '';
  const patterns = [
    [1,1,2,1,2,2,1,1,2,2,3,2,1,1],
    [2,2,3,2,3,3,2,1,2,3,3,4,3,2],
    [1,2,1,2,1,2,2,1,2,2,1,2,1,1],
    [3,3,4,3,4,4,3,2,3,4,4,4,3,3],
    [0,1,0,1,1,0,1,0,1,1,0,1,0,0],
    [1,1,1,2,1,1,2,1,1,2,2,1,1,1]
  ];
  teams.forEach((t, ti) => {
    const row = document.createElement('div');
    row.className = 'heatmap-row';
    row.innerHTML = `<div class="team">${t}</div>`;
    const cells = document.createElement('div');
    cells.className = 'heatmap-cells';
    for (let i = 0; i < 14; i++) {
      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      const level = patterns[ti][i];
      cell.style.background = heatColors[level];
      cell.title = `Day ${i + 1}: risk level ${level}`;
      cells.appendChild(cell);
    }
    row.appendChild(cells);
    hm.appendChild(row);
  });
}

function drawPersonalChart() {
  const container = document.getElementById('personal-chart');
  if (!container) return;
  const w = container.clientWidth || 600, h = 220;
  const moods = [6, 5, 7, 4, 5, 6, 7, 5, 4, 5, 6, 7, 6, 6];
  const stress = [5, 7, 4, 8, 7, 6, 5, 7, 8, 7, 6, 4, 5, 7];
  const pad = 30;
  const cx = x => pad + (x / (moods.length - 1)) * (w - pad * 2);
  const cy = v => h - pad - (v / 10) * (h - pad * 2);
  let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">`;
  for (let i = 0; i <= 10; i += 2) {
    const y = cy(i);
    svg += `<line x1="${pad}" y1="${y}" x2="${w - pad}" y2="${y}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>`;
    svg += `<text x="${pad - 8}" y="${y + 4}" font-size="10" fill="#94a3b8" text-anchor="end" font-family="JetBrains Mono">${i}</text>`;
  }
  const moodPath = moods.map((v, i) => `${i === 0 ? 'M' : 'L'}${cx(i)},${cy(v)}`).join(' ');
  svg += `<path d="${moodPath}" stroke="#2563eb" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  moods.forEach((v, i) => { svg += `<circle cx="${cx(i)}" cy="${cy(v)}" r="3.5" fill="#2563eb"/>`; });
  const stressPath = stress.map((v, i) => `${i === 0 ? 'M' : 'L'}${cx(i)},${cy(v)}`).join(' ');
  svg += `<path d="${stressPath}" stroke="#ef4444" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-dasharray="4,3"/>`;
  stress.forEach((v, i) => { svg += `<circle cx="${cx(i)}" cy="${cy(v)}" r="3.5" fill="#ef4444"/>`; });
  svg += `</svg>`;
  container.innerHTML = svg;
}

// ============ SANCTUARY / GAMIFICATION ============
const PLANT_TYPES = [
  { type: 'seedling', emoji: '🌱', weight: 10 },
  { type: 'grass', emoji: '🌿', weight: 9 },
  { type: 'flower_yellow', emoji: '🌼', weight: 7 },
  { type: 'flower_pink', emoji: '🌸', weight: 6 },
  { type: 'flower_red', emoji: '🌺', weight: 5 },
  { type: 'tulip', emoji: '🌷', weight: 5 },
  { type: 'leaf', emoji: '🍀', weight: 4 },
  { type: 'sunflower', emoji: '🌻', weight: 3 },
  { type: 'cactus', emoji: '🌵', weight: 2 },
  { type: 'tree_small', emoji: '🌳', weight: 2, rare: true },
  { type: 'cherry', emoji: '🌸', weight: 1, rare: true },
  { type: 'mushroom', emoji: '🍄', weight: 1, rare: true },
  { type: 'rainbow', emoji: '🌈', weight: 1, rare: true }
];

const MILESTONES = [
  { id: 'new_moon', icon: '🌑', titleKey: 'm_new_moon_t', descKey: 'm_new_moon_d', check: (s) => s.chatCount >= 1 },
  { id: 'first_light', icon: '🌒', titleKey: 'm_first_light_t', descKey: 'm_first_light_d', check: (s) => s.uniqueEmotions >= 5 },
  { id: 'half_moon', icon: '🌓', titleKey: 'm_half_moon_t', descKey: 'm_half_moon_d', check: (s) => s.breathingCount >= 1 },
  { id: 'waxing', icon: '🌔', titleKey: 'm_waxing_t', descKey: 'm_waxing_d', check: (s) => s.vault.length >= 3 },
  { id: 'aurora', icon: '🌌', titleKey: 'm_aurora_t', descKey: 'm_aurora_d', check: (s) => s.maxPhase >= 5 },
  { id: 'full_moon', icon: '🌕', titleKey: 'm_full_moon_t', descKey: 'm_full_moon_d', check: (s) => s.daysVisited.length >= 30 }
];

function loadSanctuary() {
  if (!sanctuaryCache) sanctuaryCache = emptySanctuary();
  return Object.assign(emptySanctuary(), sanctuaryCache);
}

function emptySanctuary() {
  return { plants: [], daysVisited: [], milestones: {}, vault: [], chatCount: 0, breathingCount: 0, uniqueEmotions: [], maxPhase: 1 };
}

function saveSanctuary(s) {
  sanctuaryCache = s;
  if (currentUser?.uid) {
    DB.saveSanctuary(currentUser.uid, s).catch(e => console.error('saveSanctuary error:', e));
  }
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function registerVisit() {
  const s = loadSanctuary();
  const today = todayKey();
  if (!s.daysVisited.includes(today)) { s.daysVisited.push(today); saveSanctuary(s); }
}

function growPlant(source) {
  const s = loadSanctuary();
  const total = PLANT_TYPES.reduce((a, p) => a + p.weight, 0);
  let r = Math.random() * total;
  let picked = PLANT_TYPES[0];
  for (const p of PLANT_TYPES) { r -= p.weight; if (r <= 0) { picked = p; break; } }
  const positions = s.plants.map(p => ({x:p.x, y:p.y}));
  let x, y, tries = 0;
  do {
    x = 5 + Math.random() * 90;
    y = 25 + Math.random() * 70;
    tries++;
  } while (tries < 20 && positions.some(p => Math.abs(p.x-x) < 8 && Math.abs(p.y-y) < 8));
  const plant = {
    id: 'p_' + Date.now() + '_' + Math.random().toString(36).slice(2,6),
    type: picked.type, emoji: picked.emoji, rare: !picked.rare,
    x, y, size: 0.8 + Math.random() * 0.5, dateEarned: Date.now(), source: source || 'unknown'
  };
  s.plants.push(plant);
  if (source === 'chat') s.chatCount = (s.chatCount||0) + 1;
  if (source === 'breathing') s.breathingCount = (s.breathingCount||0) + 1;
  const today = todayKey();
  if (!s.daysVisited.includes(today)) s.daysVisited.push(today);
  saveSanctuary(s);
  renderGarden();
  checkMilestones();
  showGrowToast(I18N[currentLang]['toast_' + (source === 'breathing' ? 'breathing' : source === 'reflection' ? 'reflection' : 'plant')]);
  return plant;
}

function addVaultReflection(text) {
  if (!text || text.length < 5) return;
  const s = loadSanctuary();
  s.vault.unshift({ text: text.slice(0, 200), date: Date.now() });
  if (s.vault.length > 50) s.vault = s.vault.slice(0, 50);
  saveSanctuary(s);
  renderVault();
  checkMilestones();
}

function registerEmotionSignal(emotion, phase) {
  if (!currentUser) return;
  const s = loadSanctuary();
  if (emotion && !s.uniqueEmotions.includes(emotion)) s.uniqueEmotions.push(emotion);
  if (phase && phase > (s.maxPhase || 1)) s.maxPhase = phase;
  saveSanctuary(s);
  checkMilestones();
}

function checkMilestones() {
  const s = loadSanctuary();
  const state = {
    chatCount: s.chatCount || 0, breathingCount: s.breathingCount || 0,
    uniqueEmotions: (s.uniqueEmotions || []).length, daysVisited: s.daysVisited || [],
    vault: s.vault || [], maxPhase: s.maxPhase || 1
  };
  let changed = false;
  MILESTONES.forEach(m => {
    if (!s.milestones[m.id] && m.check(state)) {
      s.milestones[m.id] = Date.now(); changed = true;
      showGrowToast(I18N[currentLang].toast_milestone + ': ' + (I18N[currentLang][m.titleKey] || m.id));
    }
  });
  if (changed) saveSanctuary(s);
  renderMilestones();
}

function renderGarden() {
  const canvas = document.getElementById('garden-canvas');
  const empty = document.getElementById('garden-empty');
  if (!canvas) return;
  const s = loadSanctuary();
  document.getElementById('garden-count').textContent = s.plants.length;
  document.getElementById('garden-days').textContent = s.daysVisited.length;
  document.getElementById('garden-rare').textContent = s.plants.filter(p => p.rare).length;

  if (s.plants.length === 0) {
    canvas.querySelector('svg')?.remove();
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  const h = 320;
  let svg = `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">`;
  svg += `<defs><linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bae6fd" stop-opacity="0"/><stop offset="100%" stop-color="#f0fdf4" stop-opacity="0"/></linearGradient></defs>`;
  svg += `<line x1="0" y1="95" x2="100" y2="95" stroke="#86efac" stroke-width="0.3" opacity="0.5"/>`;
  svg += `<circle cx="85" cy="15" r="5" fill="#fde68a" opacity="0.7"/>`;
  svg += `<circle cx="85" cy="15" r="7" fill="#fde68a" opacity="0.2"/>`;
  svg += `<path d="M 0 92 Q 20 85, 40 90 T 80 88 T 100 90 L 100 100 L 0 100 Z" fill="#86efac" opacity="0.25"/>`;
  svg += `<path d="M 0 95 Q 25 90, 50 94 T 100 93 L 100 100 L 0 100 Z" fill="#6ee7b7" opacity="0.3"/>`;

  const sorted = [...s.plants].sort((a, b) => a.y - b.y);
  sorted.forEach((p, i) => {
    const fontSize = 4 * p.size;
    svg += `<g style="transform-origin: ${p.x}% ${p.y + 5}%; animation: plantGrow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.03}s backwards;">`;
    if (p.rare) svg += `<circle cx="${p.x}" cy="${p.y + 2}" r="3" fill="#fbbf24" opacity="0.3"/>`;
    svg += `<text x="${p.x}" y="${p.y + 5}" font-size="${fontSize}" text-anchor="middle" dominant-baseline="middle" style="font-family: sans-serif;">${p.emoji}</text>`;
    svg += `</g>`;
  });
  if (s.plants.length >= 10) svg += `<text x="30" y="40" font-size="3" opacity="0.8">🦋</text>`;
  if (s.plants.length >= 20) svg += `<text x="70" y="55" font-size="2.5" opacity="0.8">🐝</text>`;
  svg += `</svg>`;
  canvas.innerHTML = svg + (empty ? empty.outerHTML : '');
  if (!document.getElementById('garden-empty') && empty) {
    canvas.appendChild(empty);
    empty.style.display = 'none';
  }
}

function renderMilestones() {
  const list = document.getElementById('milestones-list');
  if (!list) return;
  const s = loadSanctuary();
  list.innerHTML = MILESTONES.map(m => {
    const unlocked = !!s.milestones[m.id];
    const title = I18N[currentLang][m.titleKey] || m.id;
    const desc = I18N[currentLang][m.descKey] || '';
    return `<div class="milestone-item ${unlocked ? 'unlocked' : ''}">
      <div class="milestone-icon">${m.icon}</div>
      <div class="milestone-text"><span class="m-title">${title}</span>${desc}</div>
      <div class="milestone-badge">${unlocked ? '✓' : '—'}</div>
    </div>`;
  }).join('');
}

function renderVault() {
  const list = document.getElementById('vault-list');
  if (!list) return;
  const s = loadSanctuary();
  if (s.vault.length === 0) {
    list.innerHTML = `<div class="vault-empty">${I18N[currentLang].vault_empty}</div>`;
    return;
  }
  list.innerHTML = s.vault.slice(0, 10).map(v => {
    const d = new Date(v.date);
    const dateStr = d.toLocaleDateString(currentLang === 'th' ? 'th-TH' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const safe = v.text.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));
    return `<div class="vault-item">${safe}<span class="v-date">${dateStr}</span></div>`;
  }).join('');
}

function refreshSanctuary() {
  if (!currentUser || currentUser.role !== 'employee') return;
  registerVisit();
  renderGarden();
  renderMilestones();
  renderVault();
}

let toastTimeout = null;
function showGrowToast(message) {
  const toast = document.getElementById('grow-toast');
  if (!toast) return;
  document.getElementById('toast-msg').textContent = message || '';
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ============ BREATHING EXERCISE ============
let breatheInterval = null;
let breatheStartTime = 0;

function startBreathing() {
  const overlay = document.getElementById('breathe-overlay');
  const circle = document.getElementById('breathe-circle');
  const instruction = document.getElementById('breathe-instruction');
  const timer = document.getElementById('breathe-timer');
  overlay.classList.add('show');
  breatheStartTime = Date.now();
  let phase = 0;
  const DURATION_MS = 60000;
  const STEP_MS = 4000;
  const phases = [
    { cls: 'inhale', key: 'breathe_inhale' },
    { cls: 'inhale', key: 'breathe_hold' },
    { cls: 'exhale', key: 'breathe_exhale' },
    { cls: 'exhale', key: 'breathe_hold' }
  ];
  function step() {
    const p = phases[phase % 4];
    circle.classList.remove('inhale', 'exhale');
    circle.classList.add(p.cls);
    circle.textContent = (phase % 2 === 0) ? (p.cls === 'inhale' ? '↑' : '↓') : '·';
    instruction.textContent = I18N[currentLang][p.key] || '';
    phase++;
  }
  step();
  breatheInterval = setInterval(() => {
    const elapsed = Date.now() - breatheStartTime;
    const remain = Math.max(0, DURATION_MS - elapsed);
    const mm = Math.floor((elapsed) / 60000);
    const ss = Math.floor((elapsed % 60000) / 1000);
    timer.textContent = `${mm}:${String(ss).padStart(2,'0')} / 1:00`;
    if (remain <= 0) { completeBreathing(); return; }
    step();
  }, STEP_MS);
}

function completeBreathing() {
  clearInterval(breatheInterval);
  breatheInterval = null;
  const instruction = document.getElementById('breathe-instruction');
  const circle = document.getElementById('breathe-circle');
  instruction.textContent = I18N[currentLang].breathe_done;
  circle.textContent = '💙';
  circle.classList.remove('inhale', 'exhale');
  setTimeout(() => {
    stopBreathing();
    if (currentUser && currentUser.role === 'employee') growPlant('breathing');
  }, 2200);
}

function stopBreathing() {
  const overlay = document.getElementById('breathe-overlay');
  overlay.classList.remove('show');
  if (breatheInterval) { clearInterval(breatheInterval); breatheInterval = null; }
}


// ============ HOME TAB — MOOD TRACKER ============
const MOOD_DATA = {
  amazing: { emoji: '🤩', label: 'Amazing', score: 5, color: '#10b981',
    msg: "That's wonderful! Your positive energy is contagious. Keep doing whatever you're doing — you're thriving! 🌟" },
  good: { emoji: '😊', label: 'Good', score: 4, color: '#2563eb',
    msg: "Great to hear! A good day is something to be grateful for. Keep riding this wave of positivity! 💙" },
  okay: { emoji: '😐', label: 'Okay', score: 3, color: '#f59e0b',
    msg: "That's perfectly okay — not every day has to be amazing. You're still here, and that already counts. 🌿" },
  down: { emoji: '😔', label: 'Feeling Down', score: 2, color: '#8b5cf6',
    msg: "It's okay not to be okay. Give yourself some grace today — even small moments of rest can help lift your spirit. 💜" },
  stressed: { emoji: '😤', label: 'Stressed', score: 1, color: '#ef4444',
    msg: "Stress can be really tough. Try taking three slow breaths right now. You don't have to handle everything at once. 🫁" }
};

function getMoodKey() {
  const today = todayKey();
  return 'mindhub_mood_' + (currentUser?.uid || 'guest') + '_' + today;
}

function getMoodHistory() {
  try {
    const raw = localStorage.getItem('mindhub_mood_history_' + (currentUser?.uid || 'guest'));
    return raw ? JSON.parse(raw) : {};
  } catch(e) { return {}; }
}

function saveMoodHistory(history) {
  localStorage.setItem('mindhub_mood_history_' + (currentUser?.uid || 'guest'), JSON.stringify(history));
}

function pickMood(btn) {
  const mood = btn.dataset.mood;
  const data = MOOD_DATA[mood];
  if (!data) return;

  // Save to history
  const history = getMoodHistory();
  const today = todayKey();
  history[today] = mood;
  saveMoodHistory(history);

  // Update button selection
  document.querySelectorAll('.emotion-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  // Show popup
  document.getElementById('popup-emoji').textContent = data.emoji;
  document.getElementById('popup-name').textContent = data.label;
  document.getElementById('popup-msg').textContent = data.msg;
  document.getElementById('mood-popup').style.display = 'flex';

  // Refresh grids
  renderMoodWeekly();
  renderMoodMonthly();
  renderMoodGraph();
  updateWeeklyGoal();
  updateStreak();
}

function closeMoodPopup() {
  document.getElementById('mood-popup').style.display = 'none';
}

function switchMoodTab(tab) {
  ['weekly','monthly','graph'].forEach(t => {
    document.getElementById('mood-view-' + t).style.display = t === tab ? 'block' : 'none';
    document.getElementById('mtab-' + t).classList.toggle('active', t === tab);
  });
  if (tab === 'graph') renderMoodGraph();
}

function getWeekDays() {
  const days = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d);
  }
  return days;
}

function renderMoodWeekly() {
  const grid = document.getElementById('mood-weekly-grid');
  if (!grid) return;
  const history = getMoodHistory();
  const today = todayKey();
  const days = getWeekDays();
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  grid.innerHTML = days.map(d => {
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const mood = history[key];
    const data = mood ? MOOD_DATA[mood] : null;
    const isToday = key === today;
    return `<div class="mood-day-cell ${isToday ? 'today' : ''} ${mood ? 'has-mood' : ''}">
      <div class="mood-day-label">${dayNames[d.getDay()]}</div>
      <div class="mood-day-date">${d.getDate()}</div>
      <div class="mood-day-emoji">${data ? data.emoji : ''}</div>
    </div>`;
  }).join('');
}

function renderMoodMonthly() {
  const grid = document.getElementById('mood-monthly-grid');
  if (!grid) return;
  const history = getMoodHistory();
  const today = new Date();
  const todayStr = todayKey();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = '';
  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) html += '<div class="mood-month-cell" style="opacity:0"></div>';
  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const mood = history[key];
    const data = mood ? MOOD_DATA[mood] : null;
    const isToday = key === todayStr;
    const bg = data ? data.color + '22' : '';
    html += `<div class="mood-month-cell ${isToday ? 'today' : ''} ${mood ? 'has-mood' : ''}" style="${bg ? 'background:' + bg + ';border-color:' + data.color + '55' : ''}">
      <span class="mood-month-label">${d}</span>
      ${data ? `<span style="font-size:0.85rem">${data.emoji}</span>` : ''}
    </div>`;
  }
  grid.innerHTML = html;
}

function renderMoodGraph() {
  const canvas = document.getElementById('mood-graph-canvas');
  if (!canvas) return;
  const history = getMoodHistory();
  const days = getWeekDays();
  const scores = days.map(d => {
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const mood = history[key];
    return mood ? MOOD_DATA[mood].score : null;
  });
  const labels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const dayLabels = days.map(d => labels[d.getDay()]);

  const w = canvas.parentElement.clientWidth || 400;
  const h = 160;
  canvas.width = w * 2; canvas.height = h * 2;
  canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  const pad = { top: 16, bottom: 28, left: 28, right: 16 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;

  ctx.clearRect(0, 0, w, h);

  // Grid lines
  ctx.strokeStyle = 'rgba(148,163,184,0.2)';
  ctx.lineWidth = 0.5;
  for (let i = 1; i <= 4; i++) {
    const y = pad.top + ch - (i / 5) * ch;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cw, y); ctx.stroke();
  }

  // Plot points
  const points = scores.map((s, i) => ({
    x: pad.left + (i / (scores.length - 1)) * cw,
    y: s !== null ? pad.top + ch - ((s - 1) / 4) * ch : null,
    score: s
  }));

  // Filled area under line
  const validPts = points.filter(p => p.y !== null);
  if (validPts.length >= 2) {
    ctx.beginPath();
    let started = false;
    points.forEach((p, i) => {
      if (p.y === null) return;
      if (!started) { ctx.moveTo(p.x, p.y); started = true; }
      else ctx.lineTo(p.x, p.y);
    });
    const lastValid = validPts[validPts.length - 1];
    const firstValid = validPts[0];
    ctx.lineTo(lastValid.x, pad.top + ch);
    ctx.lineTo(firstValid.x, pad.top + ch);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + ch);
    grad.addColorStop(0, 'rgba(37,99,235,0.25)');
    grad.addColorStop(1, 'rgba(37,99,235,0.02)');
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    started = false;
    points.forEach(p => {
      if (p.y === null) { started = false; return; }
      if (!started) { ctx.moveTo(p.x, p.y); started = true; }
      else ctx.lineTo(p.x, p.y);
    });
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Dots
    points.forEach(p => {
      if (p.y === null) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#2563eb';
      ctx.fill();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  }

  // X labels
  ctx.fillStyle = 'rgba(120,137,163,0.9)';
  ctx.font = '10px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  points.forEach((p, i) => {
    ctx.fillText(dayLabels[i], p.x, pad.top + ch + 18);
  });

  // Y labels
  ctx.textAlign = 'right';
  ['1','2','3','4','5'].forEach((v, i) => {
    const y = pad.top + ch - (i / 4) * ch;
    ctx.fillText(v, pad.left - 4, y + 4);
  });
}

function updateWeeklyGoal() {
  const history = getMoodHistory();
  const days = getWeekDays();
  let count = 0;
  days.forEach(d => {
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    if (history[key]) count++;
  });
  const goal = 5;
  const pct = Math.min(100, Math.round((count / goal) * 100));
  const circ = 138.2;
  const el = document.getElementById('wg-sessions');
  const ring = document.getElementById('wg-ring');
  const pctEl = document.getElementById('wg-pct');
  if (el) el.textContent = count + '/' + goal + ' Sessions';
  if (ring) ring.style.strokeDashoffset = circ - (circ * pct / 100);
  if (pctEl) pctEl.textContent = pct + '%';
}

function updateStreak() {
  const history = getMoodHistory();
  let streak = 0;
  const d = new Date();
  while (true) {
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    if (!history[key]) break;
    streak++;
    d.setDate(d.getDate() - 1);
  }
  const el = document.getElementById('streak-val');
  if (el) el.textContent = streak;
}

function initHomeTab() {
  renderMoodWeekly();
  renderMoodMonthly();
  updateWeeklyGoal();
  updateStreak();

  // Highlight today's mood if already recorded
  const history = getMoodHistory();
  const today = todayKey();
  const todayMood = history[today];
  if (todayMood) {
    document.querySelectorAll('.emotion-btn').forEach(b => {
      b.classList.toggle('selected', b.dataset.mood === todayMood);
    });
  }

  // Update greeting
  const h = new Date().getHours();
  const greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  const name = currentUser?.name?.split(' ')[0] || '';
  const el = document.getElementById('home-greeting');
  if (el) el.innerHTML = `<span class="home-greeting-text">${greet}${name ? ', ' + name : ''}! How are you feeling today?</span>`;
}

// ============ INIT ============
async function init() {
  // Language
  setLang(currentLang);

  // FIX: Setup mascot drag here (inside init, after DOM is ready) — NOT as a top-level IIFE
  setupMascotDrag();

  // Chat input auto-resize & Enter
  const input = document.getElementById('input');
  if (input) {
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
  }
  const sendBtn = document.getElementById('send');
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);

  const pwEl = document.getElementById('login-password');
  if (pwEl) pwEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });

  renderBarChart();
  renderHeatmap();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const m = document.getElementById('consent-modal');
      if (m && m.classList.contains('show')) closeConsent();
    }
  });

  // Restore session from localStorage if user was previously logged in
  const savedUser = localStorage.getItem('mindhub_user');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      await setupLoggedInUser();
    } catch(e) {
      localStorage.removeItem('mindhub_user');
    }
  }
}

window.addEventListener('load', init);
window.addEventListener('resize', drawPersonalChart);
