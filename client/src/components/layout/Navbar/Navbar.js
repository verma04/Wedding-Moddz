import React, { Component } from "react";
import { NavLink , Link, Redirect } from "react-router-dom";

import { Nav }  from './Style';
import Search from './Search'
import { connect } from "react-redux";
import { logoutUser , getCity } from "../../../actions/authActions";

class Navbar extends Component {

    state = {
      active:false
    }
   
    onSearch=() => {
      this.setState({active:!this.state.active})
    }

 

  render() {
    const { user , isAuthenticated } = this.props.auth;
        
    if(user.role==="admin"){
       return (
         <Redirect to='/admin/dashboard' ></Redirect>
       )
    }
      

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


   {(() => {
   if (isAuthenticated === true) {
          return (
            <button  onClick={() => this.props.logoutUser()}  class="button button1" >    Logout</button>
          )
           } else {
          return (
            <Link to="/Login" >  <button  class="button button1"  >  SignUp </button></Link> 
          )
        }
      })()}
  
  
   </div>

        </div>
         


        {this.state.active && <Search   send={this.onSearch} />}
      
      
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logoutUser  , getCity }
)(Navbar);

