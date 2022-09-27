import React, { Component, useState } from 'react';
import './tv.css';

const TV = () => {
	return (
		<div id='container'>
			<div id='monitor'>
				<div id='monitorscreen'>
					<ul className='social-list'>
						<li className='social-list__item'>
							<a
								className='social-list__link'
								target='_blank'
								href='https://www.github.com/JesseLii'
							>
								<i className='fab fa-github'></i>
							</a>
						</li>
						<li className='social-list__item'>
							<a
								className='social-list__link'
								target='_blank'
								href='https://www.instagram.com/jliczp'
							>
								<i className='fab fa-instagram'></i>
							</a>
						</li>
						<li className='social-list__item'>
							<a
								className='social-list__link'
								target='_blank'
								href='https://www.youtube.com/channel/UC4JEXXieRxJ9XwTe1M095bw'
							>
								<i className='fab fa-youtube'></i>
							</a>
						</li>
						<li className='social-list__item'>
							<a
								className='social-list__link'
								href='https://www.linkedin.com/in/jesseli751'
								target='_blank'
							>
								<i class='fab fa-linkedin-in'></i>
							</a>
						</li>
						<li className='social-list__item'>
							<a
								className='social-list__link'
								href='mailto:jesseli751@gmail.com'
								target='_blank'
							>
								<i class='fas fa-envelope'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TV;
