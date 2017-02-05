// Standard node path module
var path = require('path');

var webpack = require('webpack');

module.exports = {
    // Compiler entry point
	entry: {
        home: './home.js',
        gallery: './gallery.js',
		calendar: './calendar.js'
    },

    // Set compiler to only look in 'js' folder
	context: path.resolve('js'),

    // Compliler "loaders"
	module: {
		loaders: [
            // Bundle regular css files
			{test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader"},
            // Compile and bundle scss files
			{test: /\.scss$/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader"},
            // Compile image files
			{test: /\.(png|jpg)$/, exclude: /node_modules/, loader: "url-loader"}
		]
	},

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],

    // Compiler output point
	output: {
		path: '/',
		filename: '[name].bundle.js'
	}
};
