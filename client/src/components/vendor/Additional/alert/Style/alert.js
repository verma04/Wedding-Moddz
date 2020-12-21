import styled from 'styled-components';
import { colors } from '../../../../../theme/color';
export   const Alertt = styled.div`
  display:flex;
  justify-content:center;
  @media  (max-width: 480px) {
    .center {
    width:100%;
    display:flex;
  justify-content:space-between;
  position:fixed;
  .error {
 
    right: 5rem;
    top: -3rem;
    background-color: #4E372A;
    border-radius: 10px;
    width: 20rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around
  i {
    padding-top:1rem;
    padding-bottom:1rem;
    font-size:3rem;
    color:white;
  }
  h3 {
    padding-top:1.7rem;
    font-size:1.5rem;
    color:white;
  }
  }
  }
  }
  @media (min-width: 1281px) {
  .center {
   
    display:flex;
  justify-content:flex-end;
  position:fixed;
  right:2rem;
  top:1rem;
  .error {
    background-color:#FF0000;
    z-index:1;
     position:absolute;
     right:0;
    background-color:${colors.button.darkBrown};
  border-radius: 10px;
  width:24rem;
 
  display:flex;
  justify-content:space-around;
  i {
    padding-top:1rem;
    padding-bottom:1rem;
    font-size:3rem;
    color:white;
  }
  h3 {
    padding-top:1.7rem;
    font-size:1.5rem;
    color:white;
  }
  }
  }
 }`