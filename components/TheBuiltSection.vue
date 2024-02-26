<template>
  <section class="built">
    <div class="built__content">
      <h2 class="titling built__title">BUILT BY SPORTS FANS. FOR SPORTS FANS. DOWNLOAD NOW.</h2>
    </div>

    <div class="other-photos">
      <OtherPhoto
        v-for="(photo, i) in otherPhotos"
        :key="i"
        :class="`other-photo-${i + 1}`"
        :src="photo.src"
        :width="photo.width"
        :height="photo.height"
        :alt="String(i + 1)"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const UNIQ_SOUND_ID = Math.floor(Math.random() * 100000);

const videoItems = [
  {
    img: '/video-1.png',
    followingName: 'Alexis Wangmene',
    followingSrc: '/user-1.png',
    descrText: 'The 3 Key Moves the Lakers Must Make Before the Trade Deadline',
    descrImg: '/descr-img-1.png',
    descrName: '/sbnation.svg',
  },
  {
    img: '/video-1.png',
    followingName: 'Alexis Wangmene',
    followingSrc: '/user-1.png',
    descrText: 'The 3 Key Moves the Lakers Must Make Before the Trade Deadline',
    descrImg: '/descr-img-1.png',
    descrName: '/sbnation.svg',
  },
  {
    img: '/video-1.png',
    followingName: 'Alexis Wangmene',
    followingSrc: '/user-1.png',
    descrText: 'The 3 Key Moves the Lakers Must Make Before the Trade Deadline',
    descrImg: '/descr-img-1.png',
    descrName: '/sbnation.svg',
  },
  {
    img: '/video-1.png',
    followingName: 'Alexis Wangmene',
    followingSrc: '/user-1.png',
    descrText: 'The 3 Key Moves the Lakers Must Make Before the Trade Deadline',
    descrImg: '/descr-img-1.png',
    descrName: '/sbnation.svg',
  },
];

const screens = [
  { src: '/first-screen.png' },
  { src: '/sequence/01.webp' },
  { src: '/third-screen.png' },
  { src: '/sequence/01.webp' },
];

const screenContent = [
  {
    title1: 'Browse sports news and reaction videos',
    title2: '',
    descr: 'A curated newsfeed of the sports you love - watch and create reaction videos',
  },
  {
    title1: 'Sportsbook insights and predictions',
    title2: '',
    descr: 'Matchups, lines, and odds - watch reactions, analysis, and prediction videos from the pros',
  },
  {
    title1: 'One sports app to keep you up to speed',
    title2: '',
    descr: 'The latest fantasy sports insights and info to keep you up to speed',
  },
  {
    title1: 'The best sports community',
    title2: '',
    descr: 'Vylo is the home of sports news and commentary - welcome to your favorite sports app',
  },
];

const otherPhotos = [
  { src: '/other-photo-1.png', width: 551, height: 493 },
  { src: '/other-photo-2.png', width: 551, height: 493 },
  { src: '/other-photo-3.png', width: 551, height: 493 },
  { src: '/other-photo-4.png', width: 551, height: 493 },
  { src: '/other-photo-5.png', width: 551, height: 493 },
  { src: '/other-photo-6.png', width: 551, height: 493 },
  { src: '/other-photo-7.png', width: 551, height: 493 },
  { src: '/other-photo-8.png', width: 551, height: 493 },
  { src: '/other-photo-9.png', width: 551, height: 493 },
  { src: '/other-photo-10.png', width: 551, height: 493 },
  { src: '/other-photo-11.png', width: 551, height: 493 },
];
</script>

<style lang="scss" scoped>
.built {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  display: grid;
  place-items: center;
  padding-block: 50px;

  &__title {
    color: #fff;
    position: relative;
    z-index: 100;
    text-align: center;
    max-width: 646px;

    @include max(sm) {
      font-size: 34px;
      max-width: 300px;
    }
  }
}

.other-photos {
  position: absolute;
  inset: 0;
}
.other-photo-1 {
  width: vw(116px);
  margin-top: vw(-70px);
  margin-left: vw(-467px);
  z-index: 2;
  @include max(sm) {
    margin-top: -70px;
    margin-left: -457px;
    width: 116px;
  }
}
.other-photo-2 {
  width: vw(275px);
  margin-top: vw(-23px);
  margin-left: vw(-330px);
  z-index: 1;
  @include max(sm) {
    margin-top: -23px;
    margin-left: -330px;
    width: 275px;
  }
}
.other-photo-3 {
  width: vw(157px);
  margin-top: vw(186px);
  margin-left: vw(-383px);
  @include max(sm) {
    margin-top: 186px;
    margin-left: -383px;
    width: 157px;
  }
}
.other-photo-4 {
  width: vw(275px);
  margin-top: vw(-152px);
  margin-left: vw(-174px);
  z-index: 1;
  @include max(sm) {
    margin-left: -174px;
    width: 275px;
  }
}
.other-photo-5 {
  width: vw(275px);
  margin-top: vw(-42px);
  margin-left: vw(-196px);
  @include max(sm) {
    margin-top: -42px;
    margin-left: -196px;
    width: 275px;
  }
}
.other-photo-6 {
  width: vw(275px);
  margin-top: vw(179px);
  margin-left: vw(-135px);
  z-index: 1;
  @include max(sm) {
    margin-top: 179px;
    margin-left: -135px;
    width: 275px;
  }
}
.other-photo-7 {
  width: vw(275px);
  margin-top: vw(-142px);
  margin-left: vw(126px);
  z-index: 1;
  @include max(sm) {
    margin-left: 126px;
    margin-top: -142px;
    width: 275px;
  }
}
.other-photo-8 {
  width: vw(275px);
  margin-top: vw(130px);
  margin-left: vw(20px);
  z-index: 2;
  @include max(sm) {
    margin-top: 130px;
    margin-left: 20px;
    width: 275px;
  }
}
.other-photo-9 {
  width: vw(275px);
  margin-top: vw(180px);
  margin-left: vw(240px);
  z-index: 1;
  @include max(sm) {
    margin-top: 180px;
    margin-left: 240px;
    width: 275px;
  }
}
.other-photo-10 {
  width: vw(177px);
  margin-top: vw(10px);
  margin-left: vw(235px);
  @include max(sm) {
    margin-left: 235px;
    margin-top: 10px;
    width: 177px;
  }
}
.other-photo-11 {
  width: vw(198px);
  margin-top: vw(-90px);
  margin-left: vw(410px);
  z-index: 2;
  @include max(sm) {
    margin-left: 410px;
    margin-top: -90px;
    width: 198px;
  }
}
</style>
