// Node server framework
var express = require('express');
// Code compiler
var webpack = require('webpack');
// Middleware to run webpack on express
var webpackMiddleware = require('webpack-dev-middleware');
// Standard node path module
var path = require('path');
// Production mode config file imported from webpack.config.prod.js
var config = require('./webpack.prod.config.js');

// Initialize express server instance
var app = express();

// Port variable, either process.env.PORT for heroku or default 8080
var port = process.env.PORT || 8080;

// Initialize compiler
var compiler = webpack(config);


// Configure webpack compiler to run through express
app.use(webpackMiddleware(compiler, {
	publicPath: path.resolve('/public/assets/js/')
}));


// Allow express to server static files in public folder
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/gallery', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/gallery.html'));
});

app.get('/calendar', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/calendar.html'));
});

// Activate server at specified port
app.listen(port, function() {
	console.log("Server online on port: " + port);
})
