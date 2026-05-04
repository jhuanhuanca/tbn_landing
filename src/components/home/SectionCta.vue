<script setup>
defineProps({
  onScroll: { type: Function, required: true },
})
</script>

<template>
  <!-- bg-gray-dark ahora se fuerza a verde oscuro por CSS (paleta) -->
  <section class="section-xs section-cta bg-gray-dark text-center text-md-left">
    <div class="container">
      <div class="row row-30 justify-content-between align-items-center">
        <div class="col-12 col-md-8">
          <h4>Una marca que se ve. Un plan que se entiende.</h4>
          <p>Experiencia visual primero: productos, liderazgo y compensación en bloques claros.</p>
        </div>
        <div class="col-12 col-md-4 text-md-right">
          <a class="button button-primary" href="#" @click.prevent="onScroll('productos')">Ver catálogo</a>
        </div>
      </div>
    </div>
  </section>
</template>

