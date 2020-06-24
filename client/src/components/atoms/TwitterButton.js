import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import styled from 'styled-components';

const Wrapper = styled.a`
  margin: 3%;
  width: 97%;
  height: 20%;
  background-color: #1da1f2;
  color: ${({ theme }) => theme.white || 'white'};
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

const Icon = styled(TwitterIcon)`
  width: 30%;
  color: ${({ theme }) => theme.white || 'white'};
`;

const TwitterButton = () => {
  return (
    <Wrapper href="http://localhost:6969/auth/twitter">
      <Icon fontSize="large" />
      <p>Sign in with Twitter</p>
    </Wrapper>
  );
};

export default TwitterButton;
