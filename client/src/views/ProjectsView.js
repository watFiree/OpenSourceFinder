import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import Wrapper from '../components/atoms/Wrapper';
import FilterWrapper from '../components/atoms/FilterWrapper';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';
import bgImage from '../assets/stars-background.jpg';
import FilterByLanguages from '../components/molecules/FilterByLanguages';
import FilterByName from '../components/molecules/FilterByName';
import { FlexCenterAroundColumn, FlexCenter } from '../helpers/cssFlex';
import { mapStateToProps } from '../helpers/mapStateToProps';
import { getProject } from '../redux/actions/getProject';
import ProjectCard from '../components/molecules/ProjectCard';
import usePagination from '../hooks/usePagination';

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

const StyledPagination = styled(Pagination)`
  background-color: ${({ theme }) => theme.purpleLight};
  border-top: 3px solid ${({ theme }) => theme.purpleDark};
  padding: 10px;
  margin-top: 20px;
  ${FlexCenter}
`;

const ProjectsView = ({ user, projects, getProject }) => {
  const LoggedAndCanCreate = user.isAuth && user.avaible;
  const LoggedAndCannotCreate = user.isAuth && !user.avaible;
  const NotLoggedIn = !user.isAuth;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePagination = (event, value) => setCurrentPage(value - 1);

  useEffect(() => {
    getProject();
  }, [getProject]);

  const [data, pages] = usePagination(currentPage, projects.projects);

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
        {data?.map((project) => (
          <ProjectCard key={project.name} data={project} />
        ))}
      </ProjectsWrapper>
      <StyledPagination
        count={pages}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={handlePagination}
      />
    </Wrapper>
  );
};

export default connect(mapStateToProps('user', 'projects'), { getProject })(ProjectsView);
