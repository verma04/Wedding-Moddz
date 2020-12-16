import { faRoad } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

import { Section } from './Style'
import TopBar  from '../../layout/Topbar/topbar';
import Navbar from '../../layout/Navbar/Navbar'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Footer from '../footer/Footer'

import {vendorList} from '../../../actions/UserActions'
import vendor from '../vendor/vendor';
class List extends Component {

   
    componentDidMount( ){


        const data = {
        city: this.props.match.params.id,
        category: this.props.match.params.vendor
        }
        
       this.props.vendorList(data)
    }
 
    render() {

        const { vendorlist} = this.props.user;
       
        if( vendorlist === null ){
            return (
                 null
            )
        }

        


        return (
            <React.Fragment>
                <TopBar/>
                <Navbar/>
            <Section>
                <div className="flex" >



               <div className="flex-1" >
         {vendorlist.map((number) =>
               <div className="list" >  
                    <div className="up" >

                    <div className="wrapper" >
                          <img src={number.img} ></img>
                    <div className="about" >
                
                <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607404013/icons8-about-50_zrqehn.png'} ></img>

                    </div>

                    <div class="tooltiptext">
                     <h4>About Vednor</h4>
                    <p>

                    Line 252:25:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
[1]  
                    </p>
                    </div>
                     


                    <div class="triangle-left"></div>

                        </div>   
                        <div className="data" >

                        <div className="data-1" >

         <h4>{number.name}</h4>
                            <i class="fas fa-star"><span>5.0</span></i>

</div>
<div className="data-1" >
<li>dsds</li>
<li>sdd</li>
</div>

                        </div>
                        
                        </div>   
                         <div className="down" >
               
                         ₹{number.pricePerPlate}

    
    </div>            
  

               </div>
  
  )}
               </div>

                </div>
            </Section>
            <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    admin: state.admin,
    user:state.user
  });

export default connect (
    mapStateToProps,
    { vendorList }
) (withRouter( List));