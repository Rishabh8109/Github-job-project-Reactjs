import React,{useState , useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {apiRequest , fetchJob , apiError } from '../../jobContext/index';
import {useSelector , useDispatch} from 'react-redux';

function FilterInputs() {
 const [desc , setDesc] = useState('');
 const [location  , setlocation] = useState('');
 const [jobType , setJobtype] = useState('');
 const initialState = useSelector(state => state);
 const dispatch = useDispatch();


 const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(apiRequest());
  axios({
    method : 'GET',
    url : `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${desc}&location=${location}&full_time=${jobType}`,

    })
    .then(res => {
      dispatch(fetchJob(res.data));

    }).then(error => {
      dispatch(apiError(error));
    })
    setDesc('');
    setlocaton('');
    setJobtype('');
 }

  return (
    <div className="filterInputs">
     <form onSubmit={handleSubmit}>
        <div className="container card filterCard shadow-sm">
         <div className="row">
           <div className="col-sm-4 border-right d-flex align-items-center">
             <SearchIcon className="icons"/>
             <input type="text" className="searchInput" placeholder="Filter By title , componies , experties..." value={desc} onChange={(e) => setDesc(e.target.value)}/>
           </div>
           <div className="col-sm-4 border-right d-flex align-items-center">
             <LocationOnIcon className="icons"/>
             <input type="text" className="searchInput" placeholder="Filter By location..." value={location} onChange={(e) => setlocation(e.target.value)}/>
           </div>
           <div className="col-sm-4 d-flex align-items-center justify-content-around w-50">
             <input type="checkbox" className="checkBox" onChange={() => setJobtype(true)}/>
             <span className="icons font-pop">Full time only</span>
             <Button type="submit" variant="contained" color="primary" className="btn btn-primary">Search</Button>
           </div>
         </div>
        </div>
      </form>
    </div>
  );
}

export default FilterInputs;
