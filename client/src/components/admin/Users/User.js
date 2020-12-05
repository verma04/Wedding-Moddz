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
 <h2>sd</h2>

                     </div>
                     
                     </div> 
                     </Section>
            
            </React.Fragment>
        )
    }
}
