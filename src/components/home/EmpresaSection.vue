<script setup>
import RevealOnScroll from '../effects/RevealOnScroll.vue'

defineProps({
  images: { type: Object, required: true },
})
</script>

<template>
  <section id="empresa" class="bg-gray-lighter object-wrap">
    <div class="section-lg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <h4 class="heading-decorated">Empresa</h4>
            <p class="tbn-lead">
              TBN Living es una comunidad de bienestar y emprendimiento. Enfocada en hábitos, productos y acompañamiento para
              crecer con propósito.
            </p>

            <div class="row row-30">
              <div class="col-xl-6">
                <article class="blurb blurb-minimal">
                  <div class="unit flex-row unit-spacing-md">
                    <div class="unit-left">
                      <div class="blurb-minimal__icon"><span class="icon linear-icon-leaf"></span></div>
                    </div>
                    <div class="unit-body">
                      <p class="blurb__title heading-6"><a href="#">Bienestar real</a></p>
                      <p>Productos y rutinas pensadas para uso diario.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-xl-6">
                <article class="blurb blurb-minimal">
                  <div class="unit flex-row unit-spacing-md">
                    <div class="unit-left">
                      <div class="blurb-minimal__icon"><span class="icon linear-icon-users2"></span></div>
                    </div>
                    <div class="unit-body">
                      <p class="blurb__title heading-6"><a href="#">Comunidad</a></p>
                      <p>Formación, mentoría y trabajo en equipo.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="row row-30 justify-content-md-center">
              <div class="col-md-12">
                <div class="progress-linear progress-linear-modern">
                  <div class="progress-header">
                    <p>Producto</p><span class="progress-value">82</span>
                  </div>
                  <div class="progress-bar-linear-wrap">
                    <div class="progress-bar-linear"></div>
                  </div>
                </div>
                <div class="progress-linear progress-linear-modern">
                  <div class="progress-header">
                    <p>Soporte</p><span class="progress-value">90</span>
                  </div>
                  <div class="progress-bar-linear-wrap">
                    <div class="progress-bar-linear"></div>
                  </div>
                </div>
                <div class="progress-linear progress-linear-modern">
                  <div class="progress-header">
                    <p>Escalabilidad</p><span class="progress-value">76</span>
                  </div>
                  <div class="progress-bar-linear-wrap">
                    <div class="progress-bar-linear"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="tbn-mosaic">
              <RevealOnScroll :delay-ms="0">
                <figure class="tbn-shot">
                  <img :src="images.mosaic1" alt="TBN Living" />
                </figure>
              </RevealOnScroll>
              <RevealOnScroll :delay-ms="70">
                <figure class="tbn-shot">
                  <img :src="images.mosaic2" alt="Comunidad" />
                </figure>
              </RevealOnScroll>
              <RevealOnScroll :delay-ms="140">
                <figure class="tbn-shot">
                  <img :src="images.mosaic3" alt="Estilo de vida" />
                </figure>
              </RevealOnScroll>
              <RevealOnScroll :delay-ms="210">
                <figure class="tbn-shot">
                  <img :src="images.mosaic4" alt="Formación" />
                </figure>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

