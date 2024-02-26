<script setup>
import { closePopup } from '@/composables/closePopup';
</script>
<template>
  <div class="scan">
    <div class="scan-bg"></div>

    <div class="scan-content">
      <div class="scan-close hover-fadein" @click="closePopup">
        <IconClose />
      </div>

      <p class="scan-text">Download Vylo</p>

      <div class="app-links">
        <NuxtLink
          href="https://apps.apple.com/us/app/vylo/id1627569855"
          target="_blank"
          class="hero__download-link hover-fadein"
        >
          <NuxtImg src="/app-store.svg" alt="app store" width="163" height="50" loading="lazy" />
        </NuxtLink>
        <NuxtLink
          href="https://play.google.com/store/apps/details?id=com.vylo.androidapplication"
          target="_blank"
          class="hero__download-link hover-fadein"
        >
          <NuxtImg src="/google-play.svg" alt="google play" width="163" height="50" loading="lazy" />
        </NuxtLink>
      </div>

      <div class="scan-code">
        <NuxtImg src="/vylo-qr.svg" alt="" loading="lazy" />
      </div>

      <div class="scan-download">
        <div class="scan-download__arrow">
        </div>
        <div class="scan-download__text">Scan the QR code to download the app</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.scan {
  position: fixed;
  inset: 0;
  z-index: 9999;
  opacity: 0;
  display: none;
}

.scan-text {
  position: absolute;
  left: 50%;
  top: vw(98px);
  width: max-content;
  transform: translateX(-50%);
  color: var(--color-black);
  font-family: "Druk", arial;
  font-size: vw(55px);
  text-transform: uppercase;
  line-height: 88%;
}

.app-links {
  position: absolute;
  top: vw(170px);
  left: 50%;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
}

.hero__download-link {
  width: 121px;
  height: 36px;

  &:first-child {
    margin-right: 14px;
  }
}

.scan-close {
  cursor: pointer;
}

.scan-bg {
  position: absolute;
  inset: 0;
  background: var(--color-black);
  opacity: 0.8;
}

.scan-content {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  border-radius: 20%;
  background: var(--color-white);
  color: var(--color-black);
  width: vw(603px);
  height: vw(603px);
  @include max(sm) {
    width: 603px;
    height: 603px;
  }
  @include max(xs) {
    width: 310px;
    height: 310px;
  }
}

.scan-close {
  position: absolute;
  top: vw(40px);
  left: 50%;
  transform: translateX(-50%);
  @include max(sm) {
    top: 40px;
  }
  @include max(xs) {
    top: 20px;
  }
}

.scan-code {
  width: vw(225px);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: vw(240px);

  @include max(sm) {
    width: 250px;
    top: 181px;
  }
  @include max(xs) {
    width: 100px;
    top: 105px;
  }
}
.scan-download {
  position: absolute;
  bottom: vw(81px);
  left: 50%;
  transform: translateX(-50%);
  @include max(sm) {
    bottom: 41px;
  }
  @include max(xs) {
    bottom: 20px;
  }
}
.scan-download__text {
  // width: vw(130px);
  text-align: center;
  margin-top: vw(10px);
  font-family: "OTNeueMontreal-MediumSemiSqueezed", arial;
  color: #0000FF;
  font-size: vw(18px);
  line-height: 100%;
  @include max(sm) {
    width: 130px;
    font-size: 22px;
    margin-top: 10px;
  }
  @include max(xs) {
    width: 80px;
    font-size: 14px;
    margin-top: 4px;
  }
}
.scan-download {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
