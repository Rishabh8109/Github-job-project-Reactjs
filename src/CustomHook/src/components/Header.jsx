import React , {useState} from "react";
import logo from "../Amazon-Logo.png";
import SearchIcon from "@material-ui/icons/Search";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import {useStateValue} from '../StateProvider/StateProvider';
import auth from '../firebase';
import Sidebar from './Toolbars/Sidebar';
import Hamburger from "./Toolbars/Hamburger";
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import './Toolbars/sidebar.css'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Header() {
  const [{backet , users}] = useStateValue();

  //sidebar open close State
  const [Display  , setDisplay] = useState(false);

   
 
  const openSidebar = () => {
     if(Display === false) {
       setDisplay(true)
     }
    console.log(Display);
  }

  const closeBar = () => {
     if(Display === true) {
       setDisplay(false)
     }
     console.log(Display);
  }
 // logout 
  const logout = () => {
    if(users) {
      auth.signOut();
    }
  }

 

  return (
    <>
       
    <nav className="header py-2">
     <Hamburger openSidebar={openSidebar}/>
      <Link to="/">
        <img src={logo} alt="amazone_logo" className="amazone_logo" />
      </Link>

  
        <input
            type="text"
            placeholder="Search product.."
            className="form-control w-50 mt-3 ml-5 searchInput"
        />
        <button className="searchIcon btn btn-warning btn-sm text-dark">
            <SearchIcon />
        </button>
  

      <div className="header_nav">
        <Link to={!users && "/login"} className="header_link">
          <div className="header_option" onClick={logout}>
               <span className="userName">{users?.email}</span>
                <span className="userSignIn">{users ? "sign out" : "sign in"}</span>
          </div>
      </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span>Returns </span>
            <span>Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        <Link to={users ? "/checkout" : "/login"}>
        <IconButton aria-label="cart" className="mt-1 ml-2">
          <StyledBadge badgeContent={backet.length} color="primary">
            <ShoppingCartIcon style={{color : "white"}} />
          </StyledBadge>
         </IconButton>
        </Link>
      </div>
    </nav>
   <Sidebar 
      logout={logout}
      users = {users}
      closeBar={closeBar}
      Display={Display}
      
     />
   
    </>
  );
}

export default Header;
