import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/utility";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobsApplied, setJobsApplied] = useState([]);
  const [displayJObs, setDisplayJobs] = useState([]);

  const handleFilteredJobs = (filter) => {
    if (filter === "all") {
      setDisplayJobs(jobsApplied);
    } else if (filter === "remote") {
      const remoteJobs = jobsApplied.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsite = jobsApplied.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsite);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(storedJobIds, "jobs-applyed", jobApplied);
      setJobsApplied(jobApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h3 className="text-2xl">Jobs I Applied: {jobsApplied.length}</h3>

      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleFilteredJobs("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilteredJobs("onsite")}>
            <a>Onsite</a>
          </li>
          <li onClick={() => handleFilteredJobs("remote")}>
            <a>Remote</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJObs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.companey_name}:{job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
