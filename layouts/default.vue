<script setup>
onMounted(() => {
  // Initialize smooth scroll for non-safari browsers
  useSmoothScroll(!isSafari());

  // Load the bootstrap file
  if (process.client) {
    import('../utils/bootstrap.ts');
  }
});
</script>

<template>
  <main class="layout">
    <TheHeader />
    <TheScan />
    <div class="page-wrapper">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style lang="scss" scoped>
.layout {
  @include max(xs) {
    width: 100%;
    height: 100svh;
    overflow-x: hidden;
  }
}
</style>
