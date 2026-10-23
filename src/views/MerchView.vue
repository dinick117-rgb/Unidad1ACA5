<template>
  <section class="vista">
    <h2>Merch oficial</h2>

    <p class="subtitulo">
      Próximamente: productos y artículos inspirados en la música.
    </p>

    <div class="productos">
      <article class="producto">
        <div class="producto-imagen">♪</div>
        <h3>Playeras</h3>
        <p>Diseños inspirados en tus artistas favoritos.</p>
      </article>

      <article class="producto">
        <div class="producto-imagen">♫</div>
        <h3>Accesorios</h3>
        <p>Pequeños detalles para fans de la música.</p>
      </article>

      <article class="producto">
        <div class="producto-imagen">★</div>
        <h3>Coleccionables</h3>
        <p>Una sección para artículos especiales.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.vista {
  min-height: 60vh;
  box-sizing: border-box;
  padding: clamp(35px, 6vw, 80px);
  text-align: center;
  background: #c68dfe;
}

h2 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #08060d;
}

.subtitulo {
  margin: 0 auto 35px;
  max-width: 650px;
  line-height: 1.6;
}

.productos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.producto {
  padding: 25px;
  border-radius: 16px;
  background: #f8f4ff;
  color: #171020;
}

.producto-imagen {
  display: grid;
  place-items: center;
  height: 140px;
  margin-bottom: 18px;
  border-radius: 12px;
  background: #eafe37;
  font-size: 4rem;
}

.producto h3 {
  margin: 0 0 10px;
}

.producto p {
  line-height: 1.5;
}
</style>
