export const useRequestAnimationFrame = (func: () => void) => {
  let raf = 0;

  onMounted(() => {
    const render = () => {
      func();
      raf = requestAnimationFrame(render);
    };
    render();
  });

  onUnmounted(() => {
    cancelAnimationFrame(raf);
  });
};
