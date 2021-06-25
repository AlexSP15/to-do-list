import { React, useState, useEffect } from 'react';
import FavButtonGroup from '../ButtonGroup/favButton';

import Styled from './styles';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const MyTask = (props) => {

  const [inputValue, setInputValue] = useState(props.value);

  const [checkedValue, setCheckedValue] = useState(props.checked);

  useEffect(() => {
    setInputValue(props.value)
  }, [props.value])

  useEffect(() => {
    setCheckedValue(props.checked)
  }, [props.checked])

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Styled.DivMyTasks>
        {props.editing ? (
          <Styled.DivFavTasks>
            <Styled.FormCheck onChange={() => props.onCheckboxClickedFav(props.index)} />
            <Styled.FormControlFav
              autoFocus
              value={inputValue}
              onChange={handleInputChange}
            />
            <Styled.ButtonIconSave>
              <Styled.ButtonSave
                className="iconSave"
                onClick={() => props.onSaveClick(props.index, inputValue)}
              >
                <Styled.FontAwesomeSave icon={faSave} className="iconSave" />
                Save
              </Styled.ButtonSave>
            </Styled.ButtonIconSave>
          </Styled.DivFavTasks>
        ) : (
          <Styled.DivFavTasks>
            <Styled.FormCheck onChange={() => props.onCheckboxClickedFav(props.index)} checked={checkedValue} />
            {props.checked ? (
              <Styled.FormControlNormal style={{color: "#767676", textDecoration: "line-through"}} value={inputValue} disabled />
            ):(
              <Styled.FormControlNormal value={inputValue} disabled />
            )}
            <FavButtonGroup
              onEditClick={props.onEditClick}
              onDeleteClick={() => props.onDeleteClick(props.value)}
              favoriteClick={() => props.favoriteClick(props.value)}
            />
          </Styled.DivFavTasks>
        )}
      </Styled.DivMyTasks>
    </div>
  );
};
export default MyTask;
