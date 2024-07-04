// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "nuxt-headlessui",
    'nuxt-particles',
    "nuxt-directus"
  ],
  css: ["@/assets/css/main.css"],

  tailwindcss: {
    exposeConfig: true,
  },
  particles: {
    mode: 'slim' // 'full' | 'slim' | 'basic' | 'custom'
  },

  runtimeConfig: {
    public: {
      apiKey: '',
      sheetsBaseUrl: '',
      includeGridData: '',
      spreadsheetId: '',


      directus: {
        url: "https://airisk.mit.edu/directus/",
      }
    }
  }
})