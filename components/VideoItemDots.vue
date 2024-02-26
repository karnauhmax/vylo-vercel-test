<script lang="ts" setup></script>
<template>
  <div class="video__item-dots">
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.16016 8.56785C5.16016 8.31734 5.36323 8.11426 5.61374 8.11426C5.86426 8.11426 6.06733 8.31734 6.06733 8.56785C6.06733 8.81836 5.86426 9.02144 5.61374 9.02144C5.36323 9.02144 5.16016 8.81836 5.16016 8.56785Z"
        stroke="white"
        stroke-width="1.08861"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.16016 5.84641C5.16016 5.5959 5.36323 5.39282 5.61374 5.39282C5.86426 5.39282 6.06733 5.5959 6.06733 5.84641C6.06733 6.09692 5.86426 6.3 5.61374 6.3C5.36323 6.3 5.16016 6.09692 5.16016 5.84641Z"
        stroke="white"
        stroke-width="1.08861"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.16016 3.12473C5.16016 2.87422 5.36323 2.67114 5.61374 2.67114C5.86426 2.67114 6.06733 2.87422 6.06733 3.12473C6.06733 3.37524 5.86426 3.57832 5.61374 3.57832C5.36323 3.57832 5.16016 3.37524 5.16016 3.12473Z"
        stroke="white"
        stroke-width="1.08861"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>
<style lang="scss" scoped>
.video__item-dots {
  width: vw(24px);
  right: vw(30px);
  top: vw(23px);
  z-index: 2;
  position: absolute;
}
.video__item-dots svg {
  width: 100%;
}
</style>
