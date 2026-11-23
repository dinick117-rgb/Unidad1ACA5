
<script setup>
import { ref } from 'vue'
import imagenDisco from '../assets/casa-disco.jpg'
import imagenOasis from '../assets/punto-oasis.jpg'
import imagenCircus from '../assets/local-circus.jpg'
import imagenDesierto from '../assets/desierto-party.jpg'

const escenarioSeleccionado = ref(null)

const escenarios = [
  {
    id: 1,
    nombre: 'CASA DISCO',
    subtitulo: 'ESCENARIO',
    color: 'disco',
    icono: '🪩',
    imagen: imagenDisco,
    descripcion: 'Un espacio dedicado a la música electrónica, los sonidos experimentales y la cultura de club. Disfruta de una experiencia llena de luces, ritmo y energía.',
    genero: 'Electrónica / House / Dance',
    ambiente: 'Luces, efectos visuales y fiesta',
    ubicacion: 'Por anunciar'
  },
  {
    id: 2,
    nombre: 'PUNTO OASIS',
    subtitulo: 'ESCENARIO',
    color: 'oasis',
    icono: '🌴',
    imagen: imagenOasis,
    descripcion: 'Un rincón tropical donde la música y la naturaleza se encuentran. Un ambiente relajado para disfrutar de diferentes propuestas musicales.',
    genero: 'Indie / Pop / Tropical',
    ambiente: 'Decoración tropical y ambiente relajado',
    ubicacion: 'Por anunciar'
  },
  {
    id: 3,
    nombre: 'LOCAL CIRCUS',
    subtitulo: 'ESCENARIO',
    color: 'circus',
    icono: '🎪',
    imagen: imagenCircus,
    descripcion: 'Un escenario lleno de creatividad, espectáculo y personalidad. Un lugar para descubrir propuestas musicales diferentes en un ambiente lleno de color.',
    genero: 'Alternativo / Pop / Experimental',
    ambiente: 'Estética circense y experiencias visuales',
    ubicacion: 'Por anunciar'
  },
  {
    id: 4,
    nombre: 'DESIERTO PARTY',
    subtitulo: 'ESCENARIO',
    color: 'desierto',
    icono: '🌵',
    imagen: imagenDesierto,
    descripcion: 'Una experiencia inspirada en el desierto, con una atmósfera única y sonidos que invitan a bailar y disfrutar de cada presentación.',
    genero: 'Indie / Rock / Electrónica',
    ambiente: 'Decoración desértica y ambiente al aire libre',
    ubicacion: 'Por anunciar'
  }
]

function mostrarEscenario(escenario) {
  // Si se selecciona el mismo escenario, se cierra
  if (escenarioSeleccionado.value?.id === escenario.id) {
    cerrarDetalle()
    return
  }

  escenarioSeleccionado.value = escenario

  setTimeout(() => {
    document.getElementById('detalle-escenario')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }, 100)
}

function cerrarDetalle() {
  escenarioSeleccionado.value = null
}
</script>

<template>
  <section class="simbologia">

    <!-- PESTAÑAS DE ESCENARIOS -->
    <div class="escenarios">
      <article
        v-for="escenario in escenarios"
        :key="escenario.id"
        class="escenario"
        :class="{ seleccionado: escenarioSeleccionado?.id === escenario.id }"
        @click="mostrarEscenario(escenario)"
      >
        <div class="ilustracion">
          <span>{{ escenario.icono }}</span>
        </div>

        <div class="card" :class="escenario.color">
          <h2>{{ escenario.nombre }}</h2>
          <p>{{ escenario.subtitulo }}</p>
        </div>
      </article>
    </div>

    <!-- INFORMACIÓN DEL ESCENARIO -->
    <Transition name="detalle">
      <div
        v-if="escenarioSeleccionado"
        id="detalle-escenario"
        class="detalle-escenario"
        :key="escenarioSeleccionado.id"
      >

        <!-- IMAGEN -->
        <div class="imagen-detalle">
          <img
            :src="escenarioSeleccionado.imagen"
            :alt="escenarioSeleccionado.nombre"
          />

          <span class="nombre-imagen">
            {{ escenarioSeleccionado.nombre }}
          </span>
        </div>

        <!-- INFORMACIÓN -->
        <div class="informacion-detalle">
          <button
            class="cerrar"
            @click="cerrarDetalle"
            aria-label="Cerrar información"
          >
            ×
          </button>

          <span class="etiqueta">CONOCE EL ESCENARIO</span>

          <h2>{{ escenarioSeleccionado.nombre }}</h2>

          <p class="descripcion">
            {{ escenarioSeleccionado.descripcion }}
          </p>

          <div class="dato">
            <span>GÉNEROS MUSICALES</span>
            <p>{{ escenarioSeleccionado.genero }}</p>
          </div>

          <div class="dato">
            <span>AMBIENTE</span>
            <p>{{ escenarioSeleccionado.ambiente }}</p>
          </div>

          <div class="dato">
            <span>UBICACIÓN</span>
            <p>{{ escenarioSeleccionado.ubicacion }}</p>
          </div>
        </div>

      </div>
    </Transition>

  </section>
</template>

<style scoped>
/* CONTENEDOR PRINCIPAL */
.simbologia {
  display: block;
  width: 100%;
  min-height: auto;
  padding: 10px 0 0;
  box-sizing: border-box;
  background: transparent;
  color: #000;
  overflow-x: clip;
}

/* PESTAÑAS */
.escenarios {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 15px;
  align-items: center;
}

.escenario {
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  min-width: 0;
  min-height: 90px;
  padding-left: 55px;
  margin: 0;

  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.escenario:hover {
  transform: translateY(-4px);
}

.escenario.seleccionado {
  transform: scale(1.03);
}

/* ILUSTRACIONES */
.ilustracion {
  position: absolute;
  left: 0;
  z-index: 2;

  width: 75px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.ilustracion span {
  font-size: 55px;
}

/* TARJETAS */
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 0;
  min-height: 85px;

  padding: 12px 8px 12px 35px;
  box-sizing: border-box;
  border-radius: 0 60px 60px 0;
}

.card h2 {
  font-family: Impact, sans-serif;
  font-size: clamp(16px, 1.7vw, 25px);
  font-weight: normal;
  line-height: 1.1;
  text-align: center;
  white-space: normal;
  word-break: normal;
  margin: 0;
}

.card p {
  font-size: 10px;
  font-weight: 900;
  margin: 3px 0 0;
}

.card h2,
.card p {
  color: #000;
}

/* COLORES */
.card.disco {
  background-color: #308af5 !important;
}

.card.oasis {
  background-color: #a33df5 !important;
}

.card.circus {
  background-color: #ed269b !important;
}

.card.desierto {
  background-color: #8cbd17 !important;
}

/* FICHA DE INFORMACIÓN */
.detalle-escenario {
  position: relative;
  display: grid !important;

  grid-template-columns: minmax(280px, .9fr) minmax(0, 1.1fr);

  width: 100%;
  max-width: 1050px;
  min-width: 0;
  min-height: 390px;

  margin: 25px auto 15px;
  padding: 30px;
  gap: 35px;

  background: #fff;
  border: 1px solid #ded6c9;
  border-radius: 8px;
  box-sizing: border-box;
}

/* IMAGEN */
.imagen-detalle {
  position: relative;
  width: 100%;
  height: 360px;
  min-width: 0;

  overflow: hidden;
  border-radius: 5px;
  background: #eee;
}

.imagen-detalle img {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
}

.nombre-imagen {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 18px 15px;
  box-sizing: border-box;

  color: white;
  font-family: Impact, sans-serif;
  font-size: clamp(23px, 3vw, 32px);

  background: linear-gradient(transparent, #000c);
}

/* INFORMACIÓN */
.informacion-detalle {
  position: relative;
  display: block !important;

  width: 100%;
  min-width: 0;

  box-sizing: border-box;
  padding: 10px 15px;
  writing-mode: horizontal-tb !important;
}

.informacion-detalle .etiqueta {
  display: block;
  width: 100%;

  font-size: 10px;
  letter-spacing: 3px;
  margin-bottom: 12px;
}

.informacion-detalle h2 {
  display: block;
  width: 100%;

  font-family: Impact, sans-serif;
  font-size: clamp(30px, 3vw, 42px);
  font-weight: normal;
  line-height: 1.1;

  margin: 0 35px 18px 0;
}

.descripcion {
  display: block;
  width: 100%;

  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.8;

  color: #555;
  margin: 0 0 22px;
  overflow-wrap: break-word;
}

/* DATOS */
.dato {
  display: block;
  width: 100%;

  border-top: 1px solid #ded6c9;
  padding: 15px 0;
  box-sizing: border-box;
}

.dato span {
  display: block;

  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #47752a;
}

.dato p {
  display: block;
  width: 100%;

  font-family: Arial, sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;

  margin: 7px 0 0;
  overflow-wrap: break-word;
}

/* BOTÓN CERRAR */
.cerrar {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;

  width: 32px;
  height: 32px;

  border: none;
  border-radius: 50%;
  background: #eafe37;

  font-size: 23px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* ANIMACIÓN */
.detalle-enter-active,
.detalle-leave-active {
  transition: all 0.3s ease;
}

.detalle-enter-from,
.detalle-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

/* TABLETS */
@media (max-width: 900px) {
  .escenarios {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .escenario {
    padding-left: 65px;
    min-height: 95px;
  }

  .ilustracion {
    width: 90px;
    height: 95px;
  }

  .ilustracion span {
    font-size: 60px;
  }

  .card {
    min-height: 80px;
    padding-left: 45px;
  }

  .card h2 {
    font-size: clamp(19px, 2.5vw, 26px);
  }

  .detalle-escenario {
    grid-template-columns: minmax(220px, .85fr) minmax(0, 1.15fr);
    gap: 25px;
  }

  .imagen-detalle {
    height: 320px;
  }
}

/* CELULARES */
@media (max-width: 600px) {
  .escenarios {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;
  }

  .escenario {
    min-height: 90px;
    padding-left: 65px;
  }

  .ilustracion {
    width: 90px;
    height: 90px;
  }

  .ilustracion span {
    font-size: 60px;
  }

  .card {
    min-height: 80px;
    padding: 12px 10px 12px 45px;
  }

  .card h2 {
    font-size: 25px;
  }

  .detalle-escenario {
    grid-template-columns: minmax(0, 1fr);
    padding: 20px;
    gap: 20px;
    margin-top: 20px;
  }

  .imagen-detalle {
    height: 280px;
  }

  .informacion-detalle {
    padding: 10px 5px;
  }

  .informacion-detalle h2 {
    font-size: 32px;
  }
}

/* CELULARES PEQUEÑOS */
@media (max-width: 380px) {
  .escenario {
    padding-left: 55px;
  }

  .ilustracion {
    width: 78px;
  }

  .ilustracion span {
    font-size: 58px;
  }

  .card {
    padding-left: 38px;
  }

  .card h2 {
    font-size: 21px;
  }
}
</style>
