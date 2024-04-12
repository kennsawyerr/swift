/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import FaAngleDoubleRight from "./assets/search.png";
import bestTravelsFour from "./assets/dubai-trip.jpg";
import bestTravelsThree from "./assets/bestTravelsTwo.png";
import bestTravelsTwo from "./assets/italy.jpg";
import bestTravelsOne from "./assets/paris.jpg";
import planeImageone from "./assets/planeone.png";
import planeImagetwo from "./assets/planetwo.png";
import planeImagethree from "./assets/planethree.png";
import menuImg from "./assets/menu.png";
import skybg from "./assets/sky.jpg";
import plane from "./assets/plane-mockup.png";
import search from "./assets/search.png";

// social media
import socialfb from "./assets/Fb.png";
import socialig from "./assets/Ig.png";
import socialtw from "./assets/Tw.png";
import socialln from "./assets/Ln.png";
import userIcon from "./assets/user.png";

import calendarTwo from "./assets/calTwo.png";
import checkCircle from "./assets/checkcircle.png";
import discountIcon from "./assets/discount.png";
import FlightLevels from "./flightlevels";
import { NavLink } from "react-router-dom";
import "./App.css";

function BestTravel() {
  return (
    <>
      <section className="travel-of-the-mth">
        <div className="container">
          <h3>
            {" "}
            <span>Top travels</span> of the month!
          </h3>

          <div className="traveling-cont">
            <ul className="grid-cont ">
              <li className="bestTravel">
                <div className="image-mth-cont">
                  <img src={bestTravelsFour} alt="" className="month-img" />
                </div>
                <h5>Matthew Murdock</h5>
                <p>Lorem ipsum</p>
              </li>

              <li className="bestTravel">
                <div className="image-mth-cont">
                  <img src={bestTravelsThree} alt="" className="month-img" />
                </div>
                <h5>Jacob Jones</h5>
                <p>Lorem ipsum</p>
              </li>

              <li className="bestTravel">
                <div className="image-mth-cont">
                  <img src={bestTravelsTwo} alt="" className="month-img" />
                </div>
                <h5>Leslie Alexander</h5>
                <p>Lorem ipsum</p>
              </li>

              <li className="bestTravel">
                <div className="image-mth-cont">
                  <img src={bestTravelsOne} alt="" className="month-img" />
                </div>

                <h5>Anita Smith</h5>
                <p>Lorem ipsum</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestTravel;
