import React, { Component } from 'react';
import { get_mentors } from '../../api/api.js';


class MentorSubSection extends Component {
	constructor(props) {
		super(props);

		this.state = {names: [], roles: [], pictures: [], header: ''};
	}

	componentDidMount() {
		get_mentors().then(mentors => {
			this.setState({
				names: mentors.names,
				roles: mentors.roles,
				header: mentors.header,
				pictures: mentors.pictures
			});
		});
	}

	render() {
		return (
			<div>
				<h2>{this.state.header}</h2>
				<ul>
					<li>
						<img src={this.state.pictures[0]} />
						<h3>{this.state.names[0]}</h3>
						<p>{this.state.roles[0]}</p>
					</li>
					<li>
						<img src={this.state.pictures[1]} />
						<h3>{this.state.names[1]}</h3>
						<p>{this.state.roles[1]}</p>
					</li>
					<li>
						<img src={this.state.pictures[2]} />
						<h3>{this.state.names[2]}</h3>
						<p>{this.state.roles[2]}</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default MentorSubSection;
