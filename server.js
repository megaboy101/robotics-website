var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var path = require('path');


var app = express();

var port = process.env.PORT || 3000;


app.use(webpackMiddleware(webpack({
	entry: './index.js',
	context: path.resolve('js'),
	module: {
		loaders: [
			{test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader"},
			{test: /\.scss$/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader"},
			{test: /\.(png|jpg)$/, exclude: /node_modules/, loader: "url-loader"}
		]
	},
	output: {
		path: '/',
		filename: 'bundle.js'
	}
}), {
	publicPath: path.resolve('/public/assets/js/'),
	index: 'index.html'
}))


app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
	res.end();
});

app.listen(port, function() {
	console.log("Server online on port: " + port);
})
