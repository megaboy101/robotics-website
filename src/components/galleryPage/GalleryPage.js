import React from 'react';
import Navigation from '../common/Navigation.js';
import Collage from './Collage.js';

const GalleryPage = () =>
	<div id="galleryPage">
		<Navigation />

		<h1>Gallery</h1>
		<h2>Click to view</h2>
		<Collage />
	</div>;


export default GalleryPage;
