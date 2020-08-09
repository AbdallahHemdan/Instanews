// vue.config.js
module.exports = {
  // options...
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/_settings.scss";`,
      },
    },
  },
}