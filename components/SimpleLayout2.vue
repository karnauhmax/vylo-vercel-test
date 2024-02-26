<template>
  <div>
    <div class="tertiary-wrap">
      <p>
        {{ descr }}
      </p>
      <div>
        <h2 v-html="title" class="tertiary-trending__title"></h2>

      </div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  descr: {
    type: String,
    required: true,
  },

  video: {
    type: String,
    required: true,
  },

  backgroundImage: {
    type: String,
    default: '1',
  },

  index: {
    type: Number,
  },
});

const isEven = computed(() => {
  return props.index % 2 === 0;
});
</script>

<style lang="scss" scoped>

.tertiary-trending__title {
  margin-bottom: 0;
  position: relative;
  display: block;
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', arial;
  text-align: left;
  font-size: vw(20px);
  font-style: normal;
  line-height: 140%;
  font-feature-settings: "clig" off, "liga" off;
  color: #000;

  @include max(sm) {
    font-size: 20px;
  }
}

svg {
  max-width: 100%;
}
</style>
