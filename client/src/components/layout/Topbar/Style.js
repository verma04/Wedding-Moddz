import styled from 'styled-components'

import  { colors } from '../../../theme//color';

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
                   border: 1px solid red;

                      
                      
                  }
            }

            .right {
               
        
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
background-color:${colors.primary.pink1};
          .flex0 {
            
          }

            .flex {
                width: 80em;
                height:2.5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;

                  .left {
                     width:50%;
                  
                   display:flex;
                   justify-content:space-between;
                   align-items:center;
                   h2 {
                       font-size:1rem;
                       color:white;
                   }
                   select {
                    height: 1.5rem;
    width: 12rem;
    border-radius: 5px;
    border: none;
                   }

                  }
            }

            .right {
                

                width:50%;
               
                display:flex;
                align-items:center;
                   justify-content: flex-end;
                  
                   h2 {
                       color:white;
                       font-size:1rem;
                   }
}

}
`