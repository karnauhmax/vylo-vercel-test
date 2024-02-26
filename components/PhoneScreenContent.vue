<script lang="ts" setup>
interface Props {
  data: {
    title1: string | null;
    title2: string | null;
    descr: string | null;
  };
}

const props = defineProps<Props>();
const { data } = toRefs(props);
</script>

<template>
  <div class="screen-content screen-content__anim">
    <div class="screen-content__title">
      <p class="fly-titling">
        {{ data.title1 }}
      </p>
      <p class="fly-subserif">
        {{ data.title2 }}
      </p>
    </div>
    <p class="screen-content__description">
      {{ data.descr }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.screen-content {
  position: absolute;
  top: 50%;
  bottom: unset;
  left: vw(56px);
  transform: translate(0, -50%);
  opacity: 0;
  visibility: hidden;

  @include max(sm) {
    // bottom: var(--bottom-content-gap);
    top: 81svh;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.screen-content__title {
  width: vw(515px);
  text-transform: uppercase;

  @include max(sm) {
    width: 90vw;
    text-align: center;
  }
}
.screen-content__title > span {
  display: inline-block;
}
.screen-content__description {
  width: vw(382px);
  color: #0000ff;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'SuisseIntl-Regular', arial;
  font-size: vw(20px);
  font-style: normal;
  font-weight: 400;
  line-height: 122%;
  margin-top: 27px;
  text-align: unset;

  @include max(sm) {
    width: 100%;
    margin-top: 5px;
    font-size: 16px;
    text-align: center;
    display: none;
  }
}
</style>
