import React from 'react';
import styled from 'styled-components';
import reactImg from '../../assets/react.svg';
import angularImg from '../../assets/angular.svg';
import csharpImg from '../../assets/csharp.svg';
import nodejsImg from '../../assets/nodejs.svg';
import typescriptImg from '../../assets/typescript.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.blackLight};
  border-top: 5px solid ${({ theme }) => theme.purpleDark};
  border-bottom: 5px solid ${({ theme }) => theme.purpleDark};
`;

const TechnologiesBar = () => (
  <Wrapper>
    <img src={reactImg} alt="react-logo" />
    <img src={angularImg} alt="angular-logo" />
    <img src={csharpImg} alt="csharp-logo" />
    <img src={nodejsImg} alt="nodejs-logo" />
    <img src={typescriptImg} alt="typescript-logo" />
  </Wrapper>
);

export default TechnologiesBar;
