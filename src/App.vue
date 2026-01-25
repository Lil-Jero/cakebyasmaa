<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="main">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
