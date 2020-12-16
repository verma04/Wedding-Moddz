import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  VenueVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
 class Venues extends Component {
  
   async componentDidMount() {
   await      this.props.getVenueVendor();
   await  this.props.getVerfication();
    }
 
    onChange = async (event) => {
        await this.setState(prevState => ({ Q56: {   ...prevState.Q56, ans: event.target.value }  })) 
      
        
         };
         onChange1 = async (event) => {
           await this.setState(prevState => ({ Q57: {   ...prevState.Q57, ans: event.target.value }  })) 
         
           
            };
            onChange2 = async (event) => {
               await this.setState(prevState => ({ Q58: {   ...prevState.Q58, ans: event.target.value }  })) 
             
               
                };
   
                onChange3 = async (event) => {
                   await this.setState(prevState => ({ Q59: {   ...prevState.Q59, ans: event.target.value }  })) 
                 
                   
                    };
                    onChange4 = async (event) => {
                       await this.setState(prevState => ({ Q60: {   ...prevState.Q60, ans: event.target.value }  })) 
                     
                       
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
                    venueType:this.state.Q55,
                    totalguests: this.state.Q56,
                    spacePrefenence:this.state.Q57,
                    pricePerPlate:this.state.Q58,
                    restroom:this.state.Q59,
                    policy:this.state.Q60,
                    img:this.state.img1
                }
               this.props.VenueVendor(userData , this.props.history)

        }

    state = {

    
        img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",

        
              //VENUES
                            Q55: {
                                category:'BRIDAL WEAR',
                                Q1:  "What kind of venue do you offer? ",
                                ans: "",
                                checked: 'checked',
                                op1: true,
                                op2:false,
                                op3:false,
                                op4:false,
                                op5:false,
                            },
                            Q56: {
                                category:'BRIDAL WEAR',
                                Q1:  "How many guests can the venue accommodate??",
                                ans: ""
                            },
                            Q57: {
                                category:'BRIDAL WEAR',
                                Q1:  " What is space Prefenence?",
                                ans: ""
                            },
                            Q58: {
                                category:'BRIDAL WEAR',
                                Q1:  " What is charge price per plate",
                                ans: ""
                            },
                            Q59: {
                                category:'BRIDAL WEAR',
                                Q1:  "Are there adequate restroom facilities?",
                                ans: ""
                            },
                            Q60: {
                                category:'BRIDAL WEAR',
                                Q1:  "What is your payment and cancellation policy?",
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
                  
                  <div className="data" >     {this.state.Q55.Q1}  </div>
                  <div className="check" >
              <ul>
                    <li><input value={this.state.Q55.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: 'Hotel' }  })) }  type="checkbox"></input>Hotel</li>
                    <li> <input  value={this.state.Q55.ans}   checked={this.state.op2}  onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: ' Marriage Garden' }  })) }  type="checkbox"></input>Marriage Garden</li>
                    <li><input value={this.state.Q55.ans}   checked={this.state.op3}  onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: 'Lawns and Farmhouse' }  })) }  type="checkbox"></input>Lawns and Farmhouse</li>
                    <li> <input  value={this.state.Q55.ans}  checked={this.state.op4}   onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: 'Banquet Hall' }  })) }  type="checkbox"></input>Banquet Hall </li>

              
                    
                </ul>
                <ul>
                    <li><input value={this.state.Q55.ans}    checked={this.state.op5}   onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: 'Palace' }  })) }  type="checkbox"></input>Palace</li>
                   
              
                    
                </ul>
                </div>
               
               

              </div>
              <div className="box" >

 
<div className="data" >  {this.state.Q56.Q1}  </div>

<div className="type" >

<input   value={ this.state.Q56.ans }   type="number"  onChange={this.onChange}   placeholder="Enter data here"   required></input>
</div>

</div>
              <div className="box" >
                  
              <div className="data" >{this.state.Q57.Q1}  </div>
           
             
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q57.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q57: {   ...prevState.Q57, ans: 'Indoor' }  })) }  type="checkbox"></input>Indoor</li>
                    <li> <input  value={this.state.Q57.ans}   checked={this.state.op2}  onChange={() => this.setState(prevState => ({ Q57: {   ...prevState.Q57, ans: 'Outdoor' }  })) }  type="checkbox"></input>Outdoor</li>
                    <li><input value={this.state.Q57.ans}   checked={this.state.op3}  onChange={() => this.setState(prevState => ({ Q57: {   ...prevState.Q57, ans: 'Indoor with outdoor' }  })) }  type="checkbox"></input>Indoor with outdoor</li>
                    <li> <input  value={this.state.Q57.ans}  checked={this.state.op4}   onChange={() => this.setState(prevState => ({ Q57: {   ...prevState.Q57, ans: 'Poolside' }  })) }  type="checkbox"></input>Poolside</li>

              
                    
                </ul>
            
                </div>


              </div>
              <div className="box" >

 
              <div className="data" >{this.state.Q58.Q1}  </div>
            
              <div className="type" >
              
              <input value={ this.state.Q58.ans }  type="number"  onChange={this.onChange2} placeholder="Enter data here"   required></input>
               </div>

              </div>
              <div className="box" >
              <div className="data" >{this.state.Q59.Q1}  </div>
              <div className="type" >
              
              <input value={ this.state.Q59.ans }    onChange={this.onChange3} placeholder="Enter data here"   required></input>
               </div>
              </div>
              <div className="box" >
              <div className="data" >{this.state.Q60.Q1}  </div>
              <div className="type" >
              
              <input value={ this.state.Q60.ans }    onChange={this.onChange4} placeholder="Enter data here"  checked={false}  required ></input>
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
    { VenueVendor , getVenueVendor  , getVerfication}
  )(withRouter(Venues));
  