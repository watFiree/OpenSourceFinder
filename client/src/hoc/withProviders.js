import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const withProviders = (Component) => (props) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component props={props} />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default withProviders;
