import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import HomePage from './components/homePage/HomePage.js';
import CalendarPage from './components/calendarPage/CalendarPage.js';
import GalleryPage from './components/galleryPage/GalleryPage.js';
import SupportPage from './components/supportPage/SupportPage.js';

export default (
	<Router history = {browserHistory}>
		<Route path={'/'} component={HomePage} />
		<Route path={'/calendar'} component={CalendarPage} />
		<Route path={'/gallery'} component={GalleryPage} />
		<Route path={'/support'} component={SupportPage} />
	</Router>
);
