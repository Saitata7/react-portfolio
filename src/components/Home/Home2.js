import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sai.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            A Results-driven Java Full Stack Developer with 9+ years of progressive experience based in <span className="purple">Cincinnati, OH</span>. I specialize in designing, developing, and deploying enterprise-grade applications across FMCG, FinTech, and trading platform domains.
            My technical expertise includes advanced proficiency in <span className="purple">Spring Boot, Spring WebFlux, reactive programming, microservices architecture, and cloud-native development using AWS and Azure</span>, which I leverage to build scalable and high-performance systems.
              <br />
              <br />My career has provided me the opportunity to work with Fortune 500 companies including <i>
                <b className="purple"> Kroger </b>
              </i> where I architected microservices handling 100K+ concurrent transactions, to pioneering AI-powered solutions at <i>
                <b className="purple"> TeamCal AI </b>
              </i> using Generative AI and LangChain, to engineering critical trading platform components at <i>
                <b className="purple"> DriveWealth </b>
              </i> handling $50B+ in annual trading volume. 
              I excel in using technologies like <span className="purple">Spring Boot, Angular, GraphQL, Docker, Kubernetes, and AI/ML frameworks</span> to deliver scalable and mission-critical software solutions.
              <br />
              <br />
              I am passionate about exploring new <span className="purple">Generative AI, microservices architecture, and cloud technologies</span> and applying them to solve real-world problems. With a track record of delivering high-performance systems with 99.9%+ uptime, I am always ready to tackle challenges and contribute to team success.
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>Let's Connect</h1> */}
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saitata7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saitata"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sai_tata.007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
