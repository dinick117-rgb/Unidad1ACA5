
import { createRouter, createWebHistory } from 'vue-router'

import InicioComponent from '../components/InicioComponent.vue'
import ArtistaComponent from '../components/ArtistaComponent.vue'
import AlbumComponent from '../components/AlbumComponent.vue'
import MerchView from '../views/MerchView.vue'
import CalendarioView from '../views/CalendarioView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioComponent
  },
  {
    path: '/artistas',
    name: 'artistas',
    component: ArtistaComponent
  },
  {
    path: '/albumes',
    name: 'albumes',
    component: AlbumComponent
  },
  {
    path: '/merch',
    name: 'merch',
    component: MerchView
  },
  {
    path: '/calendario',
    name: 'calendario',
    component: CalendarioView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
