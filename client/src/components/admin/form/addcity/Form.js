import React, { Component } from 'react';
import { connect } from "react-redux";
import Pop from './Pop'

import { ToastContainer, toast } from 'react-toastify';

import { addCity } from '../../../../actions/adminActions'



 class Form extends Component {

    
    onSubmit = async (data , img ) => {

      const slug =   (data.cityName.replace(/\s/g, '-').toLowerCase())
     data.cityslug = slug;
     data.cityimg = img
     console.log(data , img) 
   

        await this.props.addCity(data , this.props.toggle , this.props.history )
    //    await this.props.toggle()
    //    await  toast.dark("Product Edited", );
      //  await  Router.push(`/admin-services/hotels-and-resorts/${slug}`)
      };


    render() {
  
      const { user } = this.props.auth;
      
        return (
            <div>
                <Pop errors={this.props.errors} toggle={this.props.toggle}  product={this.props.product} Submit={this.onSubmit}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { addCity  }
  )(Form);