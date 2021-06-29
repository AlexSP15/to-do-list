import styled from 'styled-components';

import { FormControl } from 'react-bootstrap';
import FormCheck from 'react-bootstrap/FormCheck';

const Styled = {
  DivTitleContainer: styled.div`
    margin: 0 auto;
    width: 75%;
    @media (max-width: 899px) {
      width: 100%;
    }
  `,
  DivTitleTasks: styled.div`
    color: white;
    border-radius: 1px;
    text-align: center;
    margin: auto;
    padding: 1px;
    font-family: 'Amaranth', sans-serif;
  `,
  DivTasks: styled.div`
    color: black;
    border-radius: 7px;
    border: 3px solid #1bc2fa;
    display: flex;
    justify-content: space-between;
  `,
  FormControl: styled(FormControl)`
    border-color: transparent;
    color: black;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    &:active {
      border: none;
    }
    &:focus {
      color: #1bc2fa;
      border: none;
      outline: none;
      outline-width: 0;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
    }
  `,
  FormCheck: styled(FormCheck)`
    margin-top: 7.5px;
    margin-left: 10px;
  `,
};
export default Styled;
