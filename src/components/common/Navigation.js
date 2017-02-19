import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			dropdownActive: false
		};

		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	toggleDropdown() {
		if (window.innerWidth <= 885) {
			let dropdown = document.getElementById('dropdown');

			if (this.state.dropDownActive) {
				dropdown.style.display = 'none';
				this.setState({dropDownActive: false});
			}
			else {
				dropdown.style.display = 'flex';
				this.setState({dropDownActive: true});
			}
		}
	}

	render() {
		return (
			<nav>
				<i className="fa fa-bars" onClick={this.toggleDropdown} aria-hidden="true"></i>
				<div id="dropdown">
					<a onClick={this.toggleDropdown} href="/#about">About us</a>
					<a onClick={this.toggleDropdown} href="/#team">The Team</a>
					<a onClick={this.toggleDropdown} href="/#competition">Competitions</a>
					<a onClick={this.toggleDropdown} href="/#community">Community</a>
					<Link to="/gallery">Gallery</Link>
					<Link to="/calendar">Calendar</Link>
					<Link to="/support">Support Us</Link>
				</div>
			</nav>
		);
	}
}


export default Navigation;
