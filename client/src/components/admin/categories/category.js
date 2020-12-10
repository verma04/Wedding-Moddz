import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../sidebar/Sidebar';
import { getCatgory  , postCategory} from "../../../actions/adminActions";
import   { connect} from 'react-redux';
class category extends Component {

    state ={
        category:''
    }

    componentDidMount() {
        this.props.getCatgory();
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
      onSubmit =  async e => {
        e.preventDefault();
    
        const userData = {
          category: this.state.category,
          
        };
   
       await  this.props.postCategory(userData);
       await this.setState({category:''});
      };
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

                          <form noValidate onSubmit={this.onSubmit}>

<input
    onChange={this.onChange}
    value={this.state.category}
    id="category"
></input>
<button>Add</button>
</form>

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


const mapStateToProps = state => ({
    auth: state.auth,
    
  });
  
  export default connect(
    mapStateToProps,
    {  getCatgory , postCategory}
  )(category);