import React from 'react';
import styled from 'styled-components';
import Title from '../../components/atoms/Title';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import UserCard from '../../components/molecules/UserCard';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsersList = styled.div`
  width: 50%;
  ${FlexCenterAroundColumn};
`;

const ProjectUsers = () => {
  return (
    <Wrapper>
      <Title size="1.8rem" margin="30px 0">
        ADMINS
      </Title>
      <UsersList>
        <UserCard />
        <UserCard />
        <UserCard />
      </UsersList>
      <Title size="1.8rem" margin="30px 0">
        USERS
      </Title>
      <UsersList>
        <UserCard />
        <UserCard />
        <UserCard />
      </UsersList>
    </Wrapper>
  );
};

export default ProjectUsers;
