import React, { Component, useState } from 'react';
import { Row, Col, Collapse } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
const Principles = () => {
	const { Panel } = Collapse;

	return (
		<section className='about-me' id='about'>
			<Row>
				<Col span={24} className='about-me-col-side'>
					<ScrollAnimation
						animateIn='typewriter'
						delay={1000}
						offset={0}
						duration={1.5}
						animateOnce={true}
					>
						<div className=''>
							<h2 className='about-me-title-side' id=''>
								WHAT DEFINES ME?
							</h2>
						</div>
					</ScrollAnimation>
				</Col>
				<ScrollAnimation
					animateIn='animate__fadeInDown'
					animateOut='animate__fadeOutDown'
				>
					<Collapse
						defaultActiveKey={['7']}
						ghost
						className='collapse'
					>
						<Panel
							header={
								<h2 className='about-me-title'>
									PRODUCTIVITY ={' '}
									<p className='about-me-title-highlight'>
										EFFICIENCY
									</p>{' '}
									X TIME
								</h2>
							}
							key='1'
						>
							<Col span={24} className='about-me-col'>
								<div style={{ display: 'block' }}></div>
								<p className='about-me-p'>
									This is my golden rule of productivity.
									Effeciency, Effeciency, Effeciency! I'm a
									big believer in working{' '}
									<strong>smarter </strong>{' '}
									<em>before (and!) </em>
									<strong> harder</strong>. The effeciency and
									efficacy of my work reigns supreme. I am
									constantly improving myself and my system,
									taking care to be physiologically and
									psychologically thriving to enable myself to
									do what I love as best as I can.
								</p>
								<p className='about-me-p'>
									In terms of technical skills and knowledge,
									the efficiency does more than make me more
									effective. In combination with my willigness
									and love for learning new knowledge and
									skills, my efficiency means that I can learn
									new things both effectively and fast, for
									any situation.{' '}
								</p>
								<p className='about-me-p'>
									This doesn't just help me do things better
									&amp; faster - it means that I can utilise
									the extra time to do all the extra things
									I'm doing (like this website!). It means
									that I can learn and do things not just
									faster, but more.
								</p>
							</Col>
						</Panel>
						<Panel
							header={
								<h2 className='about-me-title'>
									Nerdy Anti-Nerd
								</h2>
							}
							key='2'
						>
							<Col span={24} className='about-me-col'>
								<div style={{ display: 'block' }}></div>
								<p className='about-me-p'>
									Although I will die on the hill that I am by
									definition not a nerd (my friends can suck
									it) I unfortunately have to admit that
									tracking my time to the second, plotting
									screen time and developing a whole framework
									to make myself more productive because I
									enjoy it is <em>just a little</em> nerdy.
								</p>
								<p className='about-me-p'>
									However, the definition of a nerd to me is
									an extreme specialisation at the cost of
									other aspects (most commonly social skills),
									but one of my biggest strengths is my
									diversity in passion and skill. Whether that
									is in producing Youtube videos,
									understanding financial fundamentals,
									writing (duh) both fiction and non-fiction,
									perusing psychology papers, or orating in a
									Speech & Debate final.{' '}
								</p>
								<p className='about-me-p'>
									<em>
										I do not have the singleminded
										obsessiveness that is both the greatest
										weapon and weakness of ‘nerds’.{' '}
									</em>
									<strong>
										But sometimes a unique permutation of
										knowledge and diversity in thought is
										what is needed for innovation.
									</strong>
								</p>
							</Col>
						</Panel>
						<Panel
							header={
								<h2 className='about-me-title'>
									Radical Open Mindedness
								</h2>
							}
							key='3'
						>
							<Col span={24} className='about-me-col'>
								<div style={{ display: 'block' }}></div>
								<p className='about-me-p'>
									Actively and constantly searching feedback
									matters beyond the direct feedback I get -
									it communicates an open mindedness and
									empathy that I have found is critical for
									people willing to share their true thoughts,
									which is critical to being able to see past
									my own biases.
								</p>
								<p className='about-me-p'>
									Pushing past my undeniably powerful ego and
									instinctive emotional reactions was
									something harder than I'd like to admit, but
									the ability to understand without the need
									to agree that it gave me is perhaps the
									singular most prominent reason for my growth
								</p>
								<p className='about-me-p'>
									It is, if I must guess, also why I have
									always received a return offer at every
									possible opportunity - even when I did not
									start the most technically knowledgable or
									charismatic
								</p>
							</Col>
						</Panel>
						<Panel
							header={
								<h2 className='about-me-title'>
									Tactical Transparency
								</h2>
							}
							key='4'
						>
							<Col span={24} className='about-me-col'>
								<div style={{ display: 'block' }}></div>
								<p className='about-me-p'>
									Those who are ‘brutally honest’ care more
									about the brutality than the honesty. Giving
									feedback is perhaps an art of its own,
									because maximising the effectiveness of
									those around you is by nature more scalable
									than solely focusing on yourself.
								</p>
								<p className='about-me-p'>
									I have found that everyone has unique ways
									they think about themselves and their work -
									and the best way for people to understand
									feedback is if they’re told about it in a
									way that makes sense in their worldview.
									Tact is not cowardice.
								</p>
							</Col>
						</Panel>
						<Panel
							header={
								<h2 className='about-me-title'>
									Multicultural Embodied
								</h2>
							}
							key='5'
						>
							<Col span={24} className='about-me-col'>
								<div style={{ display: 'block' }}></div>
								<p className='about-me-p'>
									Born and raised in Prague, Europe as a child
									of first generation immigrants from China,
									my international experience and cultural
									interactions have followed me all my life.
									This would be enough, even if my parents
									hadn't been wise enough to throw me into the
									cultural hotpot known as an international
									school. This has cultivated my empathy so I
									can understand past my deep rooted cultural
									opinions, and my ability to communicate with
									people, to bond over not only similarities
									but differences.
								</p>
							</Col>
						</Panel>
						<Panel
							header={
								<div>
									<h2 className='about-me-title'>
										Learn from everyone<br></br>= Connect
										with me!
									</h2>
								</div>
							}
							key='7'
						>
							<Col span={24} className='about-me-col'>
								<div>
									<ul className='social-list-left'>
										<li className='social-list__item'>
											<a
												className='social-list__link'
												target='_blank'
												href='github.io/JesseLiii'
											>
												<i className='fab fa-github'></i>
											</a>
										</li>
										<li className='social-list__item'>
											<a
												className='social-list__link'
												target='_blank'
												href='instagram.com/jliczp'
											>
												<i className='fab fa-instagram'></i>
											</a>
										</li>
										<li className='social-list__item'>
											<a
												className='social-list__link'
												target='_blank'
												href='youtube.com'
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
										<li className='social-list__item'>
											<a
												className='social-list__link'
												href='mailto:jesseli751@gmail.com'
												target='_blank'
											>
												<h3 className='clr-accent-hoverable'>
													Schedule a Call - Talk to me
													about <em>anything!</em>
												</h3>
											</a>
										</li>
									</ul>
								</div>
							</Col>
						</Panel>
					</Collapse>
				</ScrollAnimation>
			</Row>
		</section>
	);
};

export default Principles;
