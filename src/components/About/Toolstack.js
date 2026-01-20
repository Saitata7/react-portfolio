import React, { useEffect } from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiAnaconda,
  SiIntellijidea,
  SiMacos,
  SiMicrosoftazure,
  SiJenkins,
  SiKubernetes,
  SiDocker,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

function Toolstack() {
  useEffect(() => {
    const container = document.getElementById("toolstack-container");
    const scrollAmount = 1;
    const delay = 50; // Adjust the delay to control the speed

    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed > delay) {
        container.scrollLeft += scrollAmount;
        start = timestamp;

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // Reset to the beginning when reaching the end
        }
      }

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }, []);

  const toolstackContainer = {
    overflowX: "auto",
    whiteSpace: "nowrap",
    paddingBottom: "20px",
    position: "relative",
  };

  const toolIcons = {
    display: "inline-block",
    margin: "10px",
    fontSize: "2rem",
  };

  return (
    <div id="toolstack-container" style={toolstackContainer}>
      <span style={toolIcons}><SiMacos /></span>
      <span style={toolIcons}><SiIntellijidea /></span>
      <span style={toolIcons}><SiVisualstudiocode /></span>
      <span style={toolIcons}><SiPostman /></span>
      <span style={toolIcons}><SiDocker /></span>
      <span style={toolIcons}><SiKubernetes /></span>
      <span style={toolIcons}><SiJenkins /></span>
      <span style={toolIcons}><SiGithubactions /></span>
      <span style={toolIcons}><SiMicrosoftazure /></span>
      <span style={toolIcons}><SiPrometheus /></span>
      <span style={toolIcons}><SiGrafana /></span>
      <span style={toolIcons}><SiSlack /></span>
      <span style={toolIcons}><SiAnaconda /></span>
    </div>
  );
}

export default Toolstack;
