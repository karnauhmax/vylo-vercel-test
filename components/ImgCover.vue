<script lang="ts" setup>
interface Props {
  src: string;
  alt: string;
}
const props = defineProps<Props>();
const { src, alt } = toRefs(props);
</script>
<template>
  <NuxtImg class="img-cover" :src="src" :alt="alt" loading="lazy" />
</template>
<style lang="scss" scoped>
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
</style>
