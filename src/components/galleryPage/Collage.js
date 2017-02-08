import React, { Component } from 'react';
import comp1 from '../../assets/competition-gallery/comp-1.jpg';
import comp2 from '../../assets/competition-gallery/comp-2.jpg';
import comp3 from '../../assets/competition-gallery/comp-3.jpg';
import comp4 from '../../assets/competition-gallery/comp-4.jpg';
import comp5 from '../../assets/competition-gallery/comp-5.jpg';
import comp6 from '../../assets/competition-gallery/comp-6.jpg';
import comp7 from '../../assets/competition-gallery/comp-7.jpg';
import comp8 from '../../assets/competition-gallery/comp-8.jpg';
import comp9 from '../../assets/competition-gallery/comp-9.jpg';

class Collage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {highlightedImage: []}

		this.highlight = this.highlight.bind(this);
		this.clear = this.clear.bind(this);
	}

	clear() {
		this.setState({highlightedImage: []});
	}

	highlight(event) {
		const img = <div id="highlighted" onClick={this.clear}><img src={event.target.src} alt="Competition Pic" /></div>;

		this.setState({highlightedImage: img})
	}

	render() {
		return (
			<div>
				{this.state.highlightedImage}
				<ul>
					<li><img id="1" src={comp1} alt="Competition Pic" onClick={this.highlight} /></li>
					<li><img id="2" src={comp2} alt="Competition Pic" onClick={this.highlight} /></li>
					<li><img id="3" src={comp3} alt="Competition Pic" onClick={this.highlight} /></li>
					<li><img id="4" src={comp4} alt="Competition Pic" onClick={this.highlight} /></li>
					<li><img id="5" src={comp5} alt="Competition Pic" onClick={this.highlight} /></li>
					<li><img id="6" src={comp6} alt="Competition Pic" onClick={this.highlight} /></li>
					<li><img id="7" src={comp7} alt="Competition Pic" onClick={this.highlight} /></li>
					<li><img id="8" src={comp8} alt="Competition Pic" onClick={this.highlight} /></li>
					<li><img id="9" src={comp9} alt="Competition Pic" onClick={this.highlight} /></li>
				</ul>
			</div>
		);
	}
}

export default Collage;
