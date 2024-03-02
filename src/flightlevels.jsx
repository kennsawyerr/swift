import { useState } from "react";
import menuImg from "./assets/menu.png";
import search from "./assets/search.png";
import userIcon from "./assets/user.png";
import calendar from "./assets/calTwo.png"

function FlightBooking() {
  const [showTravelComfort, setShowTravelComfort] = useState(false);
  const [showAppetizers, setShowAppetizers] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showSeats, setShowSeats] = useState(false);

  const economy = () => {
    setShowTravelComfort(false);
    setShowAppetizers(false);
    setShowAmenities(false);
    setShowSeats(false);
  };

  const business = () => {
    setShowTravelComfort(true);
    setShowAppetizers(true);
    setShowAmenities(true);
    setShowSeats(false);
  };

  const firstClass = () => {
    setShowTravelComfort(true);
    setShowAppetizers(true);
    setShowAmenities(true);
    setShowSeats(true);
  };

  return (
    <>
      <section className="logistics-table">
        <ul className="flex flight-class-levels">
          <li onClick={economy}>Economy</li>
          <li className="selected blue" onClick={business}>
            Business Class
          </li>
          <li onClick={firstClass}>First Class</li>
        </ul>
        <ul className="flex flight-location">
          <li>
            <div>
              <img src={menuImg} />
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
              <img src={calendar} alt="" />
            </div>
            <div>
              <h3>Check in</h3>
              <p>Add dates</p>
            </div>
          </li>

          <li>
            <div>
              <img src={calendar} alt="" />
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

        <div>
          <div
            id="travel-comfort"
            style={{ display: showTravelComfort ? "block" : "none" }}
          >
            Travel
          </div>
          <div
            id="appetizers"
            style={{ display: showAppetizers ? "block" : "none" }}
          >
            Appe
          </div>
          <div
            id="amenities"
            style={{ display: showAmenities ? "block" : "none" }}
          >
            Ammenities
          </div>
          <div id="seats" style={{ display: showSeats ? "block" : "none" }}>
            Seats
          </div>
        </div>
      </section>
    </>
  );
}

export default FlightBooking;
