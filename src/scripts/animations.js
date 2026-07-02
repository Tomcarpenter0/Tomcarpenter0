import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function init() {
  // View Transitions keep the JS context alive: drop stale triggers first.
  ScrollTrigger.getAll().forEach((t) => t.kill());

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // hero intro
  gsap.from('[data-hero-line]', {
    yPercent: 110,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.12,
  });

  // single-element reveals
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  // grouped reveals (timeline items, cards, skill lists)
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    gsap.from(group.children, {
      y: 48,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: { trigger: group, start: 'top 80%' },
    });
  });

  // cover art parallax
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: { trigger: el, scrub: true },
    });
  });

  // career ruler: fills 2016 → 2026 as the page scrolls
  const fill = document.querySelector('[data-ruler-fill]');
  if (fill) {
    gsap.fromTo(
      fill,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      }
    );
  }
}

document.addEventListener('astro:page-load', init);
