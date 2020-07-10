import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '../atoms/AddIcon';
import { FlexCenterAround } from '../../helpers/cssFlex';

const Wrapper = styled.div`
  font-size: ${({ size }) => size || '1.8rem'};
  text-align: justify;
  width: ${({ width }) => width || '20%'};
  height: 100%;
  ${FlexCenterAround};
  justify-content: space-between;
`;

const CreateTooltip = ({ children, color = 'purpleLight', size, width }) => (
  <Wrapper size={size} width={width}>
    {children}
    <Tooltip title="Create" aria-label="create" arrow>
      <AddIcon color={color} size="60%" />
    </Tooltip>
  </Wrapper>
);

export default CreateTooltip;
