<script lang="ts" setup>
interface Props {
  text: string;
  link?: string;
  isLink?: boolean;
}
const props = defineProps<Props>();
const { text, link, isLink = false } = toRefs(props);
</script>
<template>
  <button v-if="!isLink" class="btn hover-fadein">
    {{ text }}
  </button>

  <NuxtLink v-else :href="link" target="_blank" class="btn hover-fadein">
    {{ text }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.btn {
  font-size: vw(30px);
  line-height: vw(25px);
  font-family: 'Druk', Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: vw(14px) vw(38px);
  background: #202020;
  color: #fff;
  border: vw(1.6px) solid #525252;
  border-radius: vw(33px);
  white-space: nowrap;

  @include max(sm) {
    border-radius: 32px;
    font-size: 20px;
    line-height: 25px;
    padding: 14px 38px;
    border-width: 1.6px;
  }
  @include max(xs) {
    border-radius: 21px;
    font-size: 13px;
    line-height: 17px;
    padding: 9px 26px;
    border-width: 1px;
  }
}
</style>
