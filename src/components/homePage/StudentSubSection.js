import React, { Component } from 'react';
import { get_teams } from '../../api/api.js';

class StudentSubSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			teams: [
				{header: '', description: ''},
				{header: '', description: ''}
			]
		};
	}

	componentDidMount() {
		get_teams().then(teams => {
			this.setState({teams});
		});
	}

	render() {
		return (
			<div>
				<h2>Student Teams</h2>
				<div className="teams">
					<div className="mechanical">
						<i className="fa fa-cogs" aria-hidden="true"></i>
						<h3>{this.state.teams[0].header}</h3>
						<p>
							{this.state.teams[0].description}
						</p>
					</div>
					<div className="programming">
						<i className="fa fa-code" aria-hidden="true"></i>
						<h3>{this.state.teams[1].header}</h3>
						<p>
							{this.state.teams[1].description}
						</p>
					</div>
				</div>
			</div>
		);
	}
}


export default StudentSubSection;
