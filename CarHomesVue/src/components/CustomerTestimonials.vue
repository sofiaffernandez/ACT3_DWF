<template>
  <div class="testimonials my-4">
    <h2 class="text-center mb-4">Lo que dicen nuestros clientes</h2>
    <div class="row">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <p class="card-text">"{{ testimonial.comentario }}"</p>
            <div class="d-flex align-items-center mt-3">
              <img :src="testimonial.foto" alt="Foto del cliente" class="rounded-circle me-3" width="50" />
              <div>
                <strong>{{ testimonial.nombre }}</strong>
                <p class="text-muted mb-0">{{ testimonial.ciudad }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerTestimonials",
  data() {
    return {
      testimonials: [
        {
          nombre: "María López",
          ciudad: "Madrid",
          comentario: "Una experiencia inolvidable. ¡Totalmente recomendado!",
          foto: require("@/assets/maria.jpg"),
        },
        {
          nombre: "Carlos García",
          ciudad: "Barcelona",
          comentario: "El motorhome estaba en perfectas condiciones. Excelente servicio.",
          foto: require("@/assets/carlos.jpg"),
        },
        {
          nombre: "Laura Fernández",
          ciudad: "Sevilla",
          comentario: "Viajamos por toda España cómodamente. Muy satisfechos.",
          foto: require("@/assets/laura.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  border: none;
}
.card-text {
  font-style: italic;
}
img {
  object-fit: cover;
}
</style>

