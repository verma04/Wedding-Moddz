import React, { Component } from "react";
import { NavLink , Link } from "react-router-dom";

import { Nav }  from './Style';
import Search from './Search'

class Navbar extends Component {

    state = {
      active:false
    }
   
    onSearch=() => {
      this.setState({active:!this.state.active})
    }
   

  render() {
    return (
      <Nav>

      
        <div className='flex' >

   <div className='left' >

   <div className='wrapper' >
   
   <Link to='/'> <img src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606310657/asset_4x_akngst.png"} ></img> </Link> 

</div>

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
      to="/categories"
    >
      Categories
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/stories"
    >
      Stories
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contactus"
    >
      ContactUs
    </NavLink>
  
  
  
  
  
   </div>


   <div className='right' >

   <i onClick={this.onSearch}  class="fas fa-search"></i>
  
   <Link to="/Login" >  <button   >  SignUp </button></Link> 
   </div>

        </div>
         


        {this.state.active && <Search   send={this.onSearch} />}
      
      
      </Nav>
    );
  }
}

export default Navbar;
