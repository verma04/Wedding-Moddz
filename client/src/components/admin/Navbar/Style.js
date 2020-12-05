import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Nav = styled.nav`
display:flex;
justify-content:center;
@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

 
}
@media (min-width: 1281px) {

   display:flex;
   justify-content:center;
   position:fixed;
   top:0;
   width:100%;
   -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
   .flex {
   width:100%;
  
   height:5rem;
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
    padding-left: 2rem
   }

 }
 .flex-2 {
      width: 20%;
   
      display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   .right {
       display:flex;
       justify-content:center;
       span {
        padding-top: 1.3rem;
    font-size: 1.5rem;
       }
       img {
        width: 4rem;
       }
   }

 }
   }
  
}
`