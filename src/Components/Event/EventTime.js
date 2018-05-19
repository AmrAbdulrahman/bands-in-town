import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

class EventTime extends Component {
  render() {
    const { time, fromFormat, toFormat } = this.props;

    return (
      <Typography id="time" gutterBottom variant="subheading">
        {moment(time, fromFormat).format(toFormat)}
      </Typography>
    );
  }
}

EventTime.propTypes = {
  time: PropTypes.string.isRequired,
  fromFormat: PropTypes.string,
  toFormat: PropTypes.string,
};

EventTime.defaultProps = {
  fromFormat: 'YYYY-MM-DDThh:mm:ss',
  toFormat: 'h:mm a',
};

export default EventTime;
