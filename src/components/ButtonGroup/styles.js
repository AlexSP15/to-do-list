import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styled = {
  DivGroupIcont: styled.div`
    width: 10%;
    display: flex;
    margin-right: 20px;
    justify-content: space-between;
  `,
  ButtonIcon: styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
  `,
  FontAwesomeEdit: styled(FontAwesomeIcon)`
    color: white;
    margin-top: 8px;
    margin-left: 5px;
    width: 1em;
    font-size: 18px;
  `,
  FontAwesomeDelete: styled(FontAwesomeIcon)`
    color: white;
    margin-top: 8px;
    margin-left: 5px;
    width: 1em;
    font-size: 18px;
  `,
  FontAwesomeFavorite: styled(FontAwesomeIcon)`
    color: white;
    margin-top: 8px;
    margin-left: 5px;
    width: 1em;
    font-size: 18px;
  `,
};
export default Styled;
