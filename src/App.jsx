// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Blogs from "./Navbar";
import SignUp from "./SIgnUp";
import AllFlights from "./allFlights";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/flights" element={<AllFlights />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
