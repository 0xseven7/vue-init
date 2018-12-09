// webpack使用的配置, 用来自动补全alias路径

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      '_c': resolve('src/components'),
      '_v': resolve('src/views')
    }
  }
}
