import React from 'react';
import { shallow, mount } from 'enzyme';
import Snackbar from '.';
import { store } from '../../App';

describe('<Snackbar>', () => {
  it('renders without crashing', () => {
    shallow(<Snackbar store={store} />);
  });
});
