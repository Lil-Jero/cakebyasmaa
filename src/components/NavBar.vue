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
        <li><RouterLink to="/menu">Menu</RouterLink></li>
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
      <RouterLink @click="toggleMenu" to="/menu">Menu</RouterLink>
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
  min-height: 85px;

  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
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
  color: #000000;
  transition: all 0.5s;
  position: relative;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.contact:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}

.contact::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.5);
  transform: scale(1.2, 1.2);
}

.contact:hover::after {
  opacity: 1;
  transform: scale(1, 1);
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

/* ===== Animation ===== */

/* Animation plus fluide pour un menu mobile */
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

/* ===== Responsive ===== */

@media (max-width: 768px) {
  .nav-center,
  .nav-right {
    display: none;
  }

  .burger {
    display: flex;
  }

  .nav-container {
    padding: 0.5rem 1.5rem;
  }
}

.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  z-index: 9;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 900px) {
  .nav-container {
    min-height: 70px;
  }
}

@media (max-height: 768px) {
  .nav-container {
    min-height: 70px;
  }
}

/* PROTECTION MODE PAYSAGE / FORT ZOOM VERTICAL */
@media (max-height: 500px) {
  .navbar {
    /* Si l'écran est très petit en hauteur, on évite que la barre mange tout */
    position: absolute;
  }
  .mobile-menu {
    overflow-y: auto; /* Permet de scroller dans le menu s'il est trop haut */
    max-height: 80vh;
  }
  .nav-container {
    min-height: 50px;
  }
}
</style>
