<template>

  <section id="inicio" class="inicio">

    <img
      :src="imagenIzquierda"
      class="imagen-lateral izquierda"
      alt="Grammy"
    >

    <img
      :src="imagenDerecha"
      class="imagen-lateral derecha"
      alt="Grammy"
    >

    <div class="contenido">

      <img
        :src="imagenArriba"
        class="imagen-arriba"
        alt="Grammy"
      >

      <h1>
        Bienvenidx
      </h1>

      <p>
        Descubre los posibles nominados y ganadores de las mejores
        categorías para los GRAMMY 69a edición.
      </p>

      <button @click="mostrarMensaje">
        Explorar categorías
      </button>

      <p v-if="mensaje">
        {{ mensaje }}
      </p>

    </div>

  </section>

  <div class="separador">
  
  </div>

  <ArtistaComponent />

  <div class="separador">
    
  </div>

  <AlbumComponent />

</template>


<script setup lang="ts">


import { ref } from 'vue'

import imagenArriba from '../assets/grammy2.png'
import imagenIzquierda from '../assets/Grammy3.png'
import imagenDerecha from '../assets/Grammy4.png'
import ArtistaComponent from '../components/ArtistaComponent.vue'
import AlbumComponent from '../components/AlbumComponent.vue'
const mensaje = ref('')

function mostrarMensaje() {

  mensaje.value = '¡Desplázate para comenzar!'

}

</script>


<style scoped>

.inicio {

  position: relative;

  display: flex;

  justify-content: center;

  align-items: center;

  text-align: center;

  color: white;

  background: #c68dfe;

  background-size: cover;

  background-position: center;

  overflow: hidden;

  padding: 0;

}


.contenido {

  width: 700px;

  padding: 30px;

  position: relative;

  z-index: 2;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

}


.imagen-arriba {

  height: 500px;

  object-fit: contain;

  margin-bottom: 10px;

}


h1 {

  font-size: 42px;

  margin: 10px 0 20px;

  position: absolute;

  top: 60%;


}


p {

  font-size: 18px;

  line-height: 1.6;

  

}


button {

  padding: 12px 20px;

  border: none;

  border-radius: 6px;

  background: #4f772d;

  color: white;

  cursor: pointer;

  font-size: 16px;

}


button:hover {

  opacity: 0.85;

}


.imagen-lateral {

  position: absolute;

  top: 35%;

  transform: translateY(-50%);

  height: 250px;

  object-fit: contain;

  opacity: 1;

  z-index: 1;

}


.izquierda {

  left: 0;

}


.derecha {

  right: 0;

}

.separador {
  width: 100%;
  background-color: #eafe37;
  padding: 15px 0;
  margin-top: 20px;
}

</style>