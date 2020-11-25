
import React, { Component } from 'react'
import { Slider } from './style'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



import { withRouter } from "react-router";

import Img from 'react-cool-img';
 class DemoCarousel extends Component {
    render() {
        return (
            <Slider>
                <div    className="center" >
              <Carousel   showThumbs={false} showStatus={false} useKeyboardArrows  autoPlay interval="2000">
                  <div className="img-1">
              <div className="img-wrapper" >
                    <Img alt="sdd"  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606313440/image-3_dqjq19.jpg"}  cache    src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606313440/image-3_dqjq19.jpg'}/>
                   

                </div>
           
                </div>
                <div className="img-1">
                <div className="img-wrapper" >
                    <Img alt="sdd"   placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606313525/photo-1587271407850-8d438ca9fdf2_t25ztg.jpg"}  cache  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606313522/photo-1583878545126-2f1ca0142714_lpzxga.jpg'}/>
                   

                </div>
         
                </div>
              
                <div className="img-1">
              <div className="img-wrapper" >
              <Img  alt="sdd"  placeholder={"https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1606294996/LAZY_LOADING_NIR_LOGO1_n8hcwm.png"}  cache   src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606314782/delhi_bg_k87re9.jpg'} />
                  
                   

                </div>
             
                </div>
                
            </Carousel>
            </div>
            </Slider>
        )
    }
}


export default withRouter(DemoCarousel)