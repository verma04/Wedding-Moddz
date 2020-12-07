import {  createGlobalStyle } from "styled-components";

import pala from './comman/Comfortaa-VariableFont_wght.ttf';

import {colors } from './color';




 export default   createGlobalStyle`

 @font-face {
  font-family: Comfortaa ;
  src: url(${pala}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
a { 
  text-decoration: none; 
  color:white;
font-family: Quata;
color:${colors.primary.dark1};

} 

p {
  line-height: 1.6;
    font-size: 1.3rem;
    text-align: center;
    font-family: Comfortaa ;
    color :  ${colors.primary.dark};
   
}
  body {
      background-color:#fbfbfb;
     font-family: Comfortaa ;
     
      font-family: Comfortaa ;
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
 font-family: Comfortaa ;
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
   
    color:${colors.primary.dark1};
  }

  h3 {
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
    color:${colors.primary.dark1};
  }


  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
    color:${colors.primary.dark1};
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
    color:${colors.primary.dark1};
  }

  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
    color:${colors.primary.dark1};
  }

  p {
    font-size: 0.9rem;
    line-height: var(--line-height-md);
    color:${colors.primary.dark1};
  }
  select {
   font-family: Comfortaa ;
  }
  
  .date {
   font-family: Comfortaa ;
  }
  .card {
    border-radius:10px;
  }

  button {
border-radius:5px;
font-family:Quata;
  }
  input {
   font-family: Comfortaa ;
    border:1px solid #EFEAE4;
    background-color:#FFFFFF;
    color:${colors.primary.dark1};
  }
  span {
   font-family: Comfortaa ;
  }
  i {
    color:${colors.button.darkBrown};
  }
  @media only screen and (max-width: 767px) {
    body {
     
    }
  }

  @media only screen and (min-width: 768px) {
    body {
     
    }
    h1 {
      font-size: 1.75rem;
      color:${colors.primary.dark1};
    }

    h2 {
   
      color:${colors.button.darkBrown};
      color:${colors.primary.dark1};
    }

    h3 {
      font-size: 1.25rem;
      color:${colors.primary.dark1};
    }
  }
  a { 
    text-decoration: none; 
    color:${colors.button.darkBrown};
   font-family: Comfortaa ;
} 
button {
 font-family: Comfortaa ;
}

li {
  cursor: pointer;
}
img {
  cursor: pointer;
}

 `;









