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
    align-items: center;
    gap: 12px;
    padding: 18px 20px;
    border-top: 1px solid #e7dcef;
    background: #ffffff;
    border-radius: 0 0 16px 16px;
    box-sizing: border-box;
}

.message-box input {
    flex: 1;
    min-width: 0;
    padding: 15px 18px;
    border: 1px solid #ddd2e9;
    border-radius: 25px;
    outline: none;
    color: #241b30;
    background: #ffffff;
    font-size: 15px;
}

.message-box input:focus {
    border-color: #a64dff;
}

.message-box button {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border: none;
    border-radius: 50%;
    background: #a64dff;
    color: white;
    font-size: 22px;
    cursor: pointer;
    transition: 0.2s;
}

.message-box button:hover:not(:disabled) {
    background: #8d35df;
    transform: scale(1.05);
}

.message-box button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>