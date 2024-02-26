import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = (param: boolean): void => {
  if (param) {
    store.scrollLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      normalizeWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    store.scrollLenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      store.scrollLenis?.raf(time * 1000);
    });
  }
};
