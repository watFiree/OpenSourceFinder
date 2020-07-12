import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { FlexCenterAroundColumn, FlexCenterAround } from '../../helpers/cssFlex';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  border-radius: 15px;
  width: 60%;
  display: flex;
  padding: 10px;
  margin-bottom: 15px;
  ${FlexCenterAroundColumn};
`;

const Buttons = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 40px;
  ${FlexCenterAround}
`;

export const OfferCard = ({ data }) => {
  return (
    <Wrapper>
      <Text>{data.name}</Text>
      <Buttons>
        <Button size="small" bg="purpleDark">
          More
        </Button>
        <Button size="small" bg="purpleLight">
          Edit
        </Button>
        <Button size="small" bg="error">
          Remove
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export const ApplicationCard = () => {
  return (
    <Wrapper>
      <Text>nickname</Text>
      <Text color="gray">Offer type</Text>
      <Buttons>
        <Button size="small" bg="purpleDark">
          More
        </Button>
        <Button size="small" bg="purpleLight">
          Accept
        </Button>
        <Button size="small" bg="error">
          Decline
        </Button>
      </Buttons>
    </Wrapper>
  );
};
