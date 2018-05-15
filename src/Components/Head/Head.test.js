import React from 'react';
import { shallow } from 'enzyme';
import Head from '.';

describe('<Head>', () => {
  it('renders without crashing', () => {
    shallow(<Head />);
  });
});
