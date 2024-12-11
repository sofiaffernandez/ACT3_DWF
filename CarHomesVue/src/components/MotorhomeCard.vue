<template>
  <div class="col-md-4 mb-4">
    <div class="card position-relative">
    
      <div class="image-container position-relative">
        <img :src="imagen" class="card-img-top" :alt="nombre" />

        
        <div v-if="!descripcion" class="overlay position-absolute w-100 h-100 bg-dark" style="top: 0; left: 0; opacity: 0.8;">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="agotado-banner p-3">
              <h3 class="text-white m-0">AGOTADO</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ nombre }}</h5>
        <p class="card-text">{{ descripcion || 'No disponible' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MotorhomeCard",
  props: ["nombre", "descripcion", "imagen"],
};
</script>

<style scoped>

.image-container {
  position: relative;
}


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0.6; 
  background-color: black;
}


.card-body {
  position: relative;
  z-index: 2; 
}


.agotado-banner {
  background-color: rgba(255, 94, 19, 1);
  border-radius: 5px; 
  padding: 10px;
}

h3 {
  font-size: 1.5rem; 
  font-weight: 400; 
  margin: 0;
}



.image-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0.6; 
  background-color: black;
}


.card-body {
  position: relative;
  z-index: 2; 
}


.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); 
}


.agotado-banner {
  background-color: rgba(255, 94, 19, 1);
  border-radius: 5px; 
  padding: 10px;
}

h3 {
  font-size: 1.5rem; 
  font-weight: 400; 
  margin: 0;
}

</style>