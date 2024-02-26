<script lang="ts" setup>
import { IndexPageAnimation } from '~/animations/IndexPageAnimation';
import AboutUs from '~/components/AboutUs.vue';
import type OurStoryVue from '~/components/OurStory.vue';
import TheBuiltSection from '~/components/TheBuiltSection.vue';

const animation = ref<IndexPageAnimation | null>(null);

// Initialize the animation on mount
onMounted(() => {
  animation.value = new IndexPageAnimation('.index-page');
});

// Use the beforeUnmount to clean up animations
onBeforeUnmount(() => {
  animation.value?.cleanupAnimations();
});
</script>

<template>
  <div class="page index-page">

    <div class="index-trending">
      <AboutUs />
    </div>


    <div>
      <OurStory />
    </div>

    <div>
      <TeamPage />
    </div>

    <TheFooter />
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" scoped>
.index-page {
  background-color: #fff;
}

.index-ticker {
  margin-block: 30px;
}

.index-gif {
  @include max(xs) {
    display: none;
  }
}
.index-hero {
  @include max(xs) {
    /* height: 100svh; */
  }
}

.index-trending {
  background: var(--color-black);
  color: var(--color-white);
}

.index-trending + footer {
  background: var(--color-black);
  color: var(--color-white);
  padding-top: vw(50px);
}

.index-page footer > div:last-child {
  opacity: 0.5;
}
.index-partners {
  padding-block: 150px;

  @include max(xs) {
    padding-block: 50px;
    padding-bottom: 100px;
  }
}

</style>
