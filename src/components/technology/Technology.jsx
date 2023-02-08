import React from "react";
import "./technology.css";
import desktop from "../../assets/technology/background-technology-desktop.jpg";
import tablet from "../../assets/technology/background-technology-tablet.jpg";
import mobile from "../../assets/technology/background-technology-mobile.jpg";
import TechnologyData from "../TechnologyData";
import { motion } from "framer-motion";

const Technology = () => {
  //states the technology that selected
  const [selectedTechnology, setSelectedTechnology] = React.useState(
    TechnologyData.find((tech) => tech.name === "Launch vehicle")
  );

  //onClick event in selected tech
  const handleClick = (tech) => {
    setSelectedTechnology(tech);
  };

  return (
    <div className="technology">
      <img src={desktop} alt="" className="technology-desktop" />
      <img src={tablet} alt="" className="technology-tablet" />
      <img src={mobile} alt="" className="technology-mobile" />
      <div className="technology-text">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <span>03</span> SPACE LAUNCH 101
        </motion.h1>
      </div>
      <div className="technology-hero">
        <motion.div
          className="technology-hero-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <div className="technology-hero-text-number">
            {TechnologyData.map((technology) => (
              <h1
                className={
                  technology === selectedTechnology ? "tech-active" : ""
                }
                key={technology.name}
                onClick={() => handleClick(technology)}
              >
                {technology.number.toUpperCase()}
              </h1>
            ))}
          </div>
          <div className="technology-hero-text-details">
            <h2>THE TERMINOLOGY…</h2>
            <h1>{selectedTechnology.name.toUpperCase()}</h1>
            <p>{selectedTechnology.description}</p>
          </div>
        </motion.div>
        <div className="technology-hero-image">
          {selectedTechnology && (
            <>
              <div className="technology-hero-image-desktop">
                <img
                  src={selectedTechnology.images.portrait}
                  alt={selectedTechnology.name}
                />
              </div>
              <div className="technology-hero-image-tablet">
                <img
                  src={selectedTechnology.images.landscape}
                  alt={selectedTechnology.name}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
