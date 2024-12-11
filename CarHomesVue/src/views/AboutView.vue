<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Sobre Nosotros</h1>
    <p class="text-justify">
      En CarHomes, somos líderes en el alquiler de motorhomes en España. Nuestra misión es ofrecer a nuestros clientes una experiencia única, combinando comodidad, libertad y aventura. Con una flota moderna y bien equipada, estamos presentes en localidades como Madrid, Barcelona, Sevilla y más. Nos enorgullece destacar por nuestro compromiso con la calidad, la sostenibilidad y la atención personalizada.
      <br /><br />
      Desde escapadas de fin de semana hasta largos viajes familiares, nuestras motorhomes están diseñadas para que vivas momentos inolvidables mientras exploras los paisajes más hermosos de España. ¡Prepárate para una experiencia de viaje diferente!
    </p>

    <!-- Carrusel -->
    <CitySlider :images="cityImages" />

    <!-- ¿Por qué elegirnos? -->
    <h3 class="mt-5">¿Por qué elegirnos?</h3>
    <div class="row">
      <div class="col-md-6">
        <ul>
          <li>✔️ Más de <strong>10,000</strong> clientes satisfechos cada año.</li>
          <li>✔️ Flota de motorhomes con <strong>equipamiento premium</strong>.</li>
          <li>✔️ Atención al cliente <strong>24/7</strong>.</li>
          <li>✔️ Cobertura en las principales ciudades de España.</li>
        </ul>
      </div>
      <div class="col-md-6">
        <p class="fst-italic">
          "Nuestro viaje fue increíble gracias a CarHomes. Todo estuvo perfecto, desde la reserva hasta la devolución del vehículo."
          <br />
          <strong>- Laura M., Madrid</strong>
        </p>
        <p class="fst-italic">
          "Sin duda, la mejor experiencia en carretera que hemos tenido. Volveremos a repetir."
          <br />
          <strong>- Carlos R., Barcelona</strong>
        </p>
      </div>
    </div>

    <!-- Galería -->
    <h3 class="mt-5">Momentos Inolvidables</h3>
    <div class="row text-center">
      <div class="col-md-4">
        <img :src="require('@/assets/muestra1.jpg')" alt="Clientes felices 1" class="img-fluid rounded" />
      </div>
      <div class="col-md-4">
        <img :src="require('@/assets/muestra2.jpg')" alt="Clientes felices 2" class="img-fluid rounded" />
      </div>
      <div class="col-md-4">
        <img :src="require('@/assets/muestra3.jpg')" alt="Clientes felices 3" class="img-fluid rounded" />
      </div>
    </div>
  </div>
</template>

<script>
import CitySlider from "@/components/CitySlider.vue";

export default {
  name: "AboutView",
  components: {
    CitySlider,
  },
  data() {
    return {
      cityImages: [
        require("@/assets/madrid.jpg"),
        require("@/assets/barcelona.jpg"),
        require("@/assets/sevilla.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.text-justify {
  text-align: justify;
}

.img-fluid {
  margin-bottom: 20px;
}

.fst-italic {
  font-style: italic;
  color: #555;
}
</style>
