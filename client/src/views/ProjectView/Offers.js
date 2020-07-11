import React from 'react';
import styled from 'styled-components';
import { OfferCard, ApplicationCard } from '../../components/organisms/OfferCards';
import Title from '../../components/atoms/Title';
import { FlexCenterColumn } from '../../helpers/cssFlex';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Flex = styled.div`
  width: 80%;
  ${FlexCenterColumn}
`;

const ProjectOffers = () => {
  return (
    <Wrapper>
      <Container>
        <Title size="1.8rem" margin="40px 0">
          Offers
        </Title>
        <Flex>
          <OfferCard />
          <OfferCard />
        </Flex>
      </Container>
      <Container>
        <Title size="1.8rem" margin="40px 0">
          Applications
        </Title>
        <Flex>
          <ApplicationCard />
          <ApplicationCard />
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default ProjectOffers;
