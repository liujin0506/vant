var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://wx.jd.risay.cn/"',
  APP_ID:'"wx64bcdf9da14daba1"',
})
