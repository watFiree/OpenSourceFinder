import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import withProviders from '../hoc/withProviders';

const Title = styled.h1`
  font-size: 2 rem;
  color: ${(props) => props.theme.purpleLight};
`;

const Root = () => {
  return (
    <>
      <Title>Hello react</Title>
      <Button bg="purpleDark">Sign up</Button>
    </>
  );
};

export default withProviders(Root);
