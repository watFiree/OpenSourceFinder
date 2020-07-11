import React from 'react';
import styled from 'styled-components';
import CreateTooltip from '../../components/molecules/CreateTooltip';
import Title from '../../components/atoms/Title';
import RecentActivity from '../../components/atoms/RecentActivity';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import AddUserForm from '../../components/organisms/AddUserForm';
import CreateOfferForm from '../../components/organisms/CreateOfferForm';
import CreateTaskForm from '../../components/organisms/CreateTaskForm';
import useViews from '../../hooks/useViews';

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
  const [view, setView, closeView, { userView, taskView, offerView }] = useViews();
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
          <CreateTooltip width="30%" onClick={() => setView(userView)}>
            Add user
          </CreateTooltip>

          <CreateTooltip width="30%" onClick={() => setView(offerView)}>
            Create offer
          </CreateTooltip>

          <CreateTooltip width="30%" onClick={() => setView(taskView)}>
            Create task
          </CreateTooltip>

          <CreateTooltip width="30%">Create announcement</CreateTooltip>
        </Flex>
      </Actions>
      {view === userView && <AddUserForm close={closeView} />}
      {view === offerView && <CreateOfferForm close={closeView} />}
      {view === taskView && <CreateTaskForm close={closeView} />}
    </Wrapper>
  );
};

export default ProjectMenu;
