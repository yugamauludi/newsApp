import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsDetail from '../views/NewsDetail.vue'
import EditNews from '../views/EditNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:slug',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/edit-news/:slug',
      name: 'editNews',
      component: EditNews
    }
  ],
})

export default router
