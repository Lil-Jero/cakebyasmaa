<script setup lang="ts">
/* =========================
   Gourmandises data (UNCHANGED)
   ========================= */
const cakes = [
  {
    id: 1,
    name: 'Cupcakes',
    basic: 'Basic cupcakes',
    basicprice: '35/dozen',
    decorated: 'Decorated cupcakes',
    decoratedprice: '40/dozen',
    image: new URL('@/assets/articles/cupcakes.jpeg', import.meta.url).href,
  },
  {
    id: 2,
    name: 'Sugar cookies',
    basic: 'Decorated sugar cookies one basic design',
    basicprice: '45/dozen',
    decorated: 'Decorated sugar cookies multiple designs',
    decoratedprice: '55/dozen',
    image: new URL('@/assets/articles/cookies.jpeg', import.meta.url).href,
  },
  {
    id: 3,
    name: 'Dessert cups',
    basic: 'Dessert cups',
    basicprice: '4/each',
    decorated: 'or',
    decoratedprice: '48/dozen',
    image: new URL('@/assets/articles/cakecups.jpeg', import.meta.url).href,
  },
  {
    id: 4,
    name: 'Cake pops',
    basic: 'Decorated cake pops one basic design',
    basicprice: '35',
    decorated: 'Decorated cake pops multiple designs',
    decoratedprice: '40',
    image: new URL('@/assets/articles/cakepops3.jpeg', import.meta.url).href,
  },
]

/* =========================
   Catalog / Cakes section data
   ========================= */
const catalogCakes = [
  { name: '6 inch cake', serving: '12-15 people', price: '95' },
  { name: '8 inch cake', serving: '25 people', price: '150' },
  { name: '10 inch cake', serving: '40 people', price: '200' },
  { name: '6 inch + 8 inch tiered cake', serving: '40 people', price: '250' },
]

const flavors = [
  'Vanilla',
  'Chocolate',
  'Vanilla blueberry lemon',
  'Strawberry',
  'Red Velvet',
  'Sprinkles',
]
const icings = [
  'Fruits: choice of strawberries, berries, pineapple',
  'Homemade confit: choice of strawberries, raspberries, blueberries ',
  'Crushed oreos',
  'Crushed ferrero rocher',
  'Mini chocolate chips',
  'Caramel drizzle',
]
const fillings = [
  'Vanilla',
  'Chocolate',
  'Strawberry mousse',
  'Pistachio ashta',
  'Biscoff lotus',
  'Tiramisu',
]
</script>

<template>
  <!-- =========================
       CATALOG / CAKES SECTION
       ========================= -->
  <section class="catalog-section">
    <header class="header">
      <h2>Cakes</h2>
      <p class="subtitle">Lovingly made desserts using premium ingredients and seasonal flavors.</p>
    </header>

    <div class="catalog-main">
      <!-- Left: price list -->
      <div class="catalog-list">
        <h3>Cake size pricing</h3>

        <div class="cake-pricing-container">
          <div v-for="item in catalogCakes" :key="item.name">
            <div class="cake-pricing-item">
              <span>{{ item.name }}</span>
              <span class="catalog-line"></span>
              <span class="cake-princing-price">starts at ${{ item.price }}</span>
            </div>
            <div class="cake-pricing-serving">
              <span>feeds about {{ item.serving }}</span>
            </div>
          </div>
          <div>
            <div>Cakes quotes for more than 40 servings are available upon request.</div>
            <div>
              Prices do not include custom decorations. Fondant toppers, flowers and personalized
              decorations are extras and will be priced upon each unique designs.
            </div>
          </div>
        </div>
      </div>

      <!-- Right: image -->
      <div class="catalog-image">
        <img src="@/assets/articles/cakemenu.jpg" alt="Cake example" />
      </div>
    </div>

    <!-- Bottom details -->
    <div class="catalog-details">
      <div class="detail-card">
        <h4>1- Pick a cake flavor</h4>
        <div class="tag-list">
          <span v-for="f in flavors" :key="f" class="tag">{{ f }}</span>
        </div>
      </div>

      <div class="detail-card">
        <h4>2- Pick a cake filling</h4>
        <div class="tag-list">
          <span v-for="f in fillings" :key="f" class="tag">{{ f }}</span>
        </div>
      </div>

      <div class="detail-card">
        <h4>3- Optional: Gourmet toppings</h4>
        <div class="tag-list">
          <span v-for="i in icings" :key="i" class="tag">{{ i }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- =========================
       GOURMANDISES SECTION
       (UNCHANGED)
       ========================= -->
  <section class="cakes-section">
    <header class="header">
      <h2>Gourmandises</h2>
      <p class="subtitle">Lovingly made desserts using premium ingredients and seasonal flavors.</p>
    </header>

    <div class="cakes-grid">
      <article v-for="cake in cakes" :key="cake.id" class="cake-card">
        <h4 class="cake-name">{{ cake.name }}</h4>

        <img :src="cake.image" :alt="cake.name" class="cake-image" />

        <p class="cake-description">{{ cake.basic }}</p>
        <div class="price">${{ cake.basicprice }}</div>

        <p class="cake-description">{{ cake.decorated }}</p>
        <div class="price">${{ cake.decoratedprice }}</div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* =========================
   GOURMANDISES STYLES
   (UNCHANGED)
   ========================= */
.cakes-section {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem;
  background: #fff7e9;
}

.header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.header h2 {
  font-size: 2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.subtitle {
  color: #777;
  font-size: 0.95rem;
}
.catalog-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 420px;

  .cake-pricing-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 1rem;

    .cake-pricing-item {
      display: flex;
      align-items: center;
    }

    .catalog-line {
      flex: 1;
      height: 1px;
      background: #ccc;
      margin: 0 0.75rem;
    }

    .cake-pricing-serving {
      font-size: 0.7rem;
    }

    .cake-princing-price {
      font-weight: 600;
    }
  }
}

.cakes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.cake-card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.cake-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.cake-name {
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.cake-description {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.4rem;
}

.price {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

/* =========================
   CATALOG STYLES
   ========================= */
.catalog-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 1.5rem 4rem 1.5rem;
}

.catalog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.catalog-note {
  font-size: 0.85rem;
  opacity: 0.6;
}

.catalog-main {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

.catalog-img {
  display: flex;
  justify-content: center;
}

.catalog-image img {
  width: 100%;
  max-width: 320px;
  display: block;
}

.catalog-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 2rem;
  gap: 2rem;
}

.detail-card {
  background: #fffdf9;
  border-radius: 18px;
  padding: 1.5rem 1.5rem 1.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  animation: fadeUp 0.4s ease both;
  min-width: 260px;
  max-width: 400px;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.detail-card h4 {
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.tag-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: flex-start;
}

.tag {
  display: inline-flex;
  align-items: center;

  max-width: 100%;
  width: fit-content;
  padding: 0.35rem 0.75rem;

  background: #f7f7f7;
  border-radius: 999px;

  font-size: 0.75rem;
  color: #333;

  white-space: normal;
  word-break: break-word;

  &:hover {
    background: #efefef;
  }
}

/* Responsive */
@media (max-width: 900px) {
  .cakes-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .catalog-main {
    grid-template-columns: 1fr;
  }

  .catalog-details {
    grid-template-columns: 1fr;
  }
}
</style>
