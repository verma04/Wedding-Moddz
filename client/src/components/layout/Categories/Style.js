import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
margin-top:10rem;
@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {



}
@media (min-width: 1281px) {

    background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972542/wedding%20Moodz/Asset_23_4x_znpq7g.png") , url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_23_i1yxo5.svg'); /* The image used */
  height:100vh;
 /* You must set a specified height */
  background-position: left , right; /* Center the image */
  background-repeat: no-repeat , no-repeat; /* Do not repeat the image */

  background-size: 25rem  , 20rem;


  .flex {

    .head {
    display:flex;
    justify-content:space-between;
    width:80rem;
   
    
     h2 {
         font-size:2em;
         font-weight:1000;
         width:20rem;
         padding-left: 8rem;
         padding-bottom:1rem;
         color: ${colors.primary.pink1};
     border-bottom: 4px solid  ${colors.primary.pink1};
     }
     button {
        background-color: #F0326E;
    color: white;
    border: none;
    width: 7rem;
    font-size: 1.3rem;
    border-radius: 46px;
    height: 2.5rem;
        
     }
    }

    .para {

      width:80rem;
      margin-top:2rem;
      p {
        line-height: 1.6;
    font-size: 1.3rem;
    text-align: center
      }
    }

  }

}
`