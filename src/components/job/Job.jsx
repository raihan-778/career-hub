import React from "react";

const Job = ({ job }) => {
  const {
    company_name,
    educational_requirements,
    experiences,
    job_description,
    job_title,
    job_type,
    location,
    logo,
    remote_or_onsite,
    salary,
    contact_information,
  } = job;
  console.log(job);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{job_title}</div>
        </h2>
        <p>{job_description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{remote_or_onsite}</div>
          <div className="badge badge-outline">{job_type}</div>
        </div>
        <div className="card-actions justify-end">
          <div className="font-semibold flex justify-end ">
            <img className="mr-1" src="/public/icons/location2.png" alt="" />
            {location}
          </div>
          <div className="font-semibold ml-1 flex justify-end ">
            <img className="mr-1" src="/public/icons/money.png" alt="" />

            {salary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
