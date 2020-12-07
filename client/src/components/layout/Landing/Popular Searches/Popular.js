import React, { Component } from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import{ Item  }from './Style';
import Img from 'react-cool-img';
import { withRouter } from 'react-router';


 class Responsive extends Component {



 
  render() {
    // var settings = {
    //   dots: true,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //   initialSlide: 0,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // };
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
   

    return (

      
      <Item>
       
         <div className="centerr" >
  
         <Carousel responsive={responsive}>
        
  <div>
  <div className='img-wrapper'    >
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607321545/wedding%20Moodz/groom-wear_hnt9s7.jpg'}  cache  alt="sdd" ></Img>
            <div className="fade" >
         <h2>number.category</h2>
         </div>
            </div>

            
  </div>
  <div>
  <div className='img-wrapper'    >
            <Img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607321545/wedding%20Moodz/groom-wear_hnt9s7.jpg'}  cache  alt="sdd" ></Img>
            <div className="fade" >
         <h2>number.category</h2>
         </div>
            </div>

            
  </div>
  <div>
  <div className='img-wrapper'    >
            <Img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607321545/wedding%20Moodz/groom-wear_hnt9s7.jpg'}  cache  alt="sdd" ></Img>
            <div className="fade" >
         <h2>number.category</h2>
         </div>
            </div>

            
  </div>
  <div>
  <div className='img-wrapper'    >
            <Img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607321545/wedding%20Moodz/groom-wear_hnt9s7.jpg'}  cache  alt="sdd" ></Img>
            <div className="fade" >
         <h2>number.category</h2>
         </div>
            </div>

            
  </div>
  <div>
  <div className='img-wrapper'    >
            <Img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607321545/wedding%20Moodz/groom-wear_hnt9s7.jpg'}  cache  alt="sdd" ></Img>
            <div className="fade" >
         <h2>number.category</h2>
         </div>
            </div>

            
  </div>
  <div>
  <div className='img-wrapper'    >
            <Img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607321545/wedding%20Moodz/groom-wear_hnt9s7.jpg'}  cache  alt="sdd" ></Img>
            <div className="fade" >
         <h2>number.category</h2>
         </div>
            </div>

            
  </div>
  <div>
  <div className='img-wrapper'    >
            <Img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607321545/wedding%20Moodz/groom-wear_hnt9s7.jpg'}  cache  alt="sdd" ></Img>
            <div className="fade" >
         <h2>number.category</h2>
         </div>
            </div>

            
  </div>
  <div>
  <div className='img-wrapper'    >
            <Img  placeholder={"https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1606294995/LAZY_LOADING_NIR_LOGO22_qnfryj.png"}  cache  alt="sdd" ></Img>
            <div className="fade" >
         <h2>number.category</h2>
         </div>
            </div>

            
  </div>

  
</Carousel>


        {/* <Slider {...settings}>
          < Sliderr>
          <div className='img-wrapper' >
            <img alt="sdd" src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1601273971/40020581_2-fresho-fresh-turmeric-organically-grown_r3pahz.webp'} ></img>
            </div>
          </ Sliderr>
          < Sliderr>
          <div className='img-wrapper' >
            <img alt="sdd" src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1601273971/40020581_2-fresho-fresh-turmeric-organically-grown_r3pahz.webp'} ></img>
            </div>
          </ Sliderr>
          < Sliderr>
          <div className='img-wrapper' >
            <img alt="sdd" src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1601273971/40020581_2-fresho-fresh-turmeric-organically-grown_r3pahz.webp'} ></img>
            </div>
          </ Sliderr>
          < Sliderr>
          <div className='img-wrapper' >
            <img alt="sdd" src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1601273971/40020581_2-fresho-fresh-turmeric-organically-grown_r3pahz.webp'} ></img>
            </div>
          </ Sliderr>
          < Sliderr>
          <div className='img-wrapper' >
            <img alt="sdd" src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1601273971/40020581_2-fresho-fresh-turmeric-organically-grown_r3pahz.webp'} ></img>
            </div>
          </ Sliderr>
          < Sliderr>
          <div className='img-wrapper' >
            <img alt="sdd" src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1601273971/40020581_2-fresho-fresh-turmeric-organically-grown_r3pahz.webp'} ></img>
            </div>
          </ Sliderr>
        </Slider> */}
        </div>
         
      </Item>
    
    );
  }
}



export default  ( withRouter(Responsive) );