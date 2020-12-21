import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  caterersVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
import { setAlert} from '../../../actions/alertAction';
 class  WeddingCaterers extends Component {
  
   async componentDidMount() {
   await      this.props.getVenueVendor();
   await  this.props.getVerfication();
    }
 
    onChange = async (event) => {
        await this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: event.target.value }  })) 
      
        
         
        
                        };

                        
      onUpload1 = async (e) => {

        this.setState({ img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1608527716/wedding%20Moodz/r5rslsw7crfhofsmegry.gif" });
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

            e.preventDefault();
            if (  this.state.Q1.ans === '' || this.state.Q2.ans === '' ||  this.state.Q3.ans === ''  || this.state.Q4.ans === ''  || this.state.Q6.ans ===  '' || this.state.about === ''){
           this.props.setAlert("Enter Required Value" , "error")
            }

            else if ( this.state.img1 ==="https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png"  ) {
              
              this.props.setAlert("Upload Cover Image" , "error")

            }

          else {
                const userData = {
                    img:this.state.img1,
                    categoryCaterers:this.state.Q1,
                    typeCaterers: this.state.Q2,
                    priceCaterers:this.state.Q3,
                    capacityCaterers:this.state.Q4,
                    costCaterers:this.state.Q6,
                   
                }
               this.props.caterersVendor(userData , this.props.history)
            }
        }

    state = {

    
        img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",

        
              //
              Q1: {
                      category:'WEDDING CATERERS',
                       Q1:  "Do you fall into any of these categories",
                            ans: ""
                        },
                        Q2: {
                            category:'WEDDING CATERERS',
                            Q1:  "What Type Of Caterer Are You ?",
                            ans: ""
                        },
                        Q3: {
                            category:'WEDDING CATERERS',
                            Q1:  "What is the starting per plate price ?",
                            ans: ""
                        },
                        Q4: {
                            category:'WEDDING CATERERS',
                            Q1:  " What  is your capacity ? ",
                            ans: ""
                        },
                        Q5: {
                            category:'WEDDING CATERERS',
                            Q1:  "Which of the following cuisines do you offer",
                            ans: ""
                        },
                        Q6: {
                            category:'WEDDING CATERERS',
                            Q1:  " Who will bear the cost of travel and stay outside the home town ?",
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
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Veg' }  })) }  type="checkbox"></input>Vegetarian only</li>

                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Non-veg' }  })) }  type="checkbox"></input> Non-Vegetarian only</li>
              
                    
                </ul>
                <ul>
                 
                   
              
                    
                </ul>
                </div>
               
               

              </div>
              <div className="box" >

 
<div className="data" >  {this.state.Q2.Q1}  </div>

<div className="check" >
              <ul>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Food Counters' }  })) }  type="checkbox"></input>Food Counters</li>

                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Full Service Catering' }  })) }  type="checkbox"></input> Full Service Catering</li>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Chaat & Fruit Stalls' }  })) }  type="checkbox"></input>Chaat & Fruit Stalls</li>

<li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Small Function Cateringg' }  })) }  type="checkbox"></input> Small Function Cateringg</li>
                    
                </ul>
                <ul>
                 
                <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Dessert' }  })) }  type="checkbox"></input>Dessert</li>

<li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Paan' }  })) }  type="checkbox"></input> Paan</li> 
              
                    
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

 
              <div className="data" >{this.state.Q4.Q1}  </div>
            
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '<100' }  })) }  type="checkbox"></input> {"<"} 100</li>

                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '100-500' }  })) }  type="checkbox"></input> 100-500</li>
                    <li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '500-1000' }  })) }  type="checkbox"></input> 500-1000</li>

<li><input value={this.state.Q4.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '>1000' }  })) }  type="checkbox"></input> {">"} 1000</li>
                    
                </ul>
             
                </div>
        

              </div>
              <div className="box" >
              <div className="data" >{this.state.Q6.Q1}  </div>
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q6.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Travel cost borne by client, stay borne by us ' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us </li>

                    <li><input value={this.state.Q6.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input> Stay cost borne by client, travel borne by us</li>
                    <li><input value={this.state.Q6.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Travel and stay cost borne by the client. ' }  })) }  type="checkbox"></input>Chaat & Fruit Stalls</li>

                    
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
    { caterersVendor , getVenueVendor   ,setAlert, getVerfication}
  )(withRouter(WeddingCaterers));
  