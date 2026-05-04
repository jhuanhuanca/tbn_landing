<script setup>
import { computed, onMounted, ref } from 'vue'

import Preloader from '../components/layout/Preloader.vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import RevealOnScroll from '../components/effects/RevealOnScroll.vue'

const products = [
  {
    key: 'viima-agua',
    name: 'VIIMA AGUA',
    badge: 'Hidratación',
    tagline: 'Agua reestructurada para una hidratación superior',
    highlights: ['Hidratación profunda', 'Bienestar celular', 'Fórmula avanzada'],
    image: new URL('../assets/images/products/viima.png', import.meta.url).href,
    price: 89,
  },
  {
    key: 'big-bust',
    name: 'BIG BUST',
    badge: 'Roll-on',
    tagline: 'Mezcla de aceites esenciales y vegetales 100% naturales',
    highlights: ['Aplicación tópica', 'Rutina simple', 'Formato práctico'],
    image: new URL('../assets/images/products/bigbuss.png', import.meta.url).href,
    price: 42,
  },
  {
    key: 'diaben-t',
    name: 'DIABEN‑T',
    badge: 'Gotas',
    tagline: 'Aceites esenciales premium (enfoque bienestar)',
    highlights: ['Uso interno guiado', 'Fácil dosificación', 'Apoyo metabólico'],
    image: new URL('../assets/images/products/diabentin.png', import.meta.url).href,
    price: 55,
  },
  {
    key: 'oscars',
    name: "OSCAR'S",
    badge: 'Gotero',
    tagline: 'Óleo para barba con aceites vegetales y esenciales',
    highlights: ['Cuidado de barba', 'Aroma premium', 'Rutina diaria'],
    image: new URL('../assets/images/products/oscar.png', import.meta.url).href,
    price: 38,
  },
]

const cartOpen = ref(false)
const cartLines = ref([])

const cartItemCount = computed(() => cartLines.value.reduce((sum, line) => sum + line.qty, 0))

const cartTotal = computed(() =>
  cartLines.value.reduce((sum, line) => sum + line.price * line.qty, 0),
)

function formatMoney(value) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value)
}

function addToCart(p) {
  const line = cartLines.value.find((l) => l.key === p.key)
  if (line) line.qty += 1
  else cartLines.value.push({ key: p.key, name: p.name, image: p.image, price: p.price, qty: 1 })
  cartOpen.value = true
}

function setQty(key, qty) {
  const n = Math.max(0, Math.floor(Number(qty)))
  const line = cartLines.value.find((l) => l.key === key)
  if (!line) return
  if (n === 0) cartLines.value = cartLines.value.filter((l) => l.key !== key)
  else line.qty = n
}

function inc(key) {
  const line = cartLines.value.find((l) => l.key === key)
  if (line) line.qty += 1
}

function dec(key) {
  const line = cartLines.value.find((l) => l.key === key)
  if (!line) return
  if (line.qty <= 1) cartLines.value = cartLines.value.filter((l) => l.key !== key)
  else line.qty -= 1
}

function clearCart() {
  cartLines.value = []
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-tbn-src="${src}"]`)
    if (existing) return resolve()
    const s = document.createElement('script')
    s.src = src
    s.async = false
    s.defer = true
    s.dataset.tbnSrc = src
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`No se pudo cargar ${src}`))
    document.body.appendChild(s)
  })
}

function smoothScrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

window.tbnSmoothScrollTo = smoothScrollTo

onMounted(async () => {
  await loadScript('/src/assets/js/core.min.js')
  await loadScript('/src/assets/js/script.js')
})
</script>

<template>
  <Preloader />

  <div class="page tbn">
    <SiteHeader
      show-cart
      :cart-item-count="cartItemCount"
      :on-scroll="smoothScrollTo"
      @cart-click="cartOpen = true"
    />

    <section class="tbn-panel">
      <aside class="tbn-panel__aside">
        <div class="tbn-panel__aside-inner">
          <h6 class="tbn-panel__title">Panel de productos</h6>
          <p class="tbn-panel__desc">Navega por categorías y revisa fichas rápidas.</p>

          <div class="tbn-panel__menu">
            <!-- Hard reload para asegurar que el slider cargue al volver -->
            <a class="tbn-panel__link" href="/">← Volver a inicio</a>
            <a class="tbn-panel__link" href="#listado">Listado</a>
            <a class="tbn-panel__link" href="#destacados">Destacados</a>
            <a class="tbn-panel__link" href="#salud">Bienestar</a>
            <a class="tbn-panel__link" href="#cuidado">Cuidado personal</a>
          </div>
        </div>
      </aside>

      <main class="tbn-panel__main">
        <section class="section-md bg-gray-lighter text-center decor-text tbn-products-hero" data-content="Productos">
          <div class="container">
            <h2 class="heading-decorated">Productos</h2>
            <p class="tbn-subhead">Fichas claras, visuales y listas para vender (menos texto, más impacto).</p>
          </div>
        </section>

        <section id="listado" class="section-md bg-default">
          <div class="container">
            <div class="row row-50">
              <div v-for="(p, idx) in products" :key="p.key" class="col-md-6 col-xl-6">
                <RevealOnScroll :delay-ms="idx * 90">
                  <article class="tbn-product">
                    <div class="tbn-product__media">
                      <img :src="p.image" :alt="p.name" />
                    </div>
                    <div class="tbn-product__body">
                      <div class="tbn-product__top">
                        <span class="tbn-pill">{{ p.badge }}</span>
                        <h4 class="tbn-product__title">{{ p.name }}</h4>
                        <p class="tbn-product__tagline">{{ p.tagline }}</p>
                        <p class="tbn-product__price">{{ formatMoney(p.price) }}</p>
                      </div>
                      <ul class="tbn-product__highlights">
                        <li v-for="(h, i) in p.highlights" :key="i">{{ h }}</li>
                      </ul>
                      <div class="tbn-product__actions">
                        <a
                          class="button button-black button-shadow"
                          href="https://btnliving.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          >Ver ficha completa</a
                        >
                        <button type="button" class="button button-primary button-shadow" @click="addToCart(p)">
                          Añadir al carrito
                        </button>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>

    <SiteFooter :on-scroll="smoothScrollTo" />

    <Teleport to="body">
      <div
        class="tbn-cart-overlay"
        :class="{ 'tbn-cart-overlay--visible': cartOpen }"
        aria-hidden="true"
        @click="cartOpen = false"
      ></div>
      <aside
        class="tbn-cart-drawer"
        :class="{ 'tbn-cart-drawer--open': cartOpen }"
        aria-label="Carrito de compras"
      >
        <div class="tbn-cart-drawer__head">
          <h5 class="tbn-cart-drawer__title">Carrito</h5>
          <button type="button" class="tbn-cart-close" aria-label="Cerrar carrito" @click="cartOpen = false">×</button>
        </div>

        <div v-if="cartLines.length === 0" class="tbn-cart-empty">
          <p>Tu carrito está vacío.</p>
          <p class="tbn-cart-empty__hint">Añade productos desde el listado.</p>
        </div>

        <ul v-else class="tbn-cart-lines">
          <li v-for="line in cartLines" :key="line.key" class="tbn-cart-line">
            <img class="tbn-cart-line__img" :src="line.image" :alt="line.name" width="56" height="56" />
            <div class="tbn-cart-line__body">
              <p class="tbn-cart-line__name">{{ line.name }}</p>
              <p class="tbn-cart-line__price">{{ formatMoney(line.price) }} c/u</p>
              <div class="tbn-cart-line__qty">
                <button type="button" class="tbn-qty-btn" aria-label="Menos" @click="dec(line.key)">−</button>
                <input
                  class="tbn-qty-input"
                  type="number"
                  min="0"
                  :value="line.qty"
                  @change="setQty(line.key, $event.target.value)"
                />
                <button type="button" class="tbn-qty-btn" aria-label="Más" @click="inc(line.key)">+</button>
              </div>
            </div>
          </li>
        </ul>

        <div v-if="cartLines.length" class="tbn-cart-footer">
          <div class="tbn-cart-total">
            <span>Total estimado</span>
            <strong>{{ formatMoney(cartTotal) }}</strong>
          </div>
          <p class="tbn-cart-pay-hint">
            Precios orientativos para este catálogo. El pago definitivo se realiza en la plataforma oficial.
          </p>
          <div class="tbn-cart-pay-badges" aria-hidden="true">
            <span class="tbn-pay-chip"><i class="fa fa-credit-card"></i> Tarjeta</span>
            <span class="tbn-pay-chip"><i class="fa fa-university"></i> Transferencia</span>
            <span class="tbn-pay-chip"><i class="fa fa-mobile"></i> Digital</span>
          </div>
          <div class="tbn-cart-actions">
            <button type="button" class="button button-black button-shadow" @click="clearCart">Vaciar</button>
            <a
              class="button button-primary button-shadow"
              href="https://btnliving.com"
              target="_blank"
              rel="noopener noreferrer"
              >Ir a pagar en TBN Living</a
            >
          </div>
        </div>
      </aside>
    </Teleport>
  </div>
</template>
