import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/zipUserInfo',
      name: 'zip',
      component: () => import('@/views/InfoPage.vue')
    }
  ]
})

export default router
