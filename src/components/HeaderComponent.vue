<template>

  <header class="header">
    <RouterLink to="/" class="marca">
      SpheraSonoro
    </RouterLink>

    <nav aria-label="Navegación principal">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/artistas">Artistas</RouterLink>
      <RouterLink to="/albumes">Álbumes</RouterLink>
      <RouterLink to="/merch">Merch</RouterLink>
      <RouterLink to="/calendario">Calendario</RouterLink>
    </nav>

  </header>

</template>


<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;

  background: #eafe37;
  color: #000;
  padding: 24px clamp(20px, 7vw, 100px);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.marca {
  color: #000;
  text-decoration: none;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  line-height: 1.1;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
}

nav a {
  color: #a64dff;
  text-decoration: none;
  font-size: 1.05rem;
}

nav a:hover,
nav a.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 5px;
}

@media (max-width: 700px) {
  .header {
    justify-content: center;
    text-align: center;
  }

  nav {
    gap: 14px;
  }
}
</style>
