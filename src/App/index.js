import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { create } from 'jss';
import preset from 'jss-preset-default';
import JssProvider from 'react-jss/lib/JssProvider';
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName';

import Head from '../Components/Head';
import AppRouter from './Router';
import createStore from '../Redux';

import 'normalize.css';
// import '../Styles/Frutiger.css';
// import '../Styles/MaterialIcons.css';

const store = createStore();

// Configure JSS
const jss = create({ plugins: [ ...preset().plugins ] });
jss.options.createGenerateClassName = createGenerateClassName;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <JssProvider jss={jss}>
          <div>
            <Head />
            <AppRouter />
          </div>
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
