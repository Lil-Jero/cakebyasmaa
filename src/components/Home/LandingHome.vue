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
  background-image: url('@/assets/homeimg/cakelanding.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 56vh;
}

.overlay {
  font-size: clamp(3rem, 3vw, 5rem);
  text-align: center;
  color: black;
  line-height: 1;
}

h1 {
  font-size: clamp(3rem, 3vw, 5rem);
  letter-spacing: 0.3em;
}

.subtitle {
  font-style: italic;
  margin-top: 0.5rem;
  font-family: Sacramento;
}

// @media (any-pointer: coarse) and (any-hover: none) {
//   .hero {
//     // padding-top: 86px;
//   }
// }

@media (max-width: 600px) {
  .hero {
    background-image: url('@/assets/homeimg/cakelanding-phone.jpeg');
  }
}
</style>
