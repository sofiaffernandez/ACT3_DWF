<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-bg">
    <div class="container-fluid">
      <!-- Logo de CarHomes -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/carhomeslogo.jpg" alt="CarHomes Logo" class="navbar-logo me-2" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sobre-nosotros" class="nav-link">Sobre Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>

.custom-bg {
  background-color: #003B5C !important; 
}


.nav-link {
  color: #ffffff !important; 
}

.nav-link:hover {
  color: #BAD2EF !important; 
}

/* Para el toggler (icono del menú móvil) */
.navbar-toggler {
  border-color: rgba(255, 94, 19, 1); 
}

.navbar-toggler-icon {
  background-image: linear-gradient(#ffffff, #ffffff); 
}


.navbar-logo {
  max-height: 40px; 
  width: auto; 
}
</style>

