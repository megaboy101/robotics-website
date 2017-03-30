import React, { Component } from 'react';
import { get_communitySection } from '../../api/api.js';
import CommunityStory from './CommunityStory.js';

/*const CommunitySection = () =>
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
	</section>;*/

class CommunitySection extends Component {
	constructor(props) {
		super(props);

		this.state = {header: '', stories: []};
	}

	componentDidMount() {
		get_communitySection()
		.then(content => {
			this.setState({
				header: content.header,
				stories: content.stories.map(story => story.fields)
			});
		});
	}

	render() {
		let id = 0;
		let storyHtml = this.state.stories.map(story => {
			id++;
			return (
				<CommunityStory
					key={id}
					title={story.title}
					description={story.description}
					image={story.image.fields.file.url} />
			);
		});

		return (
			<section className="community" id="community">
				<h1>
					<i className="fa fa-heart" aria-hidden="true"></i>
					{this.state.header}
					<i className="fa fa-heart" aria-hidden="true"></i>
				</h1>
				<ul>
					{storyHtml}
				</ul>
			</section>
		);
	}
}

export default CommunitySection;
