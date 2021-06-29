import { React, useState } from 'react';

import Styled from './styles';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTasks = ({ taskAcc, setTaskAcc }) => {
  const [newTask, setNewTask] = useState({
    text: '',
    status: false,
  });

  const sendTask = (e) => {
    e.preventDefault();
    if (newTask.text !== '') {
      setTaskAcc((prev) => {
        const updatedState = [...prev, { ...newTask }];
        return updatedState;
      });
    }

    return setNewTask({
      text: '',
      status: false,
    });
  };

  return (
    <Styled.DivAdd>
      <Styled.DivInputText>
        <Styled.FontAwesomeIcon icon={faPlus} />
        <Styled.FormAdd onSubmit={sendTask}>
          <Styled.FormControl
            className="addTask"
            type="text"
            placeholder="Add task..."
            value={newTask.text}
            onChange={(event) =>
              setNewTask((prev) => {
                return {
                  ...prev,
                  text: event.target.value,
                };
              })
            }
          />
        </Styled.FormAdd>
      </Styled.DivInputText>
    </Styled.DivAdd>
  );
};
export default AddTasks;
