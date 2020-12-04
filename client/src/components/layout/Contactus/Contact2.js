import React, { Component } from 'react';
import  { Section} from './Style';

import Footer from '../footer/Footer'

export default class Contact extends Component {
   
    state = {
     one:true,
     two:true,
     three:true,
     four:true,
     five:true,
     value:'',
    
     

    }
    handleChange =(event) => {
      this.setState({value: event.target.value});
    }
    toggle1 = () => {
      this.setState({one:!this.state.one})
    }
    toggle2 = () => {
      this.setState({two:!this.state.two})
    }
    toggle3 = () => {
      this.setState({three:!this.state.three})
    }
    toggle4 = () => {
      this.setState({four:!this.state.four})
    }
    toggle5 = () => {
      this.setState({five:!this.state.five})
    }
    async componentDidMount () {

    
        await window.scrollTo(0, 0);
   
        
      
      }
    render() {
        return (
          <React.Fragment>
            <Section>

              

                  <div className='flex' >
                      <div className='flex-1' >
                  <div className="hero" >
                   <h2>CONTACT US</h2>
                   <h4>Question not answered yet? We are here to help!</h4>

                  </div>

               
               
               <div className="email" >
                
                <div className="left" >

           <img alt='ad' src="https://res.cloudinary.com/spark3313/image/upload/v1606115957/wy6hedqnavejuzem8tct.svg" ></img>

            <ul>
                <li><h3>EMAIL</h3></li>
                <li><h4>Typical reply time: within a day or two</h4></li>
                <li><h5>Everyday 6am-6pm</h5></li>
            </ul>

                </div>
                <div className="right" >

<button>Email US</button>

     </div>
               </div>

               <div className="email" >
                
                <div className="left" >

           <img alt='ad' src="https://res.cloudinary.com/spark3313/image/upload/v1606115957/wy6hedqnavejuzem8tct.svg" ></img>

            <ul>
                <li><h3>Call</h3></li>
                <li><h4>
Available   Mon-Fri  </h4></li>
                <li><h5>Everyday 6am-6pm</h5></li>
            </ul>

                </div>
                <div className="right" >

<button>Call Us</button>

     </div>
               </div>





  
              


            
                  </div>
                  </div>
                  <div  className="bg" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_22_xvpdjl.svg'}  ></img>
                   </div>
                   <div  className="bg1" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972545/wedding%20Moodz/Asset_20_4x_xmpolj.png'} ></img>
                   </div>
            
            </Section>
            <Footer/>
            </React.Fragment>
        )
    }
}
