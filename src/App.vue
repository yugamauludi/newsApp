<script>
  import { RouterLink, RouterView } from 'vue-router'
  import 'sweetalert2/dist/sweetalert2.css';
  import Navbar from './components/Header.vue';
  export default{
    components: {
      Navbar
    }
  }
</script>

<template>

  <RouterLink to="/" />
  <Navbar/>
  <RouterView />
</template>

<style>
body{
  background-color: white;
}
</style>
