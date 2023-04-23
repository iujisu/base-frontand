const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: process.env.VUE_APP_PORT || 8080,
    proxy: {
      '/api': { 
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      }, 
    },
  },
})
