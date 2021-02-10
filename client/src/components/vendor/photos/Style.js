import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

 
}
@media (min-width: 1281px) {

   display:flex;
   justify-content:center;
   .flex {
   width:100%;
     
   
   
   background-color:white;
   display:flex;
   justify-content:space-between;
   scroll-snap-type: y mandatory;
  
 .flex-1 {
      width: 20%;
     
      display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   img {
    width: 100%;
   }

 }
 .flex-2 {
      width: 80%;
    
   justify-content:center;
   align-items:center;
   flex-direction:column;
   
   margin:2rem;
  margin-top: 6rem;
  
  
     .top {

       width:100%;
       height:3rem;
       border: 1px solid red;

       

     }
     .mid {
margin-top:2rem;
width:100%;

flex-flow: wrap;


display:flex;
justify-content:space-around;
align-items:center;

.add {
height:13rem;
width:28%;
  
  display:flex;
justify-content:space-around;
align-items:center;
cursor: pointer;
i {
 font-size:10rem;
 color:${ colors.primary.pink1};
}
}


.photo {
  height:15rem;
margin-top:2rem;
  width:26%;
  position: relative;
  display:flex;
justify-content:center;
align-items:center;
cursor: pointer;
box-shadow: 0 3px 3px 0 rgb(0 0 0 / 20%), 0 3px 3px 0 rgb(0 0 0 / 1);
img {
  width:90%;
  height:90%;
}
.cover {
  position: absolute;
  display:flex;
  justify-content:space-between;
  align-items:center;
  bottom:0;
  height:20%;
  background-color: #282828;
  width:100%;
  color:white;
  .text {
    margin-left:5%;
  }

  .fas {
    margin-right:5%;
  }
}

}

}
   

 }
   }
  
}
`