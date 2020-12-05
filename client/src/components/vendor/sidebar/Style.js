import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Side = styled.aside`
display:flex;
justify-content:center;
@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

 
}
@media (min-width: 1281px) {

   
    position:fixed;
   
    height:100vh;
    left:0;
    width:20%;
    top:7rem;
    background-color:		#282828;

    
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction:column;
  flex-direction:flex;
  border-radius: 4px;
  padding-top:1rem;
 


.navbar__link {
    height: 4rem;
  
 padding-left:10%;
  width: 90%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:row;
  color:  white;
  border-bottom: 3px solid transparent;
  h3 {
    padding-left:1rem;
  }
  
}

.navbar__link:hover {


  background-color:#252c35;
  i {
    color:${ colors.primary.pink1};
  }
}

.navbar__link--active {
  
 

  background-color:#252c35;
  i {
    color:${ colors.primary.pink1};
  }
}
  
}
`