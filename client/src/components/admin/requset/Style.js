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
        justify-content:space-around;
        align-items:center;
     
        .grid1 {
           width:30%;
           height:20rem;
           position:relative;
            margin-top:2rem;
   border-radius:0.75rem;
           border: initial;
    background:#303030;
    display:flex;
    flex-direction:column;
   
    justify-content:space-around;
    cursor: pointer;
  
    box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
  
  .img {
     width:100%;
     display:flex;
     justify-content:center;
     height:40%;
   
     img {
      
        height:100%;
     }
  }
  .name {
   margin-left: 3%;
   color: #fff;
   h2 {
      color: #999;
      font-size: 1rem;
   }
  }
  .edit {
     position:absolute;
     top:3%;
     right:1%;
     display:flex;
     justify-content:space-around;
     width:38%;;
  
     height:10%;
     align-items:center; 
     button {
      color: #999;
      border: 1px solid  #999;
      cursor: pointer;
     }
  }
   
        }
        .add {
           width:30%;
           height:20%;
            position:absolute;
            top:1rem;
           display:flex;
           top: -4rem;
    right: -84px;
        justify-content:center;
        align-items:center;
          i {
            font-size: 3rem;
            color: #303030;
            cursor: pointer;
            
          }
        }
    }
  

   
 }
   }
  
  
}
`