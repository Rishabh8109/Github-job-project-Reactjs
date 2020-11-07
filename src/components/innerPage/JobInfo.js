import React ,{useState} from 'react';
import AppHeader from '../assets/AppHeader';
import useFetchInfo from '../../CustomHook/useFetchInfo';
import {getJobInfoRequest, getJobInfo , getJobInfoError} from '../../jobContext/JobActions';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Button } from '@material-ui/core';
import ReactMarkdown from  'react-markdown';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

function JobInfo({elementTheme}) {
  const jobInfoState = useSelector(state => state.jobInfo);
  const newUrl = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
 console.log(jobInfoState);
  //   destructure with  location
  const {id} = useParams();

  //  fetchhing data using custom hook (useFetch)
  const fetchJobinfo = useFetchInfo(newUrl , id, [] , getJobInfoRequest, getJobInfo , getJobInfoError );

 // destructure jobinfo
 const {company_logo , title, company ,created_at, url , type , location , description , how_to_apply} = jobInfoState.jobData;
   return (
     <div className="App">
      {!jobInfoState.loading && (<AppHeader />)}
    {jobInfoState.loading ? (
      <>
      <Backdrop  open={jobInfoState.loading} >
          <CircularProgress color="primary" />
      </Backdrop>
      </>
    ) : (
       <>
       <div className="job-info container">

            <div className="job-card-header card p-1" style={elementTheme}>
               <div className="row mt-3 py-3 header-content ">
                   <div className="col-sm-2 border-right">
                       <img src={company_logo} className="ml-4 rounded img-responsive company-logo mt-2"  alt="company_logo" width="100px" />
                   </div>
                   <div className="col-sm-7 pl-4 pt-4 text-md-center">
                        <h4 className="company-title">{title}</h4>
                        <p className="company-name">{company}</p>
                    </div>
                      <div className="col-sm-3 pt-4">
                        <Button  variant="outlined" className="company_link" size="large" color="primary"><a href={url} className="info-link">company site</a></Button>
                     </div>
               </div>
            </div>
            <div className="row  info-card" style={elementTheme}>
              <div className="col-sm-12">
                 <header className="d-flex justify-content-between p-3 align-items-center ">
                    <div className="info-header">
                        <span className="job-created">{created_at}</span>
                        <span className="badge badge-dark ml-3">{type}</span>
                        <h4 className="company-title">{title}</h4>
                        <p className="company-loc text-info">{location}</p>
                    </div>
                    <div className="apply_btn">
                       <Button type="submit" variant="contained" size="large" color="primary" className="btn btn-primary">Apply</Button>
                    </div>
                 </header>
                 <section className="job-desc p-3">
                    <ReactMarkdown source={description} escapeHtml={false}/>
                 </section>
              </div>
            </div>
            <div className="row mt-2 apply-card  p-3 rounded" style={elementTheme}>
                <ReactMarkdown source={how_to_apply} escapeHtml={false}/>
            </div>
       </div>
       </>
    )}
     </div>
   );
}
export default JobInfo;
