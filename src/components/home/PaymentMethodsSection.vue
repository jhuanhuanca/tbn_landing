<script setup>
const methods = [
  {
    title: 'Tarjeta',
    text: 'Visa, Mastercard y AMEX a través del checkout seguro de TBN Living.',
    iconFa: 'fa fa-credit-card',
  },
  {
    title: 'Transferencia',
    text: 'Transferencia bancaria o depósito; confirma tu pago con tu asesor.',
    iconFa: 'fa fa-university',
  },
  {
    title: 'Digital',
    text: 'Billeteras y pasarelas disponibles según tu país (indicadas al pagar).',
    iconFa: 'fa fa-mobile',
  },
]
</script>

<template>
  <section id="pagos" class="section-md bg-gray-lighter text-center decor-text" data-content="Pagos">
    <div class="container">
      <h4 class="heading-decorated">Formas de pago</h4>
      <p class="tbn-subhead">
        Elige la opción que te convenga; el cobro final se confirma en la plataforma oficial de TBN Living.
      </p>

      <div class="row row-40 justify-content-md-center text-left tbn-payment-row">
        <div v-for="(m, i) in methods" :key="i" class="col-md-6 col-lg-4">
          <article class="tbn-payment-card">
            <div class="tbn-payment-card__icon">
              <span :class="['icon', m.iconFa]"></span>
            </div>
            <h6 class="tbn-payment-card__title">{{ m.title }}</h6>
            <p class="tbn-payment-card__text">{{ m.text }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
