import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  width: ${({ width }) => width || '60%'};
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      list-style: none;
    }
  }
`;

const Navigation = ({ children, width }) => {
  return (
    <Wrapper width={width}>
      <ul>
        {children.map((child) => (
          <li key={child.props.children}>{child}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Navigation;
