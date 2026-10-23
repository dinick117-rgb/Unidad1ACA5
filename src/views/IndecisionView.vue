
<template>
  <section class="chat-ayuda">
    <div class="encabezado-chat">
      <h3>🎵 Ayuda SpheraSonoro</h3>
      <p>¡Hola! Selecciona una pregunta para comenzar.</p>
    </div>

    <div class="preguntas">
      <p class="titulo-preguntas">Preguntas frecuentes</p>

      <button
        v-for="pregunta in preguntas"
        :key="pregunta"
        class="boton-pregunta"
        @click="responderPregunta(pregunta)"
        :disabled="cargando"
      >
        {{ pregunta }}
      </button>
    </div>

    <div class="mensajes" ref="contenedorMensajes">
      <ChatMessage
        v-for="mensaje in mensajes"
        :key="mensaje.id"
        :message="mensaje"
      />

      <p v-if="cargando" class="estado">
        Buscando una respuesta...
      </p>

      <p v-if="error" class="error">
        {{ error }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import ChatMessage from '../components/chat/ChatMessage.vue'
import type { ChatMessage as Mensaje } from '../interfaces/chatmessage.interface'

const preguntas = [
  '¿Abrá conciertos en Diciembre 2026?',
  '¿Liberaran boletos?',
  '¿Venderan merch en el concierto?',
  '¿Se anunciaran más presentaciones proximamente?'
]

const mensajes = ref<Mensaje[]>([
  {
    id: 1,
    message: '¡Bienvenido! Elige una pregunta de la lista.',
    isUser: false
  }
])

const cargando = ref(false)
const error = ref('')
const contenedorMensajes = ref<HTMLElement | null>(null)
let siguienteId = 2

async function responderPregunta(pregunta: string) {
  if (cargando.value) return

  mensajes.value.push({
    id: siguienteId++,
    message: pregunta,
    isUser: true
  })

  cargando.value = true
  error.value = ''
  await desplazarAlFinal()

  try {
    const respuesta = await fetch('https://yesno.wtf/api')

    if (!respuesta.ok) {
      throw new Error('No se pudo obtener una respuesta.')
    }

    const datos: {
      answer: string
      image: string
    } = await respuesta.json()

    let textoRespuesta = ''

    if (datos.answer === 'yes') {
      textoRespuesta = '¡Sí! Proximanete habra anuncio'
    } else if (datos.answer === 'no') {
      textoRespuesta = 'No, lo siento'
    } else {
      textoRespuesta = 'Quizás. ¡Depende del artista!'
    }

    mensajes.value.push({
      id: siguienteId++,
      message: textoRespuesta,
      image: datos.image,
      isUser: false
    })
  } catch {
    error.value = 'No pude conectarme. Intenta nuevamente.'
  } finally {
    cargando.value = false
    await desplazarAlFinal()
  }
}

async function desplazarAlFinal() {
  await nextTick()

  if (contenedorMensajes.value) {
    contenedorMensajes.value.scrollTop =
      contenedorMensajes.value.scrollHeight
  }
}
</script>

<style scoped>
.chat-ayuda {
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: #474447;
}

.encabezado-chat h3 {
  margin: 0 0 8px;
  color: #7547c8;
}

.encabezado-chat p {
  margin: 0;
  font-size: 14px;
}

.titulo-preguntas {
  margin: 0 0 8px;
  font-weight: bold;
  font-size: 14px;
}

.preguntas {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.boton-pregunta {
  border: 1px solid #d9c9f4;
  background: #f7f2ff;
  color: #474447;
  border-radius: 12px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s;
}

.boton-pregunta:hover {
  background: #e9dcff;
}

.boton-pregunta:disabled {
  opacity: 0.6;
  cursor: wait;
}

.mensajes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 260px;
  overflow-y: auto;
  padding: 8px 2px;
}

.estado {
  color: #7547c8;
  font-size: 13px;
}

.error {
  color: #c62828;
  font-size: 13px;
}
</style>
