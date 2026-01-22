<script setup lang="ts">
import AboutSection from '@/components/Home/AboutSection.vue'
import ArticlesSection from '@/components/Home/ArticlesSection.vue'
import LandingHome from '@/components/Home/LandingHome.vue'
</script>

<template>
  <div class="home-container">
    <LandingHome />
    <ArticlesSection />
    <AboutSection />
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
</style>
