import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/views/home";
import Works from "./components/views/works";
import About from "./components/views/about";
// import Login from "./components/login/login"
// import Signup from "./components/signup/signup"
import "./App.css";
// import './components/views'
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/> */}
          {/* Define other routes here as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
