import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../sidebar/Sidebar';
import   { connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVerfication }  from '../../../actions/VednorAction';


 class dashboard extends Component {

    componentDidMount() {
        this.props.getVerfication();
    }



    render() {

    const { user } = this.props.auth;
               const { otp } = this.props.vendors;
    if( otp === "none"){
        return (
        <Redirect to='/verify-account' ></Redirect>
        )
    }
      
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

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    admin: state.admin,
    vendors: state.vendors
  });
  
  export default connect(
    mapStateToProps,
    {  getVerfication  }
  )(dashboard);
  