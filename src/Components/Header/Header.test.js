import React from 'react';
import { shallow, mount } from 'enzyme';
import Header, { HeaderBase } from '.';

import Typography from '@material-ui/core/Typography';
import Strings from '../../Services/Strings';

describe('<Header>', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders title from Strings service', () => {
    const root = mount(<Header />);
    const Title = root.find(Typography);

    expect(Title.text()).toEqual(Strings.navHeadline);
  });
});
