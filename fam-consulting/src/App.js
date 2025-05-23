import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Rehberlik from "./Pages/Rehberlik";
import Haqqimizda from "./Pages/Haqqimizda";
import Xidmetler from "./Pages/Xidmetler";
import Elaqe from "./Pages/Elaqe";
import Etics from "./Pages/Etics";
import Musteriler from "./Pages/Musteriler";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Haqqimizda />} />
            <Route path="/services" element={<Xidmetler />} />
            <Route path="/contact" element={<Elaqe />} />
            <Route path="/rehberlik" element={<Rehberlik />} />
            <Route path="/ethics" element={<Etics />} />
            <Route path="/customers" element={<Musteriler />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
