import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`

@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

 

}
@media (min-width: 1281px) {

  .fixed {
    position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  .wrapper {
      display:flex;
      justify-content:center;
      align-items:center;
    margin-top:10rem;
  }
   
}
`