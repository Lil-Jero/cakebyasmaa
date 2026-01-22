<script setup lang="ts">
import router from '@/router'

const articles = [
  { id: 1, image: new URL('@/assets/articles/cake0.jpg', import.meta.url).href },
  { id: 2, image: new URL('@/assets/articles/cake1.jpeg', import.meta.url).href },
  { id: 3, image: new URL('@/assets/articles/cake2.jpeg', import.meta.url).href },
  { id: 4, image: new URL('@/assets/articles/cake3.jpeg', import.meta.url).href },
]

const goToArticles = () => router.push('/catalog')
</script>

<template>
  <section class="articles-section">
    <h2>My art (work in progress)</h2>
    <p>
      (Idea: find a design to show some cakes and when we click on the button we go to the catalog
      and we see all the cakes)
    </p>
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

  h2 {
    text-align: center;
    text-transform: uppercase;
  }
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin: 0 2rem;
}

.article-card {
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    transition: transform 0.8s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.25));
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover::after {
    opacity: 1;
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
  .articles-grid {
    grid-template-columns: 1fr;
  }

  .article-card img {
    height: 320px;
  }
}
</style>
