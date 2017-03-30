import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import './stylesheets/main.scss';
import contentful from 'contentful';


render(
	<App />,
	document.getElementById('app')
);
