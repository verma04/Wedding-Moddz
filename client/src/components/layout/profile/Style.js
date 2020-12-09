import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`


@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {



}
@media (min-width: 1281px) {

    display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
  .flex {
      width:80rem;
      

   
  .flex-1 {
  width:100%;
  display:flex;
  justify-content:space-evenly;
  padding:1rem;
  .left {
      width:58%;
      height:80rem;
      border: 1px solid red;
      display:flex;
  justify-content:space-evenly;
  flex-direction:column;

  .left-1 {
      width:100%;
      height: 45%;
      position: relative;
      border: 1px solid red;
       display:flex;
  justify-content:flex-start;
  flex-direction:column;

   .img-wrapper {
       width:100%;
       height:70%;
       border: 1px solid red;
   }
   .top {
       position: absolute;
       width:80%;
       height: 14rem;
       border: 1px solid green;
       left:10%;
       top:22rem;
   }



  }
  .left-2 {
      width:100%;
      height: 5%;
      border: 1px solid red;
  }
  .left-3 {
      width:100%;
      height: 45%;
      border: 1px solid red;
  }
  }
  .right {
    display:flex;
  justify-content:space-evenly;
  flex-direction:column;
      width:38%;
      height:70rem;
      border: 1px solid red;


  .right-1 {
      width:100%;
      height: 10%;
      border: 1px solid red;
  }
  .right-2 {
      width:100%;
      height: 10%;
      border: 1px solid red;
  }
  .right-3 {
      width:100%;
      height: 38%;
      border: 1px solid red;
  }
  .right-4 {
      width:100%;
      height: 38%;
      border: 1px solid red;
  }
  
  }

  }
    
    .flex-2 {
        width:80rem;;
        height:25rem;
        border: 1px solid red;
        margin:2rem;
        display:flex;
        justify-content:center;
        flex-direction:column;
        .about {
            display:flex;
        justify-content:flex-start;
        align-items:center;
        border: 1px solid red;
        height:15%;
        }
        .para {
            display:flex;
        justify-content:flex-start;
        align-items:center;
        border: 1px solid red;
        height:40%;
        }
        .detials {

  display:flex;
        justify-content:flex-start;
        align-items:center;
        border: 1px solid red;
        height:45%;
        }
    }

    .flex-3 {
        width:80rem;;
        height:30rem;
        border: 1px solid red;
        margin:2rem;
        margin-bottom:0rem;
        display:flex;
        justify-content:center;
        flex-direction:column;
         .reviews {
            display:flex;
        justify-content:flex-start;
        align-items:center;
        border: 1px solid red;
        height:15%;
         }
         .box {
            display:flex;
        justify-content:flex-start;
        align-items:center;
        border: 1px solid red;
        height:85%;
        .box-1 {
            height:100%;
            width:50%;
            border: 1px solid red;
        }
        .box-2 {
            height:100%;
            width:50%;
            border: 1px solid red;
            display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .share {
            height:40%;
            width:100%;
            border: 1px solid red;
        }
        .input {
            height:60%;
            width:100%;
            border: 1px solid red;
        }
        }
         }

    }
      

    .comment{
        width:80rem;
        
        border: 1px solid red;
        margin:2rem;
        display:flex;
        justify-content:center;
        flex-direction:column;
        margin-top:0rem;

        .list{
            width:100%;
         height:10rem;
        border: 1px solid red;
        
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;
        .list-1 {
            display:flex;
        justify-content:center;
        border: 1px solid red;
        width:100%;
        height:28%;
        }
        .list-2 {
            display:flex;
        justify-content:center;
        border: 1px solid red;
        width:100%;
        height:30%;
        }
        .list-3 {
            display:flex;
        justify-content:center;
        border: 1px solid red;
        width:100%;
        height:38%;
        }
       
        }
    }

  }
 
   
}
`