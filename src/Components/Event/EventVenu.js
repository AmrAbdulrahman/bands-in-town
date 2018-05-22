import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Map from 'Components/Map';
import EventsActions from '../../Redux/Events';
import styles from './styles';

export class EventVenuBase extends Component {
  render() {
    const { classes, id, venue, events } = this.props;
    const { name, country, city, latitude, longitude } = venue;
    const event = events.results.byId[id];

    return (
      <Modal
        open={Boolean(event.mapIsOpen)}
        onClose={() => this.props.closeEvenLocation(id)}
      >
        <div className={classes.modalContent}>
          <Typography id="name" variant="title" gutterBottom>
            {name}
          </Typography>

          <Typography id="country" variant="headline" gutterBottom>
            {country}
          </Typography>

          <Typography id="city" variant="subheading" gutterBottom>
            {city}
          </Typography>

          <Map location={{ lat: +latitude, lng: +longitude }} />
        </div>
      </Modal>
    );
  }
}

EventVenuBase.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string.isRequired,
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  closeEvenLocation: id => dispatch(EventsActions.closeEventLocation(id)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(EventVenuBase);
