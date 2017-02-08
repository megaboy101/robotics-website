import React from 'react';
import HomeHeader from './HomeHeader.js';
import HomeMain from './HomeMain.js';
import Navigation from '../common/Navigation.js';

const HomePage = () =>
	<div>
		<Navigation />
		<HomeHeader />
		<HomeMain />
	</div>;



export default HomePage;
