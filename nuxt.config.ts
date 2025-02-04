// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-04",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            mono: ["monospace"],
          },
          colors: {
            beige: "hsl(48deg 33.33% 97.06%)",
          },
        },
      },
    },
  },
});
