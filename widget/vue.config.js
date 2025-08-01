const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  productionSourceMap: false,
  assetsDir: 'assets',
  filenameHashing: true,
  configureWebpack: {
    performance: {
      hints: false,
    },
  },
});