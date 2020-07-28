import React from 'react';
import styled from 'styled-components';
import { CenterCenterColumn } from 'styled-components-flexbox-tooltip';
import LoadingCircle from '../atoms/LoadingCircle';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${CenterCenterColumn};
`;

const BackgroundLoading = ({ color, size }) => (
  <Wrapper>
    <LoadingCircle size={size} margin="24px 0" color={color} />
    <Text size="1.4rem" color={color}>
      Loading...
    </Text>
  </Wrapper>
);

export default BackgroundLoading;
