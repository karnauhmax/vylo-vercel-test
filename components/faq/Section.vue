<template>
  <div class="container" v-if="section">
    <div class="breedcrum">
      <p class="breedcrum-parent" @click="handleBack">FAQs >&nbsp;</p>
      <p class="breedcrum-child">{{ section.title }}</p>
    </div>
    <div class="selected-section">
      <h1 class="one-section-title">{{ section.title }}</h1>
    </div>
    <div v-for="(item, index) in articles">
      <p class="selected-section-article" @click="handleArticle(item.id)">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section', 'articles'],
  components: {},
  data() {
    return {};
  },
  methods: {
    handleBack() {
      this.$router.push('faq');
    },
    handleArticle(articleId) {
      this.$router.push(`faq?section=${this.section.id}&article=${articleId}`);
    },
  },
};
</script>
<style lang="scss">
.selected-section {
  text-align: center;
}
.selected-section-article {
  color: var(--color-white) !important;
  opacity: 0.7;
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
  font-weight: 950;
  font-size: 1.5rem;
  display: inline-block;
  cursor: pointer;
  margin: 10px 20px;
}
.selected-section-article:hover {
  color: var(--color-black) !important;
  opacity: 0.5;
}
.one-section-title {
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
  font-weight: 950;
  font-size: 2.5rem;
}
.breedcrum {
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 1.5rem !important;
  padding-top: 1.5rem !important;
  font-family:
    'SuisseIntl-Regular',
    arial,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}
.breedcrum-parent {
  cursor: pointer;
}
.breedcrum-parent:hover {
  color: var(--color-black);
  opacity: 0.5;
}
.breedcrum-child {
  color: #747474;
  font-size: 1rem;
  margin: 0;
}

@media (max-width: 600px) {
  .breedcrum {
    margin-left: 0;
  }
}
</style>
