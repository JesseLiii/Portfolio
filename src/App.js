import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';

class App extends Component {
  handleNavToggle(event) {
    // const navToggle = document.querySelector(".nav-toggle");
    document.body.classList.toggle('nav-open');
  }

  handleNavLink() {
    document.body.classList.remove('nav-open');
  }

  handleIntro() {
    console.log('intro');
    document.body.classList.toggle('intro-animation');
  }

  render() {
    return (
      <div className="App">
        {/* <header> */}
        {/* <div className="logo">
            <img src={require('./img/devjane.png')} alt="why"></img>
          </div> */}
        <button
          className="nav-toggle"
          are-label="toggle navigation"
          onClick={this.handleNavToggle}
        >
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link"
                onClick={this.handleNavToggle}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={this.handleNavToggle}
              >
                About Me
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#cswork"
                className="nav__link"
                onClick={this.handleNavToggle}
              >
                CS Work
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#otherwork"
                className="nav__link"
                onClick={this.handleNavToggle}
              >
                Other Work
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
                    <a
                      className="social-list__link"
                      href="instagram.com/jliczp"
                    >
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

        {/* <section className="intro" id="home" onLoad={this.handleIntro}>
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
              <h2 className="about-me-title-side">WHAT DEFINES ME?</h2>
            </Col>
            <Col span={24} className="about-me-col">
              <h2 className="about-me-title">
                PRODUCTIVITY ={' '}
                <p className="about-me-title-highlight">EFFICIENCY</p> X TIME
              </h2>
              <div style={{ display: 'block' }}></div>
              <p className="about-me-p">
                A big believer in working <strong>smarter </strong>{' '}
                <em>and </em>
                <strong> harder</strong>. Effeciency and efficacy of my work is
                much more important to me than the raw time I work. I am
                constantly improving myself, taking care to be healthy
                physiologically and psychologically to enable myself to do what
                I love as best as I can.
              </p>
            </Col>
            <Col span={24} className="about-me-col">
              <h2 className="about-me-title">VORACIOUS LEARNER</h2>
              <div style={{ display: 'block' }}></div>
              <p className="about-me-p">
                That efficiency does more than make me more effective. In
                combination with my willigness and love for learning new
                knowledge and skills, my efficiency means that I can learn new
                things both effectively and fast, for any situation.
              </p>
            </Col>
            <Col span={24} className="about-me-col">
              <h2 className="about-me-title">THE RIGHT TYPE OF SMART?</h2>
              <div style={{ display: 'block' }}></div>
              <p className="about-me-p">
                Look, I'm smart. But I'm also surrounded by incredibly
                intelligent people. So why me? The question you should be asking
                isn't whether I'm smart, but whether my type of intelligence
                fits what you need. I'll be honest. I probably won't be
                developing the next groundbreaking theoritcal algorithm. I am
                quick, adaptable, and enjoy thinking about all facets of a
                problem, so asking me to solve problems that don't need that is
                a waste of my talents and your time. My intelligence is general
                - I'm good at applying strong logic and creative solutions when
                I know the goal or have a direction. I'm especially good at
                developing and thinking under constraints.
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
          <img className="center" src="seperator.svg" width="5em"></img>
          <Row justify="center" className="core-blocks">
            <Col span={8}>
              <div className="center">
                <a href="#cswork" className="btn">
                  Creativity
                </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="center">
                <a href="#footer" className="btn">
                  Organisations
                </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="center">
                <a href="#footer" className="btn">
                  CS
                </a>
              </div>
            </Col>
          </Row>
          <Row justify="center" align="middle" className="core-blocks">
            <Col sx={24} style={{ margin: '5vw 5vw 5vw 5vw' }}>
              <h2 className="about-me-title hiring-me-title">ORGANISATIONS</h2>
            </Col>
            <a target="_blank" href="https://gtcssocialgood.com/">
              <Col xs={24} className="cssocialgood project-sub-section">
                <h2 className="about-me-title hiring-me-title project">
                  CS + SOCIAL GOOD
                </h2>
                <h3 className="center contact-h3 project">
                  Contact : Mr. Březina +420 605 911 901
                </h3>
              </Col>
            </a>
            <a target="_blank" href="https://www.gtsfinvestments.com/overview">
              <Col xs={24} className="ic project-sub-section">
                <h2 className="about-me-title hiring-me-title project">
                  GTSF INVESTMENT COMMITTEE
                </h2>
                <h3 className="center contact-h3 project">
                  $1.7 Million Student-Managed Philanthropic Endowment
                </h3>
              </Col>
            </a>
            <a target="_blank" href="https://gtia.gtorg.gatech.edu/">
              <Col xs={24} className="gtia project-sub-section">
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
              <Col xs={24} className="gtia project-sub-section">
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
          <Row justify="center" align="middle" className="core-blocks">
            <Col sx={24} style={{ margin: '5vw 5vw 5vw 5vw' }}>
              <h2 className="about-me-title hiring-me-title project">
                FREELANCE
              </h2>
            </Col>
            <a target="_blank" href="https://www.dumpli.cz">
              <Col xs={24} className="dumpli project-sub-section">
                <h2 className="about-me-title hiring-me-title project">
                  DUMPLI.CZ
                </h2>
                <h3 className="center contact-h3 project">
                  Freelance website for, built using HTML CSS Javascript,
                  Boostrap &amp; Integration of online payment using Stripe API.
                </h3>
              </Col>
            </a>
            <a target="_blank" href="">
              <Col xs={24} className="project-sub-section">
                <h2 className="about-me-title hiring-me-title project">
                  PHAN GROUP
                </h2>
                <h3 className="center contact-h3 project">
                  Technical advisor &amp; service Ing: +420 605 911 901
                </h3>
              </Col>
            </a>
            <a target="_blank" href="">
              <Col xs={24} className="project-sub-section">
                <h2 className="about-me-title hiring-me-title project">
                  JJZ STROJE
                </h2>
                <h3 className="center contact-h3 project">
                  Managing Director JJZ s.r.o. : +420 724 233 332
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
                cultural opinions, my ability to communicate with people, to
                bond over similarities & differences.
              </p>
            </div>

            <div className="service">
              <h3>Expert Oral and Written Communication</h3>
              <p>
                I have been lucky enough to be blessed with the innate desire to
                communicate, being an extrovert and a social butterfly. However,
                it is something I have also cultivated. I am experience in
                Speech & Debate competitions, Model United Nations, and have
                done presented own TedX talk. This has enhanced my ability to
                identify, organise, and articulate my thoughts in a way that
                greatly enhances my communication.
              </p>
            </div>

            <div className="service">
              <h3>Cheerful & Sociable</h3>
              <p>Perhaps seemingly</p>
            </div>
          </div>
        </section>

        {/*  */}
        <section className="cswork" id="cswork">
          <h2 className="section__title section__title--cswork">What I do</h2>
          <div className="projects">
            <div className="project">
              <h3></h3>
              <p></p>
            </div>
            <div className="project">
              <h3></h3>
              <p></p>
            </div>
            <div className="project">
              <h3></h3>
              <p></p>
            </div>
          </div>

          <a href="#cswork" className="btn">
            My CS Work
          </a>
        </section>

        <section className="other-work" id="other-work">
          <h2 className="section__title section__title--work">Other Work</h2>
          <p className="section__subtitle section__subtitle--work">
            A selection of my creations
          </p>

          <div className="portfolio">
            {/* Portfolio Item */}
            <a href="#" className="portfolio__item">
              <img
                src={require('./img/portfolio-01.jpg')}
                alt=""
                className="portfolio__img"
              ></img>
            </a>
            {/* Portfolio Item */}
            <a href="#" className="portfolio__item">
              <img
                src={require('./img/portfolio-02.jpg')}
                alt=""
                className="portfolio__img"
              ></img>
            </a>
            {/* Portfolio Item */}
            <a href="#" className="portfolio__item">
              <img
                src={require('./img/portfolio-03.jpg')}
                alt=""
                className="portfolio__img"
              ></img>
            </a>
            {/* Portfolio Item */}
            <a href="#" className="portfolio__item">
              <img
                src={require('./img/portfolio-04.jpg')}
                alt=""
                className="portfolio__img"
              ></img>
            </a>
            {/* Portfolio Item */}
            <a href="#" className="portfolio__item">
              <img
                src={require('./img/portfolio-05.jpg')}
                alt=""
                className="portfolio__img"
              ></img>
            </a>
            {/* Portfolio Item */}
            <a href="#" className="portfolio__item">
              <img
                src={require('./img/portfolio-06.jpg')}
                alt=""
                className="portfolio__img"
              ></img>
            </a>
            {/* Portfolio Item */}
            <a href="#" className="portfolio__item">
              <img
                src={require('./img/portfolio-07.jpg')}
                alt=""
                className="portfolio__img"
              ></img>
            </a>
            {/* Portfolio Item */}
            <a href="#" className="portfolio__item">
              <img
                src={require('./img/portfolio-08.jpg')}
                alt=""
                className="portfolio__img"
              ></img>
            </a>
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
}

export default App;
