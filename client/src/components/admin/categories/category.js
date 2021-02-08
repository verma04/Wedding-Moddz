

import React, {  useEffect , useState } from 'react';
import Navbar from '../Navbar/Navbar';
import  { Section  } from './Style';
import Sidebar  from '../sidebar/Sidebar';
import   { connect} from 'react-redux';
import { getCatgory  } from "../../../actions/adminActions";

import Form from '../form/addcategory/Form'
import Edit from '../form/editform/edit'
import Loading from '../../layout/Loading/Loading'

const  Category = ({getCatgory , history, user: {category}}) => {


    const [pop, setPop] = useState(true);
    const [edit, deluser] = useState(true);
    const toggle = () => {
        setPop(!pop)
    }
    const settoggle = () => {
        deluser(!edit)
    }

useEffect(() => {
    getCatgory()
  },[getCatgory]);
if(category === null){
    return  (
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

                                 <h3>Category</h3>
                                 
                                 <i onClick={toggle}  class="fas fa-plus-circle"></i>
                                 </div>
                             
                             <div className="mid" >
                                 {category.map((city) =>
                                <div onClick={() =>  history.push(`/admin/cities/${city.cityslug}`) } className="city" >
                                 <div className='img' >
                           <img src={city.categoryAvatar} ></img>

                                 </div>
                                 <div className="des" >
                                   <div className="cityName" >
                                   

                                       <h3> {city.category} </h3>
                                        </div>

                                       

                                 </div>

    
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
    { getCatgory   }
  )(Category);
