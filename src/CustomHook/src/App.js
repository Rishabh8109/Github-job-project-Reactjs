import React ,{useEffect} from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import CheckOut from './components/CheckOut';
import Login from './components/Login';
import {useStateValue} from './StateProvider/StateProvider';
import auth from './firebase';
function App() {
  const [{users} ,dispatch] = useStateValue();

  useEffect(() => {
   const unsubscribe =  auth.onAuthStateChanged(authUser => {

     if(authUser) {
       dispatch({
         type : 'ADD_USER',
         user : authUser
       })
     } else {
       dispatch({
         type : 'ADD_USER',
         user : null
       })
     }
   })
    
    return () => {
        unsubscribe();
      }
   
  }, []);
  console.log(users) 

  return (
      <Router>
        <div className="App">
           <Switch>
              
              <Route path="/checkout">
                <Header />
                <CheckOut />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                 <Header />
                 <Home />
              </Route>
           </Switch>
        </div>
      </Router>
  );
}

export default App;
