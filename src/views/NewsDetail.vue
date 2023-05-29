<script>
  import { computed, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import Button from '../components/Button.vue';

  export default {
    data() {
      return {
        news: null,
        loading: false
      };
    },
    setup() {
      const store = useStore();
      const route = useRoute();
      const slug = computed(() => route.params.slug);
      const news = ref(null);
      const loading = ref(false);

      loading.value = true;
      store
        .dispatch('news/fetchNewsBySlug', slug.value)
        .then((fetchedNews) => {
          news.value = fetchedNews;
          loading.value = false;
        });

      return {
        news,
        loading,
      };
    },
    mounted() {
      const slug = this.$route.params.slug;
    },
    components: {
      Button
    }
  };
</script>

<template>
  <body>
    <div class="container">
      <div class="content">
        <div class="center">
          <div class="image">
            <img :src="news.urlToImage" alt="Gambar Berita">
          </div>
          <h2 class="title">{{ news.title }}</h2>
          <p class="description">{{ news.content }}</p>
          <div class="edit-button">
            <Button :to="`/edit-news/${news.slug}`" class="edit">Edit</Button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
  body {
    font-family: Arial, sans-serif;
  }

  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10%;
    margin-top: 60px;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: center;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    width: 100%;
    height: 100%;
    margin-top: 100px;
    overflow: hidden;
    border-radius: 8px;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    color: #222222;
  }

  .description {
    font-size: 16px;
    line-height: 1.5;
    color: #222222;
  }

  .edit-button {
    margin-top: 10px;
    margin-bottom: 60px;
  }

  .edit-button button {
    padding: 15px 30px;
    background-color: #4CAF50;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    .content {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
