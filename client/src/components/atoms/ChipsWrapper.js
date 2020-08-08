import styled from 'styled-components';

const ChipsWrapper = styled.div`
  padding: 1.4rem 0;
  width: ${({ width }) => width || '80%'};
  height: ${({ height }) => height || '100%'};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export default ChipsWrapper;
