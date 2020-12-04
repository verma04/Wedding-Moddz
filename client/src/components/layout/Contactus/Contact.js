import React, { Component } from 'react';
import  { Section} from './Style'
import SingleMap from './Map'

export default class Contact extends Component {
   
    state = {
     one:true,
     two:true,
     three:true,
     four:true,
     five:true,
     value:'',
    
     

    }

    async componentDidMount () {

    
      await window.scrollTo(0, 0);
 
      
    
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

                  <div  className="select" >

         <div  className='top' >
           
           <label>HOW CAN WE HELP YOU TODAY?</label>
           <select   value={this.state.value} onChange={this.handleChange}>
           <option value="--">----</option>
  <option value="Works">How Its Works</option>
  <option value="Order">Order And Shipping</option>
  <option value="Manage">Manage Order</option>
  <option value="Products">Products and Gifting</option>
  <option value="Others">Others</option>
</select>
         </div>
                        
                  </div>
                  

            
                  {(() => {
        if (this.state.value === "Works" ) {
          return (
            <div>

<div className="middle" >
   

   <h2>We think this might help</h2>
   
  
            

   <div className='drop' >
   <div onClick={this.toggle1} className="up" >
   <h4>What is your refund policy?</h4>
   
   {(() => {
           if (this.state.one === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.one === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
               If you're not 100% satisfied with our awesome products, contact us within 30 days of your purchase and we'll refund you in full. 
               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   <div className='drop' >
   <div onClick={this.toggle2} className="up" >
   <h4>What is your cancellation policy?</h4>
   
   {(() => {
           if (this.state.two === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i onClick={this.toggle2} class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.two === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
             We’d hate to see you leave the Club but you can cancel your Membership at any time for any reason. If you run into any trouble, our Club Pros will be happy to honor your request right away. 
               </div>
             )
           }
         })()}
   
   
   </div>
   
   <div className='drop' >
   <div onClick={this.toggle3} className="up" >
   <h4>Where do you ship?</h4>
   
   {(() => {
           if (this.state.three === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i onClick={this.toggle3} class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.three === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
         We currently ship to the US, Canada, UK, and Australia. Feel free to contact us for more information.
         </div>
             )
           }
         })()}
   
   
   </div>
   
                   
   <div className='drop' >
   <div onClick={this.toggle4} className="up" >
   <h4>What do you mean by Money Back Guarantee?</h4>
   
   {(() => {
           if (this.state.four === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i onClick={this.toggle4} class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.four === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
       We're so sure you'll love our awesome products that we'll refund you in full if you don't. We ask that you get in touch within 30 days of your purchase if you aren't loving your new grooming routine.
         </div>
             )
           }
         })()}
   
   
   </div>
   
   
     {/* dkmds */}
   
   
   
   
   {/* --------------- */}
 
   {/* --------------- */}
   
  
   
                     </div>
   
   
   
   
                     <div className="contact" >
      
      <h4>Didn't find your answer?
   </h4>
   
   
   <button onClick={() => this.props.history.push('/Contactus/new')}>Contact US</button>
   
   
                     </div>
              </div>
          )
        } else if (this.state.value === "Order") {
          return (
            <div>
                             <div className="middle" >
   
   
  
            

   
  
   <div className='drop' >
   <div onClick={this.toggle1} className="up" >
   <h4>How do I track my order?</h4>
   
   {(() => {
           if (this.state.one === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.one === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
            UPDATE: We are currently experiencing shipping delays, so orders may arrive later than your original estimated delivery date.
   
   Once your order has shipped, we’ll send you an email that will include tracking information.
               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   <div className='drop' >
   <div onClick={this.toggle2} className="up" >
   <h4>How long does it take for my box to process?</h4>
   
   {(() => {
           if (this.state.two === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i  class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.two === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
         UPDATE: We are currently experiencing delayed processing times, so please allow a few extra days for your order to ship.
   
   It takes 24-48 hours to process your order, and we'll email you the tracking information for it once it ships out.
               </div>
             )
           }
         })()}
   
   
   </div>
   
   <div className='drop' >
   <div onClick={this.toggle3} className="up" >
   <h4>Where can I find my order history?</h4>
   
   {(() => {
           if (this.state.three === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i  class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.three === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
       You can view your order history on your Box History page here.
         </div>
             )
           }
         })()}
   
   
   </div>
   
                   
   <div className='drop' >
   <div onClick={this.toggle4} className="up" >
   <h4>What do you mean by Money Back Guarantee?</h4>
   
   {(() => {
           if (this.state.four === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i onClick={this.toggle4} class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.four === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
       We're so sure you'll love our awesome products that we'll refund you in full if you don't. We ask that you get in touch within 30 days of your purchase if you aren't loving your new grooming routine.
         </div>
             )
           }
         })()}
   
   
   </div>
   
   
   {/* --------------- */}
   

   
   
                     </div>
   
   
   
   
                     <div className="contact" >
      
      <h4>Didn't find your answer?
   </h4>
   
   
   <button onClick={() => this.props.history.push('/Contactus/new')}>Contact US</button>
   
   
                     </div>
              </div>
          )
        } else if ( this.state.value ==='Manage') {
          return (
            <div>
                             <div className="middle" >
   
   
  
            


     {/* dkmds */}
   
  
   
   {/* --------------- */}
   
   <div className='drop' >
   <div onClick={this.toggle1} className="up" >
   <h4>Help! I forgot my email.</h4>
   
   {(() => {
           if (this.state.one === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.one === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
            No worries, we got you. Contact us and we'll get you sorted. 
               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   <div className='drop' >
   <div onClick={this.toggle2} className="up" >
   <h4>Help! I forgot my password.</h4>
   
   {(() => {
           if (this.state.two === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i onClick={this.toggle2} class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.two === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
          No worries! Just click "Forgot Password?" on the login page and we'll send a password reset link to the email address on your account. 
   
   Being prompted to enter your old password? Make sure you’re completely logged out by clicking the "Menu” tab on our homepage and selecting “Logout”. Then, try requesting the password link. 
   
   Still having trouble? Contact us.
               </div>
             )
           }
         })()}
   
   
   </div>
   
   <div className='drop' >
   <div  onClick={this.toggle3} className="up" >
   <h4>Can I skip a shipment?</h4>
   
   {(() => {
           if (this.state.three === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i  class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.three === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
       Yup. If you don't need an upcoming shipment, you can change your ship date from your Account page. 
         </div>
             )
           }
         })()}
   
   
   </div>
   
                   
   <div className='drop' >
   <div onClick={this.toggle4}
 className="up" >
   <h4>What do you mean by Money Back Guarantee?</h4>
   
   {(() => {
           if (this.state.four === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i  class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.four === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
       We're so sure you'll love our awesome products that we'll refund you in full if you don't. We ask that you get in touch within 30 days of your purchase if you aren't loving your new grooming routine.
         </div>
             )
           }
         })()}
   
   
   </div>
   
   
   {/* --------------- */}
   
   
                     </div>
   
   
   
   
                     <div className="contact" >
      
      <h4>Didn't find your answer?
   </h4>
   
   
   <button onClick={() => this.props.history.push('/Contactus/new')}>Contact US</button>
   
   
                     </div>
              </div>
          )
        } else if  (this.state.value === "Products") {  
     return (
       <div>
           <div className="middle" >
   
   
  

   
  
   
   <div className='drop' >
   <div onClick={this.toggle1} className="up" >
   <h4>How do I redeem my E-Gift Card?</h4>
   
   {(() => {
           if (this.state.one === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.one === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
           Nice gift!
   
   Click on ‘Menu’
   Click on ‘Redeem Gift Card’
   Enter the gift code
   Pick your blades, other grooming products, and finish up 
               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   
                     </div>
   
   
                     <div className="contact" >
      
      <h4>Didn't find your answer?
   </h4>
   
   
   <button onClick={() => this.props.history.push('/Contactus/new')}>Contact US</button>
   
   
                     </div>
         </div>
     )
        }

        else  {  
          return (
            <div>
            
        
        
                          <div className="contact" >
           
           <h4>Didn't find your answer?
        </h4>
        
        
        <button onClick={() => this.props.history.push('/Contactus/new')}>Contact US</button>
        
        
                          </div>
              </div>
          )
             }
        
      })()}







  
              


            
                  </div>

                  
                  </div>
                  <div  className="bg" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_22_xvpdjl.svg'}  ></img>
                   </div>
                   <div  className="bg1" >
                       <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972545/wedding%20Moodz/Asset_20_4x_xmpolj.png'} ></img>
                   </div>
            </Section>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.999105444847!2d76.33536561800842!3d32.199974697104366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98dd162c6cd724ff!2sAmakein%20Technologies!5e0!3m2!1sen!2sin!4v1606126098334!5m2!1sen!2sin"  style={{width:"100%" , height:"20rem"}}></iframe>

            </React.Fragment>
        )
    }
}
