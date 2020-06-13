import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import Header from '../components/organisms/Header';

const StyledDiv = styled.div`
  height: 150vh;
`;

const Main = () => (
  <>
    <Header />
    <Title size={3.2} weight="regular" color="blackDark">
      Almost before we knew it, we had left the ground.
    </Title>
    <Button bg="purpleDark">Sign up</Button>
    <Text size={1.8} weight="regular" color="blackLight">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </Text>
    <StyledDiv />
  </>
);

export default Main;
