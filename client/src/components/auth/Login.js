import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import  { LoginBox } from './Style';
import Navbar from '../../components/layout/Navbar/Navbar';
import Topvar from '../../components/layout/Topbar/topbar'
import Footer from '../layout/footer/Footer'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <Topvar/>
        <Navbar/>
           <LoginBox>

        <div  className="row">
         
             <div className="login-btn" >
              <button> <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607063197/wedding%20Moodz/icons8-google-50_lsm4za.png'} ></img> <h2> Sign in with google  </h2></button>
              <button><img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607063197/wedding%20Moodz/icons8-facebook-48_tqt1ll.png'} ></img> <h2> Sign in with facebook </h2> </button>
             </div>

             <div class="or-separator">OR</div>
           
            <form noValidate onSubmit={this.onSubmit}>

              <div className='input' >
              <div className="input-field">
              <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
              
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
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
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
               
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              </div>
                <button
  
                  type="submit"
                  
                >
                  Login  <i class="fas fa-sign-in-alt"></i>
                </button>
         
            </form>
         
        </div>
         
         <div className="bottom" >
          
       
 
    <button onClick={() => this.props.history.push("/vendor-login") } >  Business Login</button>
         </div>
      
         <div className="send" >
          
           



         </div>
      


         <div  className="bg" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_22_xvpdjl.svg'}  ></img>
                   </div>
                   <div  className="bg1" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972545/wedding%20Moodz/Asset_20_4x_xmpolj.png'} ></img>
                   </div>
   
         







        </LoginBox>
        <Footer/>
        </React.Fragment>
     
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
