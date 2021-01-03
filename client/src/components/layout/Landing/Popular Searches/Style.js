
import styled from 'styled-components'

import { colors} from '../../../../theme/color';

export const  Item = styled.div`
  display:flex;
   justify-content:center;
   .center{
     width:100%;
   }
   @media (max-width: 767px) {
     display:none;
   }
 @media (min-width: 1281px) {
   display:flex;
   justify-content:center;
   .centerr{
     width:80rem;
      margin-top:5rem;
     .img-wrapper {
       display:flex;
        justify-content:center;
        border-radius:10px;
        padding-bottom:3rem;
       img {
         position:relative;
       
  width:80%;
  height:50%;
  border-radius:10px;
  background-color: rgba(0,0,0,0.5);
  -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          transition: 1s all ease-in-out; 
       }
   
       .fade {
        top:13rem;
        position:absolute;
        
       h2 {
        
       
        left: 6rem;
    color: white;
    font-weight: 1000;
    font-size: 1.3rem;
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
        } 

        .react-multiple-carousel__arrow {
    position: absolute;
    outline: 0;
    transition: all .5s;
    border-radius: 35px;
   
    border: 0;
    background: pink;
    min-width: 43px;
    min-height: 43px;
    opacity: 1;
    cursor: pointer;
   }
   .react-multiple-carousel__arrow:hover {
    background: ${colors.primary.pink2};
}
   
   }
    
    .center1 {
      display:flex;
      justify-content:space-between;
   .card{ 
        background-color: #fff; 
        height: auto; 
        width: auto; 
        overflow: hidden; 
        margin: 12px; 
        border-radius: 5px; 
        box-shadow: 9px 17px 45px -29px
                    rgba(0, 0, 0, 0.44); 
    } 
   
    /* Card image loading */
    .card__image img { 
        width: 100%; 
        height: 100%; 
    } 
      
    .card__image.loading { 
        height: 300px; 
        width: 400px; 
    } 
   
    /* Card title */
    .card__title { 
        padding: 8px; 
        font-size: 22px; 
        font-weight: 700; 
    } 
      
    .card__title.loading { 
        height: 1rem; 
        width: 50%; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* Card description */
    .card__description { 
        padding: 8px; 
        font-size: 16px; 
    } 
      
    .card__description.loading { 
        height: 3rem; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* The loading Class */
    .loading { 
        position: relative; 
        background-color: #e2e2e2; 
    } 
   
    /* The moving element */
    .loading::after { 
        display: block; 
        content: ""; 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        transform: translateX(-100%); 
        background: -webkit-gradient(linear, left top, 
                    right top, from(transparent),  
                    color-stop(rgba(255, 255, 255, 0.2)), 
                    to(transparent)); 
                      
        background: linear-gradient(90deg, transparent, 
                rgba(255, 255, 255, 0.2), transparent); 
   
        /* Adding animation */
        animation: loading 0.8s infinite; 
    } 
   
    /* Loading Animation */
    @keyframes loading { 
        100% { 
            transform: translateX(100%); 
        } 
    } 
  
    }
      }
    

    `