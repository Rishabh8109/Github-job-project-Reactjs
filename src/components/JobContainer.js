import React, { useEffect } from 'react';
import {apiRequest , fetchJob , apiError  } from '../jobContext/index';
import {useSelector } from 'react-redux';
import JobCardSkeleton from './skeletonLoader/JobCardSkeleton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FilterInputs from './assets/FilterInputs';
import MobileFilterInput from './mobileBreakpoint/FilterInput';
import {Link } from 'react-router-dom';
import useFetch from '../CustomHook/useFetch';

function JobContainer({elementTheme}) {
  const initialState = useSelector(state => state.job);
  const newUrl = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
  const fetchJobData = useFetch(newUrl ,[] , apiRequest , fetchJob , apiError);

  return (
    <>
      <FilterInputs />
      <MobileFilterInput className="mb-3" elementTheme={elementTheme}/>
    <div className="container">
      <div className="row">
        {initialState.loading ? (
          <div className="container mt-3">
           <div className="row">
            {
              Array(50).fill().map(index => (
                  <JobCardSkeleton index={index}/>
              ))
            }
           </div>
         </div>
       ) : (
         <>
         {initialState.jobData.map(job => (
             <div className="col-sm-4 mt-3">
               <Link to={`/job-details/${job.id}`} className="text-dark info-link">
                 <div className="job-card p-4 mb-2"  key={job.id} style={elementTheme}>
                   <div className="company-logo mb-2" >
                     <img src={job.company_logo}  alt="company_logo" width="100%" />
                   </div>
                  <div className="company-info mt-3">
                    <h5 className="company-title">{job.title}</h5>
                    <p className="job-created">{job.created_at}</p>
                    <p className="company-name">{job.company}</p>
                    <p className="badge badge-dark">{job.type}</p>
                   <p className="company-loc text-info mt-3"><LocationOnIcon /> {job.location}</p>
                  </div>
                 </div>
              </Link>
             </div>
         ))}

         </>
       )}
      </div>
    </div>
    </>
  )
}

export default JobContainer;
