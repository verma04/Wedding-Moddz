import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../sidebar/Sidebar';
import { getCity } from "../../../actions/adminActions";

import   { connect} from 'react-redux';

 class city extends Component {

    componentDidMount() {
        this.props.getCity();
    }
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
 <h2>sdffffffd</h2>

                     </div>
                     
                     </div> 
                     </Section>
            
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    
  });
  
  export default connect(
    mapStateToProps,
    { getCity }
  )(city);