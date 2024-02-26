import gsap from 'gsap';

export const openPopup = (): void => {
  lockScrollBody(true);

  const tl = gsap.timeline();

  tl.set('.scan', {
    display: 'block',
  });
  tl.to('.scan', {
    opacity: 1,
  });
};
