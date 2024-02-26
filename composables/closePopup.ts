import gsap from 'gsap';

export const closePopup = (): void => {
  lockScrollBody(false);

  const tl = gsap.timeline();

  tl.to('.scan', {
    opacity: 0,
  });
  tl.set('.scan', {
    display: 'none',
  });
};
