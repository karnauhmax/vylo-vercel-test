import { gsap, SplitText } from 'gsap/all';

export function animateSplitLetter(el: NodeList | Element | string | undefined | null) {
  const text = typeof el === 'string' ? document.querySelector(el) : (el as HTMLElement);

  const timeline = gsap.timeline();

  if (text) {
    const split = new SplitText(text, {
      type: 'chars',
      charsClass: 'split-char',
    });

    timeline
      .set(text, {
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d',
        perspective: '70rem',
      })
      .fromTo(
        split.chars,
        {
          transition: 'unset',
          yPercent: 100,
          rotateX: -90,
        },
        {
          rotateX: 0,
          yPercent: 0,
          duration: 0.1,
          stagger: {
            each: 0.01,
          },
        },
      )
      .fromTo(
        split.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.05,
          stagger: {
            each: 0.01,
          },
        },
        0,
      );
  }

  return timeline;
}
