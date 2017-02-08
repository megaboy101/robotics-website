import React from 'react';
import iconImage from '../../assets/icon.jpg';

const AboutSection = () =>
	<section className="about" id="about">
		<h1>
			<i className="fa fa-flip-horizontal fa-wrench" aria-hidden="true"></i>
			Our Mission
			<i className="fa fa-wrench" aria-hidden="true"></i>
		</h1>
		<blockquote>
			"We build more than just robots, we build family"<br/>
			- Rishi Basdeo, President
		</blockquote>
		<p>
			Established in 2009, the East Ridge High School "Knight and Nerdy" Robotics
			club has distinguished itself as an organization encouraging teamwork,
			dedication, and leadership. Originally lead by Rick Croteau, it is
			currently headed by Justin King. The team competes annually
			in the FIRST Robotics Competition as well as actively engages in their
			local community.
		</p>
		<img src={iconImage} alt="Robotics Logo" />
	</section>;

export default AboutSection;
