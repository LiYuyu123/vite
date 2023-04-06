import {
  createRouter,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/loginView.vue'),
  },
]

const router = createRouter({
  //跳转页面滚动恢复到默认
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHistory(
    import.meta.env.VITE_APP_APP_NAME ? import.meta.env.VITE_APP_APP_NAME : '/'
  ),
  routes,
})

export default router
