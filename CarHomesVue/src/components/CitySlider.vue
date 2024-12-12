<template>
  <div id="citySlider" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/barcelona.jpg" class="d-block w-100" alt="Barcelona">
        <div class="carousel-caption d-none d-md-block">
          <h5>Barcelona</h5>
          <p>Disfruta de la arquitectura y cultura de Barcelona.</p>
          <!-- Botón Más Info -->
          <button class="btn custom-btn">Más Info</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/madrid.jpg" class="d-block w-100" alt="Madrid">
        <div class="carousel-caption d-none d-md-block">
          <h5>Madrid</h5>
          <p>Vibrante capital llena de historia y arte.</p>
          <!-- Botón Más Info -->
          <button class="btn custom-btn">Más Info</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/sevilla.jpg" class="d-block w-100" alt="Sevilla">
        <div class="carousel-caption d-none d-md-block">
          <h5>Sevilla</h5>
          <p>Vive la tradición y la pasión de Sevilla.</p>
          <!-- Botón Más Info -->
          <button class="btn custom-btn">Más Info</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#citySlider" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#citySlider" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CitySlider'
};
</script>

<style scoped>
.carousel-item img {
  max-height: 500px;
  object-fit: cover;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 8px;
}

.custom-btn {
  background-color: #CC460A; 
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.custom-btn:hover {
  background-color: #FF5E13; 
}
</style>
