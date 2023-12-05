import React from "react";
import "./index.css";
import PageMain from "./component/Pages/PageMain";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import News from "./component/News/News";
import Contact from "./component/Contact/Contact";
import PrivacyPolicy from './component/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from './component/TermsOfService/TermsOfService'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
