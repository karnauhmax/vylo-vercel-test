<script setup>
import gsap from "gsap";

function infiniteText() {
  gsap.to('.partners__logo-1 .partners__logo-row', {
    duration: 13,
    ease: 'none',
    xPercent: -50,
    repeat: -1,
  });
}

  onMounted(() => {
    infiniteText();
  });

const logos1 = [
  { img: '/vylo-full.svg' },
  { img: '/vylo-full.svg' },
  { img: '/vylo-full.svg' },
  { img: '/vylo-full.svg' },
  { img: '/vylo-full.svg' },
  { img: '/vylo-full.svg' },
  { img: '/vylo-full.svg' },
  { img: '/vylo-full.svg' },
  { img: '/vylo-full.svg' },
];
</script>

<template>
  <div class="partners__content">
    <div class="partners__logos partners__logo-1">
      <div v-for="_ in 2" class="partners__logo-row">
        <div v-for="{ img } in [...logos1, ...logos1]" class="partners__logo-img">
          <NuxtPicture :src="img" alt="" placeholder loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.partners__content {
     overflow: hidden;
     background: #0000ff;
     position: relative;
     padding-top: 30px;
     padding-bottom: 30px;

     @include max(sm) {
       padding-top: 20px;
       padding-bottom: 20px;
     }
     @include max(xs) {
       padding-top: 20px;
       padding-bottom: 20px;
     }
    }


.partners__logos {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: max-content;

}


.partners__logo-img {
  margin-right: 10px;
  @include max(xs) {
    max-width: 220px;
  }
}

.partners__logo-row {
  display: flex;
  align-items: center;
}
</style>