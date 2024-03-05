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
import Seats from "./Seats";
import Appetizers from "./Appetizers";
import Ammenities from "./Ammenities";

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
            <Route path="/seats" element={<Seats />} />
            <Route path="/appetizers" element={<Appetizers />} />
            <Route path="/ammenities" element={<Ammenities />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
