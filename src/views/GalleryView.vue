<script setup lang="ts">
/*
  Replace these paths with your actual image paths.
  You can add/remove images freely — layout adapts automatically.
*/
const images = [
  new URL('@/assets/gallery/1.png', import.meta.url).href,
  new URL('@/assets/gallery/2.png', import.meta.url).href,
  new URL('@/assets/gallery/3.png', import.meta.url).href,
  new URL('@/assets/gallery/4.png', import.meta.url).href,
  new URL('@/assets/gallery/5.png', import.meta.url).href,
  new URL('@/assets/gallery/6.jpg', import.meta.url).href,
  new URL('@/assets/gallery/7.png', import.meta.url).href,
  new URL('@/assets/gallery/8.PNG', import.meta.url).href,
  new URL('@/assets/gallery/9.png', import.meta.url).href,
  new URL('@/assets/gallery/10.png', import.meta.url).href,
  new URL('@/assets/gallery/11.png', import.meta.url).href,
  new URL('@/assets/gallery/12.png', import.meta.url).href,
  new URL('@/assets/gallery/13.jpg', import.meta.url).href,
  new URL('@/assets/gallery/14.jpg', import.meta.url).href,
  new URL('@/assets/gallery/15.png', import.meta.url).href,
  new URL('@/assets/gallery/16.png', import.meta.url).href,
  new URL('@/assets/gallery/17.png', import.meta.url).href,
  new URL('@/assets/gallery/18.jpg', import.meta.url).href,
  new URL('@/assets/gallery/19.jpg', import.meta.url).href,
  new URL('@/assets/gallery/20.jpg', import.meta.url).href,
  new URL('@/assets/gallery/21.jpg', import.meta.url).href,
  new URL('@/assets/gallery/23.jpg', import.meta.url).href,
  new URL('@/assets/gallery/24.jpg', import.meta.url).href,
  new URL('@/assets/gallery/25.jpg', import.meta.url).href,
  new URL('@/assets/gallery/26.png', import.meta.url).href,
  new URL('@/assets/gallery/27.jpg', import.meta.url).href,
  new URL('@/assets/gallery/28.png', import.meta.url).href,
  new URL('@/assets/gallery/29.png', import.meta.url).href,
  new URL('@/assets/gallery/30.png', import.meta.url).href,
  new URL('@/assets/gallery/31.png', import.meta.url).href,
  new URL('@/assets/gallery/32.png', import.meta.url).href,
  new URL('@/assets/gallery/33.png', import.meta.url).href,
  new URL('@/assets/gallery/34.PNG', import.meta.url).href,
  new URL('@/assets/gallery/35.jpg', import.meta.url).href,
  new URL('@/assets/gallery/36.png', import.meta.url).href,
  new URL('@/assets/gallery/37.png', import.meta.url).href,
  new URL('@/assets/gallery/38.PNG', import.meta.url).href,
  new URL('@/assets/gallery/39.png', import.meta.url).href,
  new URL('@/assets/gallery/40.png', import.meta.url).href,
]

/*
  Vertical-first pattern:
  - Mostly vertical
  - Some squares
  - Very few horizontals
*/
const layoutPattern = [
  'vertical',
  'square',
  'vertical',
  'vertical',
  'square',
  'vertical',
  'vertical',
  'horizontal', // rare accent
  'vertical',
  'square',
  'filler',
]

const getLayoutClass = (index: number) => layoutPattern[index % layoutPattern.length]
</script>

<template>
  <section class="gallery-section">
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="getLayoutClass(index)"
      >
        <a :href="image" rel="noopener">
          <img :src="image" alt="Gallery image" loading="lazy" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem 1.5rem;
}

/* Vertical-friendly editorial grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 180px;
  gap: 0.75rem;
  grid-auto-flow: dense;
}

.gallery-item {
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item.filler {
  grid-column: span 2;
  grid-row: span 1;
}

/* Layout types */
.gallery-item.vertical {
  grid-column: span 2;
  grid-row: span 3;
}

.gallery-item.square {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item.horizontal {
  grid-column: span 4;
  grid-row: span 2;
}

/* Responsive */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 260px;
  }

  .gallery-item.horizontal {
    grid-column: span 4;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 460px;
  }

  .gallery-item.vertical,
  .gallery-item.square,
  .gallery-item.horizontal {
    grid-column: span 2;
    grid-row: span 2;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 600px;
  }

  .gallery-item {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }

  .gallery-section {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
