<script lang="ts" setup>
import gsap from 'gsap';

onMounted(() => {
  gsap.to('.scroll-line', {
    repeat: -1,
    opacity: 0,
    y: 3,
    repeatDelay: 5,
    duration: 2,
    clearProps: 'all',
    delay: 1,
  });
});
</script>
<template>
  <div class="hero__footer">
    <div class="hero__footer-text">
      <div>Vylo:</div>
      <div>"Videos You Love"</div>
      <div>on Sports</div>
    </div>
    <div class="hero__footer-scroll">
      <div>
        <svg viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect class="rect-mouse" x="0.5" y="0.5" width="8" height="12" rx="3.5" stroke="black" />
          <rect class="scroll-line" x="4" y="3" width="1" height="3" rx="0.5" fill="black" />
        </svg>
      </div>
      <div class="hero__footer-scroll-text">Scroll Down</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero__footer {
  pointer-events: none;
  position: absolute;
  bottom: vw(24px);
  left: 0;
  padding-left: vw(24px);
  padding-right: vw(24px);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
  color: var(--color-black);
  @include max(sm) {
    display: none;
  }
}
.hero__footer-scroll {
  opacity: 0;
}
.hero__footer-scroll svg {
  width: vw(12px);
}
.hero__footer-text {
  opacity: 0;
}
.hero__footer-text > div:nth-child(2) {
  padding-left: vw(31px);
}
.hero__footer-scroll > div:nth-child(1) {
  margin-bottom: vw(7px);
  text-align: right;
}
</style>
