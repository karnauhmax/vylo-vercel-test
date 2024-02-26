<script setup></script>

<template>
  <section class="banner">
    <div class="banner__text">
      <h2 class="banner__title">
        Vylo is<br/>for sports fans.<br/>By sports fans.
      </h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-image: url('/images/banner-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  padding-block: vw(105px);

  &__text {
    display: grid;
    place-items: center;
    background-image: url('/rounded-decor-circle.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    width: 100%;
    max-width: 820px;
    min-height: 810px;
    padding: 0 50px;

    @include max(bg) {
      max-width: 700px;
    }

    @include max(md) {
      max-width: 550px;
    }

    @include max(xs) {
      max-width: 400px;
    }
  }

  &__title {
    font-size: 100px;
    color: #fff;
    max-width: 638px;
    text-align: center;
    line-height: 0.9;
    font-family: 'Druk', sans-serif;
    text-transform: uppercase;
    @include max(bg) {
      font-size: 70px;
      max-width: 450px;
    }

    @include max(md) {
      font-size: 60px;
      max-width: 350px;
    }

    @include max(xs) {
      font-size: 45px;
      max-width: 250px;
    }
  }
}
</style>
