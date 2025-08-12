import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',  // <-- ici, au niveau racine, pas dans vite.plugins
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
