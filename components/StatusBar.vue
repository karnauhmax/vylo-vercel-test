<script lang="ts" setup></script>
<template>
  <div class="status-bar">
    <NuxtPicture src="/status-bar.png" alt="status bar" placeholder loading="lazy" />
  </div>
</template>
<style lang="scss" scoped>
.status-bar {
  width: vw(255px);
  left: 50%;
  transform: translateX(-50%);
  top: vw(12px);
  position: absolute;
}
</style>
