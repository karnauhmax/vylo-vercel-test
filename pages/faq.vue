<template>
  <div class="contact-wrapper">
    <div class="contact">
      <div class="faqWrapper">
        <div v-if="!articleId && !sectionId">
          <main-faq :sections="sections" :articles="articles"></main-faq>
        </div>
        <div v-if="!articleId && sectionId">
          <section-faq :section="currentSection" :articles="currentArticles"></section-faq>
        </div>
        <div v-if="articleId && sectionId">
          <article-faq :section="currentSection" :articles="currentArticles"></article-faq>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import axios from 'redaxios';
import MainFaq from '~/components/faq/Main.vue';
import SectionFaq from '~/components/faq/Section.vue';
import ArticleFaq from '~/components/faq/Article.vue';

export default {
  components: {
    MainFaq,
    SectionFaq,
    ArticleFaq,
  },
  data() {
    return {
      sections: [],
      articles: [],
    };
  },
  computed: {
    articleId() {
      return this.$route.query.article;
    },
    sectionId() {
      return this.$route.query.section;
    },
    currentSection() {
      return this.sections.find((item) => item.id == this.sectionId);
    },
    currentArticles() {
      return this.articles.filter((item) => item.section_id == this.sectionId);
    },
  },
  methods: {},
  mounted() {
    // TODO: change hardcode to read .env file
    axios({
      method: 'post',
      url: 'https://vylo.com/api/getSection/',
      data: {},
    }).then((res) => {
      this.sections = res.data.sections;
    });
    axios({
      method: 'post',
      url: 'https://vylo.com/api/getArticle/',
      data: {},
    }).then((res) => {
      this.articles = res.data.articles;
    });
  },
};
</script>

<style lang="scss">
.contact-wrapper {
  background-color: var(--color-white);
  padding-top: vw(200px);
  @include max(bg) {
    padding-top: 200px;
  }
  @include max(xs) {
    padding-top: 120px;
  }
}
.contact {
  color: var(--color-black);
  width: vw(1000px);
  margin-left: auto;
  margin-right: auto;
  padding-bottom: vw(200px);
  @include max(bg) {
    padding-bottom: 200px;
  }
  @include max(xs) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 100px;
  }
}
.contact-title {
  margin-bottom: vw(30px);
  @include max(bg) {
    margin-bottom: 30px;
  }
}
p {
  line-height: 1.5;
}
</style>
