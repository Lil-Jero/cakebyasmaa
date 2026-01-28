<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="overlay">
      <h1>CAKE</h1>
      <p class="subtitle">by Asmaa</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100dvh;
  background-image: url('@/assets/cakelanding.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  font-size: 4rem;
  text-align: center;
  color: black;
  transform: translateY(-185%);
  line-height: 1;
}

h1 {
  font-size: 4rem;
  letter-spacing: 0.3em;
}

.subtitle {
  font-style: italic;
  margin-top: 0.5rem;
  font-family: Sacramento;
}

@media (any-pointer: coarse) and (any-hover: none) {
  .hero {
    padding-top: 86px;
  }
}

@media (max-width: 600px) {
  .hero {
    background-image: url('@/assets/cakelanding-phone.jpeg');
  }
}
</style>
