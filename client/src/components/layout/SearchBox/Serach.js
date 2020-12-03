import React, { Component } from 'react';

import { Section} from './Style'

export default class Serach extends Component {
    render() {
        return (
            <Section>
                <div className='flex' >
              <div className='flex-1' >
   <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606628498/wedding%20Moodz/find_me_bcvguv.svg'} ></img>
<input
placeholder="Type your preferred City"
></input>

              </div>
              <div  className='flex-2' >
              <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606628498/wedding%20Moodz/vendor_4x_zykvn8.png'} ></img>
<input
  placeholder="Type your vendor category"
></input>
              </div>
              <div  className='flex-3' >
                  <button>Get Started</button>
              </div>
                </div>
            </Section>
        )
    }
}
