import styled from 'styled-components'

import  { colors } from '../../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

 

}
@media (min-width: 1281px) {
    position: absolute;
    bottom: 2rem;
  
    top: 30rem;
    left: 1rem;
   
     width:100%;
    .head {
        width:70rem;
        padding-bottom:2rem;
        display:flex;
              justify-content:center;
              align-items:center;
              flex-direction: column;
              h2 {
                font-size: 2.5rem;
    font-weight: 1000;
                  color:white;
              }
              h3 {
                  color:white;
              }
    }

            .flex1 {
                width:70em;    
                height:2.5rem;
             display:flex;
             border-radius:10px;
justify-content:space-evenly;
padding-top:0.5rem;
padding-bottom:0.5rem;
background-color:white;

.flex-1{
  
    width:25rem;

    display:flex;
    justify-content:space-between;
    font-size:1rem;
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
        font-size:1rem;
        background-color:${colors.button.yellow};

    
    }
}



    

}


.flex2 {
   
                width:70em;    
                height:3.5rem;
             display:flex;
             border-radius:10px;
justify-content:space-between;

background-color:white;

.flex-4 {
    width:5%;
    background-color:${colors.primary.pink1};
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    color:white;
    font-size:1.5rem;
    
}
.flex-5 {
    width:95%;
    height:100%;
    display:flex;
    justify-content:center;;
    align-items:center;
    h2 {
        width:50%;
        
        padding-left:2rem;
        color:${colors.primary.pink1};
        font-weight:900;
    }
}

.data {
    font-size:1.5rem;
    width:50%;
    
    float:right;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding-right:2rem;
    color:${colors.primary.pink1};
}

}
}
`