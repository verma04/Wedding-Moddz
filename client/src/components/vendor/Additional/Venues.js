import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  VenueVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
import { setAlert} from '../../../actions/alertAction';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

 class Venues extends Component {

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
                        onChange5 = async (event) => {
                            await this.setState({  about: event.target.value})
     
     
                             };
                             onChange6 = async (event) => {
                                await this.setState({  address: event.target.value})
         
         
                                 };
                                 onChange7 = async (event) => {
                                    await this.setState({  pincode: event.target.value})
             
             
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
              if (  this.state.Q1.ans === '' || this.state.Q2.ans === '' ||  this.state.Q3.ans === ''  || this.state.address ===  '' || this.state.pincode ===  '' || this.state.about === ''){
                toast.error("Enter Required Value" , 2000)
              }

              else if ( this.state.img1 ==="https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png"  ) {
                
                toast.error("Upload Cover Image" , 2000 )

              }

            

             else {

                const userData = {
                    venueType:this.state.Q1.ans,
                    totalguests: this.state.Q2.ans,
                    spacePrefenence:this.state.Q3.ans,
                    PriceStartingFrom:this.state.Q4.ans,
                    address:this.state.address,
                    img:this.state.img1,
                    about:this.state.about,
                    pincode:this.state.pincode,
                    user:this.props.auth.user.id
                }

                console.log(userData)
                this.props.VenueVendor(userData , this.props.history)

           
        }
        }

    state = {


        img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",


              //VENUES
                            Q1: {
                            
                                Q1:  "What kind of venue do you offer? ",
                                ans: "",
                                checked: 'checked',
                                op1: true,
                                op2:false,
                                op3:false,
                                op4:false,
                                op5:false,
                            },
                            Q2: {
                               
                                Q1:  "How many guests can the venue accommodate??",
                                ans: ""
                            },
                            Q3: {
                               
                                Q1:  " What is space preference?",
                                ans: ""
                            },
                            Q4: {
                               
                                Q1:  " What is  price for the Wedding Venue",
                                ans: ""
                            },
                        
                            Q6: {
                               
                                Q1:  "Address",
                                ans: "",
                            }, 
                            about: '',
                            address: "",
                            pincode: ""





      }



    render() {



        return (
            <Section>
<ToastContainer/>
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

                  <div className="data" >     {this.state.Q1.Q1} * </div>
                  <div className="check" >
              <ul>
                    <li><input value={this.state.Q1.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Hotel' }  })) }  type="checkbox"></input>Hotel</li>
                    <li> <input  value={this.state.Q1.ans}   checked={this.state.op2}  onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: ' Marriage Garden' }  })) }  type="checkbox"></input>Marriage Garden</li>
                    <li><input value={this.state.Q1.ans}   checked={this.state.op3}  onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Lawns and Farmhouse' }  })) }  type="checkbox"></input>Lawns and Farmhouse</li>
                    <li> <input  value={this.state.Q1.ans}  checked={this.state.op4}   onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Banquet Hall' }  })) }  type="checkbox"></input>Banquet Hall </li>



                </ul>
                <ul>
                    <li><input value={this.state.Q1.ans}    checked={this.state.op5}   onChange={() => this.setState(prevState => ({ Q1: {   ...prevState.Q1, ans: 'Palace' }  })) }  type="checkbox"></input>Palace</li>



                </ul>
                </div>



              </div>
              <div className="box" >


<div className="data" >  {this.state.Q2.Q1}  </div>

<div className="type" >

<input   value={ this.state.Q2.ans }   type="number"  onChange={this.onChange}   placeholder="Enter data here"   required></input>
</div>

</div>
              <div className="box" >

              <div className="data" >{this.state.Q3.Q1}  </div>


              <div className="check" >
              <ul>
                    <li><input value={this.state.Q3.ans} checked={this.state.op1} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Indoor' }  })) }  type="checkbox"></input>Indoor</li>
                    <li> <input  value={this.state.Q3.ans}   checked={this.state.op2}  onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Outdoor' }  })) }  type="checkbox"></input>Outdoor</li>
                    <li><input value={this.state.Q3.ans}   checked={this.state.op3}  onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Indoor with outdoor' }  })) }  type="checkbox"></input>Indoor with outdoor</li>
                    <li> <input  value={this.state.Q3.ans}  checked={this.state.op4}   onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Poolside' }  })) }  type="checkbox"></input>Poolside</li>



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
              <div className="data" >About * </div>
              <div className="type" >

              <input value={ this.state.about }    onChange={this.onChange5} placeholder="About Us*"  checked={false}  required ></input>
               </div>
              </div>

           
              <div className="box" >
              <div className="data" >{this.state.Q6.Q1}  </div>
              <div className="type" >

              <input value={ this.state.address }    onChange={this.onChange6} placeholder="Enter Address"  checked={false}  required ></input>
               </div>
              </div>



             

              <div className="box" >
              <div className="data" >Enter Pin code</div>
              <div className="type" >

              <input value={ this.state.pincode }  type="number"  onChange={this.onChange7} placeholder="Enter Pin Code*"  checked={false}  required ></input>
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
    { VenueVendor , getVenueVendor,setAlert  , getVerfication}
  )(withRouter(Venues));
