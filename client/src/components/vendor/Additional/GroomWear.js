import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { groomVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
 class  GroomWear extends Component {
  
   async componentDidMount() {
   await      this.props.getVenueVendor();
   await  this.props.getVerfication();
    }


    state = {
            //  WEDDING PANDIT
            img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",
                    //MEHNDI ARTISTS
                      Q1: {
                        
                        Q1:  "How would you describe your establishment?",
                        ans: ""
                    },
                    Q2: {
                        
                        Q1:  "What type of outfits do you offer?",
                        ans: ""
                    },
                    Q3: {
                        
                        Q1:  "Most of your outfits are:",
                        ans: ""
                    },
                    Q4: {
                        
                        Q1:  "What is your price range?",
                        ans: ""
                    },
                    Q5: {
                        
                        Q1:  "What size do you stock?",
                        ans: ""
                    },
                    Q6: {
                        
                        Q1:  " Who will bear the cost of travel and stay outside the home town ?",
                        ans: "",
                    },

        }
 
    onChange = async (event) => {
        await this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: event.target.value }  })) 
                        };
                        onChange1 = async (event) => {
                            await this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: event.target.value }  })) 
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
                    groomestablishment:this.state.Q1,
                    groomwearoutfits:this.state.Q2,
                    groomPriceRange:this.state.Q4,
                   
                   
                }
               this.props.groomVendor(userData , this.props.history)

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
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Retail Shop' }  })) }  type="checkbox"></input> Retail Shop</li>

                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Studio / Boutique' }  })) }  type="checkbox"></input>Studio / Boutique</li>
                 
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Couture Brand' }  })) }  type="checkbox"></input>Couture Brand</li>

<li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Multi-designer studio' }  })) }  type="checkbox"></input>Multi-designer studio</li>

                    
                </ul>
                <ul>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: ' Rental Store' }  })) }  type="checkbox"></input>   Rental Store</li>

                 


                    
                </ul>
             
                </div>
               

              </div>
              <div className="box" >

 
<div className="data" >  {this.state.Q2.Q1}  </div>

<div className="check" >
          
                <ul>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Formal Suit' }  })) }  type="checkbox"></input>Formal Suit</li>

                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Traditional wear' }  })) }  type="checkbox"></input>Traditional wear</li>
                    <li><input value={this.state.Q2.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: ' Sherwani' }  })) }  type="checkbox"></input> Sherwani</li>




                    
                </ul>
              
              
                </div>

</div>
              <div className="box" >
                  
              <div className="data" >{this.state.Q3.Q1}  </div>
           
             
              
              <div className="check" >
              <ul>
                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: ' Custom designed outfits from scratch' }  })) }  type="checkbox"></input> Custom designed outfits from scratch</li>

                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Ready to purchase outfits' }  })) }  type="checkbox"></input> Ready to purchase outfits</li>
                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Sample pieces on which orders can be placed' }  })) }  type="checkbox"></input>Sample pieces on which orders can be placed</li>


                    
                </ul>
             
                </div>
            


              </div>
              <div className="box" >

 
              <div className="data" >{this.state.Q4.Q1}  </div>
            
              <div className="type" >
              
              <input value={ this.state.Q4.ans }    onChange={this.onChange} placeholder="Enter data here"  checked={false}  required ></input>
               </div>

              </div>
              <div className="box" >
              <div className="data" >{this.state.Q5.Q1}  </div>
              <div className="type" >
              
              <input value={ this.state.Q5.ans }    onChange={this.onChange1} placeholder="Enter data here"  checked={false}  required ></input>
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
    {groomVendor , getVenueVendor  , getVerfication}
  )(withRouter(GroomWear));
  