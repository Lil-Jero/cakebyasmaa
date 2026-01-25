<script setup lang="ts">
/*
  Replace these paths with your actual image paths.
  You can add/remove images freely — layout adapts automatically.
*/
const images = [
  new URL('@/assets/gallery/142.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/664.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/321.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/325.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/332.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/229.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/335.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/586.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/352.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/754.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/759.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/768.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/534.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/452.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/521.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/747.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/865.jpeg', import.meta.url).href,

  // Continue until img34.jpg
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
