import React, { useState, useEffect } from 'react';
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
  padding: 2% 0;
`;

const UsersList = styled.div`
  width: 50%;
  ${FlexCenterAroundColumn};
`;

const ProjectUsers = ({ data }) => {
  const { admins, users, _id } = data;
  const [usersWithoutAdmins, setUsersWithoutAdmins] = useState([]);
  useEffect(() => {
    const adminsIds = admins.map((admin) => admin._id);
    setUsersWithoutAdmins(users.filter((user) => !adminsIds.includes(user._id)));
  }, [admins, users]);
  return (
    <Wrapper>
      <Title size="1.8rem" margin="0 0 30px 0">
        ADMINS
      </Title>
      <UsersList>
        {admins.map((user) => (
          <UserCard key={user._id} admin="true" data={user} projectId={_id} />
        ))}
      </UsersList>
      <Title size="1.8rem" margin="30px 0">
        USERS
      </Title>
      <UsersList>
        {usersWithoutAdmins.map((user) => (
          <UserCard key={user._id} data={user} projectId={_id} />
        ))}
      </UsersList>
    </Wrapper>
  );
};

export default ProjectUsers;
