import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Nav = styled.nav`
display:flex;
justify-content:center;
@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

    position:fixed;
    width:100%;
    top:0%;
z-index:1;

            .flex {
                width:48em;    
             display:flex;
justify-content:space-between;
                  .left {
                      margin-top:1.4rem;
                      width:16rem;
                      img {
                          width:100%;
                      }
                  }
            }

            .right {
                margin-top:2.5rem;
        
    .navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #eceff1;
}

.navbar__link {
    margin: 1em;
    
    /* font-family: 'Roboto',sans-serif; */
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-letter-spacing: .3em;
    -moz-letter-spacing: .3em;
    -ms-letter-spacing: .3em;
   
    text-indent: .3em;
    color:  white;
    border-bottom: 3px solid transparent
}

.navbar__link:hover {
  transform: translateY(-2px);
}

.navbar__link--active {
    color: ${colors.primary.pink1};
  transition: border-bottom .5s ease-in-out;
}
button {
    background-color:${colors.primary.pink1};
    color:${colors.primary.white};

    border: none;
  
    padding: 0.5rem 1rem;
   
    border-radius:10px;
}
            
}

}
@media (min-width: 1281px) {
    position:fixed;
    width:100%;
    top:0%;
z-index:1;
background-color:white;
            .flex {
                width:80em;    
             display:flex;
justify-content:space-between;
margin-bottom:2rem;
                  .left {
                      margin-top:1rem;
                      width:19rem;
                      img {
                          width:100%;
                      }
                  }
            }

            .right {
                margin-top:2.5rem;
        
    .navbar {
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: #eceff1;
}

.navbar__link {
    margin: 1em;
    font-size: 1.3em;
    /* font-family: 'Roboto',sans-serif; */
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-letter-spacing: .3em;
    -moz-letter-spacing: .3em;
    -ms-letter-spacing: .3em;
    letter-spacing: .3em;
    text-indent: .3em;
    color:  black;
    border-bottom: 3px solid transparent
}

.navbar__link:hover {
  transform: translateY(-2px);
}

.navbar__link--active {
    color: ${colors.primary.pink1};
  transition: border-bottom .5s ease-in-out;
}
button {
    background-color:${colors.primary.pink1};
    color:${colors.primary.white};

    border: none;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    border-radius:10px;
}
            
}

}
`