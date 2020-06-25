import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';

const Wrapper = styled.a`
  margin: 3%;
  width: 97%;
  height: 22%;
  background-color: ${({ theme }) => theme.white || 'white'};
  color: #2a2a2a;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.bold || 700};
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 5px;
  p {
    width: 80%;
  }
`;

const Icon = styled(GitHubIcon)`
  width: 30%;
  color: #2a2a2a;
`;

const GithubButton = () => {
  return (
    <Wrapper href="http://localhost:6969/auth/github">
      <Icon fontSize="large" />
      <p>Sign in with GitHub</p>
    </Wrapper>
  );
};

export default GithubButton;
