import React, { Component } from 'react';


const CompetitionCollage = ({ images }) => {
	let imageHtml = [];
	let id = 0;
	for (let image of images) {
		imageHtml.push(<li key={id}><img src={image} alt="Competition Pic" /></li>);
		id++;
	}

	return (
		<ul>
			{imageHtml}
		</ul>
	);
};

export default CompetitionCollage;
