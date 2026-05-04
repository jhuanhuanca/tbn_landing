<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  onScroll: { type: Function, required: true },
  /** Si true, muestra el botón del carrito (vista Productos). */
  showCart: { type: Boolean, default: false },
  /** Unidades totales en el carrito. */
  cartItemCount: { type: Number, default: 0 },
})

const emit = defineEmits(['cart-click'])
</script>

<template>
  <header class="page-header">
    <div class="rd-navbar-wrap">
      <nav
        class="rd-navbar rd-navbar_transparent rd-navbar_boxed"
        data-layout="rd-navbar-fixed"
        data-sm-layout="rd-navbar-fixed"
        data-sm-device-layout="rd-navbar-fixed"
        data-md-layout="rd-navbar-fixed"
        data-md-device-layout="rd-navbar-fixed"
        data-lg-device-layout="rd-navbar-fixed"
        data-lg-layout="rd-navbar-static"
        data-xl-device-layout="rd-navbar-static"
        data-xl-layout="rd-navbar-static"
        data-xxl-device-layout="rd-navbar-static"
        data-xxl-layout="rd-navbar-static"
        data-stick-up-clone="false"
        data-sm-stick-up="true"
        data-md-stick-up="true"
        data-lg-stick-up="true"
        data-md-stick-up-offset="115px"
        data-lg-stick-up-offset="35px"
        data-body-class="rd-navbar-absolute"
      >
        <div class="rd-navbar-top-panel">
          <div class="rd-navbar-top-panel__main">
            <div
              class="rd-navbar-top-panel__toggle rd-navbar-fixed__element-1 rd-navbar-static--hidden"
              data-rd-navbar-toggle=".rd-navbar-top-panel__main"
            >
              <span></span>
            </div>
            <div class="rd-navbar-top-panel__content">
              <div class="rd-navbar-top-panel__left">
                <ul class="rd-navbar-items-list">
                  <li>
                    <div class="unit flex-row align-items-center unit-spacing-xs">
                      <div class="unit__left">
                        <span class="icon icon-sm icon-primary linear-icon-map-marker"></span>
                      </div>
                      <div class="unit__body">
                        <p><a href="#" @click.prevent="onScroll('contacto')">TBN Living · LATAM</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="unit flex-row align-items-center unit-spacing-xs">
                      <div class="unit__left">
                        <span class="icon icon-sm icon-primary linear-icon-telephone"></span>
                      </div>
                      <div class="unit__body">
                        <ul class="list-semicolon">
                          <li><a href="tel:+0000000000">+00 000 000 000</a></li>
                          <li><a href="tel:+0000000000">Soporte</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="rd-navbar-top-panel__right">
                <ul class="list-inline-xxs">
                  <li><a class="icon icon-xxs icon-gray-darker fa fa-facebook" href="https://www.facebook.com/tbnliving/"></a></li>
                  <li><a class="icon icon-xxs icon-gray-darker fa fa-instagram" href="https://www.instagram.com/tbnliving/"></a></li>
                  <li><a class="icon icon-xxs icon-gray-darker fa fa-youtube" href="#"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="rd-navbar-inner rd-navbar-search-wrap">
          <div class="rd-navbar-panel rd-navbar-search-lg_collapsable">
            <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
            <div class="rd-navbar-brand">
              <!-- Hard reload para re-inicializar plugins (Swiper) -->
              <a class="brand-name" href="/">
                <span class="tbn-logo">TBN <span>Living</span></span>
              </a>
            </div>
          </div>

          <div class="rd-navbar-nav-wrap rd-navbar-search_not-collapsable">
            <div class="rd-navbar-search_collapsable">
              <ul class="rd-navbar-nav">
                <!-- Hard reload para asegurar que el slider cargue -->
                <li><a href="/">Inicio</a></li>
                <li><RouterLink to="/#empresa">Empresa</RouterLink></li>
                <li><RouterLink to="/productos">Productos</RouterLink></li>
                <li><RouterLink to="/#lideres">Líderes</RouterLink></li>
                <li><RouterLink to="/#plan">Plan</RouterLink></li>
                <li><RouterLink to="/#contacto">Contacto</RouterLink></li>
              </ul>
            </div>
          </div>

          <div class="tbn-navbar-extra">
            <button
              v-if="showCart"
              type="button"
              class="tbn-cart-trigger"
              aria-label="Abrir carrito"
              @click="emit('cart-click')"
            >
              <span class="icon linear-icon-cart"></span>
              <span v-if="cartItemCount > 0" class="tbn-cart-badge">{{ cartItemCount }}</span>
            </button>
            <a class="tbn-auth-link" href="https://btnliving.com" target="_blank" rel="noopener noreferrer">
              Iniciar sesión
            </a>
            <a
              class="button button-primary tbn-register-btn"
              href="https://tbnliving.com/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registrarse
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

