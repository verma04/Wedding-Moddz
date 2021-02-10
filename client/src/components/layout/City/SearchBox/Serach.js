import React, { Component } from 'react';

import { Section} from './Style';
import   { connect} from 'react-redux';
import { withRouter } from "react-router";
class Serach extends Component {
    render() {

        const { current} = this.props.user;
 
        if ( current.success === true){
            return (
                <Section>
                <div className="flex" >
           <div className="head" >
            <h2>Plan a {this.props.match.params.id} Wedding  </h2>


           </div>


                <div className='flex2' >

                    <div className='flex-4' >
                    <i class="fas fa-home"></i>
                    </div>

                    <div className='flex-5' >
                           
                    <h2>Find Vendors in {this.props.match.params.id}</h2>

                        <div class="data" >
                        <i class="fas fa-angle-down"></i>
                        </div>
                    </div>
          
                </div>
                </div>
            </Section>
            )
        }

        return (
            <Section>
                <div className="flex" >
           <div className="head" >
<h2>Oopss!! Wedding_Moodz is not Avilabe in your City</h2>


           </div>


                <div className='flex1' >
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
                </div>
            </Section>
        )
    }
}



const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    admin: state.admin,
    user:state.user
  });

export default connect (
    mapStateToProps,
    { }
) (withRouter(Serach ));