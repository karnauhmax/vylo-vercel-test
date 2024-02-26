<script lang="ts" setup>
interface Props {
  src: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
}
const props = defineProps<Props>();
const { src } = toRefs(props);
</script>

<template>
  <div class="other-photo">
    <NuxtPicture :src="src" :alt="alt" :width="props.width" :height="props.height" placeholder />
  </div>
</template>

<style lang="scss" scoped>
.other-photo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
</style>
