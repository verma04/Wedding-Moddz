import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Footerr = styled.div`
background-color:white;

@media  (max-width: 767px) {
display:none;
}
@media (min-width: 768px) and (max-width: 1280px) {



}
@media (min-width: 1281px) {
  box-shadow: 0 3px 3px 3px rgba(0,0,0,0.2), 3px 0px 0px 3px rgba(0,0,0,0.1);
    position:relative;
    display:flex;
    justify-content:center;
    margin-top:5rem;
    z-index:-1;
   background-color:${colors.primary.darkBrown};

  .flex {
    z-index: 1;
      display:flex;
    justify-content:center;
     flex-direction:column;
     height:30rem;
    
     width:80rem;
     padding-top:3rem;
     

     .flex-1 {
         height:50%;
        
         display:flex;
         justify-content:space-between;
        .flex-11 {
        width:25%;
        
          display:flex;
         justify-content:space-between;
           flex-direction:column;
           h3 {
               height:20%;
               
               display:flex;
         justify-content:center;
           flex-direction:column;
           font-weight:900;
           color:${colors.primary.yellow};
           }
            ul {
                height:80%;
             
               display:flex;
         justify-content: flex-start;
           flex-direction:column;
            li {
                 height:20%;
                 color:white;
            }
            }
        }
     }
    
     .flex-2 {
         height:10%;
        
         display:flex;
         justify-content:space-between;
         .flex-22 {
            display:flex;
         justify-content:center;
           flex-direction:column;
           h4 {
            color:white;
           }
           a {
            color:${colors.primary.pink1};
           }
           i {
            color:${colors.primary.pink1};
           }
         }
     }
   
      
  }

  .bg {
      position:absolute;
      position: absolute;
    top: 2rem;
    right: -4rem;
      img {
          width:10rem;
      }
  }
  .bg1 {
    position:absolute;
    bottom: 2rem;
    left: -4rem;
    z-index: 0;
    position: absolute;
    img {
          width:10rem;
      }
  }

}
`