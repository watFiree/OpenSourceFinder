import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Wrapper from '../components/atoms/Wrapper';
import FilterWrapper from '../components/atoms/FilterWrapper';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';
import bgImage from '../assets/stars-background.jpg';
import FilterByLanguages from '../components/molecules/FilterByLanguages';
import FilterByName from '../components/molecules/FilterByName';
import { FlexCenterAroundColumn } from '../helpers/cssFlex';
import { mapStateToProps } from '../helpers/mapStateToProps';
import { getProject } from '../redux/actions/getProject';
import ProjectCard from '../components/molecules/ProjectCard';

const Hero = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${({ theme }) => theme.white};
    text-align: center;
    line-height: 130%;
    font-size: 3.6rem;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.bold};
    text-transform: uppercase;
  }
  h4 {
    color: ${({ theme }) => theme.gray};
    margin-bottom: 30px;
  }
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  ${FlexCenterAroundColumn}
`;

const ProjectsView = ({ user, projects, getProject }) => {
  const LoggedAndCanCreate = user.isAuth && user.avaible;
  const LoggedAndCannotCreate = user.isAuth && !user.avaible;
  const NotLoggedIn = !user.isAuth;

  React.useEffect(() => {
    getProject();
  }, [getProject]);
  return (
    <Wrapper image={bgImage}>
      <Header />
      <Hero>
        {!!LoggedAndCanCreate && (
          <>
            <h1>CREATE YOUR PROJECT FOR FREE !</h1>
            <h4>{user.avaible} left </h4>
            <Button bg="purpleDark">create now !</Button>{' '}
          </>
        )}
        {!!LoggedAndCannotCreate && (
          <>
            <h1>
              YOU HAVE ANY AVAIBLE <br /> PROJECTS TO CREATE !
            </h1>
            <h4> only 0,99$ </h4>
            <Button bg="purpleDark">buy now !</Button>{' '}
          </>
        )}
        {!!NotLoggedIn && (
          <>
            <h1>CREATE YOUR PROJECT FOR FREE !</h1>
            <h4> for free</h4>
            <Button bg="purpleDark">sign up now !</Button>{' '}
          </>
        )}
      </Hero>
      <FilterWrapper>
        <FilterByName title="find project for you" />
        <FilterByLanguages />
      </FilterWrapper>
      <ProjectsWrapper>
        {projects.projects.map((project) => (
          <ProjectCard data={project} />
        ))}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default connect(mapStateToProps('user', 'projects'), { getProject })(ProjectsView);
