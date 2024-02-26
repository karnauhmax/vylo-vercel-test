<script lang="ts" setup></script>

<template>
  <div class="phone-wrapper">
    <NuxtPicture
      src="/common-phone2.png"
      alt="phone"
      width="277"
      height="562"
      class="first-phone"
      sizes="400px"
      preload
    />
  </div>
</template>

<style lang="scss" scoped>
.phone-wrapper {
  position: relative;
}

.first-phone {
  position: relative;
  z-index: 1;
}

.second-phone {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
}

.third-phone {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  opacity: 0;
}
</style>
