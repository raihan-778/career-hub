import React, { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-6xl text-center">Featured Jobs</h2>
      <p className="text-center mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
     <div className="grid grid-cols-1 md:grid-cols-2">
     {jobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
     </div>
    </div>
  );
};

export default FeaturedJobs;
