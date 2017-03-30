import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import compression from 'compression';

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, '../favicon.ico')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
	if (err)
		console.log(err);
	console.log('Production server online on port ' + port);
});
