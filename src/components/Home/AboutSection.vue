<script setup lang="ts"></script>

<template>
  <section id="about" class="about">
    <div class="about-content">
      <div class="image-shadow">
        <img src="@/assets/me.jpeg" alt="" />
      </div>
      <div class="info-content">
        <div class="text-content">
          <p class="title">I'm Asmaa</p>
          <p class="text">
            ✨ Hello, beautiful friends! 👩‍🍳 I’m thrilled to have you here, and your interest in my
            story truly warms my heart! Thank you for taking the time to connect with me! I’m Asmaa,
            a wife, mom and a self-taught baker with a heart for creating. My journey began in
            Belgium, where I spent most of my life before heading to the dynamic city of Houston.
            With a master’s degree in modern languages and literatures, I’m fortunate to speak
            French, Arabic, and English fluently, along with a sprinkle of Dutch and Spanish! My
            love for baking blossomed after I moved to the U.S., but it was the art of cake
            decorating that truly captivated me! Merging my creative flair with delicious creations
            felt like discovering my true calling! I strive to craft beautiful and tasty edible art
            that brings joy to special occasions. My goal is to turn your dream cake visions into
            edible masterpieces! I can’t wait to share my creations with you. Let’s embark on this
            sweet journey together! ❤️
          </p>
        </div>
        <RouterLink to="/contact"><button class="contact-button">Contact me</button></RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  background-color: rgb(255, 219, 253);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-x: hidden;

  .about-content {
    display: flex;
    align-items: center;
    gap: 40px;

    // --- RESPONSIVE : TABLETTE & MOBILE ---
    @media (max-width: 900px) {
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }
  }

  .image-shadow {
    position: relative;
    width: 400px;
    isolation: isolate;
    flex-shrink: 0;

    // --- RESPONSIVE : MOBILE ---
    @media (max-width: 500px) {
      width: 100%;
      max-width: 320px;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #ffadfa;
      transform: translate(-18px, 18px);
      z-index: -1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .info-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;

    // --- RESPONSIVE : TABLETTE & MOBILE ---
    @media (max-width: 900px) {
      align-items: center;
      width: 100%;
    }

    .title {
      font-family: Showclick, sans-serif;
      font-size: 6rem;
      line-height: 1;
      margin: 0;

      // --- RESPONSIVE : MOBILE ---
      @media (max-width: 600px) {
        font-size: 3.5rem;
      }
    }

    .text {
      max-width: 400px;

      // --- RESPONSIVE : TABLETTE & MOBILE ---
      @media (max-width: 900px) {
        max-width: 100%;
        font-size: 1rem;
        line-height: 1.6;
      }
    }

    .contact-button {
      appearance: none;
      background-color: #ffadfa;
      border: none;
      border-radius: 999px;
      padding: 0.9rem 2.6rem;

      font-size: 0.85rem;
      font-weight: 400;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #000;

      cursor: pointer;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        background-color 0.25s ease;

      box-shadow: 0 10px 30px rgba(255, 173, 250, 0.45);

      &:hover {
        transform: translateY(-2px);
        background-color: #ff9ef6;
        box-shadow: 0 16px 40px rgba(255, 173, 250, 0.55);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 8px 20px rgba(255, 173, 250, 0.35);
      }
    }
  }
}
</style>
