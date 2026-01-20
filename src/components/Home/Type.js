import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Java Full Stack Developer",
          "GenAI Engineer",
          "Full Stack Developer",
          "Microservices Architect",
          "Cloud-Native Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
