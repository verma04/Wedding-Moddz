import styled from 'styled-components'

import  { colors } from '../../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

 

}
@media (min-width: 1281px) {

    margin-top:5rem;
    .flex {
        width:80rem;
        height:40rem;
      
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        .head {
            height:10%;
          
            width:100%;
            display:flex;
        justify-content:space-between;
        
        align-items:center;
        h2 {
            color:${colors.primary.dark1};
             font-weight:1000;
        }
        h3 {
            color:${colors.primary.pink1};
            font-weight:900;
            i {
                font-size:1.5rem;
            }
        }

        }
        .category {
            height:90%;
           
            width:100%;
            display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
        .category1 {
        width:100%;
        height:31%;
       
        display:flex;
        justify-content:space-between;
       
        align-items:center;
        .set {
            width:49%;
        height:100%;
       
        display:flex;
        justify-content:space-between;
        align-items:center;
        .wrapper {
            width:40%;
            height:100%;
  
             
            img {
                width:100%;
                height:100%;
                border-top-left-radius:6rem;
             border-bottom-left-radius:6rem;
            }
        }
        .data {
            display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
          width:60%;
          padding-left:2rem;
          i {
              color:white;
              font-size:1.3rem;
          }
        }
        h3 {
            width:100%;
            font-size:0.9rem;
            color:white;
            padding-top:0.3rem;

        }

 h2 {
     color:white;
 }
        
        }
        #pink {
            background-color:${colors.primary.pink1}
        }
        #pink2 {
            background-color:${colors.primary.pink2}
        }
        }
          
            

    }

   
}
}
`