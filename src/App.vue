<script setup lang="ts">
import NavBar from './components/navBar.vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <!-- Exibe NavBar se a rota atual NÃO for /login -->
  <NavBar v-if="route.name !== 'login'">
    <RouterView />
  </NavBar>

  <!-- Se for /login, renderiza a view normalmente -->
  <RouterView v-else />
</template>

<style>
html,
body {
  height: 100%;
  overflow: hidden;
}

* {
  font-family: 'Poppins', sans-serif;
}
</style>
