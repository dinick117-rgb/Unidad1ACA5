<template>
  <section id="artistas" class="inicio">

    <div class="encabezado-artistas">
    <span class="etiqueta">SpheraSOUND · 2026</span>

      <h2>CARTELER<span class="punto">A</span></h2>

      <p class="subtitulo">
        Conoce a nuestros artistas 
      </p>

    </div>

    <img
      :src="imagenCartel"
      class="imagen-cartel"
      alt="Cartelera del festival SpheraSonoro"
    />
  </section>

  <div class="separador"></div>

  <ArtistaComponent />
</template>

<script setup lang="ts">
import imagenCartel from '../assets/cartelera.png'
import ArtistaComponent from '../components/ArtistaComponent.vue'
</script>

<style scoped>
.inicio {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 25px;
  padding: 60px 20px 40px;
  background-color: #f9f1e4;
}

/* ENCABEZADO CENTRADO ARRIBA */
.encabezado-artistas {
  width: 100%;
  max-width: 850px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* ETIQUETA */
.etiqueta {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 4px;
  line-height: 1.8;

  color: #4f772d;
  text-transform: uppercase;
  margin-bottom: 15px;
}

/* TÍTULO */
.encabezado-artistas h2 {
  font-family: Impact, "Arial Black", sans-serif;
  font-size: clamp(52px, 9vw, 100px);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 0.95;

  margin: 0 0 15px;
  color: #202020;
}

.punto {
  color: #4f772d;
}

/* SUBTÍTULO */
.subtitulo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(18px, 2.5vw, 23px);
  font-weight: 700;
  line-height: 1.5;

  margin: 0;
  color: #474447;
}

/* CARTELERA */
.imagen-cartel {
  display: block;
  width: 100%;
  max-width: 850px;
  height: auto;
  object-fit: contain;
  object-position: center;
  opacity: 1;
}

/* SEPARADOR */
.separador {
  width: 100%;
  background-color: #eafe37;
  padding: 15px 0;
  box-sizing: border-box;
}

/* CELULARES */
@media (max-width: 600px) {
  .inicio {
    min-height: auto;
    padding: 35px 12px 25px;
    gap: 20px;
  }

  .encabezado-artistas h2 {
    font-size: clamp(48px, 12vw, 70px);
  }

  .etiqueta {
    letter-spacing: 3px;
  }

  .imagen-cartel {
    width: 100%;
    max-width: 100%;
  }
}
</style>