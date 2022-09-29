import React, { Component, useState } from 'react';
import './experience.css';

const Experience = ({ image, onClick }) => {
	const style = {
		height: 80,
		marginRight: 5,
	};

	return (
		<img
			style={style}
			src={image}
			onClick={onClick}
			className='button glow-button'
		/>
	);
};

export default Experience;
