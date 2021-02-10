
import React, {  useEffect , useState } from 'react';
import Navbar from '../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../sidebar/Sidebar';
import {  VendorListing   , updateCover } from '../../../actions/VednorAction'
import   { connect} from 'react-redux';
import  Form from './form/form'
import Loading from '../../layout/Loading/Loading';
const Photos = ({updateCover,  auth:{user},  VendorListing , vendor:{list} })  => {
    const [pop, setPop] = useState(true);
    const toggle = () => {
        setPop(!pop)
    }

    useEffect(() => {
        VendorListing(user.id)
   
      } , [VendorListing]);

      
  const  update =  (img)  => {
   const data = {
       id:user.id,
       img:img
   }
   updateCover(data)
  }



    if(list === null){
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
                     <div className='top' ></div>

                     <div className='mid' >

                         <div className="add" >
                         <i  onClick={toggle} class="fas fa-plus-circle"></i>
                         </div>

                         {list.photos.map(number => 
                         <div className="photo" >
                            <img src={number.photo} ></img>
                       <div className="cover" >
                            <div onClick={() => update(number.photo) }  className="text" >
                                Set Cover Photo
                                 </div>
                                 <i className="fas fa-trash"></i>
                           </div>
                             </div>
                         )
                         }
       
                         {pop === false &&
<>
<Form toggle={toggle}    />
</>

} 

                     </div>

                     </div>
                     
                     </div> 
                     </Section>
            
            </React.Fragment>
        
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
   
    vendor:state.vendors
    
  });
  
  export default connect(
    mapStateToProps,
    { VendorListing , updateCover }
  )(Photos)
