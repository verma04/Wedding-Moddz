import React, { Component } from 'react';

import { Section} from './style';

import  Footer from '../footer/Footer'
import{ Item  }from './Slider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img from 'react-cool-img';


export default class vendor extends Component {


    
    render() {

        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
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
            <React.Fragment>
            <Section>
                
  <div className="flex" >

      <div  className="wrapper" >
          <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606989478/wedding%20Moodz/fb30641121ad8a7b17bd8489baa55053_1_mnnksf.jpg'} ></img>
      </div>
  
  <div className='data' >

  <div className='data-1' >
  
  <ul>
      <li><img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972542/wedding%20Moodz/verified_ahru4t.svg'} ></img>  <h2>Sharma Studio Dharmshala</h2></li>
      <li>Wedding Photographer</li>
      <li><h2> ₹50000</h2></li>
      <li><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></li>
      <li><h5>Since member 2007</h5></li>
  </ul>
      
      
      </div>

      <div className='data-2' >
        
        <ul>

            <li><img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/loaction_4x_wgn1ec.png'} ></img> <h3>dssssssss   s</h3> </li>
            <li> <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/mail_4x_ipsoeo.png'} ></img>  <h3>dssssssss   s</h3>  </li>
            <li> <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/phone_4x_eo8it4.png'} ></img>    <h3>dssssssss   s</h3>  </li>
            <li>  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/facebook_4x_bphbzh.png'} ></img>   <h3>dssssssss   s</h3>  </li>
            <li>  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/whats_app_4x_faiis5.png'} ></img>   <h3>dssssssss   s</h3>  </li>
            <li>  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/instagram_4x_un5cbx.png'} ></img> <h3>dssssssss   s</h3>   </li>
        </ul>


      </div>
      
  </div>


  </div>

            </Section>
   
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

   
</div>
 <div >
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
 


            <Footer/>
            </React.Fragment>
        )
    }
}
