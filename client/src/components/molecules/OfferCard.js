import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Text from '../atoms/Text';
import Link from '../atoms/Link';
import Button from '../atoms/Button';
import { FlexCenterAroundColumn, FlexCenterAround } from '../../helpers/cssFlex';
import { removeOffer } from '../../redux/actions/removeOffer';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  border-radius: 15px;
  width: 60%;
  display: flex;
  padding: 10px;
  margin-bottom: 15px;
  ${FlexCenterAroundColumn};
`;

export const Buttons = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 40px;
  ${FlexCenterAround}
`;

const OfferCard = ({ data, removeOffer, editOffer }) => (
  <Wrapper>
    <Text>{data.name}</Text>
    <Buttons>
      <Link to={`/offer/${data._id}`}>
        <Button size="small" bg="purpleDark">
          More
        </Button>
      </Link>
      <Button size="small" bg="purpleLight" onClick={() => editOffer(data)}>
        Edit
      </Button>
      <Button size="small" bg="error" onClick={() => removeOffer(data._id)}>
        Remove
      </Button>
    </Buttons>
  </Wrapper>
);

export default connect(null, { removeOffer })(OfferCard);
