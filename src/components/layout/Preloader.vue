<script setup>
import { onMounted, ref } from 'vue'

// Requisito: mostrar 5s al cambiar de view (router)
const DURATION_MS = 2000
const visible = ref(true)

function hide() {
  visible.value = false
}

onMounted(() => {
  // Siempre que este componente se monte (cada view),
  // mostramos el loader y lo ocultamos a los 5s.
  visible.value = true
  window.setTimeout(hide, DURATION_MS)
})
</script>

<template>
  <div v-show="visible" class="preloader">
    <div class="cssload-container">
      <svg class="filter" version="1.1">
        <defs>
          <filter id="gooeyness">
            <fegaussianblur in="SourceGraphic" stddeviation="10" result="blur"></fegaussianblur>
            <fecolormatrix
              in="blur"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            ></fecolormatrix>
            <fecomposite in="SourceGraphic" in2="gooeyness" operator="atop"></fecomposite>
          </filter>
        </defs>
      </svg>
      <div class="dots">
        <div class="dot mainDot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <p>Cargando...</p>
    </div>
  </div>
</template>

