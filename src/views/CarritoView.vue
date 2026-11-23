<template>
    <main class="carrito">

        <section class="carrito-contenido">

            <div class="carrito-titulo">
                <span class="etiqueta">SPHERASOUND · 2026</span>
                 <h1>Carrit<span>o</span></h1>

                <p>
                    {{ cantidadProductos }} producto(s) en tu bolsa
                </p>
            </div>

            <div v-if="carrito.length === 0" class="carrito-vacio">

                <h2>Tu bolsa está vacía</h2>

                <p>Descubre nuestra mercancía oficial.</p>

                <RouterLink to="/merch" class="btn-menu">
                    VER MERCH
                </RouterLink>

            </div>

            <div v-else>

                <div
                    v-for="item in carrito"
                    :key="item.producto.id"
                    class="producto-carrito"
                >

                    <img
                        :src="item.producto.imagen"
                        :alt="item.producto.nombre"
                    >

                    <div class="producto-info">
                        <h2>{{ item.producto.nombre }}</h2>

                        <p>
                            ${{ item.producto.precio }} MXN
                        </p>
                    </div>

                    <div class="cantidad">

                        <button
                            @click="disminuirCantidad(item.producto.id)"
                        >
                            −
                        </button>

                        <strong>{{ item.cantidad }}</strong>

                        <button
                            @click="aumentarCantidad(item.producto.id)"
                        >
                            +
                        </button>

                    </div>

                    <strong class="subtotal">
                        ${{ item.producto.precio * item.cantidad }}
                    </strong>

                    <button
                        class="btn-eliminar"
                        @click="eliminarProducto(item.producto.id)"
                    >
                        ×
                    </button>

                </div>

                <div class="resumen">

                    <div class="total">
                        <span>TOTAL</span>
                        <strong>${{ totalCarrito }} MXN</strong>
                    </div>

                    <button class="btn-pagar" @click="pagar">
                        SIMULAR COMPRA
                    </button>

                </div>

            </div>

        </section>

    </main>
</template>

<script setup lang="ts">

import { useCarrito } from "../composables/useCarrito"

const {
    carrito,
    cantidadProductos,
    totalCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito
} = useCarrito()

function pagar() {
    alert("¡Gracias por tu compra en SpheraSound!")

    vaciarCarrito()
}

</script>

<style scoped>

.etiqueta {
  color: #8ebb17;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 4px;
}

.carrito-titulo h1 {
  margin: 12px 0;
  font-family: Impact, 'Arial Black', sans-serif;
  font-size: clamp(48px, 8vw, 82px);
}

.carrito-titulo h1 span {
  color: #fe4f76;
}

.carrito-titulo p {
  font-size: 18px;
}

.carrito {
    min-height: 100vh;
    padding: 60px 7%;
    background: #f9f1e4;
    color: #222;
}

.carrito-contenido {
    max-width: 1000px;
    margin: auto;
}

.carrito-titulo {
    margin-bottom: 40px;
}

.etiqueta {
    font-weight: bold;
    letter-spacing: 3px;
}

.carrito-titulo h1 {
    font-size: clamp(40px, 7vw, 65px);
    margin: 10px 0;
}

.carrito-vacio {
    text-align: center;
    padding: 60px 20px;
    background: white;
    border-radius: 15px;
}

.btn-menu {
    display: inline-block;
    margin-top: 20px;
    padding: 14px 25px;
    background: #eafe37;
    color: #222;
    text-decoration: none;
    font-weight: bold;
    border-radius: 7px;
}

.producto-carrito {
    display: grid;
    grid-template-columns: 110px 1fr auto auto auto;
    align-items: center;
    gap: 20px;
    padding: 20px;
    margin-bottom: 15px;
    background: white;
    border-radius: 12px;
}

.producto-carrito img {
    width: 110px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
}

.producto-info h2 {
    font-size: 18px;
}

.cantidad {
    display: flex;
    align-items: center;
    gap: 12px;
}

.cantidad button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: #eafe37;
    cursor: pointer;
    font-size: 18px;
}

.btn-eliminar {
    border: none;
    background: none;
    font-size: 25px;
    cursor: pointer;
}

.resumen {
    max-width: 400px;
    margin: 35px 0 0 auto;
}

.total {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    margin-bottom: 20px;
}

.btn-pagar {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 7px;
    background: #eafe37;
    font-weight: bold;
    cursor: pointer;
}

@media (max-width: 650px) {
    .producto-carrito {
        grid-template-columns: 80px 1fr auto;
        gap: 12px;
    }

    .producto-carrito img {
        width: 80px;
        height: 80px;
    }

    .cantidad {
        grid-column: 2;
    }

    .subtotal {
        grid-column: 3;
        grid-row: 2;
    }

    .btn-eliminar {
        grid-column: 3;
        grid-row: 1;
    }
}

</style>