import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled(Button)`
  background-color: ${({ theme, bg }) => theme[bg] || theme.blackLight};
  color: ${({ theme }) => theme.white || 'white'};
  font-weight: ${({ theme, weight }) => theme[weight] || 500};
  letter-spacing: 1px;

  &:hover {
    background-color: ${({ theme, bg }) => theme[bg] || theme.blackLight};
  }
`;

const Btn = ({ children, bg, size = 'large' }) => {
  window.addEventListener('scroll', () => console.log(window.pageYOffset));
  return (
    <Wrapper variant="contained" size={size} bg={bg}>
      {children}
    </Wrapper>
  );
};

export default Btn;
