import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

 
}
@media (min-width: 1281px) {

  display:flex;
   justify-content:center;
   .flex {
   width:100%;
     
   
   
   background-color:white;
   display:flex;
   justify-content:space-between;
   
  
 .flex-1 {
      width: 20%;
     
      display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   img {
    width: 100%;
   }

 }
 .flex-2 {
      width: 80%;
      overflow: visible;
      display:flex;
      overflow: auto;
      margin-top:5rem;
   justify-content:flex-start;
   align-items:center;
   flex-direction:column;
   
   border: 1px solid red;
   height:100vh;

   .category {
     width:80%;
     height:60%;
     border: 1px solid red;
     margin-top:5%;
     justify-content:flex-start;
   align-items:center;
   flex-direction:column;
   
   border: 1px solid red;
   form {
            
            width:100%;
            height:20%;
            border: 1px solid red;
            justify-content:center;
   align-items:center;

   display:flex;

   input {
     width:70%;
     height:50%;
   }
   button{
     width:30%;
     height:50%;
     border: none;
     background-color:${colors.primary.pink2};
     color:white;
     font-size:1.3rem;
   }


   }

   .set {
         
    width:100%;
            height:80%;
            border: 1px solid green;
            display:flex;
               flex-direction:column;
              justify-content:space-between;
            .list {
                     
    width:100%;
            height:20%;
            border: 1px solid green;

            }
   }

   }
 }
   }
  
  
}
`