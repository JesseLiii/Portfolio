import React, { Component, useState } from 'react';
import { Row, Col, Collapse } from 'antd';

import './App.css';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import jerry1 from './img/jerry1.jpg';
import jerry2 from './img/jerry2.jpg';

function App() {
  const [data, setData] = useState(2);
  const [organisations, setOrganisations] = useState('show');
  const [creativity, setCreativity] = useState('hide');
  const [cs, setCS] = useState('hide');

  const { Panel } = Collapse;

  function handleNavToggle(event) {
    // const navToggle = document.querySelector(".nav-toggle");
    document.body.classList.toggle('nav-open');
  }

  function handleNavLink() {
    document.body.classList.remove('nav-open');
  }

  function handleIntro() {
    console.log('intro');
    document.body.classList.toggle('intro-animation');
  }

  return (
    <div className="App">
      <button
        className="nav-toggle"
        are-label="toggle navigation"
        onClick={handleNavToggle}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={handleNavToggle}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={handleNavToggle}>
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#hiring-me"
              className="nav__link"
              onClick={handleNavToggle}
            >
              Hiring Me?
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link" onClick={handleNavToggle}>
              Follow Up!
            </a>
          </li>
        </ul>
      </nav>
      {/* </header> */}

      {/* Introduction */}
      <Row justify="center" align="middle">
        <Col xs={24}>
          <section className="intro-gradient">
            <ul className="intro-nav">
              <il>
                <a href="#about" className="intro-nav-link">
                  About Me
                </a>
              </il>
              <il>
                <a href="#hiring" className="intro-nav-link">
                  Hiring Me?
                </a>
              </il>
              <il>
                <a href="#hiring" className="intro-nav-link contact-link">
                  Contact Me
                </a>
              </il>
            </ul>
            <h3 className="intro-h3">JL</h3>
            <h1 className="intro-h1">Jesse Li</h1>
            <h4 className="intro-h4">
              Creator &amp; CS Student @ Georgia Tech
            </h4>
            <div className="intro-img-div">
              <img className="intro-img-1" width="200" src={jerry1} />
              <img className="intro-img-2" width="200" src={jerry2} />
            </div>
          </section>
        </Col>
      </Row>
      {/* About me */}
      <section className="about-me" id="about">
        <Row>
          <Col span={24} className="about-me-col-side">
            <ScrollAnimation
              animateIn="typewriter"
              delay={1000}
              offset={0}
              duration={1.5}
              animateOnce={true}
            >
              <div className="">
                <h2 className="about-me-title-side" id="">
                  WHAT DEFINES ME?
                </h2>
              </div>
            </ScrollAnimation>
          </Col>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
          >
            <Collapse defaultActiveKey={['7']} ghost>
              <Panel
                header={
                  <h2 className="about-me-title">
                    PRODUCTIVITY ={' '}
                    <p className="about-me-title-highlight">EFFICIENCY</p> X
                    TIME
                  </h2>
                }
                key="1"
              >
                <Col span={24} className="about-me-col">
                  <div style={{ display: 'block' }}></div>
                  <p className="about-me-p">
                    This is my golden rule of productivity. Effeciency,
                    Effeciency, Effeciency! I'm a big believer in working{' '}
                    <strong>smarter </strong> <em>before (and!) </em>
                    <strong> harder</strong>. The effeciency and efficacy of my
                    work reigns supreme. I am constantly improving myself and my
                    system, taking care to be physiologically and
                    psychologically thriving to enable myself to do what I love
                    as best as I can.
                  </p>
                  <p className="about-me-p">
                    In terms of technical skills and knowledge, the efficiency
                    does more than make me more effective. In combination with
                    my willigness and love for learning new knowledge and
                    skills, my efficiency means that I can learn new things both
                    effectively and fast, for any situation.{' '}
                  </p>
                  <p className="about-me-p">
                    This doesn't just help me do things better &amp; faster - it
                    means that I can utilise the extra time to do all the extra
                    things I'm doing (like this website!). It means that I can
                    learn and do things not just faster, but more.
                  </p>
                </Col>
              </Panel>
              <Panel
                header={<h2 className="about-me-title">#1 Sponge???</h2>}
                key="2"
              >
                <Col span={24} className="about-me-col">
                  <div style={{ display: 'block' }}></div>
                  <p className="about-me-p">
                    A sponge's job is to absorb. In terms of absorbing the
                    surrounding world, I want to be the best.
                  </p>
                  <p className="about-me-p">
                    It's not just about learning technical skills &amp;
                    knowledge. Reading about a breadth of subjects gives me an
                    in-depth look into worlds unreachable to me, unreachable to
                    everyone like me.{' '}
                    <strong>
                      If reading is my greatest weapon, then constantly and
                      actively learning from my daily life, from everyone and
                      everything around is my hidden one.
                    </strong>
                  </p>
                  <p className="about-me-p">
                    <strong>I am a good sponge.</strong> But it's not just being
                    about a sponge. My greatest advantage, the one
                    characteristic that has most changed my life and who I am,
                    is the fact that I deeply enjoy thinking. It means that I
                    can overcome the cognitive miser that humans biologically
                    are, and truly extract everything I can from every
                    situation.
                  </p>
                </Col>
              </Panel>
              <Panel
                header={
                  <h2 className="about-me-title">
                    Don't Trust me. Trust my System
                  </h2>
                }
                key="3"
              >
                <Col span={24} className="about-me-col">
                  <div style={{ display: 'block' }}></div>
                  <p className="about-me-p">
                    <em>
                      “I understand there’s a guy inside me who wants to lay in
                      bed, smoke weed all day, and watch cartoons and old
                      movies. My whole life is a series of stratagems to avoid,
                      and outwit, that guy.”
                    </em>{' '}
                    -Anthony Bourdain
                  </p>
                  <p className="about-me-p">
                    Humans are irrational, inconsistent and lazy creatures. I
                    don't trust myself, and neither should you. Systems, on the
                    other hand, are different. They are steelbound, organised,
                    and by definition consistent. Don't trust me. Trust my
                    system.
                  </p>
                  <p className="about-me-p">
                    Of course, they can also be rigid, disobeyed, and even
                    abused. It is not easy for an abstract thing to contain and
                    control something as creatively chaotic as a human being.
                    But thinking about the incentives, difficulties, and results
                    of each principle to evolve my system and is only part of
                    the fun! However, to make a good effective system to manage
                    me, I must first know myself. (Hint, next section!)
                  </p>
                </Col>
              </Panel>
              <Panel
                header={
                  <h2 className="about-me-title">
                    Constantly consult your compass
                  </h2>
                }
                key="4"
              >
                <Col span={24} className="about-me-col">
                  <div style={{ display: 'block' }}></div>
                  <p className="about-me-p">
                    <em>
                      "so from birth to twenty-six, God is slowly turning the
                      lights on, and you're groggy and pointing at things saying
                      circle and blue and car and then sex and job and health
                      care."
                    </em>{' '}
                    -A Million Miles and a Thousand Years
                  </p>
                  <p className="about-me-p">
                    It feels like our existence is merely a function of our
                    genetics and environment. We are in the backseat of our own
                    lives, not only without control of where we're going, but
                    not knowing where we want to go.{' '}
                    <strong>
                      Introspection is the steering wheel of life.
                    </strong>{' '}
                    It is where your greatest insights and truths align and
                    reveal themselves. It is your greatest tool to find
                    happiness. Use it. It is the reason someone as lazy as me
                    can work as much as me. Because I have looked deep into
                    myself and I know am am happier this way.
                  </p>
                </Col>
              </Panel>
              <Panel
                header={
                  <h2 className="about-me-title">THE RIGHT TYPE OF SMART?</h2>
                }
                key="5"
              >
                <Col span={24} className="about-me-col">
                  <div style={{ display: 'block' }}></div>
                  <p className="about-me-p">
                    Look, I'm smart. But I'm also surrounded by incredibly
                    intelligent people. So why me? I might be stabbing myself in
                    the foot, but I'll be honest. I won't be developing the next
                    groundbreaking theoritical algorithm. I don't have the
                    singleminded obssessive qualities for that.
                  </p>
                  <p className="about-me-p">
                    My intelligence is general, adaptable, and fast - I'm good
                    at applying strong logic and creative solutions when I know
                    the goal or have a direction, especially under constraints.
                    I'm interested in such a wide variety of topics and I
                    thinking about all of them. Problems that don't have
                    multiple aspects to think about that is a waste of my
                    talents and your time.
                  </p>
                </Col>
              </Panel>
              <Panel
                header={
                  <h2 className="about-me-title">Multicultural Embodied</h2>
                }
                key="6"
              >
                <Col span={24} className="about-me-col">
                  <div style={{ display: 'block' }}></div>
                  <p className="about-me-p">
                    Born and raised in Prague, Europe as a child of first
                    generation immigrants from China, my international
                    experience and cultural interactions have followed me all my
                    life. This would be enough, even if my parents hadn't been
                    wise enough to throw me into the cultural hotpot known as an
                    international school. This has cultivated my empathy so I
                    can understand past my deep rooted cultural opinions, and my
                    ability to communicate with people, to bond over not only
                    similarities but differences.
                  </p>
                </Col>
              </Panel>
              <Panel
                header={
                  <div>
                    <h2 className="about-me-title">
                      Learn from everyone<br></br>= Connect with me!
                    </h2>
                  </div>
                }
                key="7"
              >
                <Col span={24} className="about-me-col">
                  <div>
                    <ul className="social-list-left">
                      <li className="social-list__item">
                        <a
                          className="social-list__link"
                          target="_blank"
                          href="github.io/JesseLiii"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                      <li className="social-list__item">
                        <a
                          className="social-list__link"
                          target="_blank"
                          href="instagram.com/jliczp"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="social-list__item">
                        <a
                          className="social-list__link"
                          target="_blank"
                          href="youtube.com"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li className="social-list__item">
                        <a
                          className="social-list__link"
                          href="https://www.linkedin.com/in/jesseli751"
                          target="_blank"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li className="social-list__item">
                        <a
                          className="social-list__link"
                          href="mailto:jesseli751@gmail.com"
                          target="_blank"
                        >
                          <i class="fas fa-envelope"></i>
                        </a>
                      </li>
                      <li className="social-list__item">
                        <a
                          className="social-list__link"
                          href="mailto:jesseli751@gmail.com"
                          target="_blank"
                        >
                          <h3 className="clr-accent-hoverable">
                            Schedule a Call - Talk to me about{' '}
                            <em>anything!</em>
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

      {/* Hiring me? */}
      <section className="hiring-me" id="hiring">
        <h2 className="about-me-title hiring-me-title">HIRING ME?</h2>
        <p className="about-me-p hiring-me-p">
          Let's not be redundant, skim my resume first :)
        </p>
        <div className="center">
          <a
            href={require('./components/JesseLiResume.pdf')}
            className="btn"
            download
          >
            Resume
          </a>
        </div>
        <img
          className="center"
          src="separator.png"
          style={{ margin: '2rem auto 2rem auto', width: '5em' }}
        ></img>
        <Row justify="center" className="core-blocks">
          <Col span={8}>
            <ScrollAnimation
              animateIn="animate__shakeX"
              delay={1000}
              duration={0.5}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className="center">
                <a
                  onClick={() => {
                    setOrganisations('hide');
                    setCS('hide');
                    setCreativity('show');
                  }}
                  className={creativity + '-btn btn'}
                >
                  Creativity
                </a>
              </div>
            </ScrollAnimation>
          </Col>
          <Col span={8}>
            <div className="center">
              <a
                onClick={() => {
                  setOrganisations('show');
                  setCS('hide');
                  setCreativity('hide');
                }}
                className={organisations + '-btn btn'}
              >
                Organisations
              </a>
            </div>
          </Col>
          <Col span={8}>
            <ScrollAnimation
              animateIn="animate__shakeX"
              delay={1000}
              duration={0.5}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className="center">
                <a
                  onClick={() => {
                    setOrganisations('hide');
                    setCS('show');
                    setCreativity('hide');
                  }}
                  className={cs + '-btn btn'}
                >
                  CS
                </a>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col
            sx={24}
            style={{ margin: '5vw 5vw 5vw 5vw' }}
            className={organisations + '1'}
          >
            <h2 className="about-me-title hiring-me-title">ORGANISATIONS</h2>
          </Col>
          <a target="_blank" href="https://gtcssocialgood.com/">
            <Col
              xs={24}
              className={organisations + '2 cssocialgood project-sub-section'}
            >
              <h2 className="about-me-title hiring-me-title project">
                CS + SOCIAL GOOD
              </h2>
              <h3 className="center contact-h3 project">
                In the engagement and finance committee, raising capital,
                executing large events and panels and managing and raising
                capital.
              </h3>
            </Col>
          </a>
          <a target="_blank" href="https://www.gtsfinvestments.com/overview">
            <Col xs={24} className={organisations + '1 ic project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                GTSF INVESTMENT COMMITTEE
              </h2>
              <h3 className="center contact-h3 project">
                $1.7 Million Student-Managed Philanthropic Endowment. Analyst
                here after a competitive selection process.
              </h3>
              {/* <h3 className="center contact-h3 project">
                Acquired the Bloomberg Market Concepts Certification during the
                competitive selection process to become an analyst.
              </h3> */}
            </Col>
          </a>
          <a target="_blank" href="https://gtia.gtorg.gatech.edu/">
            <Col
              xs={24}
              className={organisations + '2 gtia project-sub-section'}
            >
              <h2 className="about-me-title hiring-me-title project">
                GT INTERNATIONAL AMBASSADORS
              </h2>
              <h3 className="center contact-h3 project">
                Ambassador in the External Committee, focused on planning,
                managing, and executing large campus wide events.
              </h3>
            </Col>
          </a>
          <a target="_blank" href="https://gtia.gtorg.gatech.edu/">
            <Col
              xs={24}
              className={organisations + '1 tedx project-sub-section'}
            >
              <h2 className="about-me-title hiring-me-title project">
                TEDX, SPEECH &amp; DEBATE
              </h2>
              <h3 className="center contact-h3 project">
                Model United Nations Captain; Planned, wrote, and presented in
                TedX Youth Prague on the future of Automation; Reached finals in
                international competition in Impromptu Speaking and Debate.
              </h3>
              {/* <h3 className="center contact-h3 project">
                I'm good at identifying, organising, and articulating thoughts
                in my head, thrive during public speaking. Communication,
                whether in a personal or corporate environment is not only not a
                problem for me, but a welcome opportunity.
              </h3> */}
            </Col>
          </a>
        </Row>
        <Row justify="center" align="middle">
          <Col
            sx={24}
            style={{ margin: '5vw 5vw 5vw 5vw' }}
            className={cs + '1'}
          >
            <h2 className="1 about-me-title hiring-me-title project">
              FREELANCE
            </h2>
            <p className="about-me-p hiring-me-p">
              Click on the banners to see the websites I've made!
            </p>
          </Col>
          <a target="_blank" href="http://dumpli.cz">
            <Col xs={24} className={cs + '2 dumpli project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                DUMPLI.CZ
              </h2>
              <h3 className="center contact-h3 project">
                Freelance website built using HTML CSS Javascript, Boostrap
                &amp; Integration of online payment using Stripe API.
              </h3>
            </Col>
          </a>
          <a target="_blank" href="https://www.phan-group.com">
            <Col xs={24} className={cs + '1 phan-group project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                PHAN-GROUP
              </h2>
              <h3 className="center contact-h3 project">
                Built using React &amp; AntDesign, NodeJS, Express stack.
                Employment of commmunication channels, iterative feedback, and
                customer acquisition.
              </h3>
            </Col>
          </a>
          <a target="_blank" href="">
            <Col xs={24} className={cs + '2 jjz project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                JJZ STROJE
              </h2>
              <h3 className="center contact-h3 project">Coming Soon!</h3>
            </Col>
          </a>
          <Col
            sx={24}
            style={{ margin: '5vw 5vw 5vw 5vw' }}
            className={cs + '1'}
          >
            <h2 className="1 about-me-title hiring-me-title project">
              Projects
            </h2>
          </Col>
          <a target="_blank" href="https://gtia.gtorg.gatech.edu/">
            <Col xs={24} className={cs + '2 gtia project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                GT INTERNATIONAL AMBASSADORS
              </h2>
              <h3 className="center contact-h3 project">
                Website subcommittee, creating both the frontend page (click on
                the banner!) and the internal webapp for tracking work &amp;
                social points, events, sheets, and membership status using
                NodeJS, Express, ejs, and MongoDB.
              </h3>
            </Col>
          </a>
          <a target="_blank" href="https://gtia.gtorg.gatech.edu/">
            <Col xs={24} className={cs + '1 gtia project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                Hackathon NLP Assistance
              </h2>
              <h3 className="center contact-h3 project">
                Website subcommittee, creating both the frontend page (click on
                the banner!) and the internal webapp for tracking work &amp;
                social points, events, sheets, and membership status using
                NodeJS, Express, ejs, and MongoDB.
              </h3>
            </Col>
          </a>
        </Row>
        <Row justify="center" align="middle">
          <Col
            sx={24}
            style={{ margin: '5vw 5vw 5vw 5vw' }}
            className={creativity + '1'}
          >
            <h2 className="1 about-me-title hiring-me-title project">
              CREATIVITY
            </h2>
          </Col>
          <a target="_blank" href="#services">
            <Col
              xs={24}
              className={creativity + '2 creativity project-sub-section'}
            >
              <h2 className="about-me-title hiring-me-title project">
                COMING SOON
              </h2>
              <h3 className="center contact-h3 project">
                Some large projects involving the arts are in the work. Contact
                me if you want to talk about it!
              </h3>
            </Col>
          </a>
          <a target="_blank" href="#services">
            <Col
              xs={24}
              className={creativity + '1 colours project-sub-section'}
            >
              <h2 className="about-me-title hiring-me-title project">
                PHOTOGRAPHY
              </h2>
              <h3 className="center contact-h3 project">
                All background photos are taken by me :)
              </h3>
            </Col>
          </a>
        </Row>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="center" style={{ marginBottom: '2em' }}>
          <h2 className="about-me-title">Connect with me!</h2>
        </div>
        {/* <a href="mailt0:jesseli751@gmail.com" className="footer__link">
          <i className="fas fa-envelope"></i> jesseli751@gmail.com
        </a> */}
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              target="_blank"
              href="github.io/JesseLiii"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              target="_blank"
              href="instagram.com/jliczp"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" target="_blank" href="youtube.com">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/jesseli751"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="mailto:jesseli751@gmail.com"
              target="_blank"
            >
              <i class="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
