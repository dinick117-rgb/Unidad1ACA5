<template>

  <section
    id="Canciones"
    class="canciones-seccion"
  >

    <h2>Mejor Canción del Año</h2>

    <p class="descripcion">
      Explora nuestro catálogo y selecciona
      una canción para conocer más.
    </p>

    <div class="categorias">

      <button @click="mostrarTodas">
        Todas
      </button>

      <button @click="filtrarPorCategoria('Country')">
        Mejor canción country
      </button>

      <button @click="filtrarPorCategoria('Latina')">
        Mejor canción latina
      </button>

      <button @click="filtrarPorCategoria('Rock')">
        Mejor canción rock
      </button>

      <button @click="filtrarPorCategoria('R&B')">
        Mejor canción R&B
      </button>

    </div>

    <p class="contador">

      Canciones mostradas:
      <strong>{{ cancionesMostradas.length }}</strong>

    </p>

    <div class="canciones">

      <PlantCard
        v-for="cancion in cancionesMostradas"
        :key="cancion.id"
        :cancion="cancion"
        @seleccionar="mostrarDetalle"
      />

    </div>

    <div
      v-if="cancionSeleccionada"
      class="detalle"
    >

      <button
        class="cerrar-detalle"
        @click="cerrarDetalle"
      >
        ✕
      </button>

      <div class="detalle-imagen">

        <img
          :src="cancionSeleccionada.imagen"
          :alt="cancionSeleccionada.nombre"
        >

      </div>

      <div class="detalle-info">

        <h3>
          {{ cancionSeleccionada.nombre }}
        </h3>

        <p class="detalle-categoria">
          {{ cancionSeleccionada.categoria }}
        </p>

        <p>
          {{ cancionSeleccionada.estructura }}
        </p>


        <ul>

          <li>
            <strong>Fecha:</strong>
            {{ cancionSeleccionada.fecha }}
          </li>

          <li>
            <strong>Calidad:</strong>
            {{ cancionSeleccionada.calidad }}
          </li>

          <li>
            <strong>Innovación:</strong>
            {{ cancionSeleccionada.inovacion }}
          </li>

          <li>
            <strong>Impacto:</strong>
            {{ cancionSeleccionada.impacto }}
          </li>

          <li>
            <strong>Autores:</strong>
            {{ cancionSeleccionada.autores }}
          </li>

        </ul>

        <a
          :href="cancionSeleccionada.spotify"
          target="_blank"
          rel="noopener noreferrer"
          class="spotify-btn"
        >
          Escuchar en Spotify
        </a>

      </div>

      <div class="detalle-video">

        <iframe
          :src="cancionSeleccionada.video"
          :title="'Video de ' + cancionSeleccionada.nombre"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        >
        </iframe>

      </div>

    </div>

    <div
      v-else
      class="sin-seleccion"
    >

      <p>
        Selecciona una canción para consultar
        sus características.
      </p>

    </div>

  </section>

</template>


<script setup lang="ts">

import { ref } from 'vue'

import PlantCard from './PlantCard.vue'

interface Cancion {

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

const canciones: Cancion[] = [

  {
    id: 1,

    nombre: 'Where Is My Husband!',

    categoria: 'Canción del Año',

    estructura: 'Pop alternativo con producción dramática.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIwqxIlA-BpGXzAEZdJlczOy1cM5n07o9bNDMCLHZfg&s=10',

    fecha: '2026',

    calidad:
      'Crítica social con humor ácido.',

    inovacion:
      'Mezcla de pop y teatro musical.',

    impacto:
      'Viral en redes, símbolo de independencia femenina.',

    autores:
      'RAYE, Mike Sabath',

    video:
      'https://www.youtube.com/embed/rK5TyISxZ_M?si=rQgTlBP0YHNB9vJ9',

    spotify:
      'https://open.spotify.com/intl-es/track/55lijDD6OAjLFFUHU9tcDm?si=5d04e2e986b64ebe'
  },


  {
    id: 2,

    nombre: 'Man I Need',

    categoria: 'Canción del Año',

    estructura:
      'Soul-pop con arreglos clásicos.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3GVbpu3ZKLFtElb-YIRPq1lWLaijaJgcV10o40EyAw&s=10',

    fecha: '2026',

    calidad:
      'Vulnerabilidad emocional y deseo.',

    inovacion:
      'Sonido retro con frescura moderna.',

    impacto:
      'Consolidó a Olivia Dean como voz emergente.',

    autores:
      'Olivia Dean, Amy Allen, John Ryan, Max Wolfgang',

    video:
      'https://www.youtube.com/embed/oIv_Y2RPQ_A?si=ACUIch4-JCv2_Qa9',

    spotify:
      'https://open.spotify.com/intl-es/track/1qbmS6ep2hbBRaEZFpn7BX?si=3a1ad7cc93a647bf'
  },


  {
    id: 3,

    nombre: 'Hardest Part',

    categoria: 'Canción del Año',

    estructura:
      'Balada pop con piano y crescendos emocionales.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn66Af-yTuZSATca39TesStKZpKLhOAbsLAexMTkfQCQ&s=10',

    fecha: '2026',

    calidad:
      'Reflexión sobre pérdida y resiliencia.',

    inovacion:
      'Retorno a un estilo íntimo y clásico.',

    impacto:
      'Conectó con audiencias globales por su vulnerabilidad.',

    autores:
      'Noah Cyrus, Greg Kurstin',

    video:
      'https://www.youtube.com/embed/o2SY6NJSo5A?si=DbH2fWhASlXgtAdX',

    spotify:
      'https://open.spotify.com/intl-es/track/4DD7dYiv3gBc7H2CJFVptm?si=9c6168fce7764a5f'
  },


  {
    id: 4,

    nombre: 'The Great Divide',

    categoria: 'Rock',

    estructura:
      'Rock-folk con guitarras acústicas y crescendos.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZzWRs19Eb1CIQLWyceHZ2IglgqWUnuLMFmEClQW_aQ&s=10',

    fecha: '2026',

    calidad:
      'Nostalgia y separación.',

    inovacion:
      'Fusión folk-rock con sensibilidad pop.',

    impacto:
      'Himno generacional en EE.UU.',

    autores:
      'Noah Kahan, Gabe Simon',

    video:
      'https://www.youtube.com/embed/SKs80r2Lp34?si=DOGqJp50mi3YzdVH',

    spotify:
      'https://open.spotify.com/intl-es/track/77zqs8ucHCSk5jh9TYec4b?si=2f376e10a8c54a28'
  },


  {
    id: 5,

    nombre: 'Lost Weekend',

    categoria: 'Rock',

    estructura:
      'Rock alternativo con tintes folk.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrXJ1PSNos_9h3Fm6I8cAvj0mRnxt5dTc9fxfxWJ4Kw&s=10',

    fecha: '2026',

    calidad:
      'Melancólica, introspectiva.',

    inovacion:
      'Producción minimalista con gran carga emocional.',

    impacto:
      'Aclamada por crítica indie.',

    autores:
      'Phoebe Bridgers',

    video:
      'https://www.youtube.com/embed/5x3fpZfKwwY?si=AmCqJNuzojBVoGHz',

    spotify:
      'https://open.spotify.com/intl-es/track/1GMPPheF4aMHMifOgp72eF?si=fd3516eadf484298'
  },


  {
    id: 6,

    nombre: 'I Just Might',

    categoria: 'R&B',

    estructura:
      'R&B clásico con groove funk.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWjC1QXbr5fzjz8Sm3srNk68zuJakIU3uG9gD6LgbuQ&s=10',

    fecha: '2026',

    calidad:
      'Amor apasionado y directo.',

    inovacion:
      'Retorno al sonido Motown.',

    impacto:
      'Refuerza la vigencia del R&B tradicional.',

    autores:
      'Bruno Mars, Dernst Emile II, Philip Lawrence, Brody Brown',

    video:
      'https://www.youtube.com/embed/mrV8kK5t0V8?si=7yLMEfZh3MiSPd76',

    spotify:
      'https://open.spotify.com/intl-es/track/12bYYQaLqHliSXvRIYlq8G?si=99403c4d48d845fb'
  },


  {
    id: 7,

    nombre: 'Die On This Hill',

    categoria: 'R&B',

    estructura:
      'Balada R&B con producción atmosférica.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOrmDC7vwZje2LGqL408pI8pQ7UCL514NGwS9jKBk5w&s=10',

    fecha: '2026',

    calidad:
      'Defensa de convicciones personales.',

    inovacion:
      'Uso de sintetizadores etéreos.',

    impacto:
      'Voz emergente con fuerte mensaje social.',

    autores:
      'Sienna Spiro, Omer Fedi, Michael Pollack',

    video:
      'https://www.youtube.com/embed/otzXtiodkEE?si=K1glFo9TuIrDHqP9',

    spotify:
      'https://open.spotify.com/intl-es/track/2gYTC8DsplN3RNdpdBcCOQ?si=e2f7fb171c664cde'
  },


  {
    id: 8,

    nombre: 'La Perla',

    categoria: 'Latina',

    estructura:
      'Flamenco-pop con fusión electrónica.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E0GUqWBTZY6MHb_8TMesF8Q8AUkzRdO8GQnAxa8otw&s=10',

    fecha: '2026',

    calidad:
      'Identidad cultural y orgullo.',

    inovacion:
      'Mezcla de tradición española con beats globales.',

    impacto:
      'Representación latina en categoría general.',

    autores:
      'Rosalía y colaboradores',

    video:
      'https://www.youtube.com/embed/GkTWxDB21cA?si=Su6FoZhR1fRvs0hI',

    spotify:
      'https://open.spotify.com/intl-es/track/4oVO4fGNRRvEn0CRuFO4qv?si=876c0ab032c541ec'
  },


  {
    id: 9,

    nombre: 'Inglés en Miami',

    categoria: 'Latina',

    estructura:
      'Reguetón moderno con fusión de pop urbano.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NJW4upEuEZgJRhS65s68KALjFXXk_9gNxrWf7P0oWg&s=10',

    fecha: '2026',

    calidad:
      'Narrativa sobre identidad cultural y vida urbana.',

    inovacion:
      'Mezcla de reguetón clásico con producción internacional.',

    impacto:
      'Tema viral en plataformas digitales y radios latinas.',

    autores:
      'Rawayana y Manuel Turizo',

    video:
      'https://www.youtube.com/embed/I6zsDD0hEFc?si=gK3n3NamRY379td4',

    spotify:
      'https://open.spotify.com/intl-es/track/2mnqIjaciToIErlxJDFNle?si=71f75ab7043145f1'
  },


  {
    id: 10,

    nombre: 'Choosin’ Texas',

    categoria: 'Country',

    estructura:
      'Country moderno con influencias pop.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopuDYGlWTb8DTFDVgxjg_HAjlTfDSrPeI3Uln9Nbs0w&s=10',

    fecha: '2026',

    calidad:
      'Orgullo regional y raíces.',

    inovacion:
      'Country crossover con atractivo mainstream.',

    impacto:
      'Éxito masivo en EE.UU.',

    autores:
      'Ella Langley, Luke Dick, Miranda Lambert, Joybeth Taylor',

    video:
      'https://www.youtube.com/embed/hLOheGDwD_0?si=Z1LRThOTtLPfISPc',

    spotify:
      'https://open.spotify.com/intl-es/track/65DbTqJKhbwqYbZ1Okr0rc?si=4e71953034524f5f'
  },


  {
    id: 11,

    nombre: 'I Knew It, I Knew You',

    categoria: 'Country',

    estructura:
      'Balada pop con tintes folk y producción minimalista.',

    imagen:
      'https://i.scdn.co/image/ab67616d0000b273e8852f06eca817333d20e60b',

    fecha: '2026',

    calidad:
      'Explora la nostalgia y la conexión emocional.',

    inovacion:
      'Fusión de pop alternativo con elementos acústicos.',

    impacto:
      'Tema viral en plataformas digitales y aclamado por la crítica.',

    autores:
      'Taylor Swift, Jack Antonoff',

    video:
      'https://www.youtube.com/embed/hDU4GB1PTxc?si=7JKaWn8truhCz7u_',

    spotify:
      'https://open.spotify.com/intl-es/track/5uPaqMMt59KGrdKIitDRqa?si=d6f1a30c4fe646e4'
  }

]

const cancionesMostradas =
  ref<Cancion[]>(canciones)

const cancionSeleccionada =
  ref<Cancion | null>(null)

function mostrarTodas() {

  cancionesMostradas.value = canciones

}


function filtrarPorCategoria(
  categoria: string
) {

  cancionesMostradas.value =
    canciones.filter(
      cancion =>
        cancion.categoria === categoria
    )

}

function mostrarDetalle(
  cancion: Cancion
) {

  cancionSeleccionada.value = cancion

}


function cerrarDetalle() {

  cancionSeleccionada.value = null

}

</script>


<style scoped>

.canciones-seccion {

  width: 100%;

  padding: 70px 5%;

  text-align: center;

}


.descripcion {

  max-width: 700px;

  margin: 0 auto 30px;

  line-height: 1.6;

}


.categorias {

  display: flex;

  justify-content: center;

  align-items: center;

  flex-wrap: wrap;

  gap: 10px;

  margin-bottom: 25px;

}


.categorias button {

  padding: 10px 18px;

  border: none;

  border-radius: 20px;

  background: #4f772d;

  color: white;

  cursor: pointer;

  transition: 0.2s;

}


.categorias button:hover {

  background: #31572c;

  transform: translateY(-2px);

}

.contador {

  margin-bottom: 30px;

}

.canciones {

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(230px, 1fr)
    );

  gap: 30px;

  width: 100%;

  max-width: 1300px;

  margin: 0 auto;

  align-items: stretch;

}


.detalle {

  position: relative;

  display: grid;

  grid-template-columns:
    230px
    1fr
    1.4fr;

  gap: 30px;

  align-items: center;

  width: 100%;

  max-width: 1200px;

  margin: 50px auto 0;

  padding: 35px;

  background: #eafe37;

  border-radius: 18px;

  text-align: left;

  box-shadow:
    0 8px 25px
    rgba(0, 0, 0, 0.08);

}

.detalle-imagen img {

  width: 100%;

  aspect-ratio: 1 / 1;

  object-fit: cover;

  border-radius: 12px;

}

.detalle-info h3 {

  margin-top: 0;

  font-size: 28px;

}


.detalle-info ul {

  padding-left: 20px;

}


.detalle-info li {

  margin-bottom: 10px;

}


.detalle-categoria {

  display: inline-block;

  padding: 6px 12px;

  border-radius: 20px;

  background: #e8f1e3;

  color: #31572c;

  font-weight: bold;

}

.detalle-video {

  width: 100%;

}


.detalle-video iframe {

  width: 100%;

  aspect-ratio: 16 / 9;

  border: none;

  border-radius: 12px;

}

.spotify-btn {

  display: inline-block;

  margin-top: 15px;

  padding: 12px 20px;

  border-radius: 25px;

  background: #1db954;

  color: white;

  text-decoration: none;

  font-weight: bold;

  transition: 0.2s;

}


.spotify-btn:hover {

  transform: translateY(-2px);

  background: #159447;

}

.cerrar-detalle {

  position: absolute;

  top: 15px;

  right: 15px;

  width: 35px;

  height: 35px;

  border: none;

  border-radius: 50%;

  background: #333;

  color: white;

  cursor: pointer;

  font-size: 18px;

}

.sin-seleccion {

  margin-top: 40px;

  padding: 20px;

  background: #f5f5f5;

  border-radius: 10px;

}

@media (max-width: 950px) {

  .detalle {

    grid-template-columns: 1fr 1fr;

  }

  .detalle-video {

    grid-column: 1 / -1;

  }

}


@media (max-width: 650px) {

  .canciones {

    grid-template-columns:
      1fr;

  }

  .detalle {

    grid-template-columns: 1fr;

    padding: 25px;

  }

  .detalle-info {

    text-align: center;

  }

}

</style>

