var webpack = require('webpack');
var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/client/index.html',
  filename: 'index.html',
  inject: 'body'
})


var config = {
  entry: APP_DIR + '/index.js',
  output: {
	path: BUILD_DIR,
	filename: 'bundle.js'
  },
  module : {
	loaders : [
	  {
		test : /\.jsx?/,
		include : APP_DIR,
		loader : 'babel-loader'
	  }
	]
  },
  plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;