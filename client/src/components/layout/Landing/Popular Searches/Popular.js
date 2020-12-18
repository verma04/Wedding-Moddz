import React, { Component } from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import{ Item  }from './Style';
import Img from 'react-cool-img';
import { withRouter } from 'react-router';
import { getCity , getCatgory  } from "../../../../actions/UserActions";
import   { connect} from 'react-redux';



 class Responsive extends Component {

  

 
  render() {
    const { category }  = this.props.user
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
    if( category === null) {
      return (
        null
      )
    }

    return (

    

      
      <Item>
       
         <div className="centerr" >
  
         <Carousel responsive={responsive}>
        {category.map((number) => 
  <div>
  <div className='img-wrapper'    >

  {(() => {
        if (number.category === "Photographers " ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286843/wedding%20Moodz/xyrtikvgncsqdrqqjq2t.jpg'}  cache  alt="sdd" ></Img>
          )
        }  if (number.category === "Wedding-Planner" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608287624/wedding%20Moodz/p7bfnkr3xssmztthvopk.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Bridal Wear" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286662/wedding%20Moodz/juntzcbr5f3pjmyvnhdj.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Wedding-decorators" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286843/wedding%20Moodz/xyrtikvgncsqdrqqjq2t.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Jewellery & Accessories " ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286661/wedding%20Moodz/op3ncqdkpvsooa8dslda.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Music & Dance" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286655/wedding%20Moodz/dxyv8wsbyqefafsftu0y.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Mehndi" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286663/wedding%20Moodz/tfbgnh3l6ybqwfflxfnv.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Venues" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286669/wedding%20Moodz/gs4gkin5ckcbjetoimiy.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Groom Wear" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286659/wedding%20Moodz/ptx6rushtn04rpy3wk2g.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Wedding-Caterers" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286661/wedding%20Moodz/jsr17kef8uhpzfwjdk8y.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Wedding-invitations" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286663/wedding%20Moodz/wtaa2vqlrn7sxzuxexee.jpg'}  cache  alt="sdd" ></Img>
          )
        }
        if (number.category === "Pandits" ) {
          return (
            <Img   src="" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286659/wedding%20Moodz/curpw9lnr6pz5cbvepql.jpg'}  cache  alt="sdd" ></Img>
          )
        }
      })()}
           
            <div className="fade" >
        <h2>{number.category}</h2>
         </div>
            </div>

            
  </div>
        )}
  
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


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  admin: state.admin,
  user:state.user
});

export default connect(
  mapStateToProps,
  { getCatgory }
)(withRouter(Responsive) );
