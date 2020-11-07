import React from 'react';
import logo from "../../Amazon-Logo.png";
import './sidebar.css';
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
function sidebar({logout , users , closeBar ,Display}) {

    let drawerClass =  "sidebar ";
    if(Display) {
        drawerClass = "sidebar open";
    } else {
        drawerClass = "sidebar close";
    }
  
    return (
       
         <div className={drawerClass}>
            
                <div className="sidebar-header">
               
                    <Link to={!users && "/login"} className="header_link"> 
                        <div className="header_option" onClick={logout}>
                        <span>{users?.email}</span>
                        <button className="btn btn-outline-light btn-sm">{users ? "sign out" : "sign in"}</button>
                        </div>
                    </Link>
                    <KeyboardArrowLeftIcon  className="close" onClick={closeBar}/>
                </div>
            <div className="sidebar_links">
                <Link to="/" className="sideBar_header_link ">
                        <ul className="sidebar_header_option list-group">
                            <li className="list-group-item text-dark list-group-item-action">Returns orders</li>
                        </ul>
                    </Link>
                    <Link to="/" className="sideBar_header_link">
                        <ul className="sidebar_header_option list-group">
                            <li className="list-group-item text-dark list-group-item-action">Your prime</li>
                            
                        </ul>
                    </Link>
            </div>
    </div>
      
    )
}

export default sidebar
