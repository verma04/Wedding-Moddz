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

  
  .flex {
      width:80rem;
      display:flex;
justify-content:center;

.flex-1 {
    margin-top:4rem;
    display:grid;
    grid-template-columns:auto auto auto auto;
    grid-gap:2rem;
    .list {
        width:18rem;
        height: 22rem;
       border-radius: 10px;
      
        display:flex;
justify-content:center;
flex-direction:column;
box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.19);

.up {
    width:100%;
    height: 85%;
  
    display:flex;
justify-content:center;
flex-direction:column;
.wrapper {
    width:100%;
    height: 70%;
    position: relative;
   
    img {
        width:100%;
        height: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    .about {
        position: absolute;
    bottom: 0.2rem;
    right: 0;
    img {
        width:76%;
        height: 100%;
       
    }
 
    }
    :hover .tooltiptext   {
  visibility: visible;
}
:hover  .triangle-left   {
  visibility: visible;
}


    .tooltiptext {

     visibility: hidden;
     width: 15rem;
    height: 6rem;
    background-color: white;
    color: black;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    top: 3.5rem;
  

    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.19);
  display:flex;
  justify-content:space-evenly;
  flex-direction:column;
  align-items:center;
  padding:0.5rem;
  p {
      font-size:0.8rem;
  }
  h4 {
  font-weight:900;
  }
}

/* .triangle-left {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 29px solid transparent;
    border-right: 50px solid white;
    border-bottom: 35px solid transparent;
    bottom: -0.6rem;
    left: 17.2rem
} */

}
.data {
    width:100%;
    height: 30%;
    border-bottom: 1px dotted #707070;
    display:flex;
justify-content:center;
flex-direction:column;
-webkit-tap-highlight-color: rgba(0,0,0,0);

.data-1 {
    width:100%;
    height: 50%;
  
    display:flex;
justify-content:space-between;
align-items:center;

li {
    margin-left:0.5rem;
    margin-right:0.5rem;
    list-style:none;
    font-size:0.8rem;
    color:#707070;
    
}
h4 {
    margin-left:0.5rem;
    width:70%;
}
i {
    font-size: 0.8rem;
    margin-right:0.5rem;
    background-color:#3CB371;
    color:white;
    padding:0.2rem;
    span {
        padding-left:0.5rem;
    }
}


}
    
}


}
.down {
    width:100%;
    height: 15%;
    
    display:flex;
justify-content:center;
align-items:center;




display:flex;
justify-content:flex-start;
.price {
    color:${colors.primary.pink1};
    font-weight:900;
    padding-left:1rem;
}
.plate {
    color:${colors.primary.pink1};
    margin-left:0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size:1rem;
}


}

    }

  .list:hover   {
    box-shadow: 0 1rem 1rem 0 rgba(0,0,0,0.2), 0 1rem 1rem 0 rgba(0,0,0,0.19);
      
          transition: 1s all ease-in-out; 
}
  

}
  }
 
   
}
`