import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/atoms/Wrapper';
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

const FilterBox = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.blackLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ProjectsView = () => {
  return (
    <Wrapper image={bgImage}>
      <Header />
      <Hero>
        <p>START WITH YOUR PROJECT FOR FREE !</p>
        <Button bg="purpleDark">sign up now</Button>
      </Hero>
      <FilterBox>
        <FilterByName title="find project for you" />
        <FilterByLanguages />
      </FilterBox>
    </Wrapper>
  );
};

export default ProjectsView;
