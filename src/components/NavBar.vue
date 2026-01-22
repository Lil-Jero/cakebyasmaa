<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="navbar">
    <nav class="nav-container">
      <div class="nav-left">
        <span class="language"></span>
      </div>

      <ul class="nav-center">
        <li><RouterLink to="/gallery">Gallery</RouterLink></li>
        <RouterLink to="/"><li class="brand">Cake by Asmaa</li></RouterLink>
        <li><RouterLink to="/catalog">Menu</RouterLink></li>
      </ul>

      <div class="nav-right">
        <RouterLink to="/contact"><button class="contact">Place an order</button></RouterLink>
      </div>

      <button class="burger" @click="toggleMenu">
        <span />
        <span />
        <span />
      </button>
    </nav>
  </header>

  <!-- Mobile menu -->
  <transition name="slide">
    <div v-if="isOpen" class="mobile-menu">
      <RouterLink @click="toggleMenu" to="/">Home</RouterLink>
      <RouterLink @click="toggleMenu" to="/gallery">Gallery</RouterLink>
      <RouterLink @click="toggleMenu" to="/catalog">Menu</RouterLink>
      <RouterLink @click="toggleMenu" to="/contact">Place an order</RouterLink>
    </div>
  </transition>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
}

.nav-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
}

.nav-center {
  padding-inline-start: 0;
  display: flex;
  justify-content: center;

  gap: 2rem;
  list-style: none;
  align-items: center;
}

.nav-right {
  justify-self: end;
}

.brand {
  font-weight: 600;
  font-size: 1.5rem;
  font-family: Sacramento;
}

a {
  color: black;
  text-decoration: none;
}

.contact {
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: 20px;
}

/* ===== Burger ===== */

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.burger span {
  width: 22px;
  height: 2px;
  background: black;
}

/* ===== Mobile menu ===== */

.mobile-menu {
  position: fixed;
  top: 66px; /* hauteur de ta navbar */
  left: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);

  z-index: 20;
}

/* ===== Animation ===== */

/* .slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
} */

.slide-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* ===== Responsive ===== */

@media (max-width: 1024px) {
  .nav-center,
  .nav-right {
    display: none;
  }

  .burger {
    display: flex;
  }
}
</style>
