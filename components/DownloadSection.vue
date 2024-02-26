<template>
  <section class="download">
    <h2 class="download__title">Download on iOS/Android</h2>

    <div class="download__buttons">
      <button class="download__link hover-fadein" @click="openPopup">
        <NuxtImg src="/app-store.svg" alt="app store" width="123" height="50" preload />
      </button>
      <button class="download__link hover-fadein" @click="openPopup">
        <NuxtImg src="/google-play.svg" alt="google play" width="123" height="50" preload />
      </button>
    </div>
  </section>
</template>

<script setup>
import { openPopup } from '@/composables/openPopup';
</script>

<style lang="scss" scoped>
.download {
  background-color: var(--color-white);
  color: var(--color-black);
  padding-bottom: 180px;

  @include max(sm) {
    padding-bottom: 80px;
  }

  &__title {
    font-family: 'OTNeueMontreal-MediumSqueezed';
    text-align: center;
    font-size: 90px;
    margin-bottom: 50px;

    @include max(md) {
      font-size: 70px;
    }

    @include max(sm) {
      margin-bottom: 25px;
    }

    @include max(xs) {
      font-size: 50px;
    }
  }

  &__buttons {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  &__link {
    img {
      max-width: 230px;

      @include max(md) {
        max-width: 180px;
      }

      @include max(xs) {
        max-width: 130px;
      }
    }
  }
}
</style>
