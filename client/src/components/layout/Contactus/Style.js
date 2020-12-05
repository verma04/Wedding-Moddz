import styled from 'styled-components'
import { colors } from '../../../theme/color';


export const Section = styled.section` 

  display:flex;
  justify-content:center;
  width:100%;
@media (max-width: 767px) {
  width: 100%;
    margin-top: 2rem;
    margin-bottom: 3rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
     
     .flex {
       
        
        display:flex;
  justify-content:center;
  width: 90%;
         .flex-1 {
           width:100%;
         .hero{
        width:100%;
  h2 {
    font-family: 'Comfortaa';
    color: ${colors.button.darkBrown};

    text-transform: uppercase;
    margin-bottom: 0;
    font-weight:1000;
    text-align:center;
  }
  h4 {
    font-family: 'Comfortaa';
    color: #897C76;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    text-align:center;
  }
         }
         .select {
          width:100%;
            margin-top:6rem;
           
           border-bottom: 1px solid  #DCD7D6;
           margin-bottom:4rem;
             .top {
                display:flex;
             flex-direction:column;
             }
             label {
                 padding-bottom:0.2rem;
             }
             select {
                background-color: #FDFCFC;
    border: 1px solid #DCD7D6;
    border-radius: 4px;
    height: 4rem;
    font-size: 1rem;
    padding-left: 1rem;
    border-radius: 4px;
    line-height: 4rem;
    outline: none;
    vertical-align: middle
    

   
             }
             select option {
      height:3rem;
 
}
      
         }
  
  .contact {
      display:flex;
      justify-content:space-between;
      button {
        text-decoration: none;
    text-transform: uppercase;
    border: 1px solid #938F8F;
    border-radius: 5px;
    color: #55473F;
    font-size: 14px;
    padding: 5px 10px 4px;
    font-family: 'AvenirNext-CondensedBold';
    transition: background-color .2s;
    font-weight:1000;
      }
  }

  .middle {
  
      margin-top:3rem;
      margin-bottom:3rem;
      
      h3 {
        font-size: 1.5rem;
    text-align: center;
    padding-bottom: 3rem;
    font-weight: bolder;
      }
      
      .drop {
        padding-top:2rem;
        padding-bottom:2rem;
        border-top:1px solid #E9E1DF;
      border-bottom:1px solid #E9E1DF;
          .up {
            display:flex;
      justify-content:space-between;
      padding-bottom:2rem;
      i {
          font-size:1.5rem;
      }
      h4 {
          font-weight:900;
      }
          }
          .down {
              line-height:1.6rem;
          }
       
      }
  }

    .email {
       margin-top:2rem;
       margin-bottom:2rem;
   
        background-color:white;
        display:flex;
        justify-content:space-between;
        padding:1.5rem;
        height:6rem;

        .left {
          display:flex;
        justify-content:space-between;
         ul {
           padding-left:1rem;
           height:3rem;
           line-height:1.6;
         }
         img {
           padding-top:0.7rem;
         }
        }
        .right {
          button {
            font-size:1.1rem;
            background-color: ${colors.button.darkBrown};
            color:white;
             border:none;
             margin-top:2rem;
             padding: 0.5rem 1rem;
          }
        }
        
    }
       }
     }

.map {
  width:100%;
}




}



   @media (min-width: 768px) and (max-width: 1280px) {
         
    margin-top: 2rem;
    margin-bottom: 3rem;
   

    margin-top: 5rem;
    margin-bottom: 5rem;
     
     .flex {
        display:flex;
  justify-content:center;
         width:48rem;

         .hero{
          width:48rem;
  h2 {
    font-family: 'Comfortaa';
    color: ${colors.button.darkBrown};
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 0;
    font-weight:1000;
    text-align:center;
  }
  h4 {
    font-size: 1.2rem;
    color: #897C76;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    text-align:center;
  }
         }
         .select {
          width:48rem;
            margin-top:6rem;
           
           border-bottom: 1px solid  #DCD7D6;
           margin-bottom:4rem;
             .top {
                display:flex;
             flex-direction:column;
             }
             label {
                 padding-bottom:0.2rem;
             }
             select {
                background-color: #FDFCFC;
    border: 1px solid #DCD7D6;
    border-radius: 4px;
    height: 4rem;
    font-size: 1rem;
    padding-left: 1rem;
    border-radius: 4px;
    line-height: 4rem;
    outline: none;
    vertical-align: middle
    

   
             }
             select option {
      height:3rem;
 
}
      
         }
  
  .contact {
      display:flex;
      justify-content:space-between;
      button {
        text-decoration: none;
    text-transform: uppercase;
    border: 1px solid #938F8F;
    border-radius: 5px;
    color: #55473F;
    font-size: 14px;
    padding: 5px 10px 4px;
    font-family: 'AvenirNext-CondensedBold';
    transition: background-color .2s;
    font-weight:1000;
      }
  }

  .middle {
    width:48rem;
      margin-top:3rem;
      margin-bottom:3rem;
      
      h3 {
        font-size: 1.5rem;
    text-align: center;
    padding-bottom: 3rem;
    font-weight: bolder;
      }
      
      .drop {
        padding-top:2rem;
        padding-bottom:2rem;
        border-top:1px solid #E9E1DF;
      border-bottom:1px solid #E9E1DF;
          .up {
            display:flex;
      justify-content:space-between;
      padding-bottom:2rem;
      i {
          font-size:1.5rem;
      }
      h4 {
          font-weight:900;
      }
          }
          .down {
              line-height:1.6rem;
          }
       
      }
  }

    .email {
       margin-top:2rem;
       margin-bottom:2rem;
       width:48rem;
        background-color:white;
        display:flex;
        justify-content:space-between;
        padding:1.5rem;
        height:5rem;

        .left {
          display:flex;
        justify-content:space-between;
         ul {
           padding-left:1rem;
           height:3rem;
           line-height:1.6;
         }
         img {
           padding-top:0.7rem;
         }
        }
        .right {
          button {
            font-size:1.1rem;
            background-color: ${colors.button.darkBrown};
            color:white;
             border:none;
             margin-top:2rem;
             padding: 0.5rem 1rem;
          }
        }
        
    }

     }



 

    
}

   
  
   @media (min-width: 1281px) {
    margin-top: 10rem;
    margin-bottom: 5rem;
     
     .flex {
        display:flex;
  justify-content:center;
         width:48rem;

         .hero{
          width:48rem;
  h2 {
    font-family: 'Comfortaa';
    color: ${colors.primary.pink1};
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 0;
    font-weight:1000;
    text-align:center;
  }
  h4 {
    font-size: 1.2rem;
    color: #897C76;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    text-align:center;
    font-family: 'Comfortaa';
  }
         }
         .select {
          width:48rem;
            margin-top:6rem;
           
           border-bottom: 1px solid  #DCD7D6;
           margin-bottom:4rem;
             .top {
                display:flex;
             flex-direction:column;
             }
             label {
                 padding-bottom:0.2rem;
                 font-family: 'Comfortaa';
             }
             select {
                background-color: #FDFCFC;
    border: 1px solid #DCD7D6;
    border-radius: 4px;
    height: 4rem;
    font-size: 1rem;
    padding-left: 1rem;
    border-radius: 4px;
    line-height: 4rem;
    outline: none;
    vertical-align: middle;
    font-family: 'Comfortaa';
    

   
             }
             select option {
      height:3rem;
      font-family: 'Comfortaa';
 
}
      
         }
  
  .contact {
      display:flex;
      justify-content:space-between;
      font-family: 'Comfortaa';
      button {
        text-decoration: none;
    text-transform: uppercase;
    border: 1px solid   ${colors.primary.pink1};
    border-radius: 5px;
    color: ${colors.primary.pink1};
    font-size: 14px;
    padding: 5px 10px 4px;
    font-family: 'Comfortaa';
    transition: background-color .2s;
    font-weight:1000;
      }
  }

  .middle {
    width:48rem;
      margin-top:3rem;
      margin-bottom:3rem;
      
      h3 {
        font-size: 1.5rem;
    text-align: center;
    padding-bottom: 3rem;
    font-weight: bolder;
    font-family: 'Comfortaa';
      }
      
      .drop {
        padding-top:2rem;
        padding-bottom:2rem;
        border-top:1px solid #E9E1DF;
      border-bottom:1px solid #E9E1DF;
          .up {
            display:flex;
      justify-content:space-between;
      padding-bottom:2rem;
      i {
          font-size:1.5rem;
      }
      h4 {
          font-weight:900;
          font-family: 'Comfortaa';
      }
          }
          .down {
              line-height:1.6rem;
              font-family: 'Comfortaa';
          }
       
      }
  }

    .email {
       margin-top:2rem;
       margin-bottom:2rem;
       width:48rem;
        background-color:white;
        display:flex;
        justify-content:space-between;
        padding:1.5rem;
        height:5rem;
        font-family: 'Comfortaa';

        .left {
          display:flex;
        justify-content:space-between;
        font-family: 'Comfortaa';
         ul {
           padding-left:1rem;
           height:3rem;
           line-height:1.6;
           font-family: 'Comfortaa';
           li {
            font-family: 'Comfortaa';
           }
         }
         img {
           padding-top:0.7rem;
         }
        }
        .right {
          font-family: 'Comfortaa';
          button {
            font-size:1.1rem;
            background-color: ${colors.primary.pink1};
            color:white;
             border:none;
             margin-top:2rem;
             padding: 0.5rem 1rem;
             font-family: 'Comfortaa';
          }
        }
        
    }

     }

     .bg {
      position:absolute;
      position: absolute;
    top: 2rem;
    right: -4rem;
    z-index: -1;
      img {
              width: 22rem;
      }
  }
  .bg1 {
    position:absolute;
    bottom: 2rem;
    left: -4rem;
    z-index: -1;
    position: absolute;
    img {
              width: 22rem;
      }
  }
   }



 
`