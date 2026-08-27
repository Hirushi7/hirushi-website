import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import Experience1 from "./pages/Experience1";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <Router>
       <ScrollToTop />   {/* ✅ ensures scroll resets on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
                <Route path="/experience1" element={<Experience1 />} />
        <Route path="/contact" element={<Contact />} />


        
      </Routes>
    </Router>
  );
}

export default App;
