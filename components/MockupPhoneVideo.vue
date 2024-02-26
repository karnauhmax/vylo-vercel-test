<template>
  <div class="mockup">
    <div class="mockup__video">
      <video muted playsinline loop autoplay preload="auto">
        <template v-if="optimized">
          <source media="screen and (max-width: 768px)" :src="`${video}-optimized.webm`" type="video/webm" />
          <source media="screen and (max-width: 768px)" :src="`${video}-optimized.mp4`" type="video/mp4" />
        </template>

        <source :src="`${video}.webm`" type="video/webm" />
        <source :src="`${video}.mp4`" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup>
defineProps({
  video: {
    type: String,
    required: true,
  },

  optimized: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.mockup {
  width: 100%;
  max-width: 350px;
  padding-bottom: 0;
  position: relative;
  z-index: 2;

  &__video {
    padding: 14px 9px 8px 7px;

    @include max(sm) {
      padding-top: 10px;
    }

    @include max(xs) {
      padding-top: 8px;
      padding-left: 5px;
      padding-bottom: 6px;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-image: url('/mockup.png');
    background-repeat: no-repeat;
    background-size: contain;
    transform: scaleX(1.05);
  }

  video {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  @include max(md) {
    max-width: 275px;
  }

  @include max(xs) {
    max-width: 200px;
  }
}
</style>
