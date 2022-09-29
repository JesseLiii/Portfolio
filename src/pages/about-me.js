import React, { Component, useState } from 'react';

import jerry1 from '../img/jerry1.jpg';
import jerry2 from '../img/jerry2.jpg';
import arrow from '../img/arrow.png';

const AboutMe = () => {
	return (
		<section className='intro-gradient'>
			<h3 className='intro-h3'>JL</h3>
			<h1 className='intro-h1  animate__bounceIn'>Hey! I'm Jesse :)</h1>
			<div className='intro-h4-div'>
				<h4 className='intro-h4 animate__animated  animate__bounceIn animate__delay-1s'>
					Creator &amp; CS Student @ Georgia Tech,
				</h4>
				<p className='about-me-p'>
					Characterised by my constant proactivity and efficiency in
					learning and creating, I am someone who gives my all to
					learning from people around me and creating something
					impactful.
				</p>
				<p className='about-me-p'>
					Below are my mental models, lessons, and experience. Hope
					you'll find something interesting here!
				</p>
				<img className='intro-arrow' src={arrow} />
			</div>
			<div className='intro-img-div'>
				<img className='intro-img-1' width='200' src={jerry1} />
				<img className='intro-img-2' width='200' src={jerry2} />
			</div>
		</section>
	);
};

export default AboutMe;
