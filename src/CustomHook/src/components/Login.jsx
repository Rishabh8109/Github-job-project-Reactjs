import React , {useState} from 'react';
import '../App.css';
import { Link ,useHistory } from "react-router-dom";
import auth from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
   
   const login = (e) => {
       e.preventDefault();
    // login login 
      auth.signInWithEmailAndPassword(email , password)
      .then(auth => {
          //logged in & redirect the homepage
          history.push('/')
        }).catch(e  => {
           alert(e.message)
        })
   }

   const register = (e) => {
       e.preventDefault();
       // register login
       auth.createUserWithEmailAndPassword(email , password)
      .then(auth => {
          //logged in & redirect the homepage
          history.push('/')
        }).catch(e  => {
           alert(e.message)
        })
   }
  

    return (
        <div className="login row justify-content-center">
             <Link to="/" className="card-headers">
                    <img src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="amazone_logo" className="amazone_logo2" width="20%"  />
                </Link>
              <div className="col-sm-6 card py-4 px-5 m-5 shadow-sm login-card">
                  <h1 className="text-left">Sign in</h1>
                <form action="/">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" placeholder="Email address" value={email} onChange={(e) => setemail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" className="form-control" placeholder="Password..." value={password} onChange={(e) => setpassword(e.target.value)}/>
                    </div>
                   <button type="submit" className="btn btn-sm btn-warning fo my-2" onClick={login}>Sign in</button> 
                </form>
                <p className="w-75">By Signing-in you agree to Amazone's condition of see our policy Notice , our Cookes Notice and our Notice</p>
                <button type="button" className="btn btn-block btn-outline-dark register-btn" onClick={register} >Create your Amazone Account</button>
              </div>
        </div>
    )
}

export default Login;
