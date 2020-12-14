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
    margin-top:4rem;

    .flex {
        width:60%;
        height:90rem;
        box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.19);
        background-color:white;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:column;

  .head {
      width:100%;
      height:10%;
      border:1px solid red;
      display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  
  h2 {
      font-size:2rem;
      font-weight:1000
  }

  }

  .cover {
      width:100%;
      height:15%;
      border:1px solid red;
      display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

      .img {
          width:90%;
          height:80%;
          display:flex;
  justify-content:center;
          img {
            
              height:90%;
              opacity: 0.1;
          }
   
      }
      label {
   cursor: pointer;
background-color:${colors.primary.pink1};
color:white;
padding:0.5rem;
border-radius:10px;
   /* Style as you please, it will become the visible UI component. */
}

#upload-photo {
   opacity: 0;
   position: absolute;
   z-index: -1;
}

  }
  form {
 
      width:100%;
      height:75%;
      border:1px solid red;
      display:flex;
      justify-content:center;
    align-items:center;
    flex-direction:column;
    .input {
        
        width:100%;
      height:90%;
      border:1px solid red;
      display:flex;
      justify-content:space-between;
    align-items:center;
    flex-direction:column;
      .box {
        box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.19);
        display:flex;
      justify-content:center;
    flex-direction:column;
    height:15.8%;
    width:80%;
    
    .data {
        padding-left:2rem;
        height:30%;
        
        display:flex;
      justify-content:center;
    flex-direction:column;
    font-weight:900;
    
    }
    .check {
        
        height:70%;
        padding-left:2rem;
        display:flex;
      justify-content:flex-start;
    
     ul {
         
     li {
         height:25%;
         color:	#505050;
     }
     }
    }

    .type {
        
        height:70%;
        padding-left:2rem;
        display:flex;
      justify-content:flex-start;
      align-items:center;
     
      input {
         width:80%;
         height:80%;
         padding-left:2rem;
         
      } 
    }


      }
    }
    .btn {
        
        border:1px solid red;
        height:10%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;

        button {
            width:30%;
            height:50%;
            border:none;
            color:white;
            font-size:1.3rem;
             background-color:${colors.primary.pink2}

        }
        
    }
  }


    }

  
  
}
`