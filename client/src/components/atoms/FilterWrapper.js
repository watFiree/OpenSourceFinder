import styled from 'styled-components';

const FilterBox = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.blackLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default FilterBox;
