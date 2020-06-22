import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: ${({ theme }) => theme.purpleLight};
  }
  &.MuiCheckbox-colorPrimary.Mui-checked {
    color: ${({ theme }) => theme.purpleLight};
  }
`;

export default StyledCheckbox;
