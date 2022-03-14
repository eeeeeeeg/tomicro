const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/tabledemo',
  devServer: {
    port: 8081,  // 此端口号必须和基座中的micro-app中配置的url地址一致
    headers: {
      'Access-Control-Allow-Origin': '*' // 开启跨域
    }
  }
})
