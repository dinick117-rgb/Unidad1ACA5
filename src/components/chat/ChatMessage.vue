<template>
    <div
        class="mensaje"
        :class="message.isUser ? 'mensaje-usuario' : 'mensaje-bot'"
    >
        <p>{{ message.message }}</p>

        <img
            v-if="message.image"
            :src="message.image"
            alt="GIF de respuesta del asistente"
            class="mensaje-gif"
        >
    </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '../../interfaces/chatmessage.interface'

defineProps<{
    message: ChatMessage
}>()
</script>

<style scoped>
.mensaje {
    max-width: 85%;
    width: fit-content;
    padding: 16px 20px;
    margin: 8px 5px 16px;
    border-radius: 18px;
    overflow-wrap: anywhere;
    box-sizing: border-box;
}

.mensaje p {
    margin: 0;
    line-height: 1.6;
    font-size: 15px;
    letter-spacing: 0.2px;
}

.mensaje-usuario {
    align-self: flex-end;
    background: #c68dfe;
    color: #ffffff;
    border-bottom-right-radius: 4px;
}

.mensaje-bot {
    align-self: flex-start;
    background: #f2e9fc;
    color: #241b30;
    border-bottom-left-radius: 4px;
}

.mensaje-gif {
    display: block;
    width: 100%;
    max-width: 240px;
    height: auto;
    margin-top: 14px;
    border-radius: 12px;
}
</style>