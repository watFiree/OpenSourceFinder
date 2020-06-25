import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/atoms/Wrapper';
import Header from '../components/organisms/Header';
import bgImage from '../assets/offers-background.jpg';
import withAuth from '../hoc/withAuth';
import { FlexCenterColumn } from '../helpers/cssFlex';
import Button from '../components/atoms/Button';
import Link from '../components/atoms/Link';

const NotLoggedIn = styled.div`
  height: 86.7vh;
  color: ${({ theme }) => theme.white};
  font-size: 3.6rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  ${FlexCenterColumn}
`;

const OffersView = ({ user }) => {
  return (
    <Wrapper image={bgImage}>
      <Header />
      {!user.isAuth && (
        <NotLoggedIn>
          {' '}
          Sign up to create yout own projects !
          <Link to="/signin">
            <Button bg="purpleDark">Sign up</Button>
          </Link>
        </NotLoggedIn>
      )}
    </Wrapper>
  );
};

export default withAuth(OffersView);
