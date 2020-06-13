import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../atoms/Link';
import Title from '../atoms/Title';
import Navigation from '../molecules/Navigation';
import MailIcon from '../atoms/MailIcon';
import AccountIcon from '../atoms/AccountIcon';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  width: 100%;
  position: fixed;
  top: 0;
  color: white;
  display: flex;
  padding: 32px 12px;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.2s;
  z-index: 10000;
  ${({ fromTop }) =>
    fromTop >= 30 &&
    css`
      padding: 16px 6px;
    `}
`;

const IconsWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => {
  const [fromTop, setFromTop] = React.useState(0);
  window.addEventListener('scroll', () => setFromTop(window.pageYOffset));

  return (
    <Wrapper as="header" fromTop={fromTop}>
      <Link to="/">
        <Title size="1.6">OpenSourceFinder</Title>
      </Link>
      <Navigation>
        <Link size="1.2" to="/projects">
          projects
        </Link>
        <Link size="1.2" to="/projects">
          offers
        </Link>
      </Navigation>
      <IconsWrapper>
        <MailIcon />
        <AccountIcon size="2.4" />
      </IconsWrapper>
    </Wrapper>
  );
};

export default Header;
