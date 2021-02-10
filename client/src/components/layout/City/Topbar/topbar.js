import React, { Component } from "react";
import { NavLink , Link } from "react-router-dom";

import { Nav }  from './Style';
import { connect } from "react-redux";
import { logoutUser , getCity } from "../../../../actions/authActions";

import { withRouter } from "react-router";
class Topbar extends Component {

  state = {
   city:  this.props.match.params.id,
    popup:false,
    
  }

  openup = () => {
    this.setState({popup: !this.state.popup })
  
  }

  send = (city) => {

    if( city === "All Cities"){
      this.props.history.push(`/`)
      window.location.reload();
      this.setState({popup: !this.state.popup })
    }
    else {

    this.props.history.push(`/wedding/${city}`)
    this.setState({popup: !this.state.popup , city: city})
    window.location.reload();
    }
  
  }
 
 

  render() {

    const { city } = this.props.admin;
    return (
      <Nav>

      
        <div className='flex' >

   <div className='left' >
   
   <h2>India's Favourite Wedding Marketplace</h2>

   <div onClick={this.openup} className="btn">
  


    <h3>{this.state.city}</h3>

    {(() => {
        if ( this.state.popup ) {
          return (
            <i class="fas fa-caret-down"></i>
          )
        }  else {
          return (
            <i class="fas fa-caret-up"></i>
  
          )
        }
      })()}
   
             </div>

   
{/* 
    {(() => {
        if ( city === null ) {
          return (
           <div onClick={this.openup} className="btn">
AllCity
             </div>
          )
        }  else {
          return (
            <div onClick={this.openup} className="btn">
        AllCity
            </div>
  
          )
        }
      })()}
   */}
 
   </div>


   <div className='right' >

  <h2> <i class="fas fa-file-signature"></i> Write a review</h2>
  
   </div>

        </div>

        { this.state.popup &&  
        <div class="modal">
        <div class="modal-content">
      {/* <span class="close">&times;</span> */}
   
  

     <div className='pop-1' >
    
       <div className='icon' >
       <i class="fas fa-search"></i>
</div>
    <input placeholder="Search City...." ></input>
  

     </div>
     <div className='pop-2' >
     <div className='flex-1'>

 <div className="head" >

 <h2>Top Cities</h2>
 </div>
      

          <ul>
            {/* <li onClick={() => this.props.history.push('/')} >All Cities</li> */}
             <li onClick={() => this.send('Chamba')} >Chamba</li>
             <li onClick={() => this.send('Dalhoiuse')} >Dalhoiuse</li>
             <li onClick={() => this.send('Una')} >Una</li>
             <li onClick={() => this.send('Dharmshala')} >Dharmshala</li>
             <li onClick={() => this.send('Kangra')} >Kangra</li>
             <li onClick={() => this.send('Nurpur')} >Nurpur</li>
             


          </ul>



     </div>
     <div className='flex-1'>

<div className="head" >

<h2>Popular Cities</h2>
</div>
     

         <ul>
            <li onCl >Hamirpur</li>
            <li onClick={() => this.send('Mandi')} >Mandi</li>
            <li onClick={() => this.send('Kullu')} >Kullu</li>
            <li onClick={() => this.send('SHimla')} >SHimla</li>
            <li onClick={() => this.send('Rampur')} >Rampur</li>
            <li onClick={() => this.send('SunderNagar')} > SunderNagar</li>
            


         </ul>



    </div>
    <div className='flex-1'>

<div className="head" >

<h2>Other Cities</h2>
</div>
     

         <ul>
            <li onClick={() => this.send('Chandigarh')} >Chandigarh</li>
            <li onClick={() => this.send('Ambala')} >Ambala</li>
            <li onClick={() => this.send('Noida')} >Noida</li>
            <li onClick={() => this.send('Gurugram')} >Gurugram</li>
            <li onClick={() => this.send('Sonipat')} >Sonipat</li>
            <li onClick={() => this.send('Panipat')} >Panipat</li>
            


         </ul>



    </div>
    {/* <div className='flex-1'>

<div className="head" >

<h2>Top Cities</h2>
</div>
     

         <ul>
            <li onClick={() => this.send('')} >dssd</li>
            <li onClick={() => this.send('')} >dssd</li>
            <li onClick={() => this.send('')} >dssd</li>
            <li onClick={() => this.send('')} >dssd</li>
            <li onClick={() => this.send('')} >dssd</li>
            <li onClick={() => this.send('')} >dssd</li>
            


         </ul>



    </div> */}
    

</div>



 

  </div>
  </div>
         

 

        }

        
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
)(withRouter(Topbar));
