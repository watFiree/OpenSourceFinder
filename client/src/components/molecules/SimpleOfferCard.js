import React from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import Title from '../atoms/Title';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

const Wrapper = styled.div`
  width: 20%;
  padding: 1.4rem;
  ${flex.CenterAroundColumn};
  background-color: ${({ theme }) => theme.blackDark};
  border-radius: 15px;
  margin-bottom: 2.1rem;
`;

const SimpleOfferCard = ({ name, id }) => {
  return (
    <Wrapper>
      <Title margin="0 0 1.4rem 0">{name}</Title>
      <Link to={`/offer/${id}`}>
        <Button bg="purpleDark">More</Button>
      </Link>
    </Wrapper>
  );
};

export default SimpleOfferCard;
