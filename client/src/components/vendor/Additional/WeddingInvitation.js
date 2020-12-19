import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  wediingInvVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
 class  WeddingInvitations extends Component {
  
   async componentDidMount() {
   await      this.props.getVenueVendor();
   await  this.props.getVerfication();
    }


    state = {
        
                img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",
          Q1: {
            
            Q1:  "Are you able to ship cards domestic / internationally?",
            ans: ""
        },
        Q2: {
            
            Q1:  "What is the starting range for a wedding card (without box)?",
            ans: ""
        },
        Q3: {
            
            Q1:  "What are you most known for?",
            ans: ""
        },
        Q4: {
            
            Q1:  " Which of the following do you offer?",
            ans: ""
        },
        Q5: {
            
            Q1:  "What is the minimum number of pieces you take an order for?",
            ans: ""
        },
        Q6: {
            
            Q1:  "Do you also offer services for favors?" ,
            ans: "",
        },
        }
 

                
                        


                        onUpload1 = async (e) => {

                            this.setState({ img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v160810885/vrsynaaj9uqyxhcbgynx.gif" });
                              const files = e.target.files;
                              const data = new FormData()
                              data.append('file', files[0])
                              data.append('upload_preset', 'wcbta56')
                              
                              const res = await fetch('	https://api.cloudinary.com/v1_1/dzcmadjl1/image/upload', {
                                method: 'POST',
                                body:data
                              })
                              const file = await res.json()
                              let link = file.secure_url
                               console.log(link)
                            await   this.setState({ img1:link });
                            }      
    

        onSubmit=(e) => {
            e.preventDefault();
                const userData = {
                    img:this.state.img1,
                    WeddingInvitaionsShipping:this.state.Q1,
                    WeddingInvitaionsRange:this.state.Q2,
                    WeddingInvitaionsBox:this.state.Q4,
                    WeddingInvitaionsPicies:this.state.Q5,
                   
                }
               this.props.wediingInvVendor(userData , this.props.history)
            console.log(this.state)

        }

    
   
    

    render() {
  
        const { type , otp} = this.props.vendors;
        if( otp === "none"){
            return (
            <Redirect to='/verify-account' ></Redirect>
            )
        }

        if ( type === null) {
            return (
                null
            )
            
        }
        if ( type !== "") {
            return (
                <Redirect to="/vendor/dashboard" ></Redirect>
            )
            
        }


        return (
            <Section>

            <div className="flex" >
     
     <div className="head" >

         <h2>Additional Information</h2>

     </div>
     <div className="cover" >
        <div className="img" >

            <img src={this.state.img1} />  
         
        
  

        </div>
        <label for="upload-photo">Upload-Cover-Image</label>
<input type="file" id="file" type="number"     onChange={this.onUpload1} type="file" name="photo" id="upload-photo" />
         
         </div>
  
   
   
          <form  onSubmit={this.onSubmit}  noValidate     >

          <div className="input" >

              <div className="box" >
                  
                  <div className="data" >     {this.state.Q1.Q1}  </div>
               
<div className="check" >
              <ul>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Domestic shipping available' }  })) }  type="checkbox"></input>Domestic shipping available</li>

                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Funky & Offbeat Invitations' }  })) }  type="checkbox"></input> Funky & Offbeat Invitations</li>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Both domestic and International shipping available' }  })) }  type="checkbox"></input> Both domestic and International shipping available</li>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Shipping options not available' }  })) }  type="checkbox"></input> Shipping options not available</li>
                    
                </ul>
                <ul>
                 
                   
              
                    
                </ul>
                </div>
               
               

              </div>
              <div className="box" >

 
<div className="data" >  {this.state.Q2.Q1}  </div>

<div className="check" >
              <ul>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: '50 and 100 rupees per card' }  })) }  type="checkbox"></input>  50 and 100 rupees per card</li>

                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Rs 100 to Rs 200 per card' }  })) }  type="checkbox"></input> Rs 100 to Rs 200 per card</li>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: ' Rs 200 to Rs 400 per card' }  })) }  type="checkbox"></input> Rs 200 to Rs 400 per card</li>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: ' More than 400 Rs per card' }  })) }  type="checkbox"></input>  More than 400 Rs per card</li>
                    
                </ul>
                <ul>
                <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: ' Less than 50 rupees per card' }  })) }  type="checkbox"></input> Less than 50 rupees per card</li>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Designing Cost Only' }  })) }  type="checkbox"></input> Designing Cost Only</li>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: '  On Request' }  })) }  type="checkbox"></input>  On Request</li>
                   
              
                    
                </ul>
                </div>
              

</div>
              <div className="box" >
                  
              <div className="data" >{this.state.Q3.Q1}  </div>
           
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Boxed Invitations' }  })) }  type="checkbox"></input>Boxed Invitations</li>

                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Funky & Offbeat Invitations' }  })) }  type="checkbox"></input>Funky & Offbeat Invitations</li>
                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Modern Invites' }  })) }  type="checkbox"></input>Modern Invites</li>
                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Traditional Invitations' }  })) }  type="checkbox"></input>Traditional Invitations</li>
                    
                </ul>
                <ul>
                 
                   
              
                    
                </ul>
                </div>
              
            


              </div>
              <div className="box" >

 
              <div className="data" >{this.state.Q4.Q1}  </div>
            
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: 'Unboxed Invites' }  })) }  type="checkbox"></input>Unboxed Invites</li>

                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: 'Boxed Invites' }  })) }  type="checkbox"></input>Boxed Invites</li>
                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: 'Digital E- Cards' }  })) }  type="checkbox"></input>Digital E- Cards</li>
                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: 'Printed cards' }  })) }  type="checkbox"></input>Printed cards</li>
                    
                </ul>
                <ul>
                 
                   
              
                    
                </ul>
                </div>
              
        

              </div>
              <div className="box" >
              <div className="data" >{this.state.Q5.Q1}  </div>
              
<div className="check" >
              <ul>
                    <li><input value={this.state.Q5.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: '100-300' }  })) }  type="checkbox"></input>100- 300</li>

                    <li><input value={this.state.Q5.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: '300-500' }  })) }  type="checkbox"></input>300-500</li>
                    <li><input value={this.state.Q5.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: '500 and above' }  })) }  type="checkbox"></input>500 and above</li>
                    
                </ul>
                <ul>
                 
                   
              
                    
                </ul>
                </div>

              
              </div>
              <div className="box" >

 
<div className="data" >{this.state.Q6.Q1}  </div>

<div className="check" >
              <ul>
                    <li><input value={this.state.Q6.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Yes' }  })) }  type="checkbox"></input>Yes</li>

                    <li><input value={this.state.Q6.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'No' }  })) }  type="checkbox"></input>No</li>
              
                    
                </ul>
                <ul>
                 
                   
              
                    
                </ul>
                </div>


</div>
              

           
           
            
              </div>       
                   
    <div className='btn' >
    <button type="submit" >
       Submit
          </button>
    </div>
       

        </form>
        

  


        
            </div>
            
        </Section>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    vendors:state.vendors
  });
  
  export default connect(
    mapStateToProps,
    { wediingInvVendor , getVenueVendor  , getVerfication}
  )(withRouter(WeddingInvitations));