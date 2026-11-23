<template>
  <header class="header">

    <RouterLink to="/" class="marca">
      <img
        src="../assets/logo.png"
        alt="Logo SpheraSonoro"
        class="logo"
      >
      <span>SpheraSonoro</span>
    </RouterLink>

    <nav aria-label="Navegación principal">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/artistas">Artistas</RouterLink>
      <RouterLink to="/merch">Merch</RouterLink>
      <RouterLink to="/calendario">Calendario</RouterLink>
      <RouterLink to="/sesion">Iniciar Sesión</RouterLink>
      <RouterLink to="/carrito" class="carrito-header">
    <ShoppingCart :size="25" :strokeWidth="2" />

    <span v-if="cantidadProductos > 0" class="contador-carrito">
        {{ cantidadProductos }}
    </span>
</RouterLink>
    </nav>

  </header>
</template>

<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import { useCarrito } from "../composables/useCarrito"

const { cantidadProductos } = useCarrito()

</script>

<style scoped>
.carrito-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222;
    text-decoration: none;
    padding: 8px;
}

.carrito-header:hover {
    color: #fe4f76;
}

.contador-carrito {
    position: absolute;
    top: -3px;
    right: -3px;
    background: #fe4f76;
    color: white;
    font-size: 11px;
    font-weight: bold;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;

  background: #eafe37;
  color: #000;
  padding: 24px clamp(20px, 7vw, 100px);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

/* LOGO Y NOMBRE */
.marca {
  display: flex;
  align-items: center;
  gap: 12px;

  color: #000;
  text-decoration: none;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  line-height: 1.1;
}

.logo {
  width: 65px;
  height: 65px;
  object-fit: contain;
}

/* NAVEGACIÓN */
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
}

nav a {
  color: #a64dff;
  text-decoration: none;
  font-size: 1.05rem;
  transition: 0.3s;
}

nav a:hover,
nav a.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 5px;
}

/* RESPONSIVE */
@media (max-width: 700px) {

  .header {
    justify-content: center;
    text-align: center;
  }

  .marca {
    justify-content: center;
  }

  nav {
    gap: 14px;
  }

}

</style>