import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { saveJobApplication } from "../utility/utility";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);

  const {
    company_name,
    contact_information,
    educational_requirments,
    experiences,
    job_description,
    job_responsibility,
    job_title,
    job_type,
    location,
    logo,
    remote_or_onsite,
    salaty,
  } = job;

  console.log(job);

  const handleJobApplyed = () => {
    saveJobApplication(intId);
    toast("Job Applyed Successfully");
  };
  return (
    <div>
      <h2>job Details</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className=" p-4 m-2 border md:col-span-3">
          <h2>
            <span className="font-bold text-2xl">Job Description:</span>
            {job_description}
          </h2>
          <h2>
            <span className="font-bold text-2xl">Job Responsibility:</span>
            {job_responsibility}
          </h2>
          <h2>
            <span className="font-bold text-2xl">Educational Requirment:</span>
            {educational_requirments}
          </h2>
          <h2>
            <span className="font-bold text-2xl">Experience:</span>
            {experiences}
          </h2>
        </div>
        <div className="border p-2 mx-2 ">
          <h2 className="text-2xl text-violet-500 border-b-2 m-2 p-4 font-semibold">
            Job Details
          </h2>
          <p>Salary</p>
          <p>Job Title</p>

          <h4>Contact Information</h4>

          <button
            onClick={() => handleJobApplyed(id)}
            className="btn w-full btn-primary"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
