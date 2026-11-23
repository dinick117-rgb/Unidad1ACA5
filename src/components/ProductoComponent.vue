<template>

    <article class="producto"> 
         <div class="producto-imagen">
        <img
            :src="producto.imagen"
            :alt="producto.nombre"
        >
            
        </div>

        <div class="producto-contenido">

            <h3>{{ producto.nombre }}</h3>

            <div class="producto-pie">

                <span class="precio">
                    ${{ producto.precio }}
                </span>

                <button
                    class="btn-agregar"
                    :name="'producto-' + producto.id"
                    @click="agregarAlCarrito"
                >
                    AÑADIR AL CARRITO
                </button>

            </div>

        </div>

    </article>

</template>

<script setup lang="ts">

import type { Producto as ProductoType } from "../data/producto"

const props = defineProps<{
    producto: ProductoType
}>()

const emit = defineEmits<{
    agregar: [producto: ProductoType]
}>()

function agregarAlCarrito() {

    emit("agregar", props.producto)

}

</script>