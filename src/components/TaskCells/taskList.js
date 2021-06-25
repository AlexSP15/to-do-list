/* eslint-disable no-lone-blocks */
import { React, useState } from 'react';

import Task from '../MyTask/index';

const CreateTask = ({ myTasks, setTaskAcc, onDeleteClick, favoriteClick, onCheckboxClicked }) => {

  const [editing, setEditing] = useState();

  const handleEditClick = (index) => {
    setEditing(index);
  };

  const onSaveClick = (index, inputValue) => {
    setEditing(false);
    myTasks[index].text = inputValue;
  };

  return (
    <div>
      {myTasks.map((e, ix) => {
          return (
            <Task
              key={'task-'+ ix}
              index={ix}
              editing={editing === ix}
              value={e.text}
              onEditClick={() => handleEditClick(ix)}
              onDeleteClick={onDeleteClick}
              favoriteClick={favoriteClick}
              onSaveClick={onSaveClick}
              handleEditClick={handleEditClick}
              setTaskAcc={setTaskAcc}
              onCheckboxClicked={onCheckboxClicked}
              checked={e.status}
            />
          );
      })}
    </div>
  );
};
export default CreateTask;
