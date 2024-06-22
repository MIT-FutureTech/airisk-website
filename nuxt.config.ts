// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-particles', "@nuxt/icon", "nuxt-headlessui"],
  css: ["@/assets/css/main.css"],

  tailwindcss: {
    exposeConfig: true,
  },
})