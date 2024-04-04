import { useEffect, useState } from "react";
import flightDataFile from "./flightdata.json";
import { useLocation } from "react-router-dom";
const AllFlights = () => {
  //[] means initialised with an empty array

  const location = useLocation();

  const [displayFlights, setDisplayFlights] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [flightsMessage, setFlightsMessage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [flights, setFlights] = useState("");
  // const [memo, setMemo] = useState("");

  useEffect(() => {
    setDisplayFlights(flightDataFile);
  }, []);

  const filterFlights = (locationDestination) => {
    const alreadyfilteredFlights = flightDataFile.filter(
      (item) => item.departure_location === locationDestination
    );

    if (alreadyfilteredFlights.length > 0) {
      setDisplayFlights(alreadyfilteredFlights);
      console.log("memo", "Filtered flights displayed");
    } else {
      setFlightsMessage("no flights found");
      console.log("memo", "No matching flights message displayed");
    }
  };

  const apiToken =
    "8119ce555bb415fcc7b18ae31ef9921f43d33f860db1b77278f6c31f6a1540ba503913dcf4a9eddd5c25b3df61294fff";
  const airportApiUrl = `https://airportdb.io/api/v1/airport/{ICAO}?apiToken=${apiToken}`;

  // eslint-disable-next-line no-unused-vars
  const fetchFlights = async () => {
    try {
      const response = await fetch(airportApiUrl);
      const data = await response.json();
      setFlights(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const FlightPassenger = location.state.passengerValue;
  const travelDestination = location.state.travelDestination;
  return (
    <>
      <section className="choosingFlight">
        <div className="chooseFlight-table tableau">
          <ul className="flex">
            <li>
              <select name="" id="">
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First-class">First Class</option>
              </select>
            </li>

            <li>
              <select name="" id="">
                <option value="">Round trip</option>
                <option value="Business">One chance</option>
                <option value="First-class">Japa</option>
              </select>
            </li>

            <li>
              <select name="" id="">
                <option value="">{FlightPassenger} Passenger</option>
                <option value="Business">One chance</option>
                <option value="First-class">Multiple chance</option>
              </select>
            </li>
          </ul>
          <div className="flex flight-location">
            <ul className="flight-data flex">
              <li>
                <div className="b">From where?</div>
                <div>Nigeria</div>
              </li>

              <li>
                <div className="b">To where?</div>
                <div>{location.state.travelDestination}</div>
              </li>
            </ul>

            <ul className="flight-data flex">
              <li>
                <div className="b">Leaving on</div>
                <div>{location.state.departureDate}</div>
              </li>

              <li>
                <div className="b">Returning on</div>
                <div>{location.state.returningDate}</div>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={() => filterFlights(travelDestination)}>
              Take Flight ?
            </button>
          </div>
        </div>
      </section>

      <div className="container">{flightsMessage}</div>
      <div className="container">
        <div>
          <h3>Other Flights</h3>
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
