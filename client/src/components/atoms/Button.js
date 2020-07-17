import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled(Button)`
  background-color: ${({ theme, bg }) => theme[bg] || theme.blackLight};
  color: ${({ theme }) => theme.white || 'white'};
  font-weight: ${({ theme, weight }) => theme[weight] || 700};
  width: ${({ width }) => width};
  letter-spacing: 1px;
  padding: 12px 30px;
  &:hover {
    background-color: ${({ theme, bg }) => theme[bg] || theme.blackLight};
  }
`;

const Btn = ({ children, bg, size = 'large', weight, width, type, onClick }) => (
  <Wrapper
    onClick={onClick}
    variant="contained"
    size={size}
    bg={bg}
    weight={weight}
    width={width}
    type={type}
  >
    {children}
  </Wrapper>
);

export default Btn;
