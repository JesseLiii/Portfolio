import React, { Component, useState } from 'react';
import './book.css';

const BlankBook = ({
	borderColor,
	marginLeft = 0,
	height = 30,
	width = 120,
	left = true,
}) => {
	const style = {
		position: 'relative',
		width: 140,
		background: '#fffff0',
		border: '5px solid ' + borderColor,
		borderRadius: '10px 0 0 10px',
		transition: 'transform ease 300ms',
		paddingLeft: '10%',
		paddingRight: '10%,',
		marginLeft,
		height,
		width,
	};

	const bookCutStyle = {
		background: '#000',
		margin: '0 0 0 97%',
		width: 5,
		height: 30,
	};

	style['border' + (left ? 'Right' : 'Left') + 'Style'] = 'none';
	style.borderRadius = left ? '10px 0 0 10px' : '0 10px 10px 0';

	return <div style={style}></div>;
};

export default BlankBook;
