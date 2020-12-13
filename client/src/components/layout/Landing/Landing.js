
import React, { Component } from 'react'
import { Slider } from './style'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Search from '../SearchBox/Serach';
import Navbar from '../Navbar/Navbar';
import TopBar from '../Topbar/topbar'
import Footer from '../footer/Footer';
import VednorSlider from './vednorSlider/Slider';

import Top from '../Backtoptop/Top'
import   { connect} from 'react-redux';
import { getCity , getCatgory  } from "../../../actions/UserActions";
import Banner from './Banner/Banner'
import PopularSearches from './Popular Searches/Popular';

import { withRouter } from "react-router";

import Bottom from '../bottomNavigation/Bottom'

import Category from './Category/Category'

import Img from 'react-cool-img';
 class DemoCarousel extends Component {
 
    componentDidMount() {
        this.props.getCatgory();
         this.props.getCity()
         document.title = "Home"
    }
    

 

    render() {
        return (
            <React.Fragment>
                <TopBar/>
        <Navbar/>
        <Slider>
                <div    className="center" >
              <Carousel   showThumbs={false} showStatus={false} useKeyboardArrows  autoPlay interval="2000">
                  <div className="img-1">
              <div className="img-wrapper" >
                    <Img alt="sdd"  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606313440/image-3_dqjq19.jpg"}  cache    src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607758229/wedding%20Moodz/Image3_p8wirh.jpg'}/>
                   

                </div>
           
                </div>
                <div className="img-1">
                <div className="img-wrapper" >
                    <Img alt="sdd"   placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606313525/photo-1587271407850-8d438ca9fdf2_t25ztg.jpg"}  cache  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607758229/wedding%20Moodz/Image2_lobp0z.jpg'}/>
                   

                </div>
         
                </div>
              
                <div className="img-1">
              <div className="img-wrapper" >
              <Img  alt="sdd"  placeholder={"https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1606294996/LAZY_LOADING_NIR_LOGO1_n8hcwm.png"}  cache   src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607758222/wedding%20Moodz/Image1_ayre8n.jpg'} />
                  
                   

                </div>
             
                </div>
                
            </Carousel>

            <Search/>
          

            </div>
             
            </Slider>
        
        
           <Banner/>
            <PopularSearches/>
            <VednorSlider/>
            <Category/>
            <Footer/>
            <Top/>
            <Bottom/>
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
    { getCatgory , getCity }
) (withRouter(DemoCarousel));