
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
  },
  css: ["@/assets/css/tailwind.css", "@/assets/scss/main.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  googleFonts: {
    families: {
      // a simple name
      Roboto: true,

      // a name with spaces
      "Josefin+Sans": true,
    },
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL_DEVELOPMENT,
    API_PRODUCTION_URL: process.env.API_BASE_URL_PRODUCTION,
  },
  // modules: ["@nuxtjs/axios"],
});
