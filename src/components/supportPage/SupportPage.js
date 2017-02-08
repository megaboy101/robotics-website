import React from 'react';
import Navigation from '../common/Navigation.js';

const SupportPage = () =>
	<div id="supportPage">
		<Navigation />

		<h1>Support Us</h1>
		<main>
			<div className="donate-tile donate-free">
				<p>Shoutout</p>
				<h2>Free</h2>
				<p className="sub-text">
					Throw us a quick thumbs up,<hr/>
					we really appreciate the feedback
				</p>
				<button>THUMBS UP!</button>
			</div>
			<div className="donate-tile donate-premium">
				<p>Donate</p>
				<h2>$50</h2>
				<p className="sub-text">
					We humbly accept any donations, <hr/>
					Thank you for your support!
				</p>
				<button>Donate!</button>
			</div>
		</main>

		<footer>
			<h1>Any questions? We are here for you</h1>
			<div className="contact-info">
				<p>Contact us: <span>team2797@gmail.com</span></p>
				<p>Social Media:</p>
			</div>
		</footer>
	</div>


export default SupportPage;
