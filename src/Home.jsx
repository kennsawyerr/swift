/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import FaAngleDoubleRight from "./assets/search.png";
import bestTravelsFour from "./assets/dubai-trip.jpg";
import planeImageone from "./assets/planeone.png";
import planeImagetwo from "./assets/planetwo.png";
import familyMinorsLounge from "./assets/family-vacation.jpeg";
import planeImagethree from "./assets/planethree.png";
import menuImg from "./assets/menu.png";
import skybg from "./assets/sky.jpg";
import plane from "./assets/plane-mockup.png";
import search from "./assets/search.png";

// social media

import userIcon from "./assets/user.png";

import calendarTwo from "./assets/calTwo.png";
import checkCircle from "./assets/checkcircle.png";
import discountIcon from "./assets/discount.png";
import FlightLevels from "./flightlevels";
import { NavLink } from "react-router-dom";
import "./App.css";
import Memories from "./Memories";
import BestTravel from "./Best-travels";
import Loader from "./Loader";

//animation
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [messages, setMessages] = useState(false);
  const comingSoon = () => {
    setMessages(true);
    setTimeout(() => {
      setMessages(false);
    }, 2000);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="main-navbar  flex">
          <div className="hide">
            <NavLink to="/" className="nav-link">
              <div className="logo-header ">Sterling</div>
            </NavLink>
            <div className="logo-header_sub ">FLIGHT BOOKING AGENCY</div>
          </div>

          <ul className="navMenu hide">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>About</li>
            <li>Offers</li>
            <li>Seats</li>
            <li>Destination</li>
          </ul>

          <button className=" hide contact-btn"> Sign up</button>
        </div>
      </div>
      <main>
        <div className="container">
          <h1 data-aos="fade-up" data-aos-duration="2500" className="hero-text">
            Find and Book
            <span>A Great Experience</span>
          </h1>

          <div className="img-cont">
            <img src={skybg} className="sky-bg" alt="sky-background" />
            <img src={plane} className="plane" alt="an airplane in the sky" />
          </div>

          <FlightLevels />

          <section className="travel-supp">
            <div className="travel-text-cont">
              <h6>T R A V E L S U P P O R T</h6>{" "}
              <h3>Plan your travel with confidence</h3>
              <p className="hero_sub_sub-text">
                Find help with your bookings and travel plans, and see what to
                expect along the journey.
              </p>
            </div>
            <div className="flex">
              <div>
                <ul data-aos="fade-up" data-aos-duration="3000">
                  <li>
                    <span className="reasons blue">01</span>
                    <h4>Travel requirements for Dubai</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque
                      diam dignissim duis volutpat. Orci vel molestie vitae
                      purus felis urna tincidunt.
                    </p>
                  </li>

                  <li data-aos="fade-up" data-aos-duration="3500">
                    <span className="reasons brown">02</span>
                    <h4>Multi-risk travel insurance</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque
                      diam dignissim duis volutpat. Orci vel molestie vitae
                      purus felis urna tincidunt.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="4000">
                    <span className="reasons  pink">03</span>
                    <h4>Travel requirements by destination</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque
                      diam dignissim duis volutpat. Orci vel molestie vitae
                      purus felis urna tincidunt.
                    </p>
                  </li>
                </ul>
              </div>

              <div
                data-aos="fade-down"
                data-aos-duration="4000"
                className=" flex travel-plane-cont"
              >
                {/* <img
                  src={planeImageone}
                  alt="a plane picture"
                  className="travel-img travel-img-one"
                /> */}
                <div className="family-minors-image-cont">
                  <img
                    src={familyMinorsLounge}
                    alt="a plane picture"
                    className="travel-img travel-img-two"
                  />
                </div>
                {/* <img
                  src={planeImagethree}
                  alt="a plane picture"
                  className="travel-img travel-img-three"
                /> */}
              </div>
            </div>
          </section>
        </div>

        <Memories />
        <article className="flex container">
          <div className="image-cont-3">
            <img src={planeImageone} alt="" className="biggerImg" />

            <img src={planeImagethree} alt="" className="smallImg" />
          </div>

          <div className="lounge">
            <h2>
              Unaccompanied <span>Minors Lounge</span>
            </h2>
            <ul className="grid">
              <li data-aos="fade-up" data-aos-duration="3500">
                <h4>Help through the airport</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                  dign
                </p>
              </li>

              <li data-aos="fade-up" data-aos-duration="3500">
                <h4>Priority boarding</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                  dign
                </p>
              </li>

              <li data-aos="fade-up" data-aos-duration="3500">
                <h4>Care on the flight</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                  dign
                </p>
              </li>

              <li data-aos="fade-up" data-aos-duration="3500">
                <h4>Support when they land</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                  dign
                </p>
              </li>
            </ul>
          </div>
        </article>

        <BestTravel />

        <section className="newsletter">
          <div className="container">
            <h1
              className="newsletter-h1"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              Subscribe to our Newsletter &<span> get latest News</span>
            </h1>

            {/* <div className="email-cont">
              {/* <input type="text" />
              <button></button> 
            </div> */}
          </div>
        </section>

        <div className="container">
          {/* working with fetching api over here */}

          <section>
            {/* {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
            job info */}

            <article className="job-info"></article>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
