<script setup lang="ts">
const articles = [
  { id: 1, image: new URL('@/assets/articles-optimized/cake0.webp', import.meta.url).href },
  { id: 2, image: new URL('@/assets/articles-optimized/cake1.webp', import.meta.url).href },
  { id: 3, image: new URL('@/assets/articles-optimized/cake2.webp', import.meta.url).href },
  { id: 4, image: new URL('@/assets/articles-optimized/cake3.webp', import.meta.url).href },
]
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
      <RouterLink to="/menu">
        <button class="luxury-btn">
          <span>See more</span>
        </button>
      </RouterLink>
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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.article-card {
  position: relative;
  overflow: hidden;
  border-radius: 4px;

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

@media (max-width: 1024px) {
  .articles-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}

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
