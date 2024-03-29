import { useState } from "react";
import search from "./assets/search.png";
import userIcon from "./assets/user.png";
import calendar from "./assets/calendar.png";
import locationIcon from "./assets/location-marker-icon.png";
import { useNavigate } from "react-router-dom";

import { AddSquare, MinusSquare } from "iconsax-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FlightBooking() {
  const [showAppetizers, setShowAppetizers] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showSeats, setShowSeats] = useState(false);
  const [departureDate, setDepartureDate] = useState(null);
  const [returningDate, setReturningDate] = useState(null);
  const [passengerValue, setPassengerValue] = useState(false);
  const [travelDestination, setTravelDestination] = useState("");

  const economy = () => {
    setShowAppetizers(false);
    setShowAmenities(false);
    setShowSeats(false);
  };

  const business = () => {
    setShowAppetizers(true);
    setShowAmenities(true);
    setShowSeats(false);
  };

  const firstClass = () => {
    setShowAppetizers(true);
    setShowAmenities(true);
    setShowSeats(true);
  };

  const addNum = () => {
    setPassengerValue((prevCount) => prevCount + 1);
  };

  const minusNum = () => {
    if (passengerValue > 1) {
      setPassengerValue((prevCount) => prevCount - 1);
    }
  };

  const handleDatePickerChange = (date) => {
    setReturningDate(date);
  };

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({
    travelers: "",
    location: "",
    checkInDate: "",
    checkOutDate: "",
  });

  // const handleChange = (e) => {
  //   const { name, value ,id } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value, id
  //   }));
  // };

  // const handleSearch = () => {

  //   navigate('./allFlights.jsx', { state: { formData } });
  // };

  return (
    <>
      <section className="logistics-table">
        <ul className=" flight-class-levels">
          <li onClick={economy}>Economy</li>
          <li className="selected blue" onClick={business}>
            Business Class
          </li>
          <li onClick={firstClass}>First Class</li>
        </ul>

        <ul className="flex flight-location">
          <li>
            <div>
              <img src={locationIcon} />
            </div>
            <div>
              <h3>Location</h3>
              <p>Where are you going?</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="location"
                onChange={(event) => {
                  setTravelDestination(event.target.value);
                }}
              />
            </div>
          </li>

          <li>
            <div>
              <img src={userIcon} alt="" />
            </div>
            <div className="">
              <h3>Travellers</h3>
              {/* <p>Add guests</p> */}
              <aside className="">
                <MinusSquare color="#2654E4" onClick={minusNum} />
                <div>{passengerValue} </div>
                <AddSquare color="#2654E4" onClick={addNum} />
              </aside>
            </div>
          </li>

          {/*  <input type="text" name="username" placeholder="username" onChange={(event) => {setName(event.target.value)}} /> */}

          <li>
            <div>
              <img src={calendar} alt="" />
            </div>
            <div>
              <h3>Check in</h3>
              <p>Add dates</p>
              <ReactDatePicker
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select a date"
              />
            </div>
          </li>

          <li>
            <div>
              <img src={calendar} alt="" />
            </div>
            <div>
              <h3>Check out</h3>
              <p>Add dates</p>
              <ReactDatePicker
                selected={returningDate}
                // onChange={(date) => setReturningDate(date)}
                onChange={handleDatePickerChange}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select a date"
              />
            </div>
          </li>
          <li>
            <button
              className="search-cont"
              onClick={() => {
                navigate("/flights", {
                  replace: true,
                  state: {
                    passengerValue,
                    returningDate,
                    departureDate,
                    travelDestination,
                  },
                });
              }}
            >
              <img src={search} className="hide" alt="" />
              <div className="show white ">Search flights</div>
            </button>
          </li>
        </ul>

        <ul className="flex flight-location">
          <li
            className="perks"
            id="appetizers"
            style={{ display: showAppetizers ? "block" : "none" }}
          >
            Appetizers
          </li>
          <li
            id="amenities"
            style={{ display: showAmenities ? "block" : "none" }}
          >
            Ammenities
          </li>
          <li id="seats" style={{ display: showSeats ? "block" : "none" }}>
            Seats
          </li>
        </ul>
      </section>
    </>
  );
}

export default FlightBooking;
