import React, { Component } from 'react';
import { connect } from "react-redux";
import Pop from './Pop'

import { ToastContainer, toast } from 'react-toastify';

import { addCategory } from '../../../../actions/adminActions'



 class Form extends Component {

    
    onSubmit = async (data , img ) => {

      const slug =   (data.category.replace(/\s/g, '-').toLowerCase())
     data.categorySlug = slug;
     data.categoryAvatar = img
     console.log(data ) 
   

      await this.props.addCategory(data , this.props.toggle , this.props.history )
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
    { addCategory }
  )(Form);