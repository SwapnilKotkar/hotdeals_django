import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
      <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-none" style={{fontSize:"15px"}}>
            <div className="container-lg d-flex flex-row justify-content-center">
              <div>
                <ul className="p-0">
                    <li className="d-inline-block">
                        <NavLink className="nav-link" aria-current="page" to="/adminprofile/editprofile" style={{color:"black"}}>Edit profile</NavLink>
                    </li>
                    <li className="d-inline-block">
                        <NavLink className="nav-link" to="/adminprofile/alldeals" style={{color:"black"}}>Deals</NavLink>
                    </li> 
                    <li className="d-inline-block">
                        <NavLink className="nav-link" to="/adminprofile/allusers" style={{color:"black"}}>Users</NavLink>
                    </li>
                </ul>          
              </div>
            </div>
          </nav>
      </>
  );
};

export default Sidebar;
