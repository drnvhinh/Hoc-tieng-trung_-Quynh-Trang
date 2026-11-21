'use strict';
/* =========================================================
 * Học HSK 3 — ứng dụng web tĩnh, lưu tiến độ trong trình duyệt.
 * ========================================================= */

/* ---------- tiện ích ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $('#app');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pad = n => String(n).padStart(2, '0');
const fmtTime = s => `${Math.floor(s / 60)}:${pad(Math.floor(s % 60))}`;

const store = {
  get(k, d) { try { const v = localStorage.getItem('hsk3:' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('hsk3:' + k, JSON.stringify(v)); } catch (e) { /* bộ nhớ bị chặn: bỏ qua */ } }
};
let srs = store.get('srs', {});          // id -> { b: hộp, d: ngày đến hạn, n: số lần, l: lần cuối }
let started = store.get('started', []); // các bài đã bắt đầu học
let gseen = store.get('gseen', {});     // thẻ ngữ pháp đã xem
let log = store.get('log', {});         // ngày -> { s: giây, n: số mục }
const settings = Object.assign({ minutes: 20, rate: 0.85, pinyin: true, remind: '20:00' }, store.get('settings', {}));
const saveSettings = () => store.set('settings', settings);

const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
const dayLabel = d => { const dt = new Date(d * 86400000); return ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][dt.getUTCDay()]; };

/* ---------- kho mục học ---------- */
const ITEMS = {};
const BY_LESSON = {};
const PUNCT = /^[，。？！、：；,.?!“”"…]+$/;
LESSONS.forEach(L => {
  const list = BY_LESSON[L.id] = [];
  const add = it => { it.lesson = L.id; ITEMS[it.id] = it; list.push(it); };
  L.words.forEach((w, i) => add({ id: `w${L.id}-${i}`, type: 'word', h: w[0], p: w[1], v: w[2], hv: w[3] || '', ex: (window.EXAMPLES || {})[w[0]] || null }));
  L.sentences.forEach((s, i) => {
    const tokens = s[0].split(/\s+/).filter(Boolean);
    add({ id: `s${L.id}-${i}`, type: 'sent', tokens, zh: tokens.join(''), py: s[1], vi: s[2] });
  });
  L.qa.forEach((q, i) => add({ id: `q${L.id}-${i}`, type: 'qa', q: q[0], qpy: q[1], qvi: q[2], a: q[3] }));
  L.grammar.forEach((g, gi) => g.tasks.forEach((t, k) => add({
    id: `t${L.id}-${gi}-${k}`, type: 'task', g: gi, name: g.name, pattern: g.pattern, vi: t.vi, re: t.re, sample: t.sample
  })));
});
const lessonById = id => LESSONS.find(L => L.id === id);

/* ---------- lặp lại ngắt quãng ---------- */
const IV = [0, 1, 2, 4, 7, 15, 30, 60, 120]; // số ngày giãn cách theo hộp
function grade(id, g) {
  const t = today();
  const r = srs[id] || { b: 0, d: t, n: 0 };
  if (g === 0) { r.b = 0; r.d = t; }
  else if (g === 1) { r.b = Math.max(1, r.b); r.d = t + 1; }
  else { r.b = Math.min(IV.length - 1, r.b + (g === 3 ? 2 : 1)); r.d = t + IV[r.b]; }
  r.n = (r.n || 0) + 1; r.l = t;
  srs[id] = r; store.set('srs', srs);
}
function dueItems() {
  const t = today();
  return Object.keys(srs)
    .filter(id => ITEMS[id] && srs[id].d <= t && started.includes(ITEMS[id].lesson))
    .map(id => ITEMS[id])
    .sort((a, b) => srs[a.id].d - srs[b.id].d || srs[a.id].b - srs[b.id].b);
}
function lessonProgress(id) {
  const list = BY_LESSON[id];
  return {
    total: list.length,
    seen: list.filter(i => srs[i.id]).length,
    known: list.filter(i => srs[i.id] && srs[i.id].b >= 2).length
  };
}
function addLog(sec, n) {
  const t = today(); const d = log[t] || { s: 0, n: 0 };
  d.s += Math.round(sec); d.n += n; log[t] = d; store.set('log', log);
}
function streak() {
  let t = today(); if (!log[t]) t--;
  let s = 0; while (log[t] && log[t].n > 0) { s++; t--; }
  return s;
}

/* ---------- đọc (TTS) ---------- */
let zhVoice = null;
function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  const vs = speechSynthesis.getVoices();
  zhVoice = vs.find(v => /zh[-_]CN/i.test(v.lang) && /Xiaoxiao|Tingting|Ting-Ting|Huihui|Google/i.test(v.name))
    || vs.find(v => /zh[-_]CN/i.test(v.lang)) || vs.find(v => /^zh/i.test(v.lang)) || null;
}
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function say(text, rate) {
  return new Promise(res => {
    if (!('speechSynthesis' in window) || !text) return res();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/\s+/g, ''));
    u.lang = 'zh-CN'; if (zhVoice) u.voice = zhVoice;
    u.rate = rate || settings.rate;
    u.onend = res; u.onerror = res;
    speechSynthesis.speak(u);
  });
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b) { e.preventDefault(); say(b.dataset.say, b.dataset.rate ? +b.dataset.rate : undefined); }
});
const sayBtn = (t, label = '🔊') => `<button class="btn icon" type="button" data-say="${esc(t)}" aria-label="Nghe">${label}</button>`;
const slowBtn = t => `<button class="btn icon" type="button" data-say="${esc(t)}" data-rate="0.55" aria-label="Nghe chậm">🐢</button>`;

/* ---------- nhận giọng nói ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null;
function stopListening() { if (rec) { try { rec.abort(); } catch (e) { /* đã dừng */ } rec = null; } }
function listen(onText) {
  return new Promise((resolve, reject) => {
    if (!SR) return reject('unsupported');
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    const r = new SR(); rec = r;
    r.lang = 'zh-CN'; r.interimResults = true; r.continuous = false; r.maxAlternatives = 1;
    let text = '';
    r.onresult = e => { text = [...e.results].map(x => x[0].transcript).join(''); if (onText) onText(text); };
    r.onerror = e => { rec = null; if (e.error === 'no-speech' || e.error === 'aborted') resolve(text); else reject(e.error); };
    r.onend = () => { rec = null; resolve(text); };
    try { r.start(); } catch (err) { reject(String(err)); }
  });
}

/* Ô trả lời: micro + gõ phím */
function answerBox(onSubmit, placeholder = '…hoặc gõ câu trả lời bằng bàn phím tiếng Trung') {
  const el = document.createElement('div');
  el.innerHTML = `
    ${SR
      ? `<button class="mic" type="button" aria-label="Bấm để nói">🎤</button>
         <div class="heard muted small">Bấm micro rồi nói tiếng Trung</div>`
      : `<div class="tip">Trình duyệt này chưa nhận được giọng nói (nên dùng Chrome trên Android/máy tính). Hãy <b>nói to</b> câu trả lời, rồi gõ lại hoặc bấm “Xem đáp án”.</div>`}
    <div class="row" style="margin-top:10px;flex-wrap:nowrap">
      <input class="txt" placeholder="${esc(placeholder)}" autocomplete="off" lang="zh-CN">
      <button class="btn" type="button" data-act="typed">OK</button>
    </div>`;
  const mic = $('.mic', el), heard = $('.heard', el), input = $('input', el);
  let busy = false;
  if (mic) mic.onclick = async () => {
    if (busy) { stopListening(); return; }
    busy = true; mic.classList.add('on');
    heard.textContent = 'Đang nghe… (nói xong sẽ tự dừng)'; heard.classList.remove('muted', 'small');
    try {
      const t = await listen(x => { heard.textContent = x; });
      if (t) onSubmit(t, 'voice');
      else { heard.textContent = 'Chưa nghe rõ, bấm micro để thử lại nhé.'; }
    } catch (err) {
      heard.textContent = err === 'not-allowed' || err === 'service-not-allowed'
        ? 'Chưa được phép dùng micro. Hãy cho phép micro cho trang này.'
        : 'Không dùng được micro (' + err + '). Có thể gõ câu trả lời.';
    } finally { busy = false; mic.classList.remove('on'); }
  };
  const sub = () => { const v = input.value.trim(); if (v) onSubmit(v, 'typed'); };
  $('[data-act=typed]', el).onclick = sub;
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) sub(); });
  return el;
}

/* ---------- so sánh câu ---------- */
const DIG = '零一二三四五六七八九';
function numZh(str) {
  const n = parseInt(str, 10);
  if (isNaN(n) || n > 99999) return str;
  if (n < 10) return DIG[n];
  const U = ['', '十', '百', '千', '万'];
  const ds = String(n).split('').map(Number); const len = ds.length;
  let s = '', zero = false;
  ds.forEach((x, i) => {
    const p = len - 1 - i;
    if (x === 0) zero = true;
    else { if (zero && s) s += '零'; zero = false; s += DIG[x] + U[p]; }
  });
  if (s.startsWith('一十')) s = s.slice(1);
  return s;
}
const clean = s => s.replace(/[\s\p{P}\p{S}a-zA-Z]/gu, '').replace(/儿/g, '');
const norm = s => clean(String(s).replace(/\d+/g, m => numZh(m)));
const normDigits = s => clean(String(s).replace(/\d/g, d => DIG[+d]));
function lcsLen(a, b) {
  const dp = new Array(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i++) {
    let prev = 0;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev + 1 : Math.max(dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[b.length];
}
function similarity(said, target) {
  const t = norm(target); let best = 0;
  for (const s of [norm(said), normDigits(said)]) {
    if (s.length && t.length) best = Math.max(best, lcsLen(s, t) / Math.max(s.length, t.length));
  }
  return best;
}
/* Tô đậm những chữ trong đáp án mà người học nói thiếu/sai */
function diffHtml(said, target) {
  const a = norm(said), b = norm(target), m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
    dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  const keep = new Array(n).fill(false);
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) { keep[j - 1] = true; i--; j--; }
    else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
  }
  return [...b].map((c, k) => keep[k] ? esc(c) : `<b>${esc(c)}</b>`).join('');
}
function resultHtml(sim) {
  if (sim >= 0.9) return `<div class="result good">Rất tốt! Giống ${Math.round(sim * 100)}%</div>`;
  if (sim >= 0.65) return `<div class="result mid">Gần đúng — ${Math.round(sim * 100)}%. Xem chữ tô đỏ bên dưới.</div>`;
  return `<div class="result bad">Chưa đúng — ${Math.round(sim * 100)}%. Nghe mẫu và nói lại nhé.</div>`;
}

/* ---------- xây dựng buổi học theo thời lượng ---------- */
const SECS = { intro: 45, flash: 15, listen: 35, speak: 45, order: 30, qa: 60, pattern: 75, grammar: 60 };
function kindFor(it, isNew) {
  if (it.type === 'word') return isNew ? 'intro' : 'flash';
  if (it.type === 'sent') {
    if (isNew) return 'listen';
    const b = srs[it.id] ? srs[it.id].b : 0;
    return Math.random() < (b <= 1 ? 0.4 : 0.2) ? 'order' : 'speak';
  }
  if (it.type === 'qa') return 'qa';
  return 'pattern';
}
function currentLesson() {
  return started.slice().sort((a, b) => a - b).find(id => BY_LESSON[id].some(i => !srs[i.id])) || null;
}
function nextLesson() {
  return (LESSONS.find(L => !started.includes(L.id)) || {}).id || null;
}
/* Gồm 3 phần: Khởi động (ôn từ) → Bài mới → Luyện nói (ôn câu, hỏi đáp, đặt câu). */
function buildSession({ lessonId = null, minutes = settings.minutes } = {}) {
  const budget = minutes * 60;
  let used = 0;
  const warm = [], fresh = [], speak = [];
  const taken = new Set();
  const push = (arr, step) => { arr.push(step); used += SECS[step.kind]; if (step.it) taken.add(step.it.id); };
  const addReview = it => push(it.type === 'word' ? warm : speak, { it, kind: kindFor(it, false) });

  // 1) Ôn bài cũ (ưu tiên mục đến hạn lâu nhất)
  const due = dueItems();
  const reviewCap = budget * (lessonId ? 0.3 : 0.65);
  for (const it of due) { if (used >= reviewCap) break; addReview(it); }

  // 2) Nội dung mới của bài
  const target = lessonId || currentLesson();
  if (target) {
    const L = lessonById(target);
    let grammarDone = false;
    for (const it of BY_LESSON[target].filter(i => !srs[i.id])) {
      if (used >= budget) break;
      if (!grammarDone && it.type !== 'word') {
        grammarDone = true;
        L.grammar.forEach((g, gi) => { if (!gseen[`${target}-${gi}`]) push(fresh, { kind: 'grammar', L, gi }); });
      }
      push(fresh, { it, kind: kindFor(it, true), isNew: true });
    }
  }

  // 3) Còn thời gian: ôn thêm mục đến hạn, rồi luyện thêm mục đã học (yếu nhất trước)
  for (const it of due) { if (used >= budget) break; if (!taken.has(it.id)) addReview(it); }
  if (used < budget) {
    const extra = Object.keys(srs).map(id => ITEMS[id])
      .filter(it => it && started.includes(it.lesson) && !taken.has(it.id) && it.type !== 'word')
      .sort((a, b) => srs[a.id].b - srs[b.id].b || srs[a.id].l - srs[b.id].l);
    for (const it of extra) { if (used >= budget) break; push(speak, { it, kind: kindFor(it, false), extra: true }); }
  }

  const tag = (arr, stage) => arr.map(s => Object.assign(s, { stage }));
  const steps = [
    ...tag(shuffle(warm), 'Khởi động · ôn từ'),
    ...tag(fresh, target ? `Bài ${target} · mới` : 'Bài mới'),
    ...tag(shuffle(speak), 'Luyện nói · ôn câu')
  ];
  return { steps, target, est: Math.round(used / 60), nReview: warm.length + speak.length, nNew: fresh.filter(s => s.it).length };
}

/* ---------- chạy buổi học ---------- */
let S = null;
let tick = null;
function startSession(plan, title) {
  if (!plan.steps.length) { alert('Chưa có gì để luyện. Hãy bắt đầu một bài học trước nhé!'); return; }
  if (plan.target && !started.includes(plan.target)) { started.push(plan.target); store.set('started', started); }
  S = { steps: plan.steps, i: 0, title, t0: Date.now(), done: 0, right: 0, logged: false };
  if (location.hash === '#/phien') route();
  else if (location.hash.startsWith('#/luyen/')) location.replace('#/phien'); // nút Back không mở lại phiên
  else location.hash = '#/phien';
}
function logSession() {
  if (S && !S.logged) { S.logged = true; if (S.done) addLog((Date.now() - S.t0) / 1000, S.done); }
}
function finishStep(step, g) {
  if (g != null && step.it) {
    if (step.retry) grade(step.it.id, g >= 2 ? 1 : 0);
    else if (step.extra) { if (g === 0) grade(step.it.id, 0); }
    else grade(step.it.id, g);
    S.done++; if (g >= 2) S.right++;
    if (g === 0 && !step.retry) {
      const kind = step.it.type === 'word' ? 'flash' : (step.kind === 'listen' ? 'speak' : step.kind);
      S.steps.push({ it: step.it, kind, stage: 'Làm lại câu chưa thuộc', retry: true });
    }
  }
  if (step.kind === 'grammar') { gseen[`${step.L.id}-${step.gi}`] = true; store.set('gseen', gseen); }
  S.i++;
  renderSession();
}
function gradeButtons(onGrade, suggest) {
  const el = document.createElement('div');
  el.className = 'grades';
  const defs = [[0, 'Quên', 'ôn lại ngay', 'bad'], [1, 'Khó', 'mai ôn', 'warn'], [2, 'Nhớ', 'giãn ra', 'good'], [3, 'Dễ', 'giãn xa', 'good']];
  el.innerHTML = defs.map(([g, t, s, c]) => `<button class="btn ${c}${suggest === g ? ' primary' : ''}" data-g="${g}">${t}<small>${s}</small></button>`).join('');
  $$('button', el).forEach(b => b.onclick = () => onGrade(+b.dataset.g));
  return el;
}
const suggestFrom = sim => sim >= 0.9 ? 2 : sim >= 0.65 ? 1 : 0;

function renderSession() {
  clearInterval(tick);
  if (!S) { location.hash = '#/'; return; }
  if (S.i >= S.steps.length) return renderSummary();
  const step = S.steps[S.i];
  const pct = Math.round(S.i / S.steps.length * 100);
  app.innerHTML = `
    <div class="session-top">
      <a class="btn icon ghost" href="#/" aria-label="Thoát">✕</a>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <span class="small muted" id="clock">0:00</span>
    </div>
    <div class="stage">${esc(step.stage || '')} · ${S.i + 1}/${S.steps.length}</div>
    <div class="card ex-card" id="ex"></div>`;
  const clock = $('#clock');
  const upd = () => { clock.textContent = fmtTime((Date.now() - S.t0) / 1000); };
  upd(); tick = setInterval(upd, 1000);
  const box = $('#ex');
  const R = RENDER[step.kind];
  R(box, step, g => finishStep(step, g));
}

function renderSummary() {
  logSession();
  const secs = (Date.now() - S.t0) / 1000;
  const acc = S.done ? Math.round(S.right / S.done * 100) : 0;
  app.innerHTML = `
    <div class="card center stack">
      <div class="done-emoji">🎉</div>
      <h1>Hoàn thành buổi học!</h1>
      <p class="muted">Chuỗi ngày học liên tiếp: <b>${streak()} ngày</b></p>
      <div class="kv"><span>Thời gian</span><b>${fmtTime(secs)}</b></div>
      <div class="kv"><span>Số mục đã luyện</span><b>${S.done}</b></div>
      <div class="kv"><span>Nhớ tốt</span><b>${acc}%</b></div>
      <a class="btn primary big" href="#/">Về trang Hôm nay</a>
      <button class="btn big" id="more">Luyện thêm 10 phút</button>
    </div>`;
  $('#more').onclick = () => startSession(buildSession({ minutes: 10 }), 'Luyện thêm');
  S = null;
}

/* ---------- các dạng bài tập ---------- */
const hl = (text, w) => esc(text).split(esc(w)).join(`<mark>${esc(w)}</mark>`);
const pyHtml = p => settings.pinyin ? `<div class="py-line">${esc(p)}</div>` : `<details class="small muted"><summary>Pinyin</summary><div class="py-line">${esc(p)}</div></details>`;
function exampleBlock(it) {
  if (!it.ex) return '';
  const [zh, py, vi] = it.ex;
  return `<div class="ex"><div class="row between"><span class="zh">${hl(zh, it.h)}</span><span>${sayBtn(zh)}${slowBtn(zh)}</span></div>
    <div class="py-line">${esc(py)}</div><div class="vi-line">${esc(vi)}</div></div>`;
}

/* Phân tích từng chữ theo bộ thủ */
const RAD = window.RADICALS || {};
const CH = window.CHARS || {};
function charRows(word) {
  return [...word].filter(c => CH[c]).map(c => {
    const [r, hv, comp] = CH[c];
    const rn = RAD[r] || ['', ''];
    return `<div class="char-row"><div class="char-big zh">${esc(c)}</div><div>
      <b class="hvc">${esc(hv)}</b>
      <div class="small">Bộ <span class="zh rad">${esc(r)}</span> ${esc(rn[0])} — ${esc(rn[1])}</div>
      <div class="small muted">Cấu tạo: <span class="zh">${esc(comp)}</span></div></div></div>`;
  }).join('');
}
function charBlock(word) {
  const rows = charRows(word);
  return rows ? `<div class="chars"><div class="small muted">Phân tích theo bộ thủ</div>${rows}</div>` : '';
}

const RENDER = {
  /* Từ mới: chữ, pinyin, nghĩa, Hán Việt, ví dụ — nghe và đọc theo */
  intro(box, step, done) {
    const it = step.it;
    box.innerHTML = `<div class="body">
      <div class="big-zh">${esc(it.h)}</div>
      <div class="center py-line" style="font-size:1.25rem">${esc(it.p)}</div>
      <div class="center"><b>${esc(it.v)}</b>${it.hv ? ` <span class="hv">· ${esc(it.hv)}</span>` : ''}</div>
      <div class="row" style="justify-content:center;margin:10px 0">${sayBtn(it.h, '🔊 Nghe')}${slowBtn(it.h)}</div>
      ${exampleBlock(it)}
      ${charBlock(it.h)}
      <p class="tip" style="margin-top:12px">Đọc theo từ 3 lần, sau đó đọc cả câu ví dụ. Có thể bấm micro để kiểm tra phát âm.</p>
      <div id="ab"></div><div id="fb"></div>
    </div>
    <div class="grades" style="grid-template-columns:1fr 1fr">
      <button class="btn bad" data-g="0">Cần ôn lại</button>
      <button class="btn primary" data-g="2">Đã nhớ ✓</button>
    </div>`;
    const target = it.ex ? it.ex[0] : it.h;
    $('#ab', box).appendChild(answerBox(said => {
      const sim = Math.max(similarity(said, it.h), similarity(said, target));
      $('#fb', box).innerHTML = resultHtml(sim) + `<div class="small muted center">Bạn nói: ${esc(said)}</div>`;
    }, 'Gõ hoặc nói từ / câu ví dụ'));
    $$('[data-g]', box).forEach(b => b.onclick = () => done(+b.dataset.g));
    say(it.h);
  },

  /* Thẻ ghi nhớ: 2 chiều (chữ → nghĩa, nghĩa → nói ra chữ) */
  flash(box, step, done) {
    const it = step.it;
    const reverse = Math.random() < 0.4;
    box.innerHTML = `<div class="body">
      ${reverse
        ? `<p class="muted center small">Nói từ tiếng Trung có nghĩa:</p><div class="prompt-vi center" style="margin:24px 0">${esc(it.v)}</div>`
        : `<div class="big-zh">${esc(it.h)}</div><div class="center">${sayBtn(it.h)}</div>`}
      <div id="back" class="reveal hidden">
        ${reverse ? `<div class="big-zh" style="font-size:2.6rem">${esc(it.h)}</div>` : ''}
        <div class="center py-line" style="font-size:1.2rem">${esc(it.p)}</div>
        <div class="center"><b>${esc(it.v)}</b>${it.hv ? ` <span class="hv">· ${esc(it.hv)}</span>` : ''}</div>
        <div style="margin-top:10px">${exampleBlock(it)}</div>
        ${charBlock(it.h)}
      </div>
    </div>
    <button class="btn primary big" id="flip">Lật thẻ</button>
    <div id="gr" class="hidden"></div>`;
    $('#flip', box).onclick = () => {
      $('#back', box).classList.remove('hidden'); $('#flip', box).classList.add('hidden');
      $('#gr', box).classList.remove('hidden'); $('#gr', box).appendChild(gradeButtons(done));
      say(it.h);
    };
    if (!reverse) say(it.h);
  },

  /* Câu mới: nghe và nhắc lại (shadowing) */
  listen(box, step, done) {
    const it = step.it;
    box.innerHTML = `<div class="body">
      <p class="muted small">Nghe rồi nói lại cả câu:</p>
      <div class="mid-zh">${esc(it.zh)}</div>
      ${pyHtml(it.py)}
      <div class="vi-line">${esc(it.vi)}</div>
      <div class="row" style="margin:10px 0">${sayBtn(it.zh, '🔊 Nghe')}${slowBtn(it.zh)}</div>
      <div id="ab"></div><div id="fb"></div>
    </div>
    <div class="grades" style="grid-template-columns:1fr 1fr">
      <button class="btn bad" data-g="0">Chưa nói được</button>
      <button class="btn primary" data-g="2">Nói được rồi ✓</button>
    </div>`;
    $('#ab', box).appendChild(answerBox(said => {
      const sim = similarity(said, it.zh);
      $('#fb', box).innerHTML = resultHtml(sim) + `<div class="mid-zh diff center" style="font-size:1.2rem">${diffHtml(said, it.zh)}</div>`;
    }));
    $$('[data-g]', box).forEach(b => b.onclick = () => done(+b.dataset.g));
    say(it.zh);
  },

  /* Phản xạ: thấy tiếng Việt → nói ngay tiếng Trung */
  speak(box, step, done) {
    const it = step.it;
    const LIMIT = Math.max(8, Math.min(16, Math.round(it.zh.length * 0.8)));
    const t0 = Date.now();
    box.innerHTML = `<div class="body">
      <p class="muted small">Nói câu này bằng tiếng Trung — cố gắng trong ${LIMIT} giây:</p>
      <div class="prompt-vi">${esc(it.vi)}</div>
      <div class="timer"><i id="tm"></i></div>
      <div id="ab"></div>
      <div id="rv" class="reveal hidden"></div>
    </div>
    <button class="btn big" id="show">Xem đáp án</button>
    <div id="gr"></div>`;
    const bar = $('#tm', box);
    requestAnimationFrame(() => { bar.style.transition = `transform ${LIMIT}s linear`; bar.style.transform = 'scaleX(0)'; });
    let shown = false;
    const reveal = said => {
      if (shown) { if (said) $('#rv', box).innerHTML = body(said); return; }
      shown = true;
      $('#show', box).classList.add('hidden');
      bar.style.transition = 'none';
      $('#rv', box).classList.remove('hidden');
      $('#rv', box).innerHTML = body(said);
      const sim = said ? similarity(said, it.zh) : 0;
      $('#gr', box).appendChild(gradeButtons(done, said ? suggestFrom(sim) : undefined));
      say(it.zh);
    };
    const body = said => {
      const secs = ((Date.now() - t0) / 1000).toFixed(1);
      return `${said ? resultHtml(similarity(said, it.zh)) + `<p class="small muted">Thời gian phản xạ: ${secs} giây${secs > LIMIT ? ' — lần sau nhanh hơn nhé!' : ' 👍'}</p>` : ''}
        <div class="mid-zh diff">${said ? diffHtml(said, it.zh) : esc(it.zh)}</div>
        <div class="py-line">${esc(it.py)}</div>
        <div class="row" style="margin-top:6px">${sayBtn(it.zh, '🔊 Nghe mẫu')}${slowBtn(it.zh)}</div>
        ${said ? `<p class="small muted">Bạn nói: ${esc(said)}</p>` : '<p class="small muted">Nghe mẫu và nói to theo 2 lần trước khi chấm điểm.</p>'}`;
    };
    $('#ab', box).appendChild(answerBox(said => reveal(said)));
    $('#show', box).onclick = () => reveal('');
  },

  /* Sắp xếp từ thành câu (dạng 连词成句 của đề HSK) */
  order(box, step, done) {
    const it = step.it;
    const words = it.tokens.filter(t => !PUNCT.test(t));
    const correct = words.join('');
    let pool = shuffle(words.map((w, i) => ({ w, i })));
    for (let k = 0; k < 5 && pool.map(x => x.w).join('') === correct && words.length > 1; k++) pool = shuffle(pool);
    const picked = [];
    box.innerHTML = `<div class="body">
      <p class="muted small">Sắp xếp thành câu đúng:</p>
      <div class="prompt-vi" style="font-size:1.05rem;font-weight:500">${esc(it.vi)}</div>
      <div class="chips answer" id="ans" style="margin-top:12px"></div>
      <div class="chips" id="pool"></div>
      <div id="fb"></div>
    </div>
    <button class="btn primary big" id="check" disabled>Kiểm tra</button>
    <div id="gr"></div>`;
    const draw = () => {
      $('#ans', box).innerHTML = picked.map((p, k) => `<button class="chip" data-k="${k}">${esc(p.w)}</button>`).join('');
      $('#pool', box).innerHTML = pool.map(p => `<button class="chip${picked.includes(p) ? ' used' : ''}" data-i="${p.i}">${esc(p.w)}</button>`).join('');
      $$('#ans .chip', box).forEach(b => b.onclick = () => { picked.splice(+b.dataset.k, 1); draw(); });
      $$('#pool .chip', box).forEach(b => b.onclick = () => { const p = pool.find(x => x.i === +b.dataset.i); if (!picked.includes(p)) picked.push(p); draw(); });
      $('#check', box).disabled = picked.length !== words.length;
    };
    draw();
    $('#check', box).onclick = () => {
      const ok = picked.map(p => p.w).join('') === correct;
      $('#check', box).classList.add('hidden');
      $$('.chip', box).forEach(c => c.disabled = true);
      $('#fb', box).innerHTML = `<div class="result ${ok ? 'good' : 'bad'}">${ok ? 'Chính xác! Giờ đọc to cả câu nhé.' : 'Chưa đúng. Đáp án:'}</div>
        <div class="mid-zh" style="margin-top:8px">${esc(it.zh)}</div><div class="py-line">${esc(it.py)}</div>
        <div class="row">${sayBtn(it.zh, '🔊 Nghe')}${slowBtn(it.zh)}</div>`;
      say(it.zh);
      const gr = $('#gr', box);
      gr.className = 'grades'; gr.style.gridTemplateColumns = '1fr 1fr';
      gr.innerHTML = ok
        ? `<button class="btn" data-g="1">Hơi khó</button><button class="btn primary" data-g="2">Tiếp tục</button>`
        : `<button class="btn bad" data-g="0">Ôn lại sau</button><button class="btn" data-g="2">Câu của tôi cũng đúng</button>`;
      $$('[data-g]', gr).forEach(b => b.onclick = () => done(+b.dataset.g));
    };
  },

  /* Nghe câu hỏi → trả lời bằng lời */
  qa(box, step, done) {
    const it = step.it;
    box.innerHTML = `<div class="body">
      <p class="muted small">Nghe câu hỏi và trả lời bằng tiếng Trung (câu hoàn chỉnh):</p>
      <div class="row" style="justify-content:center;margin:14px 0">${sayBtn(it.q, '🔊 Nghe câu hỏi')}${slowBtn(it.q)}</div>
      <details><summary class="small muted">Hiện chữ</summary><div class="mid-zh">${esc(it.q)}</div><div class="py-line">${esc(it.qpy)}</div></details>
      <details><summary class="small muted">Hiện nghĩa</summary><div class="vi-line">${esc(it.qvi)}</div></details>
      <div id="ab" style="margin-top:10px"></div>
      <div id="rv" class="reveal hidden"></div>
    </div>
    <button class="btn big" id="show">Xem câu trả lời mẫu</button>
    <div id="gr"></div>`;
    let shown = false;
    const reveal = said => {
      $('#rv', box).classList.remove('hidden');
      $('#rv', box).innerHTML = `${said ? `<p>Bạn trả lời: <span class="zh" style="font-size:1.15rem">${esc(said)}</span></p>
          ${norm(said).length < 4 ? '<div class="result mid">Thử trả lời bằng câu đầy đủ hơn nhé!</div>' : '<div class="result good">Tốt! So sánh với câu mẫu:</div>'}` : ''}
        <p class="small muted" style="margin-bottom:2px">Câu hỏi: <span class="zh">${esc(it.q)}</span> — ${esc(it.qvi)}</p>
        <div class="mid-zh">${esc(it.a)}</div>
        <div class="row">${sayBtn(it.a, '🔊 Nghe câu mẫu')}${slowBtn(it.a)}</div>
        <p class="small muted">Hãy đổi câu mẫu thành câu của chính mình và nói lại.</p>`;
      if (shown) return;
      shown = true;
      $('#show', box).classList.add('hidden');
      const gr = $('#gr', box);
      gr.className = 'grades'; gr.style.gridTemplateColumns = '1fr 1fr 1fr';
      gr.innerHTML = `<button class="btn bad" data-g="0">Chưa trả lời được</button><button class="btn warn" data-g="1">Còn ngập ngừng</button><button class="btn good" data-g="2">Trả lời tốt</button>`;
      $$('[data-g]', gr).forEach(b => b.onclick = () => done(+b.dataset.g));
    };
    $('#ab', box).appendChild(answerBox(said => reveal(said)));
    $('#show', box).onclick = () => reveal('');
    say(it.q);
  },

  /* Đặt câu theo mẫu ngữ pháp — tự kiểm tra có dùng đúng cấu trúc */
  pattern(box, step, done) {
    const it = step.it;
    let re = null; try { re = new RegExp(it.re); } catch (e) { re = null; }
    box.innerHTML = `<div class="body">
      <p class="muted small">Đặt câu của riêng bạn — ${esc(it.name)}</p>
      <div class="pattern">${esc(it.pattern)}</div>
      <div class="prompt-vi" style="margin-top:8px">${esc(it.vi)}</div>
      <div id="ab" style="margin-top:12px"></div>
      <div id="rv" class="reveal hidden"></div>
    </div>
    <button class="btn big" id="show">Xem câu gợi ý</button>
    <div id="gr"></div>`;
    let shown = false;
    const reveal = said => {
      const ok = said && re ? re.test(said.replace(/\s+/g, '')) : false;
      $('#rv', box).classList.remove('hidden');
      $('#rv', box).innerHTML = `${said ? `<p>Câu của bạn: <span class="zh" style="font-size:1.15rem">${esc(said)}</span></p>
          <div class="result ${ok ? 'good' : 'bad'}">${ok ? 'Đã dùng đúng cấu trúc ✓' : 'Chưa thấy cấu trúc cần dùng — thử lại nhé.'}</div>` : ''}
        <p class="small muted" style="margin-bottom:2px">Câu gợi ý:</p>
        <div class="mid-zh">${esc(it.sample)}</div>
        <div class="row">${sayBtn(it.sample, '🔊 Nghe')}${slowBtn(it.sample)}</div>`;
      if (shown) return;
      shown = true;
      $('#show', box).classList.add('hidden');
      $('#gr', box).appendChild(gradeButtons(done, said ? (ok ? 2 : 0) : undefined));
    };
    $('#ab', box).appendChild(answerBox(said => reveal(said)));
    $('#show', box).onclick = () => reveal('');
  },

  /* Thẻ ngữ pháp (xem trước khi luyện câu) */
  grammar(box, step, done) {
    const g = step.L.grammar[step.gi];
    box.innerHTML = `<div class="body">
      <p class="muted small">Ngữ pháp mới</p>
      <h2 style="margin-top:0">${esc(g.name)}</h2>
      <div class="pattern">${esc(g.pattern)}</div>
      <p>${esc(g.explain)}</p>
      ${g.examples.map(x => `<div class="sent row between"><span class="zh" style="font-size:1.2rem">${esc(x)}</span>${sayBtn(x)}</div>`).join('')}
      <p class="tip">Bấm nghe và đọc to từng ví dụ.</p>
    </div>
    <button class="btn primary big" id="ok">Đã hiểu, tiếp tục</button>`;
    $('#ok', box).onclick = () => done(null);
  }
};

/* ---------- trang: Hôm nay ---------- */
function pageHome() {
  const t = today();
  const due = dueItems().length;
  const todayLog = log[t];
  const plan = buildSession({});
  const cur = plan.target || currentLesson();
  const nxt = nextLesson();
  const week = Array.from({ length: 7 }, (_, k) => t - 6 + k);
  const [rh, rm] = settings.remind.split(':').map(Number);
  const now = new Date();
  const late = now.getHours() * 60 + now.getMinutes() >= rh * 60 + rm;

  let banner = '';
  if (todayLog && todayLog.n) banner = `<div class="banner done">✓ Hôm nay đã học ${Math.max(1, Math.round(todayLog.s / 60))} phút (${todayLog.n} mục). Giỏi lắm! Có thể luyện thêm nếu muốn.</div>`;
  else if (started.length) banner = `<div class="banner todo">${late ? '⏰ Đã đến giờ ôn bài!' : '📅 Hôm nay chưa ôn bài.'} Có <b>${due}</b> mục cũ đang chờ ôn — đừng để đứt chuỗi ${streak()} ngày nhé.</div>`;

  let mainBtn;
  if (!started.length) mainBtn = `<button class="btn big" id="go">Bắt đầu Bài 1 (~${settings.minutes} phút)</button>`;
  else if (plan.steps.length) mainBtn = `<button class="btn big" id="go">Bắt đầu buổi ôn hôm nay (~${Math.max(plan.est, 1)} phút)</button>`;
  else mainBtn = `<button class="btn big" id="go">Học bài mới: Bài ${nxt}</button>`;

  app.innerHTML = `
    ${banner}
    <section class="card hero">
      <div class="row between"><h1 style="margin:0">Buổi học hôm nay</h1>
        <div class="seg" id="mins">${[15, 20, 30].map(m => `<button data-m="${m}" class="${settings.minutes === m ? 'on' : ''}">${m}′</button>`).join('')}</div>
      </div>
      <div class="stats">
        <div class="stat"><b>${streak()}</b><span>ngày liên tiếp</span></div>
        <div class="stat"><b>${due}</b><span>mục cần ôn</span></div>
        <div class="stat"><b>${todayLog ? Math.round(todayLog.s / 60) : 0}′</b><span>đã học hôm nay</span></div>
      </div>
      <div class="week">${week.map(d => `<i class="${log[d] && log[d].n ? 'on' : ''}" title="${dayLabel(d)}"></i>`).join('')}</div>
      <p class="muted small" style="margin:8px 0 12px">${started.length
        ? `Gồm ${plan.nReview} mục ôn bài cũ${plan.nNew ? ` + ${plan.nNew} mục mới của Bài ${plan.target}` : ''}. Ôn từ → học mới → luyện nói.`
        : 'Mỗi buổi gồm: ôn bài cũ → học từ mới (có ví dụ) → luyện phản xạ nói và đặt câu.'}</p>
      ${mainBtn}
    </section>

    <h2>Tiếp tục học</h2>
    ${cur ? lessonCard(lessonById(cur)) : ''}
    ${nxt && nxt !== cur ? lessonCard(lessonById(nxt)) : ''}
    <a class="btn" href="#/bai" style="width:100%">Xem tất cả bài học</a>

    <h2>Luyện nhanh</h2>
    <div class="grid2">
      <a class="card mode-card" href="#/luyen/speak" style="text-decoration:none"><div class="ico">🗣️</div><h3>Phản xạ nói</h3><div class="small muted">Thấy tiếng Việt → nói ngay tiếng Trung</div></a>
      <a class="card mode-card" href="#/luyen/pattern" style="text-decoration:none"><div class="ico">🧩</div><h3>Đặt câu theo mẫu</h3><div class="small muted">Tự đặt câu với ngữ pháp đã học</div></a>
    </div>`;
  $$('#mins button').forEach(b => b.onclick = () => { settings.minutes = +b.dataset.m; saveSettings(); pageHome(); });
  $('#go').onclick = () => {
    if (!started.length) return startSession(buildSession({ lessonId: 1 }), 'Bài 1');
    if (plan.steps.length) return startSession(plan, 'Hôm nay');
    startSession(buildSession({ lessonId: nxt }), 'Bài ' + nxt);
  };
}

function lessonCard(L) {
  const p = lessonProgress(L.id);
  const pct = Math.round(p.known / p.total * 100);
  return `<a class="card lesson-card ${started.includes(L.id) ? 'started' : ''}" href="#/bai/${L.id}">
    <div class="lesson-num">${L.id}</div>
    <div style="flex:1;min-width:0">
      <div><span class="zh">${esc(L.title)}</span> <span class="muted small">· ${esc(L.vi)}</span></div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="small muted">${started.includes(L.id) ? `Đã học ${p.seen}/${p.total} mục · thuộc ${pct}%` : `${L.words.length} từ · ${L.grammar.length} điểm ngữ pháp · chưa học`}</div>
    </div></a>`;
}

/* ---------- trang: danh sách bài ---------- */
function pageLessons() {
  app.innerHTML = `<h1>Bài học</h1>
    <p class="muted small">Mỗi bài gồm từ vựng (có ví dụ), ngữ pháp, câu mẫu và hỏi đáp. Bài đã học sẽ được tự động đưa vào ôn tập hằng ngày.</p>
    ${LESSONS.map(lessonCard).join('')}`;
}

/* ---------- trang: chi tiết bài ---------- */
function pageLesson(id, tab = 'words') {
  const L = lessonById(id);
  if (!L) { location.hash = '#/bai'; return; }
  const p = lessonProgress(id);
  const remain = p.total - p.seen;
  const tabs = { words: 'Từ vựng', rad: 'Bộ thủ', grammar: 'Ngữ pháp', sent: 'Câu mẫu', qa: 'Hỏi đáp' };
  let content = '';
  if (tab === 'words') content = BY_LESSON[id].filter(i => i.type === 'word').map(it => `
    <div class="word-row">
      <div class="hz">${esc(it.h)}</div>
      <div><div class="py-line">${esc(it.p)}</div><div>${esc(it.v)}</div>${it.hv ? `<div class="hv">${esc(it.hv)}</div>` : ''}</div>
      <div>${sayBtn(it.h)}</div>
      ${exampleBlock(it)}
      ${charBlock(it.h)}
    </div>`).join('');
  if (tab === 'rad') {
    const chars = [...new Set(L.words.flatMap(w => [...w[0]]))].filter(c => CH[c]);
    const groups = {};
    chars.forEach(c => { (groups[CH[c][0]] = groups[CH[c][0]] || []).push(c); });
    content = `<p class="tip">Chữ cùng bộ thủ thường liên quan về nghĩa, ví dụ bộ 氵 (nước): 洗 rửa, 澡 tắm, 游泳 bơi. Học bộ thủ giúp đoán nghĩa và nhớ chữ lâu hơn.</p>` +
      Object.entries(groups).sort((a, b) => b[1].length - a[1].length).map(([r, cs]) => {
        const rn = RAD[r] || ['', ''];
        return `<div class="sent"><div class="row" style="flex-wrap:nowrap"><span class="rad-big zh">${esc(r)}</span>
          <div><b>Bộ ${esc(rn[0])}</b><div class="small muted">${esc(rn[1])}</div></div></div>
          <div class="row" style="margin-top:8px">${cs.map(c => `<span class="rad-char" title="${esc(CH[c][2])}"><span class="zh">${esc(c)}</span><small>${esc(CH[c][1])}</small></span>`).join('')}</div></div>`;
      }).join('');
  }
  if (tab === 'grammar') content = L.grammar.map(g => `
    <div class="sent"><h3>${esc(g.name)}</h3><div class="pattern">${esc(g.pattern)}</div><p>${esc(g.explain)}</p>
    ${g.examples.map(x => `<div class="row between"><span class="zh" style="font-size:1.15rem">${esc(x)}</span>${sayBtn(x)}</div>`).join('')}
    <p class="small muted" style="margin-top:8px">Bài đặt câu: ${g.tasks.map(t => esc(t.vi)).join(' · ')}</p></div>`).join('');
  if (tab === 'sent') content = BY_LESSON[id].filter(i => i.type === 'sent').map(it => `
    <div class="sent"><div class="row between" style="flex-wrap:nowrap"><span class="zh">${esc(it.zh)}</span><span style="flex:none">${sayBtn(it.zh)}${slowBtn(it.zh)}</span></div>
    <div class="py-line">${esc(it.py)}</div><div class="vi-line">${esc(it.vi)}</div></div>`).join('');
  if (tab === 'qa') content = BY_LESSON[id].filter(i => i.type === 'qa').map(it => `
    <div class="sent"><div class="row between" style="flex-wrap:nowrap"><span class="zh">问：${esc(it.q)}</span>${sayBtn(it.q)}</div>
    <div class="py-line">${esc(it.qpy)}</div><div class="vi-line">${esc(it.qvi)}</div>
    <div class="row between" style="flex-wrap:nowrap;margin-top:4px"><span class="zh" style="font-size:1.05rem">答：${esc(it.a)}</span>${sayBtn(it.a)}</div></div>`).join('');

  app.innerHTML = `
    <a href="#/bai" class="small">← Tất cả bài</a>
    <h1><span class="zh">第${id}课 ${esc(L.title)}</span></h1>
    <div class="py-line">${esc(L.py)}</div>
    <div class="muted">${esc(L.vi)}</div>
    <div class="card" style="margin-top:12px">
      <div class="small muted">Đã học ${p.seen}/${p.total} mục · thuộc ${Math.round(p.known / p.total * 100)}%</div>
      <div class="bar"><i style="width:${Math.round(p.known / p.total * 100)}%"></i></div>
      <div class="row" style="margin-top:12px">
        <button class="btn primary" id="learn">${remain ? (p.seen ? 'Học tiếp bài này' : 'Học bài này') : 'Ôn lại bài này'} (~${settings.minutes}′)</button>
        <a class="btn" href="#/kiemtra/${id}">Kiểm tra bài này</a>
      </div>
      <p class="small muted" style="margin:8px 0 0">Mỗi buổi bắt đầu bằng vài phút ôn bài cũ, rồi mới học nội dung mới.</p>
    </div>
    <div class="tabs">${Object.entries(tabs).map(([k, v]) => `<button data-tab="${k}" class="${k === tab ? 'on' : ''}">${v}</button>`).join('')}</div>
    <div class="card">${content}</div>`;
  $$('[data-tab]').forEach(b => b.onclick = () => pageLesson(id, b.dataset.tab));
  $('#learn').onclick = () => {
    if (remain) return startSession(buildSession({ lessonId: id }), 'Bài ' + id);
    const steps = shuffle(BY_LESSON[id]).slice(0, 16).map(it => ({ it, kind: kindFor(it, false), extra: !(srs[it.id] && srs[it.id].d <= today()), stage: `Ôn lại Bài ${id}` }));
    startSession({ steps, target: id }, 'Ôn Bài ' + id);
  };
}

/* ---------- trang: luyện tập tự chọn ---------- */
const MODES = {
  speak: ['🗣️', 'Phản xạ nói', 'Thấy câu tiếng Việt → nói ngay bằng tiếng Trung, có đếm giờ.', 'sent'],
  qa: ['👂', 'Nghe & trả lời', 'Nghe câu hỏi tiếng Trung và trả lời bằng lời.', 'qa'],
  pattern: ['🧩', 'Đặt câu theo mẫu', 'Tự đặt câu với cấu trúc ngữ pháp, máy kiểm tra cấu trúc.', 'task'],
  listen: ['🔁', 'Nghe & nhắc lại', 'Nghe câu mẫu rồi nói theo, chấm độ giống.', 'sent'],
  order: ['🔀', 'Sắp xếp câu', 'Sắp xếp từ thành câu đúng (dạng đề HSK).', 'sent'],
  flash: ['🃏', 'Thẻ từ vựng', 'Ôn từ hai chiều, kèm ví dụ.', 'word']
};
function pageLuyen(mode) {
  const lessonsAvail = started.length ? started.slice().sort((a, b) => a - b) : [1];
  if (mode && MODES[mode]) {
    const sel = store.get('luyenScope', 'all');
    const ids = sel === 'all' ? lessonsAvail : [+sel];
    const pool = ids.flatMap(id => BY_LESSON[id] || []).filter(it => it.type === MODES[mode][3]);
    // ưu tiên mục yếu (hộp thấp) rồi trộn
    const sorted = shuffle(pool).sort((a, b) => (srs[a.id] ? srs[a.id].b : -1) - (srs[b.id] ? srs[b.id].b : -1));
    const steps = sorted.slice(0, mode === 'flash' ? 20 : 12).map(it => ({ it, kind: mode, extra: !(srs[it.id] && srs[it.id].d <= today()), stage: MODES[mode][1] }));
    return startSession({ steps, target: null }, MODES[mode][1]);
  }
  const sel = store.get('luyenScope', 'all');
  app.innerHTML = `<h1>Luyện tập</h1>
    <p class="muted small">Luyện thêm ngoài buổi học hằng ngày. Nội dung lấy từ các bài đã học, ưu tiên phần còn yếu.</p>
    <label class="field"><span>Phạm vi</span>
      <select class="txt" id="scope">
        <option value="all">Tất cả bài đã học (${lessonsAvail.map(i => 'Bài ' + i).join(', ')})</option>
        ${lessonsAvail.map(i => `<option value="${i}" ${String(sel) === String(i) ? 'selected' : ''}>Bài ${i}: ${esc(lessonById(i).vi)}</option>`).join('')}
      </select></label>
    <div class="grid2">${Object.entries(MODES).map(([k, m]) => `
      <a class="card mode-card" href="#/luyen/${k}" style="text-decoration:none"><div class="ico">${m[0]}</div><h3>${m[1]}</h3><div class="small muted">${m[2]}</div></a>`).join('')}
    </div>`;
  $('#scope').onchange = e => store.set('luyenScope', e.target.value);
}

/* ---------- trang: kiểm tra ---------- */
let T = null;
function buildTest(ids) {
  const words = ids.flatMap(id => BY_LESSON[id]).filter(i => i.type === 'word');
  const sents = ids.flatMap(id => BY_LESSON[id]).filter(i => i.type === 'sent');
  const opts = (right, pool, f) => shuffle([right, ...shuffle(pool.filter(x => f(x) !== f(right))).filter((x, i, a) => a.findIndex(y => f(y) === f(x)) === i).slice(0, 3)]);
  const Q = [];
  const take = (arr, n) => shuffle(arr).slice(0, n);
  take(words, 3).forEach(it => Q.push({ t: 'listenWord', it, label: 'Nghe và chọn từ đúng', opts: opts(it, words, x => x.h), f: x => x.h, zh: true }));
  take(words, 3).forEach(it => Q.push({ t: 'meaning', it, label: 'Chọn nghĩa đúng', opts: opts(it, words, x => x.v), f: x => x.v }));
  take(words, 2).forEach(it => Q.push({ t: 'reverse', it, label: 'Chọn chữ Hán đúng', opts: opts(it, words, x => x.h), f: x => x.h, zh: true }));
  // Bộ thủ: chọn bộ của một chữ trong từ
  const radObjs = {};
  const radOf = r => (radObjs[r] = radObjs[r] || { r });
  const charPool = words.flatMap(w => [...w.h].filter(c => CH[c]).map(c => ({ c, it: w })));
  const radPool = [...new Set([...charPool.map(x => CH[x.c][0]), ...Object.keys(RAD)])].filter(r => RAD[r]).map(radOf);
  take(charPool, 2).forEach(({ c, it }) => {
    const ans = radOf(CH[c][0]);
    Q.push({ t: 'radical', it, c, ans, label: 'Chữ này thuộc bộ thủ nào?', opts: opts(ans, radPool, x => x.r), f: x => `${x.r}  ${RAD[x.r][0]} — ${RAD[x.r][1]}` });
  });
  take(words, 2).forEach(it => Q.push({ t: 'pinyin', it, label: 'Chọn pinyin đúng', opts: opts(it, words, x => x.p), f: x => x.p }));
  take(words.filter(w => w.ex), 4).forEach(it => Q.push({ t: 'fill', it, label: 'Chọn từ điền vào chỗ trống', opts: opts(it, words, x => x.h), f: x => x.h, zh: true }));
  take(sents, 2).forEach(it => Q.push({ t: 'listenSent', it, label: 'Nghe câu và chọn nghĩa đúng', opts: opts(it, sents, x => x.vi), f: x => x.vi }));
  take(sents, 2).forEach(it => Q.push({ t: 'order', it, label: 'Sắp xếp thành câu đúng' }));
  return shuffle(Q);
}
function pageTest(arg) {
  if (arg === 'lam' && T) return renderTestQ();
  const avail = started.length ? started.slice().sort((a, b) => a - b) : [];
  const preset = arg && /^\d+$/.test(arg) ? +arg : null;
  const hist = store.get('tests', []);
  app.innerHTML = `<h1>Kiểm tra</h1>
    <p class="muted small">20 câu theo kiểu đề HSK: nghe chọn từ, chọn nghĩa, pinyin, điền từ, nghe hiểu câu, sắp xếp câu. Câu làm sai sẽ được đưa vào ôn tập.</p>
    <label class="field"><span>Phạm vi</span><select class="txt" id="scope">
      ${avail.length ? `<option value="all">Tất cả bài đã học</option>` : ''}
      ${LESSONS.map(L => `<option value="${L.id}" ${preset === L.id ? 'selected' : ''}>Bài ${L.id}: ${esc(L.vi)}</option>`).join('')}
    </select></label>
    <button class="btn primary big" id="start">Bắt đầu kiểm tra</button>
    ${hist.length ? `<h2>Kết quả gần đây</h2><div class="card">${hist.slice(-8).reverse().map(h => `<div class="kv"><span>${esc(h.d)} · ${esc(h.scope)}</span><b>${h.score}/100</b></div>`).join('')}</div>` : ''}`;
  $('#start').onclick = () => {
    const v = $('#scope').value;
    const ids = v === 'all' ? avail : [+v];
    T = { Q: buildTest(ids), i: 0, right: 0, wrong: [], t0: Date.now(), scope: v === 'all' ? 'Tổng hợp' : 'Bài ' + v };
    location.hash = '#/kiemtra/lam';
  };
}
function renderTestQ() {
  if (!T) { location.hash = '#/kiemtra'; return; }
  if (T.i >= T.Q.length) return renderTestResult();
  const q = T.Q[T.i], it = q.it;
  let prompt = '';
  if (q.t === 'listenWord') prompt = `<div class="center" style="margin:20px 0">${sayBtn(it.h, '🔊 Nghe')}${slowBtn(it.h)}</div>`;
  if (q.t === 'meaning' || q.t === 'pinyin') prompt = `<div class="big-zh">${esc(it.h)}</div>`;
  if (q.t === 'reverse') prompt = `<div class="prompt-vi center" style="margin:20px 0">${esc(it.v)}</div>`;
  if (q.t === 'fill') prompt = `<div class="mid-zh" style="margin:16px 0">${esc(it.ex[0]).split(esc(it.h)).join('<u>（　　）</u>')}</div>`;
  if (q.t === 'listenSent') prompt = `<div class="center" style="margin:20px 0">${sayBtn(it.zh, '🔊 Nghe câu')}${slowBtn(it.zh)}</div>`;
  if (q.t === 'radical') prompt = `<div class="big-zh">${esc(q.c)}</div><p class="center muted small">trong từ <span class="zh">${esc(it.h)}</span></p>`;
  const ans = q.ans || it;
  app.innerHTML = `
    <div class="session-top"><a class="btn icon ghost" href="#/kiemtra" aria-label="Thoát">✕</a>
      <div class="bar"><i style="width:${Math.round(T.i / T.Q.length * 100)}%"></i></div><span class="small muted">${T.i + 1}/${T.Q.length}</span></div>
    <div class="card ex-card"><div class="body"><p class="muted small">${esc(q.label)}</p>${prompt}
      <div id="qa"></div><div id="fb"></div></div><div id="nx"></div></div>`;
  const next = ok => {
    if (ok) T.right++; else { T.wrong.push(q); if (srs[it.id]) grade(it.id, 0); }
    $('#nx').innerHTML = `<button class="btn primary big">${T.i + 1 < T.Q.length ? 'Câu tiếp theo' : 'Xem kết quả'}</button>`;
    $('#nx button').onclick = () => { T.i++; renderTestQ(); };
  };
  if (q.t === 'order') {
    // dùng lại bài sắp xếp câu, nhưng tính điểm theo đúng/sai
    const box = $('#qa');
    RENDER.order(box, { it }, () => {});
    $('#check', box).addEventListener('click', () => {
      const ok = /Chính xác/.test($('#fb', box).textContent);
      $('#gr', box).innerHTML = '';
      next(ok);
    });
  } else {
    $('#qa').innerHTML = `<div class="options">${q.opts.map((o, k) => `<button class="opt${q.zh ? ' zh' : ''}" data-k="${k}">${esc(q.f(o))}</button>`).join('')}</div>`;
    $$('.opt').forEach(b => b.onclick = () => {
      const o = q.opts[+b.dataset.k]; const ok = o === ans;
      $$('.opt').forEach((x, k) => { x.disabled = true; if (q.opts[k] === ans) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      $('#fb').innerHTML = `<div class="tip" style="margin-top:10px"><span class="zh">${esc(it.h || it.zh)}</span> · ${esc(it.p || it.py)} · ${esc(it.v || it.vi)}</div>`
        + (q.t === 'radical' ? `<div class="chars">${charRows(q.c)}</div>` : '');
      say(it.h || it.zh);
      next(ok);
    });
    if (q.t === 'listenWord') say(it.h);
    if (q.t === 'listenSent') say(it.zh);
  }
}
function renderTestResult() {
  const score = Math.round(T.right / T.Q.length * 100);
  const hist = store.get('tests', []);
  const d = new Date();
  hist.push({ d: `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`, scope: T.scope, score });
  store.set('tests', hist.slice(-50));
  addLog((Date.now() - T.t0) / 1000, T.Q.length);
  app.innerHTML = `<div class="card center stack">
      <div class="done-emoji">${score >= 80 ? '🏆' : score >= 60 ? '👍' : '💪'}</div>
      <h1>${score}/100</h1>
      <p class="muted">${score >= 80 ? 'Xuất sắc! Đủ sức qua phần này của HSK 3.' : score >= 60 ? 'Đạt! Ôn thêm các câu sai bên dưới nhé.' : 'Cần ôn thêm — các câu sai đã được đưa vào ôn tập.'}</p>
    </div>
    ${T.wrong.length ? `<h2>Các câu cần ôn</h2><div class="card">${T.wrong.map(q => {
      const it = q.it;
      return `<div class="sent"><div class="row between" style="flex-wrap:nowrap"><span class="zh">${esc(it.h || it.zh)}</span>${sayBtn(it.h || it.zh)}</div>
        <div class="py-line">${esc(it.p || it.py)}</div><div class="vi-line">${esc(it.v || it.vi)}</div></div>`;
    }).join('')}</div>` : ''}
    <a class="btn primary big" href="#/kiemtra">Làm bài khác</a>`;
  T = null;
}

/* ---------- trang: cài đặt ---------- */
function download(name, text, type) {
  const blob = new Blob([text], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
function downloadICS() {
  const [hh, mm] = settings.remind.split(':');
  const d = new Date();
  const ymd = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
  const n = new Date();
  const stamp = `${n.getUTCFullYear()}${pad(n.getUTCMonth() + 1)}${pad(n.getUTCDate())}T${pad(n.getUTCHours())}${pad(n.getUTCMinutes())}00Z`;
  const url = location.href.split('#')[0];
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//HocHSK3//VI', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT', `UID:hsk3-daily-${Date.now()}@hochsk3`, `DTSTAMP:${stamp}`,
    `DTSTART:${ymd}T${pad(hh)}${pad(mm)}00`, `DURATION:PT${settings.minutes}M`, 'RRULE:FREQ=DAILY',
    `SUMMARY:Ôn tiếng Trung HSK 3 (${settings.minutes} phút)`,
    `DESCRIPTION:Mở trang học: ${url}`, `URL:${url}`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:Đến giờ ôn tiếng Trung rồi!', 'TRIGGER:PT0M', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n');
  download('nhac-on-hsk3.ics', ics, 'text/calendar');
}
function pageSettings() {
  app.innerHTML = `<h1>Cài đặt</h1>
    <div class="card">
      <h3>⏰ Nhắc ôn bài hằng ngày</h3>
      <p class="small muted">Chọn giờ rồi bấm “Thêm vào lịch”. Mở file vừa tải trên điện thoại (Lịch Google / Lịch iPhone) để được nhắc mỗi ngày, kèm đường link mở thẳng trang học.</p>
      <div class="row" style="flex-wrap:nowrap">
        <input type="time" class="txt" id="remind" value="${esc(settings.remind)}" style="max-width:160px;font-family:var(--ui)">
        <button class="btn primary" id="ics">Thêm vào lịch</button>
      </div>
      <p class="small muted" style="margin-bottom:0">Trang “Hôm nay” cũng hiện lời nhắc khi đến giờ mà chưa ôn.</p>
    </div>
    <div class="card">
      <h3>📚 Buổi học</h3>
      <label class="field"><span>Thời lượng mỗi buổi</span>
        <div class="seg" id="mins">${[15, 20, 30].map(m => `<button data-m="${m}" class="${settings.minutes === m ? 'on' : ''}">${m} phút</button>`).join('')}</div></label>
      <label class="field"><span>Tốc độ đọc mẫu: <b id="rv">${settings.rate}</b></span>
        <div class="row" style="flex-wrap:nowrap"><input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="${settings.rate}" style="flex:1">
        <button class="btn icon" id="testrate">🔊</button></div></label>
      <label class="row"><input type="checkbox" id="py" ${settings.pinyin ? 'checked' : ''}> Hiện pinyin khi nghe & nhắc lại câu</label>
    </div>
    <div class="card">
      <h3>💾 Sao lưu tiến độ</h3>
      <p class="small muted">Tiến độ lưu trong trình duyệt của máy này. Muốn chuyển sang máy khác: tải file sao lưu rồi khôi phục ở máy kia.</p>
      <div class="row"><button class="btn" id="exp">Tải file sao lưu</button>
        <label class="btn">Khôi phục từ file<input type="file" id="imp" accept=".json,application/json" hidden></label></div>
    </div>
    <div class="card">
      <h3>ℹ️ Về nội dung</h3>
      <p class="small">Các bài được soạn theo chủ đề và ngữ pháp trọng tâm của HSK 3 (từ vựng, câu ví dụ, câu mẫu là nội dung tự soạn, không sao chép giáo trình). Có thể thêm/sửa bài trong file <code>data/lessons.js</code> và <code>data/examples.js</code> cho khớp với từng bài trong sách.</p>
      <p class="small muted">Nhận giọng nói hoạt động tốt nhất trên Chrome (Android, máy tính). Trên iPhone dùng Safari, nếu micro không hoạt động thì gõ bằng bàn phím tiếng Trung.</p>
      <button class="btn bad" id="reset">Xóa toàn bộ tiến độ</button>
    </div>`;
  $('#remind').onchange = e => { settings.remind = e.target.value || '20:00'; saveSettings(); };
  $('#ics').onclick = () => { settings.remind = $('#remind').value || '20:00'; saveSettings(); downloadICS(); };
  $$('#mins button').forEach(b => b.onclick = () => { settings.minutes = +b.dataset.m; saveSettings(); pageSettings(); });
  $('#rate').oninput = e => { settings.rate = +e.target.value; $('#rv').textContent = settings.rate; saveSettings(); };
  $('#testrate').onclick = () => say('我每天都练习说汉语。');
  $('#py').onchange = e => { settings.pinyin = e.target.checked; saveSettings(); };
  $('#exp').onclick = () => {
    const d = new Date();
    download(`hsk3-saoluu-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}.json`,
      JSON.stringify({ v: 1, srs, started, gseen, log, settings, tests: store.get('tests', []) }), 'application/json');
  };
  $('#imp').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(r.result);
        if (!data || typeof data.srs !== 'object') throw new Error('sai định dạng');
        srs = data.srs; started = data.started || []; gseen = data.gseen || {}; log = data.log || {};
        Object.assign(settings, data.settings || {});
        store.set('srs', srs); store.set('started', started); store.set('gseen', gseen); store.set('log', log); saveSettings();
        if (data.tests) store.set('tests', data.tests);
        alert('Đã khôi phục tiến độ!'); location.hash = '#/';
      } catch (err) { alert('File không hợp lệ: ' + err.message); }
    };
    r.readAsText(f);
  };
  $('#reset').onclick = () => {
    if (!confirm('Xóa toàn bộ tiến độ học? Không thể hoàn tác (trừ khi bạn có file sao lưu).')) return;
    srs = {}; started = []; gseen = {}; log = {};
    store.set('srs', srs); store.set('started', started); store.set('gseen', gseen); store.set('log', log); store.set('tests', []);
    location.hash = '#/';
  };
}

/* ---------- điều hướng ---------- */
function route() {
  stopListening();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  clearInterval(tick);
  const h = location.hash.replace(/^#\/?/, '');
  const [p, a] = h.split('/');
  if (p !== 'phien' && S) { logSession(); S = null; }
  $$('[data-nav]').forEach(n => n.classList.toggle('active', n.dataset.nav === (p || 'home')));
  window.scrollTo(0, 0);
  if (!p) return pageHome();
  if (p === 'bai') return a ? pageLesson(+a) : pageLessons();
  if (p === 'luyen') return pageLuyen(a);
  if (p === 'kiemtra') return pageTest(a);
  if (p === 'caidat') return pageSettings();
  if (p === 'phien') return renderSession();
  location.hash = '#/';
}
window.addEventListener('hashchange', route);
window.addEventListener('pagehide', logSession);
route();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => { /* không bắt buộc */ });
}
