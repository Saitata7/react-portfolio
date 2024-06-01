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
            A dedicated Full Stack Developer based in Jersey City, NJ. I hold a Master’s in Computer Science from Pace University.
            My technical toolkit is extensive, featuring advanced proficiency in <span className="purple">Java, PHP, JavaScript, React.js, Node.js, and Python</span>, which I leverage to build and enhance dynamic web applications.
              <br />
              <br />My career has provided me the opportunity to develop innovative solutions at <i>
                <b className="purple"> TeamCal Ai  </b>
              </i> in California, where I enhanced web applications using
                <span className="purple"> React.js, Node.js and PHP </span>
              , to crafting critical backend solutions for financial platforms at <i>
                <b className="purple"> Ionixx Technologies </b>
              </i> in India. 
              enhancing user interfaces and backend functionalities. I excel in using technologies like <span className="purple">Spring Boot, GraphQL, and Flask</span> to deliver scalable and high-performance software solutions.
              <br />
              <br />
              I am passionate about exploring new <span className="purple"> Web technologies, AI</span>, web technologies and applying them to solve real-world problems. With a keen eye for detail and a commitment to delivering high-quality results, I am always ready to tackle challenges and contribute to team success.
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
