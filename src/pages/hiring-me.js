import React, { Component, useState } from 'react';
import { Row, Col, Collapse } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import Experience from '../components/experience/experience';
const HiringMe = () => {
	const { Panel } = Collapse;

	return (
		<section className='hiring-me'>
			<Row>
				<Col span={24} className='about-me-col-side'>
					<h2 className='about-me-title'>The Boring Version: </h2>
					<a href='Jesse_Li_Resume_CS.pdf' className='btn' download>
						Software Engineering CV
					</a>
					<a href='Jesse_Li_Resume_PM.pdf' className='btn' download>
						Product Management CV
					</a>
				</Col>
			</Row>
			<Row>
				<Experience
					title={'Internship'}
					text={'asdfasdfasdf'}
				></Experience>
			</Row>
		</section>
	);
};

export default HiringMe;
