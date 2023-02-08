import React from "react";
import "./destination.css";
import desktop from "../../assets/destination/background-destination-desktop.jpg";
import tablet from "../../assets/destination/background-destination-tablet.jpg";
import mobile from "../../assets/destination/background-destination-mobile.jpg";
import DestinationData from "../DestinationData";
import { motion } from "framer-motion";

const Destination = () => {

  //states the planet that selected
  const [selectedPlanet, setSelectedPlanet] = React.useState(DestinationData.find(planet => planet.name === "Moon"));

  //onClick event in selected planet
  const handleClick = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="destination">
      <img src={desktop} alt="" className="destination-desktop" />
      <img src={tablet} alt="" className="destination-tablet" />
      <img src={mobile} alt="" className="destination-mobile" />
      <div className="destination-text">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <span>01</span> PICK YOUR DESTINATION
        </motion.h1>
      </div>
      <div className="destination-arrays">
        <div className="arrays-image">
          {/* display planet according to clicked */}
          {selectedPlanet && (
            <div>
              <img src={selectedPlanet.images} alt={selectedPlanet.name} />
            </div>
          )}
          {/* display planet image according to clicked */}
        </div>
        <div className="arrays-text">
          <div className="arrays-text-list">
            <ul>
              {DestinationData.map((planet) => (
                <li
                  className={planet === selectedPlanet ? "active"  : ""} 
                  key={planet.name}
                  onClick={() => handleClick(planet)}
                >
                  {planet.name.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
          <motion.div className="arrays-text-details"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          >
            {/* display planet details according to clicked */}
            {selectedPlanet && (
              <div>
                <h1>{selectedPlanet.name.toUpperCase()}</h1>
                <p>{selectedPlanet.description}</p>
              </div>
            )}
            <div className="arrays-text-details-info">
              <div className="distance">
                <span>AVG. DISTANCE</span>
                <h2>{selectedPlanet.distance}</h2>
              </div>
              <div className="travel-time">
                <span>Est. travel time</span>
                <h2>{selectedPlanet.travel}</h2>
              </div>
            </div>
            {/* display planet details according to clicked */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
