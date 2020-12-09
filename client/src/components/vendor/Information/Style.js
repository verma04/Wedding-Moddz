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
   scroll-snap-type: y mandatory;
  
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
    margin:2rem;
     margin-top:7rem;
      width: 80%;
      overflow: visible;
      height:90vh;
      display:flex;
      overflow: auto;
   justify-content:flex-start;
   align-items:center;
   flex-direction:column;

 
 
   background-color:#efefef;
     
     .head {
         margin-top:2rem;
         width:100%;
    
         display:flex;
         justify-content:flex-start;
         align-items:center;
          flex-direction:column;
         height:20rem;
        
         h2 {
             height: 4rem;
             width:100%;
            padding-left:1rem;
         }
         .com {
            width:80%;
                 height: 9rem;
                 border: 1px dotted;
                 margin:2rem;
                 display:flex;
         justify-content:flex-start;
         align-items:center;
          flex-direction:column;
               h3 {
               
               width:100%;
               height: 40%;
               padding-left:2rem;
               margin-top:2rem;
                     
               }
               ul {
                width:100%;
               height: 60%;
              
               padding-left:4rem;
               li {
                   padding-top:0.5rem;
               }

               }
         }
        
     }

 .data {
     width:100%;
   height:100%;

     form {

         h2 {
            width:100%;
    
    display:flex;
    justify-content:flex-start;
    align-items:center;

height: 3rem;
    background-color:white;
         }
           .input-field {
            border-bottom: 1px dotted;
            display:flex;
            justify-content:space-between;
            align-items:center;
            height:4rem;
            input {
                height:2.5rem;
                width:70%;
                margin-right:2rem;
                
            }
            textarea {
                height:10rem;
                width:70%;
                margin-right:2rem;
            }
             label {
                 padding-left:2rem;
                 font-weight:900;
                 width: 20%;
             }
           }

           .checkbox {
         
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:column;
            height:10rem;
            width:100%;
            border-bottom: 1px dotted;
            padding-bottom:2rem;
          
           
             label {
                 padding-left:2rem;
                 font-weight:900;
                 width: 100%;
                 height: 40%;
                 padding-top:2rem;
                 align-items:center;
             }
             .box {
                 width:100%;
                display:flex;
            justify-content:flex-start;
            align-items:center;
           height: 30%;
           padding-left:2rem;
            
             }
           }
           .btn {
            margin:2rem;
             
             display:flex;
             justify-content: flex-end;
           button {
             color:white;
             border:none;
             background-color:${colors.primary.pink1};
             color: white;
    font-size: 2rem;
    height: 3rem;
    width: 16rem;
    border: none;
    background-color: #F0326E;
           }
           }
     }
    
     #add {
        height:20rem;
     }
     
  
    
 }

  
     
      
   

 }
   }
  
}
`