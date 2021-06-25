import styled from 'styled-components';

import { FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styled = {
  DivAdd: styled.div`
    background-color: white;
  `,
  FormAdd: styled.form`
    width: 100%;
  `,
  DivInputText: styled.div`
    color: #16c7a4;
    border-radius: 7px;
    border: 3px solid #16c7a4;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1030;
    transition: height 0.5s, line-height 0.5s;
    text-align: center;
    word-wrap: break-word;
    bottom: 20px;
    left: 12.5%;
    margin: 0 auto;
    width: 75%;
    @media (max-width: 899px) {
      width: 100%;
      left: 0%;
    }
  `,
  FormControl: styled(FormControl)`
    border-color: transparent;
    color: #16c7a4;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    &:active {
      border: none;
    }
    &:focus {
      color: #16c7a4;
      border: none;
      outline: none;
      outline-width: 0;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
    }
  `,
  FontAwesomeIcon: styled(FontAwesomeIcon)`
    color: #16c7a4;
    margin-top: 10px;
    margin-left: 5px;
    width: 1em;
  `,
};
export default Styled;
