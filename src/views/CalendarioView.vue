<template>
  <section class="vista">
    <h2>Calendario musical</h2>

    <p class="subtitulo">
      Consulta aquí fechas importantes, lanzamientos y eventos musicales.
    </p>

    <div class="eventos">
      <article class="evento">
        <div class="fecha">
          <span>2026</span>
          <strong>NOV</strong>
        </div>

        <div>
          <h3>Próximos lanzamientos</h3>
          <p>
            Espacio para agregar fechas de lanzamientos musicales.
          </p>
        </div>
      </article>

      <article class="evento">
        <div class="fecha">
          <span>2027</span>
          <strong>FEB</strong>
        </div>

        <div>
          <h3>GRAMMY Awards</h3>
          <p>
            Agrega la fecha confirmada de la ceremonia cuando esté disponible.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.vista {
  min-height: 60vh;
  box-sizing: border-box;
  padding: clamp(35px, 6vw, 80px);
  background: #c68dfe;
}

h2 {
  margin: 0 0 12px;
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #08060d;
}

.subtitulo {
  margin: 0 auto 35px;
  max-width: 700px;
  text-align: center;
  line-height: 1.6;
}

.eventos {
  display: grid;
  gap: 18px;
  max-width: 900px;
  margin: 0 auto;
}

.evento {
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 22px;
  border-radius: 14px;
  background: #f8f4ff;
}

.fecha {
  display: flex;
  flex: 0 0 90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 85px;
  border-radius: 10px;
  background: #eafe37;
  color: #08060d;
}

.fecha strong {
  font-size: 1.3rem;
}

.evento h3 {
  margin: 0 0 8px;
}

.evento p {
  line-height: 1.5;
}

@media (max-width: 500px) {
  .evento {
    align-items: flex-start;
    gap: 14px;
    padding: 15px;
  }

  .fecha {
    flex-basis: 70px;
  }
}
</style>
