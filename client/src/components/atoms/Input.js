import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const Input = styled(TextField)`
  background-color: ${({ theme }) => theme.purpleLight};
  padding: 12px;
  width: ${({ width }) => width || '30%'};
  .input:hover {
    color: ${({ theme }) => theme.purpleDark};
  }
  .MuiInput-underline:before {
    border-bottom: 1.5px solid ${({ theme }) => theme.purpleLight};
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid ${({ theme }) => theme.purpleDark};
  }
  .MuiInput-underline:hover:before {
    border-bottom: 2px solid ${({ theme }) => theme.purpleDark};
    opacity: 0.55;
  }
  .MuiInput-underline:focus:before {
    border-bottom: 2px solid ${({ theme }) => theme.purpleDark};
  }
`;

export default Input;
