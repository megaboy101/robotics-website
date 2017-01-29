// Standard node path module
var path = require('path');

module.exports = {
    // Compiler entry point
	entry: './index.js',

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

    // Compiler output point
	output: {
		path: '/',
		filename: 'bundle.js'
	}
};
