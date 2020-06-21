import React from 'react';
import styled from 'styled-components';
import { Link as A } from 'react-router-dom';

const Wrapper = styled.a`
  font-size: ${({ size }) => `${size}rem` || '1.4 rem'};
  color: ${({ theme, color }) => theme[color] || theme.gray};
  font-weight: ${({ theme, weight }) => theme[weight] || 500};
  text-decoration: none;
  transition: 0.1s;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

const Link = ({ children, to, size, color }) => (
  <Wrapper size={size} as={A} to={to} color={color}>
    {children}
  </Wrapper>
);

export default Link;
