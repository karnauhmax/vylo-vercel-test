import { gsap, SplitText } from 'gsap/all';

type Options = {
  delay?: number;
  duration?: number;
  stagger?: number;
  yPercent?: number;
};

export function animateSplitText(
  el: NodeList | Element | string | undefined | null,
  options: Options = {},
  normalizeLineheight?: boolean,
) {
  const text = typeof el === 'string' ? document.querySelector(el) : (el as HTMLElement);
  const {
    delay = 0,
    duration = 0.7,
    yPercent = 105,
    stagger = {
      each: 0.15,
    },
  } = options;

  const timeline = gsap.timeline({
    delay,
    onComplete() {
      if (text) {
        gsap.set(text.querySelectorAll('.mask'), {
          clearProps: 'overflow',
        });
      }
    },
  });

  if (text) {
    const split = new SplitText(text, {
      type: 'lines',
      linesClass: 'mask',
    });

    split.lines.forEach((line) => {
      new SplitText(line, {
        type: 'lines',
        linesClass: 'split-element',
      });
    });

    gsap.set(text.querySelectorAll('.mask'), {
      overflow: 'hidden',
    });

    if (normalizeLineheight) {
      text.classList.add('normalize-lineheight');
      text.querySelectorAll('.mask').forEach((mask, i) => {
        if (i) {
          mask.classList.add('text-up');
        }
      });
    }

    const elements = text.querySelectorAll('.split-element');

    timeline
      .set(text, {
        opacity: 1,
      })
      .from(elements, {
        transition: 'unset',
        yPercent,
        duration,
        stagger,
        clearProps: 'all',
      });
  }

  return timeline;
}
