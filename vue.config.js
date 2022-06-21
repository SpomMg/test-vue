const publicPath = process.env.NODE_ENV === 'production' ? '/test-vue/' : '/' 


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
