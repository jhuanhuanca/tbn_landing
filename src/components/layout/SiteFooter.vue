<script setup>
defineProps({
  onScroll: { type: Function, required: true },
})
</script>

<template>
  <section id="contacto" class="pre-footer-corporate bg-overlay-darkest tbn-footer">
    <div class="container">
      <div class="row justify-content-sm-center justify-content-lg-start row-30 row-md-60">
        <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4">
          <h6>Sobre TBN Living</h6>
          <p>
            Una web de MLM debe mostrar rápido: qué es la empresa, qué vendes, quién lidera y cómo se gana. Aquí lo dejamos
            visual, claro y confiable.
          </p>
        </div>
        <div class="col-sm-10 col-md-6 col-lg-3 col-xl-3">
          <h6>Navegación</h6>
          <ul class="list-xxs">
            <li><a href="#" @click.prevent="onScroll('empresa')">Empresa</a></li>
            <li><a href="#" @click.prevent="onScroll('productos')">Productos</a></li>
            <li><a href="#" @click.prevent="onScroll('lideres')">Líderes</a></li>
            <li><a href="#" @click.prevent="onScroll('plan')">Plan</a></li>
          </ul>
        </div>
        <div class="col-sm-10 col-md-6 col-lg-5 col-xl-5">
          <h6>Contacto</h6>
          <ul class="list-xs">
            <li>
              <dl class="list-terms-minimal">
                <dt>WhatsApp</dt>
                <dd><a href="tel:+591 67024326">+591 67024326</a></dd>
              </dl>
            </li>
            <li>
              <dl class="list-terms-minimal">
                <dt>Correo</dt>
                <dd><a href="mailto:tbnliving@gmail.com">tbnliving@gmail.com</a></dd>
              </dl>
            </li>
            <li>
              <dl class="list-terms-minimal">
                <dt>Horario</dt>
                <dd>Lun–Vie: 9:00–18:00</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="col-sm-10 col-md-6 col-lg-3 col-xl-3">
          <h6>politicas y condiciones de uso de la web</h6>
          <ul class="list-xxs">
            <li><a href="#" @click.prevent="onScroll('politicas')">Políticas de Privacidad</a></li>
            <li><a href="#" @click.prevent="onScroll('condiciones')">Condiciones de Uso</a></li>
            <li><a href="#" @click.prevent="onScroll('cookies')">Política de Cookies</a></li>
              <li><a href="#" @click.prevent="onScroll('derechos')">Política de Derechos de Autor</a></li>
              <li><a href="#" @click.prevent="onScroll('derechos')">Política de Protección de Datos Personales</a></li>
            </ul>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer-corporate bg-gray-darkest">
    <div class="container">
      <div class="footer-corporate__inner">
        <p class="rights"><span>TBN Living</span><span>&nbsp;</span><span class="copyright-year"></span>.</p>
        <ul class="list-inline-xxs">
          <li><a class="icon icon-xxs icon-primary fa fa-facebook" href="https://www.facebook.com/tbnliving/"></a></li>
          <li><a class="icon icon-xxs icon-primary fa fa-instagram" href="https://www.instagram.com/tbnliving/"></a></li>
          <li><a class="icon icon-xxs icon-primary fa fa-youtube" href="#"></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

