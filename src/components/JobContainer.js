import React, { useEffect } from 'react';
import {apiRequest , fetchJob , apiError } from '../jobContext/index';
import {useSelector , useDispatch} from 'react-redux';
import axios from 'axios';


function JobContainer() {
  const initialState = useSelector(state => state);
  const dispatch = useDispatch();

   //fetch jobs using promises by axios
  console.log(initialState);

  useEffect(() => {
    dispatch(apiRequest());
   axios({
     method : 'GET',
     url : 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
     })
     .then(res => {
       dispatch(fetchJob(res.data));
     }).then(error => {
       dispatch(apiError(error));
     })
  },[]);



  return (
    <div className="container">
      <div className="row">
        {initialState.jobData.map(job => (
            <div className="col-sm-4" key={job.id}>
                <div className="card job-card p-4 mb-5">
                  <div className="company-logo mb-2" >
                    <img src={job.company_logo}  alt="company_logo" width="100%" />
                  </div>
                 <div className="company-info mt-2">
                   <p className="job-created">{job.created_at}</p>
                   <h6 className="company-title">{job.title}</h6>
                   <p className="company-name">{job.company}</p>
                   <p className="badge badge-dark">{job.type}</p>
                   <p className="company-loc text-info">{job.location}</p>
                 </div>
                </div>
            </div>
        ))}
      </div>

    </div>
  )
}

export default JobContainer;
