import React from 'react';
import { mount } from 'enzyme';
import Artist from '.';

import Typography from '@material-ui/core/Typography';
import Strings from '../../Services/Strings';

import ArtistsActions from '../../Redux/Artists';
import { store } from '../../App';

describe('<Artist>', () => {
  it('renders placeholder user while loading', () => {
    const root = mount(<Artist store={store} name={'john'} />);
    const imagePlaceholder = require('../../Img/person-placeholder.jpg');

    expect(root.find('CardMedia').prop('image')).toEqual(imagePlaceholder);
    expect(root.find('Typography').prop('children')).toEqual('...');
    expect(root.find('Button#url').length).toEqual(0);
    expect(root.find('Button#facebook').length).toEqual(0);
  });

  it('renders artist by name', () => {
    // push an Artist to the store
    store.dispatch(ArtistsActions.getSuccess('john', {
      name: 'John',
      facebook_page_url: 'facebook_page_url',
      image_url: 'image_url',
      thumb_url: 'thumb_url',
      url: 'url',
    }));

    const root = mount(<Artist store={store} name={'john'} />);

    expect(root.find('CardMedia').prop('image')).toEqual('thumb_url');
    expect(root.find('Typography').prop('children')).toEqual('John');
    expect(root.find('Button#url').prop('href')).toEqual('url');
    expect(root.find('Button#facebook').prop('href')).toEqual('facebook_page_url');
  });
});
