<template>
  <section class="note-gif">
    <div class="note"></div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>

.note-gif {
  background: #111;
}
.note {
  min-height: 100vh;
  color: var(--color-white);
  padding-block: 50px;
  display: grid;
  align-items: center;
  background-image: url('/images/ultimate-vylo.webp');
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-size: cover;
  background-position: center center;

  &__title {
    font-family: 'Druk', sans-serif;
    text-transform: uppercase;
    font-size: vw(218px);
    text-align: center;
    margin: 0 auto;
    line-height: 1;
    width: 0;
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }

  @include max(sm) {
    min-height: 80vw;
  }

  @include max(xs) {
    min-height: 100vh;
  }
}
</style>
