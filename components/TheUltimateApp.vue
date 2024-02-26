<template>
  <section class="ultimate">
    <div class="ultimate__inner">
      <h2 class="titling ultimate__title">
        EVERYTHING IN ONE APP. <br />
        WE BRING IT ALL.
      </h2>

      <ul class="ultimate__mockups">
        <li v-for="{ id, title, video } in items" :key="id" class="ultimate__item">
          <MockupPhoneVideo :video="video" />
          <h3 class="ultimate__subtitle">
            {{ title }}
          </h3>
        </li>
      </ul>

      <LineText class="ultimate__line ultimate__line--1" />
      <LineText theme="green" class="ultimate__line ultimate__line--2" />
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    id: 1,
     video: '/video/video-2',
    title: 'Sports News',
  },
  {
    id: 2,
    video: '/video/video-1',
    title: 'Hot Takes & Reactions',
  },
  {
    id: 3,
    video: '/video/video-2',
    title: 'Games & Odds',
  },
];
</script>

<style lang="scss" scoped>
.ultimate {
  min-height: 100vh;
  background-color: #fff;
  // padding-inline: 20px;
  padding-block: 150px;
  position: relative;
  overflow: hidden;

  @include max(sm) {
      padding-block: 50px;
    }

  &__line {
    position: absolute;
    z-index: 0;
    width: 120%;
    left: 50%;
  }

  &__line--1 {
    transform: rotate(-15deg) translateX(-50%);
    top: 30%;

    @include max(sm) {
      top: 10%;
    }
  }

  &__line--2 {
    transform: rotate(5deg) translateX(-50%);
    top: 60%;

    @include max(sm) {
      top: 20%;
    }

    @include max(xs) {
      transform: rotate(15deg) translateX(-50%);
    }
  }

  &__mockups {
    display: flex;
    align-items: start;
    gap: clamp(1.875rem, -1.042rem + 6.08vw, 8.25rem);
    justify-content: center;
    list-style-type: none;
    padding: 0;

    @include max(xs) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__inner {
    gap: 50px;

    @include max(bg) {
      gap: 25px;
      justify-content: center;
    }

    @include max(md) {
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 0;
    }
  }

  @include max(md) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @include max(sm) {
    padding-left: 20px;
    padding-right: 20px;
  }

  &__title {
    font-size: 120px;
    color: #000;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: clamp(1.875rem, 0.625rem + 2.6vw, 5.75rem);

    @include max(md) {
      font-size: 100px;
    }

    @include max(sm) {
      font-size: 60px;
    }
  }

  &__images {
    display: flex;
    align-items: end;
    gap: 15px;
  }

  &__item {
    display: grid;
    justify-items: center;
    grid-auto-rows: min-content;
    row-gap: 50px;

    @include max(sm) {
      row-gap: 12px;
    }
  }

  &__subtitle {
    text-align: center;
    font-family: 'DrukTextWide-Medium', arial;
    line-height: 92%;
    font-size: vw(24px);
    text-transform: uppercase;
    margin: 0;
    max-width: 330px;

    @include max(sm) {
    font-size: 18px;
    margin: 20px 0;
  }
  }

  &__media {
    background-color: tomato;
    border-radius: 15px;
    width: 100%;
    overflow: hidden;

    img,
    picture,
    video {
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__media--small {
    max-width: 170px;
    height: 260px;

    @include max(bg) {
      max-width: 130px;
      height: 180px;
    }

    @include max(md) {
      display: none;
    }
  }

  &__media--medium {
    max-width: 184px;
    height: 344px;

    @include max(bg) {
      max-width: 154px;
      height: 250px;
    }

    @include max(md) {
      display: none;
    }
  }

  &__media--big {
    max-width: 400px;
    height: 700px;

    @include max(bg) {
      height: 600px;
      flex-grow: 1;
    }
  }

  &__media--mobile {
    width: 100%;
    max-width: 600px;
    height: 420px;
    margin: 0 auto 40px auto;

    @include max(xs) {
      max-width: 300px;
      height: 320px;
    }
  }

  &__left {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
    width: 100%;
    max-width: 600px;

    @include max(bg) {
      max-width: 500px;
    }

    @include max(md) {
      gap: 0;
      margin-bottom: 40px;
      max-width: 100%;
    }

    .ultimate__subtitle {
      @include max(md) {
        display: none;
      }
    }
  }

  &__right {
    align-self: center;
    width: 100%;
    max-width: 400px;

    @include max(bg) {
      max-width: 300px;
    }

    @include max(md) {
      display: none;
    }
  }

  &__middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    max-width: 440px;
    @include max(md) {
      display: none;
    }
  }

  &__mobile {
    width: 100%;
    display: none;

    @include max(md) {
      display: block;
    }
  }

  &__list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: grid;
    li {
      font-weight: 700;
      font-family: 'Formular-Bold', sans-serif;
      font-size: 18px;
      padding-bottom: 15px;
      margin-bottom: 0;
      &:not(:first-child) {
        padding-top: 15px;
        border-top: 2px solid #ccc;
      }
    }
  }

  .elevated-big {
    margin-bottom: 60px;
  }

  .elevated-small {
    margin-bottom: 30px;
  }
}
</style>
