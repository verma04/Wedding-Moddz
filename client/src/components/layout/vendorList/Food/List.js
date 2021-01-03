import { faRoad } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

import Loading from '../../Loading/Loading'

import { Section } from '../Style'
import TopBar  from '../../Topbar/topbar';
import Navbar from '../../Navbar/Navbar'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Footer from '../../footer/Footer'
import qs from 'query-string';
import {vendorList} from '../../../../actions/UserActions'
import vendor from '../Venue/vendor/vendor';
import Filter from './Filter'
class List extends Component {

   
    componentWillMount( ){

        const values = qs.parse(this.props.location.search)
        const data = {
        city: this.props.match.params.id,
        category: this.props.match.params.vendor,
        capacity:values.capacity,
        price_per_plate:values.price_per_plate_or_rental,
        spacePrefenence:values.spacePrefenence
        }
        
       this.props.vendorList(data)
       console.log(data)

    }

   

       componentDidMount() {
        

       console.log( this.props.user.vendorlist )
     
    }
 
    render() {

        const { vendorlist} = this.props.user;
       
        if( vendorlist === null ){
            return (
                <Loading/>
            )
        }

        


        return (
            <React.Fragment>
                <TopBar/>
                <Navbar/>
                <Filter/>
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

                    {number.about} 
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
<li>{number.typeCaterers}</li>
<li>2 reviews</li>
</div>

                        </div>
                        
                        </div>   
                         <div className="down" >
               
                        <div className="price" >  ₹{number.priceCaterers} onwards</div> <div className="plate" ></div>

    
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