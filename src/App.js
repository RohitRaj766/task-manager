import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/views/home";
import Works from "./components/views/works";
import About from "./components/views/about";
import "./App.css";
// import './components/views'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          {/* Define other routes here as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
