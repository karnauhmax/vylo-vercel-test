<template>
  <div class="small-screen">
    <NuxtImg :src="props.overlay" alt="overlay image" class="overlay" placeholder loading="lazy" />
    <video ref="videoRef" playsinline loop muted autoplay preload="none" class="video" type="video/mp4">
      <!-- <source
        type="video/mp4"
        :src="'https://api.avalon-inc.com.ua/storage/media/37-1-1686925077wRDRn.mp4'"
      /> -->
      <source type="video/mp4" :src="props.video + '#t=0.1'" />
    </video>
  </div>
</template>

<script setup lang="ts">
interface Props {
  overlay: string;
  video: string;
}

const videoRef = ref();
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.small-screen {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
}

.overlay {
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  height: calc(100% + 5px);
  z-index: 5;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: cover;
}
</style>
