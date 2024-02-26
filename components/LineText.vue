<template>
  <div :class="`line-text ${theme === 'blue' ? 'blue' : 'green'}`">
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
    <p>Sports</p>
    <p>Hot takes</p>
    <p>Sports news</p>
    <p>Matchup reactions</p>
  </div>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    default: 'blue',
  },
});
</script>

<style lang="scss" scoped>
.line-text {
  display: flex;
  align-items: center;
  gap: 60px;
  padding-inline: 70px;
  min-height: 70px;
  text-transform: uppercase;
  margin-top: auto;
  overflow: hidden;

  @include max(xs) {
    gap: 40px;
    min-height: 30px;
  }

  &.blue {
    background-color: var(--brand-blue);
    color: var(--color-white);
  }

  &.green {
    background-color: #ccff1e;
    color: var(--color-black);
  }

  @include max(sm) {
    padding-inline: 20px;
  }

  p {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 30px;
    font-family: 'OTNeueMontreal-MediumSqueezed', sans-serif;
    font-weight: 700;
    white-space: nowrap;
    @include max(md) {
      font-size: 14px;
    }
  }
}
</style>
