
<template>
  <section class="actividades">

    <!-- ENCABEZADO -->
    <div class="actividades-header">
      <span class="etiqueta-seccion">SPHERASOUND · 2026</span>

      <h2>
        ACTIVIDADE<span class="punto">S</span>
      </h2>

      <p>
        La experiencia va más allá de la música.
        Descubre todas las actividades que tenemos preparadas
        para compartir, explorar y divertirte.
      </p>
    </div>

    <!-- FILTROS -->
    <div class="filtros">
      <button
        v-for="dia in dias"
        :key="dia"
        :class="{ activo: diaSeleccionado === dia }"
        @click="diaSeleccionado = dia"
      >
        {{ dia }}
      </button>
    </div>

    <!-- TARJETAS -->
    <div class="actividades-grid">

      <article
        v-for="actividad in actividadesFiltradas"
        :key="actividad.id"
        class="actividad-card"
      >

        <!-- IMAGEN -->
        <div class="actividad-imagen">
          <img
            :src="actividad.imagen"
            :alt="actividad.nombre"
          >

          <span class="actividad-categoria">
            {{ actividad.categoria }}
          </span>
        </div>

        <!-- INFORMACIÓN -->
        <div class="actividad-info">

          <span class="actividad-dia">
            {{ actividad.dia }}
          </span>

          <h3>{{ actividad.nombre }}</h3>

          <p class="actividad-descripcion">
            {{ actividad.descripcion }}
          </p>

          <!-- DETALLES -->
          <div class="actividad-detalles">

            <div>
              <span class="icono">◷</span>
              <span>{{ actividad.hora }}</span>
            </div>

            <div>
              <span class="icono">⌖</span>
              <span>{{ actividad.lugar }}</span>
            </div>

          </div>

        </div>

      </article>

    </div>

    <!-- SIN RESULTADOS -->
    <p
      v-if="actividadesFiltradas.length === 0"
      class="sin-actividades"
    >
      No hay actividades para este día.
    </p>

  </section>
</template>


<script setup lang="ts">

import { ref, computed } from 'vue'
import imagenActividad from '../assets/festival.jpg'
import imagenActividad1 from '../assets/A1.jpg'
import imagenActividad2 from '../assets/A2.jpg'
import imagenActividad3 from '../assets/A3.jpg'
import imagenActividad4 from '../assets/A4.jpg'
import imagenActividad5 from '../assets/A5.jpg'
import imagenActividad6 from '../assets/A6.jpg'
import imagenActividad7 from '../assets/A7.jpg'
import imagenActividad8 from '../assets/A8.jpg'
import imagenActividad9 from '../assets/A9.jpg'
import imagenActividad10 from '../assets/A10.jpg'
import imagenActividad11 from '../assets/A11.jpg'
import imagenActividad12 from '../assets/A12.jpg'


// FILTROS POR DÍA
const dias = [
  'Todas',
  '11 NOV',
  '12 NOV',
  '13 NOV',
  '14 NOV',
  '15 NOV',
    '23 NOV'
]

const diaSeleccionado = ref('Todas')

// ACTIVIDADES DEL FESTIVAL
const actividades = [
  {
    id: 1,
    nombre: 'Apertura de la feria',
    dia: 'Miércoles 11 de noviembre',
    filtro: '11 NOV',
    hora: 'Por confirmar',
    lugar: 'Zona de feria',
    categoria: 'FERIA',
    descripcion:
      'Comienza la experiencia SpheraSonoro y descubre todo lo que el festival tiene preparado para ti.',
    imagen: imagenActividad10
  },
  {
    id: 2,
    nombre: 'Dinámicas con marca',
    dia: 'Miércoles 11 de noviembre',
    filtro: '11 NOV',
    hora: 'Por confirmar',
    lugar: 'Zona de actividades',
    categoria: 'INTERACTIVO',
    descripcion:
      'Participa en dinámicas especiales, conoce nuestras marcas participantes y disfruta de sorpresas.',
    imagen: imagenActividad9
  },
  {
    id: 3,
    nombre: 'Talleres creativos',
    dia: 'Jueves 12 de noviembre',
    filtro: '12 NOV',
    hora: 'Por confirmar',
    lugar: 'Zona de talleres',
    categoria: 'CREATIVIDAD',
    descripcion:
      'Explora tu lado creativo con actividades y experiencias para crear algo único.',
    imagen: imagenActividad8
  },
  {
    id: 4,
    nombre: 'Ruleta de premios',
    dia: 'Jueves 12 de noviembre',
    filtro: '12 NOV',
    hora: 'Por confirmar',
    lugar: 'Zona de actividades',
    categoria: 'DINÁMICA',
    descripcion:
      'Pon a prueba tu suerte y participa para llevarte algunas sorpresas del festival.',
    imagen: imagenActividad11
  },
  {
    id: 5,
    nombre: 'Beauty stations',
    dia: 'Viernes 13 de noviembre',
    filtro: '13 NOV',
    hora: 'Por confirmar',
    lugar: 'Zona de belleza',
    categoria: 'BEAUTY',
    descripcion:
      'Dale un toque diferente a tu estilo con espacios dedicados a la belleza y la expresión personal.',
    imagen: imagenActividad7
  },
  {
    id: 6,
    nombre: 'Photobooth Sphera',
    dia: 'Viernes 13 de noviembre',
    filtro: '13 NOV',
    hora: 'Por confirmar',
    lugar: 'Zona de fotografía',
    categoria: 'FOTOGRAFÍA',
    descripcion:
      'Captura tus mejores momentos y llévate un recuerdo especial de SpheraSonoro.',
    imagen: imagenActividad12
  },
  {
    id: 7,
    nombre: 'Zona de juegos',
    dia: 'Sábado 14 de noviembre',
    filtro: '14 NOV',
    hora: 'Por confirmar',
    lugar: 'Zona de entretenimiento',
    categoria: 'ENTRETENIMIENTO',
    descripcion:
      'Diviértete con diferentes juegos y retos mientras compartes la experiencia con tus amigos.',
    imagen: imagenActividad5
  },
  {
    id: 8,
    nombre: 'Karaoke challenge',
    dia: 'Sábado 14 de noviembre',
    filtro: '14 NOV',
    hora: 'Por confirmar',
    lugar: 'Zona de escenarios',
    categoria: 'MÚSICA',
    descripcion:
      'Toma el micrófono, demuestra tu talento y canta tus canciones favoritas.',
    imagen: imagenActividad6
  },
  {
    id: 9,
    nombre: 'Bienvenida festivalera',
    dia: 'Domingo 15 de noviembre',
    filtro: '15 NOV',
    hora: 'Por confirmar',
    lugar: 'Escenario principal',
    categoria: 'BIENVENIDA',
    descripcion:
      'Celebra el inicio de una nueva jornada de música, encuentros y experiencias inolvidables.',
    imagen: imagenActividad4
  },
  {
    id: 10,
    nombre: 'DJ set de bienvenida',
    dia: 'Domingo 15 de noviembre',
    filtro: '15 NOV',
    hora: 'Por confirmar',
    lugar: 'Escenario principal',
    categoria: 'MÚSICA',
    descripcion:
      'Disfruta de una selección musical para comenzar la jornada con toda la energía del festival.',
    imagen: imagenActividad3
  },
    {
    id: 11,
    nombre: 'Show y agradecimiento',
    dia: 'Lunes 23 de noviembre',
    filtro: '23 NOV',
    hora: 'Por confirmar',
    lugar: 'Escenario principal',
    categoria: 'MÚSICA',
    descripcion:
      'Disfruta de una selección musical para comenzar la jornada con toda la energía del festival.',
    imagen: imagenActividad2
  },
    {
    id: 12,
    nombre: 'CIERRE SPHERASOUND 2026',
    dia: 'Lunes 23 de noviembre',
    filtro: '23 NOV',
    hora: 'Por confirmar',
    lugar: 'Escenario principal',
    categoria: 'MÚSICA',
    descripcion:
      'Disfruta de una selección musical para comenzar la jornada con toda la energía del festival.',
    imagen: imagenActividad1
  }
]

// FILTRAR ACTIVIDADES
const actividadesFiltradas = computed(() => {

  if (diaSeleccionado.value === 'Todas') {
    return actividades
  }

  return actividades.filter(
    actividad => actividad.filtro === diaSeleccionado.value
  )

})

</script>


<style scoped>

/* SECCIÓN GENERAL */

.actividades {
  width: 100%;
  padding: 80px 5%;
  background-color: #f1f1f1;
  color: #474447;
  box-sizing: border-box;
}

/* ENCABEZADO CENTRADO */

.actividades-header {
  max-width: 750px;
  margin: 0 auto 40px;
  text-align: center;
}

.etiqueta-seccion {
  display: block;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 3px;
  color: #8ebb17;
}

.actividades-header h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin: 15px 0;
  line-height: 1;
}

.punto {
  color: #fe4f76;
}

.actividades-header p {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

/* FILTROS */

.filtros {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
}

.filtros button {
  border: 2px solid #474447;
  background: transparent;
  color: #474447;
  padding: 10px 22px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;
}

.filtros button:hover {
  background: #eafe37;
  border-color: #eafe37;
}

.filtros button.activo {
  background: #eafe37;
  border-color: #eafe37;
  color: #474447;
}

/* CUADRÍCULA: 4 TARJETAS */

.actividades-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

/* TARJETAS */

.actividad-card {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.actividad-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

/* IMÁGENES */

.actividad-imagen {
  height: 175px;
  position: relative;
  overflow: hidden;
  background: #eaeaea;
}

.actividad-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.actividad-card:hover .actividad-imagen img {
  transform: scale(1.06);
}

.actividad-categoria {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #eafe37;
  color: #474447;
  padding: 7px 11px;
  border-radius: 20px;
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.7px;
}

/* INFORMACIÓN */

.actividad-info {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.actividad-dia {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  color: #fe4f76;
  margin-bottom: 9px;
}

.actividad-info h3 {
  font-size: 1.15rem;
  font-weight: 900;
  margin: 0 0 10px;
  color: #474447;
  line-height: 1.3;
}

.actividad-descripcion {
  font-size: 0.85rem;
  line-height: 1.6;
  color: #777;
  margin: 0;
  flex: 1;
}

/* DETALLES */

.actividad-detalles {
  border-top: 1px solid #eaeaea;
  margin-top: 16px;
  padding-top: 13px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.actividad-detalles div {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #555;
}

.icono {
  color: #fe4f76;
  font-size: 1.15rem;
  font-weight: bold;
}

/* SIN RESULTADOS */

.sin-actividades {
  text-align: center;
  padding: 40px;
  font-weight: 700;
  color: #777;
}

/* RESPONSIVE */

/* Pantallas medianas */
@media (max-width: 1100px) {
  .actividades-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Celulares */
@media (max-width: 600px) {
  .actividades {
    padding: 55px 6%;
  }

  .actividades-grid {
    grid-template-columns: 1fr;
  }

  .actividad-imagen {
    height: 220px;
  }

  .filtros {
    gap: 8px;
  }

  .filtros button {
    padding: 9px 15px;
    font-size: 0.75rem;
  }
}

</style>
