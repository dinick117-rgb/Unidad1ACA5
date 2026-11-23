
<template>
    <main class="momentos">

        <header class="encabezado">
            <span class="etiqueta">SPHERASOUND · 2026</span>

            <h1>
                Momen<span>tos.</span>
            </h1>

            <p>
                La música termina, pero los recuerdos permanecen.
            </p>
        </header>

        <section class="video-section">
            <div class="video-titulo">
                <span class="linea"></span>
                <p>REVIVE LA EXPERIENCIA</p>
                <span class="linea"></span>
            </div>

            <div class="video-contenedor">
                <iframe
                    src="https://www.youtube.com/embed/Bo-3ySzi_mU?si=VKV8hN31tD-8RiZM"
                    title="Momentos SpheraSonoro"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="video-footer">
                <span>SPHERASOUND EXPERIENCE</span>
                <span>2026 · MÉXICO</span>
            </div>
        </section>

        <section class="mensaje">
            <h2>Una experiencia que se queda contigo.</h2>
            <p>
                Cada canción, cada escenario y cada momento forman
                parte de una historia que merece volver a vivirse.
            </p>
        </section>

    </main>
</template>

<style scoped>
.momentos {
    min-height: 100vh;
    padding: 55px 24px 80px;
    background: #f9f1e4;
    color: #474447;
}

/* ENCABEZADO */
.encabezado {
    text-align: center;
    margin: 0 auto 45px;
}

.etiqueta {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 3px;
}

.encabezado h1 {
    font-size: clamp(55px, 9vw, 105px);
    font-weight: 950;
    letter-spacing: -6px;
    line-height: 1;
    margin: 18px 0;
    text-transform: uppercase;
}

.encabezado h1 span {
    color: #fe4f76;
}

.encabezado p {
    font-size: 16px;
    color: #77716f;
}

/* VIDEO */
.video-section {
    max-width: 1050px;
    margin: 0 auto;
}

.video-titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-bottom: 20px;
}

.video-titulo p {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 3px;
    white-space: nowrap;
}

.linea {
    width: 55px;
    height: 2px;
    background: #fe4f76;
}

.video-contenedor {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #474447;
    border: 7px solid white;
    border-radius: 5px;
    box-shadow: 0 12px 30px rgba(71, 68, 71, 0.13);
}

.video-contenedor iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
}

/* PIE DEL VIDEO */
.video-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2px;
}

/* MENSAJE */
.mensaje {
    max-width: 700px;
    text-align: center;
    margin: 85px auto 0;
}

.mensaje h2 {
    font-size: clamp(24px, 4vw, 38px);
    font-weight: 900;
    line-height: 1.1;
}

.mensaje p {
    margin-top: 15px;
    color: #77716f;
    font-size: 15px;
    line-height: 1.7;
}

/* RESPONSIVE */
@media (max-width: 600px) {
    .momentos {
        padding: 40px 15px 60px;
    }

    .encabezado h1 {
        letter-spacing: -3px;
    }

    .video-contenedor {
        border-width: 4px;
    }

    .video-footer {
        font-size: 9px;
        letter-spacing: 1px;
    }

    .mensaje {
        margin-top: 60px;
    }
}
</style>
