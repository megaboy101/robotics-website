import React from 'react';
import CompetitionCollage from './CompetitionCollage.js';

const CompetitionSection = () =>
	<section className="competition" id="competition">
		<div className="explanation">
			<h1>In Competition</h1>
			<blockquote>
				"Competition is exciting because you get to see all your hard work pay off!"<br/>
				- Gabriella DeAngelo, Officer
			</blockquote>
			<p>
				FIRST focuses on sparking the minds of students in science and technology
				while preparing them with life skills. FIRST has two core values, GraciouS
				Professionalism (GP) and Coopertition. GP encourages high quality work,
				emphasizes the value of others, and respects individuals throughout the
				competition. Coopertition is displaying unqualified kindness and respect
				in the face of fierce competition.
			</p>
		</div>

		<CompetitionCollage />
	</section>;


export default CompetitionSection;
