<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useEmailSend } from './emailSend'

const formRef = useTemplateRef<HTMLFormElement>('formRef')
const { send, success, error, sending } = useEmailSend(formRef)
</script>

<template>
  <section class="contact-page">
    <div class="contact-page__container">
      <div class="contact-page__form-wrapper">
        <div class="contact-page__image">
          <div class="contact-page__form-container">
            <h1 class="contact-page__title">Cake order form</h1>
            <div v-if="success" class="success-message">
              <h3>Thank you for your order!</h3>
              <p>We have received your request. We will contact you soon.</p>
              <button @click="success = false" class="reset-btn">New order</button>
            </div>

            <div v-else-if="error" class="error-message">
              <p>Oups, an error occurred. Please try again</p>
            </div>
            <form v-else ref="formRef" class="contact-form" @submit.prevent="send">
              <input
                type="text"
                name="pick_up"
                placeholder="Pick-up date"
                onfocus="this.type = 'date'"
                onblur="if (!this.value) this.type = 'text'"
                required
              />
              <input type="text" name="full_name" placeholder="Name" required />
              <div class="contact-form__grid">
                <input type="email" name="email" placeholder="Email address" required />
                <input type="tel" name="phone" placeholder="Phone" />
              </div>

              <input type="number" name="serving" placeholder="Number of servings" required />
              <input type="text" name="flavor" placeholder="Cake flavor" />

              <input type="text" name="fillings" placeholder="Cake filling" />
              <input type="text" name="optional_topings" placeholder="Optional toppings" />
              <input type="text" name="theme" placeholder="Cake theme & colors" />
              <input type="text" name="add-ons" placeholder="Cake add-ons (Name/Number)" />
              <input type="text" name="allergies" placeholder="Allergies" />
              <div class="allergen">
                <p>Allergen Disclaimer:</p>
                <p>
                  Thank you for choosing Cake by Asmaa! Our kitchen contains common allergens
                  including, but not limited to, nuts, dairy, gluten, and eggs. If you have food
                  allergies or dietary needs, please inform us before ordering. We’d be more than
                  happy to recommend an allergy-friendly bakery! Your safety is important to us!
                </p>
              </div>

              <button type="submit" class="contact-form__submit" :disabled="sending">
                {{ sending ? 'Sending...' : 'Submit' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-form {
  --border-color: #cfcfcf;
  --border-color-focus: #9a9a9a;
  --text-color: #1a1a1a;
  --placeholder-color: #8c8c8c;
  --button-bg: #d9c3a5;
  --button-bg-hover: #ccb08c;
  --radius: 999px;

  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Inter',
    'Segoe UI',
    sans-serif;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 1.25rem;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  &__full {
    width: 100%;
  }

  input,
  textarea {
    height: 48px;
    width: 100%;
    padding: 0.9rem 1.25rem;
    font-size: 0.95rem;
    color: var(--text-color);

    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    background: transparent;

    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &::placeholder {
      color: var(--placeholder-color);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.7rem;
    }

    &:focus-visible {
      border-color: var(--border-color-focus);
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.04);
    }
  }

  textarea {
    border-radius: 1.25rem;
    min-height: 180px;
    resize: vertical;
    padding-top: 1.1rem;
  }

  &__submit {
    align-self: flex-end;
    margin-top: 0.5rem;

    padding: 0.75rem 2.25rem;
    border-radius: 0.75rem;
    border: none;

    background-color: var(--button-bg);
    color: #fff;

    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    cursor: pointer;
    transition:
      background-color 0.2s ease,
      transform 0.15s ease,
      box-shadow 0.15s ease;

    &:hover {
      background-color: var(--button-bg-hover);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}
.contact-page {
  min-height: 100svh;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem 2rem 2rem;

    display: grid;
    gap: 4rem;
  }

  &__content {
    max-width: 460px;

    h1 {
      font-size: clamp(2.5rem, 4vw, 3.2rem);
      margin-bottom: 1.5rem;
    }
  }

  &__intro {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  &__infos {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 1.25rem 0;
      border-bottom: 1px solid #e3e0dc;

      strong {
        display: block;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: #b59b73;
        margin-bottom: 0.4rem;
      }

      span {
        color: #333;
        font-size: 0.95rem;
      }
    }
  }

  &__form-wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .contact-page__image {
      position: relative;
      width: 100%;
      background-image: url('@/assets/homeimg/cakelanding.jpeg');
      background-size: cover;
      background-position: center;
      padding: 2rem;

      display: flex;
      justify-content: center;
    }

    .contact-page__form-container {
      width: 100%;
      max-width: 720px;
      margin-bottom: 2rem;
    }

    .contact-page__title {
      font-size: clamp(1.5rem, 4vw, 2.2rem);
    }
  }
  .allergen {
    font-size: 0.75rem;
    color: #666;
    line-height: 1.4;
    text-align: justify;
  }
}

.contact-form {
  background: #fff;
  padding: 3rem;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.08);
}

@media (max-width: 900px) {
  .contact-page__container {
    grid-template-columns: 1fr;
    padding: 5rem 1rem 1rem 1rem;
  }

  .contact-page__content {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .contact-page__form-wrapper {
    .contact-page__image {
      padding: 1rem;
    }
  }
  .contact-form {
    background: #fff;
    padding: 1rem;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.08);
  }
}

.success-message {
  background: #fff;
  padding: 3rem;
  border-radius: 1.25rem;
  text-align: center;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.5s ease;

  h3 {
    color: #b59b73;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
  }

  .reset-btn {
    background: transparent;
    border: 1px solid #b59b73;
    color: #b59b73;
    padding: 0.5rem 1rem;
    border-radius: 99px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;

    &:hover {
      background: #b59b73;
      color: #fff;
    }
  }
}

.error-message {
  padding: 1rem;
  background-color: #fef2f2;
  color: #991b1b;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #fecaca;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
