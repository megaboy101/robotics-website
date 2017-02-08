import React from 'react';
import MentorSubSection from './MentorSubSection';
import StudentSubSection from './StudentSubSection.js';

const TeamSection = () =>
<section className="team" id="team">
	<h1>
		<i className="fa fa-users" aria-hidden="true"></i>
		Our Team
		<i className="fa fa-users" aria-hidden="true"></i>
	</h1>

	<MentorSubSection />

	<StudentSubSection />
</section>

export default TeamSection;
