import React from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import Header from '../components/organisms/Header';
import ImageWrapper from '../components/atoms/Wrapper';
import BgImage from '../assets/user-view-background.jpg';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import withAuth from '../hoc/withAuth';
import Invitation from '../components/molecules/Invitation';
import UserDataBar from '../components/molecules/UserDataBar';
import BackgroundLoading from '../components/molecules/BackgroundLoading';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  width: 100%;
  min-height: 75vh;
  height: 100%;
  padding: 3%;
  margin-top: 55px;
  ${flex.CenterCenterColumn};
  justify-content: flex-start;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Profile = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  height: 100%;
  max-width: 50%;
  margin-left: 3%;
  ${flex.DefaultCenter}
  flex-direction: column;
  align-items: flex-start;
`;

const Invitatons = styled.div`
  width: 50%;
  ${flex.CenterAroundColumn};
  ${Title} {
    justify-self: self-start;
  }
`;

const EditWrapper = styled.div`
  width: 70%;
  margin-top: 5%;
  ${flex.CenterAroundColumn};
`;

const MyAccountView = ({ user }) => {
  return (
    <ImageWrapper image={BgImage}>
      <Header />
      <Wrapper>
        {user.loading && !user.isAuth ? (
          <BackgroundLoading size="3.1rem" color="purpleLight" />
        ) : (
          <>
            <Content>
              <Profile>
                <img src={BgImage} alt="profile" />
                <Info>
                  <Title as="h2" size="2.1rem" margin="0 0 20px 0">
                    {user.name}
                  </Title>
                  <Text color="gray">{user.about || '...'}</Text>
                </Info>
              </Profile>
              <Invitatons>
                <Title as="h2" size="2.1rem" margin="0 0 20px 0">
                  INVITATIONS
                </Title>
                {!user.invitations.length && <Text>You have not got any invitation yet</Text>}
                {user.invitatons?.map((invitation, index) => (
                  <Invitation key={index} id={invitation.projectI} name={invitation.projectName} />
                ))}
              </Invitatons>
            </Content>
            <EditWrapper>
              <Title as="h2" size="2.1rem" margin="0 0 20px 0">
                DATA
              </Title>
              <UserDataBar title="name" data={user.name} />
              <UserDataBar title="email" data={user.email} />
              <UserDataBar title="password" data={user.password} />
              <UserDataBar title="about" data={user.about} />
            </EditWrapper>
          </>
        )}
      </Wrapper>
    </ImageWrapper>
  );
};

export default withAuth(MyAccountView);
