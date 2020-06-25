import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/GoogleButton.png';

const Wrapper = styled.a`
  margin: 3%;
  width: 97%;
  height: 22%;
  background-color: #c8c8c8;
  color: #4d5057;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.bold || 700};
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 5px;
  p {
    width: 80%;
  }
  img {
    width: 18%;
    margin-left: 6%;
    margin-right: 6%;
  }
`;

const GoogleButton = () => {
  return (
    <Wrapper href="http://localhost:6969/auth/google">
      <img src={Image} alt="Google" />
      <p>Sign in with Google</p>
    </Wrapper>
  );
};

export default GoogleButton;
