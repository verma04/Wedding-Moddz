import React, { Component } from 'react';

import { Section} from './Style';

import TopBar from '../../layout/Topbar/topbar';
import Navbar from '../../layout/Navbar/Navbar';

import Footer from '../../layout/footer/Footer'
import   { connect} from 'react-redux';
import Venues from './Venues';
import  WeddingCaterers  from './Wedding-Caterers'
import WeddingDecorators from './WeddingDecorators'
import Mehendi from './Mehendi'
import Jewellery from './Jewellery'
import Pandits from './Pandits';
import Music from './Music'
import Photographers from './Photographers';
import WeddingInv from './WeddingInvitation'
import BridalWear from './BridalWear'
import GroomWear from './GroomWear';
import Alert from './alert/alert'

  class AdditionalInformation extends Component {

  

   



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
        else  if ((user.VendorCategory === "Pandits") ){ 
          return (
         <Pandits/>
          )
        }
        else  if ((user.VendorCategory === "Wedding-decorators") ){ 
          return (
         <WeddingDecorators/>
          )
        }
        else  if ((user.VendorCategory === "Mehndi") ){ 
          return (
         <Mehendi/>
          )
        }
        else  if ((user.VendorCategory === "Jewellery & Accessories ") ){ 
          return (
         <Jewellery/>
          )
        }
        else  if ((user.VendorCategory === "Music & Dance") ){ 
          return (
         <Music/>
          )
        }
        else  if ((user.VendorCategory === "Photographers") ){ 
          return (
         <Photographers/>
          )
        }
        else  if ((user.VendorCategory === "Wedding-invitations") ){ 
          return (
         <WeddingInv/>
          )
        }
        else  if ((user.VendorCategory === "Bridal Wear") ){ 
          return (
         <BridalWear/>
          )
        }
        else  if ((user.VendorCategory === "Groom Wear") ){ 
          return (
         <GroomWear/>
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
  