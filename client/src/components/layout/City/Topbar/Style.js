import styled from 'styled-components'

import  { colors } from '../../../../theme/color';

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
 
    width:100%;
   
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
                     
                     .btn {
                       display:flex;
                       justify-content:space-between;
                       width:14rem;
                       background-color:white;
                       height:1.7rem;
                       align-items:center;
                       padding-left:0.5rem;
                       padding-right:0.5rem;
                       border-radius:5px;
                       h3 {
                         font-size:1rem;
                       }
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


.modal {
/* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
 /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  .modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  display:flex;
  height:25rem;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  .pop-1 {
    width:100%;
    height:20%;
  
    justify-content:center;
  display:flex;
  align-items:center;
input {
  width:90%;
  height:60%;
  border:1px solid #E8E8E8;
  border-left:none;
  font-size:1.2rem;
}
.icon {
  width:10%;
  height: 63.2%;
  border:1px solid #E8E8E8;
  justify-content:center;
  display:flex;
  align-items:center;
 justify-content:center;
 border-right:none;
 i {
   font-size:1.5rem;
 }
}


  }
  .pop-2 {
    width:100%;
    height:80%;
  
    justify-content:center;
  display:flex;
  align-items:center;

  .flex-1 {
    height:100%;
    width:33%;
  
    justify-content:center;
  display:flex;
  align-items:center;
  flex-direction:column;
  align-items:center;
  .head {
    width:100%;
    height:10%;
    
    display:flex;
    justify-content:center;
  align-items:center;
  flex-direction:column;
  h2 {
    font-size:1.2rem;
    font-weight:900;
    color:${colors.primary.pink2};
  }


  }
  ul {
    width:100%;
    height:90%;
    
    display:flex;
  align-items:flex-start;
  flex-direction:column;
  align-items:center;
  

  li {
  padding-top:1rem;
  color:#505050;
  }
  li:hover {
    color:black;
  }
 
  }
  }

  }
}


}

}
`