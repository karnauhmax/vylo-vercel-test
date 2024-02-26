<template>
  <button class="base-button p1" :class="{ active: active }" @click="buttonClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonClick() {
      this.$emit('buttonCLick');
    },
  },
};
</script>

<style scoped lang="scss">
.base-button {
  padding: 5px 10px;
  border-radius: 62px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  opacity: 0.5;

  transition: opacity 0.3s ease;

  cursor: pointer;

  &.active {
    border-color: #94fad8;
    color: #94fad8;
    opacity: 1;

    cursor: default;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
}
</style>
