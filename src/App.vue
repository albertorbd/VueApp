<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderTask from '@/components/HeaderTask.vue'

import FooterTask from '@/components/FooterTask.vue'
</script>

<template>
  <HeaderTask></HeaderTask>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="enlace_nav">Categorías</RouterLink>
        <RouterLink to="/sites" class="enlace_nav">Sites</RouterLink>
        <RouterLink to="/add" class="enlace_nav">Añadir</RouterLink>
        <RouterLink to="/search" class="enlace_nav">Buscador</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <FooterTask></FooterTask>
</template>

<style scoped>
nav {
  background-color: aqua;
}
</style>
