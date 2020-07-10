import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/organisms/Header';
import ProjectMenu from '../components/organisms/ProjectMenu';
import ProjectUsers from '../components/organisms/ProjectUsers';
import ProjectOffers from '../components/organisms/ProjectOffers';
import ProjectTasks from '../components/organisms/ProjectTasks';
import ProjectNavigation from '../components/molecules/ProjectNavigation';
import Wrapper from '../components/atoms/Wrapper';
import bgImage from '../assets/project-view-background.jpg';
import { ProjectNavigationContext } from '../context/ProjectNavigationContext';

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

const ProjectView = ({ match }) => {
  const [page, setPage] = useState(0);
  return (
    <ProjectNavigationContext.Provider value={{ page, setPage }}>
      <Wrapper image={bgImage}>
        <Header />
        <ProjectNavigation />
        <div>
          <ContentPanel value={page} index={0}>
            <ProjectMenu />
          </ContentPanel>
          <ContentPanel value={page} index={1}>
            <ProjectUsers />
          </ContentPanel>
          <ContentPanel value={page} index={2}>
            <ProjectOffers />
          </ContentPanel>
          <ContentPanel value={page} index={3}>
            <ProjectTasks />
          </ContentPanel>
        </div>
      </Wrapper>
    </ProjectNavigationContext.Provider>
  );
};

export default ProjectView;
