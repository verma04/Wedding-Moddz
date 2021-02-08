import styled from 'styled-components'

import  { colors } from '../../../../theme/color'

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
     
   height:100%;
   
   background-color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   
  
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
      width: 70%;
  
      display:flex;
     
      margin-top:7rem;
   justify-content:space-between;
   align-items:center;
   flex-direction:column;
   align-items:center;
 



   .top {
   
     width:100%;
     height:3rem;;
     border-bottom: 1px solid rgb(190, 190, 190);
     display:flex;
     justify-content:flex-start;
     align-items:center;
     position: relative;
        
        h3 {
          text-transform: uppercase;
    width: 10%;
    color: rgb(152, 135, 143);
    border-right: 1px solid rgb(152, 135, 143);
    text-align: center;
        }

     i {
       position:absolute;
       right:2%;
       font-size:2.5rem;
       cursor: pointer;
       color:${colors.primary.pink2}
     }

   }

   .mid {
     width:100%;
     

    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;


    .city {
      
      background: #F5F5F5;
      padding:1rem;
      border-radius: 10px;
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
       margin-top:1rem;
       margin-bottom:1rem;
       -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
  position: relative;
      .img {
        height:13rem;
   
      width:90%;
      img {
        width:100%;
        height:100%;
        border-radius: 10px;
      }
      
      }
      .des {
        min-height:4rem;
     
      width:90%;
      display:flex;
      justify-content:center;
      align-items:center;
      .cityName {
       
        width:50%;
        min-height:4rem;
        display:flex;
        justify-content:flex-start;
        flex-direction:column;

        h3 {
          margin:1rem;
       font-weight:900;
        }
        p {
          text-align:left;
          margin:1rem;
        }
      }
      
    

      }

      .edit {
   position: absolute;
   top:2%;
   right:2%;
   width:10rem;
   display:flex;
   justify-content:space-evenly;
   button{
     font-size:0.9rem;
     padding:0.4rem;
   }

      }
    }

   }
  

   
 }
   }
  
  
}
`