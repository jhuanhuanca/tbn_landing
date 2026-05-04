import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductosView from '../views/ProductosView.vue'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    // Si viene con hash (#empresa), hacemos scroll suave.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/productos', name: 'productos', component: ProductosView },
  ],
})

