
import {API_REQUEST , FETCH_JOB , API_ERROR} from './actionType';

 const initialState = {
  loading  : false,
  jobData : [],
  error : ''
}

export const jobReducer = (state = initialState , action) => {
   switch(action.type) {
     case API_REQUEST : return {
       ...state,
       jobData : [],
       loading : true,
       error : ''
     }
     case FETCH_JOB : return {
       ...state,
       jobData : action.payload,
       loading : false
     }
     case API_ERROR : return {
       ...state,
       loading : false,
       error : action.payload
     }
     default : return state;
   }
}
