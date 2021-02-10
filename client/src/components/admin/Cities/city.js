

import React, {  useEffect , useState } from 'react';
import Navbar from '../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../sidebar/Sidebar';
import   { connect} from 'react-redux';
import { getCity } from "../../../actions/adminActions";

import Form from '../form/addcity/Form'
import Edit from '../form/editform/edit'
import Loading from '../../layout/Loading/Loading';

const  City = ({getCity , history, user: {city}}) => {


    const [pop, setPop] = useState(true);
    const [edit, deluser] = useState(true);
    const toggle = () => {
        setPop(!pop)
    }
    const settoggle = () => {
        deluser(!edit)
    }

useEffect(() => {
    getCity()
  },[getCity]);
if(city === null){
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

                                 <h3>CITIES</h3>
                                 
                                 <i onClick={toggle}  class="fas fa-plus-circle"></i>
                                 </div>
                             
                             <div className="mid" >
                                 {city.map((city) =>
                                <div onClick={() =>  history.push(`/admin/cities/${city.cityslug}`) } className="city" >
                                 <div className='img' >
                           <img src={city.cityimg} ></img>

                                 </div>
                                 <div className="des" >
                                   <div className="cityName" >
                                       <h3> City </h3>

                                       <p> {city.cityName} </p>
                                        </div>

                                        <div className="cityName" >
                                       <h3> City-Description </h3>

                                       <p> {city.cityDescription} </p>
                                        </div>

                                 </div>

                              
                                 {edit === false &&
<>
<Edit toggle={settoggle._id}  data={city}  />
</>

} 
                                </div>
                                 )
                                 }
                             
                             </div>

                             
                                  
                               
                             </div>
                             {pop === false &&
<>
<Form  toggle={toggle} />
</>

} 


                             </div> 
                             </Section>
                    
                    </React.Fragment>
                )
}


const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user
    
  });
  
  export default connect(
    mapStateToProps,
    { getCity  }
  )(City);
