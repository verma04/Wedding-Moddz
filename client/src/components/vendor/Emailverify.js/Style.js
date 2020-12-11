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

   
    .flex {
      border-radius:10px;
                        z-index:1;
                        background-color:white; 
      margin-top:5%;
     display:flex;
     justify-content:center;
     align-items:center;
     flex-direction:column;
     width:70%;
     height:40rem;
     
     box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.19);
     .head {
         height:40%;
         width:100%;
         
         display:flex;
     justify-content:center;
     align-items:center;
     flex-direction:column;
     img {
         width:20%;
         height:40%;
         
       
     }
     .data {
            width:100%;
         height:50%;
         
         display:flex;
     justify-content:space-around;
     align-items:center;
     flex-direction:column;
     h2 {
         font-weight:1000;
     }
     
     h3 {
         a {
             color:${colors.primary.pink2};
             cursor: not-allowed;
         }
     }
         
         }

     }

     form {
        height:40%;
         width:70%;
         box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.19);
         display:flex;
     justify-content:space-evenly;
     align-items:center;
      flex-direction:column;

      .input {
        width:100%;
        display:flex;
     justify-content:space-evenly;
     align-items:center;
  input {
    height: 5rem;
    width: 3rem;
    padding-left: 2rem;
    outline: none;
    font-size: 2rem;
    background-color: #f7b5c1;
    border: none;
    border-bottom: 6px solid #F0326E;
  }
 
     }
     button {
    border:none;
    color:white;
    background-color:${colors.primary.pink1};
    font-size: 1.2rem;
    width: 10em;
    height: 3rem;
  }
     }

     .footer {
        height:20%;
         width:100%;
         
                display:flex;
                justify-content:center;
                align-items:center;
                h2 {
                    font-weight:1000;
                     color:${colors.primary.pink2};
                }
     } 

    }

 

    .bg {
      position:absolute;
      position: absolute;
    top: 2rem;
    right: -4rem;
    z-index: -1;
      img {
       
    width: 18rem;

      }
  }
  .bg1 {
    position:absolute;
   
    left: -4rem;
    z-index: 0;
    z-index: -1;
    position: absolute;
    bottom:2rem;
    img {
          
    width: 18rem;

      }
  }
  

}
`