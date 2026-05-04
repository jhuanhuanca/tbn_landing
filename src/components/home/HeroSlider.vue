<script setup>
defineProps({
  slides: { type: Array, required: true },
  onScroll: { type: Function, required: true },
})
</script>

<template>
  <div
    class="swiper-container swiper-slider"
    data-effect="frame-trapeze"
    data-loop="true"
    data-autoplay="5500"
    data-speed="1200"
    data-mousewheel="false"
    data-keyboard="true"
    data-frame-fill="#f5f5f5"
  >
    <div class="swiper-wrapper">
      <div v-for="(s, idx) in slides" :key="idx" class="swiper-slide">
        <div class="swiper-slide-img" :style="{ backgroundImage: `url(${s.image})` }"></div>
        <div class="swiper-slide-caption text-center context-dark">
          <h1 data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 500 }'>
            {{ s.title }}
          </h1>
          <h3 data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 650 }'>
            {{ s.subtitle }}
          </h3>
          <div
            class="group-lg group-middle"
            data-swiper-anime='{ "animation": "swiperContentStack", "duration": 1000, "delay": 800 }'
          >
            <a class="button button-primary button-shadow" href="#" @click.prevent="onScroll(s.cta.to)">{{ s.cta.label }}</a>
            <a class="button button-black button-shadow" href="#" @click.prevent="onScroll('contacto')">Únete hoy</a>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev linear-icon-chevron-left"></div>
    <div class="swiper-button-next linear-icon-chevron-right"></div>
  </div>
</template>

