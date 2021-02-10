import React, { Component } from 'react';

import { Side  } from './Style'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser  } from "../../../actions/authActions";
 class Sidebar extends Component {
    render() {
        return (
            <Side>
                  
                  <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/vendor/dashboard"
    >
  <i className="fas fa-home"></i>  <h3>Dashboard</h3> 
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/vendor/dashboards"
    >
  <i className="fas fa-envelope"></i>  <h3>  Inbox</h3> 
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/vendor-photos"
    >
   <i className="fas fa-images"></i> <h3>Projects</h3>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/vendor/information"
    >
    <i className="fas fa-info-circle"></i>  <h3>Information</h3> 
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
 <i className="fas fa-comments"></i>  <h3>Reviews</h3>  
      </NavLink>
      <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/vendor/packages"
    >
<i className="far fa-credit-card"></i>  <h3> Membership Packages</h3> 
      </NavLink>
      <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/products"
    >
<i className="fas fa-signal"></i>  <h3>  Statistics</h3>
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/products"
    >
  <i className="fas fa-laptop-code"></i><h3>Widget </h3>
    </NavLink>
  
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/admin/setting"
    >
 <i className="fas fa-cog"></i> <h3>Setting</h3>  
      </NavLink>
    
    <a
      activeClassName="navbar__link--active"
      className="navbar__link"
      
    onClick={() => this.props.logoutUser() }
    >
 <i  className="fas fa-sign-out-alt"></i>   <h3>Logout</h3>
      </a>

            </Side>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logoutUser   }
)(Sidebar );