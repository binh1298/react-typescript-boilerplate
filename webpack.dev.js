const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    port: process.env.APP_ROOT_PORT || 3000,
    historyApiFallback: true,
    hot: true
  },
});
