var webpack = require('webpack');
var path = require('path');
var config = require('./config.json');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:'+config.port,
		'webpack/hot/dev-server',
		'./src/main'
	],
	output: {
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		extensions: ['', '.js']
	},
	//devtool: 'eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				include: path.join(__dirname, 'src'),
				exclude: path.join(__dirname, 'node_modules'),
				query: {
					cacheDirectory: true,
					plugins: ['transform-runtime'],
					presets: ['es2015', 'react', 'stage-0']
				}
			}, {
				test: /\.css?$/,
				loader: 'style-loader!css-loader',
				include: [
					path.join(__dirname, 'assets'),
					path.join(__dirname, 'src')
				]
			}
		]
	}
};
