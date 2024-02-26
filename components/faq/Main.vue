<template>
  <div class="container">
    <div class="searchWrapper">
      <h1 class="main-title">Hi, how can we help?</h1>
      <div class="inputWrapper">
        <input class="form-control" placeholder="Search" @change="handleSearch" v-model="searchKey" />
      </div>
    </div>
    <div v-if="searchKey">
      <div v-for="(item, index) in filteredArticles" class="search-section-row">
        <p class="article-title" @click="handleArticle(item.section_id, item.id)">{{ item.title }}</p>
        <div class="search-route">
          <p class="f-grey" @click="handleSearchKey">FAQs > &nbsp;</p>
          <p class="f-grey" @click="handleSection(item.section_id)">
            {{ sections.find((el) => el.id == item.section_id).title }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="section-row">
      <div v-for="(section, index) in sections" class="section-tab">
        <h2 class="section-title">{{ section.title }}</h2>
        <div v-for="(article, index) in articles.filter((item) => item.section_id == section.id)">
          <p class="article-title" @click="handleArticle(section.id, article.id)">{{ article.title }}</p>
        </div>
        <button class="f-black btn" @click="handleSection(section.id)">See all</button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../BaseButton.vue';
export default {
  props: ['sections', 'articles'],
  components: {
    BaseButton,
  },
  data() {
    return {
      searchKey: '',
    };
  },
  computed: {
    filteredArticles() {
      const keyword = new RegExp(this.searchKey, 'i');
      return this.articles.filter((item) => {
        return item.title.search(keyword) >= 0 || item.description.search(keyword) >= 0;
      });
    },
  },
  methods: {
    handleSection(sectionId) {
      this.$router.push(`/faq?section=${sectionId}`);
    },
    handleArticle(sectionId, articleId) {
      console.log(sectionId, articleId);
      this.$router.push(`faq?section=${sectionId}&article=${articleId}`);
    },
    handleSearch(e) {
      this.searchKey = e.target.value;
    },
    handleBack() {
      this.$router.push('faq');
    },
    handleSearchKey() {
      this.searchKey = '';
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.faqWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 1050px !important;
  margin-left: auto;
  margin-right: auto;

  @include max(lg) {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.section-tab {
  width: 30%;
  color: var(--color-black);
  margin-bottom: 50px;
}
.section-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.search-section-row {
  width: 100%;
  margin: 25px 0;
}
.section-title {
  font-family: 'OTNeueMontreal-MediumSemiSqueezed', Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: var(--color-black);
  font-size: 1.2rem;
}
.f-black {
  color: black;
}
.searchWrapper {
  text-align: center;
  margin-bottom: 100px;
}
.main-title {
  display: block;
  font-family: "Druk", Arial;
  font-weight: 700;
  font-size: vw(80px);
  font-style: normal;
  line-height: 88%;
  font-feature-settings: "clig" off, "liga" off;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
  
  @include max(sm) {
    font-size: 50px;
  }
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: var(--color-black);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(0 0 0 / 25%);
}
.inputWrapper {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.article-title {
  color: #111;
  line-height: 2;
  opacity: 0.7;
  cursor: pointer;
}
.article-title:hover {
  opacity: 1;
  color: #111;
}
.btn {
  border: 0px !important;
  border-radius: 20px;
  min-width: 6rem;
  font-size: 0.8rem;
  color: #fff;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #111;
  padding: 0.375rem 0.75rem;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  margin: 15px 0;
}

.btn:hover {
  opacity: 0.8;
}

.f-grey {
  color: #858585;
  cursor: pointer;
}
.f-grey:hover {
  color: #585858;
}
.search-route {
  display: flex;
  font-family: 'SuisseIntl-Regular', sans-serif;
}
@media only screen and (max-width: 600px) {
  .inputWrapper {
    width: 100%;
  }
  .section-row {
    display: block;
  }
  .section-tab {
    width: 100%;
  }
}
</style>
