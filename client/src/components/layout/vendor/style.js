import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`

@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

  

}
@media (min-width: 1281px) {

display:flex;
justify-content:center;
margin-bottom:4rem;

margin-top:10rem;
.flex {
    width:70rem;
    height:40rem;
   
    border-radius:2rem;
   
    .wrapper {
        width:100%;
        height:70%;
    img {
        width:100%;
        height:100%;
    }
    }
    .data {
        background-color:${colors.primary.dark1};
                 height:30%;

                 border-bottom-left-radius:2rem;
                 border-bottom-right-radius:2rem; 
                 display:flex;
                 justify-content:space-between ;
                 .data-1 {
                    
                     width:50%;
                     height:100%;
                     padding-left:2rem;
                     ul {
                       
                         height:100%;
                        display:flex;
                 justify-content:space-around ;
                 flex-direction:column;
                 li:nth-child(1) {
                    display:flex;
                      justify-content:flex-start;
                   img {
                    width: 1.5rem;
                      
                     
                   }
                   h2 {
                       padding-top:0.2rem;
                       padding-left:0.5rem;
                          color:white;
                      }
                     }

                     li:nth-child(2) {
                        color:white;
                        margin-left:1rem;
                        background-color:	#A9A9A9;
                        width:20rem; 
                        padding-left:1rem;
                        padding-top:0.5rem;
                        padding-bottom:0.5rem;
                        border-radius:10px;
                     }
                     li:nth-child(3) {
                        color:${colors.primary.yellow};
                        padding-left:2rem;
                        
                     }
                     li:nth-child(4) {
                        color:${colors.primary.yellow};
                        padding-left:2rem;
                        
                     }
                     li:nth-child(5) {
                        color:white;
                        padding-left:2rem;
                        
                     }
                     
                     }

                 }
                 .data-2 {
                   
                     width:50%;
                     height:100%;
                     display:flex;
                 justify-content:space-evenly ;
                   flex-direction:column;
                   
                     ul {
                         display:grid;
                         grid-template-columns: auto auto ;
                         grid-gap:1rem;

                         li {
                            
                         display:flex;
                 justify-content:flex-start;
                              
                           
                             color:white;
                             width:15rem;
                             img {
                                 width:2rem;
                                 padding-right:1rem;
                             }
                             h3 {
                                 padding-top:0.2rem;
                                 
                             }
                         }
                     }

                   

                 }
    }
}

 

}
`