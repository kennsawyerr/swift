import { useEffect, useState } from "react";
import flightDataFile from "./flightdata.json";
const AllFlights = () => {
  //[] means initialised with an empty array

  const [displayFlights, setDisplayFlights] = useState([]);

  useEffect(() => {
    setDisplayFlights(flightDataFile);
  }, []);
  //  if(e.key==="Enter"){};If (e.keyvalue===”Enter”) {}- first add eventlistener to the button

  // const FetchFlights = async () => {
  //   try {
  //     const response = await fetch(flightDataFile);
  //     const data = await response.json();
  //     setDisplayFlights(data);
  //   } catch (error) {
  //     console.log("Error fetching data: ", error);
  //   }
  // };

  return (
    <>
      <div className="container">
        <div>
          {displayFlights.map((item) => (
            <article key={item.id} className="flex">
              {/* <img src={item.img} alt={item.arrival_airport} />
              <header>
                <h4>Takeoff: {item.destination_country}</h4>
                <h4>Dest: {item.destination_country}</h4>
                <h4>Airline: {item.airline}</h4>
                <h3>Price : {item.price}</h3>
                <h3>Passengers : {item.passengers}</h3>
              </header> */}

              <div>{item.airline}</div>
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
