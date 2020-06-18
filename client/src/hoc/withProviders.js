import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from '../styles/theme';
import store from '../redux/index';
import GlobalStyle from '../styles/GlobalStyle';

const withProviders = (Component) => () => {
  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component />
        </ThemeProvider>
      </Provider>
    </StylesProvider>
  );
};

export default withProviders;
