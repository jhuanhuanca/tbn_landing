<script setup>
import { nextTick, onMounted } from 'vue'

import Preloader from '../components/layout/Preloader.vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import HeroSlider from '../components/home/HeroSlider.vue'
import SectionCta from '../components/home/SectionCta.vue'
import EmpresaSection from '../components/home/EmpresaSection.vue'
import ProductosSection from '../components/home/ProductosSection.vue'
import LideresSection from '../components/home/LideresSection.vue'
import PlanSection from '../components/home/PlanSection.vue'
import CtaBanner from '../components/home/CtaBanner.vue'
import PaymentMethodsSection from '../components/home/PaymentMethodsSection.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'

const images = {
  mosaic1: new URL('../assets/images/mosaic-1.png', import.meta.url).href,
  mosaic2: new URL('../assets/images/mosaic-2.png', import.meta.url).href,
  mosaic3: new URL('../assets/images/mosaic-3.png', import.meta.url).href,
  mosaic4: new URL('../assets/images/mosaic-4.png', import.meta.url).href,
  product1: new URL('../assets/images/products/viima.png', import.meta.url).href,
  product2: new URL('../assets/images/products/bigbuss.png', import.meta.url).href,
  product3: new URL('../assets/images/products/diabentin.png', import.meta.url).href,
  leader1: new URL('../assets/images/leader-1.svg', import.meta.url).href,
  leader2: new URL('../assets/images/leader-2.svg', import.meta.url).href,
  leader3: new URL('../assets/images/leader-3.svg', import.meta.url).href,
  leader4: new URL('../assets/images/leader-4.svg', import.meta.url).href,
  plan: new URL('../assets/images/plan-visual.svg', import.meta.url).href,
  ctaBg: new URL('../assets/images/cta-bg.svg', import.meta.url).href,
}

const slides = [
  {
    title: 'TBN Living',
    subtitle: 'Bienestar, comunidad y crecimiento con un plan claro',
    cta: { label: 'Ver el plan', to: 'plan' },
    image: new URL('../assets/images/family-tbn.png', import.meta.url).href,
  },
  {
    title: 'Productos que se entienden',
    subtitle: 'Catálogo visual: líneas de bienestar, hogar y estilo de vida',
    cta: { label: 'Ver productos', to: 'productos' },
    image: new URL('../assets/images/productos.png', import.meta.url).href,
  },
  {
    title: 'Liderazgo que acompaña',
    subtitle: 'Mentoría, formación y cultura de resultados sostenibles',
    cta: { label: 'Conoce líderes', to: 'lideres' },
    image: new URL('../assets/images/lider.png', import.meta.url).href,
  },
]

const LEGACY_JS = {
  core: `${import.meta.env.BASE_URL}assets/js/core.min.js`,
  script: `${import.meta.env.BASE_URL}assets/js/script.js`,
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existingByMarker = document.querySelector(`script[data-tbn-src="${src}"]`)
    const existingBySrc = document.querySelector(`script[src="${src}"]`)
    if (existingByMarker || existingBySrc) return resolve()
    const s = document.createElement('script')
    s.src = src
    s.async = false
    s.defer = true
    s.dataset.tbnSrc = src
    s.onload = () => resolve()
    s.onerror = () => {
      s.remove()
      reject(new Error(`No se pudo cargar ${src}`))
    }
    document.body.appendChild(s)
  })
}

function smoothScrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(async () => {
  window.tbnSmoothScrollTo = smoothScrollTo
  await nextTick()
  try {
    await loadScript(LEGACY_JS.core)
    await loadScript(LEGACY_JS.script)
  } catch (err) {
    console.error('[TBN]', err)
  }
})
</script>

<template>
  <div class="tbn-view-root">
    <Preloader />

    <div class="page tbn">
    <SiteHeader :on-scroll="smoothScrollTo" />

    <section id="inicio">
      <HeroSlider :slides="slides" :on-scroll="smoothScrollTo" />
    </section>

    <SectionCta :on-scroll="smoothScrollTo" />

    <EmpresaSection :images="images" />

    <ProductosSection :images="images" />

    <LideresSection :images="images" />

    <PlanSection :images="images" />

    <PaymentMethodsSection />

    <CtaBanner :images="images" :on-scroll="smoothScrollTo" />

    <SiteFooter :on-scroll="smoothScrollTo" />
    </div>
  </div>
</template>

