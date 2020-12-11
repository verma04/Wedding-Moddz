import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registervednor } from "../../actions/authActions";
import classnames from "classnames";
import Topbar from '../layout/Topbar/topbar';
import NavbAr from '../layout/Navbar/Navbar';
import Footer from '../layout/footer/Footer';
import {  getCatgory, getCity} from '../../actions/UserActions'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


import { RegisterBox} from './Style/Regsiter'
import { faBuromobelexperte } from "@fortawesome/free-brands-svg-icons";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      phone:'',
      city:'',
      category:'',
      errors: {}
    };
  }

 async componentWillMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/vendor-login");
    }
    await this.props.getCatgory();
    await this.props.getCity();
    

  }

  async componentDidMount() {
   
  
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      phone:this.state.phone,
      city:this.state.city,
      category: this.state.category
    };

    this.props.registervednor(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    const {  category , city  } = this.props.user;

    if ( category === null || city === null){
      return (
        null
      )
    }

    return (
      <React.Fragment>
        <Topbar/>
        <NavbAr/>
      <RegisterBox>
  <div className='flex' >
  
  

        <div className="row">

          <div className="head" >
     <h2>"Grow your Business with WeddingMoodz"</h2>
     <h3>Sign Up to access your Dashboard</h3>

          </div>
        
           
            <form noValidate onSubmit={this.onSubmit}>
            <div className='input' >
          
              <div className="input-field">
              <label htmlFor="name">Name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
             
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="input-field">
              <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
               
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field">
              <label htmlFor="email">Phone</label>
                <input
                  onChange={this.onChange}
                  value={this.state.phone}
                  error={errors.phone}
                  id="phone"
                  type="number"
                  className={classnames("", {
                    invalid: errors.phone
                  })}
                />
               
                <span className="red-text">{errors.phone}</span>
              </div>
              <div className="input-field">
              <label htmlFor="email">City</label>
              <select  id="city" value={this.state.city}    onChange={this.onChange} >
                <option>  City ( Choose your base city here  ) </option>
              {city.map((number) =>
              
              
              <option  id="city" value={number.city}>{number.city}</option>
            
         
                     
              )}
            </select>
                <span className="red-text">{errors.city}</span>
              </div>
              <div className="input-field">
              <label htmlFor="email">Category</label>
              <select  id="category" value={this.state.category}    onChange={this.onChange}>
              <option value='' >Select Vendor Type  </option>
              {category.map((number) =>
              
           
              <option   value={number.category}>{number.category}</option>
             
                     
              )}
            </select>
               
                <span className="red-text">{errors.category}</span>
              </div>
              <div className="input-field">
              <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
              
                <span className="red-text">{errors.password}</span>
              </div>
            
              <div className="input-field">
              <label htmlFor="password2">Confirm Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
            
                <span className="red-text">{errors.password2}</span>
              </div>
              </div>
                <button
                  
                  type="submit"
                
                >
                  Sign up
                </button>
       
            </form>
         
            <div className="footer" >

   
   <h3>Are you a customer?</h3>

   <button  onClick={() => this.props.history.push('/vendor-login') } >Business Sign In </button>
               


            </div>
       
       
        </div>
      
 

        </div>
    

     <div  className="bg" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_22_xvpdjl.svg'}  ></img>
                   </div>
                   <div  className="bg1" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972545/wedding%20Moodz/Asset_20_4x_xmpolj.png'} ></img>
                   </div>
   
      </RegisterBox>
      <Footer/>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
    registervednor: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  user: state.user
  
});

export default connect(
  mapStateToProps,
  { registervednor ,   getCatgory, getCity }
)(withRouter(Register));
