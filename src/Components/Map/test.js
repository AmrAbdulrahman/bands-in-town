import React from 'react';
import { shallow } from 'enzyme';
import Map from '.';

describe('<Map>', () => {
  it('renders without crashing', () => {
    shallow(<Map />);
  });
});
