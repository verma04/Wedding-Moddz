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
    position:fixed;
    width:100%;
    top: 79%;

z-index:1;
            .flex {
                width:80em;    
                height:3rem;
             display:flex;
             border-radius:10px;
justify-content:space-evenly;
padding-top:1rem;
padding-bottom:1rem;
background-color:white;

.flex-1{
  
    width:25rem;

    display:flex;
    justify-content:space-between;
    font-size:1.3rem;
    background-color:#E0E0E0;
    img {
        height: 78%;
    width: 11%;
padding-left: 0.5rem;
    padding-top: 0.4rem;
   
    }
    input {
        padding-left:1rem;
        width:80%;
        font-size:1rem;
        background-color:#E0E0E0;
        border-left: 1px solid black;
    }

} 
.flex-2 {
  
    width:25rem;
    display:flex;
    background-color:#E0E0E0;
    justify-content:space-between;
    img {
    
        height: 78%;
    width: 11%;
padding-left: 0.5rem;
    padding-top: 0.4rem;
    
    }
  
    input {
        border-left: 1px solid black;
        width:80%;
        background-color:#E0E0E0;
        padding-left:1rem;
        font-size:1rem;
    }
}
.flex-3 {
  
    width:13rem;
    button {
        width:100%;
        height:100%;
        border:none;
        font-size:1.3rem;
        background-color:${colors.button.yellow};

    
    }
}
    

}
}
`