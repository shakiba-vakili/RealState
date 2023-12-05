import React, { useEffect } from "react";
import "./TermsOfService.css";
import Aos from "aos";
import "aos/dist/aos.css";
const TermsOfService = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="termsOfService container">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title-tt">
          Terms Of Service{" "}
        </h3>
      </div>{" "}
      <div className="text">
        <p data-aos="fade-up" data-aos-duration="3000">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est et esse
          ratione labore ad beatae quisquam aspernatur deserunt, adipisci non at
          nostrum? Eaque placeat impedit id et nostrum, quam soluta.
        </p>
        <p data-aos="fade-up" data-aos-duration="4000">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est et esse
          ratione labore ad beatae quisquam aspernatur deserunt, adipisci non at
          nostrum? Eaque placeat impedit id et nostrum, quam soluta.
        </p>
        <p data-aos="fade-up" data-aos-duration="5000">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est et esse
          ratione labore ad beatae quisquam aspernatur deserunt, adipisci non at
          nostrum? Eaque placeat impedit id et nostrum, quam soluta.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
