import React, { Component, useEffect, useState } from 'react';
import { Row, Col, Collapse } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import Experience from '../components/experience/experience';

import weapon1 from '../assets/weapon1.png';
import weapon2 from '../assets/weapon2.png';
import weapon3 from '../assets/weapon3.png';
import weapon4 from '../assets/weapon4.png';
import weapon5 from '../assets/weapon5.png';

import potion1 from '../assets/potion1.png';
import potion2 from '../assets/potion2.png';
import potion3 from '../assets/potion3.png';
import potion4 from '../assets/potion4.png';
import potion5 from '../assets/potion5.png';

import shield1 from '../assets/shield1.png';
import shield2 from '../assets/shield2.png';
import shield3 from '../assets/shield3.png';
import shield4 from '../assets/shield4.png';
import shield5 from '../assets/shield5.png';

import Sammy from '../assets/Sammy.png';

import './hiring-me.css';
import ExperienceBlock from '../components/experience/ExperienceCard';

const HiringMe = () => {
	const { Panel } = Collapse;

	const comm = [
		{
			title: 'CEESA Debate Semi-final Orange',
			text: (
				<>
					<p>
						The competitive debate experience was invaluable in
						learning not only the ability to{' '}
						<b>generate, structure and articulate positions</b>, but
						also in understanding how to
						<b>communicate across differences to persuade</b>
					</p>
					<p>
						I only realised its true value later in life when it
						taught me difference between seeing argument as
						something to win versus something to work together to
						solve,
					</p>
				</>
			),
			image: potion1,
			stats: [
				'+10 articulation',
				'+10 persuasion',
				'+10 public speaking',
			],
		},
		{
			title: 'CEESA Impromptu Speech Finalist Cookie',
			text: (
				<>
					<p>
						Impromptu Speaking is a scary art. To have no ability to
						prepare and generate a speech within 30 seconds in front
						of a crowd sounds like the nightmare of most people, and
						was mine for a bit too.
					</p>
					<p>
						The biggest improvement had nothing to do with Speech
						abilities - it was emotional regulation - the ability to
						percieve stress as excitement, to inspire emotion when
						you're only feeling panic.
					</p>
				</>
			),
			image: potion2,
			stats: [
				'+20 emotional regulation',
				'+10 public speaking',
				'+10 articulation',
			],
		},
		{
			title: 'Meetr Mushroom',
			text: (
				<>
					<p>
						Meetr started as a pet project, but having 8 user
						research interviewees express interest and eventually
						join the team was astonishing. I could have done much
						better, but managing and inspiring 8 full-time
						university students into a functional cross-discipline
						team was something was a pressure cooker in terms of
						improving communication.
					</p>
					<p>To learn more, check out my blog!</p>
				</>
			),
			image: potion3,
			stats: [
				'+10 Leadership',
				'+10 Delegation',
				'+10 Trust',
				'+20 Conflict Resolution',
			],
		},
		{
			title: 'International Elixir',
			text: (
				<>
					<p>
						Born and raised in Prague, Europe, as a child of first
						generation immigrants from China, cross-cultural
						interactions were inescapable. But mix in the wisdom of
						my parents to throw me into the cultural hotpot known as
						an international school, and we have an elixir that has
						greatly cultivated my empathy. It's helped me see past
						the cultural lenses that are unavoidable, and improved
						my ability to communicate with people - to bond over not
						only similarities but differences.
					</p>
				</>
			),
			image: potion4,
			stats: [
				'+10 Universal Bonding',
				'+10 Cultural Knowledge',
				'+10 Understanding of Biases',
				'+10 Enjoyment of differences',
			],
		},
	];
	const pass = [
		{
			title: 'Sword of Sammy',
			text: (
				<>
					<p>
						Sammy is the official mascot of Meetr, the project I've
						dedicated most of my time to the past year
					</p>
					<p>
						This may be the single project I've learnt most from in
						my entire life. To sum up everything I've learnt, from
						technical to product to leadership knowledge to
						understanding myself, I cannot imagine a process more
						valuable in my growth than this entrepeneurship journey.
					</p>
				</>
			),
			image: weapon1,
			stats: [
				'+99 Leadership',
				'+99 Technical Design',
				'+99 Product Knowledge',
			],
		},
		{
			title: 'Staff of IC',
			text: (
				<>
					<p>
						The Investment Committee is a $2 Million Fully
						Student-Managed Philanthropic Endowment.
					</p>
					<p>
						Finance had always seemed mystical like magic to me, so
						going through the rigorous process of joining the IC as
						an analyst by learning the fundamentals of Intrinsic
						Value Investing, Market Concepts, and valuation
						techniques have been invaluable in understanding the
						monetary side of products and companies.
					</p>
				</>
			),
			image: weapon2,
			stats: [
				'+10 Finance Fundamentals',
				'+10 Crawling through 10Ks',
				'+10 Pitch Presentation',
			],
		},
		{
			title: 'GTIAxe of Website Team',
			text: (
				<>
					<p>
						Leading a part-time team of 12 with little experience in
						Web-Development, I faced unique challenges in
						motivation, technical foundation, and more. I adopted
						and modified the agile framework for consistent progress
						- in the end, we successfully revamped the
						organisation's website, executing user research, content
						writing, and Figma mockups and code deployment.
					</p>
				</>
			),
			image: weapon3,
			stats: [
				'+10 Leading',
				'+10 Teaching & Mentoring',
				'+10 Technical Knowledge',
			],
		},
		{
			title: 'C21U Lab Research',
			text: (
				<>
					<p>
						I got to combine my skills of CS true passion of
						Education & Productivity into one project, joining lab
						research that helped student success by analyzing
						clickstream data of users in online education platforms.
					</p>
					<p>
						My first foray into ML, I learnt that cleaning the
						pipeline was in fact a more arduous task than setting up
						a Recurrent Neural Network, and how interesting it was
						to think about data.
					</p>
				</>
			),
			image: weapon4,
			stats: [
				'+10 Machine Learning',
				'+10 Writing Research',
				'+10 Finding Passion',
			],
		},
		{
			title: 'Dagger of Writing',
			text: (
				<>
					<p>
						They say the pen is mightier than the sword. Well, what
						do they say about the dagger of writing?
					</p>
					<p>
						In my newest chapter of actively growing, and squeezing
						the most out of my experiences, I have combined my joy
						of writing along with the lessons in Productivity,
						Product, and Professional lessons I've learnt.
					</p>
					<p>
						I publish these lessons on my Medium blog, so they may
						help someone like they help me.
					</p>
				</>
			),
			image: weapon5,
			stats: [
				'+10 Nerding Out',
				'+10 Absorbing Experience',
				'+10 Finding Passion',
			],
		},
	];
	const pro = [
		{
			title: 'Full-Stack SWE Intern @ Intuit',
			text: (
				<>
					<p>
						Intuit was my first experience interning for such a
						large company. I was used to the fast-paced many-hat
						nature of startups, but different experiences always
						gives different lessnos.
					</p>
					<p>
						Crawling effectively through codebase, leveraging
						internal infrastructure, managing downstream and
						upstream requirements between teams were all new
						technical lessons. But luckily, the people and
						interpersonal relationships were as awesome as before.
					</p>
				</>
			),
			image: shield1,
			stats: [
				'+10 Agile',
				'+10 Standardised Coding Practises',
				'+10 Cross-Team Communication',
			],
		},
		{
			title: 'Full-Stack SWE Intern @ Rebartek',
			text: (
				<>
					<p>
						I was incredibly excited to come back to Rebartek
						because I had asked to explore a completely unfarmiliar
						role - Fullstack engineering, knowing that my experience
						was limited.
					</p>
					<p>
						Incredibly thankful that they gave me the opportunity to
						build <em>needed & production-ready</em> code.
						Incredibly stressful, frantic, but one of the intense
						learning experiences I've gone through.
					</p>
				</>
			),
			image: shield2,
			stats: [
				'+20 Learning to Learn',
				'+10 Backend Knowledge',
				'+10 Agency',
			],
		},
		{
			title: 'Frontend SWE Intern @ Rebartek',
			text: (
				<>
					<p>
						My first technical internship ever, pressure to perform
						was piled high, but I had the support and self-efficacy
						to rise to the occasion.
					</p>
					<p>
						The biggest lesson learnt was the ability to run tasks
						in parallel, to actively resolve blockers even if they
						lie outside my domain, and of course much improvement in
						writing production level code.
					</p>
				</>
			),
			image: shield2,
			stats: ['+10 Learning to Learn', '+10 Design', '+10 Agency'],
		},
		{
			title: 'Intrapeneurship PM Intern @ Bending Spoons',
			text: (
				<>
					<p>
						My time at BSP has perhaps been the largest inspiration
						in terms of culture, how people treat work, and
						<b>
							eliminating fear in how I interact with my
							coworkers.
						</b>
					</p>
					<p>
						People are always willing to speak up, to openly
						disagree, to engage in meetings and do the prep-work
						before them to help make meetings productive, and still
						like each other at the end of the day because they're
						all invested in their work.
					</p>
				</>
			),
			image: shield2,
			stats: [
				'-10 Fear in communication',
				'+10 Product Knowledge',
				'+10 Agency',
			],
		},
		{
			title: 'Innovator & Incubator Intern @ Avast',
			text: (
				<>
					<p>
						My first internship ever, I was lucky enough to find and
						nurture my passion for entrepeneurship here.
					</p>
					<p>
						I made up with lack of experience with a desire to
						learn, undertaking A/B testing, Search Engine
						Optimisation, Ad Campaign Management, Business Modeling,
						and building several websites, taking tips from the
						inhouse designers.
					</p>
				</>
			),
			image: shield4,
			stats: [
				'+10 Market Research',
				'+10 Customer Discovery',
				'+10 Business Methodology',
			],
		},
	];

	const [card, setcard] = useState(comm[0]);
	const [showCard, setshowCard] = useState(false);

	const changeShowCard = (newCard) => {
		if (card.title === newCard.title) {
			console.log('ayy');
			setshowCard(!showCard);
			return;
		}

		if (showCard) {
			setshowCard(false);
			setTimeout(() => {
				setcard(newCard);
				setshowCard(true);
			}, 500);
		} else {
			setcard(newCard);
			setshowCard(true);
		}
	};

	return (
		<section
			style={{ display: 'flex', flexDirection: 'column' }}
			className='hiring-me'
		>
			<div
				style={{
					width: '100%',
					alignItems: 'center',
					justifyItems: 'center',
					display: 'flex',
					marginBottom: '5vh',
					flex: 1,
				}}
			>
				<h2 className='about-me-title'>If you're boring: </h2>
				<a href='Jesse_Li_Resume_CS.pdf' className='btn' download>
					Software Engineering CV
				</a>
				<a href='Jesse_Li_Resume_PM.pdf' className='btn' download>
					Product Management CV
				</a>
			</div>
			<div
				style={{
					display: 'flex',
					flex: 5,
					alignItems: 'center',
					justifyItems: 'center',
				}}
			>
				<div className='toolbox-div'>
					<h2 className='about-me-title'>
						My Toolbox (Click Items Below!)
					</h2>
					<div className='toolbox'>
						<h2 className='toolbox-title'>
							Potions of Communication
						</h2>
						<div className='weapons-display'>
							<Experience
								image={potion1}
								onClick={() => {
									changeShowCard(comm[0]);
								}}
							/>
							<Experience
								image={potion2}
								onClick={() => {
									changeShowCard(comm[1]);
								}}
							></Experience>
							<Experience
								image={potion3}
								onClick={() => {
									changeShowCard(comm[2]);
								}}
							></Experience>
							<Experience
								image={potion4}
								onClick={() => {
									changeShowCard(comm[3]);
								}}
							></Experience>
							{/* <Experience
								image={potion5}
								onClick={() => {
									changeShowCard(comm[4]);
								}}
							></Experience> */}
						</div>
					</div>
					<div className='toolbox'>
						<h2 className='toolbox-title'>
							Weapons of Passion (Extracurriculars)
						</h2>
						<div className='weapons-display'>
							<Experience
								image={weapon1}
								onClick={() => {
									changeShowCard(pass[0]);
								}}
							></Experience>
							<Experience
								image={weapon2}
								onClick={() => {
									changeShowCard(pass[1]);
								}}
							></Experience>
							<Experience
								image={weapon5}
								onClick={() => {
									changeShowCard(pass[4]);
								}}
							></Experience>
							<Experience
								image={weapon3}
								onClick={() => {
									changeShowCard(pass[2]);
								}}
							></Experience>
							<Experience
								image={weapon4}
								onClick={() => {
									changeShowCard(pass[3]);
								}}
							></Experience>
						</div>
					</div>
					<div className='toolbox'>
						<h2 className='toolbox-title'>
							Shields of Professional Experience
						</h2>
						<div className='weapons-display'>
							<Experience
								image={shield1}
								onClick={() => {
									changeShowCard(pro[0]);
								}}
							></Experience>
							<Experience
								image={shield2}
								onClick={() => {
									changeShowCard(pro[1]);
								}}
							></Experience>
							<Experience
								image={shield3}
								onClick={() => {
									changeShowCard(pro[2]);
								}}
							></Experience>
							<Experience
								image={shield5}
								onClick={() => {
									changeShowCard(pro[3]);
								}}
							></Experience>
							<Experience
								image={shield4}
								onClick={() => {
									changeShowCard(pro[4]);
								}}
							></Experience>
						</div>
					</div>
				</div>
				<div className='character-div'>
					<ExperienceBlock
						card={card}
						className={
							showCard
								? 'animate__bounceInRight'
								: 'animate__bounceOutRight'
						}
					></ExperienceBlock>
					<div>
						<div className='floating-p'>
							Howdy! Hope you like my experience inventory! Feel
							free to peruse through them for more detail, or for
							more nuanced thoughts go to my blog{' '}
						</div>
						<img
							src={Sammy}
							style={{
								alignSelf: 'center',
								width: '50%',
								marginTop: 20,
							}}
						></img>
					</div>
				</div>
				{/* <Experience
					title={'Internship'}
					text={'asdfasdfasdf'}
				></Experience> */}
			</div>
		</section>
	);
};

export default HiringMe;
