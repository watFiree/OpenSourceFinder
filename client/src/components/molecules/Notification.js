import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import RemoveIcon from '@material-ui/icons/Clear';
import Text from '../atoms/Text';
import { FlexCenterAround } from '../../helpers/cssFlex';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.purpleLight};
  padding: 5px 0;
  ${FlexCenterAround}
  ${({ last }) =>
    last &&
    css`
      border-bottom: 0px solid white;
    `}
`;

const Remove = styled(RemoveIcon)`
  color: ${({ theme }) => theme.error || 'red'};
  font-size: 1.8rem;
  transition: transform 0.3s linear;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Notification = ({ children, to, last = false }) => {
  const history = useHistory();
  return (
    <Wrapper last={last} onClick={() => history.push(to)}>
      <Text size="1.1rem">{children}</Text>
      <Remove />
    </Wrapper>
  );
};

export default Notification;
