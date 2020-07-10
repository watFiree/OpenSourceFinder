import React from 'react';
import styled from 'styled-components';
import CreateTooltip from '../molecules/CreateTooltip';
import Title from '../atoms/Title';
import RecentActivity from '../atoms/RecentActivity';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
`;

const Actions = styled.div`
  width: 50%;
  height: 60vh;
`;

const Recent = styled(Actions)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Flex = styled.div`
  height: 70%;
  ${FlexCenterAroundColumn}
`;

const ProjectMenu = () => {
  return (
    <Wrapper>
      <Recent>
        <Title size="1.8rem" margin="5% 0">
          RECENT ACTIVITY
        </Title>
        <RecentActivity />
        <RecentActivity />
        <RecentActivity />
        <RecentActivity />
        <RecentActivity />
        <RecentActivity />
        <RecentActivity />
        <RecentActivity />
      </Recent>
      <Actions>
        <Title size="1.8rem" margin="5% 0">
          ACTIONS
        </Title>
        <Flex>
          <CreateTooltip width="30%">Add user</CreateTooltip>
          <CreateTooltip width="30%">Create offer</CreateTooltip>
          <CreateTooltip width="30%">Create announcement</CreateTooltip>
        </Flex>
      </Actions>
    </Wrapper>
  );
};

export default ProjectMenu;
