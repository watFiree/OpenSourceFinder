import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import Header from '../components/organisms/Header';
import TechnologiesBar from '../components/molecules/TechnologiesBar';
import Footer from '../components/molecules/Footer';
import Explanation from '../components/atoms/Explanation';
import bgImg from '../assets/earth-background.jpg';
import handsImg from '../assets/hands.svg';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
`;

const Hero = styled.div`
  margin-top: 5vh;
  width: 100%;
  height: 95vh;
  background-image: url(${bgImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: ${({ theme }) => theme.white};
    text-align: center;
    line-height: 130%;
    font-size: 3.6rem;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.bold};
    margin-bottom: 30px;
  }
`;

const InfoBox = styled.div`
  margin: auto;
  margin-bottom: 32px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60vh;
  border-bottom: 5px solid ${({ theme }) => theme.purpleDark};
  div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const InstructionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
  justify-content: space-around;
`;

const Main = () => (
  <Wrapper>
    <Header />
    <Hero>
      <p>
        CODE WITH <br /> ANYONE <br /> FROM <br /> ANYWHERE !
      </p>
      <Button bg="purpleDark">sign up now</Button>
    </Hero>
    <TechnologiesBar />
    <InfoBox>
      <img src={handsImg} alt="hands" />
      <div>
        <Title size={3.2} weight="regular" margin="32px">
          Cooperate and contribute with others easily !
        </Title>
        <Text size={1.8} weight="regular">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem Ipsum.
        </Text>
      </div>
    </InfoBox>
    <InstructionBox>
      <Title size={3.2} weight="regular" margin="48px">
        How to start ?
      </Title>
      <Explanation> 1. Create free account</Explanation>
      <Explanation> 1. Create free account</Explanation>
      <Explanation> 1. Create free account</Explanation>
      <Explanation> 1. Create free account</Explanation>
    </InstructionBox>
    <Footer />
  </Wrapper>
);

export default Main;
