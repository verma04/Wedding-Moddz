import React, { Component } from 'react';

import { Section} from './Style';

import TopBar from '../../layout/Topbar/topbar';
import Navbar from '../../layout/Navbar/Navbar';

import Footer from '../../layout/footer/Footer'
import   { connect} from 'react-redux';
import Venues from './Venues';
import  WeddingCaterers  from './Wedding-Caterers'
  class AdditionalInformation extends Component {

  

    //   state = {

    //     Q1: {
    //         category:'PHOTOGRAPHER',
    //         Q1:  "How much time do you take to deliver the photos ?",
    //         ans: ""
    //     },
    //     Q2: {
    //         category:'PHOTOGRAPHER',
    //         Q1:  "Which services do you offer ?",
    //         ans: ""
    //     },
    //     Q3: {
    //         category:'PHOTOGRAPHER',
    //         Q1:  "What is your speciality?",
    //         ans: ""
    //     },
    //     Q4: {
    //         category:'PHOTOGRAPHER',
    //         Q1:  "What is the duration of your work experience ?",
    //         ans: ""
    //     },
    //     Q5: {
    //         category:'PHOTOGRAPHER',
    //         Q1:  "Your payment terms and conditions?",
    //         ans: ""
    //     },
    //     Q6: {
    //         category:'PHOTOGRAPHER',
    //         Q1:  "Who will bear the cost of travel and stay outside the home town ?",
    //         ans: ""
    //     },
    //        // WEDDING PLANNER
    //     Q7: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "What kind of commercials do you work on ?",
    //         ans: ""
    //     },
    //     Q8: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "What is your style USP?",
    //         ans: ""
    //     },
    //     Q9: {
    //         category:'WEDDING PLANNER',
    //         Q1:  " What is your policy on decor??",
    //         ans: ""
    //     },
    //     Q10: {
    //         category:'WEDDING PLANNER',
    //         Q1:  " How many hours/days do you need to plan a wedding?",
    //         ans: ""
    //     },
    //     Q11: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "How many weddings have you planned before? ?",
    //         ans: ""
    //     },
    //     Q12: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "Who will bear the cost of travel and stay outside the home town  ?",
    //         ans: "",
    //     },
    //     //  BRIDAL MAKE-UP
    //     Q13: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "Which of the following do you offer?",
    //         ans: ""
    //     },
    //     Q14: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "Do you travel to the venue ?",
    //         ans: ""
    //     },
    //     Q15: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "What does the bridal makeup price include?",
    //         ans: ""
    //     },
    //     Q16: {
    //         category:'WEDDING PLANNER',
    //         Q1:  " Do you offer Airbrush/ HD Makeup ?",
    //         ans: ""
    //     },
    //     Q17: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "What is your policy on trials?",
    //         ans: ""
    //     },
    //     Q18: {
    //         category:'WEDDING PLANNER',
    //         Q1:  "Who will bear the cost of travel and stay outside the home town ?",
    //         ans: "",
    //     },

    //       //  WEDDING DECORATOR 
    //       Q19: {
    //         category:'WEDDING DECORATOR ',
    //         Q1:  "What types of venues do you work with?",
    //         ans: ""
    //     },
    //     Q20: {
    //         category:'WEDDING DECORATOR ',
    //         Q1:  "Can you decorate traditional marquees and solid buildings with your       linings?",
    //         ans: ""
    //     },
    //     Q21: {
    //         category:'WEDDING DECORATOR ',
    //         Q1:  "Are you enlisted on the Panel of some banquets/ hotels? Please mention a few.",
    //         ans: ""
    //     },
    //     Q22: {
    //         category:'WEDDING DECORATOR ',
    //         Q1:  " For an indoor banquet function, of approx 250 pax what is the price range that you would be comfortable doing",
    //         ans: ""
    //     },
    //     Q23: {
    //         category:'WEDDING DECORATOR ',
    //         Q1:  "For an outdoor function, what would the price range be?",
    //         ans: ""
    //     },
    //     Q24: {
    //         category:'WEDDING DECORATOR ',
    //         Q1:  "Who will bear the cost of travel and stay outside the home town ?",
    //         ans: "",
    //     },

    //         //  WEDDING PANDIT
    //         Q25: {
    //             category:'WEDDING PANDIT',
    //             Q1:  "What type of WEDDING PANDIT is your specialty?",
    //             ans: ""
    //         },
    //         Q26: {
    //             category:'WEDDING PANDIT',
    //             Q1:  "Do you do engravings on rings ?",
    //             ans: ""
    //         },
    //         Q27: {
    //             category:'WEDDING PANDIT',
    //             Q1:  "Do you make customized WEDDING PANDIT  ",
    //             ans: ""
    //         },
    //         Q28: {
    //             category:'WEDDING PANDIT',
    //             Q1:  " What if I don’t like the WEDDING PANDIT I ordered?",
    //             ans: ""
    //         },
    //         Q29: {
    //             category:'WEDDING PANDIT',
    //             Q1:  "Your payment terms and conditions for rental WEDDING PANDIT",
    //             ans: ""
    //         },
    //         Q30: {
    //             category:'WEDDING PANDIT',
    //             Q1:  "Who will bear the cost of travel and stay outside the home town ?",
    //             ans: "",
    //         },
    //         //WEDDING CATERERS
    //         Q31: {
    //             category:'WEDDING CATERERS',
    //             Q1:  "Do you fall into any of these categories",
    //             ans: ""
    //         },
    //         Q32: {
    //             category:'WEDDING CATERERS',
    //             Q1:  "What Type Of Caterer Are You ?",
    //             ans: ""
    //         },
    //         Q33: {
    //             category:'WEDDING CATERERS',
    //             Q1:  "What is the starting per plate price for a Vegetarian menu (Assume 250 pax)?",
    //             ans: ""
    //         },
    //         Q34: {
    //             category:'WEDDING CATERERS',
    //             Q1:  " What is the starting per plate price for a Non- Vegetarian menu (Assume 250 pax) ? ",
    //             ans: ""
    //         },
    //         Q35: {
    //             category:'WEDDING CATERERS',
    //             Q1:  "Which of the following cuisines do you offer",
    //             ans: ""
    //         },
    //         Q36: {
    //             category:'WEDDING CATERERS',
    //             Q1:  " Who will bear the cost of travel and stay outside the home town ?",
    //             ans: "",
    //         },
           
    //               //DJ AND SOUND
    //               Q37: {
    //                 category:'DJ AND SOUND ',
    //                 Q1:  "What is your basic starting package?",
    //                 ans: ""
    //             },
    //             Q38: {
    //                 category:' DJ AND SOUND',
    //                 Q1:  " What does the above price include? (E.g Includes equipment, Lighting)",
    //                 ans: ""
    //             },
    //             Q39: {
    //                 category:'DJ AND SOUND',
    //                 Q1:  "Select Category Type",
    //                 ans: ""
    //             },
    //             Q40: {
    //                 category:'DJ AND SOUND',
    //                 Q1:  "How Many years have you been DJing for?",
    //                 ans: ""
    //             },
    //             Q41: {
    //                 category:'DJ AND SOUND',
    //                 Q1:  "How many members does your team consist of?",
    //                 ans: ""
    //             },
    //             Q42: {
    //                 category:'DJ AND SOUND',
    //                 Q1:  "Who will bear the cost of travel and stay outside the home town ?",
    //                 ans: "",
    //             },
    //                   //MEHNDI ARTISTS
    //                   Q43: {
    //                     category:'MEHNDI ARTISTS ',
    //                     Q1:  "What are the starting prices for bridal mehndi?",
    //                     ans: ""
    //                 },
    //                 Q44: {
    //                     category:'MEHNDI ARTISTS',
    //                     Q1:  " What is your speciality in ?",
    //                     ans: ""
    //                 },
    //                 Q45: {
    //                     category:'MEHNDI ARTISTS',
    //                     Q1:  "How many artists are in total ?",
    //                     ans: ""
    //                 },
    //                 Q46: {
    //                     category:'MEHNDI ARTISTS',
    //                     Q1:  "Do you provide after care solutions ?",
    //                     ans: ""
    //                 },
    //                 Q47: {
    //                     category:'MEHNDI ARTISTS',
    //                     Q1:  "For mehendi of family and friends what is your package?",
    //                     ans: ""
    //                 },
    //                 Q48: {
    //                     category:'MEHNDI ARTISTS',
    //                     Q1:  " Who will bear the cost of travel and stay outside the home town ?",
    //                     ans: "",
    //                 },

    //                       //WEDDING CAKES
    //                       Q55: {
    //                         category:'WEDDING CAKES',
    //                         Q1:  " What are your most popular flavors? (Enter flavors with comma to separate them)",
    //                         ans: ""
    //                     },
    //                     Q56: {
    //                         category:'WEDDING CAKES',
    //                         Q1:  " Do you make eggless cake",
    //                         ans: ""
    //                     },
    //                     Q57: {
    //                         category:'WEDDING CAKES',
    //                         Q1:  "What do you specialise in??",
    //                         ans: ""
    //                     },
    //                     Q58: {
    //                         category:'WEDDING CAKES',
    //                         Q1:  "For a wedding cake (fondant cake), what is the starting price per kg? (Assume the most commonly requested for flavour)                            ",
    //                         ans: ""
    //                     },
    //                     Q59: {
    //                         category:'WEDDING CAKES',
    //                         Q1:  "Do you arrange for delivery and transport of the cake to the venue?",
    //                         ans: ""
    //                     },
    //                     Q60: {
    //                         category:'WEDDING CAKES',
    //                         Q1:  "Who will bear the cost of travel and stay outside the home town ?",
    //                         ans: "",
    //                     },
    //                         //BRIDAL WEAR
    //                         Q49: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "How would you describe your establishment?",
    //                             ans: ""
    //                         },
    //                         Q50: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "What type of outfits do you offer?",
    //                             ans: ""
    //                         },
    //                         Q51: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "Most of your outfits are:",
    //                             ans: ""
    //                         },
    //                         Q52: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "What is your price range?",
    //                             ans: ""
    //                         },
    //                         Q53: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "What size do you stock?",
    //                             ans: ""
    //                         },
    //                         Q54: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "Who will bear the cost of travel and stay outside the home town ?",
    //                             ans: "",
    //                         },
    //           //VENUES
    //                         Q55: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "What kind of venue do you offer? ",
    //                             ans: ""
    //                         },
    //                         Q56: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "How many guests can the venue accommodate??",
    //                             ans: ""
    //                         },
    //                         Q57: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  " What is space Prefenence?",
    //                             ans: ""
    //                         },
    //                         Q58: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  " What is charge price per plate",
    //                             ans: ""
    //                         },
    //                         Q59: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "Are there adequate restroom facilities?",
    //                             ans: ""
    //                         },
    //                         Q60: {
    //                             category:'BRIDAL WEAR',
    //                             Q1:  "What is your payment and cancellation policy?",
    //                             ans: "",
    //                         },
    
    //  //BRIDAL WEAR
    //  Q61: {
    //     category:'BRIDAL WEAR',
    //     Q1:  "How would you describe your establishment? ",
    //     ans: ""
    // },
    // Q62: {
    //     category:'BRIDAL WEAR',
    //     Q1:  "What type of outfits do you offer?",
    //     ans: ""
    // },
    // Q63: {
    //     category:'BRIDAL WEAR',
    //     Q1:  "Most of your outfits are:",
    //     ans: ""
    // },
    // Q64: {
    //     category:'BRIDAL WEAR',
    //     Q1:  "What is your price range?",
    //     ans: ""
    // },
    // Q65: {
    //     category:'BRIDAL WEAR',
    //     Q1:  "What size do you stock?",
    //     ans: ""
    // },
    // Q66: {
    //     category:'BRIDAL WEAR',
    //     Q1:  "Do you have a certain style that you tend to lean towards in formal  wear?",
    //     ans: "",
    // },


    //   //WEDDING INVITATIONS 
    //   Q67: {
    //     category:'Are you able to ship cards domestic / internationally? ',
    //     Q1:  "Do you fall into any of these categories",
    //     ans: ""
    // },
    // Q68: {
    //     category:' What is the starting range for a wedding card (without box)?',
    //     Q1:  "What Type Of Caterer Are You ?",
    //     ans: ""
    // },
    // Q69: {
    //     category:'What are you most known for?',
    //     Q1:  "What is the starting per plate price for a Vegetarian menu (Assume 250 pax)?",
    //     ans: ""
    // },
    // Q70: {
    //     category:'WEDDING CATERERS',
    //     Q1:  "Which of the following do you offer?",
    //     ans: ""
    // },
    // Q71: {
    //     category:'WEDDING CATERERS',
    //     Q1:  "What is the minimum number of pieces you take an order for?",
    //     ans: ""
    // },
    // Q72: {
    //     category:'WEDDING CATERERS',
    //     Q1:  "Do you also offer services for favors?",
    //     ans: "",
    // },

    //   }




    render() {

  const {  user} = this.props.auth;

        return (
            <React.Fragment>
                <TopBar/>
                <Navbar/>

                {(() => {
         if  ((user.VendorCategory === 'Venues') ) {
          return (
            <Venues/>
          )
        }  else  if ((user.VendorCategory === 'Wedding-Caterers') ){ 
          return (
         <WeddingCaterers/>
          )
        }
      })()}
            <Section>

             
       
             {(() => {
//         if (user.VendorCategory === "Photographers") {
//           return (
//             <form  noValidate onSubmit={this.onSubmit} >

//             <div className="input" >

//                 <div className="box" >
                    
//                     <div className="data" >     {this.state.Q1.Q1}  </div>
                   
//                     <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>

//                 </div>
//                 <div className="box" >
                    
//                 <div className="data" >{this.state.Q2.Q1}  </div>
//                 <div className="check" >
                  
//                   <ul>
//                       <li><input value={this.state.Q2.ans}   onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Candid photography' }  })) }  type="checkbox"></input>Candid photography </li>
//                       <li> <input  value={this.state.Q2.ans}   onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Wedding films' }  })) }  type="checkbox"></input>Wedding films</li>
//                       <li> <input value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Traditional photography' }  })) }  type="checkbox"></input>Traditional photography</li>
//                       <li> <input  value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Pre- Wedding photoshoot' }  })) }  type="checkbox"></input>Pre- Wedding photoshoot</li>
                      
//                   </ul>
//                   <ul>
//                       <li><input value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Albums' }  })) }  type="checkbox"></input>Albums </li>
//                       <li> <input value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Pre-Wedding films' }  })) }  type="checkbox"></input>Pre-Wedding films</li>
//                       <li> <input  value={this.state.Q2.ans} onChange={() => this.setState(prevState => ({ Q2: {   ...prevState.Q2, ans: 'Traditional videography' }  })) } type="checkbox"></input>Traditional videography
// </li>
                     
                      
//                   </ul>
//                   </div>



//                 </div>
//                 <div className="box" >

   
//                 <div className="data" >{this.state.Q3.Q1}  </div>
//                 <div className="check" >
                  
//                   <ul>
//                       <li><input value={this.state.Q3.ans}   onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Pre - Wedding photoshoot' }  })) }  type="checkbox"></input>Pre - Wedding photoshoot </li>
//                       <li> <input  value={this.state.Q3.ans}   onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Wedding films' }  })) }  type="checkbox"></input>Wedding films</li>
//                       <li> <input value={this.state.Q3.ans} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Candid + Wedding photography' }  })) }  type="checkbox"></input>Candid + Wedding photography</li>
//                       <li> <input  value={this.state.Q3.ans} onChange={() => this.setState(prevState => ({ Q3: {   ...prevState.Q3, ans: 'Traditional + Candid specialist' }  })) }  type="checkbox"></input>Traditional + Candid specialist</li>
                      
//                   </ul>
              
//                   </div>


//                 </div>
//                 <div className="box" >
//                 <div className="data" >{this.state.Q4.Q1}  </div>
//                 <div className="check" >
                  
//                   <ul>
//                       <li><input value={this.state.Q4.ans}   onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '1 year' }  })) }  type="checkbox"></input>1 year </li>
//                       <li> <input  value={this.state.Q4.ans}   onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '1-3 years' }  })) }  type="checkbox"></input>1-3 years</li>
//                       <li> <input value={this.state.Q4.ans} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '3-5 years' }  })) }  type="checkbox"></input>3-5 years</li>
//                       <li> <input  value={this.state.Q4.ans} onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '5-7 years' }  })) }  type="checkbox"></input>5-7 years</li>
                      
//                   </ul>
//                   <ul>
//                       <li><input value={this.state.Q4.ans}   onChange={() => this.setState(prevState => ({ Q4: {   ...prevState.Q4, ans: '7 years' }  })) }  type="checkbox"></input>7 years </li>
                    
                      
//                   </ul>
              
//                   </div>
//                 </div>
//                 <div className="box" >
//                 <div className="data" >{this.state.Q5.Q1}  </div>
//                 <div className="check" >
                  
//                   <ul>
//                       <li><input value={this.state.Q5.ans}   onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: 'Upto 25% advance payment' }  })) }  type="checkbox"></input>Upto 25% advance payment </li>
//                       <li> <input  value={this.state.Q5.ans}   onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: 'Upto 50% advance payment' }  })) }  type="checkbox"></input>Upto 50% advance payment</li>
//                       <li> <input value={this.state.Q5.ans} onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: 'Upto 75% advance payment' }  })) }  type="checkbox"></input>Upto 75% advance payment</li>
//                       <li> <input  value={this.state.Q5.ans} onChange={() => this.setState(prevState => ({ Q5: {   ...prevState.Q5, ans: 'Full advance payment while booking.' }  })) }  type="checkbox"></input>Full advance payment while booking.</li>
                      
//                   </ul>
                
              
//                   </div>



//                 </div>
//                 <div className="box" >
//                 <div className="data" >{this.state.Q6.Q1}  </div>
//                 <div className="check" >
                  
//                   <ul>
//                       <li><input value={this.state.Q6.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Travel cost borne by client, stay borne by us ' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us  </li>
//                       <li> <input  value={this.state.Q6.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
//                       <li> <input value={this.state.Q6.ans} onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q6, ans: 'Travel and stay cost borne by the client. ' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>

                      
//                   </ul>
                
              
//                   </div>
                    
//                 </div>


//                 </div>       
                     
//       <div className='btn' >
//       <button type="submit" >
//          Submit
//             </button>
//       </div>
         

//           </form>
          


          
        
//           )
//         } else  if  ((user.VendorCategory === "Wedding-Planner") ) {
//           return (
//             <form  noValidate onSubmit={this.onSubmit} >

//             <div className="input" >

//                 <div className="box" >
                    
//                     <div className="data" >     {this.state.Q7.Q1}  </div>
                   
//                     <div className="check" >
                  
//                   <ul>
//                       <li><input value={this.state.Q7.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q7, ans: 'Fixed Fee' }  })) }  type="checkbox"></input>We charge a Fixed Fee for Planning</li>
//                       <li> <input  value={this.state.Q7.ans}   onChange={() => this.setState(prevState => ({ Q7: {   ...prevState.Q7, ans: 'Not Fixed' }  })) }  type="checkbox"></input>We charge a percentage of the wedding cost</li>
  
                
                      
//                   </ul>
           
//                   </div>

//                 </div>
//                 <div className="box" >
                    
//                 <div className="data" >{this.state.Q8.Q1}  </div>
//                 <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>



//                 </div>
//                 <div className="box" >

   
//                 <div className="data" >{this.state.Q8.Q1}  </div>
//                 <div className="check" >
                  
//                   <ul>
//                       <li><input value={this.state.Q9.ans}   onChange={() => this.setState(prevState => ({ Q9: {   ...prevState.Q9, ans: '' }  })) }  type="checkbox"></input> We have inhouse decor done by our team, but you are free to work with other decorators as well</li>
//                       <li> <input  value={this.state.Q9.ans}   onChange={() => this.setState(prevState => ({ Q9: {   ...prevState.Q9, ans: 'Wedding films' }  })) }  type="checkbox"></input>We do not have inhouse decor, we are open to working with decorators of your choice</li>
//                       <li> <input value={this.state.Q9.ans} onChange={() => this.setState(prevState => ({ Q9: {   ...prevState.Q9, ans: 'Candid + Wedding photography' }  })) }  type="checkbox"></input>We have inhouse decor done by our team, and we don't work with other decorators.</li>

                      
//                   </ul>
              
//                   </div>


//                 </div>
//                 <div className="box" >
//                 <div className="data" >{this.state.Q10.Q1}  </div>
//                 <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                 </div>
//                 <div className="box" >
//                 <div className="data" >{this.state.Q11.Q1}  </div>
//                 <div className="check" >
//                 <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
              
              
//                   </div>



//                 </div>
//                 <div className="box" >
//                 <div className="data" >{this.state.Q12.Q1}  </div>
//                 <div className="check" >
                  
//                   <ul>
//                       <li><input value={this.state.Q12.ans}   onChange={() => this.setState(prevState => ({ Q12: {   ...prevState.Q12, ans: 'Travel cost borne by client, stay borne by us ' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us  </li>
//                       <li> <input  value={this.state.Q12.ans}   onChange={() => this.setState(prevState => ({ Q12: {   ...prevState.Q12, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
//                       <li> <input value={this.state.Q12.ans} onChange={() => this.setState(prevState => ({ Q12: {   ...prevState.Q12, ans: 'Travel and stay cost borne by the client. ' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>

                      
//                   </ul>
                
              
//                   </div>
                    
//                 </div>


//                 </div>       
                     
//       <div className='btn' >
//       <button type="submit" >
//          Submit
//             </button>
//       </div>
         

//           </form>
          

//           )
//         }

//         else  if  ((user.VendorCategory === 'Bridal Wear') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q13.Q1}  </div>
                     
//                       <div className="check" >
                    
//                     <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Bridal Makeup' }  })) }  type="checkbox"></input>Bridal Makeup</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Airbrush Makeup' }  })) }  type="checkbox"></input>Airbrush Makeup</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Party Makeup (for family)' }  })) }  type="checkbox"></input>Party Makeup (for family)</li>
//                           <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Engagement makeup' }  })) }  type="checkbox"></input>Engagement makeup</li>  
                  
                        
//                     </ul>
             
//                     </div>
  
//                   </div>
//                   <div className="box" >
                      
//                   <div className="data" >{this.state.Q14.Q1}  </div>
//                   <div className="check" >
                    
//                     <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Yes' }  })) }  type="checkbox"></input>Yes</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'No' }  })) }  type="checkbox"></input>No</li>
                      
                  
                        
//                     </ul>
             
//                     </div>
  
  
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q15.Q1}  </div>
//                   <div className="check" >
                    
//                     <ul>
//                         <li><input value={this.state.Q9.ans}   onChange={() => this.setState(prevState => ({ Q9: {   ...prevState.Q9, ans: '' }  })) }  type="checkbox"></input> Hair Styling</li>
//                         <li> <input  value={this.state.Q9.ans}   onChange={() => this.setState(prevState => ({ Q9: {   ...prevState.Q9, ans: 'Wedding films' }  })) }  type="checkbox"></input> Draping</li>
//                         <li> <input value={this.state.Q9.ans} onChange={() => this.setState(prevState => ({ Q9: {   ...prevState.Q9, ans: 'Candid + Wedding photography' }  })) }  type="checkbox"></input>Nail Polish Change</li>
  
                        
//                     </ul>
                
//                     </div>
  
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q16.Q1}  </div>
//                   <div className="check" >
                    
//                     <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Offer HD Makeup' }  })) }  type="checkbox"></input>Offer HD Makeup</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Offer Airbrush Makeup' }  })) }  type="checkbox"></input>Offer Airbrush Makeup</li>
                      
                  
                        
//                     </ul>
             
//                     </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }
//           else  if  ((user.VendorCategory === 'Planning & Decor') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q19.Q1}  </div>
//                       <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
                   
  
//                   </div>
//                   <div className="box" >
                      
//                   <div className="data" >{this.state.Q20.Q1}  </div>
               
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
  
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q21.Q1}  </div>
                
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
  
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q22.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q23.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
              
                  
                  

//                   <div className="box" >
//                   <div className="data" >{this.state.Q24.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'cost borne by client' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Party Makeup (for family)' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>
                         
                  
                        
//                     </ul>
//                     </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }

//           else  if  ((user.VendorCategory === 'Music & Dance') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q37.Q1}  </div>
//                       <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
                   
  
//                   </div>
//                   <div className="box" >
                      
//                   <div className="data" >{this.state.Q38.Q1}  </div>
               
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
  
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q39.Q1}  </div>
                
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'DJS' }  })) }  type="checkbox"></input>DJS </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Cherographer' }  })) }  type="checkbox"></input>Cherographer</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Wedding Entertainment' }  })) }  type="checkbox"></input>Wedding Entertainment</li>

                  
                        
//                     </ul>
//                     </div>
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q40.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: '1 year' }  })) }  type="checkbox"></input>1 year </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: '1-3 years' }  })) }  type="checkbox"></input>1-3 years</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: '3-5 years' }  })) }  type="checkbox"></input>3-5 years</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: '5 years' }  })) }  type="checkbox"></input>5 years</li>
                  
                        
//                     </ul>
//                     </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q41.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'cost borne by client' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Party Makeup (for family)' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>
                         
                  
                        
//                     </ul>
//                     </div>
//                   </div>
              
                  
                  

//                   <div className="box" >
//                   <div className="data" >{this.state.Q42.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'cost borne by client' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Party Makeup (for family)' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>
                         
                  
                        
//                     </ul>
//                     </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }

//           else  if  ((user.VendorCategory === 'Mehndi') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q43.Q1}  </div>
//                       <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
                   
  
//                   </div>
//                   <div className="box" >
                      
//                   <div className="data" >{this.state.Q44.Q1}  </div>
               
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Charge per hand' }  })) }  type="checkbox"></input>Charge per hand</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' Charge a package rate' }  })) }  type="checkbox"></input> Charge a package rate</li>
                     

                  
                        
//                     </ul>
//                     </div>
  
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q45.Q1}  </div>
                
                 
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q46.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Single' }  })) }  type="checkbox"></input>Single </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Team' }  })) }  type="checkbox"></input>Team</li>
                       

                  
                        
//                     </ul>
//                     </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q47.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Yes' }  })) }  type="checkbox"></input>Yes </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'No' }  })) }  type="checkbox"></input>No</li>
                   
                         
                  
                        
//                     </ul>
//                     </div>
//                   </div>
              
                  
                  

//                   <div className="box" >
//                   <div className="data" >{this.state.Q48.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'cost borne by client' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Party Makeup (for family)' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>
                         
                  
                        
//                     </ul>
//                     </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }

//           else  if  ((user.VendorCategory === 'Venues') ) {
//             return (
//               <form  onSubmit={this.onSubmit}  noValidate     >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q55.Q1}  </div>
//                       <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q55.ans}   onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: 'Hotel' }  })) }  type="checkbox"></input>Hotel</li>
//                         <li> <input  value={this.state.Q55.ans}   onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: ' Marriage Garden' }  })) }  type="checkbox"></input> Marriage Garden</li>
//                         <li><input value={this.state.Q55.ans}   onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: 'Lawns and Farmhouse' }  })) }  type="checkbox"></input>Lawns and Farmhouse</li>
//                         <li> <input  value={this.state.Q55.ans}   onChange={() => this.setState(prevState => ({ Q55: {   ...prevState.Q55, ans: 'Banquet Hall' }  })) }  type="checkbox"></input>Banquet Hall </li>

                  
                        
//                     </ul>
//                     <ul>
//                         <li><input value={this.state.Q13.ans}    onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Palace' }  })) }  type="checkbox"></input>Palace</li>
                       
                  
                        
//                     </ul>
//                     </div>
                   
                   
  
//                   </div>
//                   <div className="box" >
  
     
//   <div className="data" >  {this.state.Q56.Q1}  </div>

//   <div className="type" >
  
//   <input   value={ this.state.Q56.ans }    onChange={this.onChange}   placeholder="Enter data here"   required></input>
//    </div>

//   </div>
//                   <div className="box" >
                      
//                   <div className="data" >{this.state.Q57.Q1}  </div>
               
                 
//                     <div className="type" >
                  
//                   <input value={ this.state.Q57.ans }    onChange={this.onChange1}   placeholder="Enter data here"  required ></input>
//                    </div>
  
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q58.Q1}  </div>
                
//                   <div className="type" >
                  
//                   <input value={ this.state.Q58.ans }    onChange={this.onChange} placeholder="Enter data here"   required></input>
//                    </div>
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q59.Q1}  </div>
//                   <div className="type" >
                  
//                   <input value={ this.state.Q59.ans }    onChange={this.onChange} placeholder="Enter data here"   required></input>
//                    </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q60.Q1}  </div>
//                   <div className="type" >
                  
//                   <input value={ this.state.Q60.ans }    onChange={this.onChange} placeholder="Enter data here"  required ></input>
//                    </div>
//                   </div>
              
                  
                  

               
               
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }

//           else  if  ((user.VendorCategory === 'Groom Wear') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q61.Q1}  </div>
//                       <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Retail Shop' }  })) }  type="checkbox"></input>Retail Shop</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Studio/Boutique' }  })) }  type="checkbox"></input> Studio/Boutique</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Couture Brand' }  })) }  type="checkbox"></input> Couture Brand</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' Multi-designer studio' }  })) }  type="checkbox"></input> Multi-designer studio </li>

                  
                        
//                     </ul>
             
//                     </div>
                   
                   
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >     {this.state.Q62.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Formal Suit' }  })) }  type="checkbox"></input>Hotel</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Traditional wear' }  })) }  type="checkbox"></input> Traditional wear</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Sherwani' }  })) }  type="checkbox"></input>Sherwani</li>
         

                  
                        
//                     </ul>
                  
//                     </div>
               
                 
                 
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q63.Q1}  </div>
                
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: ' ' }  })) }  type="checkbox"></input> Custom designed outfits from scratch</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' Ready to purchase outfit' }  })) }  type="checkbox"></input> Ready to purchase outfit</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Sample pieces on which orders can be placed' }  })) }  type="checkbox"></input>Sample pieces on which orders can be placed</li>


                  
                        
//                     </ul>
                    
//                     </div>
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q64.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q65.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
              
                  
                  

//                   <div className="box" >
//                   <div className="data" >{this.state.Q66.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }

//           else  if  ((user.VendorCategory === 'Wedding-Caterers') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q31.Q1}  </div>
//                       <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Jain Catering Only' }  })) }  type="checkbox"></input>Jain Catering Only</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Vegetarian Only' }  })) }  type="checkbox"></input> Vegetarian Only</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Chaat & Street Food Only' }  })) }  type="checkbox"></input> Chaat & Street Food Only</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Small size gathering only' }  })) }  type="checkbox"></input> Small size gathering only</li>

                  
                        
//                     </ul>
//                     <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Drinks only' }  })) }  type="checkbox"></input>Drinks only</li>
                     

                  
                        
//                     </ul>
             
//                     </div>
                   
                   
  
//                   </div>
                  
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q33.Q1}  </div>
                
//                   <div className="check" >
                 
//                     <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
                    
//                     </div>
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q34.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q35.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: ' North Indian' }  })) }  type="checkbox"></input> North Indian</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' South Indian' }  })) }  type="checkbox"></input> South Indian</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: ' Chinese' }  })) }  type="checkbox"></input> Chinese</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: '  Italian' }  })) }  type="checkbox"></input>  Italian</li>

                  
                        
//                     </ul>
//                     <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Desserts' }  })) }  type="checkbox"></input>Desserts</li>
                      
                  
                        
//                     </ul>
//                     </div>
//                   </div>
              
                  
                  

//                   <div className="box" >
//                   <div className="data" >{this.state.Q36.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Travel cost borne by client, stay borne by us ' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input>Stay cost borne by client, travel borne by us</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Travel and stay cost borne by the client. ' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>
                      

                  
                        
//                     </ul>
                
//                     </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }
//           else  if  ((user.VendorCategory === 'Wedding-invitations') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q67.Q1}  </div>
//                       <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Retail Shop' }  })) }  type="checkbox"></input>Retail Shop</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Studio/Boutique' }  })) }  type="checkbox"></input> Studio/Boutique</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Couture Brand' }  })) }  type="checkbox"></input> Couture Brand</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' Multi-designer studio' }  })) }  type="checkbox"></input> Multi-designer studio </li>

                  
                        
//                     </ul>
             
//                     </div>
                   
                   
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >     {this.state.Q68.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Formal Suit' }  })) }  type="checkbox"></input>Hotel</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Traditional wear' }  })) }  type="checkbox"></input> Traditional wear</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Sherwani' }  })) }  type="checkbox"></input>Sherwani</li>
         

                  
                        
//                     </ul>
                  
//                     </div>
               
                 
                 
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q69.Q1}  </div>
                
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: ' Custom designed outfits from scratch' }  })) }  type="checkbox"></input> Custom designed outfits from scratch</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' Ready to purchase outfit' }  })) }  type="checkbox"></input> Ready to purchase outfit</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Sample pieces on which orders can be placed' }  })) }  type="checkbox"></input>Sample pieces on which orders can be placed</li>


                  
                        
//                     </ul>
                    
//                     </div>
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q70.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q71.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
              
                  
                  

//                   <div className="box" >
//                   <div className="data" >{this.state.Q72.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }

//           else  if  ((user.VendorCategory === 'Wedding-invitations') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q67.Q1}  </div>
//                       <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Retail Shop' }  })) }  type="checkbox"></input>Retail Shop</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Studio/Boutique' }  })) }  type="checkbox"></input> Studio/Boutique</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Couture Brand' }  })) }  type="checkbox"></input> Couture Brand</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' Multi-designer studio' }  })) }  type="checkbox"></input> Multi-designer studio </li>

                  
                        
//                     </ul>
             
//                     </div>
                   
                   
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >     {this.state.Q68.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Formal Suit' }  })) }  type="checkbox"></input>Hotel</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Traditional wear' }  })) }  type="checkbox"></input> Traditional wear</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Sherwani' }  })) }  type="checkbox"></input>Sherwani</li>
         

                  
                        
//                     </ul>
                  
//                     </div>
               
                 
                 
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q69.Q1}  </div>
                
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: ' Custom designed outfits from scratch' }  })) }  type="checkbox"></input> Custom designed outfits from scratch</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' Ready to purchase outfit' }  })) }  type="checkbox"></input> Ready to purchase outfit</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Sample pieces on which orders can be placed' }  })) }  type="checkbox"></input>Sample pieces on which orders can be placed</li>


                  
                        
//                     </ul>
                    
//                     </div>
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q70.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q71.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
              
                  
                  

//                   <div className="box" >
//                   <div className="data" >{this.state.Q72.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }

//           else  if  ((user.VendorCategory === 'Pandits') ) {
//             return (
//               <form  noValidate onSubmit={this.onSubmit} >
  
//               <div className="input" >
  
//                   <div className="box" >
                      
//                       <div className="data" >     {this.state.Q25.Q1}  </div>
//                       <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
                   
                   
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >     {this.state.Q26.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
               
                 
                 
  
//                   </div>
//                   <div className="box" >
  
     
//                   <div className="data" >{this.state.Q27.Q1}  </div>
//                   <div className="type" >
                  
//                   <input placeholder="Enter data here" ></input>
//                    </div>
                
                 
  
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q28.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: ' 1 year' }  })) }  type="checkbox"></input>  1 year</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: '1-3 years' }  })) }  type="checkbox"></input>1-3years</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: '3-5 years' }  })) }  type="checkbox"></input>3-5 years</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: '5 years +' }  })) }  type="checkbox"></input>5 yaers +</li>

                  
                        
//                     </ul>
                    
//                     </div>
//                   </div>
//                   <div className="box" >
//                   <div className="data" >{this.state.Q29.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: ' Included ' }  })) }  type="checkbox"></input>  Included</li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: 'Not Included' }  })) }  type="checkbox"></input> Not Included</li>
                       

                  
                        
//                     </ul>
                    
//                     </div>
//                   </div>
              
                  
                  

//                   <div className="box" >
//                   <div className="data" >{this.state.Q30.Q1}  </div>
//                   <div className="check" >
//                   <ul>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: ' Travel cost borne by client, stay borne by us ' }  })) }  type="checkbox"></input>Travel cost borne by client, stay borne by us  </li>
//                         <li> <input  value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q13: {   ...prevState.Q13, ans: ' Stay cost borne by client, travel borne by us' }  })) }  type="checkbox"></input> Stay cost borne by client, travel borne by us</li>
//                         <li><input value={this.state.Q13.ans}   onChange={() => this.setState(prevState => ({ Q6: {   ...prevState.Q13, ans: 'Travel and stay cost borne by the client. ' }  })) }  type="checkbox"></input>Travel and stay cost borne by the client. </li>


                  
                        
//                     </ul>
                    
//                     </div>
//                   </div>
                
//                   </div>       
                       
//         <div className='btn' >
//         <button type="submit" >
//            Submit
//               </button>
//         </div>
           
  
//             </form>
            
  
//             )
//           }

      })()}
  

{/*             
                </div> */}
                
            </Section>
            <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    admin: state.admin,
    vendors: state.vendors
  });
  
  export default connect(
    mapStateToProps,
    {    }
  )(AdditionalInformation);
  