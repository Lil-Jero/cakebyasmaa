<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useEmailSend } from './emailSend'

const formRef = useTemplateRef<HTMLFormElement>('formRef')
const { send } = useEmailSend(formRef)
</script>

<template>
  <section class="contact-page">
    <div class="contact-page__container">
      <!-- LEFT CONTENT -->
      <div class="contact-page__content">
        <h1>Contact me</h1>

        <p class="contact-page__intro">
          Massa urna magnis dignissim id euismod porttitor vitae etiam viverra at adipiscing sit
          morbi aliquet mauris porttitor nisi.
        </p>

        <ul class="contact-page__infos">
          <li>
            <strong>Office</strong>
            <span>1234 N Spring St, Los Angeles, CA 90012, United States</span>
          </li>

          <li>
            <strong>Phone</strong>
            <span>+01 - 123 456 7890</span>
          </li>

          <li>
            <strong>Email</strong>
            <span>mail@example.com</span>
          </li>
        </ul>
      </div>

      <!-- RIGHT FORM -->
      <div class="contact-page__form-wrapper">
        <div class="contact-page__image">
          <form ref="formRef" class="contact-form" @submit.prevent="send">
            <div class="contact-form__grid">
              <input type="text" name="first_name" placeholder="First name" required />
              <input type="text" name="last_name" placeholder="Last name" required />

              <input type="email" name="email" placeholder="Email address" required />
              <input type="tel" name="phone" placeholder="Phone" />
            </div>

            <input
              class="contact-form__full"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea class="contact-form__full" name="message" placeholder="Message" required />

            <button type="submit" class="contact-form__submit">Submit</button>
          </form>
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
  margin: 0 auto;
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
    padding: 6rem 2rem;

    display: grid;
    grid-template-columns: 1.1fr 1fr;
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
    justify-content: center;
    align-items: flex-start;

    .contact-page__image {
      position: relative;
      width: 100%;
      min-height: 100%;

      background-image: url('@/assets/cakelanding.jpeg');
      background-size: cover;
      background-position: center;
      // background-repeat: no-repeat;

      // display: flex;
      // justify-content: center;
      // align-items: center;

      padding: 4rem 2rem;
    }
  }

  // ====== FORM STYLE ======
  .contact-form {
    --border-color: #cfcfcf;
    --border-color-focus: #9a9a9a;
    --text-color: #1a1a1a;
    --placeholder-color: #8c8c8c;
    --button-bg: #d9c3a5;
    --button-bg-hover: #ccb08c;
    --radius: 999px;

    max-width: 720px;
    margin: 0 auto;
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
}
// ===== END FORM STYLE ======

.contact-form {
  background: #fff;
  padding: 3rem;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.08);
}

@media (max-width: 900px) {
  .contact-page__container {
    grid-template-columns: 1fr;
    padding: 4rem 1.5rem;
  }

  .contact-page__content {
    max-width: 100%;
  }
}
</style>
