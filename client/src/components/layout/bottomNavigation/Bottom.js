import React, { Component } from "react";
import { NavLink , Link, Redirect } from "react-router-dom";


import { connect } from "react-redux";


import { Navigation} from './Style'

class Bottom extends Component {

   
 

  render() {
    
        
   

      

    return (
            
      

      <Navigation>
      

      <div className="flex" >
     
   <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
     <i class="fas fa-home"></i>
     <h4> Home</h4>

    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/categories"
    >
     
      <i class="fas fa-store-alt"></i>
      <h4>Vedndors</h4>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/stories"
    >
     <h4>Photos</h4> 
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contactus"
    >
      <h4>Blogs</h4>
      
    </NavLink>
  
    </div>
  
  

      
      
      </Navigation>
    );
  }
}



export default Bottom;


