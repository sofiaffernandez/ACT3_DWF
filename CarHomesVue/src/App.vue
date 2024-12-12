
<template>
  <div class="app-container">
    <NavBar />
    <div class="content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: { NavBar, AppFooter },
};
</script>

<style>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1; 
}
</style>
