import React from 'react';
import styled from 'styled-components/macro';
import Tooltip from '@material-ui/core/Tooltip';
import Wrapper from '../components/atoms/Wrapper';
import Title from '../components/atoms/Title';
import Header from '../components/organisms/Header';
import bgImage from '../assets/offers-background.jpg';
import withAuth from '../hoc/withAuth';
import {
  FlexCenterColumn,
  FlexCenterAroundColumn,
  FlexCenter,
  FlexCenterAround,
} from '../helpers/cssFlex';
import Button from '../components/atoms/Button';
import Link from '../components/atoms/Link';
import { SimpleProjectCard } from '../components/molecules/ProjectCards';
import AddIcon from '../components/atoms/AddIcon';

const Heading = styled.div`
  height: 20vh;
  color: ${({ theme }) => theme.white};
  font-size: 3.6rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  ${FlexCenterColumn}
`;

const CreateProject = styled.div`
  width: 100%;
  height: 20vh;
  border-top: 3px solid ${({ theme }) => theme.purpleDark};
  border-bottom: 3px solid ${({ theme }) => theme.purpleDark};
  background-color: ${({ theme }) => theme.blackLight};
  ${FlexCenter}
  font-size: 2.4rem;
  div {
    width: 30%;
    height: 100%;
    ${FlexCenterAround}
  }
`;

const ProjectsList = styled.div`
  width: 100%;
  height: 100%;
  ${FlexCenterAroundColumn}
`;

const OffersView = ({ user }) => {
  return (
    <Wrapper css={FlexCenterAroundColumn} image={bgImage}>
      <Header />
      <Heading>
        {!user.isAuth ? (
          <>
            Sign up to create yout own projects !
            <Link to="/signin">
              <Button bg="purpleDark">Sign up</Button>
            </Link>
          </>
        ) : (
          <Title size="3.6rem">Hello World !</Title>
        )}
      </Heading>

      <CreateProject>
        <div>
          Create Project{' '}
          <Tooltip title="Create" aria-label="create" arrow>
            <AddIcon color="purpleLight" />
          </Tooltip>
        </div>
      </CreateProject>
      <Title size="3.6rem">Your projects </Title>
      <ProjectsList>
        <SimpleProjectCard data={{ name: 'Hello' }} />
        <SimpleProjectCard data={{ name: 'Hello' }} />
        <SimpleProjectCard data={{ name: 'Hello' }} />
        <SimpleProjectCard data={{ name: 'Hello' }} />
        <SimpleProjectCard data={{ name: 'Hello' }} />
        <SimpleProjectCard data={{ name: 'Hello' }} />
        <SimpleProjectCard data={{ name: 'Hello' }} />
        <SimpleProjectCard data={{ name: 'Hello' }} />
      </ProjectsList>
    </Wrapper>
  );
};

export default withAuth(OffersView);
