import React from "react";
import "./index.css";
import Navbar from "./component/Navbar/Navbar.jsx";
import Home from "./component/Home/Home.jsx";
import Main from "./component/Main/Main.jsx";
import Footer from "./component/Footer/Footer.jsx";
// import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Main/>
      <Footer/>
      {/* <div className="containerComponentPage">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
        </Routes>
      </div> */}
    </>
  );
}

export default App;
