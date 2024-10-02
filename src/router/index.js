import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('@/view/task-tracker/TaskTracker.vue') }
  ]
})

export default router
