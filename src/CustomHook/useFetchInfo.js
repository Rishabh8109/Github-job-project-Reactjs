import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';

function useFetchInfo(newUrl , id , initialState, RequestAction , fetchAction , errorAction ) {
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
         dispatch(fetchAction(data , id))
       }).catch(error => {
         dispatch(errorAction(error))
       })
   },[newUrl]);

   return data;
}

export default useFetchInfo;
