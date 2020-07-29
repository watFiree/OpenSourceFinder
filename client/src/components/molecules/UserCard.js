import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { FlexCenter, FlexCenterAround } from '../../helpers/cssFlex';
import { promoteOrDegradeUser } from '../../redux/actions/promoteOrDegradeUser';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  border-radius: 15px;
  width: 60%;
  display: flex;
  padding: 10px;
  margin-bottom: 15px;
  ${FlexCenter};
  justify-content: space-between;
`;

const Buttons = styled.div`
  width: 60%;
  ${FlexCenterAround};
`;

const UserCard = ({ data, admin, projectId, promoteOrDegradeUser }) => {
  const handlePromoteOrDegrade = (type) =>
    promoteOrDegradeUser({ projectId, userId: data._id, type });
  return (
    <Wrapper>
      <Avatar alt="nickname" src="/images/angular.svg" />
      <Text color="gray">{data.name}</Text>
      <Buttons>
        <Button
          size="small"
          bg="purpleDark"
          onClick={() => handlePromoteOrDegrade(admin === 'true' ? 'degrade' : 'promote')}
        >
          {admin === 'true' ? 'Degrade' : 'Promote'}
        </Button>
        <Button size="small" bg="error">
          Remove
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default connect(null, { promoteOrDegradeUser })(UserCard);
