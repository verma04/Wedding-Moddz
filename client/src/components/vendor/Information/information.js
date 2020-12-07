import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../sidebar/Sidebar';

export default class dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
          <Section>
                 <div className="flex" >
                     
                     <div className='flex-1' >
             <Sidebar/>
                     </div>

                     <div className='flex-2' >
                          <div className="head" >
                          <h2> Profile Analytics </h2> 


                          <div className="com" >

                        <h3>Complete your profile by:</h3>
            <ul>
                        <li>Get featured in a Real Wedding. Email your work to submissions@wedmegood.com</li>
                        <li>Get featured in a Real Wedding. Email your work to submissions@wedmegood.com</li>
                 </ul>
                  </div>
                         </div> 

                         <div className="data" >

         <form>

         <h2> Personal Information  </h2>
             
             <div className="input-field" > 
              <label>Login email ID </label>
              <input>
              
              </input>
             
             </div>

             <div className="input-field" > 
              <label>Brand Name*</label>
              <input>
              
              </input>
             
             </div>
                   <div className="input-field" > 
              <label>Category Name* </label>
              <input>
              
              </input>
             
             </div>
             <div className="input-field" > 
              <label>Contact person name </label>
              <input>
              
              </input>
             
             </div>
             <div className="input-field" > 
              <label>Additional email ID </label>
              <input>
              
              </input>
             
             </div>
             <div className="input-field" > 
              <label>Contact number*
</label>
              <input>
              
              </input>
             
             </div>
             <div className="input-field" > 
              <label>Facebook url </label>
              <input>
              
              </input>
             
             </div>
             <div className="input-field" > 
              <label>Instagram url </label>
              <input>
              
              </input>
             
             </div>
             <div className="input-field" > 
              <label>Youtube/Vimeo url</label>
              <input>
              
              </input>
             
             </div>
             <div  id="add" className="input-field" > 
              <label>Additional information</label>
              <textarea className="add">
              
              </textarea>
             
             </div>
             <div className="input-field" > 
              <label>City*(Choose your base city here)</label>
              <input>
              
              </input>
             
             </div>
             <div  id="add" className="input-field" > 
              <label>Address</label>
              <textarea className="add">
              
              </textarea>
             
             </div>
          
         </form>



         <form>

<h2> Additional Information  </h2>
    
    <div className="checkbox" > 
     <label>What kind of commercials do you work on?</label>

     <div className="box" ><input type="checkbox" checked="checked"></input>  <h3>We charge a Fixed Fee for Planning</h3> </div> 
     <div className="box" ><input type="checkbox" ></input> <h3>We charge a percentage of the wedding cost</h3>  </div> 
     
    
    </div>

    <div id="add"  className="input-field" > 
     <label>What is your style USP?</label>
     <textarea className="add">
              
              </textarea>
    
    </div>
    <div id="add"  className="input-field" > 
     <label>Which are some key cities you have planned weddings in previously?</label>
     <textarea className="add">
              
              </textarea>
    
    </div>
    <div className="checkbox" > 
     <label>What do your starting packages for planning a 3 day wedding range from?</label>

     <div className="box" ><input type="checkbox" checked="checked"></input>  <h3>Packages start at ₹ 2.5 Lakhs or below and can go higher depending on requirements</h3> </div> 
     <div className="box" ><input type="checkbox" ></input> <h3> Packages start at between ₹ 2.5 Lakhs - ₹ 4 Lakhs and can go higher depending on requirements</h3>  </div> 
     <div className="box" ><input type="checkbox" ></input> <h3> Packages start at between ₹ 2.5 Lakhs - ₹ 4 Lakhs and can go higher depending on requirements</h3>  </div> 
    
    </div>
    <div className="checkbox" > 
     <label>What is your policy on decor?</label>

     <div className="box" ><input type="checkbox" checked="checked"></input>  <h3>We have inhouse decor done by our team, but you are free to work with other decorators as well</h3> </div> 
     <div className="box" ><input type="checkbox" ></input> <h3> We do not have inhouse decor, we are open to working with decorators of your choice</h3>  </div> 
     <div className="box" ><input type="checkbox" ></input> <h3> We do not have inhouse decor, we are open to working with decorators of your choice</h3>  </div> 
    
    </div>
   
 
 <div className='btn' >
 <button> Save </button>
 </div>

 
 
</form>


                         </div>
               

                     </div>
                     
                     </div> 
                     </Section>
            
            </React.Fragment>
        )
    }
}
