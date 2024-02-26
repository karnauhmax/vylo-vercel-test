<template>
  <div>
    <div class="secondary-wrap">
      <p>
        {{ descr }}
      </p>
      <div>
        <h2 v-html="title" class="secondary-trending__title"></h2>

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

.secondary-trending__title {
  margin-bottom: 0;
  position: relative;
  display: block;
  font-family: "Druk", Arial;
  text-align: center;
  font-size: vw(110px);
  font-style: normal;
  line-height: 88%;
  font-feature-settings: "clig" off, "liga" off;
  text-transform: uppercase;

  @include max(sm) {
    font-size: 62px;
  }
}

svg {
  max-width: 100%;
}
</style>
