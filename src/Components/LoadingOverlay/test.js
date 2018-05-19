import React from 'react';
import { shallow } from 'enzyme';
import LoadingOverlay from '.';

describe('<LoadingOverlay>', () => {
  it('renders without crashing', () => {
    shallow(<LoadingOverlay />);
  });
});
