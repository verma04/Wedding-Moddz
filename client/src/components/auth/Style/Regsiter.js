import styled from 'styled-components'
import { colors } from  '../../../theme/color'


export const RegisterBox = styled.section` 

  display:flex;
  justify-content:center;
  align-items:center;

  width:100%;
@media (max-width: 767px) {




}



   @media (min-width: 768px) and (max-width: 1280px) {

     }



 

    


   
  
   @media (min-width: 1281px) {
     margin-top:5rem;
       
       .flex {

           display:flex;
           justify-content:center;

           width:60rem;
           height:60em;
         

         
           .row {
            height:100%;
               width:70%;
               box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
               background-color:#fbfbfb;
               display:flex;
               justify-content:center;
               flex-direction:column;
               align-items:center;
               .head {
                display:flex;
               justify-content:center;
               flex-direction:column;
               align-items:center;
               width:100%;
               height:10%;
               
               h2 {
                   font-weight:1000;
               }
               }
               form {
             width:100%;
             background-color:white;

      height:90%;
      
      display:flex;
      justify-content:space-evenly;
      flex-direction:column;
      align-items:center;
      
      .input {
        
       
        display:flex;
      justify-content:space-evenly;
      flex-direction:column;
      align-items:center;
  width:100%;
      height:90%;
    
      .input-field {

        
        display:flex;
      justify-content:space-evenly;
      flex-direction:column;
        align-items:center;
        width:80%;
       
      height:40%;
       input {
   width:100%;
   height:2.5rem;
   padding-left:2rem;
   font-size:1rem;
   font-weight: 400;
   line-height: 27px;
   letter-spacing: normal;
   font-family: 'Comfortaa', cursive;
   border-radius: 4px;
       }
       select {
        width: 107%;
   height:2.5rem;
   padding-left:2rem;
   font-size:1rem;
   font-weight: 400;
   line-height: 27px;
   letter-spacing: normal;
   font-family: 'Comfortaa', cursive;
   border-radius: 4px; 
       }
       option {
        width:100%;
   height:3rem;
   padding-left:2rem;
   font-size:1rem;
   font-weight: 400;
   line-height: 27px;
   letter-spacing: normal;
   font-family: 'Comfortaa', cursive;
   border-radius: 4px;
       }
       label {
           width:100%;
           text-align:left;
           color: rgb(166, 169, 171);
       }
      }
      }

      button {
        border: none;
    width: 87%;
    background-color: #FF5976;
    color: white;
    font-size: 1.3rem;
    height: 20%;
    height: 3rem;
    /* margin-top: 2rem; */
    height: 6%;
      }

               }
               .footer {
                display:flex;
              
               width:80%;
               height:10%;
               border: 1px  dotted;
               display:flex;
               justify-content:space-around;
               margin-top: 2rem;
    margin-bottom: 2rem;
              
               align-items:center;
               button {
                   border:none;
                   font-size:1.2rem;
                background-color:${colors.primary.pink1};
                color:white;
                padding: 0.7rem 0.5rem;
               }
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
    img {
          
    width: 18rem;

      }
  }
   }

 
`