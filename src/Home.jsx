/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import bestTravelsFour from "./assets/bestTravelsFour.png";
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
import "./App.css";

function Home() {
  return (
    <>
      <nav>
        <div className="container flex">
          <img src={menuImg} alt="" />
          <ul className=" gap-20 flex">
            <li>Support</li>
            <li>Languages</li>
            
          </ul>

          <ul className=" gap-20 flex">
            <li>Sign up</li>
            <li>Sign in</li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="main-navbar flex">
          <div>
            <div className="logo-header">namaste</div>
            <div className="logo-header_sub">FLIGHT BOOKING AGENCY</div>
          </div>

          <ul className="navMenu flex">
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
            <li>Seats</li>
            <li>Destination</li>
          </ul>

          <button className="contact-btn"> Contact</button>
        </div>
      </div>
      <main>
        <div className="container">
          <h1 className="hero-text">
            Find and Book
            <span>A Great Experience</span>
          </h1>

          <div className="img-cont">
            <img src={skybg} className="sky-bg" alt="sky-background" />
            <img src={plane} className="plane" alt="an airplane in the sky" />
          </div>

          <section className="logistics-table">
            <ul className="flex flight-class-levels">
              <li>Economy</li>
              <li className="selected blue">Business Class</li>
              <li>First Class</li>
            </ul>
            <ul className="flex flight-location">

           
              <li>
                <div>
                  <img src={menuImg}  />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Where are you going?</p>
                </div>
              </li>

              <li>
                <div>
                  <img src={userIcon} alt="" />
                </div>
                <div>
                  <h3>Travellers</h3>
                  <p>Add guests</p>
                </div>
              </li>

              <li>
                <div>
                  <img src={menuImg} alt="" />
                </div>
                <div>
                  <h3>Check in</h3>
                  <p>Add dates</p>
                </div>
              </li>

              <li>
                <div>
                  <img src={menuImg} alt="" />
                </div>
                <div>
                  <h3>Check out</h3>
                  <p>Add dates</p>
                </div>
              </li>
              <li>
                <div className="search-cont">
                <img src={search} className="" alt="" />
                </div>
               
              </li>
            </ul>
          </section>

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
                <ul>
                  <li>
                    <span className="reasons blue">01</span>
                    <h4>Travel requirements for Dubai</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque
                      diam dignissim duis volutpat. Orci vel molestie vitae
                      purus felis urna tincidunt.
                    </p>
                  </li>

                  <li>
                    <span className="reasons brown">02</span>
                    <h4>Multi-risk travel insurance</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque
                      diam dignissim duis volutpat. Orci vel molestie vitae
                      purus felis urna tincidunt.
                    </p>
                  </li>
                  <li>
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

              <div className="travel-plane-cont">
                <img
                  src={planeImageone}
                  alt="a plane picture"
                  className="travel-img travel-img-one"
                />
                <img
                  src={planeImagetwo}
                  alt="a plane picture"
                  className="travel-img travel-img-two"
                />
                <img
                  src={planeImagethree}
                  alt="a plane picture"
                  className="travel-img travel-img-three"
                />
              </div>
            </div>
          </section>
        </div>
        <section className="memories">
          <div className="container">
            {" "}
            <div className="flex">
              <h1>
                Travel to <span>make memories</span> all around the world
              </h1>

              <button>View all</button>
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

        <article className="flex">
          <div className="image-cont-3">
            <img src={planeImageone} alt="" className="biggerImg" />

            <img src={planeImagethree} alt="" className="smallImg" />
          </div>

          <div className="lounge">
            <h2>
              Unaccompanied <span>Minors Lounge</span>
            </h2>
            <ul className="grid">
              <li>
                <h4>Help through the airport</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                  dign
                </p>
              </li>

              <li>
                <h4>Priority boarding</h4>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                  dign
                </p>
              </li>

              <li>
                <h4>Care on the flight</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                  dign
                </p>
              </li>

              <li>
                <h4>Support when they land</h4>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum mi quisque diam
                  dign
                </p>
              </li>
            </ul>
          </div>
        </article>

        <section className="travel-of-the-mth">
          <div className="container">
            <h3>
              {" "}
              <span>Best travels</span> of the month
            </h3>

            <div>
              <ul className="flex ">
                <li className="bestTravel">
                  <div className="image-mth-cont">
                    <img src={bestTravelsFour} alt="" className="month-img" />
                  </div>
                  <h5>Jacob Jones</h5>
                  <p>Lorem ipsum</p>
                </li>

                <li className="bestTravel">
                  <div className="image-mth-cont">
                    <img src={bestTravelsFour} alt="" className="month-img" />
                  </div>
                  <h5>Jacob Jones</h5>
                  <p>Lorem ipsum</p>
                </li>

                <li className="bestTravel">
                  <div className="image-mth-cont">
                    <img src={bestTravelsFour} alt="" className="month-img" />
                  </div>
                  <h5>Jacob Jones</h5>
                  <p>Lorem ipsum</p>
                </li>

                <li className="bestTravel">
                  <div className="image-mth-cont">
                    <img src={bestTravelsFour} alt="" className="month-img" />
                  </div>
                  <h5>Jacob Jones</h5>
                  <p>Lorem ipsum</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="newsletter">
          <div className="container">
            <h1>
              Subscribe to our Newsletter &<span> get latest News</span>
            </h1>

            {/* <div className="email-cont">
              {/* <input type="text" />
              <button></button> 
            </div> */}
          </div>
        </section>

        <div className="container">
          <footer>
            <p className="p1">CONVINCED?</p>
            <h5>Lets travel the world together!</h5>
            <p className="p2">
              Let us unleash our creativity and expertise to create designs that
              deliver extraordinary results.
            </p>

            <button>Shoot us a DM</button>

            <hr />
            <div className="flex footer-last-elem">
              <div>
                <div className="logo-header white">namaste</div>
                <div className="logo-header_sub white">
                  FLIGHT BOOKING AGENCY
                </div>
              </div>
              <small> &#169; 2020 Rayna. All rights reserved</small>
              <ul className="social-m-icons flex">
                <li>
                  <img src={socialfb} alt="" />
                </li>
                <li>
                  <img src={socialtw} alt="" />
                </li>
                <li>
                  <img src={socialig} alt="" />
                </li>
                <li>
                  <img src={socialln} alt="" />
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Home;
