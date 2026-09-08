<template>
  <section id="Artistas">

    <h2>Artista del Año</h2>
    <p>Posibles nominados a los GRAMMY 2027</p>

    <div class="artistas-menu">

      <button
        v-for="artista in artistas"
        :key="artista.id"
        class="artista-card"
        @click="mostrarArtista(artista)"
      >

        <h3>{{ artista.nombre }}</h3>

        <img
          :src="artista.imagen"
          :alt="artista.nombre"
        >

      </button>

    </div>

    <div
      v-if="artistaSeleccionado"
      class="detalle-artista">

      <div class="artista-foto">

        <button
          class="cerrar"
          @click="cerrarArtista"
        >
          ✕
        </button>

        <img
          :src="artistaSeleccionado.imagen"
          :alt="artistaSeleccionado.nombre"
        >

        <h3>
          {{ artistaSeleccionado.nombre }}
        </h3>

      </div>

      <div class="artista-info">

        <h2>
          {{ artistaSeleccionado.nombre }}
        </h2>

        <p>
          {{ artistaSeleccionado.descripcion }}
        </p>

        <p>
          <strong>Género:</strong>
          {{ artistaSeleccionado.genero }}
        </p>

        <p>
          <strong>País:</strong>
          {{ artistaSeleccionado.pais }}
        </p>

        <p>
          <strong>Álbum nominado:</strong>
          {{ artistaSeleccionado.album }}
        </p>

      </div>

      <div class="artista-video">

        <iframe
          :src="artistaSeleccionado.video"
          :title="'Video de ' + artistaSeleccionado.nombre"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>

      </div>

    </div>

  </section>
</template>


<script setup lang="ts">

import { ref } from "vue"


interface Artista {
  id: number
  nombre: string
  imagen: string
  descripcion: string
  genero: string
  pais: string
  album: string
  video: string
}

const artistaSeleccionado = ref<Artista | null>(null)
const artistas = ref<Artista[]>([

{
  id: 1,
  nombre: "Olivia Rodrigo",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLcvpHv-QIEXy2pyMe--9WYmQVgg7oBB6ZsmHqHWMQw&s=10",
  descripcion: "Cantautora estadounidense reconocida por su estilo confesional y éxitos globales.",
  genero: "Pop alternativo",
  pais: "Estados Unidos",
  album: "GUTS (2023) / Nuevo proyecto 2026",
  video: "https://www.youtube.com/embed/B402rKl4bUg?si=IuuPSRFiwr1Mxj7n&amp;start=69"
},

{
  id: 2,
  nombre: "Taylor Swift",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNge6QC64ltnX9sX5sJKglm8P4TSZM9rG7y6LNVMNIbg&s=10",
  descripcion: "Artista estadounidense con una carrera que abarca country, pop y folk.",
  genero: "Pop / Folk",
  pais: "Estados Unidos",
  album: "The Life of a Showgirl (2026)",
  video: "https://www.youtube.com/embed/hDU4GB1PTxc?si=wXsHKbJJ-D1E2kqd&amp;start=31"
},

{
  id: 3,
  nombre: "Rosalía",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpIHtNzi8rr7pFmv0TyHDuTuyVP4Ad5miN0-ZvIEC6Q&s=10",
  descripcion: "Cantautora española que fusiona flamenco con pop y música urbana.",
  genero: "Pop / Flamenco fusión",
  pais: "España",
  album: "Lux (2026)",
  video: "https://www.youtube.com/embed/GkTWxDB21cA?si=vaT-A4Qp2cUoiISc&amp;start=43"
},

{
  id: 4,
  nombre: "Olivia Dean",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDGndFsJy-3VWyS9736OWkjeL9Q7HakjbI8S4wZ4seA&s=10",
  descripcion: "Cantante británica emergente con estilo soul y R&B.",
  genero: "Soul / R&B",
  pais: "Reino Unido",
  album: "The Art of Loving (2026)",
  video: "https://www.youtube.com/embed/JUGCQK8dUhc?si=Ei5ax15eIQKQM4JX&amp;start=50"
},

{
  id: 5,
  nombre: "Bruno Mars",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhCZx5p0eIDulIw-4HQu29ffpbSVTJRn6Di5xEWdUKg&s=10",
  descripcion: "Cantante estadounidense conocido por su estilo retro y fusión de pop, funk y R&B.",
  genero: "Pop / R&B",
  pais: "Estados Unidos",
  album: "The Romantic (2026)",
  video: "https://www.youtube.com/embed/aQXq3ndLkHs?si=8iZxwXifv6EmS823"
},

{
  id: 6,
  nombre: "RAYE",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHT1wOdgh0dmiPHXHEYeapv9KvqzFWzQg9p8ySLGt-Hw&s=10",
  descripcion: "Cantautora británica reconocida por su honestidad lírica y producción experimental.",
  genero: "Pop alternativo / R&B",
  pais: "Reino Unido",
  album: "THIS MUSIC MAY CONTAIN HOPE (2026)",
  video: "https://www.youtube.com/embed/rK5TyISxZ_M?si=5KepVdwnt-CMGllt&start=128"
}


])

function mostrarArtista(artista: Artista) {

  artistaSeleccionado.value = artista

}

function cerrarArtista() {

  artistaSeleccionado.value = null

}

</script>


<style scoped>

#Artistas {
  width: 100%;
  padding: 50px 20px;
  text-align: center;
}

.artistas-menu {
  display: flex;
  justify-content: center;
  align-items: stretch;

  width: 100%;
  max-width: 1200px;

  margin: 40px auto 0;

  overflow: hidden;

  border-radius: 10px;
}

.artista-card {
  position: relative;

  width: 180px;
  height: 380px;

  padding: 0;

  border: none;

  background: #c68dfe;

  cursor: pointer;

  overflow: hidden;

  flex: 1;
}

.artista-card img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;

  transition: transform 0.4s ease;
}

.artista-card h3 {
  position: absolute;

  top: 15px;
  left: 0;
  right: 0;

  z-index: 2;

  margin: 0;

  color: #c68dfe;

  font-size: 18px;

  text-shadow: 0 2px 6px black;

  pointer-events: none;
}

.artista-card:hover img {
  transform: scale(1.08);
}

.detalle-artista {

  display: grid;

  grid-template-columns: 220px 1fr 1.3fr;

  gap: 30px;

  max-width: 1200px;

  margin: 50px auto 0;

  padding: 30px;

  align-items: center;

  text-align: left;

  border-radius: 15px;

}

.artista-foto {

  position: relative;

  text-align: center;
}


.artista-foto img {

  width: 200px;
  height: 300px;

  object-fit: cover;

  border-radius: 10px;

}


.artista-foto h3 {

  margin-top: 10px;

  text-align: center;

}

.cerrar {

  position: absolute;

  top: -10px;
  right: -10px;

  width: 35px;
  height: 35px;

  border: none;

  border-radius: 50%;

  cursor: pointer;

  font-size: 18px;

  z-index: 5;

}

.artista-info {

  padding: 10px;

}


.artista-info h2 {

  margin-top: 0;

}


.artista-info p {

  line-height: 1.6;

}

.artista-video {

  width: 100%;

}


.artista-video iframe {

  width: 100%;

  min-height: 280px;

  border: none;

  border-radius: 10px;

}

@media (max-width: 900px) {

  .artistas-menu {

    overflow-x: auto;

    justify-content: flex-start;

  }


  .artista-card {

    flex: 0 0 140px;

  }


  .detalle-artista {

    grid-template-columns: 1fr;

    text-align: center;

  }


  .artista-info {

    text-align: center;

  }

}

</style>
