import { gsap, ScrollTrigger, ScrollToPlugin, SplitText, CustomEase, DrawSVGPlugin } from 'gsap/all';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, CustomEase, DrawSVGPlugin);

  ScrollTrigger.config({
    autoRefreshEvents: '',
    ignoreMobileResize: true,
  });

  CustomEase.create('my-ease', '0.32, 0, 0.12, 1');

  gsap.defaults({
    ease: 'my-ease',
  });
});
