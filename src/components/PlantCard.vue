<template>

  <article
    class="cancion-card"
    @click="seleccionar"
  >

    <img
      class="cancion-imagen"
      :src="cancion.imagen"
      :alt="cancion.nombre"
    >

    <div class="cancion-contenido">

      <h3>
        {{ cancion.nombre }}
      </h3>

      <span class="cancion-categoria">
        {{ cancion.categoria }}
      </span>

      <p>
        {{ cancion.estructura }}
      </p>

      <a
        :href="cancion.spotify"
        target="_blank"
        rel="noopener noreferrer"
        class="spotify-boton"
        @click.stop
      >
       Escuchar en Spotify
      </a>

    </div>

  </article>

</template>


<script setup lang="ts">

const props = defineProps<{

  cancion: {

    id: number

    nombre: string

    categoria: string

    estructura: string

    imagen: string

    fecha: string

    calidad: string

    inovacion: string

    impacto: string

    autores: string

    video: string

    spotify: string

  }

}>()


const emit = defineEmits<{

  seleccionar: [
    cancion: typeof props.cancion
  ]

}>()


function seleccionar() {

  emit(
    'seleccionar',
    props.cancion
  )

}

</script>


<style scoped>

.cancion-card {

  width: 100%;

  min-width: 0;

  box-sizing: border-box;

  display: flex;

  flex-direction: column;

  background: white;

  border-radius: 15px;

  overflow: hidden;

  cursor: pointer;

  box-shadow:
    0 5px 18px
    rgba(0, 0, 0, 0.10);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

}


.cancion-card:hover {

  transform: translateY(-6px);

  box-shadow:
    0 10px 25px
    rgba(0, 0, 0, 0.16);

}

.cancion-imagen {

  display: block;

  width: 100%;

  height: 220px;

  object-fit: cover;

}

.cancion-contenido {

  display: flex;

  flex-direction: column;

  flex: 1;

  padding: 20px;

  box-sizing: border-box;

  text-align: left;

}


.cancion-contenido h3 {

  margin: 0 0 10px;

  font-size: 20px;

}


.cancion-contenido p {

  color: #555;

  line-height: 1.5;

  margin: 12px 0 20px;

}

.cancion-categoria {

  align-self: flex-start;

  padding: 6px 12px;

  border-radius: 20px;

  background: #e8f1e3;

  color: #31572c;

  font-size: 13px;

  font-weight: bold;

}

.spotify-boton {

  display: block;

  width: 100%;

  box-sizing: border-box;

  margin-top: auto;

  padding: 12px 15px;

  border-radius: 8px;

  background: #1db954;

  color: white;

  text-align: center;

  text-decoration: none;

  font-weight: bold;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

}


.spotify-boton:hover {

  background: #169c46;

  transform: translateY(-2px);

}

</style>
