import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import Wrapper from '../components/atoms/Wrapper';
import Title from '../components/atoms/Title';
import Header from '../components/organisms/Header';
import InviteUserForm from '../components/organisms/InviteUserForm';
import CreateOfferForm from '../components/organisms/CreateOfferForm';
import CreateTaskForm from '../components/organisms/CreateTaskForm';
import bgImage from '../assets/user-projects-background.jpg';
import withAuth from '../hoc/withAuth';
import { FlexCenterColumn, FlexCenterAroundColumn, FlexCenter } from '../helpers/cssFlex';
import Button from '../components/atoms/Button';
import Link from '../components/atoms/Link';
import SimpleProjectCard from '../components/organisms/ProjectCards';
import CreateTooltip from '../components/molecules/CreateTooltip';
import CreateProjectForm from '../components/organisms/CreateProjectForm';
import useViews from '../hooks/useViews';
import { mapStateToProps } from '../helpers/mapStateToProps';
import { getProject } from '../redux/actions/getProject';
import useProjectData from '../hooks/useProjectData';
import useEditForm from '../hooks/useEditForm';

const Heading = styled.div`
  height: 25vh;
  color: ${({ theme }) => theme.white};
  font-size: 3.6rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  ${FlexCenterColumn}
`;

const CreateProjectWrapper = styled.div`
  width: 100%;
  height: 20vh;
  border-top: 3px solid ${({ theme }) => theme.purpleDark};
  border-bottom: 3px solid ${({ theme }) => theme.purpleDark};
  background-color: ${({ theme }) => theme.blackLight};
  ${FlexCenter}
  font-size: 2.4rem;
`;

const ProjectsList = styled.div`
  width: 100%;
  min-height: 45vh;
  height: 100%;
  background-color: rgba(72, 67, 79, 0.8);
  ${FlexCenterAroundColumn};
`;

const UsersProjectsView = ({ user, projects, getProject }) => {
  const [exactProjectView, setExactProjectView] = useState({});
  const [data] = useProjectData(user.projectsIds, projects, getProject);
  const [view, setView, closeView, { userView, taskView, offerView }] = useViews();
  const [editing, editingData, editOpen, editClose] = useEditForm();
  const projectView = 'projectView';
  return (
    <Wrapper css={FlexCenterAroundColumn} image={bgImage}>
      <Header />
      <Heading>
        {!user.isAuth ? (
          <>
            Sign up to create yout own projects !
            <Link to="/signin">
              <Button bg="purpleDark">Sign up</Button>
            </Link>
          </>
        ) : (
          <Title size="3.6rem">Hello World !</Title>
        )}
      </Heading>
      {view === projectView && <CreateProjectForm close={closeView} />}
      {editing && <CreateProjectForm data={editingData} close={editClose} edit={editing} />}
      {user.isAuth && (
        <>
          <CreateProjectWrapper>
            <CreateTooltip onClick={() => setView(projectView)}>Create Project</CreateTooltip>
          </CreateProjectWrapper>
          <ProjectsList>
            <Title margin="25px 0 0 0" size="3.6rem">
              Your projects{' '}
            </Title>
            {data?.map((project) => (
              <SimpleProjectCard
                key={project.slug}
                admin={project.admins.map((admin) => admin._id).includes(user._id)}
                openFnc={setView}
                data={project}
                setProjectFnc={setExactProjectView}
                editProject={editOpen}
              />
            ))}
          </ProjectsList>
        </>
      )}

      {view === userView && (
        <InviteUserForm
          projectId={exactProjectView._id}
          projectName={exactProjectView.name}
          close={closeView}
        />
      )}
      {view === offerView && <CreateOfferForm id={exactProjectView._id} close={closeView} />}
      {view === taskView && <CreateTaskForm id={exactProjectView._id} close={closeView} />}
    </Wrapper>
  );
};

export default connect(mapStateToProps('projects'), { getProject })(withAuth(UsersProjectsView));
