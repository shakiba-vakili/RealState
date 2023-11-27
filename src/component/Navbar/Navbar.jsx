import React, { useState } from "react";
import "./Navbar.css";
import { IoMdCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../public/ag-nav.png";

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
            <a href="#" className="logo">
              <img src={logo} alt="logo" />{" "}
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <CustomLink to="/about">Home</CustomLink>
              <CustomLink to="/about">Packages</CustomLink>
              <CustomLink to="/about">Shop</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/about">Pages</CustomLink>
              <CustomLink to="/about">News</CustomLink>
              <CustomLink to="/about">Contact</CustomLink>
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
      <a href={to} className="navLink">
        {children}
      </a>
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