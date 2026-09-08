```vue
<template>
  <section id="Albumes">

    <h2>Álbum del Año</h2>
    <p>Posibles nominados a los GRAMMY 2027</p>

    <div class="carrusel">

      <button @click="anterior">
        ‹
      </button>

      <div
        v-for="album in albumesVisibles"
        :key="album.id"
        class="album-card"
        @click="mostrarAlbum(album)"
      >

        <img
          :src="album.imagen"
          :alt="album.nombre"
        >

        <h3>{{ album.nombre }}</h3>

        <p>{{ album.artista }}</p>

      </div>

      <button @click="siguiente">
        ›
      </button>

    </div>

    <div
      v-if="albumSeleccionado"
      class="detalle-album"
    >

      <button @click="cerrarAlbum">
        ✕
      </button>

      <img
        :src="albumSeleccionado.imagen"
        :alt="albumSeleccionado.nombre"
      >

      <div>

        <h2>
          {{ albumSeleccionado.nombre }}
        </h2>

        <h3>
          {{ albumSeleccionado.artista }}
        </h3>

        <p>
          {{ albumSeleccionado.descripcion }}
        </p>

        <p>
          <strong>Género:</strong>
          {{ albumSeleccionado.genero }}
        </p>

        <p>
          <strong>Lanzamiento:</strong>
          {{ albumSeleccionado.lanzamiento }}
        </p>

        <p>
          <strong>Productor:</strong>
          {{ albumSeleccionado.productor }}
        </p>

        <p>
          <strong>Canciones:</strong>
          {{ albumSeleccionado.canciones }}
        </p>


        <h3>Características</h3>

        <ul>
          <li
            v-for="caracteristica in albumSeleccionado.caracteristicas"
            :key="caracteristica"
          >
            {{ caracteristica }}
          </li>
        </ul>

      </div>

    </div>

  </section>
</template>


<script setup lang="ts">

import { ref, computed } from "vue"

interface Album {
  id: number
  nombre: string
  artista: string
  imagen: string
  genero: string
  lanzamiento: string
  productor: string
  canciones: string
  descripcion: string
  caracteristicas: string[]
}

const posicion = ref(0)

const albumSeleccionado = ref<Album | null>(null)

const albumes = ref<Album[]>([

{
  id: 1,
  nombre: "Lux",
  artista: "Rosalía",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTys2iIdduzs52a4VvN_Logkv1pS-62vP6sgWTBfhl_bQ&s",
  genero: "Pop / Flamenco fusión",
  lanzamiento: "2026",
  productor: "El Guincho, Rosalía",
  canciones: "10 canciones",
  descripcion: "Álbum experimental que mezcla flamenco con pop electrónico.",
  caracteristicas: [
    "Fusión de géneros tradicionales y modernos",
    "Producción innovadora",
    "Letras sobre identidad cultural",
    "Sonidos electrónicos atmosféricos",
    "Impacto global en listas de éxitos"
  ]
},

{
  id: 2,
  nombre: "The Art of Loving",
  artista: "Olivia Dean",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskwxuLsgttoee9-k9rGth6dMc9gxx8HI8D15g57iCSQ&s=10",
  genero: "Soul / R&B",
  lanzamiento: "2026",
  productor: "John Ryan, Max Wolfgang",
  canciones: "12 canciones",
  descripcion: "Explora el amor y la vulnerabilidad con un sonido soul moderno.",
  caracteristicas: [
    "Voz cálida y expresiva",
    "Influencias clásicas de soul",
    "Producción minimalista",
    "Temas de relaciones personales",
    "Reconocimiento crítico internacional"
  ]
},

{
  id: 3,
  nombre: "you seem pretty sad for a girl so in love",
  artista: "Olivia Rodrigo",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37L0_zrXxav8lpHIxX9ujA44-fApo7CUlk2ED-7FCDw&s=10",
  genero: "Pop alternativo",
  lanzamiento: "2026",
  productor: "Dan Nigro",
  canciones: "11 canciones",
  descripcion: "Un álbum confesional que mezcla pop alternativo con baladas intensas.",
  caracteristicas: [
    "Letras emocionales y directas",
    "Producción moderna y cruda",
    "Exploración de desamor juvenil",
    "Sonido alternativo con influencias rock",
    "Gran impacto en streaming"
  ]
},

{
  id: 4,
  nombre: "The Life of a Showgirl",
  artista: "Taylor Swift",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5pia0kl2O5Zvn2hja0S8ivbX72YMqMQf_K2q8bodkA&s=10",
  genero: "Pop / Folk",
  lanzamiento: "2026",
  productor: "Jack Antonoff, Aaron Dessner",
  canciones: "11 canciones",
  descripcion: "Taylor explora la teatralidad y la vida pública con un enfoque íntimo.",
  caracteristicas: [
    "Narrativa autobiográfica",
    "Producción folk-pop",
    "Letras sobre fama y vulnerabilidad",
    "Colaboraciones con productores clave",
    "Éxito crítico y comercial"
  ]
},

{
  id: 5,
  nombre: "The Romantic",
  artista: "Bruno Mars",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iGgvKbRt8FcjYF6VUTVjPZtKPz2K38qLLGs7wvi_YQ&s=10",
  genero: "Pop / R&B",
  lanzamiento: "2026",
  productor: "Bruno Mars, Philip Lawrence",
  canciones: "11 canciones",
  descripcion: "Un álbum que celebra el amor con influencias retro y funk.",
  caracteristicas: [
    "Sonido inspirado en Motown",
    "Baladas románticas",
    "Producción retro con frescura moderna",
    "Voz potente y versátil",
    "Gran éxito en radios globales"
  ]
},

{
  id: 6,
  nombre: "THIS MUSIC MAY CONTAIN HOPE",
  artista: "RAYE",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8eNUcQB-8PSY7UHp7F0652567exNgyPhMsqA5qXLzA&s",
  genero: "Pop alternativo",
  lanzamiento: "2026",
  productor: "Mike Sabath, RAYE",
  canciones: "11 canciones",
  descripcion: "Un álbum confesional que mezcla pop alternativo con influencias teatrales.",
  caracteristicas: [
    "Letras crudas y honestas",
    "Producción experimental",
    "Exploración de temas sociales",
    "Sonido alternativo con elementos electrónicos",
    "Reconocimiento como voz emergente"
  ]
}

])


// ÁLBUMES QUE SE MUESTRAN EN EL CARRUSEL
const albumesVisibles = computed(() => {

  return albumes.value.slice(
    posicion.value,
    posicion.value + 3
  )

})


// BOTÓN SIGUIENTE
function siguiente() {

  if (
    posicion.value <
    albumes.value.length - 3
  ) {

    posicion.value++

  }

}


// BOTÓN ANTERIOR
function anterior() {

  if (posicion.value > 0) {

    posicion.value--

  }

}


// MOSTRAR INFORMACIÓN DEL ÁLBUM
function mostrarAlbum(album: Album) {

  albumSeleccionado.value = album

}


// CERRAR INFORMACIÓN
function cerrarAlbum() {

  albumSeleccionado.value = null

}

</script>

<style scoped>

#Albumes {
  width: 100%;
  padding: 40px 20px;
  text-align: center;
}

.carrusel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  margin-top: 30px;
}

.album-card {
  width: 250px;
  flex-shrink: 0;
  cursor: pointer;
}

.album-card img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.album-card h3 {
  margin: 10px 0 5px;
}

.album-card p {
  margin: 0;
}

.carrusel > button {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  font-size: 30px;
  cursor: pointer;
}


/* INFORMACIÓN DEL ÁLBUM */

.detalle-album {
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 900px;
  margin: 40px auto 0;
  padding: 30px;
}

.detalle-album > img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.detalle-album > div {
  text-align: left;
}

.detalle-album > button {
  position: absolute;
  cursor: pointer;
}


/* RESPONSIVO PARA CELULAR */

@media (max-width: 800px) {

  .carrusel {
    gap: 10px;
  }

  .album-card {
    width: 180px;
  }

  .album-card img {
    width: 180px;
    height: 180px;
  }

  .carrusel > button {
    width: 35px;
    height: 35px;
    font-size: 24px;
  }

}

</style>
```
