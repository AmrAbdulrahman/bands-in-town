import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '.';

describe('<Header>', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
