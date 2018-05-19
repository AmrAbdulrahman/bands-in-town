import React from 'react';
import { shallow } from 'enzyme';
import LoadingBar from '.';

describe('<LoadingBar>', () => {
  it('renders without crashing', () => {
    shallow(<LoadingBar />);
  });
});
