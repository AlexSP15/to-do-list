import { React, useState, useEffect } from 'react';
import ButtonGroup from '../ButtonGroup/index';

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
          <Styled.DivTasks>
            <Styled.FormCheck onChange={() => props.onCheckboxClicked(props.index)} />
            <Styled.FormControl
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
          </Styled.DivTasks>
        ) : (
          <Styled.DivTasks>
            <Styled.FormCheck onChange={() => props.onCheckboxClicked(props.index)} checked={checkedValue} />
            {props.checked ? (
              <Styled.FormControlNormal style={{color: "#767676", textDecoration: "line-through"}} value={inputValue} disabled />
            ):(
              <Styled.FormControlNormal value={inputValue} disabled />
            )}
            
            <ButtonGroup
              onEditClick={props.onEditClick}
              onDeleteClick={() => props.onDeleteClick(props.value)}
              favoriteClick={() => props.favoriteClick(props.value)}
            />
          </Styled.DivTasks>
        )}
      </Styled.DivMyTasks>
    </div>
  );
};
export default MyTask;
