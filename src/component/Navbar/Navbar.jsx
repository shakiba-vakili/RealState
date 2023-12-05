import React, { useState } from "react";
import "./Navbar.css";
import { IoMdCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/ag-nav.png";
import { Link } from "react-router-dom";

// import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavBar");
  };
  const removeNav = () => {
    setActive("navBar ");
  };
  return (
    <>
      <section className="navBarSection">
        <header className=" header flex">
          <div className="logoDiv">
            <a href="/" className="logo">
              <img src={logo} alt="logo" />{" "}
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/news">News</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
              <button className="btn">
                <a href="3">BOOK NOW</a>
              </button>
            </ul>

            <div onClick={removeNav} className="closeNavBar">
              <IoMdCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toggleNavBar">
            <GiHamburgerMenu className="icon" />
          </div>
        </header>
      </section>
    </>
    // <div className="nav">
    //   <div className="nav-left">
    //     <Link to="/" className="nav-logo">
    //       <img src="./ag-nav.png" alt="" />{" "}
    //     </Link>
    //   </div>
    //   <div className="nav-right">
    //     <ul>
    //       <CustomLink to="/about">About</CustomLink>
    //       <CustomLink to="/privacyPolicy">Privacy Policy</CustomLink>
    //     </ul>
    //   </div>
    // </div>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <li className="navItem">
      <Link to={to} className="navLink">
        {children}
      </Link>
    </li>
  );
}
// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname });
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to}>{children}</Link>
//     </li>
//   );
// }

export default Navbar;
