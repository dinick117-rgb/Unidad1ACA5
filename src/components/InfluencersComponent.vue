<template>

  <section
    id="Revelacion"
    class="revelaciones"
  >

    <h2>
      Revelación del Año
    </h2>

    <p>
      En los Grammy se evalúa principalmente el impacto y proyección de carrera de artistas emergentes. 
    </p>


    <div class="contenedor">

      <article
        v-for="revelacion in revelaciones"
        :key="revelacion.id"
        class="card"
      >

        <img
          :src="revelacion.imagen"
          :alt="revelacion.nombre"
        >

        <h3>
          {{ revelacion.nombre }}
        </h3>

        <p>
          {{ revelacion.descripcion }}
        </p>

        <a
          :href="revelacion.enlace"
          target="_blank"
        >

          Saber más

        </a>

      </article>

    </div>

  </section>

</template>


<script setup lang="ts">

const revelaciones = [

  {
    id: 1,

    nombre:
      'Ádela',

    descripcion:
      'Promesa internacional con fusiones multiculturales.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3SaBxMXkpAULHl5LlgiPaohH7w0FwjiBEHB0KLwIcQ&s=10',

    enlace:
      'https://www.instagram.com/adelajergova?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=='
  },


  {
    id: 2,

    nombre:
      'Slayyyter',

    descripcion:
      'Estilo experimental y fuerte presencia en redes sociales, destaca en el genero Hyperpop/Pop electrónico .',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvno-eZVG2x-Sfq_JZvihEjOXaOM89I34KhlzvJU9CFA&s=10',

    enlace:
      'https://www.instagram.com/slayyyter?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=='
  },


  {
    id: 3,

    nombre:
      'Sienna Spiro',

    descripcion:
      'Destacada en RR&B alternativo "Die On This Hill", y por su voz emergente con fuerte mensaje social.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_NjnK-qLAuS24mrW_zIgd7UYAByCff9TGvRwsaydutw&s=10',

    enlace:
      'https://www.instagram.com/siennaspiro?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=='
  },

  {
    id: 4,

    nombre:
      'Ella Langley',

    descripcion:
      'Destacada en Country crossover "Choosin’ Texas", con un éxito masivo en EE.UU.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLesOts-cCTN_1pnfCePdZch-unCbMJOQk8Qb1c3rqQ&s=10',

    enlace:
      'https://www.instagram.com/ellalangleymusic?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=='
  },

  {
    id: 5,

    nombre:
      'Dominic Fike',

    descripcion:
      'Consolidado en la escena indie, ahora en el radar de la Academia.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5lDsorWuQ5voj15lqM-4e_8uHdXMBumEzAglHCIayw&s=10',

    enlace:
      'https://www.instagram.com/dominicfike?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=='
  },

  {
    id: 6,

    nombre:
      'Aubrey Hobert',

    descripcion:
      'Reconocida por crítica indie, en ascenso en plataformas digitales con Pop alternativo.',

    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGAKmc-kVrzYuvmRrxvk4-MH28p7eyxF5BeRSMh5QtA&s=10',

    enlace:
      'https://www.youtube.com/results?search_query=audrey+hobert'
  }

]

</script>


<style scoped>

.revelaciones {

  padding:
    70px 8%;

  text-align:
    center;

}

.contenedor {

  display:
    grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(250px, 1fr)
    );

  gap:
    25px;

  margin-top:
    30px;

}

.card {

  background:
    white;

  padding:
    25px;

  border-radius:
    12px;

  box-shadow:
    0 4px 15px
    rgba(0, 0, 0, 0.1);

}

.card img {

  width:
    120px;

  height:
    120px;

  object-fit:
    cover;

  border-radius:
    50%;

}

.card a {

  color:
    #31572c;

  font-weight:
    bold;

  text-decoration:
    none;

}

.card a:hover {

  text-decoration:
    underline;

}

</style>