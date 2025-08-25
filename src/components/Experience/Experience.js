// import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCards";
import Particle from "../Particle";
// import ScrollToCenter from "./ScrollToCenter";

function Experience() {

  // useEffect(() => {
  //   // Scroll to the bottom of the page after the component has mounted
  //   window.scrollTo(0, document.body.scrollHeight);
  // }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My relevant work <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
        This is my professional experience and these projects have shaped my skillset and journey.
        </p>
        <Row>
          <Col>
        <Row style={{ justifyContent: "center" }}>
        <h2 className="project-subheading">Work Experience</h2>
          <Col md={12} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard 
              title="TeamCal Ai"
              duration="April 2023 - Current"
              description="At TeamCal Ai, a pioneer in AI-driven scheduling, I significantly enhanced the platform by developing seven key features, including real-time schedule statistics and automated email functionalities, utilizing PHP and CodeIgniter. 
              I led the design and implementation of two vital pages, boosting user engagement by 25% through advanced JavaScript and jQuery, aligning with our mission to simplify coordination across time zones and calendars. "
              description2="Additionally, I identified and resolved eighteen critical issues, markedly improving system reliability and user satisfaction, reinforcing our commitment to creating a seamless and stress-free scheduling experience for modern teams."
              keywords="PHP | Codeigniter | React.js | Javascript | AWS | Gen Ai"
            />
          </Col>

          <Col md={12} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              title="Ionixx Technologies"
              duration="Jan 2021 - Sep 2022 · 1 yr 9 mos"
              description="Ionixx Technologies is a leading IT solutions provider, helping both enterprises and startups to build digital products and solutions at scale.As a Java backend developer for the re-platform project, I played a key role in redesigning the existing 30% post-trade system into a new API-based system. 
              My responsibilities included writing backend code, integrating with multiple frameworks and APIs, and setting up the development environment. I performed unit and integration testing to ensure 100% validation of the application, using J-unit to develop and apply test cases."
              description2="In addition, I was responsible for creating API documentation, developing Jasper reports, updating Jira, and interacting with clients for new enhancements. I developed JOOQ and custom queries from existing projects, testing and integrating them into applications."
              keywords="Java | Spring boot | MySql | Redis | JOOQ | Grpc | Graphql | Python | Flask | Postman | AWS"
            />
          </Col>

          <Col md={12} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              title="FXMKT Technologies"
              duration="Dec 2020 - Sep 2021 · 6 mos"
              description="FXMKT technologies is a IT company. As a developer for a custom cloth design E-commerce website, I utilized XAMPP technology to develop both the front-end and back-end of the website, employing a robust stack that included MySQL, Boostrap , PHP, and React for a dynamic user experience."
              description2="The entire platform was deployed on AWS to ensure scalable, reliable, and efficient access to global users. My responsibilities extended to designing an intuitive user interface, integrating payment gateways for secure transactions, and developing a comprehensive database schema. "
              keywords="React.js | PHP | MySql | AWS"
            />
          </Col>

        </Row>
        </Col>

        {/* PC Version */}
        {/* <Col md={1} className="d-none d-md-block">
        <ScrollToCenter/>
        </Col> */}

        {/* ------------------------------------------------------------------------------------------------------ */}

       <Col>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <h2 className="project-subheading">Projects</h2>
          <Col md={12} className="project-card">
            <ProjectCard
              title="FactFinder"
              description="Fact Finder is a web application designed to tackle misinformation by detecting fake news articles. The prediction model uses machine learning and deep learning algorithms to discern between genuine and deceptive information."
              keywords="Python | Flask | React.js | Firebase | Machine learning"
            />
          </Col>

          <Col md={12} className="project-card" style={{ marginTop: "20px" }}>
            <ProjectCard
              title="Blog book"
              description="On Blog Book, you can easily create and manage your own blog, publish captivating posts, and gain visibility among a wide range of blog categories."
              keywords="PHP | Codeigniter | Javascript | MySql"
            />
          </Col>
          
          <Col md={12} className="project-card">
            <ProjectCard
              title="Recipe-dictionary mobile app"
              description="Streamline Cooking: Our app aims to simplify the cooking process by providing step-by-step recipes, ingredient lists, and cooking tips. Explore a variety of cuisines effortlessly."
              keywords="React Native | React.js | Firebase | Java | Ruby | C | C++"
            />
          </Col>

          <Col md={12} className="project-card" style={{ marginTop: "20px" }}>
            <ProjectCard
              title="Wazrix-bot"
              description="AI-powered trading algorithm for WazirX. Buy low, sell high. Maximize profits by leveraging real-time market data and intelligent predictions."
              keywords="Python | Flask | Javascript"
            />
          </Col>

          <Col md={12} className="project-card"style={{ marginTop: "20px", marginBottom:"20px" }}>
            <ProjectCard
              title="Object detection using TensorFlow"
              description="Object detection using TensorFlow leverages deep learning to identify and locate objects within images. 
              This technology applies convolutional neural networks (CNNs), enabling applications in autonomous driving, security surveillance, and real-time object tracking."
              keywords="Python | Tensorflow | OpenCv | Machine learning"
            />
          </Col>

        </Row> 
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
