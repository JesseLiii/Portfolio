import React, { Component, useState } from 'react';
import './experience.css';
import 'animate.css';

const ExperienceBlock = ({ card, className }) => {
	const style = {
		position: 'absolute',
		// height: '100%',
		width: '110%',
		zIndex: 11,
	};

	const colours = ['#ffd166', '#06d6a0', '#4cc9f0', '#ef233c', '#ef476f'];

	const { title, text, image, stats } = card;

	return (
		<div
			style={style}
			className={'experience-block animate__animated ' + className}
		>
			<div className='title-section'>
				<img src={image} style={{ width: '20%' }}></img>
				<h2 className='about-me-title '>{title}</h2>
			</div>
			<div className='description-section'>
				<p style={{ fontWeight: 500 }}>{text}</p>
				{stats.map((stat, index) => (
					<span style={{ color: colours[index], fontWeight: 500 }}>
						{stat + ', '}
					</span>
				))}
			</div>
		</div>
	);
};

export default ExperienceBlock;
