import { useState, useEffect } from "react";

function Flights() {
  const [jobs, setJobs] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("https://course-api.com/react-tabs-project");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <>
      <div className="logistics-table">
        <h1>Jobs</h1>
        <div className="">
          <ul className="flex">
            {jobs.map((job, index) => (
              <li
                className="logistics-table li selected blue"
                key={index}
                onClick={() => handleCompanyClick(job.company)}
              >
                {job.company}
              </li>
            ))}
          </ul>
        </div>
        {selectedCompany && (
          <div>
            <h2>{selectedCompany}</h2>
            <div>
              {jobs
                .filter((job) => job.company === selectedCompany)
                .map((job, index) => (
                  <article key={index}>
                    <h3>{job.title}</h3>
                    <p>{job.dates}</p>
                    <ul>
                      {job.duties.map((duty, index) => (
                        <li key={index}>{duty}</li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Flights;
