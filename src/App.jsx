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
import Restaurant from "./Restaurant";
import Rant from "./rant";
import BestTravel from "./Best-travels";

function App() {
  return (
    <>
      <div className="">
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
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/rant" element={<Rant />} />
            <Route path="/best-travels" element={<BestTravel />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
