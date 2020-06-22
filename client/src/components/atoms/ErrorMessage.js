import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error || '#ff0033'};
  font-weight: ${({ theme }) => theme.bold};
  size: ${({ size }) => size || '1.1rem'};
`;

export default ErrorMessage;
