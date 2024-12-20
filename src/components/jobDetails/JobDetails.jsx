import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs=useLoaderData()
    
    const {id}=useParams()
    const intId=parseInt(id)
    const job=jobs.find(job=>job.id===intId)
    
   console.log(job)
    return (
        <div>
            <h2>job Details of:{id}</h2>
        <div className='grid gap-4 md:grid-cols-4'>
            <div className=' border md:col-span-3'>{job.company_name}</div>
            <div className='border '>
                <h2 className='text-2xl font-semibold'>Side bar is comming soon</h2>
                <button className='btn w-full btn-primary'>Apply Now</button>

            </div>
        </div>
                
        </div>
    );
};

export default JobDetails;