import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigurationStore = defineStore('configuration', () => {
  const language = ref('en')

  return { language }
})
