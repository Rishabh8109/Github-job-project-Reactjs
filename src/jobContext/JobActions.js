
import {API_REQUEST, FETCH_JOB, API_ERROR} from './actionType';



export const apiRequest = () => {
   return {
     type : API_REQUEST,
   }
}

export const fetchJob = (data) => {
   return {
     type : FETCH_JOB,
     payload : data
   }
}

export const apiError = (error) => {
   return {
     type : API_ERROR,
     payload : error
   }
}
