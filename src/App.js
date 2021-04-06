import React, { Component, useState } from 'react';
import { Row, Col, Collapse } from 'antd';

import './App.css';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function App() {
  const [data, setData] = useState(2);
  const [organisations, setOrganisations] = useState('show');
  const [creativity, setCreativity] = useState('hide');
  const [cs, setCS] = useState('hide');

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
            <a href="#hiring" className="nav__link" onClick={handleNavToggle}>
              Hiring Me?
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link" onClick={handleNavToggle}>
              What do I bring?
            </a>
          </li>
        </ul>
      </nav>
      {/* </header> */}

      {/* Introduction */}

      <Row justify="center" align="middle">
        <Col xs={12}>
          <section className="intro-1">
            <div className="intro-text">
              <h3 className="intro-h3">Hi, Nice to meet you! I am</h3>
              <h1 className="intro-h1">Jesse Li</h1>
              <h4 className="intro-h4">
                CS Student @ Georgia Tech &amp; Creator
              </h4>
            </div>
            <div>
              <ul className="social-list">
                <li className="social-list__item">
                  <a className="social-list__link" href="github.io/JesseLiii">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a className="social-list__link" href="instagram.com/jliczp">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a className="social-list__link" href="youtube.com">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </Col>
        <Col xs={12}>
          <section className="intro-2">
            <ul className="intro-nav">
              <il>
                <a href="#about" className="intro-nav-link">
                  About Me
                </a>
              </il>
              <il>
                <a href="#about" className="intro-nav-link">
                  Hiring Me?
                </a>
              </il>
              <il>
                <a href="#home" className="intro-nav-link">
                  Portfolio
                </a>
              </il>
            </ul>
            <img src="me.png" className="intro-img"></img>
          </section>
        </Col>
      </Row>

      {/* <section className="intro" id="home" onLoad={handleIntro}>
          <h1 className="section__title section__title--intro">
            Hi, I am <strong>Jesse Li</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            Eternal Student & Developer
          </p>
          <img
            src={require('./img/dev-jane-01.jpg')}
            alt="pic of js smiling"
            className="intro__img"
          ></img>
        </section> */}

      {/* Who I am */}

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
          <Col span={24} className="about-me-col">
            <h2 className="about-me-title">
              PRODUCTIVITY ={' '}
              <p className="about-me-title-highlight">EFFICIENCY</p> X TIME
            </h2>
            <div style={{ display: 'block' }}></div>
            <p className="about-me-p">
              A big believer in working <strong>smarter </strong> <em>and </em>
              <strong> harder</strong>. Effeciency and efficacy of my work is
              much more important to me than the raw time I work. I am
              constantly improving myself, taking care to be healthy
              physiologically and psychologically to enable myself to do what I
              love as best as I can.
            </p>
          </Col>

          <Col span={24} className="about-me-col">
            <h2 className="about-me-title">VORACIOUS LEARNER</h2>
            <div style={{ display: 'block' }}></div>
            <p className="about-me-p">
              That efficiency does more than make me more effective. In
              combination with my willigness and love for learning new knowledge
              and skills, my efficiency means that I can learn new things both
              effectively and fast, for any situation.
            </p>
          </Col>
          <Col span={24} className="about-me-col">
            <h2 className="about-me-title">THE RIGHT TYPE OF SMART?</h2>
            <div style={{ display: 'block' }}></div>
            <p className="about-me-p">
              Look, I'm smart. But I'm also surrounded by incredibly intelligent
              people. So why me? I'll be honest. I probably won't be developing
              the next groundbreaking theoritical algorithm. My intelligence is
              general, adaptable, and fast - I'm good at applying strong logic
              and creative solutions when I know the goal or have a direction,
              especially under constraints. Problems that don't have multiple
              aspects to think about that is a waste of my talents and your
              time.
            </p>
          </Col>
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
                Contact : Mr. Březina +420 605 911 901
              </h3>
            </Col>
          </a>
          <a target="_blank" href="https://www.gtsfinvestments.com/overview">
            <Col xs={24} className={organisations + '1 ic project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                GTSF INVESTMENT COMMITTEE
              </h2>
              <h3 className="center contact-h3 project">
                $1.7 Million Student-Managed Philanthropic Endowment
              </h3>
            </Col>
          </a>
          <a target="_blank" href="https://gtia.gtorg.gatech.edu/">
            <Col
              xs={24}
              className={organisations + '2 gtia project-sub-section'}
            >
              <h2 className="about-me-title hiring-me-title project">
                GT INTERNATIONAL AMBASSADOR
              </h2>
              <h3 className="center contact-h3 project">
                Ambassador in the External Committee, focused on planning,
                managing, and executing large campus wide events
              </h3>
              <h3 className="center contact-h3 project">
                NEW WEBSITE COMING SOON! (Current Project)
              </h3>
            </Col>
          </a>
          <a target="_blank" href="https://gtia.gtorg.gatech.edu/">
            <Col
              xs={24}
              className={organisations + '1 gtia project-sub-section'}
            >
              <h2 className="about-me-title hiring-me-title project">
                TEDX, SPEECH &amp; DEBATE
              </h2>
              <h3 className="center contact-h3 project">
                Ambassador in the External Committee, focused on planning,
                managing, and executing large campus wide events
              </h3>
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
          </Col>
          <a target="_blank" href="https://www.dumpli.cz">
            <Col xs={24} className={cs + '2 dumpli project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                DUMPLI.CZ
              </h2>
              <h3 className="center contact-h3 project">
                Freelance website for, built using HTML CSS Javascript, Boostrap
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
                Technical advisor &amp; service Ing: +420 605 911 901
              </h3>
            </Col>
          </a>
          <a target="_blank" href="">
            <Col xs={24} className={cs + '2 project-sub-section'}>
              <h2 className="about-me-title hiring-me-title project">
                JJZ STROJE
              </h2>
              <h3 className="center contact-h3 project">
                Managing Director JJZ s.r.o. : +420 724 233 332
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
                me if you want to talk about it :)
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

      {/* <!-- My services --> */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">
          What can I bring to YOU?
        </h2>
        <div className="services">
          <div className="service">
            <h3>Multicultural experience</h3>
            <p>
              Born and raised in Prague, Europe as a child of first generation
              immigrants from China, my international experience and cultural
              interactions have followed me all my life. This would be enough,
              even if my parents hadn't been wise enough to throw me into the
              cultural hotpot known as an international school. This has
              cultivated my empathy, so I can understand past my deep rooted
              cultural opinions, my ability to communicate with people, to bond
              over similarities & differences.
            </p>
          </div>

          <div className="service">
            <h3>Expert Oral and Written Communication</h3>
            <p>
              I have been lucky enough to be blessed with the innate desire to
              communicate, being an extrovert and a social butterfly. However,
              it is something I have also cultivated. I am experience in Speech
              & Debate competitions, Model United Nations, and have done
              presented own TedX talk. This has enhanced my ability to identify,
              organise, and articulate my thoughts in a way that greatly
              enhances my communication.
            </p>
          </div>

          <div className="service">
            <h3>Cheerful & Sociable</h3>
            <p>Perhaps seemingly</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <a href="mailt0:jesseli751@gmail.com" className="footer__link">
          <i className="fas fa-envelope"></i> jesseli751@gmail.com
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="github.io/JesseLiii">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="instagram.com/jliczp">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="youtube.com">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
