import React, { useState } from 'react';
import styled from 'styled-components';
import TaskCard from '../molecules/TaskCard';
import Title from '../atoms/Title';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTasks = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Wrapper>
      <Title size="1.8rem" margin="40px 0">
        TASKS
      </Title>
      <TaskCard expanded={expanded} handleChange={handleChange} />
      <TaskCard expanded={expanded} handleChange={handleChange} number={1} />
    </Wrapper>
  );
};

export default ProjectTasks;
