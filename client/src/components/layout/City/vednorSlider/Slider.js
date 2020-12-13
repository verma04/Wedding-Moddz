import React, { Component } from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import{ Item  }from './Style';
import Img from 'react-cool-img';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import vendor from "../../vendor/vendor";
 


 class Responsive extends Component {

navigate  = ( id) => {
  this.props.history.push('/')
}

 
  render() {

    const {  venue} = this.props.user;
   
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

   
<>
      
      <Item>

               <div className='flex' >
           <div className="head" >
               <h2>Popular Venue Searches</h2>
           </div>

         
       
         <div className="center" >
  
         <Carousel responsive={responsive}>
         {venue.map((number) => 
  <div key={number.id}>
  <div  className='img-wrapper'   >
            <Img  placeholder={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607319271/wedding%20Moodz/banquet-halls_ct7dlq.png"}  cache  alt="sdd"  ></Img>
            <div className="fade" >
         <h3>{number.VendorCategory}</h3>
          <ul>
              <li></li>
         <li>{number.name}</li>
                <li>sdsdds</li>
              </ul>
         </div>
            </div>

            
  </div>
         )}
  
  
</Carousel>


        </div>
         </div>
      </Item>
    



    
    
    
  </>
    );
  }
}

const mapStateToProps = state => ({

  user:state.user
});


export default connect (
  mapStateToProps,
  {  }
) (withRouter(Responsive));