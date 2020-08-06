import React from 'react';
import styled, { css } from 'styled-components/macro';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/HighlightOff';
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

const RecentActivity = ({ data }) => {
  const date = `${data.date.slice(0, 10)} ${data.date.slice(11, 16)}`;
  return (
    <Wrapper>
      <IconWrapper>
        {data.type === 'Add' && <AddIcon css={Icon} fontSize="large" />}
        {data.type === 'Edit' && <EditIcon css={Icon} fontSize="large" />}
        {data.type === 'Remove' && <RemoveIcon css={Icon} fontSize="large" />}
      </IconWrapper>
      <Info>
        <Text size="1.1rem" color="gray">
          {data.text}
        </Text>
        <Text size="1.1rem" color="gray">
          {date}
        </Text>
      </Info>
    </Wrapper>
  );
};

export default RecentActivity;
