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
    padding: 12px 15px;
    margin-bottom: 12px;
    border-radius: 16px;
    overflow-wrap: anywhere;
}

.mensaje p {
    margin: 0;
    line-height: 1.45;
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
    max-width: 220px;
    height: auto;
    margin-top: 10px;
    border-radius: 10px;
}
</style>