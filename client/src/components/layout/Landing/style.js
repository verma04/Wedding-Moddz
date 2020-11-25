import styled from 'styled-components'

import { colors} from '../../../theme/color';

export const  Slider = styled.div`
  display:flex;
  justify-content:center;

  .center {
    width:100%;
    -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          .img-1 {
            position: relative;
    .img-wrapper {
      
    img {
      width:100%;
  
      
    }
   
    
   }
   .hero-section {
    top:1rem;
      position:absolute;
     
   h2 {
      
      color:#4E372A;
     
      text-align:left;
      margin-left:3rem;
   
      line-height:1.2;
    }
    button {
     
      background-color:white;
      border:none;
   
      border-radius:10%;
      margin-right:20rem;
      margin-top:0.5rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      color:${colors.button.darkBrown};
    
    }
          }
          }
     
  }
  @media (max-width: 767px) {
  .carousel .control-dots .dot {
        transition: opacity .25s ease-in;
        filter: alpha(opacity=30);
        transition: opacity .25s ease-in;
        opacity: .3;
        filter: alpha(opacity=30);
        box-shadow: 1px 1px 2px rgba(0,0,0,0.9);
        background: #fff;
        /* border-radius: 50%; */
        width: 2rem;
        height: 0.3rem;
        cursor: pointer;
        display: inline-block;
  }
  .center {
    width:100%;
    -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          .img-1 {
            position: relative;
    .img-wrapper {
      
    img {
      width:100%;
      height:10rem;
    }
   
    
   }
   .hero-section {
    top:1rem;
      position:absolute;
      width:30rem;
   h2 {
   
    
    width: 21rem;
    color: #4E372A;
    font-size: 1rem;
    text-align: left;
    margin-left: 1rem;
    line-height: 1.2;
    padding-top: 1rem;
   
    }
    button {
     
      background-color:white;
      border:none;
   
      border-radius:10%;
   font-size:1.1rem;
    
      margin-top:0.5rem;
      padding: 0.2rem 0.5rem 0.2rem 0.5rem;
      color:${colors.button.darkBrown};
    }
          }
          }
          .carousel .control-dots .dot {
    transition: opacity .25s ease-in;
    opacity: .3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgba(0,0,0,0.9);
    background: ${colors.button.darkBrown};
    border-radius: 0%;
    width: 3rem;
    height: 0.3rem;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
}
  }
}
     
  @media (min-width: 768px) and (max-width:1280px) {
    .center {
     height:100vh;
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
      height: 100vh;
    }
   
    
   }
   
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
    
  }
  @media (min-width: 1281px) {
       
    .center {
     height:100vh;
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
      height: 100vh;
    }
   
    
   }
   
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