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
        url: "http://128.52.139.178:8055/"
      }
    }
  }
})