<script lang="ts" setup>
import gsap from 'gsap';

useRequestAnimationFrame(parallax);

let count = 0;

function parallax() {
  const photos = document.querySelectorAll('.hero__photo');

  count += 0.008;
  photos.forEach((photo, i) => {
    gsap.set(photo, {
      x: Math.cos(i === 0 || i === 3 ? count : -count) * (i + 8),
      y: Math.sin(i === 0 || i === 3 ? count : -count) * (i + 8),
    });
  });
}
</script>
<template>
  <div class="hero__photos">
    <div class="hero__photo hero__photo-1">
      <NuxtPicture src="/photo-1.png" alt="Vylo app screenshot" placeholder loading="lazy" />
    </div>
    <div class="hero__photo hero__photo-2">
      <NuxtPicture src="/photo-2.png" alt="Vylo app screenshot" placeholder loading="lazy" />
    </div>
    <div class="hero__photo hero__photo-3">
      <NuxtPicture src="/photo-1.png" alt="Vylo app screenshot" loading="lazy" />
    </div>
    <div class="hero__photo hero__photo-4">
      <NuxtPicture src="/photo-2.png" alt="Vylo app screenshot" loading="lazy" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero__photo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @include max(xs) {
    transform: translate(-50%, -50%);
  }
}
.hero__photo img,
.hero__photo picture {
  opacity: 0;
}
.hero__photo-1 {
  width: vw(101px);
  left: vw(728px);
  margin-top: vw(-200px);
  @include max(sm) {
    width: 101px;
    left: 69px;
    margin-top: 40px;
  }
  @include max(xs) {
    left: 50%;
    margin-top: -10px;
    margin-left: -210px;
  }
}
.hero__photo-2 {
  width: vw(96px);
  left: vw(1256px);
  margin-top: vw(-80px);
  @include max(sm) {
    width: 96px;
    left: auto;
    right: 83px;
    margin-top: 90px;
  }
  @include max(xs) {
    right: auto;
    left: 50%;
    margin-left: 210px;
    margin-top: 60px;
  }
}
.hero__photo-3 {
  width: vw(75px);
  left: vw(787px);
  opacity: 0.4;
  margin-top: vw(120px);
  @include max(sm) {
    width: 75px;
    left: 120px;
    margin-top: 290px;
  }
  @include max(xs) {
    left: 50%;
    margin-left: -180px;
    margin-top: 250px;
  }
}
.hero__photo-4 {
  width: vw(27px);
  left: vw(1242px);
  opacity: 0.2;
  margin-top: vw(170px);
  @include max(sm) {
    width: 27px;
    left: auto;
    right: 166px;
    margin-top: 320px;
  }
  @include max(xs) {
    right: auto;
    left: 50%;
    margin-left: 150px;
    margin-top: 300px;
  }
}
</style>
