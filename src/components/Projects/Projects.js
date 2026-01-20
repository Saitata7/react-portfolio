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
        Here are some of my recent projects showcasing my expertise in Java, Spring Boot, Angular, AI/ML, and full-stack development.
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

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TeamCal AI - Intelligent Scheduling Platform"
              description="AI-powered intelligent scheduling platform using Generative AI, LangChain, and GPT-4 to automate meeting coordination and calendar optimization. Features include natural language processing for scheduling requests, conflict resolution across time zones, and RAG architecture for context-aware suggestions."
              keywords="Python | LangChain | OpenAI API | GPT-4 | Angular 14 | TypeScript | Spring Boot | FastAPI | AWS | RAG Architecture | NLP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Java FTP Server Integration"
              description="Developed a robust Java application with FTP/SFTP server integration for automated file processing. Handles file transfers, batch processing, and error detection for trade confirmations and settlement files. Includes secure authentication and file validation mechanisms."
              keywords="Java | Spring Boot | FTP | SFTP | File Processing | Batch Operations"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Java gRPC & GraphQL Microservices"
              description="Built high-performance microservices using gRPC for inter-service communication and GraphQL API layer for flexible querying. Implemented for trading platform handling real-time order execution, portfolio management, and account aggregation with sub-100ms latency."
              keywords="Java | Spring Boot | gRPC | GraphQL | Spring GraphQL | Microservices | PostgreSQL | Redis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Angular Full Stack Application"
              description="Developed a complete full-stack application with Angular frontend and Spring Boot backend. Features include responsive UI with Angular Material, RxJS for reactive programming, NgRx for state management, and RESTful APIs with JWT authentication."
              keywords="Angular | TypeScript | RxJS | NgRx | Spring Boot | REST API | JWT | Angular Material"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Custom Clothing E-Commerce Platform"
              description="Built a custom e-commerce platform for clothing design with full-stack implementation. Features include user authentication, payment gateway integration, inventory management, order processing, and responsive design. Deployed on AWS with scalable architecture."
              keywords="React.js | PHP | MySQL | AWS | Payment Gateway | E-commerce | Bootstrap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TeamCal AI - Calendar Integration System"
              description="Developed calendar integration system for TeamCal AI supporting Google Calendar, Outlook, and Office 365. Features real-time synchronization, WebSocket notifications, availability widgets, and intelligent meeting room recommendations using semantic search."
              keywords="Angular | TypeScript | Spring Boot | WebSockets | Calendar API | Google Calendar | Outlook | Office 365"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Angular Enterprise Dashboard"
              description="Created an enterprise-level Angular dashboard application with advanced features including data visualization, real-time updates, role-based access control, and multi-tenant architecture. Integrated with backend microservices for comprehensive data management."
              keywords="Angular | TypeScript | RxJS | NgRx | Spring Boot | Microservices | Chart.js | OAuth2"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
