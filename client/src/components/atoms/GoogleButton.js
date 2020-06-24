import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/GoogleButton.png';

const A = styled.a`
  width: 100%;
  img {
    width: 100%;
  }
`;

const GoogleButton = () => {
  return (
    <A href="http://localhost:6969/auth/google">
      <img src={Image} alt="Sign in with Google" />
    </A>
  );
};

export default GoogleButton;
