// 全站交互：滚动显现、极光描边卡、鼠标光斑、主题切换、导航
// 通过 astro:page-load 在每次（含首次）导航后重新初始化。

const fine = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 滚动显现（一次性 IntersectionObserver） ---------- */
let revealIO: IntersectionObserver | null = null;

function initReveal() {
  revealIO?.disconnect();
  revealIO = null;
  const els = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
  if (!els.length) return;
  if (reduced()) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );
  els.forEach((el) => io.observe(el));
  revealIO = io;
}

/* ---------- 极光描边卡：把指针坐标写进 --mx/--my ---------- */
function initCardGlow() {
  if (!fine() || reduced()) return;
  let raf = 0;
  document.addEventListener(
    'pointermove',
    (ev) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const card = (ev.target as Element | null)?.closest?.('.card') as HTMLElement | null;
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${ev.clientX - r.left}px`);
          card.style.setProperty('--my', `${ev.clientY - r.top}px`);
        }
      });
    },
    { passive: true }
  );
}

/* ---------- 鼠标跟随冷光斑（惰性插值） ----------
   视图过渡会整体替换 body，#orb 每页都是新元素：
   监听器只挂一次，元素引用在每次 page-load 时刷新。 */
const orbState: { el: HTMLElement | null; bound: boolean } = { el: null, bound: false };

function initOrb() {
  orbState.el = document.getElementById('orb');
  if (!orbState.el) return;
  if (!fine() || reduced()) {
    orbState.el.remove();
    orbState.el = null;
    return;
  }
  if (orbState.bound) return;
  orbState.bound = true;
  let tx = innerWidth / 2, ty = innerHeight / 3, x = tx, y = ty, running = false;
  const step = () => {
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;
    orbState.el?.style.setProperty('transform', `translate3d(${x}px, ${y}px, 0)`);
    if (Math.abs(tx - x) + Math.abs(ty - y) > 0.5) {
      requestAnimationFrame(step);
    } else {
      running = false;
    }
  };
  document.addEventListener(
    'pointermove',
    (ev) => {
      tx = ev.clientX;
      ty = ev.clientY;
      if (!running && orbState.el) {
        running = true;
        requestAnimationFrame(step);
      }
    },
    { passive: true }
  );
}

/* ---------- 主题切换 ---------- */
function themeToggleLabel(btn: HTMLElement) {
  const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  btn.setAttribute('aria-label', current === 'light' ? '切换到深色主题' : '切换到浅色主题');
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  themeToggleLabel(btn);
  btn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* 隐私模式下静默 */
    }
    themeToggleLabel(btn);
    // 通知 giscus 等监听者
    document.dispatchEvent(new CustomEvent('themechange', { detail: next }));
  });
}

/* ---------- 移动端导航 ---------- */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

let globalOnce = false;

document.addEventListener('astro:page-load', () => {
  initReveal();
  initThemeToggle();
  initNav();
  initOrb(); // 每次导航都要刷新 #orb 元素引用（监听器由 orbState.bound 防重复）
  if (!globalOnce) {
    globalOnce = true;
    initCardGlow();
  }
});
