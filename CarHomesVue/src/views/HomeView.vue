<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Nuestras Motorhomes</h1>

    <!-- Mensaje si no hay motorhomes disponibles -->
    <p v-if="motorhomes.length === 0" class="text-center text-danger">
      No hay motorhomes disponibles en este momento.
    </p>

    <div class="row">
      <!-- Usamos v-for para iterar sobre los motorhomes y mostrarlos en cards -->
      <MotorhomeCard
        v-for="(motorhome, index) in motorhomes"
        :key="index"
        :nombre="motorhome.nombre"
        :descripcion="motorhome.descripcion"
        :imagen="motorhome.imagen"
      />
    </div>

    <!-- Componente de testimonios -->
    <CustomerTestimonials />

    <!-- Logo de CarHomes -->
    <div class="text-center mt-5">
      <img src="@/assets/carhomeslogo.jpg" alt="CarHomes Logo" class="logo-img" />
    </div>
  </div>
</template>

<script>
import MotorhomeCard from "@/components/MotorhomeCard.vue";
import CustomerTestimonials from "@/components/CustomerTestimonials.vue"; 

export default {
  name: "HomeView",
  components: {
    MotorhomeCard,
    CustomerTestimonials, 
  },
  data() {
    return {
      motorhomes: [
        {
          nombre: "Motorhome 1",
          descripcion: "Ideal para familias",
          imagen: require("@/assets/motorhome1.jpg"),
        },
        {
          nombre: "Motorhome 2",
          descripcion: "Compacta y cómoda",
          imagen: require("@/assets/motorhome2.jpg"),
        },
        {
          nombre: "Motorhome 3",
          descripcion: "",
          imagen: require("@/assets/motorhome3.jpg"),
        },
        {
          nombre: "Motorhome 4",
          descripcion: "Con espacio para todos",
          imagen: require("@/assets/motorhome4.jpg"),
        },
        {
          nombre: "Motorhome 5",
          descripcion: "Ideal para grupos",
          imagen: require("@/assets/motorhome5.jpg"),
        },
        {
          nombre: "Motorhome 6",
          descripcion: "Compacta y moderna",
          imagen: require("@/assets/motorhome6.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>

.logo-img {
  max-width: 200px; 
  height: auto; 
  margin-top: 20px; 
  margin-bottom: 20px; 
}
</style>
