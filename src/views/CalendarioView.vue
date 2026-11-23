
<script setup lang="ts">
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import themePlugin from '@fullcalendar/vue3/themes/classic'
import dayGridPlugin from '@fullcalendar/vue3/daygrid'
import interactionPlugin from '@fullcalendar/vue3/interaction'

import '@fullcalendar/vue3/skeleton.css'
import '@fullcalendar/vue3/themes/classic/theme.css'
import '@fullcalendar/vue3/themes/classic/palette.css'

import SimbologiaComponent from '../components/SimbologiaComponent.vue'
import ArtistaComponent from '../components/ArtistaComponent.vue'

const calendarOptions = ref({
  plugins: [
    themePlugin,
    dayGridPlugin,
    interactionPlugin
  ],

  initialView: 'dayGridMonth',
  initialDate: '2026-11-01',
  locale: 'es',
  firstDay: 1,
  height: 'auto',
  selectable: true,

  events: [
    // MIÉRCOLES 11 — Apertura de experiencias
    { title: '🏜️ Apertura de la feria', date: '2026-11-11', color: '#8ebb17' },
    { title: '🪩 Dinámicas con marcas', date: '2026-11-11', color: '#2f89f9' },

    // JUEVES 12
    { title: '🎪 Talleres creativos', date: '2026-11-12', color: '#fe4f76' },
    { title: '🏝️ Ruleta de premios', date: '2026-11-12', color: '#a64dff', textColor: '#474447' },

    // VIERNES 13
    { title: '🪩 Photobooth Sphera', date: '2026-11-13', color: '#2f89f9' },
    { title: '🎪 Beauty stations', date: '2026-11-13', color: '#fe4f76' },

    // SÁBADO 14
    { title: '🏜️ Zona de juegos', date: '2026-11-14', color: '#8ebb17' },
    { title: '🏝️ Karaoke challenge', date: '2026-11-14', color: '#a64dff' },

    // DOMINGO 15
    { title: '🏜️ Bienvenida festivalera', date: '2026-11-15', color: '#8ebb17' },
    { title: '🏝️ DJ set de bienvenida', date: '2026-11-15', color: '#a64dff' },

    // LUNES 16 — THE KID LAROI
    { title: '🪩 THE KID LAROI', date: '2026-11-16', color: '#2f89f9' },
    { title: '🏜️ PUSHA T', date: '2026-11-16', color: '#8ebb17' },
    { title: '🪩 MGK', date: '2026-11-16', color: '#2f89f9' },
    { title: '🏜️ SZA', date: '2026-11-16', color: '#8ebb17' },
    { title: '🪩 070 SHAKE', date: '2026-11-16', color: '#2f89f9' },
    { title: '🏜️ DOMINIC FIKE', date: '2026-11-16', color: '#8ebb17' },

    // MARTES 17 — LORDE
    { title: '🎪 LORDE', date: '2026-11-17', color: '#fe4f76' },
    { title: '🏝️ SHYGIRL', date: '2026-11-17', color: '#a64dff' },
    { title: '🎪 ASHE', date: '2026-11-17', color: '#fe4f76' },
    { title: '🎪 ROBYN', date: '2026-11-17', color: '#fe4f76' },
    { title: '🏝️ FKA TWIGS', date: '2026-11-17', color: '#a64dff' },
    { title: '🏝️ THE 1975', date: '2026-11-17', color: '#a64dff' },

    // MIÉRCOLES 18 — ARCA
    { title: '🏝️ ARCA', date: '2026-11-18', color: '#a64dff' },
    { title: '🪩 CASSIE', date: '2026-11-18', color: '#2f89f9' },
    { title: '🏝️ MØ', date: '2026-11-18', color: '#a64dff' },
    { title: '🪩 ZAYN', date: '2026-11-18', color: '#2f89f9' },
    { title: '🏝️ TOVE LO', date: '2026-11-18', color: '#a64dff' },
    { title: '🪩 BAD GYAL', date: '2026-11-18', color: '#2f89f9' },

    // JUEVES 19 — RAYE
    { title: '🏜️ RAYE', date: '2026-11-19', color: '#8ebb17' },
    { title: '🏜️ TINASHE', date: '2026-11-19', color: '#8ebb17' },
    { title: '🎪 KESHA', date: '2026-11-19', color: '#fe4f76' },
    { title: '🎪 HALSEY', date: '2026-11-19', color: '#fe4f76' },
    { title: '🏜️ DOECHII', date: '2026-11-19', color: '#8ebb17' },
    { title: '🎪 A. G. COOK', date: '2026-11-19', color: '#fe4f76' },

    // VIERNES 20 — CHARLI XCX
    { title: '🎪 CHARLI XCX', date: '2026-11-20', color: '#fe4f76' },
    { title: '🏝️ ABRA', date: '2026-11-20', color: '#a64dff' },
    { title: '🎪 OKLOU', date: '2026-11-20', color: '#fe4f76' },
    { title: '🏝️ ADÉLA', date: '2026-11-20', color: '#a64dff' },
    { title: '🏝️ JADE', date: '2026-11-20', color: '#a64dff' },
    { title: '🎪 SLAYYYTER', date: '2026-11-20', color: '#fe4f76' },

    // SÁBADO 21 — BAD BUNNY
    { title: '🪩 BAD BUNNY', date: '2026-11-21', color: '#2f89f9' },
    { title: '🏜️ FEID', date: '2026-11-21', color: '#8ebb17', textColor: '#474447' },
    { title: '🪩 JHAYCO', date: '2026-11-21', color: '#2f89f9' },
    { title: '🏜️ YOUNG MIKO', date: '2026-11-21', color: '#8ebb17', textColor: '#474447' },
    { title: '🏜️ TOKISCHA', date: '2026-11-21', color: '#8ebb17', textColor: '#474447' },
    { title: '🪩 AKRILLA', date: '2026-11-21', color: '#2f89f9' },

    // DOMINGO 22 — ROSALÍA
    { title: '🏝️ ROSALÍA', date: '2026-11-22', color: '#a64dff' },
    { title: '🏝️ JUDELINE', date: '2026-11-22', color: '#a64dff' },
    { title: '🏝️ NSQK', date: '2026-11-22', color: '#a64dff' },
    { title: '🪩 KALI UCHIS', date: '2026-11-22', color: '#2f89f9' },
    { title: '🪩 PAO PAO', date: '2026-11-22', color: '#2f89f9' },
    { title: '🪩 AITANA', date: '2026-11-22', color: '#2f89f9' },

    // LUNES 23 — CIERRE
    { title: '🎪 CIERRE SPHERASOUND', date: '2026-11-23', color: '#fe4f76' },
    { title: '🪩 Show final y agradecimientos', date: '2026-11-23', color: '#2f89f9' }
  ]
})
</script>

<template>
  <main class="eventos">

    <!-- ENCABEZADO -->
    <header class="encabezado">
      <span class="etiqueta">SPHERASOUND · 2026</span>
      <h1>Calendari<span>o</span></h1>
      <p>Descubre los próximos eventos musicales</p>
    </header>

    <!-- PESTAÑAS DE ESCENARIOS -->
    <section class="seccion-simbologia">
      <SimbologiaComponent />
    </section>

    <!-- CALENDARIO -->
    <section class="calendario">
      <FullCalendar :options="calendarOptions" />
    </section>

  </main>

  <ArtistaComponent />
</template>

<style>
.eventos {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 40px 24px;
  background: #f9f1e4;
  color: #474447;
}

/* ENCABEZADO */
.encabezado {
  max-width: 1250px;
  margin: 0 auto 15px;
  text-align: center;
}

.etiqueta {
  color: #8ebb17;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 4px;
}

.encabezado h1 {
  margin: 12px 0;
  font-family: Impact, 'Arial Black', sans-serif;
  font-size: clamp(48px, 8vw, 82px);
}

.encabezado h1 span {
  color: #fe4f76;
}

.encabezado p {
  font-size: 18px;
  margin-bottom: 10px;
}

/* SIMBOLOGÍA */
.seccion-simbologia {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto 10px;
  padding: 0;
}

/* CALENDARIO */
.calendario {
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  padding: 22px;
  background: white;
  border-radius: 12px;
  box-sizing: border-box;
}

/* PERSONALIZACIÓN FULLCALENDAR */
.calendario :deep(.fc) {
  --fc-border-color: #e5dfd4;
  --fc-button-bg-color: #474447;
  --fc-button-border-color: #474447;
  --fc-button-hover-bg-color: #fe4f76;
  --fc-button-hover-border-color: #fe4f76;
  --fc-button-active-bg-color: #fe4f76;
  --fc-today-bg-color: #fff4c7;
  --fc-page-bg-color: #ffffff;
}

.calendario :deep(.fc-toolbar-title) {
  font-size: 22px;
  text-transform: capitalize;
}

.calendario :deep(.fc-col-header-cell-cushion),
.calendario :deep(.fc-daygrid-day-number) {
  color: #474447;
  text-decoration: none;
}

/* EVENTOS */
.calendario :deep(.fc-daygrid-event) {
  font-size: 11px;
  padding: 2px 3px;
  white-space: normal;
}

/* TABLETS Y CELULARES */
@media (max-width: 768px) {
  .eventos {
    padding: 25px 10px;
  }

  .encabezado {
    margin-bottom: 10px;
  }

  .calendario {
    padding: 10px;
  }

  .calendario :deep(.fc-toolbar-title) {
    font-size: 17px;
  }

  .calendario :deep(.fc-daygrid-event) {
    font-size: 9px;
  }

  .seccion-simbologia {
    margin-bottom: 10px;
  }
}
</style>
