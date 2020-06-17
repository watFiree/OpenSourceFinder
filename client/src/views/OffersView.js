import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/atoms/Wrapper';
import Header from '../components/organisms/Header';
import FilterByLanguages from '../components/molecules/FilterByLanguages';
import FilterByName from '../components/molecules/FilterByName';
import bgImage from '../assets/offers-background.jpg';

const Divek = styled.div`
  margin-top: 300px;
`;

const OffersView = () => {
  return (
    <Wrapper image={bgImage}>
      <Header />
      <Divek>
        <FilterByName title="find by project name" />
        <FilterByLanguages />
      </Divek>
    </Wrapper>
  );
};

export default OffersView;
