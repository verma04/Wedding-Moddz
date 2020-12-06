import React, { Component } from "react";
import { NavLink , Link } from "react-router-dom";

import { Nav }  from './Style'

class Navbar extends Component {
  render() {
    return (
      <Nav>

      
        <div className='flex' >

   <div className='left' >
   
   <h2>India's Favourite Wedding Marketplace</h2>

   <select name="cars" id="cars">
    <option value="volvo">All Cities</option>
    <option value="saab">Dharmshala</option>
    <option value="opel">Palampur</option>
    <option value="audi">Audi</option>
  </select>
   </div>


   <div className='right' >

  <h2> <i class="fas fa-file-signature"></i> Write a review</h2>
  
   </div>

        </div>
         
      </Nav>
    );
  }
}

export default Navbar;
