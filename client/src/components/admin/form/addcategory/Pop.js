import { useEffect, useState } from 'react';
import {Section} from './Style'

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

import { connect } from "react-redux";

function Pop({Submit , toggle , product, errors}) {
    const { register, handleSubmit, watch, error} = useForm();
  
    const [  img , setImage ] = useState('https://res.cloudinary.com/dzcmadjl1/image/upload/v1612760300/wedding%20Moodz/kayngawnv9mzpkjjsbj8.png')

  
       

   
         const onSubmit = data =>  {
            if( img === 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1612588208/wedding%20Moodz/yrbnbjnfnqayrskctgxk.png' ){
               
                toast.error("Upload image", { autoClose: 2000 });
              
              } 
          
            else {
             
           Submit(data, img)
            }
            
          }

          const  upload = async (e) => {
 
  
   
            const files = e.target.files;
           setImage('https://res.cloudinary.com/dzcmadjl1/image/upload/v1610515663/HimTrek/nkvy6wlmekzb80khdi2f.gif')
            
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'wcbta236')
           
            const res = await fetch('	https://api.cloudinary.com/v1_1/dzcmadjl1/image/upload', {
              method: 'POST',
              body:data
            })
                const file = await res.json()
                let link = file.secure_url
                 console.log(link)
             await   setImage(link)
             }
   

    return (
        <Section>
            <ToastContainer />
            <div id="myModal" class="modal">


<div class="modal-content">

    <div className="head" >
  <h2>Add category</h2>
    </div>

    <div className='img' >
       
    
   <img  src={img}  ></img>


   <label for="cafeavatar">Upload-Category-Image</label>
        <input
          name="cafeavatar"
          type="file"
          onChange={upload}
       
          id="cafeavatar"/>



        </div>
   
 
  <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}



    <div className="input-field" >
        <label>Category Name</label>
      <input name="category"     placeholder="Enter Category Name"  ref={register({ required: true })} />
      {errors.category && <span>This field is required</span>}
    <span>{errors.categoryError}</span>
      </div>
      <div className="input-field" >
      <label>Category  Description</label>
      <input  name="categoryDescription"   placeholder="Enter Category Description"   ref={register({ required: true })} />
      {errors.categoryDescription && <span>This field is required</span>}
      </div>
 
    
      {/* errors will return when field validation fails  */}
     
       
       <div className="btn" > 
      <button type="submit" >Add</button>
      <button onClick={toggle} >Cancel</button>
      </div>
    </form>
</div>

</div>
        </Section>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    {  }
  )(Pop);


