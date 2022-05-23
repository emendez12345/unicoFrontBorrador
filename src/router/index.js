import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=> import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: ()=>import('../views/Dashboard.vue')
    },
    {
      path: '/page404',
      name: 'page404',
      component: ()=>import('../views/Page404.vue')
    },
    {
      path: '/borra',
      name: 'borra',
      component: ()=>import('../views/Borrador.vue')
    },
  ]
})

export default router
