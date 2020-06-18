import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/atoms/Wrapper';
import FilterWrapper from '../components/atoms/FilterWrapper';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';
import bgImage from '../assets/stars-background.jpg';
import FilterByLanguages from '../components/molecules/FilterByLanguages';
import FilterByName from '../components/molecules/FilterByName';

const Hero = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${({ theme }) => theme.white};
    text-align: center;
    line-height: 130%;
    font-size: 3.6rem;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.bold};
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`;

const ProjectsView = () => {
  return (
    <Wrapper image={bgImage}>
      <Header />
      <Hero>
        <h1>START WITH YOUR PROJECT FOR FREE !</h1>
        <Button bg="purpleDark">sign up now</Button>
      </Hero>
      <FilterWrapper>
        <FilterByName title="find project for you" />
        <FilterByLanguages />
      </FilterWrapper>
    </Wrapper>
  );
};

export default ProjectsView;
