/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import FaAngleDoubleRight from "./assets/search.png";
import bestTravelsFour from "./assets/dubai-trip.jpg";
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
import BestTravel from "./Best-travels";

function Home() {
  return (
    <>
      <section className="memories">
        <div className="container">
          {" "}
          <div className="flex">
            <h1>
              Travel to <span>make memories</span> all around the world
            </h1>
          </div>
          <div className="cont-cards">
            <div className="cards">
              <div className="circle blue">
                <img src={calendarTwo} alt="" />
              </div>
              <h5>Book & Relax</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                dignissim duis volutpat. Orci vel molestie vitae purus felis
                urna tincidunt.
              </p>
            </div>

            <div className="cards">
              <div className="circle brown">
                <img src={checkCircle} alt="" />
              </div>
              <h5>Smart check list</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                dignissim duis volutpat. Orci vel molestie vitae purus felis
                urna tincidunt.
              </p>
            </div>

            <div className="cards">
              <div className="circle pink">
                <img src={discountIcon} alt="" />
              </div>
              <h5>Save more</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                dignissim duis volutpat. Orci vel molestie vitae purus felis
                urna tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
