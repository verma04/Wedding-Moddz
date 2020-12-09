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
                          
                          <div className="category" >

                              <div className="input" >

                                  <input  ></input>
                                  <button>Add</button>
                              </div>

                              <div className="set" >
                                  <div className="list" >

                                      <div className="data" >

                                      </div>

                                      <div className="button" >
                                          
                                          </div>

                                    
                                  </div>
                                  <div className="list" >

                                    
</div>
<div className="list" >

                                    
</div>
                                

                              </div>


                          </div>

                     </div>
                     
                     </div> 
                     </Section>
            
            </React.Fragment>
        )
    }
}
