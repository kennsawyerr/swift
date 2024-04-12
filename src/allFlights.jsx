import { useEffect, useState } from "react";
import flightDataFile from "./flightdata.json";
import { useLocation } from "react-router-dom";
const AllFlights = () => {
  //[] means initialised with an empty array

  const location = useLocation();

  const [displayFlights, setDisplayFlights] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [flightsMessage, setFlightsMessage] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [flights, setFlights] = useState("");

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
      setFlightsMessage(true);
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
          <ul className="flex-all-the-way">
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
                <div>Port Harcourt</div>
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
            <button
              className="select-flight-btn"
              onClick={() => filterFlights(travelDestination)}
            >
              Take Flight ?
            </button>
          </div>
        </div>
      </section>

      <div className="container error-msg">
        {flightsMessage && (
          <div>
            <h3>No flights found</h3>
            <div>weve searched over 400 flights</div>
          </div>
        )}
      </div>
      <div className="container">
        <div>
          <hr />
          <h3>Other Flights</h3>
          <div className="grid2">
            {displayFlights.map((item) => (
              <article key={item.id} className="flex tickets">
                <div className="col-bl">{item.airline}</div>
                <div>
                  <div>From:</div>
                  <div>{item.departure_location}</div>
                </div>
                <div>
                  <div>To:</div>
                  <div>{item.destination_country}</div>
                </div>
                <button>Get Flight</button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllFlights;
