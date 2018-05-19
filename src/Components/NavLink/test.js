import React from 'react';
import { shallow, mount } from 'enzyme';
import NavLink from '.';
import { store } from '../../App';

describe('<NavLink>', () => {
  it('renders without crashing', () => {
    shallow(<NavLink store={store} />);
  });
});
