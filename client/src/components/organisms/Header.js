import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { connect } from 'react-redux';
import Logo from '../molecules/Logo';
import Link from '../atoms/Link';
import Navigation from '../molecules/Navigation';
import MailIcon from '../atoms/MailIcon';
import UserIcon from '../molecules/UserIcon';
import { mapStateToProps } from '../../helpers/mapStateToProps';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  color: white;
  display: flex;
  padding: 32px 12px;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;
  ${({ fromTop }) =>
    fromTop >= 30 &&
    css`
      padding: 16px 6px;
    `}
`;

const IconsWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const UserActions = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-around;
`;

const Header = ({ user }) => {
  const [fromTop, setFromTop] = useState(0);
  window.addEventListener('scroll', () => setFromTop(window.pageYOffset));

  return (
    <Wrapper as="header" fromTop={fromTop}>
      <Logo to="/" />
      <UserActions>
        <Navigation>
          <Link size="1.2rem" to="/projects">
            find project
          </Link>
          <Link size="1.2rem" to="/user/projects">
            your projects
          </Link>
        </Navigation>
        <IconsWrapper>
          {user.isAuth && <MailIcon />} <UserIcon isAuth={user.isAuth} />
        </IconsWrapper>
      </UserActions>
    </Wrapper>
  );
};

export default connect(mapStateToProps('user'))(Header);
