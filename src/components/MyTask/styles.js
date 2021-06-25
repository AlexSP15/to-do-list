import styled from 'styled-components';

import { FormControl } from 'react-bootstrap';
import FormCheck from 'react-bootstrap/FormCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styled = {
  DivTaskName: styled.div`
    color: black;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    padding: 6px;
    font-size: 17px;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    line-height: 1.5;
  `,
  DivMyTasks: styled.div`
    margin: 0 auto;
    width: 75%;
    @media (max-width: 899px) {
      width: 100%;
    }
  `,
  DivTasks: styled.div`
    color: black;
    border-radius: 1px;
    border: 3px solid #1bc2fa;
    border-top: 0px;
    display: flex;
    justify-content: space-between;
    &:hover .iconEdit {
      color: #0066cc;
    }
    &:hover .iconDelete {
      color: #ff0000;
    }
    &:hover .iconFavorite {
      color: #ff3399;
    }
    &:hover .iconSave {
      color: #617cc8;
    }
  `,
  DivFavTasks: styled.div`
    color: black;
    border-radius: 1px;
    border: 3px solid #00cc00;
    border-top: 0px;
    display: flex;
    justify-content: space-between;
    &:hover .iconEdit {
      color: #0066cc;
    }
    &:hover .iconDelete {
      color: #ff0000;
    }
    &:hover .iconFavorite {
      color: #ff3399;
    }
    &:hover .iconSave {
      color: #617cc8;
    }
  `,
  FormControlNormal: styled(FormControl)`
    border-color: transparent;
    color: black;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 17px;
    &:active {
      border-color: transparent;
      border: none;
      .iconEdit {
        color: #0066cc;
      }
      .iconDelete {
        color: #ff0000;
      }
      .iconFavorite {
        color: #ff3399;
      }
      .iconiconSave {
        color: #617cc8;
      }
    }

    &:focus {
      border-color: transparent;
      color: #1bc2fa;
      border: none;
      outline: none;
      outline-width: 0;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      .iconEdit {
        color: #0066cc;
      }
      .iconDelete {
        color: #ff0000;
      }
      .iconFavorite {
        color: #ff3399;
      }
      .iconiconSave {
        color: #617cc8;
      }
    }
    &:disabled {
      background: white;
      border-color: transparent;
    }
  `,
  FormControl: styled(FormControl)`
    border-color: transparent;
    color: black;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 17px;
    &:active {
      border: none;
      .iconEdit {
        color: #0066cc;
      }
      .iconDelete {
        color: #ff0000;
      }
      .iconFavorite {
        color: #ff3399;
      }
      .iconiconSave {
        color: #617cc8;
      }
    }

    &:focus {
      color: #1bc2fa;
      border: none;
      outline: none;
      outline-width: 0;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      .iconEdit {
        color: #0066cc;
      }
      .iconDelete {
        color: #ff0000;
      }
      .iconFavorite {
        color: #ff3399;
      }
      .iconiconSave {
        color: #617cc8;
      }
    }
  `,
  FormControlFav: styled(FormControl)`
    border-color: transparent;
    color: black;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 17px;
    &:active {
      border-color: transparent;
      border: none;
      .iconEdit {
        color: #0066cc;
      }
      .iconDelete {
        color: #ff0000;
      }
      .iconFavorite {
        color: #ff3399;
      }
      .iconiconSave {
        color: #617cc8;
      }
    }

    &:focus {
      border-color: transparent;
      color: #00cc00;
      border: none;
      outline: none;
      outline-width: 0;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      .iconEdit {
        color: #0066cc;
      }
      .iconDelete {
        color: #ff0000;
      }
      .iconFavorite {
        color: #ff3399;
      }
      .iconiconSave {
        color: #617cc8;
      }
    }
  `,
  FormCheck: styled(FormCheck)`
    margin-top: 7.5px;
    margin-left: 10px;
    margin-top: 0.5rem;
  `,
  ButtonIconSave: styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 20px;
  `,
  FontAwesomeSave: styled(FontAwesomeIcon)`
    color: white;
    margin-top: 7%;
    font-size: 20px;
    margin-right: 15%;
  `,
  ButtonSave: styled.button`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    border-color: transparent;
    color: white;
    font-weight: 600;
    font-size: 17px;
  `,
};
export default Styled;
