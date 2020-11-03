import React from 'react';
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';


function AppHeader() {
   return (
    <div className="app-header">
      <div className="container d-flex justify-content-between align-items-center pt-3">
         <h3 className=" text-white">devjobs</h3>
         <div className="theme-toggle d-flex align-items-center">
           <WbSunnyIcon className="text-warning"/>
             <Switch
               defaultChecked
               color="default"
               inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            <Brightness3Icon className="text-white"/>
         </div>
      </div>
    </div>
   );
}

export default AppHeader;
