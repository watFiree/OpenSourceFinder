import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AcceptIcon from '@material-ui/icons/Done';
import RejectIcon from '@material-ui/icons/Close';
import Title from '../atoms/Title';
import { FlexCenterAround } from '../../helpers/cssFlex';

const Wrapper = styled.div`
  width: 70%;
  padding: 2% 1%;
  border: 3px solid ${({ theme }) => theme.purpleLight};
  ${FlexCenterAround};
`;

const Buttons = styled.div`
  width: 20%;
  ${FlexCenterAround};
  justify-content: space-between;
`;

const AcceptButton = styled(AcceptIcon)`
  color: #029811;
  font-size: 2.1rem;
`;

const RejectButton = styled(RejectIcon)`
  color: ${({ theme }) => theme.error};
  font-size: 2.1rem;
`;

const Invitation = ({ id, name }) => {
  const history = useHistory();
  return (
    <Wrapper onClick={() => history.push(`/user/projects/${id}`)}>
      <Title as="h3" size="1.8rem">
        {name}
      </Title>
      <Buttons>
        <AcceptButton />
        <RejectButton />
      </Buttons>
    </Wrapper>
  );
};

export default Invitation;
