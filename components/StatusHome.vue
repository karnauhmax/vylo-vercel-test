<script lang="ts" setup></script>
<template>
  <div class="status-home">
    <NuxtPicture src="/status-home.png" alt="" placeholder loading="lazy" />
  </div>
</template>
<style lang="scss" scoped>
.status-home svg {
  width: 100%;
}
.status-home {
  width: vw(255px);
  position: absolute;
  bottom: vw(12px);
  left: vw(13px);
  border-bottom-left-radius: vw(40px);
  border-bottom-right-radius: vw(40px);
  overflow: hidden;
  z-index: 2;
}
</style>
