import React from 'react';
import Navigation from '../common/Navigation.js';

const CalendarPage = () =>
	<div id="calendarPage">
		<Navigation />

		<h1>Calendar</h1>

 		<iframe
			src="https://calendar.google.com/calendar/embed?src=team2797%40gmail.com&ctz=America/New_York"
			style={{borderWidth: "0", position: "relative", left: "20%"}}
			width="800"
			height="600"
			frameBorder="0"
			scrolling="no">
 		</iframe>
	</div>;

export default CalendarPage;
