import styled from 'styled-components'

import  { colors } from '../../../../../theme/color';

export const Section = styled.section`

@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

  

}
@media (min-width: 1281px) {

display:flex;
justify-content:center;
margin-bottom:4rem;

margin-top:4rem;
.flex {
    width:70rem;
  
   
    border-radius:2rem;
   
    
    .flex-1 {
        height: 80rem;

        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        
    .data {
        background-color:${colors.primary.dark1};
        display:flex;
        justify-content:center;
    flex-direction:column;
        width:100%;
        height:50%;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
                 height:50%;

                 border-radius:2rem;
                 display:flex;
                 justify-content:space-between ;
                 .wrapper {
                     width:100%;
                     height:60%;
                     display: flex;
    justify-content: center;
    align-items: center;
    
                     img {
                         padding:1rem;
                         width:100%;
                         width: 96%;
    height: 87%;
                         border-radius:2rem;
                     }
                 }
                 .data-1 {
                    
                    display:flex;
                    justify-content:center;
                     height:35%;
                     padding-left:2rem;
                     ul {
                         width:33%;
                         
                         height:100%;
                        display:flex;
                 justify-content:space-around;
                 flex-direction:column;
                 li {
                     
                     h2 {
                         color:white;
                     }
                     h5 {
                         color:white;
                     }
                 }
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
                        h2 {
                            color:white;
                        }
                    
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
    .rating {
        width:33%;
                        
                         height:100%;
                         justify-content:center;
                         align-items:center;
                         display:flex;
                         list-style:none;
                      li {
                        color:${colors.primary.yellow}
                      }
    }
                   .social {
                        width:33%;
                    
                         height:100%;
                         display:flex;
                         justify-content:center;
                         align-items:center;
                         flex-direction:column;
                         .top{
                            display:flex;
                         justify-content:space-between;
                         align-items:center;
                         width:100%;
                         height:35%;
                  
                         .wrapper {
                           
                            height:70%;
                            width:20%;
                            display:flex;
                            justify-content:center;
                            flex-direction:column;
                            align-items:center;
                             position: relative;
                            img {
                                width:50%;
                                height:50%;
                                
                            }
                            span {
                             
                                height:50%;
                                
                                position: absolute;
                                color:white;
                                bottom: -35%;
                                font-size: 0.7rem;
                                width: 123%;
                                 text-align:center;
                            }
                         }
                         }
                         .bottom {
                            
                            display: flex;
                           flex-flow: row wrap;
                            align-content: space-around;
                            justify-content: space-between;
                        
                         width:100%;
                         height:65%;
                    

                         .link {
                             width:48%;
                             height:25%;
                        
                              display:flex;
                              justify-content:center;
                             align-items:center;
                              img {
                                  height:70%;
                              }
                              span {
                                  font-size:0.8rem;
                                  padding-left:0.5rem;
                                  color:white;
                                   letter-spacing:0.1rem;
                                   line-height:1rem;
                              }

                         }
                         
                         }
    }
                 }
                
    }
    .data2 {
        width:100%;
   
        height:45%;
        border-radius:2rem;
        background-color:white;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
     
        .banner {
            width:100%;
            height:25%;
           

            display:flex;
            justify-content:center;
        align-items:center;
         flex-direction:column;
         img {
             padding:0.2rem;
         }
         p {
            padding:0.2rem;
            line-height:1.6;  
            width:90%;
            span {
              color: ${colors.primary.pink1}
            }
         }
         h6 {
             font-size:0.9rem;
         }
        
        }

        .price {
            width:100%;
            height:25%;
            border:1px solid;
        
        }
        .contact {
            width:100%;
            height:30%;
            border:1px solid;
       
        }
        .wishlist {
            width:100%;
            height:18%;
            box-shadow: 0 3px 3px 3px rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
            display:flex;
        justify-content:space-between;
        border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
         .one {
       
            width:24%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
         }
         .two {
       
            width:24%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
         }
         .three {
          
            width:24%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
         }
         .four {
       
            width:24%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
             i {
                 font-size:1.2rem;
             }
         }
        }
    }
    }
}


.reala {
    position: absolute;
    /* border: 1px solid red; */
    width: 17rem;
    left: 0;
    top: 50%;
    z-index: -1;
    img {
        width:100%;
    }
}
 
.reala1 {
    position: absolute;
    /* border: 1px solid red; */
    width: 17rem;
    right: 0;
    top: 90%;
    z-index: -1;
    img {
        width:100%;
    }
}

}
`