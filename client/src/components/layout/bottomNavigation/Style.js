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
 
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:${colors.text.dark};
 
  .navbar {
  
  }

.navbar__link {
    width:25%;
     
     height:100%;
     display:flex;
 justify-content:space-around;
 align-items:center;
 flex-direction:column;

  .fas {
    font-size: 1.3rem;
    color:white;
  
  
  }
  h4 {
        color:white;
    }
}

.navbar__link:hover {
  transform: translateY(-2px);
}

.navbar__link--active {
    color: ${colors.primary.pink1};
  transition: border-bottom .5s ease-in-out;
  .fas {
      color:${colors.primary.pink1};
  }
  h4 {
    color:${colors.primary.pink1};
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