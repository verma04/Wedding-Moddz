import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Nav }  from './Style'

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <div className='flex' >

   <div className='left' >
   
   <img src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606310657/asset_4x_akngst.png"} ></img>

   </div>


   <div className='right' >

   <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/products"
    >
      Categories
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
      Stories
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
      ContactUs
    </NavLink>
    <button>SignUp</button>
   </div>

        </div>
         
      </Nav>
    );
  }
}

export default Navbar;
