import { useState } from "react";
import search from "./assets/search.png";
import userIcon from "./assets/user.png";
import calendar from "./assets/calendar.png";
import locationIcon from "./assets/location-marker-icon.png";
import { useNavigate } from "react-router-dom";
//use normal date not react date picker for your sanity
import { AddSquare, MinusSquare } from "iconsax-react";
// import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FlightBooking() {
  const [showAppetizers, setShowAppetizers] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showSeats, setShowSeats] = useState(false);
  const [departureDate, setDepartureDate] = useState("");

  const [returningDate, setReturningDate] = useState("");
  const [passengerValue, setPassengerValue] = useState(1);
  const [travelDestination, setTravelDestination] = useState("");

  const economy = () => {
    setShowAppetizers(false);
    setShowAmenities(false);
    setShowSeats(false);
  };

  const handleDataTransfer = () => {
    if (
      passengerValue !== "" &&
      returningDate !== "" &&
      departureDate !== "" &&
      travelDestination !== ""
    ) {
      navigate("/flights", {
        replace: true,
        state: {
          passengerValue,
          returningDate,
          departureDate,
          travelDestination,
        },
      });
    } else {
      alert("Please fill in all required fields.");
    }
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

  // const handleDatePickerChange = (date) => {
  //   setReturningDate(date);
  // };

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
            <div className="travellers-textbx">
              <h3>Travellers</h3>

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
              {/* <ReactDatePicker
                selected={departureDate}
                onSelect={(date) => setDepartureDate(date)}
                dateFormat="EEE MMM dd yyyy"
                placeholderText="Select a date"
                minDate={new Date()}
              /> */}
              <input
                type="date"
                name=""
                id=""
                onChange={(e) => setDepartureDate(e.target.value)}
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

              <input
                type="date"
                name=""
                id=""
                onChange={(e) => setReturningDate(e.target.value)}
              />
            </div>
          </li>
          <li>
            <button className="search-cont" onClick={handleDataTransfer}>
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
          {/* 8119ce555bb415fcc7b18ae31ef9921f43d33f860db1b77278f6c31f6a1540ba503913dcf4a9eddd5c25b3df61294fff */}
          <li
            id="amenities"
            style={{ display: showAmenities ? "block" : "none" }}
          >
            Ammenities
            <select name="" id="">
              <option value="">Extra Blankets</option>
              <option value=""></option>
              <option value="">Blankets</option>
            </select>
          </li>
          <li id="seats" style={{ display: showSeats ? "block" : "none" }}>
            Seats
          </li>
        </ul>
      </section>
    </>
  );

  // const fetchFlights =async () => {
  // try{
  //   const response =await fetch(airportApiUrl);
  //   const data =await response.json();
  //    setFlights(data);
  // } catch (error) {
  //   console.error("Error fetching data: ", error)
  // }
}

export default FlightBooking;

//onSelect is for date not onChange

// 8119ce555bb415fcc7b18ae31ef9921f43d33f860db1b77278f6c31f6a1540ba503913dcf4a9eddd5c25b3df61294fff
