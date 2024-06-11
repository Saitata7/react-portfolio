import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiAtlassian,
  DiBitbucket,
  DiDocker,
  DiPhp,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  const techStackRef = useRef(null);

  useEffect(() => {
    const scrollContainer = techStackRef.current;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const scrollInterval = setInterval(handleScroll, 10); // Adjust the speed of scrolling here

    return () => clearInterval(scrollInterval);
  }, []);

  const techstackContainer = {
    overflow: 'hidden', // Hide the overflowing content
    whiteSpace: 'nowrap', // Prevent the elements from wrapping to the next line
    paddingBottom: '20px', // Add some padding at the bottom for better spacing
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const techstackRow = {
    display: 'flex', // Use flexbox to arrange items in a single line
    flexWrap: 'nowrap', // Prevent flex items from wrapping
  };

  const techIcons = {
    flex: '0 0 ', // Ensure each icon takes only as much space as needed
    margin: '20px', // Add some margin for spacing between icons
    fontSize: '5rem', // Adjust the icon size as needed
  };

  return (
    <div ref={techStackRef} style={techstackContainer}>
      <Row style={techstackRow}>
        <Col xs={4} md={2} style={techIcons}>
          <DiReact />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiJava />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiPhp />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiPython />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiMysql />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <SiPostgresql />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiGit />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <SiRedis />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiAtlassian />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiBitbucket />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <DiDocker />
        </Col>
        <Col xs={4} md={2} style={techIcons}>
          <CgCPlusPlus />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
