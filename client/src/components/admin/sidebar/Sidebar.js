import React, { Component } from 'react';

import { Side  } from './Style'
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <Side>
                  
                  <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/dashboard"
    >
  <i class="fas fa-home"></i>  <h3>Dashboard</h3> 
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/categories"
    >
   <i class="fas fa-list"></i>  <h3>  Categories</h3> 
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/cities"
    >
    <i class="fas fa-city"></i>  <h3>Services Cities </h3>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/vendor"
    >
     <i class="fas fa-school"></i>  <h3>Vendor List</h3> 
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/request"
    >
    <i className="fas fa-bell"></i> <h3>Requset</h3> 
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/Users-list"
    >
 <i class="fas fa-users"></i>  <h3>User List</h3>  
      </NavLink>
      <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/booking-list"
    >
  <i class="far fa-list-alt"></i>  <h3> Booking List</h3> 
      </NavLink>
      <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/coupon"
    >
   <i class="fas fa-money-check-alt"></i>  <h3>   Coupan</h3>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/ad"
    >
    <i class="fas fa-star"></i>  <h3>Ratings </h3>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/subcription-list"
    >
    <i class="fas fa-credit-card"></i>  <h3>Subcriptions</h3>  
    </NavLink>

    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/setting"
    >
 <i class="fas fa-cog"></i> <h3>Setting</h3>  
      </NavLink>
    
    <a
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
 <i class="fas fa-sign-out-alt"></i>   <h3>Logout</h3>
      </a>

            </Side>
        )
    }
}
