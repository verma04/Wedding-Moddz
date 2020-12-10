import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Nav = styled.nav`
display:flex;
justify-content:center;

@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

    position:fixed;
    width:100%;
    top:0%;
z-index:1;

            .flex {
                width:48em;    
             display:flex;
justify-content:space-between;
                  .left {
                      margin-top:1.4rem;
                      width:16rem;
                      img {
                          width:100%;
                      }
                  }
            }

            .right {
                margin-top:2.5rem;
        
    .navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #eceff1;
}

.navbar__link {
    margin: 1em;
    
    /* font-family: 'Roboto',sans-serif; */
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-letter-spacing: .3em;
    -moz-letter-spacing: .3em;
    -ms-letter-spacing: .3em;
   
    text-indent: .3em;
    color:  white;
    border-bottom: 3px solid transparent
}

.navbar__link:hover {
  transform: translateY(-2px);
}

.navbar__link--active {
    color: ${colors.primary.pink1};
  transition: border-bottom .5s ease-in-out;
}
button {
    background-color:${colors.primary.pink1};
    color:${colors.primary.white};

    border: none;
  
    padding: 0.5rem 1rem;
   color:white;
    border-radius:10px;
}
            
}

}
@media (min-width: 1281px) {

    width:100%;
  
z-index:1;
background-color:#FFB6C1;
         

            .flex {
                width: 80em;
                height:3.5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;

                  .left {
                     display:flex;
                     justify-content:center;
                     
                     align-items:center;
                   

                      .wrapper {
                        display:flex;
                     justify-content:center;
                       flex-direction:column;
                     align-items:center;
                      width: 15rem;

                      img {
                        width: 85%;
                      }
                      }

.navbar__link {
    margin: 1em;
  margin-top:1.6rem;
    font-size: 0.9em;
    font-family: 'Comfortaa',cursive;
    cursor: pointer;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-letter-spacing: .3em;
    -moz-letter-spacing: .3em;
    -ms-letter-spacing: .3em;
    -webkit-letter-spacing: .3em;
    -moz-letter-spacing: .3em;
    -ms-letter-spacing: .3em;
    letter-spacing: .3em;
    text-indent: .3em;
    color: white;
    border-bottom: 3px solid transparent;
}

.navbar__link:hover {
  transform: translateY(-2px);
}

.navbar__link--active {
    color: ${colors.primary.pink1};
  transition: border-bottom .5s ease-in-out;
}
                  }
            

            .right {
              display:flex;
                     justify-content:center;
                  
                     align-items:center;
        i {
          color:white;
    border-radius: 1rem;
    padding: 0.5rem;
    background-color: #F0326E;
    cursor:pointer;
}


 

button {
    background-color:${colors.primary.pink1};
    color:white;
    
    border: none;
    font-size: 0.9em;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    border-radius:10px;
}
            
}
            }

            .search {
              position:fixed;
              background-color:white;
              top:0;
              width:100%;
              z-index:1;
              height:100%;
               display:flex;
               justify-content:space-between;
               align-items:center;
               flex-direction:column;
               .search-1 {
                 width:100%;
                 height:60%;
                 
                 .head {
                  width:100%;
                 height:20%;
                 
                 display:flex;
               justify-content:center;
               align-items:center;
               flex-direction:column;
               h2 {
                 color:	#484848;

               }
               h3 {
                 color:#696969;
                 font-size: 1rem;
                 padding-top:0.2rem;
               }
                 }
                 .input {
                  width:100%;
                 height:33%;
                 
                 display:flex;
               justify-content:center;
               align-items:center;
              
               .inner {
                 width:70%;
             
                 display:flex;
               justify-content:center;
               position: relative;
               height:3.5rem;
               .box {
                 width:20%;
                 background-color:${colors.primary.pink2};
                 display:flex;
               justify-content:space-between;
               align-items:center;
              
               .left {
                display:flex;
               justify-content:space-around;
               align-items:center;
               padding-left:10%;
               
                  img {
                    width:2rem;

                  }
                  h4 {
            color:white;
            font-weight:900;
            padding-left:0.5rem;
            padding-top:0.3rem;
            font-size:1.2rem;
                  }
   
               }
               
               .right {
                 padding-right:10%;
                 i {
                   font-size:1.5rem;
                   color:white;
                 }
               }
               }
               
               input {
                width: 80%;
    border: 1px solid #989898;
    font-size: 1.4rem;
    padding-left: 2rem;
    outline:none
               }
               }
               .dropdown-content {
  display: none;
  top:3.6rem;
left:0;

  position: absolute;
  background-color: #f1f1f1;
   width:20%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  .box {
    width:100%;
    height:4rem;
   
    background-color:${colors.primary.pink2};
                 display:flex;
              justify-content:space-between;
               align-items:center;
              
               .left {
                display:flex;
               justify-content:space-around;
               align-items:center;
               padding-left:10%;;
 
               
                  img {
                    width:2rem;

                  }
                  h4 {
            color:white;
            font-weight:900;
            padding-left:0.5rem;
            padding-top:0.3rem;
            font-size:1.2rem;
                  }
   
               }
               
               .right {
                padding-right:10%;
                 i {
                   font-size:1.5rem;
                   color:white;
                 }
               }
  }
.box:hover {
  background-color:${colors.primary.pink1};
}

}
               .inner:hover .dropdown-content {display: block;}
}
.popluar {
  width:100%;
                 height:33%;
                 
                 display:flex;
                 justify-content:space-around;
                 flex-direction: column;
                 align-items:center;
                .head {
                   width:70%;
                  
                   display:flex;
                 justify-content:flex-start;
                 flex-direction: row;
                 }

                 .btn {
                   width:70%;
                   display: grid;
                   grid-template-columns: auto auto auto auto auto;
                   button {
                     background-color:white;
                     border: 1px solid #989898;
                     padding:0.5rem;
                     font-size:1rem;
                     margin-bottom:0.5rem;
                     margin-top:0.5rem;
                     border-radius: 2rem;
  
                
                   }
                 
                   button {
                         margin-left:2rem;
                   }
   
           
                   .btn1 {
                     margin-left:0.1rem;;

                   }
                 }




}
.bottom {
  width:100%;
                 height:33%;
                 
}
               }

               .search-2 {
                 width:100%;
                 height:40%;
                 
                 display:flex;
               justify-content:flex-end;
               align-items:center;
               flex-direction:column;
 
.bottom {
  width:40%;
  margin-bottom:4rem;
                 height:40%;
              
                 display:flex;
               justify-content:center;
               align-items:center;
               flex-direction:column;
               img {
                 height:50%;
               }
}              h4 {
  padding-top:1rem;
  color:	#989898;
}
               }
               .close {
                 position:absolute;
                 top:2rem;
                 left:3rem;
                  font-size:3rem;
                    color:	#484848;
               }
            }

}
`