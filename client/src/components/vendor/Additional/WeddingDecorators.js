import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  decoratorsVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
 class  Planing extends Component {
  
   async componentDidMount() {
   await      this.props.getVenueVendor();
   await  this.props.getVerfication();
    }


    state = {
        
                img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",
          Q19: {
            category:'WEDDING DECORATOR ',
            Q1:  "What types of venues do you work with?",
            ans: ""
        },
        Q20: {
            category:'WEDDING DECORATOR ',
            Q1:  "Can you decorate traditional marquees and solid buildings with your linings?",
            ans: ""
        },
        Q21: {
            category:'WEDDING DECORATOR ',
            Q1:  "Are you enlisted on the Panel of some banquets/ hotels? Please mention a few.",
            ans: ""
        },
        Q22: {
            category:'WEDDING DECORATOR ',
            Q1:  " For an indoor banquet function, of approx 19Q190 pax what is the price range that you would be comfortable doing",
            ans: ""
        },
        Q23: {
            category:'WEDDING DECORATOR ',
            Q1:  "For an outdoor function, what would the price range be?",
            ans: ""
        },
        Q24: {
            category:'WEDDING DECORATOR ',
            Q1:  "What is yours charges  ?" ,
            ans: "",
        },
        }
 
    onChange = async (event) => {
        await this.setState(prevState => ({ Q19: {   ...prevState.Q19, ans: event.target.value }  })) 
                        };
                        onChange1 = async (event) => {
                            await this.setState(prevState => ({ Q20: {   ...prevState.Q20, ans: event.target.value }  })) 
                        };

                        onChange2 = async (event) => {
                            await this.setState(prevState => ({ Q21: {   ...prevState.Q21, ans: event.target.value }  })) 
                        };

                        onChange3 = async (event) => {
                            await this.setState(prevState => ({ Q22: {   ...prevState.Q22, ans: event.target.value }  })) 
                        };

                        onChange4 = async (event) => {
                            await this.setState(prevState => ({ Q23: {   ...prevState.Q23, ans: event.target.value }  })) 
                        };

                        onChange5 = async (event) => {
                            await this.setState(prevState => ({ Q24: {   ...prevState.Q24, ans: event.target.value }  })) 
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
                    decoratorsChargers:this.state.Q24,
                   
                }
               this.props.decoratorsVendor(userData , this.props.history)
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
                  
                  <div className="data" >     {this.state.Q19.Q1}  </div>
                  <div className="type" >
              
              <input value={ this.state.Q19.ans }    onChange={this.onChange} placeholder="Enter data here"  checked={false}  required ></input>
               </div>
              
               
               

              </div>
              <div className="box" >

 
<div className="data" >  {this.state.Q20.Q1}  </div>

<div className="type" >
              
              <input value={ this.state.Q20.ans }    onChange={this.onChange1} placeholder="Enter data here"  checked={false}  required ></input>
               </div>
              

</div>
              <div className="box" >
                  
              <div className="data" >{this.state.Q21.Q1}  </div>
           
             
              <div className="type" >
              
              <input value={ this.state.Q21.ans }    onChange={this.onChange2} placeholder="Enter data here"  checked={false}  required ></input>
               </div>
              
            


              </div>
              <div className="box" >

 
              <div className="data" >{this.state.Q22.Q1}  </div>
            
              <div className="type" >
              
              <input value={ this.state.Q22.ans }    onChange={this.onChange3} placeholder="Enter data here"  checked={false}  required ></input>
               </div>
              
        

              </div>
              <div className="box" >
              <div className="data" >{this.state.Q23.Q1}  </div>
              <div className="type" >
              
              <input value={ this.state.Q23.ans }    onChange={this.onChange4} placeholder="Enter data here"  checked={false}  required ></input>
               </div>
              
              </div>
              <div className="box" >

 
<div className="data" >{this.state.Q24.Q1}  </div>
<div className="type" >
<select  id="category" value={this.state.Q24.Q1}    onChange={this.onChange5}>
              <option value='' > ---------Select Price---- </option>
    
              <option   value={"₹10000-₹15000"}> ₹10000-₹15000</option>
              <option   value={"₹15000-₹25000"}> ₹15000-₹25000</option>
              <option   value={"₹25000-₹50000"}> ₹25000-₹50000</option>
              <option   value={"₹50000-₹100000"}> ₹50000-₹100000</option>
              <option   value={" ₹100000-₹300000"}> ₹100000-₹300000</option>
              <option   value={'₹300000-₹500000'}> ₹300000-₹500000</option>
              <option   value={"₹500000-₹1000000"}> ₹500000-₹1000000</option>
                     
            
            </select>

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
    { decoratorsVendor , getVenueVendor  , getVerfication}
  )(withRouter(Planing));