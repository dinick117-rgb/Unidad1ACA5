<template>
    <div class="pagina">
        <HeaderComponent />

        <main class="contenido-pagina">
            <RouterView />
        </main>

        <FooterComponent />
    </div>

    <button
        class="boton-ayuda"
        type="button"
        :aria-expanded="chatAbierto"
        aria-label="Abrir o cerrar el chat de ayuda"
        @click="chatAbierto = !chatAbierto"
    >
        <span v-if="!chatAbierto">?</span>
        <span v-else>×</span>
    </button>

    <Transition name="chat">
        <section
            v-if="chatAbierto"
            class="ventana-chat"
            aria-label="Chat de ayuda"
        >
            <IndecisionView />
        </section>
    </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import IndecisionView from './views/IndecisionView.vue'

const chatAbierto = ref(false)
</script>

<style>
.boton-ayuda {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 1000;

    display: grid;
    place-items: center;

    width: 62px;
    height: 62px;

    border: 3px solid #ffffff;
    border-radius: 50%;

    background: #a64dff;
    color: #ffffff;

    font-size: 34px;
    font-weight: bold;

    box-shadow: 0 5px 20px rgba(35, 15, 55, 0.3);
    cursor: pointer;

    transition: transform 0.2s, background 0.2s;
}

.boton-ayuda:hover {
    transform: scale(1.08);
    background: #8735d4;
}

.ventana-chat {
    position: fixed;
    right: 24px;
    bottom: 100px;
    z-index: 999;

    display: flex;
    flex-direction: column;

    width: 360px;
    height: 500px;
    max-width: calc(100vw - 32px);
    max-height: calc(100dvh - 130px);

    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 8px 35px rgba(35, 15, 55, 0.25);
    overflow: hidden;
}

.chat-enter-active,
.chat-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}

.chat-enter-from,
.chat-leave-to {
    opacity: 0;
    transform: translateY(12px);
}

@media (max-width: 480px) {
    .boton-ayuda {
        right: 16px;
        bottom: 16px;
        width: 56px;
        height: 56px;
    }

    .ventana-chat {
        right: 12px;
        bottom: 84px;
        width: calc(100vw - 24px);
        height: min(500px, calc(100dvh - 110px));
        max-width: none;
    }
}
</style>
