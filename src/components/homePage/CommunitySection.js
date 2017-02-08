import React from 'react';
import schoolImage from '../../assets/community-gallery/school.jpg';

const CommunitySection = () =>
	<section className="community" id="community">
		<h1>
			<i className="fa fa-heart" aria-hidden="true"></i>
			In the Community
			<i className="fa fa-heart" aria-hidden="true"></i>
		</h1>
		<ul>
			<li>
				<div className="content">
					<h2>Sawgrass Bay Elementary</h2>
					<p>
						The team regularly visits the school to give demonstrations, help clubs, and
						provide other volunteer work. This year the team has primarily been aiding {"Sawgrass'"}
						own robotics club, The Bobcat Builders, organized just this year. The school also
						hosts regular STEM nights for students and parents, where the team shows off their
						robot and motivates children to pursue STEM related activities.
					</p>
				</div>
				<img src={schoolImage} />
			</li>
		</ul>
	</section>;


export default CommunitySection;
