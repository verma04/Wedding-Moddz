



import React , { useEffect} from 'react';

import { Nav } from './Style'
import   { connect} from 'react-redux'
import {  VendorListing } from '../../../actions/VednorAction'
import Loading from '../../layout/Loading/Loading';
import { Redirect } from 'react-router';

function Navbar({auth:{user} , VendorListing , vendor:{list}}) {

    useEffect(() => {
        VendorListing(user.id)
   
      });

      if(list === ''){
          return (
              <Loading/>
          )
      }

      if(list === null){
        return (
            <Redirect to='/additional-information'/>
        )
    }
    return (
        <div>
              <Nav>
              <div className="flex" >
              

                 <div className="flex-1" >
                <img src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1606310657/asset_4x_akngst.png"} ></img> 
           
              </div>

              <div className="flex-2" >
                  <div className="right" >
              <img src={list.img} ></img> 
             <span>{user.name}</span>
             </div>
              </div>
           
              </div>
            </Nav>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    vendor:state.vendors

  });
  
  export default connect(
    mapStateToProps,
    { VendorListing }
  )(Navbar);
  


