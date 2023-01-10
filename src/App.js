import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNav from "./navbar/TopNav";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
