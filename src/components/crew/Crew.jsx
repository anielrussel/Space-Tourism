import React from "react";
import "./crew.css";
import desktop from "../../assets/crew/background-crew-desktop.jpg";
import tablet from "../../assets/crew/background-crew-tablet.jpg";
import mobile from "../../assets/crew/background-crew-mobile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import CrewData from "../CrewData";
import { motion } from "framer-motion";

const Crew = () => {
  return (
    <div className="crew">
      <img src={desktop} alt="" className="crew-desktop" />
      <img src={tablet} alt="" className="crew-tablet" />
      <img src={mobile} alt="" className="crew-mobile" />
      <div className="crew-text">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <span>02</span> MEET YOUR CREW
        </motion.h1>
      </div>
      <motion.div
        className="crew-slider"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".crew-slider-pagination",
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {CrewData.map((slide) => (
            <SwiperSlide key={slide.name}>
              <div className="crew-slider-details">
                <div className="crew-slider-details-text">
                  <h2>{slide.role}</h2>
                  <h1>{slide.name}</h1>
                  <p>{slide.bio}</p>
                </div>
                <div className="crew-slider-details-image">
                  <img src={slide.images.png} alt={slide.name} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="crew-slider-pagination"></div>
      </motion.div>
    </div>
  );
};

export default Crew;
