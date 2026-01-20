import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "50px" }}>
          <h1 className="project-heading" style={{ color: "white", paddingBottom: "20px" }}>
            My <strong className="purple">Resume</strong>
          </h1>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "20px" }}>
          <div style={{ textAlign: "center", color: "white", paddingBottom: "30px", maxWidth: "600px" }}>
            <p style={{ fontSize: "1.2em", marginBottom: "30px" }}>
              Click the button below to download my resume.
            </p>
            <p style={{ fontSize: "1em", color: "#c770f0", marginBottom: "30px" }}>
              <strong>Professional Summary:</strong>
            </p>
            <p style={{ fontSize: "0.95em", textAlign: "justify", lineHeight: "1.8", marginBottom: "30px" }}>
              Results-driven Java Full Stack Developer with 9+ years of progressive experience designing, developing, and deploying enterprise-grade applications across FMCG, FinTech, and trading platform domains. Proven expertise in Spring Boot, Spring WebFlux, reactive programming, microservices architecture, and cloud-native development using AWS and Azure. Specialized in building scalable AI-powered solutions leveraging Generative AI, LangChain, Angular, and GraphQL.
            </p>
            <p style={{ fontSize: "0.95em", textAlign: "justify", lineHeight: "1.8", marginBottom: "30px" }}>
              <strong style={{ color: "#c770f0" }}>Key Experience:</strong>
            </p>
            <ul style={{ textAlign: "left", fontSize: "0.9em", lineHeight: "2" }}>
              <li><strong>Kroger</strong> (Apr 2023 – Present) - Senior Java Full Stack Developer</li>
              <li><strong>TeamCal AI</strong> (Jun 2021 – Mar 2023) - GenAI Engineer & Full Stack Developer</li>
              <li><strong>DriveWealth LLC</strong> (Jan 2020 – May 2021) - Senior Java Full Stack Developer</li>
              <li><strong>Ionixx Technologies</strong> (May 2016 – Dec 2019) - Java Full Stack Developer</li>
            </ul>
          </div>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "20px", paddingBottom: "50px" }}>
          <Button
            variant="primary"
            href="/Sai Kumar Tata.docx"
            download="Sai_Kumar_Tata_Resume.docx"
            style={{ maxWidth: "250px", fontSize: "1.1em", padding: "10px 20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
