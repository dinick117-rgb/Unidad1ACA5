<template>

  <header class="header">

    <h1>
      SpheraSonoro
    </h1>

    <nav>

      <a href="#inicio">
        Inicio
      </a>

      <a href="#Albumes">
        Álbumes
      </a>

      <a href="#Artistas">
        Artistas
      </a>

      <a href="#Canciones">
        Canciones
      </a>

      <a href="#Revelacion">
        Revelacion
      </a>

    </nav>

  </header>

</template>


<script setup lang="ts">
</script>


<style scoped>

.header {

  background:
    #eafe37;

  color:
    #c68dfe;

  padding:
    20px 8%;

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  flex-wrap:
    wrap;

}

nav {

  display:
    flex;

  gap:
    20px;

}

nav a {

  color:
    #c68dfe;

  text-decoration:
    none;

}

nav a:hover {

  text-decoration:
    underline;

}

</style>