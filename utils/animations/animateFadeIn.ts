import gsap from 'gsap';

type Options = {
  duration?: number;
  delay?: number;
  stagger?: number | {};
  clearProps?: string;
};

export function animateFadeIn(el: NodeList | Element | string | undefined | null, options?: Options) {
  const element = typeof el === 'string' ? document.querySelectorAll(el) : (el as HTMLElement);
  const { duration = 1, delay = 0, stagger = 0.15, clearProps = 'all' } = options || {};

  const timeline = gsap.timeline({
    delay,
  });

  if (element) {
    timeline.from(element, {
      transition: 'unset',
      opacity: 0,
      duration,
      stagger,
      clearProps,
    });
  }

  return timeline;
}
