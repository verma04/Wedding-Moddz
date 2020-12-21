import React, { Component } from 'react'
import { Section} from './Style';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {  VenueVendor , getVenueVendor , getVerfication } from '../../../actions/VednorAction'
import { Redirect } from 'react-router-dom';
import { setAlert} from '../../../actions/alertAction';

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
              if (  this.state.Q1.ans === '' || this.state.Q2.ans === '' ||  this.state.Q3.ans === ''  || this.state.Q4.ans === '' || this.state.Q5.ans ===  '' || this.state.Q6.ans ===  '' || this.state.about === ''){
             this.props.setAlert("Enter Required Value" , "error")
              }

              else if ( this.state.img1 ==="https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png"  ) {
                
                this.props.setAlert("Upload Cover Image" , "error")

              }

            

             else {

                const userData = {
                    venueType:this.state.Q1,
                    totalguests: this.state.Q2,
                    spacePrefenence:this.state.Q3,
                    pricePerPlate:this.state.Q4,
                    restroom:this.state.Q5,
                    policy:this.state.Q6,
                    img:this.state.img1,
                    about:this.state.about
                }
                this.props.VenueVendor(userData , this.props.history)

           
        }
        }

    state = {


        img1:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png",


              //VENUES
                            Q1: {
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
                            Q2: {
                                category:'BRIDAL WEAR',
                                Q1:  "How many guests can the venue accommodate??",
                                ans: ""
                            },
                            Q3: {
                                category:'BRIDAL WEAR',
                                Q1:  " What is space Prefenence?",
                                ans: ""
                            },
                            Q4: {
                                category:'BRIDAL WEAR',
                                Q1:  " What is charge price per plate",
                                ans: ""
                            },
                            Q5: {
                                category:'BRIDAL WEAR',
                                Q1:  "Are there adequate restroom facilities?",
                                ans: ""
                            },
                            Q6: {
                                category:'BRIDAL WEAR',
                                Q1:  "What is your payment and cancellation policy?",
                                ans: "",
                            }, 
                            about: ''





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
              <div className="data" >{this.state.Q5.Q1}  </div>
              <div className="type" >

              <input value={ this.state.Q5.ans }    onChange={this.onChange3} placeholder="Enter data here"   required></input>
               </div>
              </div>
              <div className="box" >
              <div className="data" >{this.state.Q6.Q1}  </div>
              <div className="type" >

              <input value={ this.state.Q6.ans }    onChange={this.onChange4} placeholder="Enter data here"  checked={false}  required ></input>
               </div>
              </div>



              <div className="box" >
              <div className="data" >About * </div>
              <div className="type" >

              <input value={ this.state.about }    onChange={this.onChange5} placeholder="About Us*"  checked={false}  required ></input>
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
