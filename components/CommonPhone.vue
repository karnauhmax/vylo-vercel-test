<template>
  <div class="common__phone">
    <NuxtPicture :src="props.commonPhone" alt="common-phone" width="277" height="562" class="common__phone_img" />
    <div class="video-wrap">
      <NuxtPicture :src="props.responseBlock" alt="response block" class="phone-screen__response-to" loading="lazy" />
      <NuxtImg :src="props.userDataBlock" alt="user data block" class="phone-screen__user-data" loading="lazy" />
      <video ref="videoRef" playsinline loop :muted="isMuted" autoplay preload="none" type="video/mp4" class="video">
        <!-- Sports reaction video below here -->

        <source type="video/mp4" :src="props.video" />
      </video>
    </div>
  </div>
  <div class="common__phone-btn-mute">
    <ButtonUnMute class="light" @click.stop="handleMutePhone" :text="isMuted ? 'Unmute' : 'Mute'" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  commonPhone?: string;
  responseBlock: string;
  userDataBlock: string;
  video: string;
}

const UNIQ_SOUND_ID = Math.floor(Math.random() * 100000);

const videoRef = ref<HTMLVideoElement>();
const isMuted = ref(true);

const props = withDefaults(defineProps<Props>(), {
  commonPhone: '/common-phone2.png',
  responseBlock: '',
  userDataBlock: '',
  video: '',
});

function handleMutePhone() {
  store.videoSoundAction = UNIQ_SOUND_ID;

  nextTick(() => {
    isMuted.value = !isMuted.value;
  });
}

watch(
  () => store.videoSoundAction,
  () => {
    isMuted.value = true;
  },
);
</script>

<style lang="scss" scoped>
.common__phone-btn-mute {
  display: flex;
  justify-content: center;
  margin-top: vw(14px);

  @include max(sm) {
    margin-top: 8px;
  }
}
.common__phone {
  position: relative;
  width: vw(283px);
  margin: 0 auto;

  @include max(sm) {
    width: 100px;
  }
}
.common__phone_img {
  position: relative;
  z-index: 5;
}
.video-wrap {
  position: absolute;
  inset: vw(12px);
  border-radius: vw(30px);
  overflow: hidden;
  z-index: 3;
  isolation: isolate;

  @include max(xs) {
    inset: 4px;
  }
}
.phone-screen__response-to {
  position: absolute;
  top: 75.5%;
  left: 0;
  z-index: 2;

  @include max(sm) {
    top: 75%;
  }
}
.phone-screen__user-data {
  position: absolute;
  top: 69.5%;
  left: vw(16px);
  width: vw(175px);
  z-index: 2;

  @include max(sm) {
    top: 68%;
    left: 8px;
    transform: scale(0.85);
    transform-origin: left;
  }
}
.video {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  isolation: isolate;
  object-fit: cover;
}
</style>
