import React from 'react';

import Styled from './styles';

const MyTasks = () => {
  const titles = ["My Tasks", "Favorite Tasks"];
  return (
    <div>
      <Styled.DivNormalTasks>
        <Styled.DivTitleMyTasks>
          <h1>My Tasks</h1>
        </Styled.DivTitleMyTasks>
      </Styled.DivNormalTasks>
    </div>
  );
};
export default MyTasks;
