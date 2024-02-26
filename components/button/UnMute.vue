<template>
  <button class="btn-unmute">
    <p class="btn-unmute__text">{{ props.text }}</p>
    <div class="btn-unmute__icon">
      <Transition name="show" mode="out-in">
        <IconUnMute v-if="props.text === 'Unmute'" />
        <IconOnMute v-else />
      </Transition>
    </div>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.btn-unmute {
  display: flex;
  align-items: center;
  padding: vw(3.55px) vw(7.09px) vw(3.55px) vw(5.91px);
  border-radius: vw(55px);
  border: 1px solid var(--color-black);

  @include max(sm) {
    padding: 2px 2px 2px 1px;
    border-radius: 50%;
  }

  .btn-unmute__text {
    margin: 0;
  }
}
.btn-unmute.light {
  border: 1px solid var(--color-white);

  .btn-unmute__text {
    color: var(--color-white);
  }

  & > .btn-unmute__icon > svg:deep(circle) {
    fill: white;
  }
  & > .btn-unmute__icon > svg:deep(path) {
    fill: var(--color-black);
  }
  & > .btn-unmute__icon > svg:deep(rect) {
    fill: var(--color-black);
  }
}
.btn-unmute__icon > svg {
  display: block;
  width: 100%;
  height: 100%;

  @include max(sm) {
    width: 20px;
    height: 20px;
  }
}
.btn-unmute__icon {
  display: block;
  margin-left: vw(5px);
  width: vw(19px);
  height: vw(19px);

  @include max(sm) {
    width: 20px;
    height: 20px;
  }
}
.btn-unmute__text {
  color: var(--color-black);
  font-family: 'SuisseIntl-Regular', arial;
  font-size: vw(12.597px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @include max(sm) {
    display: none;
  }
}
.show-enter-active,
.show-leave-active {
  transition: all 0.2s;
}
.show-enter-from,
.show-leave-to {
  opacity: 0;
}
</style>
