import React, { Component } from 'react';

import { Section} from './style';

import  Footer from '../../../footer/Footer'
import{ Item  }from './Slider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img from 'react-cool-img';
import Navbar from '../../../Navbar/Navbar';
import TopBar from '../../../Topbar/topbar'
import { connect } from 'react-redux';
import {vendorDetials} from '../../../../../actions/UserActions'
import Loading from '../../../Loading/Loading';




 class photos extends Component {
   

   componentDidMount() {
   
      let data = {
         id: this.props.match.params.id
      }
   this.props.vendorDetials(data)

   }

    
    render() {
  
       
        const { vendordet} = this.props.user;
   
          if ( vendordet === null ){
             return (
                <Loading/>
             )
          }

        return (
            <React.Fragment>
                  <TopBar/>
        <Navbar/>
            <Section>


 <div className='reala' >
    <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972540/wedding%20Moodz/Asset_21_xpk7g5.svg'}  ></img>
 </div>

 <div className='reala1' >
    <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_22_xvpdjl.svg'}  ></img>
 </div>


            </Section>
   
            <Item>

         

  

</Item>
 


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
   { vendorDetials }
) ( photos);