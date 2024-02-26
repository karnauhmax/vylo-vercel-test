<script lang="ts" setup></script>
<template>
  <div class="steps">
    <div v-for="(_, i) in 4" :class="`step step-${i + 1}`"></div>
  </div>
</template>
<style lang="scss" scoped>
.steps {
  position: absolute;
  bottom: vw(41px);
  left: 50%;
  transform: translateX(-50%);
  width: vw(688px);
  height: vw(2px);
  background: #292929;
  display: flex;
  opacity: 0;
  z-index: 3;
  @include max(sm) {
    bottom: 73px;
    width: calc(100% - 80px);
  }
  @include max(xs) {
    bottom: 22px;
    width: calc(100% - 24px);
  }
}
.step {
  background: var(--color-glowlight);
  flex: 1;
  opacity: 0;
}
.step-1 {
  opacity: 1;
}
</style>
