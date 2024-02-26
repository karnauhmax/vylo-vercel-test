<script lang="ts" setup>
interface Props {
  img: string;
  followingName: string;
  followingSrc: string;
  descrText: string;
  descrImg: string;
  descrName: string;
}
const props = defineProps<Props>();
const { img, followingName, followingSrc, descrText, descrImg, descrName } = toRefs(props);
</script>

<template>
  <div class="video__item">
    <div class="video__item-img">
      <NuxtImg :src="img" alt="video image" placeholder loading="lazy" />
    </div>

    <div class="video__item-following">
      <div class="video__item-following-img">
        <NuxtImg :src="followingSrc" alt="" loading="lazy" />
      </div>
      <div class="video__item-following-name">
        {{ followingName }}
      </div>
      <div class="video__item-following-button">Following</div>
    </div>

    <VideoItemVyloDots />
    <VideoItemArrow />
    <VideoItemDots />
    <VideoItemIcons />

    <div class="video__item-content">
      <div class="video__item-wrap">
        <div class="video__item-title">IN RESPONSE TO</div>

        <div class="video__item-descr">
          <div class="video__item-left">
            <div class="video__item-name">
              <NuxtImg :src="descrName" alt="" placeholder loading="lazy" />
            </div>
            <div class="video__item-text">
              {{ descrText }}
            </div>
          </div>
          <div class="video__item-descr-img">
            <NuxtImg :src="descrImg" alt="" placeholder loading="lazy" />
          </div>
        </div>
      </div>

      <div class="video__item-bg">
        <svg viewBox="0 0 256 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1501_401)">
            <rect x="0.558594" y="0.996216" width="255.144" height="76.2029" rx="21.7723" fill="#1D1D1D" />
            <path
              d="M0.558594 19.3666C0.558594 9.2209 8.78328 0.996216 18.9289 0.996216H237.332C247.478 0.996216 255.702 9.2209 255.702 19.3666V19.3666H0.558594V19.3666Z"
              fill="url(#paint0_linear_1501_401)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1501_401"
              x1="265.191"
              y1="9.86471"
              x2="0.558595"
              y2="9.86474"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#111111" stop-opacity="0" />
              <stop offset="1" stop-color="#313131" />
            </linearGradient>
            <clipPath id="clip0_1501_401">
              <rect x="0.558594" y="0.996216" width="255.144" height="76.2029" rx="21.7723" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video__item {
  width: vw(255px);
  position: absolute;
  overflow: hidden;
  transform: scale(0.496);
  padding-bottom: vw(10px);
  border-radius: vw(50px);
}
.video__item-1 {
  transform-origin: left top;
  top: vw(42px);
  left: vw(14px);
  z-index: 2;
}
.video__item-2 {
  transform-origin: right top;
  top: vw(42px);
  right: vw(14px);
}
.video__item-3 {
  transform-origin: left bottom;
  bottom: vw(42px);
  left: vw(14px);
}
.video__item-4 {
  transform-origin: right bottom;
  bottom: vw(42px);
  right: vw(14px);
}
// following
.video__item-following {
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  top: vw(20px);
  left: vw(10px);
  transform-origin: top left;
  transform: scale(2);
}
.video__item-following-img {
  flex: 0 0 vw(22px);
}
.video__item-following-name {
  font-family: var(--font-medium);
  font-size: vw(10px);
  margin-left: vw(6px);
  color: var(--color-light);
}
.video__item-following-button {
  margin-left: vw(6px);
  font-size: vw(10px);
  font-family: var(--font-medium);
  color: var(--color-light);
  padding: vw(2px) vw(3.4px);
  border: 1px solid var(--color-light);
  border-radius: vw(3.4px);
  opacity: 0;
}

// content
.video__item-content {
  margin-top: vw(-16px);
  position: relative;
}
.video__item-bg svg {
  width: 100%;
}
.video__item-name {
  width: vw(50px);
}
.video__item-wrap {
  position: absolute;
  inset: 0;
}
.video__item-title {
  font-family: var(--font-ex-bold);
  font-size: vw(10px);
  line-height: vw(7px);
  letter-spacing: 0.02em;
  margin-bottom: vw(12px);
}
.video__item-descr {
  display: flex;
}
.video__item-wrap {
  padding-left: vw(13px);
  padding-right: vw(7px);
  padding-bottom: vw(7px);
  padding-top: vw(10px);
}
.video__item-descr-img {
  flex: 0 0 vw(65px);
  transform: translateY(-33%);
}
.video__item-text {
  font-size: vw(10px);
}
</style>
