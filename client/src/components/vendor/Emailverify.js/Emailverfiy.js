import React, { Component } from 'react';

import  { Section  } from './Style'
import Navbar from '../../layout/Navbar/Navbar'
import   { connect} from 'react-redux';
import classnames from "classnames";
import  { verifyOtp , getVerfication} from '../../../actions/VednorAction'

import { Redirect} from 'react-router-dom'
 class Emailverfiy extends Component {

    state ={
        value1:"",
        value2:"",
        value3:"",
        value4:"",
        errors: {}
    }
    componentDidMount() {
        this.props.getVerfication();
        document.title = "Verify Account"
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
      onSubmit = e => {
        e.preventDefault();

         if ( this.state.value1 ==='' || this.state.value2 ==='' ||this.state.value3 =='' ||this.state.value4  ==='' ){
             alert("value is null")
         }
           else {
        const userData = {
          value1: this.state.value1,
          value2: this.state.value2,
          value3: this.state.value3,
          value4: this.state.value4,
        };
    
         this.props.verifyOtp(userData, this.props.history)
    }
      };
    render() {
        const { user} = this.props.auth;
        const { errors } = this.state;
        const { otp } = this.props.vendors;

        // if( otp === ""){
        //     return (
        //     null
        //     )
        // }
      
          
        return (
            <React.Fragment>
                <Navbar/>
            <Section>

                <div className="flex" >

   <div className="head" >
        <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972544/wedding%20Moodz/logo4_4x_ijth3b.png" ></img>
     
       <div className="data" >

       <h2>Happily ever after starts here!</h2>

        <h3> Verfity your account  otp send to <a>{user.email}</a> </h3>
       </div>
  
    

   </div>

  
        <form noValidate onSubmit={this.onSubmit}>
        <div className="input" >
       <input 
         onChange={this.onChange}
         value={this.state.value1}
         id='value1'
         type='number'
       
       autofocus="autofocus"></input>
       <input
        onChange={this.onChange}
        value={this.state.value2}
        id='value2'
        type='number'
       autofocus="autofocus"></input>
       <input 
         onChange={this.onChange}
         value={this.state.value3}
         id='value3'
         type='number'
       autofocus="autofocus"></input>
       <input
         onChange={this.onChange}
         value={this.state.value4}
         id='value4'
         type='number'
       autofocus="autofocus"
       className={classnames("", {
        invalid: errors.phone
      })}
       ></input>

<div className="red-text">{errors.phone}</div>
       </div>
       <button   type="submit">Submit</button>
       </form>


<div className="footer" >

<h2>Resend</h2>
       
</div>


                </div>

                <div  className="bg" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_22_xvpdjl.svg'}  ></img>
                   </div>
                   <div  className="bg1" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972545/wedding%20Moodz/Asset_20_4x_xmpolj.png'} ></img>
                   </div>
                
            </Section>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    admin: state.admin,
    errors: state.errors,
    vendors: state.vendors
  });
  
  export default connect(
    mapStateToProps,
    { verifyOtp , getVerfication }
  )(Emailverfiy);
  