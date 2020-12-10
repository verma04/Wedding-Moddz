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

    position:fixed;
    bottom:4rem;
    left:3rem;

   i {
    font-weight: 900;
    background: ${ colors.primary.pink2};
    font-size: 3rem;
    height: 3rem;
    /* width: 3rem; */
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: white
   }

  

}
`