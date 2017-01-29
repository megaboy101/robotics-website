// Node server framework
var express = require('express');
// Code compiler
var webpack = require('webpack');
// Middleware to run webpack on express
var webpackMiddleware = require('webpack-dev-middleware');
// Standard node path module
var path = require('path');
// Production mode config file imported from webpack.config.prod.js
var config = require('./webpack.config.prod.js');

// Initialize express server instance
var app = express();

// Port variable, either process.env.PORT for heroku or default 8080
var port = process.env.PORT || 8080;

// Initialize compiler
var compiler = webpack(config);


// Configure webpack compiler to run through express
app.use(webpackMiddleware(compiler, {
	publicPath: path.resolve('/public/assets/js/'),
	index: 'index.html'
}));


// Allow express to server static files in public folder
app.use(express.static('public'));

// Single route at /, sends index file and closes server listening
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
	res.end();
});

// Activate server at specified port
app.listen(port, function() {
	console.log("Server online on port: " + port);
})
