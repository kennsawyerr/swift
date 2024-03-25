import { useState } from "react";
import search from "./assets/search.png";
import userIcon from "./assets/user.png";
import calendar from "./assets/calendar.png";
import locationIcon from "./assets/location-marker-icon.png";
import { useNavigate } from 'react-router-dom';

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
    } };

  
  const handleDatePickerChange = (date) => {
    setReturningDate(date);
    handleChange(date); // Call handleChange here
  };

    const navigate = useNavigate();
   const [formData, setFormData] = useState({
        travelers: '' ,
        location: '',
        checkInDate: '',
        checkOutDate: '',
      });
 

  const handleChange = (e) => {
    const { name, value ,id } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, id
    }));
  };

  const handleSearch = () => {
    
    // history.push({
    //   pathname: '/allFlights.jsx',
    //   state: { formData },
    // });
    navigate('./allFlights.jsx', { state: { formData } });
  };

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
              <input type="text" name="" id="" placeholder="location" />
            </div>
          </li>

          <li>
            <div>
              <img src={userIcon} alt="" />
            </div>
            <div className="">
              <h3>Travellers</h3>
              {/* <p>Add guests</p> */}
              <aside className="flex">
                <MinusSquare color="#2654E4" onClick={minusNum} />
                <div >{passengerValue} </div>
                <AddSquare color="#2654E4" onClick={addNum} />
              </aside>
            </div>
          </li>

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
            <div className="search-cont" onClick={handleSearch}>
              <img src={search} className="" alt="" />
            </div>
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



// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const SearchForm = () => {
//   const history = useHistory();
//   const [formData, setFormData] = useState({
//     travelers: '',
//     location: '',
//     checkInDate: '',
//     checkOutDate: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSearch = () => {
//     // Navigate to another page with form data as parameters
//     history.push({
//       pathname: '/search-results',
//       state: { formData },
//     });
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         name="travelers"
//         value={formData.travelers}
//         onChange={handleChange}
//         placeholder="Number of travelers"
//       />
//       <input
//         type="text"
//         name="location"
//         value={formData.location}
//         onChange={handleChange}
//         placeholder="Location"
//       />
//       <input
//         type="date"
//         name="checkInDate"
//         value={formData.checkInDate}
//         onChange={handleChange}
//         placeholder="Check-in Date"
//       />
//       <input
//         type="date"
//         name="checkOutDate"
//         value={formData.checkOutDate}
//         onChange={handleChange}
//         placeholder="Check-out Date"
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchForm;


//where the form should appear
/* 



import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const { state } = useLocation();
  const { formData } = state;

  // Use formData values in this component

  return (
    <div>
      <h1>Search Results</h1>
      <p>Travelers: {formData.travelers}</p>
      <p>Location: {formData.location}</p>
      <p>Check-in Date: {formData.checkInDate}</p>
      <p>Check-out Date: {formData.checkOutDate}</p>
       Display other search results 
      </div>
      );
    };
    
    export default SearchResults;
    








*/
