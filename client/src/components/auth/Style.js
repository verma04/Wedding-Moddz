import styled from 'styled-components'
import { colors } from '../../theme/color';


export const LoginBox = styled.section` 

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100%;
@media (max-width: 767px) {




}



   @media (min-width: 768px) and (max-width: 1280px) {

     }



 

    


   
  
   @media (min-width: 1281px) {
     margin-top:10rem;
       
       .row {
           margin-top:5rem;
        width:30rem;
     
        height:30rem;
        
        display:flex;
        justify-content:space-between;
        flex-direction:column;
   
        .login-btn {
            width:30rem;
      
      height:30%;
      
      display:flex;
      justify-content:space-evenly;
      flex-direction:column;
      button {
          display:flex;
          justify-content:center;
          background-color:#FFB6C1;
          border: none;

          h2 {
              padding-top:1rem;
              color:white;
              font-family: Quata;
          }
      }


        }
        .or-separator {
    position: relative;
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-family: "Varela Round", sans-serif;
    font-weight: 400;
    font-size: 13.5px;
    color: rgb(166, 169, 171);
    margin-top: 8px;
    margin-bottom: 8px;
    
}
.or-separator::before {
    left: 0px;
}
.or-separator::before, .or-separator::after {
    width: calc(50% - 16px);
    position: absolute;
    height: 1px;
    top: 24px;
    background-color: rgb(166, 169, 171);
    content: "";
}
        

    form {
        width:30rem;
      
      height:70%;
      
      display:flex;
      justify-content:space-evenly;
      flex-direction:column;
      
      .input {
        
        background-color:white;
        display:flex;
      justify-content:space-evenly;
      flex-direction:column;
      align-items:center;

      height:70%;
      .input-field {

        
        display:flex;
      justify-content:space-evenly;
      flex-direction:column;
        align-items:center;
        width:80%;
      
      height:40%;
       input {
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
          background-color:${colors.primary.pink2};
          color:white;
          font-size:1.3rem;
          height: 3rem;
          margin-top: 2rem;


      }
    }
        
       }
       
       .bottom {
           margin-top:2rem;
         
          height:5rem;
        text-align:center;
        display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  h3 {
      a {
          color:${colors.primary.pink1};
          cursor: pointer;
      }
    
  }
  h4 {
        color:${colors.primary.pink1};
        cursor: pointer;
      }

       }


       .bg {
      position:absolute;
      position: absolute;
    top: 2rem;
    right: -4rem;
    z-index: -1;
      img {
          width:30rem;
      }
  }
  .bg1 {
    position:absolute;
    bottom: 2rem;
    left: -4rem;
    z-index: 0;
    z-index: -1;
    position: absolute;
    img {
          width:30rem;
      }
  }


   }



 
`