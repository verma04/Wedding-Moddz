import React, { Component } from 'react';
import { Section } from './Style'
import { getCatgory } from "../../../../actions/UserActions";
import   { connect} from 'react-redux';

 class Category extends Component {
       
    state ={
        active1: false,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        active6:false,
    

    }
 

    render() {

            const { category }  = this.props.user
       
            

        return (
            <Section>
                
       <div className="flex" >

   <div className="head" >

 <h2>Wedding Categories</h2>
 <h3>View all Categories <i class="fas fa-angle-right"></i>
</h3>

   </div>
      
   <div className="category" >
 
 
    
   <div className="category1" >
     <div className="set" >
   <div className="set1" id="pink" >
       <div className='data' >
           <h2>Venues   <i class="fas fa-angle-up"></i></h2>
           <h3>Banquet Halls, Lawns / Farmhouses, Reso..... </h3>
       </div>
       <div className='wrapper' >
           <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608287532/wedding%20Moodz/hvvqoyugfgm3aiduiq0s.jpg'} ></img>
       </div>
     
       </div>

       {  this.state.active1 && 
        <div className="down" >
     
        <ul>
            <li id='bold'>View All Venues</li>
            <li>Lawns / Farmhouses</li>
            <li>Small Function Halls</li>
         <li>Kalyan Mandapam
   </li>
         <li>4 Star & Above Hotels</li>
         <li>
   Banquet Halls</li>
        </ul>
   
   
     </div>  }
 


     </div>
     <div className="set" >
   <div className="set1" id="pink" >
       <div className='data' >
           <h2>Venues   <i class="fas fa-angle-up"></i></h2>
           <h3>Banquet Halls, Lawns / Farmhouses, Reso..... </h3>
       </div>
       <div className='wrapper' >
           <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286662/wedding%20Moodz/juntzcbr5f3pjmyvnhdj.jpg'} ></img>
       </div>
     
       </div>

       {  this.state.active2 && 
        <div className="down" >
     
        <ul>
            <li id='bold'>View All Venues</li>
            <li>Lawns / Farmhouses</li>
            <li>Small Function Halls</li>
         <li>Kalyan Mandapam
   </li>
         <li>4 Star & Above Hotels</li>
         <li>
   Banquet Halls</li>
        </ul>
   
   
     </div>  }
 


     </div>
 </div>
  <div className="category1" >
     <div className="set" >
   <div className="set1" id="pink" >
       <div className='data' >
           <h2>Venues   <i class="fas fa-angle-up"></i></h2>
           <h3>Banquet Halls, Lawns / Farmhouses, Reso..... </h3>
       </div>
       <div className='wrapper' >
           <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286661/wedding%20Moodz/jsr17kef8uhpzfwjdk8y.jpg'} ></img>
       </div>
     
       </div>

       {  this.state.active3 && 
        <div className="down" >
     
        <ul>
            <li id='bold'>View All Venues</li>
            <li>Lawns / Farmhouses</li>
            <li>Small Function Halls</li>
         <li>Kalyan Mandapam
   </li>
         <li>4 Star & Above Hotels</li>
         <li>
   Banquet Halls</li>
        </ul>
   
   
     </div>  }
 


     </div>
     <div className="set" >
   <div className="set1" id="pink" >
       <div className='data' >
           <h2>Venues   <i class="fas fa-angle-up"></i></h2>
           <h3>Banquet Halls, Lawns / Farmhouses, Reso..... </h3>
       </div>
       <div className='wrapper' >
           <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286659/wedding%20Moodz/curpw9lnr6pz5cbvepql.jpg'} ></img>
       </div>
     
       </div>

       {  this.state.active4 && 
        <div className="down" >
     
        <ul>
            <li id='bold'>View All Venues</li>
            <li>Lawns / Farmhouses</li>
            <li>Small Function Halls</li>
         <li>Kalyan Mandapam
   </li>
         <li>4 Star & Above Hotels</li>
         <li>
   Banquet Halls</li>
        </ul>
   
   
     </div>  }
 


     </div>
 </div>



 <div className="category1" >
     <div className="set" >
   <div className="set1" id="pink" >
       <div className='data' >
           <h2>Venues   <i class="fas fa-angle-up"></i></h2>
           <h3>Banquet Halls, Lawns / Farmhouses, Reso..... </h3>
       </div>
       <div className='wrapper' >
           <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286843/wedding%20Moodz/xyrtikvgncsqdrqqjq2t.jpg'} ></img>
       </div>
     
       </div>

       {  this.state.active5 && 
        <div className="down" >
     
        <ul>
            <li id='bold'>View All Venues</li>
            <li>Lawns / Farmhouses</li>
            <li>Small Function Halls</li>
         <li>Kalyan Mandapam
   </li>
         <li>4 Star & Above Hotels</li>
         <li>
   Banquet Halls</li>
        </ul>
   
   
     </div>  }
 


     </div>
     <div className="set" >
   <div className="set1" id="pink" >
       <div className='data' >
           <h2>Venues   <i class="fas fa-angle-up"></i></h2>
           <h3>Banquet Halls, Lawns / Farmhouses, Reso..... </h3>
       </div>
       <div className='wrapper' >
           <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608286663/wedding%20Moodz/wtaa2vqlrn7sxzuxexee.jpg'} ></img>
       </div>
     
       </div>

       {  this.state.active6 && 
        <div className="down" >
     
        <ul>
            <li id='bold'>View All Venues</li>
            <li>Lawns / Farmhouses</li>
            <li>Small Function Halls</li>
         <li>Kalyan Mandapam
   </li>
         <li>4 Star & Above Hotels</li>
         <li>
   Banquet Halls</li>
        </ul>
   
   
     </div>  }
 


     </div>
 </div>
 


</div>


       </div>
       <div  className="bg" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_23_i1yxo5.svg'}  ></img>
                   </div>
                   <div  className="bg1" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972542/wedding%20Moodz/Asset_23_4x_znpq7g.png'} ></img>
                   </div>
            </Section>
        )
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
  )(Category);