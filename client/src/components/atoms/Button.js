import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled(Button)`
  background-color: ${({ theme, bg }) => theme[bg] || theme.blackLight};
  color: ${({ theme }) => theme.white || 'white'};
  font-weight: ${({ theme, weight }) => theme[weight] || 700};
  letter-spacing: 1px;
  padding: 15px 30px;
  &:hover {
    background-color: ${({ theme, bg }) => theme[bg] || theme.blackLight};
  }
`;

const Btn = ({ children, bg, size = 'large', weight }) => (
  <Wrapper variant="contained" size={size} bg={bg} weight={weight}>
    {children}
  </Wrapper>
);

export default Btn;
