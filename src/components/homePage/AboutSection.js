import React, { Component } from 'react';
import iconImage from '../../assets/icon.jpg';
import { get_aboutSection } from '../../api/api.js';

class AboutSection extends Component {
	constructor(props) {
		super(props);

		this.state = {aboutContent: ''}
	}

	componentDidMount() {
		get_aboutSection()
		.then(about => {
			this.setState({aboutContent: about.content});
		});
	}

	render() {
		return (
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
					{this.state.aboutContent}
				</p>
				<img src={iconImage} alt="Robotics Logo" />
			</section>
		);
	}
}

export default AboutSection;