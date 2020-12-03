import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`

@media  (max-width: 767px) {

}
@media (min-width: 768px) and (max-width: 1280px) {

  

}
@media (min-width: 1281px) {

    margin-top:10rem;
    .head {
        display:flex;
justify-content:center;  
margin-bottom:2rem;
h2 {
    font-size: 2em;
    font-weight: 1000;
    width: 20rem;
    padding-left: 13rem;
    padding-bottom: 1rem;
    color: #F0326E;
    border-bottom: 4px solid #F0326E;
}
h3 {
    font-size: 2em;
    font-weight: 1000;
    width: 33rem;
    /* padding-left: 13rem; */
    padding-bottom: 1rem;
    color: #F0326E;
    border-bottom: 4px solid #F0326E
}
    }
 

}
`