import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text style={{ fontSize: "12px" }}> {props.duration} </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description2}
        </Card.Text>
        <Card.Text className="purple">
          {props.keywords}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCards;
