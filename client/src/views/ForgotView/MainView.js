import React from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import Logo from '../../components/molecules/Logo';
import BackgroundWrapper from '../../components/atoms/Wrapper';
import bgImage from '../../assets/forgot-password-view-background.jpg';
import SendMailView from './SendMailView';
import NewPasswordView from './NewPasswordView';

const BackgroundWrapperFlex = styled(BackgroundWrapper)`
  padding: 0;
  ${flex.CenterCenterColumn}
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 1.4rem;
  width: 30vw;
  height: ${({ passwordView }) => (passwordView ? '50vh' : '40vh')};
  background-color: ${({ theme }) => theme.blackDark};
  border-radius: 1.8rem;
  padding: 1.1rem;
  ${flex.CenterAroundColumn};
  form {
    height: ${({ passwordView }) => (passwordView ? '70%' : '60%')};
    width: 60%;
    ${flex.CenterBetweenColumn};
  }
`;

const ForgotPasswordView = ({ history, match }) => (
  <BackgroundWrapperFlex image={bgImage}>
    <Logo />
    <Wrapper passwordView={match.params.data}>
      {match.params.data ? (
        <NewPasswordView history={history} data={match.params.data} />
      ) : (
        <SendMailView history={history} />
      )}
    </Wrapper>
  </BackgroundWrapperFlex>
);

export default ForgotPasswordView;
