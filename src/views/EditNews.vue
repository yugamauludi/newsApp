<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import { useRoute, useRouter } from 'vue-router';
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  import Swal from 'sweetalert2/dist/sweetalert2.js';
  import Button from '../components/Button.vue';

  export default {
    data() {
      return {
        news: {
          slug: '',
          image: '',
          title: '',
          content: '',
        },
        editor: ClassicEditor,
        editorConfig: {},
      };
    },
    methods: {
      saveNews() {        
        Swal.fire({
          title: 'News Saved',
          text: 'Successfully edited news',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {          
          this.$router.push(`/${this.news.slug}`);
        });
      },
    },
    mounted() {
      const route = useRoute();
      const store = useStore();
      const router = useRouter();

      const slug = route.params.slug;
      
      const existingNews = computed(() => store.getters['news/getNewsDetail'](slug));

      if (existingNews.value) {
        this.news = { ...existingNews.value };
      } else {        
        router.push('/');
      }
    },
    components: {
      Button
    }
  };
</script>

<template>
  <div class="edit-news">
    <h1>Edit Berita</h1>
    <form @submit.prevent="saveNews">
      <div class="form-group">
        <label for="title">Judul:</label>
        <input type="text" v-model="news.title" id="title" placeholder="Judul Berita" />
      </div>
      <div class="form-group">
        <label for="image">Gambar:</label>
        <input type="text" v-model="news.urlToImage" id="image" placeholder="Link Gambar" />
      </div>
      <div class="form-group">
        <label for="content">Isi Berita:</label>
        <ckeditor v-model="news.content" :editor="editor" :config="editorConfig" id="ck"></ckeditor>
      </div>
      <div class="button-group">
        <Button type="submit" class="save-button">Save</Button>
        <Button :to="`/${news.slug}`" class="cancel-button">Cancel</Button>
      </div>
    </form>
  </div>
</template>
  
<style>
  .edit-news {
    max-width: 800px;
    margin: 80px auto;
    padding: 20px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .edit-news h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #222222;
  }
  
  .form-group {
    margin-bottom: 20px;
    color: #222222;
  }
  
  .form-group label {
    font-weight: bold;
    color: #555555;
  }
  
  .form-group input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #222222;
  }
  
  .button-group {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  
  .save-button,
  .cancel-button {
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .save-button {
    background-color: #4CAF50;
    color: #f8f8f8;
    margin-right: 10px;
  }
  
  .save-button:hover {
    background-color: #45a049;
  }
  
  .cancel-button {
    background-color: #ddd;
    color: #222222;
    text-decoration: none;
  }
  
  .cancel-button:hover {
    background-color: #ccc;
  }
</style>
