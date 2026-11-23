<template>
  <section id="Artistas">

    <div class="encabezado-artistas">
      <span class="etiqueta">SpheraSOUND · 2026</span>

      <h2>HEADLINER<span class="punto">S</span></h2>

      <p class="subtitulo">
        Conoce a nuestros artistas principales
      </p>

      <p class="instruccion">
        Selecciona un artista para descubrir su universo musical.
      </p>
    </div>

    <div class="artistas-menu">

      <button
        v-for="artista in artistas"
        :key="artista.id"
        class="artista-card"
        @click="mostrarArtista(artista)"
        :aria-label="'Conocer más sobre ' + artista.nombre"
      >
        <img
          :src="artista.imagen"
          :alt="artista.nombre"
        >

        <div class="tarjeta-overlay"></div>


        <h3>{{ artista.nombre }}</h3>

        <span class="ver-artista">VER ARTISTA ↗</span>
      </button>

    </div>

    <Transition name="detalle">

      <div
        v-if="artistaSeleccionado"
        class="detalle-artista"
        :key="artistaSeleccionado.id"
      >

        <div class="artista-foto">

          <button
            class="cerrar"
            @click="cerrarArtista"
            aria-label="Cerrar información del artista"
          >
            ✕
          </button>

          <img
            :src="artistaSeleccionado.imagen"
            :alt="artistaSeleccionado.nombre"
          >

          <span class="foto-etiqueta">ARTISTA DESTACADO</span>

          <h3>{{ artistaSeleccionado.nombre }}</h3>

        </div>

        <div class="artista-info">

          <span class="etiqueta">CONOCE AL ARTISTA</span>

          <h2>
            {{ artistaSeleccionado.nombre }}<span class="punto">.</span>
          </h2>

          <p class="descripcion-artista">
            {{ artistaSeleccionado.descripcion }}
          </p>

          <div class="dato-artista">
            <span class="dato-titulo">GÉNERO</span>
            <p>{{ artistaSeleccionado.genero }}</p>
          </div>

          <div class="dato-artista">
            <span class="dato-titulo">PAÍS</span>
            <p>{{ artistaSeleccionado.pais }}</p>
          </div>

          <div class="dato-artista">
            <span class="dato-titulo">ÁLBUM DESTACADO</span>
            <p>{{ artistaSeleccionado.album }}</p>
          </div>

        </div>

        <div class="artista-video">

          <span class="etiqueta">EN ESCENA</span>

          <iframe
            :src="artistaSeleccionado.video"
            :title="'Video de ' + artistaSeleccionado.nombre"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

        </div>

      </div>

    </Transition>

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
  nombre: "Charli XCX",
  imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWb018AvFHTDEk_sEPmVcuW2r_uZZeR5GE9IJrVnl1H3cqagiDNZ98Dg&s=10",
  descripcion: "Cantautora británica reconocida por su pop electrónico experimental, sus sonidos innovadores y su influencia en el hyperpop.",
  genero: "Hyperpop / Electropop / Dance-pop",
  pais: "Reino Unido",
  album: "BRAT (2024)",
  video: "https://www.youtube.com/embed/eO3zsYsDnbI?si=wX9QfOPaokVReutq"
},

{
  id: 2,
  nombre: "The Kid LAROI",
  imagen: "https://i.scdn.co/image/ab6761610000e5eb1cea74b0fa7d098d5e80cd87",
  descripcion: "Cantante y rapero australiano que combina hip-hop, pop y melodías emotivas inspiradas en experiencias personales.",
  genero: "Pop rap / Hip-hop / Pop",
  pais: "Australia",
  album: "BEFORE I FORGET (2026)",
  video: "https://www.youtube.com/embed/p9wsEOVK4cw?si=v3qP-pja42jCNubD"
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
  nombre: "Arca",
  imagen: "https://i.scdn.co/image/ab6761610000e5eb4b88b2ab3ee04bb54003999e",
  descripcion: "Productora, cantante y compositora venezolana que experimenta con música electrónica, sonidos vanguardistas y pop experimental.",
  genero: "Electrónica experimental / Art pop / Deconstructed club",
  pais: "Venezuela",
  album: "KiCk i (2020)",
  video: "https://www.youtube.com/embed/kNjEOrx_oqc?si=VOcUs9VCTWtEK2di"
},

{
  id: 5,
  nombre: "Bad Bunny",
  imagen: "https://i.scdn.co/image/ab6761610000517481f47f44084e0a09b5f0fa13",
  descripcion: "Cantante y rapero puertorriqueño que fusiona reguetón, trap latino y sonidos tradicionales de Puerto Rico.",
  genero: "Reguetón / Trap latino / Pop urbano",
  pais: "Puerto Rico",
  album: "DeBÍ TiRAR MáS FOToS (2025)",
  video: "https://www.youtube.com/embed/a1Femq4NPxs?si=9Y41G9M3semhjbXm"
},

{
  id: 6,
  nombre: "Lorde",
  imagen: "https://charts-static.billboard.com/img/2013/03/lorde-me3-344x344.jpg",
  descripcion: "Cantautora neozelandesa conocida por sus letras introspectivas y su estilo que combina indie pop, electropop y sonidos alternativos.",
  genero: "Indie pop / Electropop / Pop alternativo",
  pais: "Nueva Zelanda",
  album: "Virgin (2025)",
  video: "https://www.youtube.com/embed/1UpoZpMBM9Y?si=DQsyw7r8hp1XOHnL"
},

{
  id: 7,
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

/* SECCIÓN PRINCIPAL */
#Artistas {
  width: 100%;
  padding: 90px 30px;
  box-sizing: border-box;

  text-align: center;
  background: #f9f1e4;
  color: #202020;
}

/* ENCABEZADO */
.encabezado-artistas {
  max-width: 850px;
  margin: 0 auto;
}

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

/* TÍTULO PRINCIPAL */
.encabezado-artistas h2 {
  font-family: Impact, "Arial Black", sans-serif;
  font-size: clamp(52px, 9vw, 100px);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 0.95;

  margin: 0 0 25px;
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

  margin: 0 0 10px;
}

/* TEXTO SECUNDARIO */
.instruccion {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.8;
  letter-spacing: 0.3px;

  color: #656065;
  margin: 0;
}

/* GALERÍA DE ARTISTAS */
.artistas-menu {
  display: flex;
  justify-content: center;
  align-items: stretch;

  width: 100%;
  max-width: 1250px;

  margin: 50px auto 0;

  overflow: hidden;
  border-radius: 8px;
  background: #202020;
}

/* TARJETA INDIVIDUAL */
.artista-card {
  position: relative;

  display: flex;
  flex: 1 1 0;

  min-width: 0;
  height: 410px;

  padding: 0;
  border: none;

  background: #202020;
  color: white;

  cursor: pointer;
  overflow: hidden;
  isolation: isolate;

  text-align: left;
}

/* IMAGEN */
.artista-card img {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  z-index: -2;

  transition: transform 0.6s ease, filter 0.4s ease;
}

/* DEGRADADO PARA LEER LOS TEXTOS */
.tarjeta-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.05) 35%,
    rgba(0, 0, 0, 0.85) 100%
  );

  z-index: -1;
  transition: background 0.3s ease;
}


/* NOMBRE */
.artista-card h3 {
  position: absolute;
  left: 16px;
  right: 12px;
  bottom: 48px;

  margin: 0;

  font-family: Impact, "Arial Black", sans-serif;
  font-size: clamp(18px, 2vw, 27px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.3px;

  color: white;
  text-transform: uppercase;
  overflow-wrap: anywhere;

  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);

  transition: color 0.3s ease, transform 0.3s ease;
}

/* INDICADOR DE INTERACCIÓN */
.ver-artista {
  position: absolute;
  left: 16px;
  bottom: 18px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.5px;

  color: #eafe37;
}

/* EFECTOS AL PASAR EL CURSOR */
.artista-card:hover img {
  transform: scale(1.08);
}

.artista-card:hover h3 {
  color: #eafe37;
  transform: translateY(-4px);
}

.artista-card:hover .tarjeta-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 20%,
    rgba(0, 0, 0, 0.95) 100%
  );
}

.artista-card:focus-visible {
  outline: 3px solid #4f772d;
  outline-offset: -4px;
}

/* PANEL DE DETALLE */
.detalle-artista {
  display: grid;

  grid-template-columns: minmax(180px, 0.8fr) minmax(250px, 1.2fr) minmax(280px, 1.4fr);

  gap: 35px;
  align-items: center;

  width: 100%;
  max-width: 1250px;

  margin: 45px auto 0;
  padding: 35px;

  box-sizing: border-box;

  background: white;
  border: 1px solid #e2d9ce;
  border-radius: 8px;

  text-align: left;
}

/* ANIMACIÓN DE APARICIÓN */
.detalle-enter-active,
.detalle-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.detalle-enter-from,
.detalle-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

/* FOTOGRAFÍA DEL ARTISTA */
.artista-foto {
  position: relative;
  text-align: center;
}

.artista-foto img {
  display: block;

  width: 100%;
  max-width: 240px;
  height: 300px;

  margin: 0 auto;

  object-fit: cover;
  border-radius: 5px;
}

/* ETIQUETA DE LA FOTOGRAFÍA */
.foto-etiqueta {
  display: block;

  margin-top: 16px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2px;

  color: #4f772d;
}

/* NOMBRE BAJO LA FOTO */
.artista-foto h3 {
  margin: 8px 0 0;

  font-family: Impact, "Arial Black", sans-serif;
  font-size: 25px;
  line-height: 1.1;
  text-transform: uppercase;
}

/* BOTÓN CERRAR */
.cerrar {
  position: absolute;
  top: -12px;
  right: -8px;

  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

  background: #eafe37;
  color: #202020;

  font-size: 18px;
  font-weight: 800;

  cursor: pointer;
  z-index: 5;

  transition: transform 0.3s ease;
}

.cerrar:hover {
  transform: rotate(90deg);
}

/* INFORMACIÓN */
.artista-info {
  min-width: 0;
  padding: 5px 0;
}

.artista-info h2 {
  margin: 0 0 20px;

  font-family: Impact, "Arial Black", sans-serif;
  font-size: clamp(30px, 3vw, 45px);
  line-height: 1.05;
  letter-spacing: -0.5px;

  color: #202020;
  text-transform: uppercase;
  overflow-wrap: anywhere;
}

/* DESCRIPCIÓN */
.descripcion-artista {
  margin: 0 0 25px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.8;

  color: #656065;
}

/* DATOS DEL ARTISTA */
.dato-artista {
  padding: 13px 0;
  border-top: 1px solid #e8e0d7;
}

.dato-titulo {
  display: block;

  margin-bottom: 5px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;

  color: #4f772d;
}

.dato-artista p {
  margin: 0;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7;

  color: #202020;
  overflow-wrap: anywhere;
}

/* VIDEO */
.artista-video {
  width: 100%;
  min-width: 0;
}

.artista-video .etiqueta {
  margin-bottom: 15px;
}

.artista-video iframe {
  display: block;

  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 200px;

  border: none;
  border-radius: 5px;

  background: #202020;
}

/* TABLET */
@media (max-width: 1000px) {
  #Artistas {
    padding: 70px 20px;
  }

  .artistas-menu {
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;

    border-radius: 6px;
    scroll-snap-type: x mandatory;
  }

  .artista-card {
    flex: 0 0 170px;
    height: 350px;
    scroll-snap-align: start;
  }

  .detalle-artista {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
    gap: 25px;
    padding: 25px;
  }

  .artista-video {
    grid-column: 1 / -1;
  }

  .artista-video iframe {
    min-height: 300px;
  }
}

/* CELULARES */
@media (max-width: 600px) {
  #Artistas {
    padding: 60px 15px;
  }

  .encabezado-artistas h2 {
    font-size: clamp(43px, 12vw, 65px);
    letter-spacing: -1px;
  }

  .encabezado-artistas .etiqueta {
    font-size: 10px;
    letter-spacing: 3px;
  }

  .subtitulo {
    font-size: 18px;
  }

  .instruccion {
    font-size: 13px;
  }

  .artistas-menu {
    margin-top: 30px;
  }

  .artista-card {
    flex: 0 0 155px;
    height: 310px;
  }

  .artista-card h3 {
    font-size: 23px;
    left: 12px;
    right: 10px;
  }

  .numero-artista {
    left: 12px;
    top: 14px;
  }

  .ver-artista {
    left: 12px;
    font-size: 8px;
  }

  .detalle-artista {
    grid-template-columns: minmax(0, 1fr);
    gap: 25px;

    margin-top: 30px;
    padding: 22px 18px;
  }

  .artista-foto img {
    max-width: 220px;
    height: 280px;
  }

  .artista-info {
    text-align: left;
  }

  .artista-info h2 {
    font-size: 35px;
  }

  .artista-video {
    grid-column: auto;
  }

  .artista-video iframe {
    min-height: 190px;
  }
}

</style>