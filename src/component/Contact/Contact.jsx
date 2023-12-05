import React, { useState,useEffect } from "react";
import "./Contact.css";
import img from "../../assets/img13.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
    });
  };

  return (
    <section className="container contact section">
      <form data-aos="fade-up" onSubmit={handleSubmit} className="form left flex-item">
        <div className="div-input">
          <label htmlFor="name" className="label-input">
            Name:
          </label>
          <input
            className="content-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="div-input">
          <label htmlFor="email" className="label-input">
            Email:
          </label>
          <input
            className="content-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="div-input">
          <label htmlFor="phone" className="label-input">
            Phone:
          </label>
          <input
            className="content-input"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="div-input">
          <label htmlFor="message" className="label-input">
            Message:
          </label>
          <textarea
            className="content-input"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn" data-aos="fade-up" data-aos-duration="4000">
          Submit
        </button>
      </form>
      <div data-aos="fade-up" className="img right flex-item">
        <img src={img} alt="dubi" className="img" />
        <div className="secContent container">
          <div className="contactDiv flex">
            <div className="text">
              <small data-aos="fade-up">KEEP IN TOUCH</small>
              <h2 data-aos="fade-up">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
