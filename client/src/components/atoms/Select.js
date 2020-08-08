import styled from 'styled-components';
import SelectToEdit from '@material-ui/core/Select';

const Select = styled(SelectToEdit)`
  width: 10%;
  padding: 0;
  background-color: ${({ theme }) => theme.purpleLight};
  &:before {
    border-bottom-color: ${({ theme }) => theme.purpleDark};
  }
  &:after {
    border-bottom-color: ${({ theme }) => theme.purpleLight};
  }
  &:hover {
    background-color: ${({ theme }) => theme.purpleDark};
  }
  &:hover:before {
    border-bottom-color: ${({ theme }) => theme.purpleDark};
  }
  &.Mui-focused {
    background-color: ${({ theme }) => theme.purpleLight};
  }
`;

export default Select;
