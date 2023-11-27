import React, { useEffect } from "react";
import video from "../../assets/vid1.mp4";
import "./Home.css";
import { FaLocationDot } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TbApps } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  //scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Find Your Dream Home
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" name="Enter name here..." id="" />
              <FaLocationDot className="icon" />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <CiFacebook className="icon" />
            <FaInstagram className="icon" />
            <MdAlternateEmail className="icon" />
          </div>
          <div className="leftIcons">
            <TbApps className="icon" />
            <BsListTask className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
