import { createRouter, createWebHistory } from 'vue-router'

// Componentes y vistas
import InicioComponent from '../components/InicioComponent.vue'
import MerchView from '../views/MerchView.vue'
import CalendarioView from '../views/CalendarioView.vue'
import ArtistasView from '../views/ArtistasView.vue'
import InicioSesion from '../views/InicioSesion.vue'
import CarritoView from '../views/CarritoView.vue'

// Rutas de la aplicación
const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioComponent
  },
  {
    path: '/artistas',
    name: 'artistas',
    component: ArtistasView
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
  },
  {
    path: '/sesion',
    name: 'sesion',
    component: InicioSesion
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CarritoView
  }
]

// Configuración del router
const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router