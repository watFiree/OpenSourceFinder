import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${({ size }) => size || '1.4rem'};
  color: ${({ theme, color }) => theme[color] || theme.white};
  font-weight: ${({ theme, weight }) => theme[weight] || 700};
  text-align: center;
  margin: ${({ margin }) => margin || '0'};
`;

export default Title;
