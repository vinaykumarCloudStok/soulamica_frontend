import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Fades/slides an element in the first time it scrolls into view.
 * Returns a ref to attach and a boolean that flips to true once visible.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}

/**
 * Tracks which section id is currently in view, for nav "scrollspy"
 * highlighting.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')]);

  return active;
}

/** Animates a number counting up from 0 once `start` becomes true. */
export function useCountUp(target: number, start: boolean, duration = 1200): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

/** Locks page scroll while `locked` is true (used by the contact modal). */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

/** Copies text to the clipboard and reports a short-lived "copied" state. */
export function useClipboard(resetAfter = 2000): [boolean, (text: string) => void] {
  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), resetAfter);
      });
    }
  };

  return [copied, copy];
}

/**
 * Subtle 3D tilt that follows the cursor within an element, driven entirely
 * via CSS custom properties (--tilt-x / --tilt-y) so it never triggers a
 * React re-render. Pair with `transform: rotateX(var(--tilt-x)) ...` in CSS.
 */
export function useTilt<T extends HTMLElement>(maxTilt = 7): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty('--tilt-x', `${(-py * maxTilt).toFixed(2)}deg`);
      node.style.setProperty('--tilt-y', `${(px * maxTilt).toFixed(2)}deg`);
    };
    const handleLeave = () => {
      node.style.setProperty('--tilt-x', '0deg');
      node.style.setProperty('--tilt-y', '0deg');
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, [maxTilt]);

  return ref;
}

/** Nudges an element a few pixels toward the cursor — a "magnetic" button feel. */
export function useMagnetic<T extends HTMLElement>(strength = 0.3, max = 10): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const clamp = (n: number) => Math.max(Math.min(n, max), -max);
    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const dx = clamp((e.clientX - (rect.left + rect.width / 2)) * strength);
      const dy = clamp((e.clientY - (rect.top + rect.height / 2)) * strength);
      node.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const handleLeave = () => {
      node.style.transform = '';
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength, max]);

  return ref;
}

/**
 * Ambient mouse-parallax: sets --px / --py custom properties on the element
 * based on cursor position, for children to consume at different depths
 * (e.g. `transform: translate(calc(var(--px) * 1.5), ...)`).
 */
export function useParallax<T extends HTMLElement>(strength = 16): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty('--px', `${(px * strength).toFixed(2)}px`);
      node.style.setProperty('--py', `${(py * strength).toFixed(2)}px`);
    };

    node.addEventListener('mousemove', handleMove);
    return () => node.removeEventListener('mousemove', handleMove);
  }, [strength]);

  return ref;
}

/** Tracks page scroll progress as a 0–100 percentage, rAF-throttled. */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const compute = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(compute);
        ticking = true;
      }
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return progress;
}

/**
 * A tiny hash-based router — no extra dependency needed. Page routes use a
 * leading slash (`#/about`, `#/blog/some-post`). Bare anchors without a
 * slash are same-page scroll targets: `#welcome` / `#services` specifically
 * mean "go to the homepage and scroll there" (used by the nav from any
 * page); any other bare anchor (e.g. a legal page's table of contents)
 * scrolls within whatever page is already showing, and must NOT bounce the
 * user back to the homepage.
 */
const HOME_SCROLL_ANCHORS = new Set(['welcome', 'services']);

function getRouteFromHash(currentRoute: string): string {
  const hash = window.location.hash;
  if (hash.startsWith('#/')) return hash.slice(1);
  const anchor = hash.slice(1);
  if (anchor === '' || HOME_SCROLL_ANCHORS.has(anchor)) return '/';
  return currentRoute;
}

export function useRoute(): string {
  const [route, setRoute] = useState(() => getRouteFromHash('/'));

  useEffect(() => {
    const onHashChange = () => setRoute((current) => getRouteFromHash(current));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

/**
 * Scrolls to top on every route change, and — if navigating to a same-page
 * anchor from a *different* page — waits a frame for the homepage to mount
 * and then scrolls to that anchor instead (the browser can't do this on its
 * own since the target element doesn't exist yet at the moment the hash
 * changes).
 */
export function useRouteScroll(route: string): void {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && !hash.startsWith('/')) {
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
}

