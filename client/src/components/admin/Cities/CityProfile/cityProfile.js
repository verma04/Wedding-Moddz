

import React, {  useEffect , useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../../sidebar/Sidebar';
import   { connect} from 'react-redux';
import { getCityProfile } from "../../../../actions/adminActions";

import Delete from '../../form/deleteuser/delete'
import Edit from '../../form/editform/edit'

const  City = ({ match , getCityProfile , admin: {cityProfie}}) => {
  
    let params = match.params;

    const [edit, edituser] = useState(true);
    const [del, deluser] = useState(true);
  
    const settoggle = () => {
        edituser(!edit)
    }
    const toggle = () => {
        deluser(!del)
    }

useEffect( async (  ) =>   {

    getCityProfile(params.city)
  }, [getCityProfile]);
if(cityProfie === null){
    return null
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

                                 <h3>CITIES</h3>
                                 <h3> {params.city} </h3>
                                 
                               
                                 </div>
                             
                             <div className="mid" >
                           
                                <div className="city" >
                                 <div className='img' >
                           <img src={cityProfie.cityimg} ></img>

                                 </div>
                                 <div className="des" >
                                   <div className="cityName" >
                                       <h3> City </h3>

                                       <p> {cityProfie.cityName} </p>
                                        </div>

                                        <div className="cityName" >
                                       <h3> City-Description </h3>

                                       <p> {cityProfie.cityDescription} </p>
                                        </div>

                                 </div>

                                 <div className="edit" >
                                     <button onClick={settoggle} > Edit </button>
                                     <button  onClick={toggle} > Delete </button>
                                 </div>
                                 {edit === false &&
<>
<Edit toggle={settoggle}  data={cityProfie}  />
</>

} 
{del === false &&
<>
<Delete toggle={toggle}  data={cityProfie}  />
</>

} 
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
    admin: state.admin
    
  });
  
  export default connect(
    mapStateToProps,
    { getCityProfile  }
  )(City);
