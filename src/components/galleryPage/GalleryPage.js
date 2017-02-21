import React from 'react';
import Navigation from '../common/Navigation.js';

const GalleryPage = () =>
	<div id="galleryPage">
		<Navigation />

		<h1>Gallery</h1>
		<div className="iFrameContainer">
			<iframe
				src="http://s1174.photobucket.com/user/KnightandNerdy/embed/slideshow/"
				style={{borderWidth: "0"}}
				width="800"
				height="600"
				frameBorder="0"
				scrolling="no"></iframe>
		</div>
	</div>;


export default GalleryPage;
