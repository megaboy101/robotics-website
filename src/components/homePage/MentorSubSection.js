import React from 'react';
import King from '../../assets/mentor-pics/mentor-king.png';
import DeTuro from '../../assets/mentor-pics/mentor-deturo.png';
import Sigmund from '../../assets/mentor-pics/mentor-sigmund.png';

const MentorSubSection = () =>
	<div>
		<h2>Mentors</h2>
		<ul>
			<li>
				<img src={King} />
				<h3>Justin King</h3>
				<p>Chairman</p>
			</li>
			<li>
				<img src={Sigmund} />
				<h3>Michael Sigmund</h3>
				<p>Electrical Engineer</p>
			</li>
			<li>
				<img src={DeTuro} />
				<h3>Frank De Turo</h3>
				<p>
					Mechanical Systems<br/>
					Woodwork
				</p>
			</li>
		</ul>
	</div>;


export default MentorSubSection;
