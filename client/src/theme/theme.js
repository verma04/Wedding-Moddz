import {  createGlobalStyle } from "styled-components";

import pala from './comman/Comfortaa-VariableFont_wght.ttf';

import {colors } from './color';




 export default   createGlobalStyle`

 @font-face {
  font-family: Quata  ;
  src: url(${pala}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
a { 
  text-decoration: none; 
  color:white;
font-family: Quata;

} 

p {
  line-height: 1.6;
    font-size: 1.3rem;
    text-align: center;
  font-family: Quata;
    color :  ${colors.primary.dark};
    font-family: 'Comfortaa', cursive;
}
  body {
      background-color:#F1F1F1;
      font-family:Quata;
      overflow-x: hidden;

      ::-webkit-scrollbar {
  width: 10px;
}

/* Track */

 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${colors.button.brown}; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${colors.button.darkBrown}; 
}
      
  }
  ul {
    list-style: none;
    li {
  
    cursor: pointer;
  font-family: Quata;
    color :  ${colors.primary.dark}

  }
  }
  img {
  cursor: pointer;
}

button {
  cursor: pointer;
}
 

  h1 {
    font-size: 1.65rem;
    line-height: var(--line-height-lg);
  }

  h2 {
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
    color:${colors.button.darkBrown};
  }

  h3 {
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
  }


  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
  }

  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
  }

  p {
    font-size: 0.9rem;
    line-height: var(--line-height-md);
    color:${colors.button.darkBrown};
  }
  select {
    font-family:Quata;
  }
  
  .date {
    font-family:Quata;
  }
  .card {
    border-radius:10px;
  }

  button {
border-radius:5px;
font-family:Quata;
  }
  input {
    font-family:Quata;
    border:1px solid #EFEAE4;
    background-color:#FFFFFF;
  }
  span {
    font-family:Quata;
  }
  i {
    color:${colors.button.darkBrown};
  }
  @media only screen and (max-width: 767px) {
    body {
      overflow-x: hidden;
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      overflow-x: hidden;
    }
    h1 {
      font-size: 1.75rem;
    }

    h2 {
   
      color:${colors.button.darkBrown};
    }

    h3 {
      font-size: 1.25rem;
    }
  }
  a { 
    text-decoration: none; 
    color:${colors.button.darkBrown};
    font-family:Quata;
} 
button {
  font-family: Quata;
}

li {
  cursor: pointer;
}
img {
  cursor: pointer;
}

 `;









