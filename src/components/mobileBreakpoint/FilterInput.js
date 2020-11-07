import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import useFetch from '../../CustomHook/useFetch';
import axios from 'axios';
import {apiRequest , fetchJob , apiError } from '../../jobContext/index';
import { useDispatch} from 'react-redux';

function FilterInputs({elementTheme}) {
 const [desc , setDesc] = useState('');
 const [location  , setlocation] = useState('');
 const [jobType , setJobtype] = useState('');
 const dispatch = useDispatch();


 const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(apiRequest());
  axios({
    method : 'GET',
    url : `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${desc}`,

    })
    .then(res => {
      dispatch(fetchJob(res.data));

    }).catch(error => {
      dispatch(apiError(error));
    })
    setDesc('');
    setlocation('');
    setJobtype('');
 }

  return (
    <div className="filterInputs d-block d-sm-block d-md-none" >
     <form onSubmit={handleSubmit}>
        <div className="container card filterCard shadow-sm">
         <div className="row">
           <div className="col-8  d-flex align-items-center">
             <SearchIcon className="icons"/>
             <input type="text" className="searchInput" placeholder="search By title..." value={desc} onChange={(e) => setDesc(e.target.value)}/>
           </div>
           <div className="col-2 d-flex align-items-center justify-content-center w-100 pl-4">
             <Button type="submit" variant="contained" color="primary" className="btn btn-primary ml-3"><SearchIcon className="text-white"/></Button>
           </div>
         </div>
        </div>
      </form>
    </div>
  );
}

export default FilterInputs;
