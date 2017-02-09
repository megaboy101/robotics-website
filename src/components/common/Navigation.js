import React, { Component } from 'react';
import { Link } from 'react-router';

const Navigation = () =>
	<nav>
		<i className="fa fa-bars" aria-hidden="true"></i>
		<a href="/#about">About us</a>
		<a href="/#team">The Team</a>
		<a href="/#competition">Competitions</a>
		<a href="/#community">Community</a>
		<Link to="/gallery">Gallery</Link>
		<Link to="/calendar">Calendar</Link>
		<Link to="/support">Support Us</Link>
	</nav>;


export default Navigation;
