import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { create } from 'jss';
import preset from 'jss-preset-default';
import JssProvider from 'react-jss/lib/JssProvider';
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Head from '../Components/Head';
import AppRouter from './Router';
import createStore from '../Redux';
import Theme from '../Theme';

import 'normalize.css';

const store = createStore();
const theme = createMuiTheme(Theme);

// Configure JSS
const jss = create({ plugins: [ ...preset().plugins ] });
jss.options.createGenerateClassName = createGenerateClassName;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <JssProvider jss={jss}>
          <MuiThemeProvider theme={theme}>
            <div>
              <Head />
              <AppRouter />
            </div>
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

export { store };

export default App;
