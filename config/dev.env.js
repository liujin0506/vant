var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://wx.jhz.bjue.cn/"',
  APP_ID:'"wx693c794026c3d049"',
})
