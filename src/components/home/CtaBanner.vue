<script setup>
defineProps({
  images: { type: Object, required: true },
  onScroll: { type: Function, required: true },
})
</script>

<template>
  <section
    class="section-md bg-accent bg-image text-center bg-overlay-darker tbn-cta"
    :style="{ backgroundImage: `url(${images.ctaBg})` }"
  >
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-11 col-lg-9 col-xl-8">
          <h3 class="heading-decorated">¿Listo para empezar con TBN Living?</h3>
          <a class="button button-primary" href="#" @click.prevent="onScroll('contacto')">Hablar con un asesor</a>
        </div>
      </div>
    </div>
  </section>
</template>

