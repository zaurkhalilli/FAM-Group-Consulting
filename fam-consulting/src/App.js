import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Rehberlik from "./Pages/Rehberlik";
import Haqqimizda from "./Pages/Haqqimizda";
import Xidmetler from "./Pages/Xidmetler";


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
            <Route path="/rehberlik" element={<Rehberlik />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
