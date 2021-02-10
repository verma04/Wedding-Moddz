import React from 'react'
;


const List = ({ number , approveRequest , deleteuser }) => {
 
   
    return (
   
      <div   className='grid1' >
                            
      <div className="img" > 
      
      <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972544/wedding%20Moodz/logo4_4x_ijth3b.png"  ></img> </div> 

      <div className="name" > 
{number.vendorName}
      <h2>VendorName</h2>
       </div> 

       <div className="name" > 
       {number.email}
       <h2>Email</h2>
       </div> 
       <div className="name" > 
      +91-{number.phone}
       <h2>Phone</h2>
       </div> 

       <div className='edit' >
       <button  onClick={()=> approveRequest(number._id) } >Approve</button>
       <button onClick={()=> deleteuser(number._id) }  >Reject</button>
         </div>
                 
              </div>
      
    )
}

export default List