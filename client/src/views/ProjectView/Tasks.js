import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TaskCard from '../../components/molecules/TaskCard';
import Title from '../../components/atoms/Title';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import useProjectData from '../../hooks/useProjectData';
import { getTask } from '../../redux/actions/getTask';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2% 0;
`;

const ProjectTasks = ({ tasksIds, tasks, getTask }) => {
  const [expanded, setExpanded] = useState(false);
  const [data] = useProjectData(tasksIds, tasks, getTask);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Wrapper>
      <Title size="1.8rem" margin="0 0 40px 0">
        TASKS
      </Title>
      {data.map((task, index) => (
        <TaskCard
          key={task._id}
          data={task}
          expanded={expanded}
          handleChange={handleChange}
          number={index}
        />
      ))}
    </Wrapper>
  );
};

export default connect(mapStateToProps('tasks'), { getTask })(ProjectTasks);
