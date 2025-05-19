import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";


function App() {
  return (
    <div>
      <BrowserRouter basename="/FAM-Group-Audit">
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
