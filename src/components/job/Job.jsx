import React from "react";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
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
        <h3>{job_title}</h3>
        <h2 className="card-title">
          <div className="badge badge-secondary">{company_name}</div>
        </h2>
        <p>{job_description}</p>
        <div className="card-actions justify-end">
          <button className="px-5 py-2 font-extrabold border text-[#7E90FE] rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
          <button className=" px-5 py-2 font-extrabold border text-[#7E90FE] rounded border-[#7E90FE] mr-4">{job_type}</button>
        </div>
        <div className="card-actions justify-end">
          <div className="font-semibold flex justify-end ">
        
            <IoLocationSharp className="mr-1 text-2xl text-[#7E90FE]"  />
            {location}
          </div>
          <div className="font-semibold ml-1 flex justify-end ">
        
            
            <HiCurrencyBangladeshi className="mr-1 text-2xl text-[#7E90FE]"  />

            {salary}
          </div>
         <Link to={`job/${id}`}> <button className=" px-5 py-2 bg-violet-600 font-extrabold text-[#fff] rounded  mr-4">View Job Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
