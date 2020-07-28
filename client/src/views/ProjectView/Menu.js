import React from 'react';
import styled from 'styled-components';
import CreateTooltip from '../../components/molecules/CreateTooltip';
import Title from '../../components/atoms/Title';
import RecentActivity from '../../components/atoms/RecentActivity';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import InviteUserForm from '../../components/organisms/InviteUserForm';
import CreateOfferForm from '../../components/organisms/CreateOfferForm';
import CreateTaskForm from '../../components/organisms/CreateTaskForm';
import useViews from '../../hooks/useViews';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
  padding: 2% 0;
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

const ProjectMenu = ({ data }) => {
  const [view, setView, closeView, { userView, taskView, offerView }] = useViews();
  return (
    <Wrapper>
      <Recent>
        <Title size="1.8rem" margin="0 0 5% 0">
          RECENT ACTIVITY
        </Title>
        <RecentActivity />
        <RecentActivity />
        <RecentActivity />
      </Recent>
      <Actions>
        <Title size="1.8rem" margin="0 0 5% 0">
          ACTIONS
        </Title>
        <Flex>
          <CreateTooltip width="30%" onClick={() => setView(userView)}>
            Invite user
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
      {view === userView && (
        <InviteUserForm projectId={data._id} projectName={data.name} close={closeView} />
      )}
      {view === offerView && <CreateOfferForm data={{ projectId: data._id }} close={closeView} />}
      {view === taskView && <CreateTaskForm data={{ projectId: data._id }} close={closeView} />}
    </Wrapper>
  );
};

export default ProjectMenu;
