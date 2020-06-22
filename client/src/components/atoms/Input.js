import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const Input = styled(({ ...props }) => <TextField {...props} />)`
  .MuiInputBase-root {
    color: ${({ theme }) => theme.white};
  }
  label {
    color: ${({ theme }) => theme.purpleLight};
  }
  .MuiFormLabel-root {
    &.Mui-focused {
      color: ${({ theme }) => theme.purpleDark};
    }
  }
  .MuiInput-underline:before {
    border-bottom-color: ${({ theme }) => theme.purpleLight};
  }
  .MuiInput-underline:focus:before {
    border-bottom-color: ${({ theme }) => theme.purpleDark};
  }
  .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.purpleDark};
  }
  .MuiInput-underline:hover:before {
    border-bottom-color: ${({ theme }) => theme.purpleLight};
  }
`;

export default Input;
