var path = require('path');

module.exports = {
	entry: './index.js',
	context: path.resolve('js'),

	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader"},
			{test: /\.scss$/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader"},
			{test: /\.(png|jpg)$/, exclude: /node_modules/, loader: "url-loader"}
		]
	},

	output: {
		path: '/',
		publicPath: path.resolve('/public/assets/js/'),
		filename: 'bundle.js'
	}
}
