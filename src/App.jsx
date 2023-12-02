import React from "react";
import "./index.css";
import PageMain from "./component/Pages/PageMain";
import News from "./component/News/News";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
          <Navbar />

        <Routes>
          <Route path="/" element={<PageMain/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
        <Footer />

    </>
  );
}

export default App;
