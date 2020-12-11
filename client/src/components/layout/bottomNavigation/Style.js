import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Navigation = styled.nav`
display:flex;
justify-content:center;

@media  (max-width: 767px) {
  
  .flex {
    position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height:10%;
  border: 3px solid #73AD21;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:${colors.text.dark};
  a {
      width:25%;
      border: 3px solid #73AD21;
      height:100%;
      display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
   
   h4 {
       color:white;
       font-size:1rem;;
   }
   i {
       color:white;
       font-size:1rem;;
   }
  }

  }
 

}
@media (min-width: 768px) and (max-width: 1280px) {
    display:none;

 
}
@media (min-width: 1281px) {

    display:none;

 
}
`