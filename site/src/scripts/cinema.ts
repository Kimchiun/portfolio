type ScrubEl = HTMLElement & { style: CSSStyleDeclaration };

const reduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

function clamp(n: number, a = 0, b = 1) {
  return Math.min(b, Math.max(a, n));
}

let abort: AbortController | null = null;

function initProgress(signal: AbortSignal) {
  const bars = document.querySelectorAll<HTMLElement>('[data-progress]');
  if (!bars.length) return;
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    const v = String(clamp(p));
    bars.forEach((bar) => bar.style.setProperty('--scroll-p', v));
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true, signal });
}

function initScrubs(signal: AbortSignal) {
  const tracks = [...document.querySelectorAll<ScrubEl>('[data-scrub]')];
  if (!tracks.length) return;

  if (reduced() || isMobile()) {
    tracks.forEach((el) => el.style.setProperty('--p', '1'));
    return;
  }

  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (const track of tracks) {
      const rect = track.getBoundingClientRect();
      const total = rect.height - vh;
      const p = total > 0 ? clamp(-rect.top / total) : 1;
      track.style.setProperty('--p', String(p));
    }
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  update();
  window.addEventListener('scroll', onScroll, { passive: true, signal });
  window.addEventListener('resize', onScroll, { passive: true, signal });
}

function initReveal() {
  const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!nodes.length) return;
  if (reduced()) {
    nodes.forEach((n) => n.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  );
  nodes.forEach((n) => io.observe(n));
  abort?.signal.addEventListener('abort', () => io.disconnect());
}

function initCountUp() {
  const nodes = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!nodes.length || reduced()) return;

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const suffix = el.dataset.suffix ?? '';
    const prefix = el.dataset.prefix ?? '';
    const decimals = Number(el.dataset.decimals ?? '0');
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      if (abort?.signal.aborted) return;
      const t = clamp((now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent =
        prefix +
        (decimals > 0
          ? val.toFixed(decimals)
          : Math.round(val).toLocaleString('en-US')) +
        suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          run(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.5 },
  );
  nodes.forEach((n) => io.observe(n));
  abort?.signal.addEventListener('abort', () => io.disconnect());
}

function initTimeline() {
  const items = [...document.querySelectorAll<HTMLElement>('[data-job]')];
  if (!items.length) return;
  if (reduced()) {
    items[0]?.classList.add('is-active');
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          items.forEach((i) => i.classList.toggle('is-active', i === e.target));
        }
      }
    },
    { rootMargin: '-40% 0px -45% 0px', threshold: 0 },
  );
  items.forEach((i) => io.observe(i));
  abort?.signal.addEventListener('abort', () => io.disconnect());
}

function initDrift(signal: AbortSignal) {
  if (reduced() || isMobile()) return;
  const media = document.querySelectorAll<HTMLElement>('[data-drift]');
  media.forEach((wrap) => {
    const img = wrap.querySelector<HTMLElement>('img');
    if (!img) return;
    const onMove = (ev: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = ((ev.clientX - r.left) / r.width - 0.5) * 12;
      const y = ((ev.clientY - r.top) / r.height - 0.5) * 12;
      img.style.transform = `translate(${x}px, ${y}px) scale(var(--img-scale, 1.04))`;
    };
    const onLeave = () => {
      img.style.transform = '';
    };
    wrap.addEventListener('pointermove', onMove, { signal });
    wrap.addEventListener('pointerleave', onLeave, { signal });
  });
}

function initThemeBands() {
  const bands = document.querySelectorAll<HTMLElement>('[data-band]');
  if (!bands.length || reduced()) return;
  const root = document.documentElement;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          const tone = (e.target as HTMLElement).dataset.band;
          if (tone) root.dataset.tone = tone;
        }
      }
    },
    { threshold: 0.35 },
  );
  bands.forEach((b) => io.observe(b));
  abort?.signal.addEventListener('abort', () => io.disconnect());
}

function boot() {
  document.documentElement.classList.add('js-cinema');
  abort?.abort();
  abort = new AbortController();
  const { signal } = abort;
  initProgress(signal);
  initScrubs(signal);
  initReveal();
  initCountUp();
  initTimeline();
  initDrift(signal);
  initThemeBands();
}

document.addEventListener('astro:page-load', boot);
if (!document.documentElement.classList.contains('js-cinema')) {
  // Fallback when View Transitions router has not fired yet
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
}
