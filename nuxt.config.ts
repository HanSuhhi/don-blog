// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    Bun.resolveSync("assets/styles/index.css", import.meta.dir)
  ],
  modules: [
    ["@nuxtjs/eslint-module", {
      lintOnStart: false,
      fix: true
    }],
    // ["@nuxtjs/stylelint-module", {
    //   fix: true
    // }],
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "nuxt-lodash",
    "nuxt-icon"
  ],
  vite: {
    vue: {
      script: {
        propsDestructure: true
      }
    }
  },
  typescript: {
    typeCheck: true
  },
  devServer: {
    port: 51714
  },
  googleFonts: {
    families: {
      "Fira Code": true,
      "Source Code Pro": true
    }
  }
});
