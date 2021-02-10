

import React, {  useEffect , useState } from 'react';
import Navbar from '../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../sidebar/Sidebar';
import   { connect} from 'react-redux';
import { getCity } from "../../../actions/adminActions";

import Form from '../form/addcity/Form'
import Edit from '../form/editform/edit'
import Loading from '../../layout/Loading/Loading';
import List from './List'

const  Request = ({getCity , history, admin:{request}}) => {


  
    if( request  === null ){
        return (
          <Loading/>
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

                                 <div className="top" > 

                                 <h3>Home</h3>

                                 <h3>VENDOR</h3>
                                 
                               
                                 </div>
                             
                                 <div  className='mid' >

<div  className='mid' >

{(() => {
if (request.length  === 0 ) {
return (
<div className='no' >
<div  className="text" > 
Not Listing Found
</div>

<div className='add' >

</div> 

</div>
)
} else {
return (
<>
<div  className='mid' >
{request.map(number =>

<List  number={number} />


)

}
<div className='add' >


</div> 
</div>
</>
)
}
})()}






</div>

</div>





                                  
                               
                             </div>
 




                             </div> 
                             </Section>
                    
                    </React.Fragment>
                )
}


const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user,
    admin: state.admin
    
  });
  
  export default connect(
    mapStateToProps,
    { getCity  }
  )(Request);
