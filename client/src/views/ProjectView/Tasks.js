import React, { useState } from 'react';
import styled from 'styled-components';
import TaskCard from '../../components/molecules/TaskCard';
import Title from '../../components/atoms/Title';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTasks = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Wrapper>
      <Title size="1.8rem" margin="40px 0">
        TASKS
      </Title>
      {data.map((task, index) => (
        <TaskCard data={task} expanded={expanded} handleChange={handleChange} number={index} />
      ))}
    </Wrapper>
  );
};

export default ProjectTasks;
