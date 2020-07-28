import React from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const Wrapper = styled.div`
  ${flex.CenterAround};
  width: 80%;
  padding: 2% 0;
  ${Title} {
    ${flex.CenterCenter}
    min-width: 20%;
  }
  ${Text} {
    ${flex.CenterCenter}
    min-width: 50%;
  }
`;

const UserDataBar = ({ title, data }) => (
  <Wrapper>
    <Title>{`${title[0].toUpperCase()}${title.slice(1)}:`}</Title>
    <Text color="gray">{title === 'password' ? '********' : data}</Text>
    <Button bg="purpleDark">Edit</Button>
  </Wrapper>
);

export default UserDataBar;
