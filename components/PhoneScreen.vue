<script lang="ts" setup>
interface Props {
  img: string;
}
const props = defineProps<Props>();
const { img } = toRefs(props);
</script>
<template>
  <div class="phone-screen">
    <video :controls="false" muted autoplay loop class="video">
      <source src="https://d1b0m323yzr2le.cloudfront.net/landing/video/kevin.mp4" />
    </video>
    <!-- <NuxtImg class="phone-screen__image" :src="img" alt="" /> -->
  </div>
</template>
<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.phone-screen {
  position: absolute;
  inset: 0;
  opacity: 0;
}

.phone-screen__image {
  width: 100%;
  height: 100%;
}
</style>
