<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Contacto</h1>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="name" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Mensaje</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" class="btn custom-btn">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>

.custom-btn {
  background-color: #FF5E13; 
  border: none;
  color: #ffffff; 
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.custom-btn:hover {
  background-color: #CC460A; 
}
</style>
