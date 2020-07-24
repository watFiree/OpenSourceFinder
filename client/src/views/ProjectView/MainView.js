import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from '../../components/organisms/Header';
import ProjectMenu from './Menu';
import ProjectUsers from './Users';
import ProjectOffers from './Offers';
import ProjectTasks from './Tasks';
import ProjectNavigation from '../../components/molecules/ProjectNavigation';
import Wrapper from '../../components/atoms/Wrapper';
import bgImage from '../../assets/project-view-background.jpg';
import { ProjectNavigationContext } from '../../context/ProjectNavigationContext';
import withAuth from '../../hoc/withAuth';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import { getProject } from '../../redux/actions/getProject';

const Content = styled.div`
  background-color: ${({ theme }) => theme.blackLight};
  width: 100%;
`;

const ContentPanel = ({ children, value, index, ...other }) => (
  <Content
    role="tabpanel"
    hidden={value !== index}
    id={`panel-${index}`}
    aria-labelledby={`panel-${index}`}
    {...other}
  >
    {value === index && <div>{children}</div>}
  </Content>
);

const ProjectView = ({ user, projects, getProject, match }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  const history = useHistory();
  const id = match.params.id.trim();
  useEffect(() => {
    if (!user.projectsIds.includes(id)) return history.push('/');
    const project = projects.data.find((p) => p._id === id);
    if (!project) return getProject(id);
    return setData(project);
  }, [user, match, projects, getProject, history, id]);

  return (
    <ProjectNavigationContext.Provider value={{ page, setPage }}>
      <Wrapper image={bgImage}>
        <Header />
        <ProjectNavigation />
        <div>
          <ContentPanel value={page} index={0}>
            <ProjectMenu data={data} />
          </ContentPanel>
          <ContentPanel value={page} index={1}>
            <ProjectUsers data={data} />
          </ContentPanel>
          <ContentPanel value={page} index={2}>
            <ProjectOffers offersIds={data.offers} applicationsIds={data.applications} id={id} />
          </ContentPanel>
          <ContentPanel value={page} index={3}>
            <ProjectTasks tasksIds={data.tasks} />
          </ContentPanel>
        </div>
      </Wrapper>
    </ProjectNavigationContext.Provider>
  );
};

export default connect(mapStateToProps('projects'), { getProject })(withAuth(ProjectView));
