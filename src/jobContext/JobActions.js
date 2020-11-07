
import {
  API_REQUEST,
  FETCH_JOB,
  API_ERROR,
  JOB_INFO_REQUEST,
  JOB_INFO,
  JOB_INFO_ERROR,
  TOGGLE_THEME
  } from './actionType';

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


// job informatioin actionType

export const getJobInfoRequest = (data) => {
  return {
    type : JOB_INFO_REQUEST
  }
}

export const getJobInfo = (data , id) => {
  const newData =  data.find(job => {
    return job.id === id
  });
  return {
    type : JOB_INFO,
    payload : newData
  }
}

export const getJobInfoError = (error) => {
  return {
    type : JOB_INFO_ERROR,
    payload : error
  }
}


// toggle themeaction
export const toggleTheme = (darkOrwhite) => {
  return {
    type : TOGGLE_THEME,
    payload : darkOrwhite
  }
}
