import React from 'react';
import Navigation from '../common/Navigation.js';

const CalendarPage = () =>
	<div id="calendarPage">
		<Navigation />

		<h1>Calendar</h1>

 		<iframe
			src="https://calendar.google.com/calendar/embed?title=Knight%20%26%20Nerdy%20Calendar&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;ctz=America%2FNew_York"
			style={{borderWidth: "0", position: "relative", left: "20%"}}
			width="800"
			height="600"
			frameBorder="0"
			scrolling="no">
 		</iframe>
	</div>;

export default CalendarPage;
