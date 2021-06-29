import React from 'react';

import Styled from './styles';

const TitleTasks = ({ value, color }) => {
  return (
    <div>
      <Styled.DivTitleContainer>
        <Styled.DivTitleTasks style={{ backgroundColor: color }}>
          <h1>{value}</h1>
        </Styled.DivTitleTasks>
      </Styled.DivTitleContainer>
    </div>
  );
};
export default TitleTasks;
