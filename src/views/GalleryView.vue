<script setup>
/*
  Replace these paths with your actual image paths.
  You can add/remove images freely — layout adapts automatically.
*/
const images = [
  new URL('@/assets/gallery/142.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/213.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/321.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/325.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/332.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/229.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/335.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/352.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/542.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/754.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/865.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/774.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/534.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/452.jpeg', import.meta.url).href,
  new URL('@/assets/gallery/521.jpeg', import.meta.url).href,

  // Continue until img34.jpg
]

const layoutPattern = ['tall', 'square', 'wide', 'square', 'square', 'tall', 'square', 'wide']

const getLayoutClass = (index) => layoutPattern[index % layoutPattern.length]
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
        <img :src="image" alt="Gallery image" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 8rem 1.5rem;
}

/* Editorial grid with dense packing */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 180px;
  gap: 1.25rem;
  grid-auto-flow: dense;
}

.gallery-item {
  overflow: hidden;
  border-radius: 14px;
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

/* Layout variations */
.gallery-item.square {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item.tall {
  grid-column: span 2;
  grid-row: span 3;
}

.gallery-item.wide {
  grid-column: span 4;
  grid-row: span 2;
}

/* Responsive */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 160px;
  }

  .gallery-item.wide {
    grid-column: span 4;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }

  .gallery-item.square,
  .gallery-item.tall,
  .gallery-item.wide {
    grid-column: span 2;
    grid-row: span 2;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item {
    /* grid-column: span 1 !important;
    grid-row: span 1 !important; */
  }
}
</style>
