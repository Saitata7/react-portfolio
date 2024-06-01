import React, { useEffect, useState } from "react";
import Rocket from "../../Assets/Projects/rocket.webp";


function ScrollToCenter() {
  const [scrollHeight, setScrollHeight] = useState(40); // Start from 40% from the top

  const handleScroll = () => {
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.pageYOffset;
    // Calculate the top value based on scroll: start at 40% and end at 80% (which is 10% from the bottom)
    const topValue = 40 + ((currentScroll / totalScrollHeight) * (80 - 40));

    setScrollHeight(topValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <img
      src={Rocket}  
      alt="Rocket"
      style={{
        position: "fixed",
        left: "50%", // Center the image on the page, adjust as needed
        transform: "translateX(-50%)", // Center align image properly
        width: "100px", 
        top: `${scrollHeight}%`, // Move the top position of the image based on scroll
        '@media (max-width: 768px)': { // Media query for mobile devices
            left: "10px", // Position to the left on mobile
            transform: "initial" // Remove center alignment transform on mobile
        }
      }}
    />
  );
}

export default ScrollToCenter;
