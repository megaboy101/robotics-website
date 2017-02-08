/* eslint-disable no-undef */
import path from 'path';

export default {
	entry: path.join(__dirname, 'src/index.js'),

	output: {
		path: path.join(__dirname + '/dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},

	target: 'web',

	devServer: {
		contentBase: './src'
	},

	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
			{test: /\.css$/, exclude: /node_modules/, loader: ['style-loader', 'css-loader']},
			{test: /\.scss$/, exclude: /node_modules/, loader: ['style-loader', 'css-loader', 'sass-loader']},
			{ test: /\.(png|jpg)$/, loader: ['url-loader']}
		]
	}
};
