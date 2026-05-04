<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  /** Desplaza el umbral antes de disparar la animación (px) */
  rootMargin: { type: String, default: '0px 0px -12% 0px' },
  threshold: { type: Number, default: 0 },
  /** Retardo CSS al activar la revelación */
  delayMs: { type: Number, default: 0 },
  /** Si true, deja visible al salir del viewport (útil para carruseles) */
  once: { type: Boolean, default: true },
})

const root = ref(null)
const visible = ref(false)
let io

onMounted(() => {
  const el = root.value
  if (!el || typeof IntersectionObserver === 'undefined') {
    visible.value = true
    return
  }
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          visible.value = true
          if (props.once) io?.disconnect()
        } else if (!props.once) {
          visible.value = false
        }
      }
    },
    { root: null, rootMargin: props.rootMargin, threshold: props.threshold },
  )
  io.observe(el)
})

onBeforeUnmount(() => {
  io?.disconnect()
})
</script>

<template>
  <div
    ref="root"
    class="tbn-reveal"
    :class="{ 'tbn-reveal--visible': visible }"
    :style="{ transitionDelay: delayMs ? `${delayMs}ms` : undefined }"
  >
    <slot />
  </div>
</template>
