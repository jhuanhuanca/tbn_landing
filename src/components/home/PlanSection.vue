<script setup>
import RevealOnScroll from '../effects/RevealOnScroll.vue'

defineProps({
  images: { type: Object, required: true },
})
</script>

<template>
  <section id="plan" class="section-md bg-default text-center decor-text" data-content="Plan">
    <div class="container">
      <h4 class="heading-decorated">Plan de compensación</h4>
      <p class="tbn-subhead">Explicación visual, sin saturar de texto.</p>

      <div class="row row-30 justify-content-center">
        <div class="col-sm-10 col-lg-10">
          <RevealOnScroll>
            <img class="tbn-plan" :src="images.plan" alt="Plan de compensación visual" />
          </RevealOnScroll>
        </div>
      </div>

      <div class="row row-30 justify-content-center text-left">
        <div class="col-md-6 col-lg-4">
          <article class="blurb blurb-minimal">
            <div class="unit flex-row unit-spacing-md">
              <div class="unit-left">
                <div class="blurb-minimal__icon"><span class="icon linear-icon-cart"></span></div>
              </div>
              <div class="unit-body">
                <p class="blurb__title heading-6"><a href="#">Ventas</a></p>
                <p>Comisiones por consumo y recomendación.</p>
              </div>
            </div>
          </article>
        </div>
        <div class="col-md-6 col-lg-4">
          <article class="blurb blurb-minimal">
            <div class="unit flex-row unit-spacing-md">
              <div class="unit-left">
                <div class="blurb-minimal__icon"><span class="icon linear-icon-network"></span></div>
              </div>
              <div class="unit-body">
                <p class="blurb__title heading-6"><a href="#">Estructura</a></p>
                <p>Bonos por desarrollo de equipo.</p>
              </div>
            </div>
          </article>
        </div>
        <div class="col-md-6 col-lg-4">
          <article class="blurb blurb-minimal">
            <div class="unit flex-row unit-spacing-md">
              <div class="unit-left">
                <div class="blurb-minimal__icon"><span class="icon linear-icon-trophy2"></span></div>
              </div>
              <div class="unit-body">
                <p class="blurb__title heading-6"><a href="#">Rangos</a></p>
                <p>Reconocimiento y metas claras.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

