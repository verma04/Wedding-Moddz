import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  photographersVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
 class  Photographers extends Component {
  
   async componentDidMount() {
   await      this.props.getVenueVendor();
   await  this.props.getVerfication();
    }


    state = {
            //  WEDDING PANDIT
            img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",
                    //MEHNDI ARTISTS
                      Q1: {
                        
                        Q1:  "What is your speciality in ?",
                        ans: ""
                    },
                    Q2: {
                        
                        Q1:  "How Many years have experience ? ",
                        ans: ""
                    },
                    Q3: {
                        
                        Q1:  "What is your price range?",
                        ans: ""
                    },
                    Q4: {
                        
                        Q1:  "Which services do you offer ?",
                        ans: ""
                    },
                   
                    Q6: {
                        category:'MEHNDI ARTISTS',
                        Q1:  "Who will bear the cost of travel and stay outside the home town ?",
                        ans: "",
                    },

        }
 
    onChange = async (event) => {
        await this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: event.target.value }  })) 
                        };
                        onChange = async (event) => {
                            await this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: event.target.value }  })) 
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
                    photographersCategory :this.state.Q1,
                    photographersExperince:this.state.Q2,
                    photographersPrice :this.state.Q3,
                    photographersPackage:this.state.Q4,
                }
               this.props.photographersVendor(userData , this.props.history)

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

 
<div className="data" >  {this.state.Q1.Q1}  </div>

<div className="check" >
              <ul>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'pre-wedding-shoot' }  })) }  type="checkbox"></input>Pre-Wedding-Shoot</li>

                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'wedding-videography' }  })) }  type="checkbox"></input>Wedding-Videography</li>
                    
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'wedding-photographers' }  })) }  type="checkbox"></input>Wedding-Photographers</li>

                    
                </ul>
              
                </div>

</div>
              <div className="box" >
                  
              <div className="data" >{this.state.Q2.Q1}  </div>
           
             
              <div className="check" >
<ul>
      <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: '<100' }  })) }  type="checkbox"></input> {"<"}  1</li>

      <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: '1-3 years' }  })) }  type="checkbox"></input> 1-3</li>
      <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: '3.5 years' }  })) }  type="checkbox"></input> 3-5 </li>

<li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: '>5 years' }  })) }  type="checkbox"></input> {">"} 5</li>
      
  </ul>

  </div>
              
            


              </div>
              <div className="box" >

 
              <div className="data" >{this.state.Q4.Q1}  </div>
            
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: 'Photo + Video' }  })) }  type="checkbox"></input> Photo + Video</li>
                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: 'Photo' }  })) }  type="checkbox"></input> Photo Package</li>

                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: 'Video' }  })) }  type="checkbox"></input>  Video Package</li>

                 


                    
                </ul>
             
                </div>
        

              </div>
              <div className="box" >
              <div className="data" >{this.state.Q3.Q1}  </div>
             
              <div className="type" >
              
              <input value={ this.state.Q3.ans }    onChange={this.onChange} placeholder="Enter data here"  checked={false}  required ></input>
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
    { photographersVendor , getVenueVendor  , getVerfication}
  )(withRouter(Photographers));
  