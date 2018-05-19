import React from 'react';
import { shallow } from 'enzyme';
import Search from '.';
import { store } from '../../App';

describe('<Search>', () => {
  it('renders without crashing', () => {
    shallow(<Search store={store} />);
  });
});
