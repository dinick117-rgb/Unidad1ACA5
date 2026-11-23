
<template>

  <!-- PORTADA -->
  <section id="inicio" class="inicio">

    <img
      :src="imagenFondo"
      class="imagen-fondo"
      alt="Festival"
    >

    <div class="contenido">

      <span class="etiqueta">MÚSICA · CULTURA · EXPERIENCIA</span>

      <h1>
        Bienvenid<span class="punto">x</span>
      </h1>

      <p class="descripcion">
        Descubre los artistas que estarán en nuestro festival.
      </p>

      <button @click="mostrarMensaje">
        Conocer más
        <span class="flecha">↗</span>
      </button>

      <p v-if="mensaje" class="mensaje">
        {{ mensaje }}
      </p>

    </div>

  </section>

    <!-- DESCRIPCIÓN DEL FESTIVAL -->
<section class="sobre-festival">

  <div class="sobre-texto">

    <span class="etiqueta-seccion">CONOCE SPHERASOUND</span>

    <h2>
      Más que un festival,
      <span>una experiencia.</span>
    </h2>

    <p>
      SpheraSonoro es un festival que reúne música, cultura y
      creatividad en un mismo espacio. Un punto de encuentro para
      descubrir nuevos sonidos, disfrutar de grandes artistas y
      conectar con personas que comparten la misma pasión por la música.
    </p>

    <p>
      Durante varios días podrás recorrer diferentes escenarios,
      vivir presentaciones en vivo, descubrir propuestas musicales,
      participar en actividades y formar parte de momentos que
      permanecerán contigo mucho después de que termine la música.
    </p>

    <div class="frase">
      <span>UNA ESFERA.</span>
      <span>MILES DE SONIDOS.</span>
      <span>INFINITAS EXPERIENCIAS.</span>
    </div>

  </div>

  <div class="sobre-imagen">
   
    <img :src="fotoInicio" class="fotoinicio"alt="Experiencia SpheraSonoro">
  </div>

  </section>

  <div class="separador"></div>

  <!-- HEADLINERS -->
  <section class="seccion-contenido">


    <ArtistaComponent />

  </section>

  <div class="separador"></div>

  <!-- ESCENARIOS -->
  <section class="seccion-contenido">

    <span class="etiqueta-seccion">SPHERASOUND · 2026</span>

    <h2>Escenarios<span class="punto">.</span></h2>

    <p class="descripcion-seccion">
      Cuatro espacios, diferentes sonidos y experiencias para descubrir.
    </p>

    <SimbologiaComponent />

  </section>

  <div class="separador"></div>

  <!-- MOMENTOS -->
  <section class="seccion-contenido">

    <MomentsComponent />

  </section>

</template>


<script setup lang="ts">

import { ref } from 'vue'

import imagenFondo from '../assets/festival.jpg'
import fotoInicio from '../assets/fotoinicio.jpg'
import ArtistaComponent from '../components/ArtistaComponent.vue'
import SimbologiaComponent from '../components/SimbologiaComponent.vue'
import MomentsComponent from '../components/MomentsComponent.vue'

const mensaje = ref('')

function mostrarMensaje() {
  mensaje.value = '¡Desplázate para comenzar!'
}

</script>


<style scoped>

/* PORTADA */

.inicio {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  width: 100%;
  min-height: 100vh;
  background: #c68dfe;
  overflow: hidden;
  box-sizing: border-box;
}

.imagen-fondo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  opacity: 0.5;
}

.contenido {
  width: 850px;
  max-width: 100%;
  padding: 40px 30px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.etiqueta {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 1.8;
  margin-bottom: 22px;
  color: #eafe37;
  text-transform: uppercase;
}

.inicio h1 {
  font-family: Impact, "Arial Black", sans-serif;
  font-size: clamp(64px, 11vw, 115px);
  font-weight: 900;
  letter-spacing: -3px;
  line-height: 0.95;
  margin: 0 0 30px;
  text-transform: uppercase;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
}

.punto {
  color: #eafe37;
}

.descripcion {
  max-width: 600px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(17px, 2vw, 21px);
  font-weight: 500;
  line-height: 1.8;
  letter-spacing: 0.3px;
  margin: 0 0 35px;
  color: white;
}

/* BOTÓN */

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 28px;
  border: 2px solid #eafe37;
  border-radius: 3px;
  background: #eafe37;
  color: #161616;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, transform 0.3s;
}

button:hover {
  background: transparent;
  color: white;
  transform: translateY(-3px);
}

.flecha {
  font-size: 20px;
  line-height: 1;
}

.mensaje {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 700;
  margin-top: 25px;
  letter-spacing: 0.5px;
}

/* DESCRIPCIÓN DEL FESTIVAL */

.sobre-festival {
  background: #f9f1e4;
  padding: 85px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.etiqueta-seccion {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 4px;
  color: #fe4f76;
  margin-bottom: 18px;
  text-align: center;
}

.sobre-festival h2,
.seccion-contenido h2 {
  font-family: Impact, "Arial Black", sans-serif;
  font-size: clamp(38px, 6vw, 65px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -1px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 25px;
  color: #474447;
}

.sobre-festival h2 span {
  color: #fe4f76;
}

.sobre-festival p {
  max-width: 780px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.9;
  color: #77716f;
  margin: 0 auto 18px;
}

.frase {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 25px;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #474447;
}

.frase span:not(:last-child)::after {
  content: " /";
  color: #fe4f76;
}

/* SECCIONES GENERALES */

.seccion-contenido {
  width: 100%;
  box-sizing: border-box;
  padding: 65px 24px;
  background: #f9f1e4;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.descripcion-seccion {
  max-width: 650px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #77716f;
  margin: 0 auto 35px;
  text-align: center;
}

/* SEPARADORES */

.separador {
  width: 100%;
  background-color: #eafe37;
  padding: 15px 0;
  box-sizing: border-box;
}

/* CELULARES */

@media (max-width: 600px) {

  .inicio {
    min-height: 100vh;
    padding: 30px 15px;
  }

  .contenido {
    padding: 30px 15px;
  }

  .etiqueta {
    font-size: 10px;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }

  .inicio h1 {
    font-size: clamp(48px, 13vw, 72px);
    letter-spacing: -2px;
    margin-bottom: 25px;
  }

  .descripcion {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 28px;
  }

  button {
    padding: 14px 22px;
    font-size: 12px;
  }

  .sobre-festival {
    padding: 60px 22px;
  }

  .sobre-festival p {
    font-size: 14px;
  }

  .frase {
    gap: 8px;
    font-size: 10px;
    line-height: 1.8;
  }

  .seccion-contenido {
    padding: 50px 15px;
  }

  .sobre-festival h2,
  .seccion-contenido h2 {
    font-size: 42px;
  }

  .descripcion-seccion {
    font-size: 14px;
  }

}

/* DESCRIPCIÓN DEL FESTIVAL */

.sobre-festival {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;

  padding: 100px 8%;
  background-color: #f1f1f1;
}

.sobre-texto {
  text-align: left;
}

.sobre-texto .etiqueta-seccion {
  display: block;
  margin-bottom: 20px;
}

.sobre-texto h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 25px;
}

.sobre-texto h2 span {
  display: block;
}

.sobre-texto p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 18px;
}

.sobre-imagen {
  width: 100%;
  height: 480px;
  overflow: hidden;
  border-radius: 12px;
}

.sobre-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.sobre-texto .frase {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
  font-weight: bold;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .sobre-festival {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 65px 7%;
  }

  .sobre-imagen {
    height: 350px;
  }
}

</style>
