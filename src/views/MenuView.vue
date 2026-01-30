<script setup lang="ts">
/* =========================
   Gourmandises data
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
    basic: 'One basic design',
    basicprice: '45/dozen',
    decorated: 'Multiple designs',
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
    basic: 'One basic design',
    basicprice: '35',
    decorated: 'Multiple designs',
    decoratedprice: '40',
    image: new URL('@/assets/articles/cakepops.jpeg', import.meta.url).href,
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
  'Marble',
]
const icings = [
  'Fruits: choice of strawberries, berries, pineapple',
  'Homemade compote: choice of strawberries, raspberries, blueberries ',
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
  'Coffee mousse',
]
</script>

<template>
  <section class="catalog-section">
    <div class="container">
      <header class="header">
        <h2>Cakes</h2>
        <p class="subtitle">
          Elevate your celebration with a luxurious cake, a perfect harmony of rich flavors and
          elegant design that will delight every palate.
        </p>
      </header>

      <div class="catalog-main">
        <div class="catalog-list">
          <h3>Cake size pricing</h3>

          <div class="cake-pricing-container">
            <div v-for="item in catalogCakes" :key="item.name" class="price-block">
              <div class="cake-pricing-item">
                <span class="item-name">{{ item.name }}</span>
                <span class="catalog-line"></span>
                <span class="cake-pricing-price">starts at ${{ item.price }}</span>
              </div>
              <div class="cake-pricing-serving">
                <span>feeds about {{ item.serving }}</span>
              </div>
            </div>

            <div class="cakes-serving-and-pricing-notes">
              <p>Cakes quotes for more than 40 servings are available upon request.</p>
              <p class="cakes-serving-and-pricing-notes-prices">
                Prices do not include custom decorations. Fondant toppers, flowers and personalized
                decorations are extras and will be priced upon each unique designs.
              </p>
            </div>
          </div>
        </div>

        <div class="catalog-image">
          <img src="@/assets/articles-optimized/cakemenu.webp" alt="Cake example" />
        </div>
      </div>

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
    </div>
  </section>

  <section class="cakes-section">
    <div class="container">
      <header class="header">
        <h2>Gourmandises</h2>
        <p class="subtitle">
          Complete your event with irresistible sweet treats; from fluffy cupcakes to delightful
          cake pops to freshly baked cookies, each bite will leave your guests craving more!
        </p>
      </header>

      <div class="cakes-grid">
        <article v-for="cake in cakes" :key="cake.id" class="cake-card">
          <h4 class="cake-name">{{ cake.name }}</h4>

          <div class="image-wrapper">
            <img :src="cake.image" :alt="cake.name" class="cake-image" />
          </div>

          <div class="card-content">
            <div class="price-group">
              <p class="cake-description">{{ cake.basic }}</p>
              <div class="price">${{ cake.basicprice }}</div>
            </div>

            <div class="price-group">
              <p class="cake-description">{{ cake.decorated }}</p>
              <div class="price">${{ cake.decoratedprice }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

/* =========================
   COMMON HEADER STYLES
   ========================= */
.header {
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: serif;
  }

  .subtitle {
    color: #777;
    font-size: 1rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    text-align: justify;
  }
}

/* =========================
   CATALOG SECTION
   ========================= */
.catalog-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1.5rem;
}

.catalog-main {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 5rem;
}

/* --- Price List --- */
.catalog-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .cake-pricing-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1rem;

    .cake-pricing-item {
      display: flex;
      align-items: flex-end;
      width: 100%;
    }

    .item-name {
      white-space: nowrap;
    }

    .catalog-line {
      flex: 1;
      border-bottom: 1px dotted #ccc;
      margin: 0 0.75rem 5px 0.75rem;
    }

    .cake-pricing-price {
      font-weight: 700;
      white-space: nowrap;
    }

    .cake-pricing-serving {
      font-size: 0.8rem;
      color: #666;
      margin-top: 2px;
      font-style: italic;
    }

    .cakes-serving-and-pricing-notes {
      margin-top: 1rem;
      font-size: 1rem;
      text-align: justify;

      .cakes-serving-and-pricing-notes-prices {
        color: #666;
        font-size: 0.8rem;
      }

      p {
        margin-bottom: 0.5rem;
      }
    }
  }
}

/* --- Catalog Image --- */
.catalog-image {
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    display: block;
    border-radius: 12px;
    box-shadow: 10px 10px 0px rgba(255, 173, 250, 0.2);
  }
}

/* --- Catalog Details (Cards) --- */
.catalog-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.detail-card {
  background: #fffdf9;
  border: 1px solid #f0e6d2;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  animation: fadeUp 0.6s ease both;
}

.detail-card h4 {
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  color: #333;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tag {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 50px;
  font-size: 0.8rem;
  color: #555;
  line-height: 1.3;

  &:hover {
    background: #ffebf7;
    border-color: #ffebf7;
    color: #a74b94;
  }
}

/* =========================
   GOURMANDISES SECTION
   ========================= */
.cakes-section {
  padding: 4rem 1.5rem;
  background: #fff7e9;
  width: 100%;
}

.cakes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.cake-card {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  }
}

.cake-name {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 1.2rem;
}

.cake-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  .cake-card:hover & {
    transform: scale(1.05);
  }
}

.card-content {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.price-group {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 0.5rem;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.cake-description {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.2rem;
  line-height: 1.4;
}

.price {
  font-weight: 700;
  color: #000;
  font-size: 1rem;
}

/* =========================
   ANIMATIONS
   ========================= */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================
   RESPONSIVE (MEDIA QUERIES)
   ========================= */

/* Tablet & Small Laptop (max 1024px) */
@media (max-width: 1024px) {
  .catalog-main {
    gap: 2rem;
  }

  .cakes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile & Small Tablet (max 900px) */
@media (max-width: 900px) {
  .catalog-section {
    padding: 6rem 1.5rem 3rem 1.5rem;
  }
  .cakes-section {
    padding: 3rem 1.5rem 3rem 1.5rem;
  }

  .catalog-main {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }

  .catalog-image {
    order: -1;
    margin-bottom: 2rem;
    img {
      width: 100%;
    }
  }

  .catalog-details {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Small Mobile (max 600px) */
@media (max-width: 600px) {
  .header h2 {
    font-size: 2rem;
  }

  .cakes-grid {
    grid-template-columns: 1fr;
  }

  .cake-pricing-item {
    font-size: 0.9rem;
  }

  .catalog-section {
    padding: 6rem 1rem 3rem 1rem;
  }
  .cakes-section {
    padding: 3rem 1rem 1rem 1rem;
  }
}
</style>
