const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  // 结果 => 'platforms/web/entry-runtime-with-compiler'
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  // 结果 => 'compiler'
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'),
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  sfc: resolve('src/sfc')
}
