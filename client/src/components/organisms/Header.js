import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { connect } from 'react-redux';
import Link from '../atoms/Link';
import Title from '../atoms/Title';
import Navigation from '../molecules/Navigation';
import logoImg from '../../assets/logo.svg';
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

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 15%;
  height: 80%;
  img {
    height: 50px;
    transition: 1s ease-out;
  }
  &:hover {
    cursor: pointer;

    img {
      transform: translate(2px, -5px);
    }
  }
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

  const history = useHistory();
  const handleRedirect = () => history.push('/');

  return (
    <Wrapper as="header" fromTop={fromTop}>
      <Logo onClick={handleRedirect}>
        <Title size="1.6" as="p">
          OpenSourceFinder
        </Title>
        <img src={logoImg} alt="logo" />
      </Logo>
      <UserActions>
        <Navigation>
          <Link size="1.2" to="/projects">
            projects
          </Link>
          <Link size="1.2" to="/offers">
            offers
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
