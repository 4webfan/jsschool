var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var config = require('./config.json');

new WebpackDevServer(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath,
	hot: true,
	quiet: false,
	noInfo: false,
	historyApiFallback: true
}).listen(config.port, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}

	console.log('Listening at localhost:', config.port);
});