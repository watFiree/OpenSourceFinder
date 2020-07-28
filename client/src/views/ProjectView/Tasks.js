import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TaskCard from '../../components/molecules/TaskCard';
import Title from '../../components/atoms/Title';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import useProjectData from '../../hooks/useProjectData';
import useEditForm from '../../hooks/useEditForm';
import { getTask } from '../../redux/actions/getTask';
import EditTaskForm from '../../components/organisms/CreateTaskForm';

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
  const [editing, editingData, editOpen, editClose] = useEditForm();
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
          editTask={editOpen}
          expanded={expanded}
          handleChange={handleChange}
          number={index}
        />
      ))}
      {editing && <EditTaskForm data={editingData} close={editClose} edit={editing} />}
    </Wrapper>
  );
};

export default connect(mapStateToProps('tasks'), { getTask })(ProjectTasks);
