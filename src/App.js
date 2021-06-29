import { React, useState } from 'react';

import AddTasks from './components/AddTasks/addTasks';
import TitleTasks from './components/TitleTasks/index';
import TaskList from './components/TaskCells/taskList';
import FavTasks from './components/TaskCells/favTasks';

function App() {
  const [taskAcc, setTaskAcc] = useState([]);
  const [favTask, setFavTask] = useState([]);

  const onDeleteClick = (taskValue) => {
    setTaskAcc((prev) => {
      return prev.filter((task) => task.text !== taskValue);
    });
  };
  const onDeleteClickFav = (taskValue) => {
    setFavTask((prev) => {
      return prev.filter((task) => task.text !== taskValue);
    });
  };

  const favoriteClick = (taskValue) => {
    setTaskAcc((prev) => {
      const result = prev.filter((task) => task.text !== taskValue);
      return result;
    });
    setFavTask((prev) => {
      const stateTask = taskAcc.find((task) => task.text === taskValue);
      const favTask = { text: taskValue, status: stateTask.status };
      const updatedStateFav = [...prev, favTask];
      return updatedStateFav;
    });
  };

  const removeFavorites = (taskValue) => {
    setFavTask((prev) => {
      const result = prev.filter((task) => task.text !== taskValue);
      return result;
    });
    setTaskAcc((prev) => {
      const stateTask = favTask.find((task) => task.text === taskValue);
      const taskAcc = { text: taskValue, status: stateTask.status };
      const updatedState = [...prev, taskAcc];
      return updatedState;
    });
  };

  const onCheckboxClicked = (index) => {
    setTaskAcc((prev) => {
      const updatedState = [...prev];
      const editedTask = { ...updatedState[index] };
      editedTask.status = !editedTask.status;
      updatedState[index] = editedTask;
      return updatedState;
    });
  };

  const onCheckboxClickedFav = (index) => {
    setFavTask((prev) => {
      const updatedState = [...prev];
      const editedTask = { ...updatedState[index] };
      editedTask.status = !editedTask.status;
      updatedState[index] = editedTask;
      return updatedState;
    });
  };

  return (
    <div className="App">
      <TitleTasks value={'Favorites Tasks'} color={'#00cc00'} />
      <FavTasks
        myTasks={favTask}
        setFavTask={setFavTask}
        onDeleteClick={onDeleteClickFav}
        favoriteClick={removeFavorites}
        onCheckboxClickedFav={onCheckboxClickedFav}
      />
      <br />
      <TitleTasks value={'My Tasks'} color={'#1bc2fa'} />
      <TaskList
        myTasks={taskAcc}
        setTaskAcc={setTaskAcc}
        onDeleteClick={onDeleteClick}
        favoriteClick={favoriteClick}
        onCheckboxClicked={onCheckboxClicked}
      />
      <br></br>
      <AddTasks taskAcc={taskAcc} setTaskAcc={setTaskAcc} />
    </div>
  );
}

export default App;
