import React  from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import '../Toolbars/sidebar.css';



function Hamburger({openSidebar}) {
  
    return (
        <span className="MenuIcon mt-3 ml-3 mr-1 text-white">
          <MenuIcon className="menu ml-1 mt-1"  onClick={openSidebar}/> 
        </span>
    )
}

export default Hamburger;
