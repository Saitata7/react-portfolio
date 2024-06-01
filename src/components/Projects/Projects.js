import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fact from "../../Assets/Projects/fact.jpeg";

import bitsOfCode from "../../Assets/Projects/bit.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are some of my recent projects on GitHub.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fact}
              isBlog={false}
              title="FactFinder"
              description="Fact Finder is a web application designed to tackle misinformation by detecting fake news articles. The prediction model uses machine learning and deep learning algorithms to discern between genuine and deceptive information."
              keywords="Python | Flask | React.js | Firebase | Machine learning"
              ghLink="https://github.com/Saitata7/2024S-JusticeLeague"
              demoLink="https://main--factfinder.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Business Website"
              description="This is a generic business template; customize it with your content and branding to make it unique to your business."
              keywords="React.js | Node.js | Boostrap"
              ghLink="https://github.com/Saitata7/business-web-site"
              demoLink="https://candid-syrniki-9cb004.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Wazrix-bot"
              description="AI-powered trading algorithm for WazirX. Buy low, sell high. Maximize profits by leveraging real-time market data and intelligent predictions."
              keywords="Python | Flask | Javascript"
              ghLink="https://github.com/Saitata7/wbot"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Blog book"
              description="On Blog Book, you can easily create and manage your own blog, publish captivating posts, and gain visibility among a wide range of blog categories."
              keywords="PHP | Codeigniter | Javascript | MySql"
              ghLink="https://github.com/Saitata7/blogBook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Recipe-dictionary mobile app"
              description="Streamline Cooking: Our app aims to simplify the cooking process by providing step-by-step recipes, ingredient lists, and cooking tips. Explore a variety of cuisines effortlessly."
              keywords="React Native | React.js | Firebase | Java | Ruby | C | C++"
              ghLink="https://github.com/Saitata7/Recipe-dictionary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="OAuth 2.0 Spring Boot"
              description="Securely authorize client applications with OAuth 2.0 in Spring Boot. Implement CRUD operations for seamless data management. But SQL file not included"
              keywords="Java | Spring Boot | Mysql | Postman"
              ghLink="https://github.com/Saitata7/oauth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="JOOQ Spring Boot"
              description="Efficient Java programming with JOOQ for seamless database operations in Spring Boot. Empower your application with streamlined CRUD operations and robust getter/setter functionality."
              keywords="Java | Spring Boot | Mysql | Postman"
              ghLink="https://github.com/Saitata7/jooq"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
