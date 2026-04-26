:root {
  --bg: #f8fafc; --bg-soft: #eff4fa; --bg-card: #ffffff;
  --ink: #0f1e3a; --ink-soft: #3d4f6e; --ink-faint: #7889a3;
  --blue: #2563eb; --blue-deep: #1e40af; --blue-soft: #dbeafe; --blue-pale: #eff6ff;
  --sky: #0ea5e9; --green: #10b981; --green-soft: #d1fae5;
  --yellow: #f59e0b; --yellow-soft: #fef3c7;
  --red: #ef4444; --red-soft: #fee2e2;
  --purple: #8b5cf6; --purple-soft: #ede9fe;
  --line: rgba(15, 30, 58, 0.08); --line-strong: rgba(15, 30, 58, 0.14);
  --shadow-sm: 0 1px 2px rgba(15, 30, 58, 0.04), 0 2px 6px rgba(15, 30, 58, 0.04);
  --shadow-md: 0 4px 14px rgba(15, 30, 58, 0.06), 0 12px 32px rgba(15, 30, 58, 0.08);
  --shadow-lg: 0 12px 40px rgba(15, 30, 58, 0.1), 0 24px 60px rgba(15, 30, 58, 0.08);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: var(--bg); color: var(--ink); font-family: 'Inter', 'IBM Plex Sans Thai', system-ui, sans-serif; line-height: 1.55; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
html[lang="th"] body { font-family: 'IBM Plex Sans Thai', 'Inter', system-ui, sans-serif; }
body { background-image: radial-gradient(ellipse at top left, rgba(37, 99, 235, 0.08), transparent 60%), radial-gradient(ellipse at bottom right, rgba(14, 165, 233, 0.06), transparent 60%); min-height: 100vh; }
.topbar { position: sticky; top: 0; z-index: 40; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid var(--line); }
.topbar-inner { max-width: 1400px; margin: 0 auto; padding: 0.9rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
.brand { display: flex; align-items: center; gap: 0.6rem; cursor: pointer; color: var(--ink); }
.brand-mark { width: 34px; height: 34px; background: linear-gradient(135deg, var(--blue), var(--sky)); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3); }
.brand-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.3rem; letter-spacing: -0.02em; }
.top-nav { display: flex; gap: 0.3rem; }
.top-nav-btn { padding: 0.5rem 1rem; border: none; background: transparent; border-radius: 8px; cursor: pointer; font-family: inherit; font-size: 0.9rem; color: var(--ink-soft); font-weight: 500; transition: all 0.2s; }
.top-nav-btn:hover { background: var(--blue-pale); color: var(--blue); }
.top-nav-btn.active { background: var(--blue); color: white; }
.top-right { display: flex; align-items: center; gap: 0.6rem; }
.lang-toggle { display: flex; gap: 2px; padding: 3px; background: var(--bg-soft); border-radius: 8px; border: 1px solid var(--line); }
.lang-btn { padding: 0.3rem 0.65rem; border: none; background: transparent; border-radius: 6px; cursor: pointer; font-family: inherit; font-size: 0.78rem; color: var(--ink-soft); font-weight: 600; transition: all 0.2s; }
.lang-btn.active { background: var(--blue); color: white; }
.top-user { display: flex; align-items: center; gap: 0.7rem; font-size: 0.85rem; }
.top-user .avatar { width: 36px; height: 36px; background: linear-gradient(135deg, var(--blue-soft), var(--blue-pale)); border: 2px solid var(--blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--blue-deep); }
.top-user-info .name { font-weight: 600; color: var(--ink); }
.top-user-info .role { font-size: 0.75rem; color: var(--ink-faint); }
.logout-btn { margin-left: 0.3rem; padding: 0.4rem 0.8rem; background: transparent; border: 1px solid var(--line-strong); border-radius: 8px; font-family: inherit; font-size: 0.8rem; color: var(--ink-soft); cursor: pointer; transition: all 0.2s; }
.logout-btn:hover { border-color: var(--red); color: var(--red); }
main { position: relative; min-height: calc(100vh - 70px); }
.view { display: none; }
.view.active { display: block; animation: fadeIn 0.3s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.landing { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
.landing-hero { display: grid; grid-template-columns: 1.1fr 1fr; gap: 3rem; align-items: center; }
.eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--blue); padding: 0.35rem 0.85rem; background: var(--blue-pale); border-radius: 999px; margin-bottom: 1.5rem; font-weight: 500; }
.eyebrow::before { content: ''; width: 6px; height: 6px; background: var(--blue); border-radius: 50%; animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.4); } }
.landing h1 { font-family: 'Fraunces', serif; font-weight: 400; font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 1.5rem; }
html[lang="th"] .landing h1 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 300; letter-spacing: -0.01em; }
.landing h1 em { font-style: italic; font-weight: 300; color: var(--blue); }
html[lang="th"] .landing h1 em { font-style: normal; font-weight: 500; }
.landing .lede { font-size: 1.1rem; color: var(--ink-soft); margin-bottom: 2rem; max-width: 48ch; }
.cta-row { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
.btn-primary { padding: 0.9rem 2rem; background: var(--blue); color: white; border: none; border-radius: 10px; font-family: inherit; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3); }
.btn-primary:hover { background: var(--blue-deep); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4); }
.btn-ghost { padding: 0.9rem 1.5rem; background: transparent; color: var(--ink); border: 1px solid var(--line-strong); border-radius: 10px; font-family: inherit; font-size: 1rem; font-weight: 500; cursor: pointer; transition: all 0.2s; }
.btn-ghost:hover { border-color: var(--blue); color: var(--blue); }
.mascot-hero { display: flex; align-items: center; justify-content: center; position: relative; }
.mascot-bubble { position: absolute; top: 20px; left: 0; background: white; padding: 1rem 1.3rem; border-radius: 18px 18px 18px 4px; box-shadow: var(--shadow-md); max-width: 220px; font-size: 0.9rem; color: var(--ink-soft); border: 1px solid var(--line); animation: floatBubble 4s ease-in-out infinite; }
@keyframes floatBubble { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.features { max-width: 1200px; margin: 5rem auto 0; padding: 0 2rem; }
.section-title { font-family: 'Fraunces', serif; font-size: 2rem; font-weight: 400; margin-bottom: 2.5rem; text-align: center; letter-spacing: -0.02em; }
html[lang="th"] .section-title { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 500; }
.section-title em { font-style: italic; color: var(--blue); }
html[lang="th"] .section-title em { font-style: normal; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.feature-card { background: var(--bg-card); border: 1px solid var(--line); border-radius: 20px; padding: 2rem; transition: all 0.3s; }
.feature-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--blue-soft); }
.feature-icon { width: 48px; height: 48px; background: var(--blue-pale); color: var(--blue); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 1rem; }
.feature-card h3 { font-family: 'Fraunces', serif; font-size: 1.3rem; font-weight: 500; margin-bottom: 0.5rem; }
html[lang="th"] .feature-card h3 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.feature-card p { color: var(--ink-soft); font-size: 0.92rem; }
.modal-overlay { display: none; position: fixed; inset: 0; background: rgba(15, 30, 58, 0.6); backdrop-filter: blur(6px); z-index: 100; align-items: center; justify-content: center; padding: 2rem; }
.modal-overlay.show { display: flex; animation: fadeIn 0.2s ease; }
.modal { background: white; border-radius: 20px; max-width: 680px; width: 100%; max-height: 90vh; overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-lg); }
.modal-header { padding: 1.5rem 2rem 1rem; border-bottom: 1px solid var(--line); }
.modal-header h2 { font-family: 'Fraunces', serif; font-weight: 500; font-size: 1.6rem; margin-bottom: 0.3rem; letter-spacing: -0.02em; }
html[lang="th"] .modal-header h2 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.modal-header .sub { color: var(--ink-soft); font-size: 0.9rem; }
.modal-body { padding: 1.5rem 2rem; overflow-y: auto; flex: 1; }
.consent-section { margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--line); }
.consent-section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.consent-section h4 { display: flex; align-items: center; gap: 0.5rem; font-family: 'Fraunces', serif; font-weight: 500; font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--ink); }
html[lang="th"] .consent-section h4 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.consent-section .icon-badge { width: 28px; height: 28px; background: var(--blue-pale); color: var(--blue); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.9rem; }
.consent-section p { color: var(--ink-soft); font-size: 0.9rem; line-height: 1.65; margin-left: 2.25rem; }
.consent-section ul { margin-left: 2.25rem; color: var(--ink-soft); font-size: 0.9rem; }
.consent-section ul li { padding: 0.2rem 0; list-style: none; padding-left: 1.2rem; position: relative; }
.consent-section ul li::before { content: '→'; position: absolute; left: 0; color: var(--blue); font-weight: 600; }
.checkbox-row { display: flex; align-items: flex-start; gap: 0.7rem; padding: 0.8rem 1rem; background: var(--blue-pale); border-radius: 10px; margin-bottom: 0.6rem; cursor: pointer; transition: background 0.2s; }
.checkbox-row:hover { background: var(--blue-soft); }
.checkbox-row input[type="checkbox"] { margin-top: 0.2rem; width: 18px; height: 18px; accent-color: var(--blue); cursor: pointer; }
.checkbox-row label { font-size: 0.88rem; color: var(--ink); cursor: pointer; flex: 1; }
.checkbox-row label strong { display: block; margin-bottom: 0.2rem; }
.modal-footer { padding: 1rem 2rem; border-top: 1px solid var(--line); display: flex; gap: 0.75rem; justify-content: flex-end; background: var(--bg-soft); }
.btn-cancel { padding: 0.7rem 1.4rem; background: transparent; border: 1px solid var(--line-strong); border-radius: 10px; font-family: inherit; font-size: 0.9rem; cursor: pointer; color: var(--ink-soft); font-weight: 500; }
.btn-cancel:hover { border-color: var(--red); color: var(--red); }
.btn-agree { padding: 0.7rem 1.6rem; background: var(--blue); border: none; color: white; border-radius: 10px; font-family: inherit; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.btn-agree:hover:not(:disabled) { background: var(--blue-deep); }
.btn-agree:disabled { opacity: 0.4; cursor: not-allowed; }
.login-page { min-height: calc(100vh - 70px); display: flex; align-items: center; justify-content: center; padding: 2rem; }
.login-card { background: var(--bg-card); padding: 3rem; border-radius: 24px; box-shadow: var(--shadow-lg); width: 100%; max-width: 440px; border: 1px solid var(--line); }
.login-card h2 { font-family: 'Fraunces', serif; font-size: 2rem; font-weight: 500; margin-bottom: 0.4rem; letter-spacing: -0.02em; }
html[lang="th"] .login-card h2 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.login-card .sub { color: var(--ink-soft); margin-bottom: 2rem; font-size: 0.95rem; }
.form-group { margin-bottom: 1.2rem; }
.form-group label { display: block; font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 0.4rem; font-weight: 500; }
.form-group input { width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--line-strong); border-radius: 10px; font-family: inherit; font-size: 0.95rem; outline: none; transition: all 0.2s; background: var(--bg); color: var(--ink); }
.form-group input:focus { border-color: var(--blue); background: white; box-shadow: 0 0 0 3px var(--blue-pale); }
.login-error { background: var(--red-soft); color: var(--red); padding: 0.7rem 1rem; border-radius: 8px; font-size: 0.85rem; margin-bottom: 1rem; display: none; }
.login-error.show { display: block; }
.btn-submit { width: 100%; padding: 0.9rem; background: var(--blue); color: white; border: none; border-radius: 10px; font-family: inherit; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.btn-submit:hover { background: var(--blue-deep); }
.test-creds { margin-top: 1.5rem; padding: 1rem; background: var(--blue-pale); border-radius: 10px; font-size: 0.78rem; color: var(--ink-soft); border: 1px dashed var(--blue-soft); }
.test-creds strong { color: var(--blue-deep); display: block; margin-bottom: 0.35rem; }
.test-creds code { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; background: white; padding: 0.1rem 0.3rem; border-radius: 3px; color: var(--blue-deep); }
.emp-app { max-width: 1200px; margin: 0 auto; padding: 2rem; display: grid; grid-template-columns: 240px 1fr; gap: 2rem; }
.side-nav { display: flex; flex-direction: column; gap: 0.3rem; position: sticky; top: 100px; align-self: flex-start; }
.side-nav-btn { text-align: left; padding: 0.75rem 1rem; background: transparent; border: none; border-radius: 10px; font-family: inherit; font-size: 0.95rem; color: var(--ink-soft); cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 0.7rem; font-weight: 500; }
.side-nav-btn:hover { background: var(--blue-pale); color: var(--blue); }
.side-nav-btn.active { background: var(--blue); color: white; }
.side-nav-btn .icon { font-size: 1.1rem; }
.emp-content { min-height: 600px; }
.emp-tab { display: none; }
.emp-tab.active { display: block; animation: fadeIn 0.3s ease; }
.chat-layout { display: grid; grid-template-columns: 260px 1fr; gap: 1rem; height: 75vh; min-height: 600px; }
.chat-sessions { background: var(--bg-card); border: 1px solid var(--line); border-radius: 16px; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.3rem; }
.chat-sessions-header { display: flex; justify-content: space-between; align-items: center; padding: 0 0.3rem 0.8rem; border-bottom: 1px solid var(--line); margin-bottom: 0.5rem; }
.chat-sessions-header h4 { font-family: 'Fraunces', serif; font-size: 0.95rem; font-weight: 500; }
html[lang="th"] .chat-sessions-header h4 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.btn-new-chat { padding: 0.3rem 0.6rem; font-size: 0.78rem; background: var(--blue); color: white; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; font-weight: 500; }
.session-row { padding: 0.65rem 0.75rem; border-radius: 8px; cursor: pointer; transition: background 0.2s; font-size: 0.85rem; border: 1px solid transparent; position: relative; }
.session-row:hover { background: var(--blue-pale); }
.session-row.active { background: var(--blue-pale); border-color: var(--blue-soft); }
.session-row .s-title { font-weight: 500; color: var(--ink); margin-bottom: 0.15rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-right: 18px; }
.session-row .s-meta { font-size: 0.72rem; color: var(--ink-faint); font-family: 'JetBrains Mono', monospace; }
.session-row .s-delete { position: absolute; top: 0.5rem; right: 0.5rem; background: transparent; border: none; color: var(--ink-faint); cursor: pointer; font-size: 0.85rem; opacity: 0; transition: opacity 0.2s; padding: 0.2rem 0.4rem; }
.session-row:hover .s-delete { opacity: 1; }
.session-row .s-delete:hover { color: var(--red); }
.session-row.empty { text-align: center; color: var(--ink-faint); font-size: 0.8rem; padding: 1.5rem 0.5rem; font-style: italic; cursor: default; }
.session-row.empty:hover { background: transparent; }
.chat-card { background: var(--bg-card); border: 1px solid var(--line); border-radius: 20px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; overflow: hidden; }
.chat-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--line); display: flex; align-items: center; gap: 0.9rem; background: linear-gradient(to bottom, var(--blue-pale), white); }
.chat-avatar { width: 44px; height: 44px; background: linear-gradient(135deg, var(--blue), var(--sky)); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3); }
.chat-title { font-family: 'Fraunces', serif; font-size: 1.2rem; font-weight: 500; }
html[lang="th"] .chat-title { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.chat-status { font-size: 0.78rem; color: var(--green); display: flex; align-items: center; gap: 0.4rem; }
.chat-status::before { content: ''; width: 7px; height: 7px; background: var(--green); border-radius: 50%; box-shadow: 0 0 0 3px var(--green-soft); }
.chat-phase-tag { margin-left: auto; padding: 0.3rem 0.7rem; background: var(--purple-soft); color: var(--purple); border-radius: 999px; font-size: 0.7rem; font-family: 'JetBrains Mono', monospace; font-weight: 600; letter-spacing: 0.05em; }
.chat-messages { flex: 1; overflow-y: auto; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; scroll-behavior: smooth; background: var(--bg-soft); }
.chat-messages::-webkit-scrollbar { width: 6px; }
.chat-messages::-webkit-scrollbar-thumb { background: var(--line-strong); border-radius: 3px; }
.msg { max-width: 78%; padding: 0.8rem 1.1rem; border-radius: 18px; font-size: 0.95rem; line-height: 1.55; animation: msgIn 0.3s ease; white-space: pre-wrap; word-wrap: break-word; }
@keyframes msgIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.msg.user { background: var(--blue); color: white; align-self: flex-end; border-bottom-right-radius: 4px; box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2); }
.msg.ai { background: white; color: var(--ink); align-self: flex-start; border-bottom-left-radius: 4px; box-shadow: var(--shadow-sm); border: 1px solid var(--line); }
.msg.error { background: var(--red-soft); color: var(--red); align-self: flex-start; }
.typing { display: inline-flex; gap: 4px; padding: 0.3rem 0; }
.typing span { width: 8px; height: 8px; background: var(--blue); border-radius: 50%; animation: typing 1.4s ease-in-out infinite; }
.typing span:nth-child(2) { animation-delay: 0.2s; }
.typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes typing { 0%,60%,100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-6px); opacity: 1; } }
.quick-chips { display: flex; gap: 0.5rem; flex-wrap: wrap; padding: 0.75rem 1.5rem; background: white; border-top: 1px solid var(--line); }
.chip { padding: 0.4rem 0.9rem; background: var(--blue-pale); border: 1px solid var(--blue-soft); border-radius: 999px; font-family: inherit; font-size: 0.78rem; color: var(--blue-deep); cursor: pointer; transition: all 0.2s; font-weight: 500; }
.chip:hover { background: var(--blue); color: white; border-color: var(--blue); }
.chat-input { padding: 1rem 1.25rem; display: flex; gap: 0.75rem; align-items: flex-end; background: white; border-top: 1px solid var(--line); }
.chat-input textarea { flex: 1; border: 1px solid var(--line-strong); background: var(--bg); border-radius: 12px; padding: 0.75rem 1rem; font-family: inherit; font-size: 0.95rem; resize: none; min-height: 44px; max-height: 120px; outline: none; color: var(--ink); transition: all 0.2s; }
.chat-input textarea:focus { border-color: var(--blue); background: white; box-shadow: 0 0 0 3px var(--blue-pale); }
.btn-send { background: var(--blue); color: white; border: none; border-radius: 12px; padding: 0 1.5rem; height: 44px; font-family: inherit; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; }
.btn-send:hover:not(:disabled) { background: var(--blue-deep); }
.btn-send:disabled { opacity: 0.4; cursor: not-allowed; }
.page-header { margin-bottom: 2rem; }
.page-header h2 { font-family: 'Fraunces', serif; font-size: 2rem; font-weight: 400; letter-spacing: -0.02em; }
html[lang="th"] .page-header h2 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 500; }
.page-header .sub { color: var(--ink-soft); margin-top: 0.3rem; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
.stat-card { background: var(--bg-card); border: 1px solid var(--line); border-radius: 16px; padding: 1.25rem 1.5rem; box-shadow: var(--shadow-sm); }
.stat-label { font-size: 0.78rem; color: var(--ink-faint); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem; font-weight: 500; }
.stat-value { font-family: 'Fraunces', serif; font-size: 2.2rem; font-weight: 500; line-height: 1; }
.stat-delta { font-size: 0.78rem; font-family: 'JetBrains Mono', monospace; margin-top: 0.5rem; }
.stat-delta.up { color: var(--green); }
.stat-delta.down { color: var(--red); }
.panel-grid-2 { display: grid; grid-template-columns: 1.3fr 1fr; gap: 1.25rem; margin-bottom: 1.5rem; }
.panel { background: var(--bg-card); border: 1px solid var(--line); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm); }
.panel h3 { font-family: 'Fraunces', serif; font-weight: 500; font-size: 1.15rem; margin-bottom: 0.3rem; }
html[lang="th"] .panel h3 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.panel .sub { font-size: 0.78rem; color: var(--ink-faint); margin-bottom: 1.2rem; }
.line-chart-wrap { height: 220px; position: relative; }
.line-chart-wrap svg { width: 100%; height: 100%; }
.hr-dash { max-width: 1400px; margin: 0 auto; padding: 2rem; }
.hr-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
.hr-header h2 { font-family: 'Fraunces', serif; font-weight: 400; font-size: 2.2rem; letter-spacing: -0.02em; line-height: 1.1; }
html[lang="th"] .hr-header h2 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 500; }
.hr-header h2 em { font-style: italic; color: var(--blue); }
html[lang="th"] .hr-header h2 em { font-style: normal; }
.hr-header .sub { color: var(--ink-soft); margin-top: 0.3rem; font-size: 0.95rem; }
.hr-meta { text-align: right; font-size: 0.82rem; color: var(--ink-faint); }
.hr-meta strong { color: var(--ink); font-weight: 600; }
.filter-bar { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.filter-bar select { padding: 0.55rem 1rem; border: 1px solid var(--line-strong); background: white; border-radius: 10px; font-family: inherit; font-size: 0.88rem; color: var(--ink); cursor: pointer; outline: none; }
.filter-bar select:focus { border-color: var(--blue); }
.kpi-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
.kpi-card { background: var(--bg-card); border: 1px solid var(--line); border-radius: 14px; padding: 1.1rem 1.3rem; box-shadow: var(--shadow-sm); position: relative; overflow: hidden; }
.kpi-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue); }
.kpi-card.urgent::before { background: var(--red); }
.kpi-card.warning::before { background: var(--yellow); }
.kpi-card.good::before { background: var(--green); }
.kpi-card .k-label { font-size: 0.72rem; color: var(--ink-faint); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.3rem; font-weight: 600; }
.kpi-card .k-value { font-family: 'Fraunces', serif; font-size: 2rem; font-weight: 500; line-height: 1; }
.kpi-card .k-delta { font-size: 0.75rem; font-family: 'JetBrains Mono', monospace; margin-top: 0.4rem; }
.k-delta.up { color: var(--red); }
.k-delta.down { color: var(--green); }
.dash-row { display: grid; grid-template-columns: 2fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem; }
.dash-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem; }
.bar-chart { display: flex; align-items: flex-end; gap: 3px; height: 200px; padding-bottom: 24px; position: relative; }
.bar-stack { flex: 1; display: flex; flex-direction: column-reverse; gap: 2px; position: relative; cursor: pointer; }
.bar-seg { border-radius: 2px; transition: opacity 0.2s; }
.bar-seg.low { background: var(--green); }
.bar-seg.med { background: var(--yellow); }
.bar-seg.high { background: var(--red); }
.bar-stack:hover .bar-seg { opacity: 0.7; }
.bar-stack::after { content: attr(data-label); position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); font-size: 0.7rem; color: var(--ink-faint); font-family: 'JetBrains Mono', monospace; }
.legend { display: flex; gap: 1.2rem; margin-top: 1rem; font-size: 0.78rem; color: var(--ink-soft); flex-wrap: wrap; }
.legend-item { display: flex; align-items: center; gap: 0.4rem; }
.dot { width: 10px; height: 10px; border-radius: 3px; }
.dot.low { background: var(--green); }
.dot.med { background: var(--yellow); }
.dot.high { background: var(--red); }
.alert-list { display: flex; flex-direction: column; gap: 0.75rem; max-height: 380px; overflow-y: auto; padding-right: 0.3rem; }
.alert-list::-webkit-scrollbar { width: 5px; }
.alert-list::-webkit-scrollbar-thumb { background: var(--line-strong); border-radius: 3px; }
.alert-item { padding: 0.9rem 1rem; border-left: 3px solid var(--yellow); background: var(--yellow-soft); border-radius: 0 10px 10px 0; font-size: 0.85rem; }
.alert-item.level-3 { border-left-color: var(--red); background: var(--red-soft); }
.alert-item .alert-head { display: flex; justify-content: space-between; margin-bottom: 0.3rem; }
.alert-item .alert-head strong { font-weight: 600; color: var(--ink); }
.alert-item .alert-time { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--ink-faint); }
.alert-item p { color: var(--ink-soft); font-size: 0.82rem; }
.alert-action { margin-top: 0.6rem; display: flex; gap: 0.5rem; flex-wrap: wrap; }
.alert-action button { padding: 0.3rem 0.75rem; border: 1px solid var(--line-strong); background: white; border-radius: 6px; font-family: inherit; font-size: 0.75rem; cursor: pointer; color: var(--ink); font-weight: 500; }
.alert-action button.primary { background: var(--blue); color: white; border-color: var(--blue); }
.heatmap { display: flex; flex-direction: column; gap: 0.3rem; }
.heatmap-row { display: grid; grid-template-columns: 110px 1fr; align-items: center; gap: 0.6rem; font-size: 0.82rem; }
.heatmap-row .team { color: var(--ink-soft); font-weight: 500; }
.heatmap-cells { display: grid; grid-template-columns: repeat(14, 1fr); gap: 2px; }
.heatmap-cell { height: 22px; border-radius: 3px; transition: transform 0.15s; cursor: pointer; }
.heatmap-cell:hover { transform: scale(1.2); z-index: 5; }
.heatmap-scale { display: flex; align-items: center; gap: 0.4rem; margin-top: 0.8rem; font-size: 0.7rem; color: var(--ink-faint); }
.heatmap-scale-bar { display: flex; gap: 1px; }
.heatmap-scale-bar div { width: 14px; height: 10px; border-radius: 2px; }
.employee-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.employee-table th { text-align: left; padding: 0.7rem 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-faint); border-bottom: 1px solid var(--line); font-weight: 600; }
.employee-table td { padding: 0.8rem 0.75rem; border-bottom: 1px solid var(--line); color: var(--ink-soft); }
.employee-table tr:hover td { background: var(--blue-pale); cursor: pointer; }
.mh-score { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1rem; }
.mh-score.score-low { color: var(--red); }
.mh-score.score-med { color: var(--yellow); }
.mh-score.score-high { color: var(--green); }
.trend-arrow { font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; }
.trend-arrow.up { color: var(--green); }
.trend-arrow.down { color: var(--red); }
.trend-arrow.flat { color: var(--ink-faint); }
.topic-row { display: grid; grid-template-columns: 110px 1fr 45px; gap: 0.75rem; align-items: center; font-size: 0.82rem; padding: 0.35rem 0; }
.topic-row .name { color: var(--ink-soft); font-weight: 500; }
.topic-row .track { height: 6px; background: var(--bg-soft); border-radius: 3px; overflow: hidden; }
.topic-row .fill { height: 100%; background: linear-gradient(to right, var(--blue), var(--sky)); border-radius: 3px; }
.topic-row .val { text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--ink); font-weight: 500; }
.rca-list { display: flex; flex-direction: column; gap: 0.8rem; }
.rca-card { padding: 0.9rem 1.1rem; background: var(--blue-pale); border-left: 3px solid var(--blue); border-radius: 0 10px 10px 0; font-size: 0.85rem; }
.rca-card strong { display: block; color: var(--blue-deep); margin-bottom: 0.25rem; font-size: 0.88rem; }
.rca-card p { color: var(--ink-soft); }
.rca-card .action-btn { margin-top: 0.5rem; padding: 0.3rem 0.7rem; background: white; border: 1px solid var(--blue); color: var(--blue); border-radius: 6px; font-family: inherit; font-size: 0.75rem; cursor: pointer; font-weight: 500; }
.assess-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.assess-metric { padding: 1rem; background: var(--bg-soft); border-radius: 10px; }
.assess-metric .label { font-size: 0.72rem; color: var(--ink-faint); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; margin-bottom: 0.3rem; }
.assess-metric .scale-bar { height: 8px; background: var(--bg); border-radius: 4px; overflow: hidden; margin-top: 0.5rem; position: relative; }
.assess-metric .scale-fill { height: 100%; border-radius: 4px; transition: width 0.6s; }
.assess-metric .score-text { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.4rem; }
.assess-metric .score-label { font-size: 0.78rem; color: var(--ink-soft); margin-top: 0.15rem; font-weight: 500; }
.mascot-fab { position: fixed; bottom: 24px; right: 24px; z-index: 80; cursor: grab; user-select: none; filter: drop-shadow(0 8px 20px rgba(37, 99, 235, 0.3)); transition: transform 0.2s; }
.mascot-fab:hover { transform: scale(1.08); }
.mascot-fab:active { cursor: grabbing; }
.mascot-fab.hidden { display: none; }
.mascot-svg { animation: mascotFloat 3s ease-in-out infinite; }
@keyframes mascotFloat { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-6px) rotate(2deg); } }
.mascot-tooltip { position: absolute; bottom: 110%; right: 0; background: var(--ink); color: white; padding: 0.5rem 0.8rem; border-radius: 8px; font-size: 0.8rem; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.2s; }
.mascot-tooltip::after { content: ''; position: absolute; top: 100%; right: 20px; border: 6px solid transparent; border-top-color: var(--ink); }
.mascot-fab:hover .mascot-tooltip { opacity: 1; }
.app-footer { max-width: 1400px; margin: 3rem auto 0; padding: 2rem; text-align: center; color: var(--ink-faint); font-size: 0.82rem; border-top: 1px solid var(--line); }
.app-footer em { font-family: 'Fraunces', serif; }
@media (max-width: 900px) {
  .landing-hero { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr; }
  .emp-app { grid-template-columns: 1fr; }
  .side-nav { flex-direction: row; overflow-x: auto; position: static; padding-bottom: 0.5rem; }
  .side-nav-btn { white-space: nowrap; }
  .chat-layout { grid-template-columns: 1fr; height: auto; }
  .chat-sessions { max-height: 200px; }
  .kpi-row { grid-template-columns: repeat(2, 1fr); }
  .dash-row, .dash-row-3 { grid-template-columns: 1fr; }
  .panel-grid-2 { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .topbar-inner { flex-wrap: wrap; gap: 1rem; }
  .top-nav { order: 3; width: 100%; overflow-x: auto; }
  .hr-header { flex-direction: column; gap: 1rem; align-items: flex-start; }
  .assess-grid { grid-template-columns: 1fr; }
  .sanctuary-layout { grid-template-columns: 1fr !important; }
}

/* ============ SANCTUARY / GAMIFICATION ============ */
.sanctuary-layout { display: grid; grid-template-columns: 1.3fr 1fr; gap: 1.25rem; margin-bottom: 1.5rem; }
.garden-panel { background: linear-gradient(180deg, #f0f9ff 0%, #ecfdf5 100%); border: 1px solid var(--line); border-radius: 20px; padding: 1.5rem; box-shadow: var(--shadow-sm); position: relative; overflow: hidden; min-height: 460px; }
.garden-panel::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 80px; background: linear-gradient(180deg, rgba(186, 230, 253, 0.5) 0%, transparent 100%); pointer-events: none; }
.garden-header { position: relative; z-index: 2; margin-bottom: 1rem; }
.garden-header h3 { font-family: 'Fraunces', serif; font-weight: 500; font-size: 1.2rem; margin-bottom: 0.2rem; }
html[lang="th"] .garden-header h3 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.garden-header .sub { font-size: 0.8rem; color: var(--ink-soft); }
.garden-stats { display: flex; gap: 1rem; margin-top: 0.8rem; flex-wrap: wrap; }
.garden-stat { background: rgba(255,255,255,0.7); backdrop-filter: blur(4px); border-radius: 10px; padding: 0.5rem 0.8rem; font-size: 0.78rem; color: var(--ink-soft); display: flex; align-items: center; gap: 0.35rem; border: 1px solid rgba(255,255,255,0.8); }
.garden-stat strong { color: var(--ink); font-family: 'Fraunces', serif; font-weight: 600; font-size: 1rem; }
.garden-canvas { position: relative; width: 100%; height: 320px; margin-top: 1rem; }
.garden-canvas svg { width: 100%; height: 100%; display: block; }
.garden-empty { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--ink-faint); text-align: center; padding: 2rem; font-size: 0.9rem; z-index: 3; pointer-events: none; }
.garden-empty .emoji { font-size: 2.5rem; margin-bottom: 0.5rem; opacity: 0.5; }
.sanctuary-side { display: flex; flex-direction: column; gap: 1.25rem; }
.vault-panel, .milestones-panel { background: var(--bg-card); border: 1px solid var(--line); border-radius: 16px; padding: 1.25rem 1.5rem; box-shadow: var(--shadow-sm); }
.vault-panel h3, .milestones-panel h3 { font-family: 'Fraunces', serif; font-weight: 500; font-size: 1.1rem; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.5rem; }
html[lang="th"] .vault-panel h3, html[lang="th"] .milestones-panel h3 { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }
.vault-panel .sub, .milestones-panel .sub { font-size: 0.78rem; color: var(--ink-faint); margin-bottom: 1rem; }
.vault-list { display: flex; flex-direction: column; gap: 0.6rem; max-height: 240px; overflow-y: auto; padding-right: 0.3rem; }
.vault-list::-webkit-scrollbar { width: 4px; }
.vault-list::-webkit-scrollbar-thumb { background: var(--line-strong); border-radius: 2px; }
.vault-item { padding: 0.7rem 0.9rem 0.7rem 1.5rem; background: linear-gradient(135deg, var(--blue-pale) 0%, #f0f9ff 100%); border-left: 3px solid var(--blue); border-radius: 0 10px 10px 0; font-size: 0.85rem; color: var(--ink); font-style: italic; position: relative; }
.vault-item::before { content: '"'; position: absolute; top: -4px; left: 8px; font-family: 'Fraunces', serif; font-size: 2rem; color: var(--blue); opacity: 0.3; line-height: 1; font-style: normal; }
.vault-item .v-date { display: block; font-style: normal; font-size: 0.7rem; color: var(--ink-faint); font-family: 'JetBrains Mono', monospace; margin-top: 0.4rem; }
.vault-empty { text-align: center; color: var(--ink-faint); font-size: 0.82rem; padding: 1.5rem 1rem; font-style: italic; }
.milestone-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.55rem 0; border-bottom: 1px solid var(--line); }
.milestone-item:last-child { border-bottom: none; }
.milestone-icon { font-size: 1.4rem; width: 32px; text-align: center; opacity: 0.35; transition: all 0.3s; filter: grayscale(0.5); }
.milestone-item.unlocked .milestone-icon { opacity: 1; filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.3)); }
.milestone-text { flex: 1; font-size: 0.82rem; color: var(--ink-faint); }
.milestone-item.unlocked .milestone-text { color: var(--ink); }
.milestone-text .m-title { font-weight: 500; display: block; margin-bottom: 0.1rem; }
.milestone-item.unlocked .m-title { color: var(--blue-deep); }
.milestone-badge { font-size: 0.68rem; font-family: 'JetBrains Mono', monospace; color: var(--ink-faint); padding: 0.15rem 0.5rem; background: var(--bg-soft); border-radius: 999px; }
.milestone-item.unlocked .milestone-badge { background: var(--purple-soft); color: var(--purple); }
@keyframes plantGrow { from { transform: scale(0) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
.breathe-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; background: white; border: 1px solid var(--blue-soft); border-radius: 999px; color: var(--blue-deep); font-family: inherit; font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.2s; margin-top: 0.8rem; position: relative; z-index: 3; }
.breathe-btn:hover { background: var(--blue); color: white; border-color: var(--blue); transform: translateY(-1px); }
.breathe-overlay { position: fixed; inset: 0; background: linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(14, 165, 233, 0.95)); z-index: 200; display: none; align-items: center; justify-content: center; flex-direction: column; color: white; }
.breathe-overlay.show { display: flex; animation: fadeIn 0.3s; }
.breathe-circle { width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,0.3), rgba(255,255,255,0.05)); border: 2px solid rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-size: 1.5rem; font-weight: 300; transition: transform 4s ease-in-out; }
.breathe-circle.inhale { transform: scale(1.5); }
.breathe-circle.exhale { transform: scale(1); }
.breathe-instruction { margin-top: 2rem; font-size: 1.2rem; font-family: 'Fraunces', serif; font-weight: 300; letter-spacing: 0.05em; min-height: 2rem; }
.breathe-close { position: absolute; top: 2rem; right: 2rem; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 0.5rem 1.2rem; border-radius: 999px; cursor: pointer; font-family: inherit; font-size: 0.85rem; backdrop-filter: blur(10px); }
.breathe-close:hover { background: rgba(255,255,255,0.25); }
.breathe-timer { position: absolute; bottom: 2rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; opacity: 0.7; }
.grow-toast { position: fixed; bottom: 100px; right: 24px; background: white; border: 1px solid var(--line); border-radius: 14px; padding: 0.8rem 1.2rem; box-shadow: var(--shadow-md); z-index: 90; opacity: 0; transform: translateX(20px); transition: all 0.4s ease; display: flex; align-items: center; gap: 0.6rem; max-width: 280px; font-size: 0.85rem; color: var(--ink-soft); pointer-events: none; }
.grow-toast.show { opacity: 1; transform: translateX(0); }
.grow-toast .t-icon { font-size: 1.4rem; }
.grow-toast .t-text strong { display: block; color: var(--ink); font-family: 'Fraunces', serif; font-weight: 500; }
html[lang="th"] .grow-toast .t-text strong { font-family: 'IBM Plex Sans Thai', sans-serif; font-weight: 600; }

