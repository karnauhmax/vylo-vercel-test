export const usePointermove = () => {
  const x = ref(0);
  const y = ref(0);

  function update(event: PointerEvent) {
    x.value = event.clientX / window.innerWidth - 0.5;
    y.value = event.clientY / window.innerHeight - 0.5;
  }

  onMounted(() => {
    window.addEventListener('pointermove', update);
  });
  onUnmounted(() => {
    window.removeEventListener('pointermove', update);
  });
  return { x, y };
};
