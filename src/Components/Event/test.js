import React from 'react';
import { mount, shallow } from 'enzyme';
import { shallowUntilTarget, connect, withStyles } from '../../Test/Utils';
import Typography from '@material-ui/core/Typography';

import Strings from 'Services/Strings';
import { store } from 'App';
import Event, { EventBase } from '.';
import EventDate from './EventDate';
import EventTime from './EventTime';
import EventVenu, { EventVenuBase } from './EventVenu';
import EventsActions from '../../Redux/Events';

const event = {
  id: '1',
  datetime: '2015-03-06T23:59:00',
  description: 'description',
  url: 'url',
  venue: {
    name: 'Secret Place',
    latitude: '49.984269',
    longitude: '8.675783',
    country: 'country',
    city: 'city',
  },
};

describe('<Event>', () => {
  it('passes properties down to sub compoenents correctly', () => {
    const root = shallowUntilTarget(<Event event={event} store={store} />, EventBase);

    expect(root.find('EventDate').prop('date')).toEqual(event.datetime);
    expect(root.find('EventTime').prop('time')).toEqual(event.datetime);
    expect(root.find('EventDescription').prop('description')).toEqual(event.description);

    const Map = root.find(connect(withStyles('EventVenuBase')));

    expect(Map.prop('id')).toEqual(event.id);
    expect(Map.prop('venue')).toEqual(event.venue);
  });
});

describe('<EventVenu>', () => {
  it('renders correctly', () => {
    store.dispatch(EventsActions.searchSuccess('John', [event]));

    const root = shallowUntilTarget(<EventVenu id={event.id} venue={event.venue} store={store} />, EventVenuBase);

    expect(root.find(withStyles('Modal')).prop('open')).toEqual(false);
    expect(root.find(`${withStyles('Typography')}#name`).prop('children')).toEqual(event.venue.name);
    expect(root.find(`${withStyles('Typography')}#country`).prop('children')).toEqual(event.venue.country);
    expect(root.find(`${withStyles('Typography')}#city`).prop('children')).toEqual(event.venue.city);

    const { latitude, longitude } = event.venue;
    const parsedLocation = { lat: +latitude, lng: +longitude };
    expect(root.find(withStyles('Map')).prop('location')).toEqual(parsedLocation);
  });

  it('opens', () => {
    store.dispatch(EventsActions.searchSuccess('John', [event]));
    store.dispatch(EventsActions.openEventLocation(event.id));

    const root = shallowUntilTarget(<EventVenu id={event.id} venue={event.venue} store={store} />, EventVenuBase);

    expect(root.find(withStyles('Modal')).prop('open')).toEqual(true);
  });
});


describe('<EventDate>', () => {
  it('formats date correctly based on default format', () => {
    const root = shallow(<EventDate date={event.datetime} />);
    expect(root.find(withStyles('Typography')).prop('children')).toEqual('Friday, March 6th 2015');
  });

  it('formats date correctly based on custom format', () => {
    const root = shallow(<EventDate date={event.datetime} toFormat={'YYYY-DD'} />);
    expect(root.find(withStyles('Typography')).prop('children')).toEqual('2015-06');
  });
});


describe('<EventTime>', () => {
  it('formats date correctly based on default format', () => {
    const root = shallow(<EventTime time={event.datetime} />);
    expect(root.find(withStyles('Typography')).prop('children')).toEqual('11:59 pm');
  });

  it('formats date correctly based on custom format', () => {
    const root = shallow(<EventTime time={event.datetime} toFormat={'hh'} />);
    expect(root.find(withStyles('Typography')).prop('children')).toEqual('11');
  });
});
