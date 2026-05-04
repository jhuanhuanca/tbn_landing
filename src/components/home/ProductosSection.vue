<script setup>
import RevealOnScroll from '../effects/RevealOnScroll.vue'
import imgViima from '../../assets/images/products/viima.png'
import imgBigBust from '../../assets/images/products/bigbuss.png'
import imgDiaben from '../../assets/images/products/diabentin.png'
</script>

<template>
  <section id="productos" class="section-md bg-default text-center decor-text" data-content="Productos">
    <div class="container">
      <h4 class="heading-decorated">Productos</h4>
      <p class="tbn-subhead">Una vitrina visual para que el usuario entienda la propuesta en segundos.</p>

      <div class="row row-50 justify-content-md-center text-left">
        <div class="col-md-6 col-xl-4">
          <RevealOnScroll :delay-ms="0">
            <article class="tbn-card">
              <img :src="imgViima" alt="VIIMA AGUA" />
              <div class="tbn-card__body">
                <h6>VIIMA AGUA</h6>
                <p>Hidratación superior.</p>
              </div>
            </article>
          </RevealOnScroll>
        </div>
        <div class="col-md-6 col-xl-4">
          <RevealOnScroll :delay-ms="80">
            <article class="tbn-card">
              <img :src="imgBigBust" alt="BIG BUST" />
              <div class="tbn-card__body">
                <h6>BIG BUST</h6>
                <p>Roll‑on natural 10ml.</p>
              </div>
            </article>
          </RevealOnScroll>
        </div>
        <div class="col-md-6 col-xl-4">
          <RevealOnScroll :delay-ms="160">
            <article class="tbn-card">
              <img :src="imgDiaben" alt="DIABEN‑T" />
              <div class="tbn-card__body">
                <h6>DIABEN‑T</h6>
                <p>Gotas premium 10ml.</p>
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>

