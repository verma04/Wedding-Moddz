import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`


@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {



}
@media (min-width: 1281px) {
   

    
   .grid {
    width:100%;
       height:3rem;
       box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 5px 0px;
       background-color:	#F0F0F0;
       display:flex;
justify-content:center;
       .data {
         width:80rem;
         
        display:flex;
        justify-content:space-between;
        .grid-1 {
            width:18%;
             cursor: pointer;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            i{
                font-size:1.4rem;
             padding-left:0.2rem;
             color:#585858;
            }
            h3 {
                color:#585858;
            }
        }
       }
   }
  
    
 
       .flex {
        width:100%;
       height:15rem;
       box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 5px 0px;
       background-color:	#F0F0F0;
       display:flex;
justify-content:center;
  .flex0 {
    width:80rem;
         
        display:flex;
        justify-content:space-between;
        .flex-1 {
            width:18%;
          
            display:flex;
            
            align-items:flex-start;
            flex-direction:column;
            padding-left:2rem;
            padding-top:2rem;
            label {
                height:2rem;
                display:flex;
                justify-content:center;
                span {
                    padding: 0.2rem;
                }
            }
          
        }
       }
       }

       .btn {
        width:100%;
       height:5rem;
    
       background-color:#F0F0F0;
       display:flex;
justify-content:center;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 5px 0px;

.button {
    width:30rem;

    height:50%;
display:flex;
justify-content:space-around;
button {
    width:30%;
    font-size:1.3rem;
   color:white;
   border:none;
   background-color:${colors.primary.pink1};
}
.view {
    border: 1px solid ${colors.primary.pink1};
    color:${colors.primary.pink1};
    background-color:white;
}

}
       }


}
` 