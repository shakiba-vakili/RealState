import React, { useEffect } from "react";
import "./Footer.css";
import video2 from "../../assets/vid2.mp4";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/ag-nav.png";
import { Link } from "react-router-dom";

const Footer = () => {
  //scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small data-aos="fade-up">KEEP IN TOUCH</small>
            <h2 data-aos="fade-up">Find your Dream Home</h2>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv" data-aos="fade-up">
              {" "}
              <a href="#" className="logo">
                <img src={logo} alt="logo" />{" "}
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              atque, distinctio aliquid repellendus illo necessitatibus? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Porro, modi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium?
            </div>

            <div className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
              <MdAlternateEmail className="icon" />
              <CiLinkedin className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div
              className="linkGroup"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/">Packages</CustomLink>
              <CustomLink to="/">Shop</CustomLink>
              <CustomLink to="/news">News</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </div>
            <div
              className="linkGroup"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <span className="groupTitle">OUR PRIVEACY</span>

              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/">Packages</CustomLink>
              <CustomLink to="/">Shop</CustomLink>
              <CustomLink to="/termsOfService">Terms Of Service</CustomLink>
              <CustomLink to="/privacyPolicy">Privacy Policy</CustomLink>
            </div>
            {/* <div
              className="linkGroup"
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              <span className="groupTitle">OUR PRIVEACY</span> 

              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/">Packages</CustomLink>
              <CustomLink to="/">Shop</CustomLink>
              <CustomLink to="/">About</CustomLink>
              <CustomLink to="/privacyPolicy">Privacy Policy</CustomLink>

            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <li className="footerList flex">
      <FaChevronRight className="icon" />
      <Link to={to} className="navLink">
        {children}
      </Link>
    </li>
  );
}

export default Footer;
