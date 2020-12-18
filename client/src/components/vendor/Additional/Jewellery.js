import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  jewelleryVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
 class Jewellery extends Component {
  
   async componentDidMount() {
   await      this.props.getVenueVendor();
   await  this.props.getVerfication();
    }
 
    onChange = async (event) => {
        await this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: event.target.value }  })) 
      
        
         };
         onChange1 = async (event) => {
           await this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: event.target.value }  })) 
         
           
            };
            onChange2 = async (event) => {
               await this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: event.target.value }  })) 
             
               
                };
   
                onChange3 = async (event) => {
                   await this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: event.target.value }  })) 
                 
                   
                    };
                    onChange4 = async (event) => {
                       await this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: event.target.value }  })) 
                     
                       
                        };

                        
      onUpload1 = async (e) => {

        this.setState({ img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1608108823/vrsynaaj9uqyxhcbgynx.gif" });
          const files = e.target.files;
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'wcbta236')
          
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
                    jewellerySpecialty :this.state.Q1,
                   
                    img:this.state.img1
                }
               this.props.jewelleryVendor(userData , this.props.history)

        }

    state = {

    
        img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",

        
              //VENUES
                            Q1: {
                                
                                Q1:  "What type of Jewellery is your specialty? ",
                                ans: "",
                                checked: 'checked',
                                op1: true,
                                op2:false,
                                op3:false,
                                op4:false,
                                op5:false,
                            },
                            Q2: {
                                
                                Q1:  " Do you do engravings on rings ?",
                                ans: ""
                            },
                            Q3: {
                                
                                Q1:  "Do you make customized jewellery ?",
                                ans: ""
                            },
                            Q4: {
                                
                                Q1:  "What if I don’t like the jewellery I ordered?",
                                ans: ""
                            },
                            Q5: {
                                
                                Q1:  "Your payment terms and conditions for rental jewellery",
                                ans: ""
                            },
                            Q6: {
                                
                                Q1:  "Who will bear the cost of travel and stay outside the home town ?",
                                ans: "",
                            },
    
     

    

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
<input type="file" id="file"   onChange={this.onUpload1} type="file" name="photo" id="upload-photo" />
         
         </div>
  
   
   
          <form  onSubmit={this.onSubmit}  noValidate     >

          <div className="input" >

              <div className="box" >
                  
                  <div className="data" >     {this.state.Q1.Q1}  </div>
                  <div className="check" >
              <ul>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Semi Precious Jewellery' }  })) }  type="checkbox"></input>Semi Precious Jewellery</li>
                    <li> <input  value={this.state.Q1.ans}   checked={this.state.op2}  onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Real Jewellery' }  })) }  type="checkbox"></input>Real Jewellery</li>
                    <li><input value={this.state.Q1.ans}   checked={this.state.op3}  onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Floral or Gota Jewellery' }  })) }  type="checkbox"></input>Floral or Gota Jewellery</li>
                    <li> <input  value={this.state.Q1.ans}  checked={this.state.op4}   onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Polki Jewellery' }  })) }  type="checkbox"></input>Polki Jewellery</li>

              
                    
                </ul>
               
                </div>
               
               

              </div>
              <div className="box" >

 
<div className="data" >  {this.state.Q2.Q1}  </div>
<div className="check" >

<ul>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Yes' }  })) }  type="checkbox"></input>Yes</li>
                    <li> <input  value={this.state.Q2.ans}   checked={this.state.op2}  onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'No' }  })) }  type="checkbox"></input>No</li>
                   

              
                    
                </ul>
                </div>

</div>
              <div className="box" >
                  
              <div className="data" >{this.state.Q3.Q1}  </div>
           
             
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Yes' }  })) }  type="checkbox"></input>Yes</li>
                    <li> <input  value={this.state.Q3.ans}   checked={this.state.op2}  onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'No' }  })) }  type="checkbox"></input>No</li>
                   

              
                    
                </ul>
            
                </div>


              </div>
              <div className="box" >

 
              <div className="data" >{this.state.Q4.Q1}  </div>
            
              <div className="type" >
              
              <input value={ this.state.Q4.ans }  type="number"  onChange={this.onChange2} placeholder="Enter data here"   required></input>
               </div>

              </div>
              <div className="box" >
              <div className="data" >{this.state.Q5.Q1}  </div>
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: '25%' }  })) }  type="checkbox"></input>Upto 25% advance payment</li>
                    <li> <input  value={this.state.Q5.ans}   checked={this.state.op2}  onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: '50%' }  })) }  type="checkbox"></input>Upto 50% advance payment</li>
                    <li><input value={this.state.Q5.ans}   checked={this.state.op3}  onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: '75%' }  })) }  type="checkbox"></input>Upto 75% advance payment</li>
                    <li> <input  value={this.state.Q5.ans}  checked={this.state.op4}   onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: '100%' }  })) }  type="checkbox"></input>Full advance payment while booking</li>

              
                    
                </ul>
                </div>
              </div>
              <div className="box" >
              <div className="data" >{this.state.Q6.Q1}  </div>
              <div className="check" >
<ul>
      <li><input value={this.state.Q6.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Travel cost borne by client, stay borne by us ' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us </li>

      <li><input value={this.state.Q6.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
  

<li><input value={this.state.Q6.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Travel and stay cost borne by the client. ' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>
      
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
    { jewelleryVendor , getVenueVendor  , getVerfication}
  )(withRouter(Jewellery));
  