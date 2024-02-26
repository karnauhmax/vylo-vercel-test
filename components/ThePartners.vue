<script lang="ts" setup>
const logos1 = [
  { img: '/partner-1.png', width: '185', height: '46' },
  { img: '/partner-3.png', width: '176', height: '57' },
  { img: '/partner-4.png', width: '219', height: '44' },
  { img: '/partner-5.png', width: '164', height: '80' },
  { img: '/partner-6.png', width: '229', height: '31' },
  { img: '/partner-2.png', width: '240', height: '31' },

  { img: '/partner-7.png', width: '216', height: '32' },
  { img: '/partner-8.png', width: '164', height: '56' },
  { img: '/partner-9.png', width: '240', height: '62' },
  { img: '/partner-10.png', width: '185', height: '46' },
  { img: '/partner-11.png', width: '155', height: '61' },
  { img: '/partner-10.png', width: '185', height: '46' },
];

</script>
<template>
  <section class="partners">
    <div class="partners__inner">
      <div class="partners__item">
        <h3 class="partners__title">Sports news</h3>

        <ul class="partners__list">
          <li class="partners__logo" v-for="{ img, width, height } in logos1" :key="img">
            <img :src="img" alt="" :width="width" :height="height" loading="lazy" />
          </li>
        </ul>
      </div>
      <div class="partners__item">
        <h3 class="partners__title partners__title--leagues">Matchups from your favorite leagues</h3>

        <ul class="partners__list">
          <li class="partners__logo" v-for="{ img, width, height } in logos1" :key="img">
            <img :src="img" alt="" :width="width" :height="height" loading="lazy" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partners {
  padding: 0 30px;
  background-color: #fff;
  &__title {
    font-family: "DrukTextWide-Medium", arial;
    text-transform: uppercase;
    font-size: vw(24px);
    text-align: center;
    margin-bottom: 60px;
    color: #0000FF;

    @include max(md) {
      margin-bottom: 50px;
      font-size: 18px;
    }

    @include max(sm) {
      margin-bottom: 37px;
    }
  }

  &__title--leagues {
    @include max(sm) {
      max-width: none;
      margin-inline: auto;
    }
  }

  &__inner {
    display: grid;
    justify-items: center;
    row-gap: 170px;

    @include max(md) {
      row-gap: 120px;
    }

    @include max(sm) {
      row-gap: 70px;
    }
  }

  &__item {
    max-width: 1100px;
    width: 100%;
  }

  &__logo {
    img {
      @include max(sm) {
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    align-items: center;
    column-gap: 75px;
    row-gap: 45px;
    list-style-type: none;
    padding: 0;
    margin: 0;

    @include max(md) {
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }

    @include max(sm) {
      column-gap: 35px;
      row-gap: vw(70px);
    }
  }
}
</style>


