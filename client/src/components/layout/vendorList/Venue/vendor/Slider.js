import styled from 'styled-components'

import  { colors } from '../../../../../theme/color';



export const  Item = styled.div`
  display:flex;
   justify-content:center;
   .center{
     width:100%;
   }
   @media (max-width: 767px) {
    .center{
     width:100%;
     .img-wrapper {
       display:flex;
        justify-content:center;
        border-radius:10px;
        margin-bottom:1rem;
       img {
         position:relative;
       
  width:50%;
  height:50%;
  border-radius:10px;
  background-color: rgba(0,0,0,0.5);
  -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          transition: 1s all ease-in-out; 
       }
   
       .fade {
        top:6rem;
        position:absolute;
        
       h2 {
        
       
         left:6rem;
         
         color:white;
         font-weight:1000;
         font-size:1.3rem;
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
        } 
   }
   }
 @media (min-width: 1281px) {
   display:flex;
   justify-content:center;
   text-align:center;
  flex-direction:column;
  width:100%;
  
   .center{
     width:95%;
     
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
        top:10rem;
        position:absolute;
        
       h2 {
        
       
         left:6rem;
         
         color:white;
         font-weight:1000;
         font-size:2rem;
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
        } 
   }
    
    .btn {
    display:flex;
    justify-content:center;
    width:100%;
    button {
      width:20%;
      border: none;
      background-color:#fbfbfb;
      font-size:1.3rem;
      border-bottom: 2px solid ${colors.primary.pink1};
      padding-bottom:0.5rem;
      font-size:1.3rem;
      color:${colors.primary.pink1};
      font-weight:1000;
    }
    }
   
      }
      @media (min-width: 768px) and (max-width: 1024px) {
        display:flex;
   justify-content:center;
   padding-top:1rem;
   .center{
     width:48rem;
     
     .img-wrapper {
       display:flex;
        justify-content:center;
        border-radius:10px;
        padding-bottom:2rem;
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
        top:10rem;
        position:absolute;
        
       h2 {
        
       
         left:6rem;
         
         color:white;
         font-weight:1000;
         font-size:2rem;
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
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
    #hide {
      display:none;
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
      @media (min-width: 1025px) and (max-width:1280px) {
    
        display:flex;
   justify-content:center;
   padding-top:1rem;
   .center{
     width:48rem;
     
     .img-wrapper {
       display:flex;
        justify-content:center;
        border-radius:10px;
        padding-bottom:2rem;
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
        top: 6rem;
        position:absolute;
        
       h2 {
        
       
         left:6rem;
         
         color:white;
         font-weight:1000;
         
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
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
    #hide {
      display:none;
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

