
import {API_REQUEST , FETCH_JOB , API_ERROR , JOB_INFO_REQUEST , JOB_INFO , JOB_INFO_ERROR , TOGGLE_THEME} from './actionType';

 const initialState = {
  loading  : false,
  jobData : [],
  error : ''
}

const jobInfoState = {
  loading : false,
  jobData : [],
  error : ''
}

const themeState = {
  toggle : false
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

export const jobInfoReducer = (state = initialState , action) => {
   switch(action.type) {
     case JOB_INFO_REQUEST: return {
       ...state,
       jobData : [],
       loading : true,
     }
     case JOB_INFO : return {
       ...state,
       jobData : action.payload,
       loading : false,
     }
     case JOB_INFO_ERROR : return {
       ...state,
       loading : false,
       error : action.payload
     }
     default: return state;
   }
}

export const themeReducer = (state = initialState , action) => {
   switch(action.type) {
     case TOGGLE_THEME: return {
       ...state,
       toggle : action.payload,
     }

     default: return state;
   }
}
