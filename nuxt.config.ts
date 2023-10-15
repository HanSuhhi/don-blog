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
    ["@nuxtjs/stylelint-module", {
      fix: true,
      lintOnStart: false
    }]
  ],
  typescript: {
    typeCheck: true
  },
  devServer: {
    port: 51714
  }
});
