import React, { Component } from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import{ Item  }from './Slider';
import Img from 'react-cool-img';
import  { Section} from './Style'
import { withRouter } from 'react-router';
 


 class Responsive extends Component {

navigate  = ( id) => {
  this.props.history.push('/')
}

 
  render() {
   
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

   
<>
      
      <Item>

         
       
         <div className="center" >
  
         <Carousel responsive={responsive}>
        
  <div >
  <div className='img-wrapper'   >
            <Img  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606986731/wedding%20Moodz/wdmdz_7website_dcs3sm.jpg"}  cache  alt="sdd"  ></Img>
            <div className="fade" >
         {/* <h2>number.category</h2> */}
         </div>
            </div>

            
  </div>
  <div >
  <div className='img-wrapper'   >
            <Img  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606986731/wedding%20Moodz/wdmdz_7website_dcs3sm.jpg"}  cache  alt="sdd"  ></Img>
            <div className="fade" >
         {/* <h2>number.category</h2> */}
         </div>
            </div>

            
  </div>
  <div >
  <div className='img-wrapper'   >
            <Img  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606986731/wedding%20Moodz/wdmdz_7website_dcs3sm.jpg"}  cache  alt="sdd"  ></Img>
            <div className="fade" >
         {/* <h2>number.category</h2> */}
         </div>
            </div>

            
  </div>
  <div >
  <div className='img-wrapper'   >
            <Img  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606986731/wedding%20Moodz/wdmdz_7website_dcs3sm.jpg"}  cache  alt="sdd"  ></Img>
            <div className="fade" >
         {/* <h2>number.category</h2> */}
         </div>
            </div>

            
  </div>
  <div >
  <div className='img-wrapper'   >
            <Img  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606986731/wedding%20Moodz/wdmdz_7website_dcs3sm.jpg"}  cache  alt="sdd"  ></Img>
            <div className="fade" >
         {/* <h2>number.category</h2> */}
         </div>
            </div>

            
  </div>4  <div >
  <div className='img-wrapper'   >
            <Img  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606986731/wedding%20Moodz/wdmdz_7website_dcs3sm.jpg"}  cache  alt="sdd"  ></Img>
            <div className="fade" >
         {/* <h2>number.category</h2> */}
         </div>
            </div>

            
  </div>

  
</Carousel>


        </div>
         
      </Item>
    



    
    
    
  </>
    );
  }
}


export default ( withRouter(Responsive) );