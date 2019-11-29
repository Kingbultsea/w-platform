// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // webpack 模块可视化工具

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : './',
  assetsDir: './',
  devServer: {
    disableHostCheck: true
  }
}
