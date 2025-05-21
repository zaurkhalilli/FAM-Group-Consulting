import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Rehberlik from "./Pages/Rehberlik";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rehberlik" element={<Rehberlik />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
