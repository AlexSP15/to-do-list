import React from 'react';

import Styled from './styles';
import Container from 'react-bootstrap/Container';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ButtonGroup = ({ onDeleteClick, favoriteClick, onEditClick }) => {
  return (
    <div>
      <Container>
        <Styled.DivGroupIcont>
          <Styled.ButtonIcon onClick={onEditClick}>
            <Styled.FontAwesomeEdit icon={faEdit} className="iconEdit" />
          </Styled.ButtonIcon>
          <Styled.ButtonIcon onClick={onDeleteClick}>
            <Styled.FontAwesomeDelete icon={faTrash} className="iconDelete" />
          </Styled.ButtonIcon>
          <Styled.ButtonIcon onClick={favoriteClick}>
            <Styled.FontAwesomeFavorite
              icon={faHeart}
              className="iconFavorite"
            />
          </Styled.ButtonIcon>
        </Styled.DivGroupIcont>
      </Container>
    </div>
  );
};
export default ButtonGroup;
