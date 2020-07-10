import React from 'react';
import styled, { css } from 'styled-components/macro';
import AddUserIcon from '@material-ui/icons/PersonAddOutlined';
import Text from './Text';
import { FlexCenterColumn, FlexCenter } from '../../helpers/cssFlex';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  border-radius: 15px;
  width: 60%;
  display: flex;
  padding: 10px;
  margin-bottom: 15px;
`;

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray};
  border-radius: 50%;
  margin-left: 10%;
  margin-right: 5%;
  height: 50px;
  width: 50px;
  ${FlexCenter}
`;

const Info = styled.div`
  ${FlexCenterColumn};
  align-items: flex-start;
  width: 60%;
`;

const Icon = css`
  color: ${({ theme }) => theme.blackDark};
`;

const RecentActivity = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <AddUserIcon css={Icon} fontSize="large" />
      </IconWrapper>
      <Info>
        <Text size="1.1rem" color="gray">
          Added new user: nickname
        </Text>
        <Text size="1.1rem" color="gray">
          23 May 13:28
        </Text>
      </Info>
    </Wrapper>
  );
};

export default RecentActivity;
