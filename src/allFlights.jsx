import { useEffect, useState } from "react";
import flightDataFile from "./flightdata.json";
import { useLocation } from "react-router-dom";
const AllFlights = (props) => {
  //[] means initialised with an empty array

  const location = useLocation();
  console.log("location", location);
  console.log(props);

  const [displayFlights, setDisplayFlights] = useState([]);

  useEffect(() => {
    setDisplayFlights(flightDataFile);
  }, []);
  //  if(e.key==="Enter"){};If (e.keyvalue===”Enter”) {}- first add eventlistener to the button-for search features

  const filterFlights = (locationDestination) => {
    if (locationDestination === "all") {
      setDisplayFlights(flightDataFile);
    } else {
      const alreadyfilteredFlights = flightDataFile.filter(
        (item) => item.departure_location === locationDestination
      );
      setDisplayFlights(alreadyfilteredFlights);
    }
  };

  return (
    <>
      {/* <div>
      <h1>Search Results</h1>
      <p>Travelers: {location.state.passengerValue}</p>
      <p>Location: {location.state.travelDestination}</p>
      {/* <p>Check-in Date: {location.state.departureDate}</p> */}
      {/* <p>Check-out Date: {location.state.returningDate}</p> */}

      {/* departureDate
: 
Fri Mar 29 2024 00:00:00 GMT+0100 (West Africa Standard Time) {}
passengerValue
: 
"1"
returningDate
: 
Sat Apr 06 2024 00:00:00 GMT+0100 (West Africa Standard Time) {}
travelDestination
: 
"Abuja" */}

      <div className="logistics-table">
        <ul className="flex flight-location">
          <li>{location.state.travelDestination}</li>
          <li>Returning date:{location.state.departureDate}</li>
          {/* <li>Returning :{props.departureDate}</li> */}
        </ul>

        <div>
          <button>Take Flight?</button>
        </div>
      </div>

      <div className="container">
        <div>
          <div>
            <button onClick={() => filterFlights("Nigeria")}>Nigeria</button>
            <button onClick={() => filterFlights("Togo")}>Togo</button>
          </div>
          <div className="grid2">
            {displayFlights.map((item) => (
              <article key={item.id} className="flex tickets">
                <div className="col-bl">{item.airline}</div>
                <div>
                  <div>{item.departure_time}</div>
                  <div>{item.departure_location}</div>
                </div>
                <div>
                  <div>{item.arrival_time}</div>
                  <div>{item.destination_country}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllFlights;

// import { useState, useEffect } from "react";

// function Flights() {
//   const [jobs, setJobs] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

// const fetchJobs = async () => {
//   try {
//     const response = await fetch("https://course-api.com/react-tabs-project");
//     const data = await response.json();
//     setJobs(data);
// } catch (error) {
//   console.error("Error fetching data:", error);
// }
// };

// const handleCompanyClick = (company) => {
//   setSelectedCompany(company);
// };

// return (
//   <>
//     <div className="logistics-table">
//       <h1>Jobs</h1>
//       <div className="">
//         <ul className="flex">
//           {jobs.map((job, index) => (
//             <li
//               className="logistics-table li selected blue"
//         key={index}
//         onClick={() => handleCompanyClick(job.company)}
//       >
//         {job.company}
//       </li>
//     ))}
//   </ul>
// </div>
// {selectedCompany && (
//   <div>
//     <h2>{selectedCompany}</h2>
//     <div>
//       {jobs
//                 .filter((job) => job.company === selectedCompany)
//                 .map((job, index) => (
//                   <article key={index}>
//                     <h3>{job.title}</h3>
//                     <p>{job.dates}</p>
//                     <ul>
//                       {job.duties.map((duty, index) => (
//                         <li key={index}>{duty}</li>
//                       ))}
//                     </ul>
//                   </article>
//                 ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Flights;
