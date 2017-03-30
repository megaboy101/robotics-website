import React, { Component } from 'react';
import { get_supportPage } from '../../api/api.js';
import Navigation from '../common/Navigation.js';
import DonationCard from './DonationCard.js';

class SupportPage extends Component {
	constructor(props) {
		super(props);

		this.state = {email: '', header: '', paymentMethods: []};
	}

	componentDidMount() {
		get_supportPage()
		.then(content => {
			this.setState({
				email: content.email,
				header: content.header,
				paymentMethods: content.paymentMethods
			});
		});
	}

	render() {
		let id = 0;
		let paymentHtml = this.state.paymentMethods.map(method => {
			id++;
			return(
				<DonationCard
					key={id}
					amount={method.fields.amount}
					buttonContent={method.fields.buttonContent}
					upperRemark={method.fields.upperRemark}
					lowerRemark={method.fields.lowerRemark}
					title={method.fields.title} />
			);
		});

		return (
			<div id="supportPage">
				<Navigation />

				<h1>{this.state.header}</h1>
				<main>
					{paymentHtml}
				</main>

				<footer>
					<h1>Any questions? We are here for you</h1>
					<div className="contact-info">
						<p>Contact us: <span>{this.state.email}</span></p>
					</div>
				</footer>
			</div>
		);
	}
}


export default SupportPage;
