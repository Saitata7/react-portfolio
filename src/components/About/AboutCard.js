import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Kumar Tata </span>
            from <span className="purple"> Cincinnati, OH, United States of America.</span>
            <br />
            <br />
            Results-driven Java Full Stack Developer with 9+ years of progressive experience designing, developing, and deploying enterprise-grade applications across FMCG, FinTech, and trading platform domains. Proven expertise in Spring Boot, Spring WebFlux, reactive programming, microservices architecture, and cloud-native development using AWS and Azure. Specialized in building scalable AI-powered solutions leveraging Generative AI, LangChain, Angular, and GraphQL.
            <br />
            <br />
            Outside of coding, I have a passion for a variety of other activities!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Hello World!"{" "}
          </p> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
