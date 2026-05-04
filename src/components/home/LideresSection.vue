<script setup>
import RevealOnScroll from '../effects/RevealOnScroll.vue'

defineProps({
  images: { type: Object, required: true },
})
</script>

<template>
  <section id="lideres" class="section-md bg-gray-lighter text-center decor-text" data-content="Líderes">
    <div class="container">
      <h4 class="heading-decorated">Líderes</h4>
      <p class="tbn-subhead">Un equipo visible, cercano y con enfoque en mentoría.</p>

      <div class="row row-30">
        <div class="col-sm-6 col-lg-3">
          <RevealOnScroll :delay-ms="0">
            <article class="tbn-leader">
              <img :src="images.leader1" alt="Líder 1" />
              <div class="tbn-leader__meta">
                <h6>Líder 1</h6>
                <p>Mentoría · Capacitación</p>
              </div>
            </article>
          </RevealOnScroll>
        </div>
        <div class="col-sm-6 col-lg-3">
          <RevealOnScroll :delay-ms="70">
            <article class="tbn-leader">
              <img :src="images.leader2" alt="Líder 2" />
              <div class="tbn-leader__meta">
                <h6>Líder 2</h6>
                <p>Mentoría · Capacitación</p>
              </div>
            </article>
          </RevealOnScroll>
        </div>
        <div class="col-sm-6 col-lg-3">
          <RevealOnScroll :delay-ms="140">
            <article class="tbn-leader">
              <img :src="images.leader3" alt="Líder 3" />
              <div class="tbn-leader__meta">
                <h6>Líder 3</h6>
                <p>Mentoría · Capacitación</p>
              </div>
            </article>
          </RevealOnScroll>
        </div>
        <div class="col-sm-6 col-lg-3">
          <RevealOnScroll :delay-ms="210">
            <article class="tbn-leader">
              <img :src="images.leader4" alt="Líder 4" />
              <div class="tbn-leader__meta">
                <h6>Líder 4</h6>
                <p>Mentoría · Capacitación</p>
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>

