<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__content">
        <HeroText />
      </div>
      <div class="hero__media">
        <LineText class="hero__line hero__line--top" />
        <LineText class="hero__line hero__line--top-bottom" theme="green" />
        <video muted autoplay playsinline loop preload="auto">
          <!-- For screens 768 pixels or less -->
          <source src="/video/main-video-optimized.webm" type="video/webm" media="screen and (max-width: 768px)" />
          <source src="/video/main-video-optimized.mp4" type="video/mp4" media="screen and (max-width: 768px)" />

          <!-- For screens larger than 768 pixels -->
          <source src="/video/main-video.webm" type="video/webm" />
          <source src="/video/main-video.mp4" type="video/mp4" />
        </video>

        <LineText class="hero__line hero__line--bottom" />
        <LineText theme="green" class="hero__line hero__line--bottom-top" />
      </div>
    </div>
  </section>
</template>

<script setup>
const heroBottomData = ['Sport News', 'Hot Takes'];
</script>

<style lang="scss" scoped>
.hero {
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  /* min-height: calc(100vh); 
  min-height: calc(100svh); */

  &__inner {
    display: flex;
    gap: 10px;

    @include max(sm) {
      flex-direction: column;
    }
  }

  &__content {
    flex-basis: vw(760px);
    padding-top: 90px;
    align-self: center;
    width: 100%;
    padding-left: 50px;

    @include max(sm) {
      flex-basis: unset;
      padding-left: 20px;
      padding-right: 55px;
    }
  }

  &__line {
    position: absolute;
    width: 150%;
    z-index: 3;
  }

  &__line--top {
    left: 50%;
    transform: translateX(-50%) rotate(-15deg);
    top: 55px;
  }

  &__line--top-bottom {
    left: 50%;
    transform: translateX(-50%) rotate(15deg);
    top: 55px;
    z-index: 1;
  }

  &__line--bottom {
    left: 50%;
    transform: translateX(-50%) rotate(-10deg);
    bottom: 10px;
  }

  &__line--bottom-top {
    left: 50%;
    transform: translateX(-50%) rotate(15deg);
    bottom: 50px;
  }
}

.hero__media {
  flex-basis: 58vw;
  width: 100%;
  height: 100vh;
  min-height: inherit;
  max-height: 1044px;
  overflow: hidden;
  position: relative;

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }

  @include max(sm) {
    flex-basis: unset;
    height: 50vh;
    min-height: unset;
  }
}
</style>
