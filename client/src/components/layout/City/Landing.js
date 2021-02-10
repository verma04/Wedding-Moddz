
import React, { Component } from 'react'
import { Slider } from './style'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Search from './SearchBox/Serach';
import Navbar from '../Navbar/Navbar';
import TopBar from './Topbar/topbar'
import Footer from '../footer/Footer';
import VednorSlider from './vednorSlider/Slider';
import { connect } from 'react-redux'
import Top from '../Backtoptop/Top'


import Banner from './Banner/Banner'
import PopularSearches from './Popular Searches/Popular';

import { withRouter } from "react-router";

import Bottom from '../bottomNavigation/Bottom'

import Category from './Category/Category'
import { getCity , getCatgory , city , topsearch  } from "../../../actions/UserActions";
import Img from 'react-cool-img';
import Loading from '../Loading/Loading'
 class DemoCarousel extends Component {

    componentDidMount() {
        this.props.getCatgory();
         this.props.getCity();

         const city ={
             city: this.props.match.params.id
         }
         this.props.city(city);
         this.props.topsearch(city)

         document.title = this.props.match.params.id
    }
    
    render() {
        const { current , venue} = this.props.user;

        if ( current === null || venue === null){
            return (
                <Loading/>
            )
        }

        return (
            <React.Fragment>
                <TopBar/>
        <Navbar/>
            <Slider>
                <div    className="center" >
              <Carousel   showThumbs={false} showStatus={false} useKeyboardArrows  autoPlay interval="2000">
                  <div className="img-1">
              <div className="img-wrapper" >
                    <Img alt="sdd"    cache    src={current.data.cityimg}/>
                   

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
    { getCatgory , getCity , city , topsearch }
) (withRouter(DemoCarousel));