import React, { Component, useState } from 'react';
import './experience.css';

const Experience = ({ title, text }) => {
	const style = {};

	return (
		<div style={{ ...style }} class='experience-block'>
			<h2 style={{ color: '#242424' }} className='about-me-title'>
				{title}
			</h2>
			<div>{text}</div>
		</div>
	);
};

export default Experience;
