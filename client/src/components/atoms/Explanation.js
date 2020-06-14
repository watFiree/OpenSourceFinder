import styled from 'styled-components';

const Explanation = styled.div`
  width: 65%;
  padding: 32px 32px;
  margin-bottom: 48px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.2rem;
  background-color: ${({ theme }) => theme.blackLight};
  color: ${({ theme }) => theme.white || 'white'};
  font-weight: ${({ theme }) => theme.bold || 700};
  border: 4px solid ${({ theme }) => theme.purpleDark};
`;

export default Explanation;
