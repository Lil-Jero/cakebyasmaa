// emailSend.ts
import { ref, toValue, type MaybeRefOrGetter } from 'vue'
import emailjs from '@emailjs/browser'

export function useEmailSend(formRef: MaybeRefOrGetter<HTMLFormElement | null>) {
  const sending = ref(false)
  const success = ref(false)
  const error = ref(false)

  async function send() {
    const form = toValue(formRef)

    sending.value = true
    success.value = false
    error.value = false

    try {
      if (form) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        success.value = true
        form.reset()
      }
    } catch (err) {
      console.error(err)
      error.value = true
    } finally {
      sending.value = false
    }
  }

  return { send, sending, success, error }
}
