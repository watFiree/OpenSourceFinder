import styled from 'styled-components';

const Text = styled.p`
  text-align: justify;
  font-size: ${({ size }) => `${size}rem` || '1.4rem'};
  color: ${({ theme, color }) => theme[color] || theme.white};
  font-weight: ${({ theme, weight }) => theme[weight] || 500};
`;

export default Text;
