import React, { Component, useState } from 'react';

import './App.css';

import 'animate.css/animate.min.css';

import Book from './components/book/book';
import TV from './components/tv/tv';
import BlankBook from './components/book/BlankBook';
import AboutMe from './pages/about-me';
import Principles from './pages/principles';
import HiringMe from './pages/hiring-me';

function App() {
	// const [organisations, setOrganisations] = useState('show');
	// const [creativity, setCreativity] = useState('hide');
	// const [cs, setCS] = useState('hide');
	const [currentPage, setCurrentPage] = useState(0);
	const pages = [<AboutMe />, <Principles />, <HiringMe />];

	// function handleNavLink() {
	// 	document.body.classList.remove('nav-open');
	// }

	// function handleIntro() {
	// 	console.log('intro');
	// 	document.body.classList.toggle('intro-animation');
	// }

	return (
		<div className='App'>
			<div className='leftNav'>
				<div>
					<TV />
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					<BlankBook
						borderColor='#942343'
						left={true}
						height={45}
						marginLeft='15%'
						width={'60%'}
					/>
					<Book
						color='#a688bd'
						title='Lessons (blog)'
						height={40}
						onClick={() => {
							window.open(
								'https://medium.com/@fish_in_a_pool',
								'_blank'
							);
						}}
						marginLeft={'5%'}
						width={'85%'}
					/>
					<Book
						color='#0DB672'
						height={40}
						marginLeft={'10%'}
						width={'75%'}
						title='Meetr'
						onClick={() => {
							window.open(
								'http://www.meetrofficial.com',
								'_blank'
							);
						}}
					/>
					<BlankBook
						borderColor='#004d25'
						left={false}
						height={40}
						width={'70%'}
						marginLeft={'20%'}
					/>
					<Book
						color='#ed6d35'
						marginLeft={'10%'}
						height={40}
						width={'80%'}
						title='Hiring Me?'
						onClick={() => setCurrentPage(2)}
					/>
					<Book
						color='#0073a8'
						title='My Principles'
						marginLeft={'15%'}
						width={'70%'}
						onClick={() => {
							setCurrentPage(1);
						}}
					/>
					<BlankBook
						borderColor='#622d18'
						left={false}
						height={40}
						width={'85%'}
						marginLeft={'5%'}
					/>
					<Book
						color='#fcc800'
						title='Home'
						marginLeft={10}
						height={40}
						width={200}
						onClick={() => {
							setCurrentPage(0);
						}}
					/>
					<div
						style={{
							borderRadius: 100,
							background: '#ae8280',
							width: '90%',
							alignSelf: 'center',
							height: 10,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingRight: '20%',
							paddingLeft: '20%',
						}}
					>
						<div
							style={{
								marginTop: 10,
								height: 10,
								width: 10,
								background: '#855f6d',
								borderRadius: 100,
							}}
						/>
						<div
							style={{
								marginTop: 10,
								height: 10,
								width: 10,
								background: '#855f6d',
								borderRadius: 100,
							}}
						/>
					</div>
				</div>
			</div>
			<div className='mainPage'>{pages[currentPage]}</div>
		</div>
	);
}

export default App;
