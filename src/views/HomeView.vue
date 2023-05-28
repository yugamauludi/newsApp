<script>
  import { mapGetters, mapActions } from 'vuex';
  import NewsCard from '../components/NewsCard.vue'

  export default {
    components: {
      NewsCard
    },
    computed: {
      ...mapGetters('news', ['getNews']),
      articles() {
        return this.getNews;
      },
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      fetchNews() {
        this.$store.dispatch('news/fetchNews');
      },
    }    
  }
</script>

<template>
  <h1 style="text-align: center; font-weight: bold; font-size: 2.5rem; color: black;">E-Sport News</h1>
  <div class="news-grid">
    <NewsCard v-for="article in articles" :key="article.id" :article="article"/>
  </div>
</template>

<style>
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    margin-top: 5rem;
    padding: 0rem 7rem 0rem 7rem;
  }

  h1{
    margin-top: 40px;
  }
  
  @media screen and (max-width: 768px) {
    .news-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      padding: 0rem 2rem;
    }
  }
</style>
