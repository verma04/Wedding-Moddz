import React, { Component } from "react";
import { NavLink , Link } from "react-router-dom";

import { Nav }  from './Style';
import { connect } from "react-redux";
import { logoutUser , getCity } from "../../../actions/authActions";


class Topbar extends Component {
 

  render() {

    const { city } = this.props.admin;
    return (
      <Nav>

      
        <div className='flex' >

   <div className='left' >
   
   <h2>India's Favourite Wedding Marketplace</h2>

   

    {(() => {
        if ( city === null ) {
          return (
            <select name="cars" id="cars">
            <option value="volvo">All city</option>
             <option value="saab">Dharmshala</option>
    <option value="opel">Palampur</option>
    <option value="audi">Audi</option>


    </select>
          )
        }  else {
          return (
         
            <select name="cars" id="cars">
               <option onClick={() => this.props.history.push(`/dkdkdssd`) } value="volvo">All city</option>
            {city.map((number) =>
           
            <option  onClick={() => this.props.history.push(`/dkdkdssd`) }  value="saab"> {number.city}</option>
            
          
            )}
          
    </select>
  
          )
        }
      })()}
  
 
   </div>


   <div className='right' >

  <h2> <i class="fas fa-file-signature"></i> Write a review</h2>
  
   </div>

        </div>
         
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  admin: state.admin
});

export default connect(
  mapStateToProps,
  { logoutUser  , getCity }
)(Topbar);
