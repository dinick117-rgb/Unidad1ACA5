<template>
    <form class="message-box" @submit.prevent="enviarMensaje">
        <input
            v-model="mensaje"
            type="text"
            placeholder="Escribe tu pregunta..."
            aria-label="Escribe tu mensaje"
            autocomplete="off"
        >

        <button
            type="submit"
            :disabled="!mensaje.trim()"
            aria-label="Enviar mensaje"
        >
            ➤
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mensaje = ref('')

const emit = defineEmits<{
    (e: 'send-message', message: string): void
}>()

function enviarMensaje() {
    const texto = mensaje.value.trim()

    if (!texto) return

    emit('send-message', texto)
    mensaje.value = ''
}
</script>

<style scoped>
.message-box {
    display: flex;
    gap: 8px;
    padding: 12px;
    border-top: 1px solid #e7dcef;
    background: #ffffff;
    border-radius: 0 0 16px 16px;
}

.message-box input {
    flex: 1;
    min-width: 0;
    padding: 12px;
    border: 1px solid #ddd2e9;
    border-radius: 22px;
    outline: none;
    color: #241b30;
    background: #ffffff;
    font-size: 14px;
}

.message-box input:focus {
    border-color: #a64dff;
}

.message-box button {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border: none;
    border-radius: 50%;
    background: #a64dff;
    color: white;
    font-size: 21px;
    cursor: pointer;
}

.message-box button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>