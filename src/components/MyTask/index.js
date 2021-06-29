import { React, useState, useEffect } from 'react';
import ButtonGroup from '../ButtonGroup/index';

import Styled from './styles';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const MyTask = ({
  value,
  checked,
  editing,
  onCheckboxClicked,
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
          <Styled.DivTasks>
            <Styled.FormCheck onChange={() => onCheckboxClicked(index)} />
            <Styled.FormControl
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
          </Styled.DivTasks>
        ) : (
          <Styled.DivTasks>
            <Styled.FormCheck
              onChange={() => onCheckboxClicked(index)}
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

            <ButtonGroup
              onEditClick={onEditClick}
              onDeleteClick={() => onDeleteClick(value)}
              favoriteClick={() => favoriteClick(value)}
            />
          </Styled.DivTasks>
        )}
      </Styled.DivMyTasks>
    </div>
  );
};
export default MyTask;
