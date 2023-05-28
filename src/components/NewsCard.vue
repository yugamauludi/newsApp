<script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    props: {
      article: {
        type: Object,
        required: true,
      },
    },
    computed: {
      slug() {        
        return this.generateSlug(this.article.title);
      },
    }
  };
</script>

<template>
  <RouterLink :to="`/${article.slug}`" class="card">
    <div class="card-image">
      <img :src="article.urlToImage" alt="Gambar Berita">
    </div>
    <div class="card-content">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </div>
  </RouterLink>  
</template>

<style>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  text-decoration: none;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  border-radius: 12px 12px 12px 12px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.card h2 {
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 500;
  color: #222222;
}

.card p {
  font-size: 14px;
  line-height: 1.5;
  color: #222222;
}

@media screen and (max-width: 768px) {
  .card {
    max-width: 100%;
  }
}
</style>
