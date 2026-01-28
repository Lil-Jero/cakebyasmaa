<script setup lang="ts">
import router from '@/router'

const articles = [
  { id: 1, image: new URL('@/assets/articles/cake0.jpg', import.meta.url).href },
  { id: 2, image: new URL('@/assets/articles/cake1.PNG', import.meta.url).href },
  { id: 3, image: new URL('@/assets/articles/cake2.jpeg', import.meta.url).href },
  { id: 4, image: new URL('@/assets/articles/cake3.PNG', import.meta.url).href },
]

const goToArticles = () => router.push('/catalog')
</script>

<template>
  <section class="articles-section">
    <h2>My art</h2>
    <div class="articles-grid">
      <article v-for="article in articles" :key="article.id" class="article-card">
        <img :src="article.image" alt="Article image" />
      </article>
    </div>

    <div class="see-more">
      <button class="luxury-btn" @click="goToArticles">
        <span>See more</span>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.articles-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 0 1rem;

  h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.3em;
  }
}

.articles-grid {
  display: grid;
  // Par défaut (Desktop) : 4 colonnes
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1400px; // Évite que les images s'étalent trop sur des écrans géants
  margin: 0 auto;
}

.article-card {
  position: relative;
  overflow: hidden;
  border-radius: 4px; // Un léger arrondi pour le côté premium

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3));
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  &:hover::after {
    opacity: 1;
  }
}

/* --- RESPONSIVE --- */

// Tablettes et petits laptops (Sous 1024px)
@media (max-width: 1024px) {
  .articles-grid {
    gap: 1.5rem;
  }
}

// TON PALIER : Passage en 2 colonnes à 768px
@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr); // Passage en 2x2
    gap: 1rem;
    padding: 0 1rem;
  }
}

// Smartphone (Sous 480px)
@media (max-width: 480px) {
  .articles-grid {
    grid-template-columns: 1fr; // Une seule colonne pour une lecture claire
  }
}

// ... (ton style pour .luxury-btn reste identique)

.see-more {
  display: flex;
  justify-content: center;
}

.luxury-btn {
  position: relative;
  padding: 1.2rem 3.5rem;
  background: transparent;
  border: 1px solid rgba(175, 25, 180, 0.6);
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;

  span {
    position: relative;
    z-index: 2;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    transition: color 0.4s ease;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(175, 25, 180, 0.6);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover span {
    color: #fff;
  }
}

@media (max-width: 768px) {
}
</style>
