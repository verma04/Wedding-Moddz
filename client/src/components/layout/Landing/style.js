import styled from 'styled-components'

import { colors} from '../../../theme/color';

export const  Slider = styled.div`
  display:flex;
  justify-content:center;
position:relative;
  
 
    
  
  @media (min-width: 1281px) {
    
       
    .center {
     width:10rem;
     height:45rem;
    
      width:100%;
      -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          .img-1 {
            position: relative;
    .img-wrapper {
      
      box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    img {
      width:100%;
     height:45rem;
   
    }
   
    
   }
   
          }
          
          .input-field {
           
            position:fixed;
    width:100%;
    top:0%;
z-index:1;
          }
 

  }
  .carousel .control-dots .dot {
    transition: opacity .25s ease-in;
    opacity: .3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgba(0,0,0,0.9);
    background: ${colors.button.darkBrown};
    border-radius: 0%;
    width: 5rem;
    height: 0.4rem;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
}
  
  }
  
`