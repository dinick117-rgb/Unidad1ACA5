<template>
    <main class="merch">

        <header class="encabezado">
      <span class="etiqueta">SPHERASOUND · 2026</span>
      <h1>MERC<span>H</span></h1>
      <p>Conoce nuestros productos oficiales</p>
      
    </header>
        <section class="catalogo">

            <article
                v-for="producto in productos"
                :key="producto.id"
                class="producto-card"
            >

                <img
                    :src="producto.imagen"
                    :alt="producto.nombre"
                >

                <div class="producto-info">
                    <h2>{{ producto.nombre }}</h2>

                    <p>
                        ${{ producto.precio }} MXN
                    </p>

                    <button @click="agregarProducto(producto)">
                        AGREGAR A LA BOLSA +
                    </button>
                </div>

            </article>

        </section>

        <RouterLink to="/carrito" class="btn-carrito">
            VER BOLSA ({{ cantidadProductos }})
        </RouterLink>

    </main>
</template>

<script setup lang="ts">

import { productos } from "../data/producto"
import { useCarrito } from "../composables/useCarrito"

const { agregarProducto, cantidadProductos } = useCarrito()

</script>

<style scoped>
/* =====================================
   ENCABEZADO
===================================== */

.encabezado {
  display: block;
  width: 100%;
  text-align: center;
  margin: 0 auto 45px;
}

.encabezado .etiqueta {
  display: block;
  color: #47752a;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 10px;
}

.encabezado h1 {
  display: block;
  width: 100%;
  font-family: Impact, sans-serif;
  font-size: clamp(48px, 6vw, 76px);
  line-height: 1.1;
  letter-spacing: -2px;
  text-align: center;
  white-space: nowrap;
  margin: 0 auto;
}

.encabezado h1 span {
  color: #47752a;
}

.encabezado p {
  font-size: 17px;
  font-weight: 600;
  margin: 15px 0 8px;
}

.merch {
    min-height: 100vh;
    padding: 55px 7%;
    background: #f9f1e4;
    color: #222;
}

.merch-header {
    text-align: center;
    margin-bottom: 50px;
}

.merch-header p {
    font-weight: bold;
    letter-spacing: 3px;
}

.merch-header h1 {
    font-size: clamp(40px, 7vw, 75px);
    margin: 10px 0;
}

.merch-header span {
    font-size: 17px;
}

.catalogo {
    max-width: 1150px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
}

.producto-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
}

.producto-card img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
}

.producto-info {
    padding: 20px;
}

.producto-info h2 {
    font-size: 19px;
    margin: 0 0 10px;
}

.producto-info p {
    font-weight: bold;
    font-size: 20px;
}

.producto-info button {
    width: 100%;
    padding: 13px;
    border: none;
    background: #eafe37;
    font-weight: bold;
    cursor: pointer;
    border-radius: 7px;
}

.btn-carrito {
    display: block;
    width: fit-content;
    margin: 45px auto 0;
    padding: 15px 25px;
    background: #222;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 7px;
}

@media (max-width: 800px) {
    .catalogo {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 550px) {
    .catalogo {
        grid-template-columns: 1fr;
    }
}

</style>