import React, { useEffect, useState } from "react";
import Job from "../job/job";

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
      {jobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default FeaturedJobs;
