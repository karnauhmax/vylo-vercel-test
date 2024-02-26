<template>
  <div class="container" v-if="section && selectedArticle">
    <div class="breedcrum">
      <p class="breedcrum-parent" @click="handleBack">FAQs >&nbsp;</p>
      <p class="breedcrum-parent" @click="handleBackSection">{{ section.title + ' > ' }}&nbsp;</p>
      <p class="breedcrum-child">{{ selectedArticle.title }}</p>
    </div>
    <div class="main-field">
      <div class="article-field">
        <p class="article-field-title">Items in this section</p>

        <hr class="mobile-hr" />
        <div class="mobile-article-field">
          <p class="mobile-article-field-title">Items in this section</p>
          <NuxtImg
            v-if="open"
            src="/images/arrow-down.png"
            alt="Vylo"
            class="arrow"
            @click="handleArrow"
            loading="lazy"
          />
          <NuxtImg v-else src="/images/arrow-up.png" alt="Vylo" class="arrow" @click="handleArrow" loading="lazy" />
        </div>
        <hr class="mobile-hr" />
        <div v-if="open" class="mobile-articles">
          <div v-for="(item, index) in articles">
            <p
              :class="'each-article' + (item.id == selectedArticle.id ? ' active' : '')"
              @click="handleEachArticle(item)"
            >
              {{ item.title }}
            </p>
          </div>
        </div>
        <div class="pc-articles">
          <div v-for="(item, index) in articles">
            <p
              :class="'each-article' + (item.id == selectedArticle.id ? ' active' : '')"
              @click="handleEachArticle(item)"
            >
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
      <div class="des-field">
        <h1 class="des-field-title">{{ selectedArticle.title }}</h1>
        <div v-html="selectedArticle.description" class="des-field-main"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section', 'articles'],
  components: {},
  data() {
    return {
      selectedArticle: null,
      open: false,
    };
  },
  methods: {
    handleBack() {
      this.$router.push('faq');
    },
    handleBackSection() {
      this.$router.push(`faq?section=${this.section.id}`);
    },
    handleArticle(articleId) {
      this.$router.push(`faq?section=${this.section.id}&article=${articleId}`);
    },
    handleEachArticle(article) {
      this.selectedArticle = article;
      console.log(this.selectedArticle);
      this.open = false;
    },
    handleArrow() {
      this.open = !this.open;
    },
  },
  mounted() {
    this.selectedArticle = this.articles.find((item) => item.id == this.$route.query.article);
  },
};
</script>
<style lang="scss">
.selected-section {
  text-align: center;
}
.selected-section-article {
  color: #111 !important;
  opacity: 0.7;
  font-family: sans-serif;
  font-size: 1.5rem;
  display: inline-block;
  cursor: pointer;
  margin: 10px 20px;
}
.selected-section-article:hover {
  color: var(--color-black) !important;
}

.breedcrum {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 4rem !important;
  padding-top: 1.5rem !important;
}
.breedcrum-parent {
  color: #1d1d1f;
  cursor: pointer;
  margin: 2px 0;
}
.breedcrum-parent:hover {
  color: #111;
  opacity: 0.7;
}
.breedcrum-child {
  color: #747474;
  font-size: 1rem;
}
.article-field-title {
  font-weight: bold;
  font-style: italic;
  opacity: 0.8;
  display: block;
  padding: 0.5rem;
  font-size: 90%;
  margin-bottom: 1rem;
  color: #1d1d1f !important;
  margin: 2px 0;
}
.main-field {
  display: flex;
  justify-content: space-around;
}
.article-field {
  width: 30%;
}
.des-field {
  width: 60%;
}
.each-article {
  color: #1d1d1f;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-family: Sans-serif;
}
.each-article:hover {
  color: #111;
  opacity: 0.7;
}
.active {
  background-color: #1d1d1f !important;
  color: var(--color-black);
  text-decoration: underline;
  border-radius: 0.4rem;
  padding: 0.5rem;
  color: white;
  text-decoration: none;
}
.active:hover {
  color: #fff !important;
}

.des-field-title {
  margin-bottom: 60px !important;
  color: #111;
  line-height: 1;
  font-size: 2.5rem;
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
}

.faq-sub {
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
  margin-bottom: 20px !important;
  color: #000;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 950;
}

.des-field-main p {
  color: #000;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.des-field ul,
li {
  color: #000;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}
.des-field ul {
  margin-bottom: 1rem;
}
ul,
ol {
  list-style-type: disc;
  padding-left: 20px;
}
.des-field-main ol {
  margin-bottom: 1rem;
}
.des-field-main ul ul {
  list-style-type: circle;
}
.arrow {
  width: 10px !important;
  margin-right: 10px;
}
.mobile-article-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  visibility: hidden;
}
.mobile-article-field-title {
  font-weight: bold;
  font-style: italic;
  opacity: 0.8;
  display: block;
  padding: 0.5rem;
  font-size: 90%;
  color: #1d1d1f !important;
}
.mobile-articles {
  display: none;
}
.mobile-hr {
  display: none;
}
@media only screen and (max-width: 600px) {
  .main-field {
    display: block;
  }
  .article-field,
  .des-field {
    width: 100%;
  }
  .mobile-articles {
    display: block !important;
  }
  .pc-articles {
    display: none !important;
  }
  .mobile-hr {
    display: block !important;
  }
  .article-field-title {
    display: none;
  }
  .mobile-article-field {
    visibility: visible !important;
  }
  .breedcrum {
    margin-left: 0;
    margin-bottom: 1.5rem !important;
  }
  .des-field-title {
    margin-bottom: 40px !important;
    margin-top: 40px;
  }
}
</style>
