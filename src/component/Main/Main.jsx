import React, { useEffect } from "react";
import "./Main.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";


import Aos from "aos";
import "aos/dist/aos.css";
const Data = [
  {
    id: 1,
    imgsrc: img1, 
    destTitle: "Dubai",
    location: "UAE",
    grade: "A",
    fees: "1000$",
    description: "The bustling city of Dubai.",
  },
  {
    id: 2,
    imgsrc: img2,
    destTitle: "Abu Dhabi",
    location: "UAE",
    grade: "A+",
    fees: "1200$",
    description: "The capital city of the UAE.",
  },
  {
    id: 3,
    imgsrc: img3,
    destTitle: "Sharjah",
    location: "UAE",
    grade: "B",
    fees: "800$",
    description: "Known for its cultural attractions.",
  },
  {
    id: 4,
    imgsrc: img4,
    destTitle: "Ajman",
    location: "UAE",
    grade: "B-",
    fees: "700$",
    description: "A charming emirate.",
  },
  {
    id: 5,
    imgsrc: img5,
    destTitle: "Fujairah",
    location: "UAE",
    grade: "C",
    fees: "600$",
    description: "Surrounded by mountains and beaches.",
  },
  {
    id: 6,
    imgsrc: img6,
    destTitle: "Ras Al Khaimah",
    location: "UAE",
    grade: "A",
    fees: "1100$",
    description: "Known for its natural beauty.",
  },
  {
    id: 7,
    imgsrc: img7,
    destTitle: "Umm Al Quwain",
    location: "UAE",
    grade: "B+",
    fees: "900$",
    description: "A peaceful emirate.",
  },
  {
    id: 8,
    imgsrc: img8,
    destTitle: "Al Ain",
    location: "UAE",
    grade: "A-",
    fees: "950$",
    description: "Famous for its oasis and gardens.",
  },
  {
    id: 9,
    imgsrc: img9,
    destTitle: "Khor Fakkan",
    location: "UAE",
    grade: "C+",
    fees: "750$",
    description: "A coastal town with scenic views.",
  },
  {
    id: 10,
    imgsrc: img10,
    destTitle: "Dibba Al-Fujairah",
    location: "UAE",
    grade: "B-",
    fees: "780$",
    description: "Nestled between the mountains and the ocean.",
  },
];
const Main = () => {
    //scroll animation
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3  data-aos="fade-right" className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgsrc, destTitle, fees, grade, location, description }) => (
            <div data-aos="fade-up" key={id} className="singleDestination">
              {/* Render content for each destination */}
              <div className="imageDiv">
              <img src={imgsrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <IoLocationSharp className="icon" />

                  <span className="name">Location: {location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>Grade: <span className="small">{grade}</span></span>
                  </div>
                  <div className="price">
                    <h5> {fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className="btn flex">
                  DETAILS
                  <FaClipboardList className="icon" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Main;
