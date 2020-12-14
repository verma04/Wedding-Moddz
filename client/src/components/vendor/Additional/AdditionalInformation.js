import React, { Component } from 'react';

import { Section} from './Style';

import TopBar from '../../layout/Topbar/topbar';
import Navbar from '../../layout/Navbar/Navbar';

import Footer from '../../layout/footer/Footer'

export default class AdditionalInformation extends Component {

      state = {

        Q1: {
            category:'PHOTOGRAPHER',
            Q1:  "How much time do you take to deliver the photos ?",
            ans: "none"
        },
        Q2: {
            category:'PHOTOGRAPHER',
            Q1:  "Which services do you offer  ?",
            ans: "none"
        },
        Q3: {
            category:'PHOTOGRAPHER',
            Q1:  "What is your speciality?",
            ans: "none"
        },
        Q4: {
            category:'PHOTOGRAPHER',
            Q1:  "What is the duration of your work experience  ?",
            ans: "none"
        },
        Q5: {
            category:'PHOTOGRAPHER',
            Q1:  "Your payment terms and conditions?",
            ans: "none"
        },
        Q6: {
            category:'PHOTOGRAPHER',
            Q1:  "Who will bear the cost of travel and stay outside the home town ?",
            ans: "none"
        },
           // WEDDING PLANNER
        Q7: {
            category:'WEDDING PLANNER',
            Q1:  "What kind of commercials do you work on ?",
            ans: "none"
        },
        Q8: {
            category:'WEDDING PLANNER',
            Q1:  "What is your style USP?",
            ans: "none"
        },
        Q9: {
            category:'WEDDING PLANNER',
            Q1:  " What is your policy on decor??",
            ans: "none"
        },
        Q10: {
            category:'WEDDING PLANNER',
            Q1:  " How many hours/days do you need to plan a wedding?",
            ans: "none"
        },
        Q11: {
            category:'WEDDING PLANNER',
            Q1:  "How many weddings have you planned before? ?",
            ans: "none"
        },
        Q12: {
            category:'WEDDING PLANNER',
            Q1:  "Who will bear the cost of travel and stay outside the home town             ?",
            ans: "none",
        },
        //  BRIDAL MAKE-UP
        Q13: {
            category:'WEDDING PLANNER',
            Q1:  "Which of the following do you offer?",
            ans: "none"
        },
        Q14: {
            category:'WEDDING PLANNER',
            Q1:  "Do you travel to the venue ?",
            ans: "none"
        },
        Q15: {
            category:'WEDDING PLANNER',
            Q1:  "What does the bridal makeup price include?",
            ans: "none"
        },
        Q16: {
            category:'WEDDING PLANNER',
            Q1:  " Do you offer Airbrush/ HD Makeup ?",
            ans: "none"
        },
        Q17: {
            category:'WEDDING PLANNER',
            Q1:  "What is your policy on trials?",
            ans: "none"
        },
        Q18: {
            category:'WEDDING PLANNER',
            Q1:  "Who will bear the cost of travel and stay outside the home town ?",
            ans: "none",
        },

          //  WEDDING DECORATOR 
          Q19: {
            category:'WEDDING DECORATOR ',
            Q1:  "What types of venues do you work with?",
            ans: "none"
        },
        Q20: {
            category:'WEDDING DECORATOR ',
            Q1:  "Can you decorate traditional marquees and solid buildings with your       linings?",
            ans: "none"
        },
        Q21: {
            category:'WEDDING DECORATOR ',
            Q1:  "Are you enlisted on the Panel of some banquets/ hotels? Please mention a few.",
            ans: "none"
        },
        Q22: {
            category:'WEDDING DECORATOR ',
            Q1:  " For an indoor banquet function, of approx 250 pax what is the price range that you would be comfortable doing",
            ans: "none"
        },
        Q23: {
            category:'WEDDING DECORATOR ',
            Q1:  "For an outdoor function, what would the price range be?",
            ans: "none"
        },
        Q24: {
            category:'WEDDING DECORATOR ',
            Q1:  "Who will bear the cost of travel and stay outside the home town ?",
            ans: "none",
        },

            //  WEDDING PANDIT
            Q25: {
                category:'WEDDING PANDIT',
                Q1:  "What type of WEDDING PANDIT is your specialty?",
                ans: "none"
            },
            Q26: {
                category:'WEDDING PANDIT',
                Q1:  "Do you do engravings on rings ?",
                ans: "none"
            },
            Q27: {
                category:'WEDDING PANDIT',
                Q1:  "Do you make customized WEDDING PANDIT  ",
                ans: "none"
            },
            Q28: {
                category:'WEDDING PANDIT',
                Q1:  " What if I don’t like the WEDDING PANDIT I ordered?",
                ans: "none"
            },
            Q29: {
                category:'WEDDING PANDIT',
                Q1:  "Your payment terms and conditions for rental WEDDING PANDIT",
                ans: "none"
            },
            Q30: {
                category:'WEDDING PANDIT',
                Q1:  "Who will bear the cost of travel and stay outside the home town ?",
                ans: "none",
            },
            //WEDDING CATERERS
            Q31: {
                category:'WEDDING CATERERS',
                Q1:  "Do you fall into any of these categories",
                ans: "none"
            },
            Q32: {
                category:'WEDDING CATERERS',
                Q1:  "What Type Of Caterer Are You ?",
                ans: "none"
            },
            Q33: {
                category:'WEDDING CATERERS',
                Q1:  "What is the starting per plate price for a Vegetarian menu (Assume 250 pax)?",
                ans: "none"
            },
            Q34: {
                category:'WEDDING CATERERS',
                Q1:  " What is the starting per plate price for a Non- Vegetarian menu (Assume 250 pax) ? ",
                ans: "none"
            },
            Q35: {
                category:'WEDDING CATERERS',
                Q1:  "Which of the following cuisines do you offer",
                ans: "none"
            },
            Q36: {
                category:'WEDDING CATERERS',
                Q1:  " Who will bear the cost of travel and stay outside the home town ?",
                ans: "none",
            },
             //WEDDING INVITATIONS 
             Q31: {
                category:'Are you able to ship cards domestic / internationally? ',
                Q1:  "Do you fall into any of these categories",
                ans: "none"
            },
            Q32: {
                category:' What is the starting range for a wedding card (without box)?',
                Q1:  "What Type Of Caterer Are You ?",
                ans: "none"
            },
            Q33: {
                category:'What are you most known for?',
                Q1:  "What is the starting per plate price for a Vegetarian menu (Assume 250 pax)?",
                ans: "none"
            },
            Q34: {
                category:'WEDDING CATERERS',
                Q1:  "Which of the following do you offer?",
                ans: "none"
            },
            Q35: {
                category:'WEDDING CATERERS',
                Q1:  "What is the minimum number of pieces you take an order for?",
                ans: "none"
            },
            Q36: {
                category:'WEDDING CATERERS',
                Q1:  "Do you also offer services for favors?",
                ans: "none",
            },
                  //DJ AND SOUND
                  Q37: {
                    category:'DJ AND SOUND ',
                    Q1:  "What is your basic starting package?",
                    ans: "none"
                },
                Q38: {
                    category:' DJ AND SOUND',
                    Q1:  " What does the above price include? (E.g Includes equipment, Lighting)",
                    ans: "none"
                },
                Q39: {
                    category:'DJ AND SOUND',
                    Q1:  "Favourite Music Genres",
                    ans: "none"
                },
                Q40: {
                    category:'DJ AND SOUND',
                    Q1:  "How Many years have you been DJing for?",
                    ans: "none"
                },
                Q41: {
                    category:'DJ AND SOUND',
                    Q1:  "How many members does your team consist of?",
                    ans: "none"
                },
                Q42: {
                    category:'DJ AND SOUND',
                    Q1:  "Who will bear the cost of travel and stay outside the home town ?",
                    ans: "none",
                },
                      //MEHNDI ARTISTS
                      Q43: {
                        category:'MEHNDI ARTISTS ',
                        Q1:  "What are the starting prices for bridal mehndi?",
                        ans: "none"
                    },
                    Q44: {
                        category:'MEHNDI ARTISTS',
                        Q1:  " What is your speciality in ?",
                        ans: "none"
                    },
                    Q45: {
                        category:'MEHNDI ARTISTS',
                        Q1:  "How many artists are in total ?",
                        ans: "none"
                    },
                    Q46: {
                        category:'MEHNDI ARTISTS',
                        Q1:  "Do you provide after care solutions ?",
                        ans: "none"
                    },
                    Q47: {
                        category:'MEHNDI ARTISTS',
                        Q1:  "For mehendi of family and friends what is your package?",
                        ans: "none"
                    },
                    Q48: {
                        category:'MEHNDI ARTISTS',
                        Q1:  " Who will bear the cost of travel and stay outside the home town ?",
                        ans: "none",
                    },

                          //WEDDING CAKES
                          Q43: {
                            category:'WEDDING CAKES',
                            Q1:  " What are your most popular flavors? (Enter flavors with comma to separate them)",
                            ans: "none"
                        },
                        Q44: {
                            category:'WEDDING CAKES',
                            Q1:  " Do you make eggless cake",
                            ans: "none"
                        },
                        Q45: {
                            category:'WEDDING CAKES',
                            Q1:  "What do you specialise in??",
                            ans: "none"
                        },
                        Q46: {
                            category:'WEDDING CAKES',
                            Q1:  "For a wedding cake (fondant cake), what is the starting price per kg? (Assume the most commonly requested for flavour)                            ",
                            ans: "none"
                        },
                        Q47: {
                            category:'WEDDING CAKES',
                            Q1:  "Do you arrange for delivery and transport of the cake to the venue?",
                            ans: "none"
                        },
                        Q48: {
                            category:'WEDDING CAKES',
                            Q1:  "Who will bear the cost of travel and stay outside the home town ?",
                            ans: "none",
                        },
                            //BRIDAL WEAR
                            Q49: {
                                category:'BRIDAL WEAR',
                                Q1:  "How would you describe your establishment?",
                                ans: "none"
                            },
                            Q50: {
                                category:'BRIDAL WEAR',
                                Q1:  "What type of outfits do you offer?",
                                ans: "none"
                            },
                            Q51: {
                                category:'BRIDAL WEAR',
                                Q1:  "Most of your outfits are:",
                                ans: "none"
                            },
                            Q52: {
                                category:'BRIDAL WEAR',
                                Q1:  "What is your price range?",
                                ans: "none"
                            },
                            Q53: {
                                category:'BRIDAL WEAR',
                                Q1:  "What size do you stock?",
                                ans: "none"
                            },
                            Q54: {
                                category:'BRIDAL WEAR',
                                Q1:  "Who will bear the cost of travel and stay outside the home town ?",
                                ans: "none",
                            },
    


      }




    render() {



        return (
            <React.Fragment>
                <TopBar/>
                <Navbar/>
            <Section>

                <div className="flex" >
         
         <div className="head" >

             <h2>Additional Information</h2>

         </div>
         <div className="cover" >
            <div className="img" >

                <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1607942224/wedding%20Moodz/wedding_moodz_lazy_loading_gqclva.png'} />  
            
      

            </div>
            <label for="upload-photo">Upload-Cover-Image</label>
<input type="file" name="photo" id="upload-photo" />
             
             </div>
             <form  noValidate onSubmit={this.onSubmit} >

               <div className="input" >

                   <div className="box" >
                       
                       <div className="data" >     {this.state.Q1.Q1}  </div>
                      
                       <div className="type" >
                     
                     <input placeholder="Enter data here" ></input>
                      </div>

                   </div>
                   <div className="box" >
                       
                   <div className="data" >{this.state.Q2.Q1}  </div>
                   <div className="check" >
                     
                     <ul>
                         <li><input value={this.state.Q2.ans}   onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Candid photography' }  })) }  type="checkbox"></input>Candid photography </li>
                         <li> <input  value={this.state.Q2.ans}   onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Wedding films' }  })) }  type="checkbox"></input>Wedding films</li>
                         <li> <input value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Traditional photography' }  })) }  type="checkbox"></input>Traditional photography</li>
                         <li> <input  value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Pre- Wedding photoshoot' }  })) }  type="checkbox"></input>Pre- Wedding photoshoot</li>
                         
                     </ul>
                     <ul>
                         <li><input value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Albums' }  })) }  type="checkbox"></input>Albums </li>
                         <li> <input value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Pre-Wedding films' }  })) }  type="checkbox"></input>Pre-Wedding films</li>
                         <li> <input  value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Traditional videography' }  })) } type="checkbox"></input>Traditional videography
</li>
                        
                         
                     </ul>
                     </div>



                   </div>
                   <div className="box" >

      
                   <div className="data" >{this.state.Q3.Q1}  </div>
                   <div className="check" >
                     
                     <ul>
                         <li><input value={this.state.Q3.ans}   onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Pre - Wedding photoshoot' }  })) }  type="checkbox"></input>Pre - Wedding photoshoot </li>
                         <li> <input  value={this.state.Q3.ans}   onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Wedding films' }  })) }  type="checkbox"></input>Wedding films</li>
                         <li> <input value={this.state.Q3.ans} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Candid + Wedding photography' }  })) }  type="checkbox"></input>Candid + Wedding photography</li>
                         <li> <input  value={this.state.Q3.ans} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Traditional + Candid specialist' }  })) }  type="checkbox"></input>Traditional + Candid specialist</li>
                         
                     </ul>
                 
                     </div>


                   </div>
                   <div className="box" >
                   <div className="data" >{this.state.Q4.Q1}  </div>
                   <div className="check" >
                     
                     <ul>
                         <li><input value={this.state.Q4.ans}   onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '1 year' }  })) }  type="checkbox"></input>1 year </li>
                         <li> <input  value={this.state.Q4.ans}   onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '1-3 years' }  })) }  type="checkbox"></input>1-3 years</li>
                         <li> <input value={this.state.Q4.ans} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '3-5 years' }  })) }  type="checkbox"></input>3-5 years</li>
                         <li> <input  value={this.state.Q4.ans} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '5-7 years' }  })) }  type="checkbox"></input>5-7 years</li>
                         
                     </ul>
                     <ul>
                         <li><input value={this.state.Q4.ans}   onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '7 years' }  })) }  type="checkbox"></input>7 years </li>
                       
                         
                     </ul>
                 
                     </div>
                   </div>
                   <div className="box" >
                   <div className="data" >{this.state.Q5.Q1}  </div>
                   <div className="check" >
                     
                     <ul>
                         <li><input value={this.state.Q5.ans}   onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: 'Upto 25% advance payment' }  })) }  type="checkbox"></input>Upto 25% advance payment </li>
                         <li> <input  value={this.state.Q5.ans}   onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: 'Upto 50% advance payment' }  })) }  type="checkbox"></input>Upto 50% advance payment</li>
                         <li> <input value={this.state.Q5.ans} onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: 'Upto 75% advance payment' }  })) }  type="checkbox"></input>Upto 75% advance payment</li>
                         <li> <input  value={this.state.Q5.ans} onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: 'Full advance payment while booking.' }  })) }  type="checkbox"></input>Full advance payment while booking.</li>
                         
                     </ul>
                   
                 
                     </div>



                   </div>
                   <div className="box" >
                   <div className="data" >{this.state.Q6.Q1}  </div>
                   <div className="check" >
                     
                     <ul>
                         <li><input value={this.state.Q6.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Travel cost borne by client, stay borne by us ' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us  </li>
                         <li> <input  value={this.state.Q6.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
                         <li> <input value={this.state.Q6.ans} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Travel and stay cost borne by the client. ' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>

                         
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
            <Footer/>
            </React.Fragment>
        )
    }
}
