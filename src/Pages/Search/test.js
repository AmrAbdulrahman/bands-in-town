import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'App';
import Search from '.';

describe('<Search>', () => {
  it('renders without crashing', () => {
    shallow(<Search store={store} />);
  });
});
