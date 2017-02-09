import React from 'react';
import landingDarker from '../../assets/landing-darker.png';

const HomeHeader = () =>
	<header>
		<div className="title">
			<h1>
				Knight and Nerdy
			</h1>
			<h2>
				<em>#2797</em>
			</h2>
			<p>
				<em>
					We are a high school robotics club dedicated to empowering the minds
					of future engineers.
				</em>
			</p>
			<p>
				(407) 680-3485 <br/>
				team2797@gmail.com
			</p>
			<p className="ad">
			 	Explore Below! <br/>
				<i className="fa fa-angle-down" aria-hidden="true"></i>
			</p>
		</div>
		<img src={landingDarker} alt="Robotics Icon" />
	</header>;


export default HomeHeader;
