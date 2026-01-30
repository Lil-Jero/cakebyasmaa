<script setup lang="ts">
const globImages = import.meta.glob('@/assets/gallery-optimized/*.{png,jpg,jpeg,PNG,JPG,webp}', {
  eager: true,
  import: 'default',
})

const images = Object.values(globImages).sort((a, b) => {
  const numA = parseInt((a as string).match(/(\d+)/)?.[0] || '0')
  const numB = parseInt((b as string).match(/(\d+)/)?.[0] || '0')
  return numA - numB
}) as string[]
</script>

<template>
  <section class="gallery-section">
    <div class="gallery-grid">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <a :href="image" rel="noopener">
          <img :src="image" alt="Gallery image" loading="lazy" decoding="async" />
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 4px;
  /* Format Vertical (Portrait) */
  aspect-ratio: 2 / 3;
  background-color: #f0f0f0; /* Placeholder gris clair pendant le chargement */
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.4s ease,
    opacity 0.3s ease;
  display: block;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .gallery-section {
    padding: 6rem 1rem 1rem 1rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
