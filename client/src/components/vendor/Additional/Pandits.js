import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  panditsVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
 class  Pandits extends Component {
  
   async componentDidMount() {
   await      this.props.getVenueVendor();
   await  this.props.getVerfication();
    }


    state = {
            //  WEDDING PANDIT
            img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",
            Q25: {
                category:'WEDDING PANDIT',
                Q1:  "What are your charges for Pre-Wedding (Roka) Puja/Hawan?",
                ans: ""
            },
            Q26: {
                category:'WEDDING PANDIT',
                Q1:  "What language you prefer",
                ans: ""
            },
            Q27: {
                category:'WEDDING PANDIT',
                Q1:  "What are your charges for matching kundlis?  ",
                ans: ""
            },
            Q28: {
                category:'WEDDING PANDIT',
                Q1:  " Samagri included or not included?",
                ans: ""
            },
            Q29: {
                category:'WEDDING PANDIT',
                Q1:  " How many years of experience do you have?",
                ans: ""
            },
            Q30: {
                category:'WEDDING PANDIT',
                Q1:  "Who will bear the cost of travel and stay outside the home town ?",
                ans: "",
            },
        }
 
    onChange = async (event) => {
        await this.setState(prevState => ({ Q25: {   ...prevState.Q25, ans: event.target.value }  })) 
                        };
                        onChange1 = async (event) => {
                            await this.setState(prevState => ({ Q27: {   ...prevState.Q27, ans: event.target.value }  })) 
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
                    img:this.state.img1,
                    panditCharge:this.state.Q25,
                    panditLanguage: this.state.Q26,
                    panditkundlis:this.state.Q27,
                    panditSamagri:this.state.Q28,
                    panditExperince:this.state.Q29,
                    panditcostTravel:this.state.Q30,
                   
                }
               this.props.panditsVendor(userData , this.props.history)

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
                  
                  <div className="data" >     {this.state.Q25.Q1}  </div>
                  <div className="type" >
              
              <input value={ this.state.Q25.ans }  type="number"  onChange={this.onChange} placeholder="Enter data here"  checked={false}  required ></input>
               </div>
               
               

              </div>
              <div className="box" >

 
<div className="data" >  {this.state.Q26.Q1}  </div>

<div className="check" >
              <ul>
                    <li><input value={this.state.Q26.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q26: {   ...prevState.Q26, ans: 'Hindi' }  })) }  type="checkbox"></input>Hindi</li>

                    <li><input value={this.state.Q26.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q26: {   ...prevState.Q26, ans: 'Dogri' }  })) }  type="checkbox"></input>Dogri</li>
                    <li><input value={this.state.Q26.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q26: {   ...prevState.Q26, ans: 'Punjabi' }  })) }  type="checkbox"></input>Punjabi</li>


                    
                </ul>
              
                </div>

</div>
              <div className="box" >
                  
              <div className="data" >{this.state.Q27.Q1}  </div>
           
             
              <div className="type" >
              
              <input value={ this.state.Q27.ans }    onChange={this.onChange1} placeholder="Enter data here"  checked={false}  required ></input>
               </div>
              
            


              </div>
              <div className="box" >

 
              <div className="data" >{this.state.Q28.Q1}  </div>
            
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q28.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q28: {   ...prevState.Q28, ans: ' Included' }  })) }  type="checkbox"></input>  Included</li>

                    <li><input value={this.state.Q28.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q28: {   ...prevState.Q28, ans: 'Not Included' }  })) }  type="checkbox"></input> Not Included</li>
                 


                    
                </ul>
             
                </div>
        

              </div>
              <div className="box" >
              <div className="data" >{this.state.Q29.Q1}  </div>
              <div className="check" >
<ul>
      <li><input value={this.state.Q29.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q29: {   ...prevState.Q29, ans: '<100' }  })) }  type="checkbox"></input> {"<"}  1</li>

      <li><input value={this.state.Q29.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q29: {   ...prevState.Q29, ans: '1-3 years' }  })) }  type="checkbox"></input> 1-3</li>
      <li><input value={this.state.Q29.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q29: {   ...prevState.Q29, ans: '3.5 years' }  })) }  type="checkbox"></input> 3-5 </li>

<li><input value={this.state.Q29.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q29: {   ...prevState.Q29, ans: '>5 years' }  })) }  type="checkbox"></input> {">"} 5</li>
      
  </ul>

  </div>
              </div>
              <div className="box" >

 
<div className="data" >{this.state.Q30.Q1}  </div>
<div className="check" >
<ul>
      <li><input value={this.state.Q30.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q30: {   ...prevState.Q30, ans: 'Travel cost borne by client, stay borne by us ' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us </li>

      <li><input value={this.state.Q30.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q30: {   ...prevState.Q30, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
  

<li><input value={this.state.Q30.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q30: {   ...prevState.Q30, ans: 'Travel and stay cost borne by the client. ' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>
      
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
    { panditsVendor , getVenueVendor  , getVerfication}
  )(withRouter(Pandits));
  