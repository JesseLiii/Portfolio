import React, { Component, useState } from 'react';
import './book.css';

const Book = ({
	color,
	title,
	marginLeft = 0,
	height = 40,
	width = 120,
	onClick = () => {},
}) => {
	const style = {
		cursor: 'pointer',
		position: 'relative',
		background: '#000',
		transition: 'transform ease 300ms',
		background: color,
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		minHeight: 30,
		marginLeft,
		height,
		width,
		// paddingRight: '10%',
		// paddingLeft: '10%',
	};

	return (
		<div className='bg'>
			<div style={{ ...style }} class='book2' onClick={onClick}>
				<div className='book-title'>{title.toUpperCase()}</div>
				<div
					style={{
						position: 'absolute',
						height: height,
						width: '90%',
						content: '',
						top: 0,
						left: '5%',
						borderLeftWidth: 20,
						borderLeftColor: '#fff',
						borderLeftStyle: 'double',
						borderRightWidth: 20,
						borderRightColor: '#fff',
						borderRightStyle: 'double',
					}}
				></div>
			</div>
		</div>
	);
};

export default Book;
