import React from "react";
import "./home.css";
import desktop from "../../assets/home/background-home-desktop.jpg";
import tablet from "../../assets/home/background-home-tablet.jpg";
import mobile from "../../assets/home/background-home-mobile.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <img src={desktop} alt="" className="desktop" />
      <img src={tablet} alt="" className="tablet" />
      <img src={mobile} alt="" className="mobile" />
      <motion.div
        className="home-text"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a turly out of the world
          experience!
        </p>
      </motion.div>
      <motion.div
        className="home-circle"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <h1>EXPLORE</h1>
      </motion.div>
    </div>
  );
};

export default Home;
