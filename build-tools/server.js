import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import path from 'path';
import favicon from 'serve-favicon';
import config from '../webpack.config.dev.js';
import colors from 'colors';

const port = process.env.PORT || 3000;;
const app = express();
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));
app.use(favicon(path.join(__dirname, '../favicon.ico')));

/* eslint-disable no-undef */
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

/* eslint-disable no-console */
app.listen(port, () => {
	console.log(`Server starting on port ${port}, please wait for Webpack`.blue);
});
