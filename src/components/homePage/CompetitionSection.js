import React, { Component } from 'react';
import { get_competitionSection } from '../../api/api.js';
import CompetitionCollage from './CompetitionCollage.js';

class CompetitionSection extends Component {
	constructor(props) {
		super(props);

		this.state = {description: '', header: '', quote: '', quoteAuthor: '', images: []};
	}

	componentDidMount() {
		get_competitionSection()
		.then(content => {
			this.setState({
				description: content.description,
				header: content.header,
				quote: content.quote,
				quoteAuthor: content.quoteAuthor,
				images: content.images.map(image => image.fields.file.url)
			});
		});
	}

	render() {
		return (
			<section className="competition" id="competition">
				<div className="explanation">
					<h1>{this.state.header}</h1>
					<blockquote>
						{this.state.quote}<br />
						- {this.state.quoteAuthor}
					</blockquote>
					<p>
						{this.state.description}
					</p>
				</div>

				<CompetitionCollage images={this.state.images} />
			</section>
		);
	}
}

export default CompetitionSection;
