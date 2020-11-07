import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';

function useFetch(newUrl , initialState, RequestAction , fetchAction , errorAction ) {
   const dispatch = useDispatch();
   const [data , setData] = useState(initialState);

   useEffect(() => {
     dispatch(RequestAction());
     axios({
       method : 'GET',
       url : newUrl
       })
       .then(res => {
         const data = res.data;
         setData(data);
         dispatch(fetchAction(data))
       }).catch(error => {
         dispatch(errorAction(error))
       })
   },[newUrl]);

   return data;
}

export default useFetch;
