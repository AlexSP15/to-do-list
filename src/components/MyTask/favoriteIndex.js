import { React, useState, useEffect } from 'react';
import FavButtonGroup from '../ButtonGroup/favButton';

import Styled from './styles';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const MyTask = ({
  value,
  checked,
  editing,
  onCheckboxClickedFav,
  index,
  onSaveClick,
  onEditClick,
  onDeleteClick,
  favoriteClick,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const [checkedValue, setCheckedValue] = useState(checked);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setCheckedValue(checked);
  }, [checked]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Styled.DivMyTasks>
        {editing ? (
          <Styled.DivFavTasks>
            <Styled.FormCheck onChange={() => onCheckboxClickedFav(index)} />
            <Styled.FormControlFav
              autoFocus
              value={inputValue}
              onChange={handleInputChange}
            />
            <Styled.ButtonIconSave>
              <Styled.ButtonSave
                className="iconSave"
                onClick={() => onSaveClick(index, inputValue)}
              >
                <Styled.FontAwesomeSave icon={faSave} className="iconSave" />
                Save
              </Styled.ButtonSave>
            </Styled.ButtonIconSave>
          </Styled.DivFavTasks>
        ) : (
          <Styled.DivFavTasks>
            <Styled.FormCheck
              onChange={() => onCheckboxClickedFav(index)}
              checked={checkedValue}
            />
            {checked ? (
              <Styled.FormControlNormal
                style={{ color: '#767676', textDecoration: 'line-through' }}
                value={inputValue}
                disabled
              />
            ) : (
              <Styled.FormControlNormal value={inputValue} disabled />
            )}
            <FavButtonGroup
              onEditClick={onEditClick}
              onDeleteClick={() => onDeleteClick(value)}
              favoriteClick={() => favoriteClick(value)}
            />
          </Styled.DivFavTasks>
        )}
      </Styled.DivMyTasks>
    </div>
  );
};
export default MyTask;
