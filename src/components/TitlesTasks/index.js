import React from 'react';

import Styled from './styles';

const MyTasks = (title, color) => {
  return (
    <div>
      <Styled.DivTitleContainer>
        <Styled.DivTitleTasks style={{ backgroundColor: title.color }}>
          <h1>{title.title}</h1>
        </Styled.DivTitleTasks>
      </Styled.DivTitleContainer>
    </div>
  );
};
export default MyTasks;
