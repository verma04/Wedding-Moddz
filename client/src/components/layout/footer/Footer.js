import React, { Component } from 'react'
import {  Footerr} from './style'
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import {  Link } from 'react-router-dom';
 class Footer extends Component {
    render() {
        const { user , isAuthenticated } = this.props.auth;
        return (
            <Footerr>
                <div className="flex" >
                
                <div id="sdd" className="flex-1" >
                    
                <div className="flex-11" >
                    
                    <h3>dssddssss</h3>
               <ul>
                   <li>wweew</li>
                   <li>wewe</li>
                   <li>wewe</li>
               </ul>


                    </div>

                    <div className="flex-11" >
                    
  
                    <h3>Home</h3>
               <ul>
                   <li>About Us</li>
                   <li>Privacy Policy</li>
                   <li>FAQs</li>

                   <li>Terms & Conditions</li>
               </ul>

                    </div>
                    <div className="flex-11" >
                    
                    <h3>Planning</h3>
               <ul>
                   <li>By Vendors</li>
                   <li>By Location</li>
                   <li>By Ideas</li>
               </ul>


                    </div>
                    <div className="flex-11" >
                    
                    <h3>Venues</h3>
               <ul>
                   <li>Hyatt Regency</li>
                   <li>Budha Mal Castle</li>
                   <li>Hotel the woodz</li>


                   <li>Sarover Resort</li>
                   <li>The Bliss</li>

                 <li>Villa Camellia</li>  
<li>Infinitea Resort</li>
               </ul>


                    </div>


                    </div>

                    <div className="flex-1" >
                    
                    <div className="flex-11" >
                    
                    <h3>dssddssss</h3>
               <ul>
                   <li>wweew</li>
                   <li>wewe</li>
                   <li>wewe</li>
               </ul>


                    </div>

                    <div className="flex-11" >
                    
  
                    <h3>Vendors</h3>
               <ul>
                   <li>Photographers</li>
                   <li>Pandit Ji</li>
                   <li>Bridal Make-Up</li>
                   <li>Caterers</li>
                   <li>DJs, Music & Sound</li>
                   <li>Bridal Wear</li>
                   <li>Jewellery</li>
                 
               </ul>

                    </div>
                    <div className="flex-11" >
                    
                    <h3>Ideas</h3>
               <ul>
                   <li>Himachali</li>
                   <li>Garwali</li>
                   <li>Punjabi</li>
                   <li>Modern</li>
                   <li>Kumaun</li>
                   <li>Kinnauri</li>
                   <li>Gaddi</li>
               </ul>


                    </div>
                    <div className="flex-11" >
                    
                    <h3>Gallery</h3>
               <ul>
                   <li>Accessories</li>
                   <li>Venues</li>
           <li> Heena </li>
               </ul>


                    </div>




                    </div>


                    <div className="flex-2" >
                    
                    <div   className="flex-22" >
                        <h4   >
                    Copyright 2020 © All Rights Reserved   WeddingMoodz |
                    </h4>

                    </div>

                    <div className="flex-22" >
                    <h4>
                 Designed & Developed With     <i className="fas fa-heart"></i>    By<a> Amakein Technologies</a>  
                    </h4>

                    </div>

                    </div>

                   <div  className="bg" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_22_xvpdjl.svg'}  ></img>
                   </div>
                   <div  className="bg1" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972545/wedding%20Moodz/Asset_20_4x_xmpolj.png'} ></img>
                   </div>

                </div>
          
          
          
            </Footerr>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser  }
  )(Footer);
  