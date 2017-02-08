import React from 'react';
import comp1 from '../../assets/competition-gallery/comp-1.jpg';
import comp2 from '../../assets/competition-gallery/comp-2.jpg';
import comp3 from '../../assets/competition-gallery/comp-3.jpg';
import comp4 from '../../assets/competition-gallery/comp-4.jpg';
import comp5 from '../../assets/competition-gallery/comp-5.jpg';
import comp6 from '../../assets/competition-gallery/comp-6.jpg';
import comp7 from '../../assets/competition-gallery/comp-7.jpg';
import comp8 from '../../assets/competition-gallery/comp-8.jpg';
import comp9 from '../../assets/competition-gallery/comp-9.jpg';

const CompetitionCollage = () => {
	return (
		<ul>
			<li><img src={comp1} alt="Competition Pic" /></li>
			<li><img src={comp2} alt="Competition Pic" /></li>
			<li><img src={comp3} alt="Competition Pic" /></li>
			<li><img src={comp4} alt="Competition Pic" /></li>
			<li><img src={comp5} alt="Competition Pic" /></li>
			<li><img src={comp6} alt="Competition Pic" /></li>
			<li><img src={comp7} alt="Competition Pic" /></li>
			<li><img src={comp8} alt="Competition Pic" /></li>
			<li><img src={comp9} alt="Competition Pic" /></li>
		</ul>
	);
}

export default CompetitionCollage;
