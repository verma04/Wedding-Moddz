import React, { Component } from 'react'
import  { Sec  } from './Searchstyle'
export default class Search extends Component {

    state = {

        search: true,
          
      active: {
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607239313/wedding%20Moodz/logo1_4x_qe2sr8.png",
        name:'All',
        placeholder:"Search:  Vendors, Photos, Articles"
      },
    
           
      list1: {
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607239313/wedding%20Moodz/logo1_4x_qe2sr8.png",
        name:'All',
        placeholder:"Search:  Vendors, Photos, Articles"
      },
      list2: {
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607242430/wedding%20Moodz/home-5-256_tszngw.png",
        name:'Vendor',
        placeholder:"Search: Wedding Vendors"
      },
    
      list3: {
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607242430/wedding%20Moodz/photo-256_gf0wjf.png",
        name:'Photos',
        placeholder:"Search: Wedding Photos"
      },
    
      list4: {
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607242430/wedding%20Moodz/article-256_hftibo.png",
        name:'Article',
        placeholder:"Search: Wedding Artciles"
      }
    
        
    
    
      }
    
      onActive1 =() => {
        this.setState({active: this.state.list1})
        console.log('sd')
    
      }
      onActive2 =() => {
        
        this.setState({active: this.state.list2})
      }
       
      onActive3 =() => {
        this.setState({active: this.state.list3})
      }
       
      onActive4 =() => {
        this.setState({active: this.state.list4})
      }
           
    render() {
        return (
            <React.Fragment>
            <Sec>
                

          
           
               
           <div className='search-1' >
             <div className="head" >
                   <h2>Everything you need, to plan your dream Wedding!</h2>
                   <h3>Search for vendors, ideas, real wedding stories and more!</h3>
             </div>
             <div className='input' >
               <div className="inner" >
               <div className="box" >
      <div className="left" >  <img src={this.state.active.img} ></img>  <h4>{this.state.active.name}</h4> 
        
                   
                   
                    </div>
                   <div className="right" ><i class="fas fa-angle-down"></i></div>
         
                   </div>
                   <div class="dropdown-content">
                   <div className="box" onClick={this.onActive1} >
      <div className="left" >  <img src={this.state.list1.img}  ></img>  <h4>{this.state.list1.name}</h4>   </div>
                   <div className="right" ><i ></i></div>
         
                   </div>
                   <div className="box"   onClick={this.onActive2}  >
                   <div className="left" >  <img src={this.state.list2.img} ></img>  <h4>{this.state.list2.name}</h4>   </div>
                   <div className="right" ><i ></i></div>
         
                   </div>
                   <div className="box" onClick={this.onActive3}  >
                   <div className="left" >  <img src={this.state.list3.img} ></img>  <h4>{this.state.list3.name}</h4>   </div>
                   <div className="right" ><i ></i></div>
         
                   </div>
                   <div className="box"  onClick={this.onActive4} >
                   <div className="left" >  <img src={this.state.list4.img} ></img>  <h4>{this.state.list4.name}</h4>   </div>
                   <div className="right" ><i ></i></div>
         
                   </div>
      
                   
      
   
    </div>
                   <input    autofocus="autofocus" placeholder={this.state.active.placeholder}  ></input>
                   </div>
             
  
             </div>
  
             <div className='popluar' >
  
  
                 <div className="head" >
            <h2>Popular Searches</h2>
      
            </div>
     <div className='btn' >
       <button className='btn1' >Red bridal lehenga</button>
       <button>Mehendi designs</button>
       <button>Mehendi designs</button>
       <button>Sangeet songs</button>
       <button>Bridal Makeup in Mumbai</button>
  
       <button className='btn1' >Bridal Makeup in Mumbai</button>
  
    
  
     </div>
  
             </div>
          
  
        
             </div>
  
             <div className='search-2' >
             
  <div className='bottom' >
    <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972544/wedding%20Moodz/logo4_4x_ijth3b.png'}  />
  
       <h4>India's Favourite Wedding Marketplace</h4>
  
  </div>
  
        
             </div>
  
              <div className='close' onClick={this.props.send} >&times;</div>
           
        
        
        


            </Sec>
            </React.Fragment>
        )
    }
}
