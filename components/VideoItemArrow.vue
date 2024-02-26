<script lang="ts" setup></script>
<template>
  <div class="video__item-arrow">
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.95132 11.672L4.98242 7.70309L8.95132 3.73419"
        stroke="white"
        stroke-width="1.36077"
        stroke-linecap="square"
      />
    </svg>
  </div>
</template>
<style lang="scss" scoped>
.video__item-arrow {
  position: absolute;
  left: vw(16px);
  top: vw(16px);
  width: vw(14px);
  opacity: 0;
}
.video__item-arrow svg {
  width: 100%;
}
</style>
