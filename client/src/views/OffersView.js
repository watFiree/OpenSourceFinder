import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/atoms/Wrapper';
import FilterWrapper from '../components/atoms/FilterWrapper';
import Header from '../components/organisms/Header';
import FilterByLanguages from '../components/molecules/FilterByLanguages';
import FilterByName from '../components/molecules/FilterByName';
import bgImage from '../assets/offers-background.jpg';

const HeroText = styled.h1`
  color: ${({ theme }) => theme.white};
  text-align: center;
  line-height: 130%;
  font-size: 3.6rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.bold};
  padding: 50px 0;
  text-transform: uppercase;
`;

const OffersView = () => {
  return (
    <Wrapper image={bgImage}>
      <Header />
      <HeroText>find project perfect for you</HeroText>
      <FilterWrapper>
        <FilterByName title="find by project name" />
        <FilterByLanguages />
      </FilterWrapper>
    </Wrapper>
  );
};

export default OffersView;
