import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../../assets/logo.svg';
import Title from '../atoms/Title';

const Wrapper = styled.div`
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

const Logo = ({ to }) => {
  const history = useHistory();
  const handleRedirect = () => history.push(to);
  return (
    <Wrapper onClick={handleRedirect}>
      <Title size="1.6rem" as="p">
        OpenSourceFinder
      </Title>
      <img src={LogoImage} alt="logo" />
    </Wrapper>
  );
};

export default Logo;
