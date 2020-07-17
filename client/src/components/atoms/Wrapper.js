import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  background-image: url(${({ image }) => image});
  color: ${({ theme }) => theme.white};
  width: 100%;
  min-height: 100vh;
  padding-top: 120px;
`;

export default Wrapper;
