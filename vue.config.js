const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'prodution' ? '/' : '/'

module.exports = {
  chainWebpack: (config) => {
    config
      .resolve.alias.set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
  },
  lintOnSave: false,
  baseUrl: BASE_URL,
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
