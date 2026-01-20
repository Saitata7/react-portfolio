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
              title="Senior Java Full Stack Developer - Kroger"
              duration="Apr 2023 – Present"
              description="Architected and developed high-performance microservices for Kroger's FMCG retail platform using Spring Boot 3.x and Spring WebFlux, supporting reactive programming patterns to handle 100K+ concurrent transactions across 2,800+ stores nationwide with 99.9% uptime. Implemented cloud-native solutions on Azure leveraging Azure Functions, Azure Service Bus, and Azure Cosmos DB for real-time inventory management, price optimization, and supply chain analytics serving 60+ million customers annually."
              description2="Pioneered VIBE (Visual Inspection and Business Enhancement) coding initiative using computer vision and machine learning to automate product quality checks and shelf monitoring, reducing manual inspection time by 40% and improving stock accuracy by 25%. Designed and implemented event-driven architecture using Apache Kafka for real-time streaming of point-of-sale data, promotional campaigns, and customer behavior analytics, processing 5M+ messages daily with sub-second latency."
              keywords="Java 17 | Spring Boot 3.x | Spring WebFlux | Spring Cloud | Azure | Apache Kafka | PostgreSQL | Redis | Docker | Kubernetes | GraphQL | Microservices | Angular | TypeScript"
            />
          </Col>

          <Col md={12} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              title="GenAI Engineer & Full Stack Developer - TeamCal AI"
              duration="Jun 2021 – Mar 2023"
              description="Spearheaded development of AI-powered intelligent scheduling platform using Generative AI, LangChain, and GPT-4 to automate meeting coordination, calendar optimization, and team availability management for enterprise clients with 10K+ users. Architected end-to-end AI flow using LangChain framework integrating OpenAI APIs, Azure OpenAI Services, and custom LLM chains to understand natural language scheduling requests, extract entities, and generate optimal meeting proposals."
              description2="Designed and implemented sophisticated scheduling logic algorithms combining constraint satisfaction, graph theory, and machine learning to resolve conflicts across time zones, participant preferences, and resource availability with 95% accuracy. Built modern Angular 14+ frontend with TypeScript, RxJS, and NgRx state management implementing responsive UI/UX for calendar views, availability widgets, and AI chat interface for conversational scheduling."
              keywords="Python | LangChain | OpenAI API | GPT-4 | Azure OpenAI | Angular 14 | TypeScript | Spring Boot | FastAPI | AWS | Pinecone | RAG Architecture | NLP | Machine Learning"
            />
          </Col>

          <Col md={12} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              title="Senior Java Full Stack Developer - DriveWealth LLC"
              duration="Jan 2020 – May 2021"
              description="Engineered critical components of DriveWealth's proprietary cloud-native trading platform handling $50B+ in annual trading volume, supporting fractional share trading, international equities access, and real-time order execution for 100+ fintech partners. Developed high-performance microservices using Spring Boot and Spring WebFlux for order management, trade execution, and market data processing, achieving sub-100ms latency for order routing and 99.99% system availability."
              description2="Architected and implemented comprehensive post-trade processing system handling trade settlement, clearing, reconciliation, corporate actions, and regulatory reporting for SEC, FINRA, and international compliance requirements. Built GraphQL API layer using Spring GraphQL providing flexible querying capabilities for portfolio management, account aggregation, transaction history, and real-time position updates reducing client-side data fetching by 60%."
              keywords="Java 11 | Spring Boot | Spring WebFlux | GraphQL | gRPC | AWS | PostgreSQL | Redis | Microservices | Post-Trade Processing | OAuth2 | JWT | Docker | Jenkins"
            />
          </Col>

          <Col md={12} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              title="Java Full Stack Developer - Ionixx Technologies"
              duration="May 2016 – Dec 2019"
              description="Contributed to diverse client projects as part of service-based IT consulting, delivering custom enterprise applications across healthcare, e-commerce, banking, and logistics domains for Fortune 1000 companies. Developed full-stack web applications using Java 8, Spring MVC, Spring Boot, Hibernate ORM, and Angular for building responsive single-page applications with RESTful backend services."
              description2="Implemented microservices architecture using Spring Boot and Spring Cloud for healthcare patient management system serving 50+ hospitals, enabling independent deployment and scalability of clinical modules. Built e-commerce platform backend using Spring Boot with payment gateway integration (Stripe, PayPal), inventory management, order processing, and customer relationship management supporting 100K+ daily transactions."
              keywords="Java 8 | Spring Boot | Spring MVC | Spring Security | Hibernate | Angular | TypeScript | REST API | MySQL | Oracle | Redis | AWS | Docker | Jenkins | JUnit | Mockito"
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
